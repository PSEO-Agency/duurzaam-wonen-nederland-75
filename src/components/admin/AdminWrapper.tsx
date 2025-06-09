
import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminBar from './AdminBar';

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  const location = useLocation();
  // In a real-world application, you would check if the user is an admin here
  const isAdmin = true; // Hardcoded for demonstration
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  if (!isAdmin) {
    return <>{children}</>;
  }
  
  // If we're on an admin route, don't show the AdminBar here since AdminLayout handles it
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
