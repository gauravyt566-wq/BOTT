import { Navigate, Outlet } from 'react-router-dom';

export function AdminGuard() {
  const isAuthenticated = localStorage.getItem('adminKey') === 'Gx7Qv9Lm2Zr8Kp4Nx6Ta1W';

  if (!isAuthenticated) {
    return <Navigate to="/suwmwiuwnwkw" replace />;
  }

  return <Outlet />;
}
