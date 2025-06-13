
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import bcrypt from 'bcryptjs';

interface AdminUser {
  id: string;
  email: string;
  is_active: boolean;
}

export const useAdminAuth = () => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        // Check if user is admin
        const { data: adminData } = await supabase
          .from('admin_auth')
          .select('id, email, is_active')
          .eq('email', session.user.email)
          .single();
        
        if (adminData && adminData.is_active) {
          setAdminUser(adminData);
        }
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // First check if admin exists in our table
      const { data: adminData, error: adminError } = await supabase
        .from('admin_auth')
        .select('*')
        .eq('email', email)
        .eq('is_active', true)
        .single();

      if (adminError || !adminData) {
        throw new Error('Invalid credentials');
      }

      // For now, we'll use a simple password check
      // In production, you should hash the password properly
      if (password !== 'admin123') {
        throw new Error('Invalid credentials');
      }

      // Sign in with Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: 'temp_supabase_password', // This should match what's in Supabase Auth
      });

      if (error) {
        // If user doesn't exist in Supabase Auth, create them
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password: 'temp_supabase_password',
          options: {
            emailRedirectTo: `${window.location.origin}/admin/dashboard`
          }
        });
        
        if (signUpError) throw signUpError;
      }

      setAdminUser({
        id: adminData.id,
        email: adminData.email,
        is_active: adminData.is_active
      });

      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setAdminUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return {
    adminUser,
    isLoading,
    login,
    logout,
    isAuthenticated: !!adminUser
  };
};
