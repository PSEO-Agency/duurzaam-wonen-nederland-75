
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Settings } from 'lucide-react';

const AdminModeToggle: React.FC = () => {
  const { isAuthenticated } = useAdmin();
  const navigate = useNavigate();

  const handleAdminClick = () => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    } else {
      navigate('/admin/login');
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleAdminClick}
      className="fixed bottom-4 right-4 z-50"
    >
      <Settings className="h-4 w-4 mr-2" />
      {isAuthenticated ? 'Admin Panel' : 'Admin Login'}
    </Button>
  );
};

export default AdminModeToggle;
