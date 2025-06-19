
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

interface AdminAuthGuardProps {
  children: React.ReactNode;
}

const AdminAuthGuard: React.FC<AdminAuthGuardProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check current session
    const checkAuth = async () => {
      console.log('AdminAuthGuard: Checking authentication');
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setIsLoading(false);

      if (!session) {
        console.log('AdminAuthGuard: No session found, redirecting to login');
        navigate('/admin/login', { 
          replace: true,
          state: { from: location.pathname }
        });
      } else {
        console.log('AdminAuthGuard: User authenticated:', session.user.email);
      }
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('AdminAuthGuard: Auth state changed:', event);
        setUser(session?.user ?? null);
        
        if (event === 'SIGNED_OUT' || !session) {
          navigate('/admin/login', { replace: true });
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-800 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return <>{children}</>;
};

export default AdminAuthGuard;
