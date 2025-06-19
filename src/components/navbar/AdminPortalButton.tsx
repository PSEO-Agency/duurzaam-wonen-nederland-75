
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

const AdminPortalButton: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check current session
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Only show admin portal button if user is authenticated
  if (!user) {
    return null;
  }

  return (
    <Button 
      asChild 
      variant="outline" 
      size="sm"
      className="hidden md:flex items-center gap-2"
    >
      <Link to="/admin/dashboard">
        <Shield size={16} />
        Admin Portal
      </Link>
    </Button>
  );
};

export default AdminPortalButton;
