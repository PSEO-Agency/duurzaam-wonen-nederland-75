
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ShieldOff } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const AdminModeToggle: React.FC = () => {
  const { isAdminMode, toggleAdminMode } = useAdmin();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleAdminMode}
      className="text-white hover:bg-slate-700"
    >
      {isAdminMode ? (
        <>
          <ShieldOff size={16} className="mr-2" />
          Exit Admin
        </>
      ) : (
        <>
          <Shield size={16} className="mr-2" />
          Admin Mode
        </>
      )}
    </Button>
  );
};

export default AdminModeToggle;
