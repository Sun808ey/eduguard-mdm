import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { DashboardShell } from './pages/dashboard/DashboardShell.jsx';
import { AppsPage } from './pages/dashboard/AppsPage.jsx';
import { AuditLogPage } from './pages/dashboard/AuditLogPage.jsx';
import { DevicesPage } from './pages/dashboard/DevicesPage.jsx';
import { EnrollmentPage } from './pages/EnrollmentPage.jsx';
import { LandingPage } from './pages/LandingPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { PoliciesPage } from './pages/dashboard/PoliciesPage.jsx';
import { ReportsPage } from './pages/dashboard/ReportsPage.jsx';
import { SettingsPage } from './pages/dashboard/SettingsPage.jsx';
import { ViolationsPage } from './pages/dashboard/ViolationsPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="devices" element={<DevicesPage />} />
        <Route path="policies" element={<PoliciesPage />} />
        <Route path="apps" element={<AppsPage />} />
        <Route path="audit-log" element={<AuditLogPage />} />
        <Route path="violations" element={<ViolationsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
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
