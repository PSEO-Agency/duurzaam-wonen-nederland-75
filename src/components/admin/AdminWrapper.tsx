
import React from 'react';
import { useLocation } from 'react-router-dom';

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  // Admin routes are handled by AdminLayout, public routes don't get admin UI
  return <>{children}</>;
};

export default AdminWrapper;
