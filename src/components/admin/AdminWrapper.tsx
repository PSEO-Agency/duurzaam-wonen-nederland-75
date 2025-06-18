
import React from 'react';

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  // Simply render children - admin bar is now handled by AdminLayout for admin routes
  return <>{children}</>;
};

export default AdminWrapper;
