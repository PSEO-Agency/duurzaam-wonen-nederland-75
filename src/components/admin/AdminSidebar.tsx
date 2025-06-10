
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Layers, 
  Puzzle,
  Settings,
  Users,
  Home,
  MapPin,
  Briefcase,
  Building,
  Package
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  label: string;
  icon: React.ElementType;
  path: string;
}

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  
  const menuItems: MenuItem[] = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Pages", icon: FileText, path: "/admin/pages" },
    { label: "Templates", icon: Layers, path: "/admin/templates" },
    { label: "Sections", icon: Puzzle, path: "/admin/sections" },
    { label: "Products", icon: Package, path: "/admin/products" },
    { label: "Locations", icon: MapPin, path: "/admin/locations" },
    { label: "Services", icon: Briefcase, path: "/admin/services" },
    { label: "City Services", icon: Building, path: "/admin/city-services" },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
    { label: "Users", icon: Users, path: "/admin/users" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 mb-6">
          <Home size={24} className="text-brand-green" />
          <span className="font-semibold text-lg">Duurzaam Wonen</span>
        </Link>
        
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-brand-green text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
