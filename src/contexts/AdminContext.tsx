
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdminMode: boolean;
  isAuthenticated: boolean;
  toggleAdminMode: () => void;
  setAdminMode: (enabled: boolean) => void;
  logout: () => void;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load admin mode and authentication state from localStorage on mount
  useEffect(() => {
    const savedAdminMode = localStorage.getItem('adminMode');
    const savedAuth = localStorage.getItem('adminAuthenticated');
    
    if (savedAdminMode === 'true') {
      setIsAdminMode(true);
    }
    
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Save admin mode state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('adminMode', isAdminMode.toString());
  }, [isAdminMode]);

  // Save authentication state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('adminAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  const toggleAdminMode = () => {
    setIsAdminMode(prev => !prev);
  };

  const setAdminMode = (enabled: boolean) => {
    setIsAdminMode(enabled);
    setIsAuthenticated(enabled);
  };

  const logout = () => {
    setIsAdminMode(false);
    setIsAuthenticated(false);
    localStorage.removeItem('adminMode');
    localStorage.removeItem('adminAuthenticated');
  };

  return (
    <AdminContext.Provider value={{ 
      isAdminMode, 
      isAuthenticated, 
      toggleAdminMode, 
      setAdminMode, 
      logout 
    }}>
      {children}
    </AdminContext.Provider>
  );
};
