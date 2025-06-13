
import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminBar from './AdminBar';

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoginRoute = location.pathname === '/admin/login';
  
  // For admin login route, don't show the admin bar
  if (isLoginRoute) {
    return <>{children}</>;
  }
  
  // For other admin routes, don't add the admin bar as AdminLayout handles it
  if (isAdminRoute) {
    return <>{children}</>;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <AdminBar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default AdminWrapper;
