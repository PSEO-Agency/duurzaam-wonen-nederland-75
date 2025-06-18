
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AdminContextType {
  isAuthenticated: boolean;
  isAdminMode: boolean;
  user: User | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  toggleAdminMode: () => void;
  loading: boolean;
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
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Set up auth state listener and check for existing session
  useEffect(() => {
    console.log('Setting up admin auth state listener');
    
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session check:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      console.log('Cleaning up auth subscription');
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('Attempting admin login with Supabase auth:', email);
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        console.error('Login error:', error.message);
        setLoading(false);
        return false;
      }

      if (data.user && data.session) {
        console.log('Login successful!', data.user.email);
        // The auth state listener will handle setting the user and session
        return true;
      } else {
        console.log('Login failed - no user or session returned');
        setLoading(false);
        return false;
      }
    } catch (err) {
      console.error('Login error:', err);
      setLoading(false);
      return false;
    }
  };

  const logout = async () => {
    try {
      console.log('Admin logout initiated');
      setLoading(true);
      
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error.message);
      }
      
      // Reset all state
      setUser(null);
      setSession(null);
      setIsAdminMode(false);
      setLoading(false);
    } catch (err) {
      console.error('Logout error:', err);
      setLoading(false);
    }
  };

  const toggleAdminMode = () => {
    setIsAdminMode(prev => !prev);
  };

  const isAuthenticated = !!user && !!session;

  return (
    <AdminContext.Provider value={{ 
      isAuthenticated, 
      isAdminMode,
      user,
      session,
      login, 
      logout,
      toggleAdminMode,
      loading
    }}>
      {children}
    </AdminContext.Provider>
  );
};
