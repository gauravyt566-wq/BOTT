import { Navigate, Outlet } from 'react-router-dom';

export function AdminGuard() {
  const isAuthenticated = localStorage.getItem('adminKey') === 'CYBERTRACE_ADMIN_2025';

  if (!isAuthenticated) {
    return <Navigate to="/suwmwiuwnwkw" replace />;
  }

  return <Outlet />;
}
