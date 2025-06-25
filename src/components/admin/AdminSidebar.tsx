
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, MapPin, Settings, Building2, Image, Package } from 'lucide-react';
import { cn } from '@/lib/utils';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard
    },
    {
      title: 'Pagina\'s',
      href: '/admin/pages',
      icon: FileText
    },
    {
      title: 'Products',
      href: '/admin/products',
      icon: Package
    },
    {
      title: 'Locaties',
      href: '/admin/locations',
      icon: MapPin
    },
    {
      title: 'Services',
      href: '/admin/services',
      icon: Settings
    },
    {
      title: 'Stad Services',
      href: '/admin/city-services',
      icon: Building2
    },
    {
      title: 'Projecten',
      href: '/admin/projects',
      icon: Image
    },
    {
      title: 'OG Images',
      href: '/admin/og-images',
      icon: Image
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
      </div>
      <nav className="px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium mb-1 transition-colors",
                isActive 
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
