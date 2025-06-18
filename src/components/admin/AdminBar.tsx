
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Settings, LogOut, Eye } from 'lucide-react';

const AdminBar: React.FC = () => {
  const { isAdminMode, isAuthenticated, toggleAdminMode, logout } = useAdmin();
  const navigate = useNavigate();

  if (!isAdminMode) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white px-4 py-2 z-50 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="font-medium">Admin Mode Active</span>
        {isAuthenticated && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/admin/dashboard')}
            className="text-white hover:bg-red-700"
          >
            <Settings className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleAdminMode}
          className="text-white hover:bg-red-700"
        >
          <Eye className="h-4 w-4 mr-2" />
          Exit Admin
        </Button>
        {isAuthenticated && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-white hover:bg-red-700"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default AdminBar;
