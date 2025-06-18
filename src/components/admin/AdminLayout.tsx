
import React from 'react';
import AdminBar from './AdminBar';
import AdminSidebar from './AdminSidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminBar />
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />
        <main className="flex-1 overflow-auto bg-gray-50">
          <ScrollArea className="h-full w-full">
            <div className="container mx-auto px-6 py-8">
              {children}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
