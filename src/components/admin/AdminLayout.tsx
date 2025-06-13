
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminBar from './AdminBar';
import AdminSidebar from './AdminSidebar';
import ProtectedRoute from './ProtectedRoute';
import { ScrollArea } from '@/components/ui/scroll-area';

const AdminLayout: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <AdminBar />
        <div className="flex flex-1 overflow-hidden">
          <AdminSidebar />
          <main className="flex-1 overflow-auto bg-gray-50">
            <ScrollArea className="h-full w-full">
              <div className="container mx-auto px-6 py-8">
                <Outlet />
              </div>
            </ScrollArea>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
