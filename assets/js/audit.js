import { RECENT_AUDIT_LOG } from './mock-data.js';

function renderAuditControls(container) {
  const controls = document.createElement('div');
  controls.className = 'audit-controls';
  controls.innerHTML = `
    <button class="btn btn-outline" type="button" data-audit-verify>Verify Chain</button>
    <span class="audit-result muted" data-audit-result aria-live="polite">Chain status: unknown</span>
  `;
  container.prepend(controls);

  const btn = controls.querySelector('[data-audit-verify]');
  const result = controls.querySelector('[data-audit-result]');

  btn.addEventListener('click', () => {
    const verification = verifyChain(RECENT_AUDIT_LOG);
    if (verification.ok) {
      result.textContent = `Verified: ${verification.message}`;
      result.classList.remove('audit-result--bad');
      result.classList.add('audit-result--ok');
    } else {
      result.textContent = `Broken: ${verification.message}`;
      result.classList.remove('audit-result--ok');
      result.classList.add('audit-result--bad');
    }
  });
}

function verifyChain(entries) {
  if (!Array.isArray(entries) || entries.length === 0) return { ok: false, message: 'no entries' };

  // Check timestamps are in descending order and hashes are unique
  const seen = new Set();
  let lastTs = Number.POSITIVE_INFINITY;

  for (const e of entries) {
    const ts = new Date(e.timestamp).getTime();
    if (!e.hash || typeof e.hash !== 'string') return { ok: false, message: 'missing hash' };
    if (seen.has(e.hash)) return { ok: false, message: 'duplicate hash detected' };
    seen.add(e.hash);
    if (ts > lastTs) return { ok: false, message: 'timestamps out of order' };
    lastTs = ts;
  }

  return { ok: true, message: 'no duplicates; timestamps descending' };
}

export function initAuditSection() {
  const container = document.querySelector('[data-recent-audit]');
  if (!container) return;
  renderAuditControls(container);
}

export default { initAuditSection };
