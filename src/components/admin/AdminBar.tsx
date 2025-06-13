
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Lock, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAdminAuth } from '@/hooks/useAdminAuth';

const AdminBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout, adminUser } = useAdminAuth();

  if (!isAuthenticated) return null;

  const handleLogout = async () => {
    await logout();
    window.location.href = '/admin/login';
  };

  return (
    <div className={cn(
      "w-full bg-slate-800 text-white transition-all duration-300",
      isOpen ? "h-12" : "h-8"
    )}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lock size={16} />
          <span className="text-sm font-medium">
            Admin Mode - {adminUser?.email}
          </span>
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
            <Link to="/">
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
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Collapse" : "Expand"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
