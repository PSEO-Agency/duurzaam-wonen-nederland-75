
import React from 'react';
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface MenuSection {
  label: string;
  href: string;
}

const menuItemClass = "text-gray-700 hover:text-brand-green transition-colors duration-200 text-sm font-medium px-2";
const megaMenuItemClass = "flex items-center text-gray-700 hover:text-brand-green text-sm";
const megaMenuHeaderClass = "font-bold text-lg mb-4 text-gray-800";

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
          <ChevronRight size={16} className="mr-2" />
          <span>{item.label}</span>
        </a>
      );
    }
    return (
      <Link to={item.href} className={megaMenuItemClass}>
        <ChevronRight size={16} className="mr-2" />
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
        <NavigationMenuContent className="w-full">
          <div className="container mx-auto py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className={megaMenuHeaderClass}>Oplossingen</h3>
                <ul className="space-y-3">
                  {oplossingenItems.map((item) => (
                    <li key={item.label}>
                      {renderMenuLink(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={megaMenuHeaderClass}>Producten</h3>
                <ul className="space-y-3">
                  {productenItems.map((item) => (
                    <li key={item.label}>
                      {renderMenuLink(item)}
                    </li>
                  ))}
                </ul>
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
        <NavigationMenuContent className="w-full">
          <div className="container mx-auto py-6">
            <h3 className={megaMenuHeaderClass}>Over ons</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {overOnsItems.map((item) => (
                <li key={item.label}>
                  {renderMenuLink(item)}
                </li>
              ))}
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
};
