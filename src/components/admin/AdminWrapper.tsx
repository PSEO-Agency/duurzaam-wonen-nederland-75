
import React from 'react';
import AdminBar from './AdminBar';

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  // In a real-world application, you would check if the user is an admin here
  const isAdmin = true; // Hardcoded for demonstration
  
  if (!isAdmin) {
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
