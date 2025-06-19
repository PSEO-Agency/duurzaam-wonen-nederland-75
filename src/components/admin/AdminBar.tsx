
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Lock, LogOut, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AdminBar: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Uitgelogd",
        description: "Je bent succesvol uitgelogd.",
      });
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Fout bij uitloggen",
        description: "Er is een fout opgetreden bij het uitloggen.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="w-full bg-slate-800 text-white h-12">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lock size={16} />
          <span className="text-sm font-medium">Admin Panel</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-slate-700"
          >
            <Link to="/admin/dashboard">
              <LayoutDashboard size={16} className="mr-2" />
              Dashboard
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-slate-700"
          >
            <Link to="/" target="_blank">
              <ExternalLink size={16} className="mr-2" />
              View Site
            </Link>
          </Button>

          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-slate-700"
            onClick={handleLogout}
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
