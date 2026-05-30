import { Chip } from '../../components/ui.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

export function SectionPage({ title, subtitle, chips = [], actions = null, children }) {
  useDocumentTitle(`EduGuard MDM — ${title}`);

  return (
    <main className="dashboard-main dashboard-section-page">
      <header className="dashboard-section-page__header">
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="dashboard-section-page__meta">
          {chips.map((chip) => <Chip key={chip}>{chip}</Chip>)}
        </div>
        {actions ? <div className="dashboard-section-page__actions">{actions}</div> : null}
      </header>

      {children}
    </main>
  );
}