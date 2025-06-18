
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Settings } from 'lucide-react';

const AdminModeToggle: React.FC = () => {
  const { isAdminMode, isAuthenticated, toggleAdminMode } = useAdmin();
  const navigate = useNavigate();

  const handleToggle = () => {
    if (!isAdminMode) {
      // Activating admin mode - redirect to login if not authenticated
      toggleAdminMode();
      if (!isAuthenticated) {
        navigate('/admin/login');
      }
    } else {
      // Deactivating admin mode
      toggleAdminMode();
    }
  };

  return (
    <Button
      variant={isAdminMode ? "destructive" : "outline"}
      size="sm"
      onClick={handleToggle}
      className="fixed bottom-4 right-4 z-50"
    >
      <Settings className="h-4 w-4 mr-2" />
      {isAdminMode ? 'Exit Admin' : 'Admin'}
    </Button>
  );
};

export default AdminModeToggle;
