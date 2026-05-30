import { Link } from 'react-router-dom';
import logoUrl from '../../assets/img/logo.svg';

export { logoUrl };

export function LogoBrand({ to = '/', compact = false, className = '', ariaLabel = 'EduGuard MDM home' }) {
  return (
    <Link className={className} to={to} aria-label={ariaLabel}>
      <img src={logoUrl} alt="EduGuard MDM" className="brand__logo" />
      <span className="brand__text">
        <strong>EduGuard</strong>
        {compact ? <small>MDM</small> : <span>MDM</span>}
      </span>
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      {eyebrow ? <span className="section-label">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export function Chip({ children, className = '', title }) {
  return (
    <span className={`chip ${className}`.trim()} title={title}>
      {children}
    </span>
  );
}

export function Badge({ children, tone = 'default', className = '' }) {
  const toneClass = tone === 'default' ? '' : `badge--${tone}`;
  return <span className={`badge ${toneClass} ${className}`.trim()}>{children}</span>;
}

export function ModalShell({ title, titleId, onClose, children, className = '', actions = null }) {
  return (
    <div className="modal-backdrop" style={{ display: 'flex' }}>
      <section className={`modal ${className}`.trim()} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="modal__header">
          <h2 id={titleId}>{title}</h2>
          <button className="modal-close" type="button" aria-label={`Close ${title.toLowerCase()}`} onClick={onClose}>×</button>
        </div>
        <div className="modal__body">
          {children}
          {actions}
        </div>
      </section>
    </div>
  );
}
