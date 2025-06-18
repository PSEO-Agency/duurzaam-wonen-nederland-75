
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Settings, LogOut, Home } from 'lucide-react';

const AdminBar: React.FC = () => {
  const { isAuthenticated, logout } = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Only show on admin routes when authenticated
  if (!isAuthenticated || !location.pathname.startsWith('/admin')) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="font-medium">Admin Panel</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/admin/dashboard')}
          className="text-white hover:bg-blue-700"
        >
          <Settings className="h-4 w-4 mr-2" />
          Dashboard
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleGoHome}
          className="text-white hover:bg-blue-700"
        >
          <Home className="h-4 w-4 mr-2" />
          View Site
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="text-white hover:bg-blue-700"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminBar;
