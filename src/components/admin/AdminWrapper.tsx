
import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminBar from './AdminBar';
import { useAdmin } from '@/contexts/AdminContext';

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  const location = useLocation();
  const { isAdminMode } = useAdmin();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  // For admin routes, don't add the admin bar as AdminLayout handles it
  if (isAdminRoute) {
    return <>{children}</>;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Only show AdminBar if admin mode is enabled */}
      {isAdminMode && <AdminBar />}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default AdminWrapper;
