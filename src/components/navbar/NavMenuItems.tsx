
import React from 'react';
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import { useAdmin } from '@/contexts/AdminContext';
import AdminModeToggle from '@/components/admin/AdminModeToggle';

interface MenuSection {
  label: string;
  href: string;
}

const menuItemClass = "text-gray-700 hover:text-brand-green transition-colors duration-200 text-sm font-medium px-2";
const dropdownItemClass = "flex items-center text-gray-700 hover:text-brand-green transition-colors duration-200 py-2 text-sm";

export const mainNavItems: MenuSection[] = [
  { label: 'Projecten', href: '/projecten' },
  { label: 'Rentevrije Financiering*', href: '/rentevrije-financiering' },
  { label: 'Werkwijze', href: '/werkwijze' },
  { label: 'Vacatures', href: '/vacatures' },
];

export const overOnsItems: MenuSection[] = [
  { label: 'Ons team', href: '/over-ons/team' },
  { label: 'Onze missie', href: '/over-ons/missie' },
  { label: 'Duurzaamheid', href: '/over-ons/duurzaamheid' },
  { label: 'Vacatures', href: '/over-ons/vacatures' },
];

export const adminItems: MenuSection[] = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Pagina\'s', href: '/admin/pages' },
  { label: 'Locaties', href: '/admin/locations' },
  { label: 'Diensten', href: '/admin/services' },
  { label: 'Stad Diensten', href: '/admin/city-services' },
];

export const NavMenuItems = () => {
  const { data: products = [] } = useProducts();
  const { isAuthenticated } = useAdmin();

  const renderMenuLink = (item: MenuSection) => {
    if (item.href.startsWith('#')) {
      return (
        <a href={item.href} className={dropdownItemClass}>
          <ChevronRight size={16} className="mr-2 flex-shrink-0" />
          <span>{item.label}</span>
        </a>
      );
    }
    return (
      <Link to={item.href} className={dropdownItemClass}>
        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>
          Oplossingen
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="bg-white p-3 shadow-lg rounded-md">
            <ul className="space-y-1 min-w-[200px] max-w-[250px]">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link to={`/${product.slug}`} className="flex items-center text-gray-700 hover:text-brand-green transition-colors duration-200 py-2 text-sm whitespace-nowrap">
                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                    <span className="truncate">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {mainNavItems.map((item) => (
        <NavigationMenuItem key={item.label}>
          <NavigationMenuLink asChild>
            <Link to={item.href} className={`${menuItemClass}`}>
              {item.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}

      {isAuthenticated && (
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>
            Admin
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="bg-white p-4 shadow-lg rounded-md min-w-[200px] max-w-[250px]">
              <h3 className="font-semibold text-lg mb-2">Admin Panel</h3>
              <div className="mb-3">
                <AdminModeToggle />
              </div>
              <ul className="space-y-1">
                {adminItems.map((item) => (
                  <li key={item.label}>
                    {renderMenuLink(item)}
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )}
    </>
  );
};
