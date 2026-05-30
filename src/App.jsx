import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { EnrollmentPage } from './pages/EnrollmentPage.jsx';
import { LandingPage } from './pages/LandingPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/enrollment" element={<EnrollmentPage />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="/login.html" element={<Navigate to="/login" replace />} />
      <Route path="/dashboard.html" element={<Navigate to="/dashboard" replace />} />
      <Route path="/enrollment.html" element={<Navigate to="/enrollment" replace />} />
      <Route path="/404.html" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
