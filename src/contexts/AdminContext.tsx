
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      
      console.log('Attempting login with:', { email });
      
      // Query the admin_auth table to validate credentials
      const { data, error } = await supabase
        .from('admin_auth')
        .select('email, password_hash, is_active')
        .eq('email', email)
        .eq('is_active', true)
        .single();

      console.log('Database response:', { data, error });

      if (error || !data) {
        console.log('No user found or database error:', error);
        return false;
      }

      // Simple password verification (plaintext for now)
      const isPasswordValid = password === data.password_hash;
      
      if (isPasswordValid) {
        console.log('Login successful!');
        setIsAuthenticated(true);
        localStorage.setItem('adminAuthenticated', 'true');
        return true;
      } else {
        console.log('Password verification failed');
        return false;
      }
    } catch (err) {
      console.error('Login error:', err);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
  };

  return (
    <AdminContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout 
    }}>
      {children}
    </AdminContext.Provider>
  );
};
