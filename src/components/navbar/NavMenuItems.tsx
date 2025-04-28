
import React from 'react';
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface MenuSection {
  label: string;
  href: string;
}

const menuItemClass = "text-gray-700 hover:text-brand-green transition-colors duration-200 text-sm font-medium px-2";
const megaMenuItemClass = "flex items-center text-gray-700 hover:text-brand-green text-sm p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 w-full";
const megaMenuHeaderClass = "font-bold text-xl mb-6 text-gray-800";

export const mainNavItems: MenuSection[] = [
  { label: 'Projecten', href: '/projecten' },
  { label: 'Rentevrije Financiering*', href: '/rentevrije-financiering' },
  { label: 'Werkwijze', href: '/werkwijze' },
];

export const oplossingenItems: MenuSection[] = [
  { label: 'Kunststof Schuifpuien', href: '/kunststof-schuifpuien' },
  { label: 'Kunststof Deuren', href: '/kunststof-deuren' },
  { label: 'Gevelbekleding', href: '/gevelbekleding' },
];

export const productenItems: MenuSection[] = [
  { label: 'Kunststof Kozijnen', href: '/kunststof-kozijnen' },
  { label: 'HSB wanden', href: '#hsb-wanden' },
  { label: 'Hellend dak', href: '#hellend-dak' },
  { label: 'Plat dak', href: '#plat-dak' },
];

export const overOnsItems: MenuSection[] = [
  { label: 'Ons team', href: '/over-ons/team' },
  { label: 'Onze geschiedenis', href: '/over-ons/geschiedenis' },
  { label: 'Onze missie', href: '/over-ons/missie' },
  { label: 'Duurzaamheid', href: '/over-ons/duurzaamheid' },
  { label: 'Vacatures', href: '/over-ons/vacatures' },
];

export const NavMenuItems = () => {
  const renderMenuLink = (item: MenuSection) => {
    if (item.href.startsWith('#')) {
      return (
        <a href={item.href} className={megaMenuItemClass}>
          <div className="flex items-center">
            <ChevronRight size={16} className="mr-2 flex-shrink-0" />
            <span className="line-clamp-2">{item.label}</span>
          </div>
        </a>
      );
    }
    return (
      <Link to={item.href} className={megaMenuItemClass}>
        <div className="flex items-center">
          <ChevronRight size={16} className="mr-2 flex-shrink-0" />
          <span className="line-clamp-2">{item.label}</span>
        </div>
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
          <div className="w-full bg-white shadow-lg">
            <div className="max-w-7xl mx-auto py-8 px-4 w-full">
              <h3 className={megaMenuHeaderClass}>Ontdek onze oplossingen</h3>
              <div className="flex flex-col md:flex-row gap-8 mt-6">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Oplossingen</h4>
                  <div className="flex flex-col gap-4">
                    {oplossingenItems.map((item) => (
                      <div key={item.label} className="bg-white shadow-md border rounded-lg hover:shadow-lg transition-shadow">
                        {renderMenuLink(item)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Producten</h4>
                  <div className="flex flex-col gap-4">
                    {productenItems.map((item) => (
                      <div key={item.label} className="bg-white shadow-md border rounded-lg hover:shadow-lg transition-shadow">
                        {renderMenuLink(item)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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

      <NavigationMenuItem>
        <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>
          Over ons
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-full bg-white shadow-lg">
            <div className="max-w-7xl mx-auto py-8 px-4 w-full">
              <h3 className={megaMenuHeaderClass}>Over ons</h3>
              <div className="flex flex-col gap-4 mt-6">
                {overOnsItems.map((item) => (
                  <div key={item.label} className="bg-white shadow-md border rounded-lg hover:shadow-lg transition-shadow">
                    {renderMenuLink(item)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
};
