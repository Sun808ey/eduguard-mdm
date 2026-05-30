import { Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export function NotFoundPage() {
  useBodyClass('not-found-page');
  useDocumentTitle('EduGuard MDM — Not Found');

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem', textAlign: 'center' }}>
      <div>
        <h1>404 — Page not found</h1>
        <p>The requested page was not found.</p>
        <Link className="btn btn-primary" to="/">Return home</Link>
      </div>
    </main>
  );
}
