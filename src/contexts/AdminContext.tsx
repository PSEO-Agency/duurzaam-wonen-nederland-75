
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAuthenticated: boolean;
  isAdminMode: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  toggleAdminMode: () => void;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Load authentication state from localStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('adminAuthenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      console.log('Attempting admin login with email:', email);
      
      // Query the admin_auth table to validate credentials
      const { data, error } = await supabase
        .from('admin_auth')
        .select('email, password_hash, is_active')
        .eq('email', email.trim())
        .eq('is_active', true)
        .maybeSingle();

      console.log('Database query result:', { data, error });

      if (error) {
        console.error('Database error during login:', error);
        return false;
      }

      if (!data) {
        console.log('No admin user found with email:', email);
        return false;
      }

      console.log('Found admin user, verifying password...');
      
      // Simple password verification (plaintext for now)
      const isPasswordValid = password.trim() === data.password_hash.trim();
      
      if (isPasswordValid) {
        console.log('Admin login successful!');
        setIsAuthenticated(true);
        localStorage.setItem('adminAuthenticated', 'true');
        return true;
      } else {
        console.log('Password verification failed');
        console.log('Expected:', data.password_hash);
        console.log('Received:', password);
        return false;
      }
    } catch (err) {
      console.error('Login error:', err);
      return false;
    }
  };

  const logout = () => {
    console.log('Admin logout initiated');
    setIsAuthenticated(false);
    setIsAdminMode(false);
    localStorage.removeItem('adminAuthenticated');
  };

  const toggleAdminMode = () => {
    setIsAdminMode(prev => !prev);
  };

  return (
    <AdminContext.Provider value={{ 
      isAuthenticated, 
      isAdminMode,
      login, 
      logout,
      toggleAdminMode
    }}>
      {children}
    </AdminContext.Provider>
  );
};
