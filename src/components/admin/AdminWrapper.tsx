
import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminBar from './AdminBar';

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  if (!isAdminRoute) {
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
