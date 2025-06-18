
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
  setAdminMode: (enabled: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: React.ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Load admin mode state from localStorage on mount
  useEffect(() => {
    const savedAdminMode = localStorage.getItem('adminMode');
    if (savedAdminMode === 'true') {
      setIsAdminMode(true);
    }
  }, []);

  // Save admin mode state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('adminMode', isAdminMode.toString());
  }, [isAdminMode]);

  const toggleAdminMode = () => {
    setIsAdminMode(prev => !prev);
  };

  const setAdminMode = (enabled: boolean) => {
    setIsAdminMode(enabled);
  };

  return (
    <AdminContext.Provider value={{ isAdminMode, toggleAdminMode, setAdminMode }}>
      {children}
    </AdminContext.Provider>
  );
};
