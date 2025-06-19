
import React from 'react';
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';

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

// Kunststof Kozijnen menu items organized in 3 columns
const kunststofKozijnenItems = {
  column1: [
    { label: 'Wat zijn kunststof kozijnen?', href: '/kunststof-kozijnen#wat-zijn' },
    { label: 'Voordelen kunststof kozijnen', href: '/kunststof-kozijnen#voordelen' },
    { label: 'Schüco Kozijnen', href: '/kunststof-kozijnen/schuco' },
  ],
  column2: [
    { label: 'Kozijnen Montage', href: '/kunststof-kozijnen/montage' },
    { label: 'Kozijnen Prijzen', href: '/kunststof-kozijnen/prijzen' },
    { label: 'Type Kozijn', href: '/kunststof-kozijnen/types' },
  ],
  column3: [
    { label: 'Kleur Kozijn', href: '/kunststof-kozijnen/kleuren' },
    { label: 'Kozijn Afmeting', href: '/kunststof-kozijnen/afmetingen' },
    { label: 'Kozijn Profielen', href: '/kunststof-kozijnen/profielen' },
  ]
};

export const NavMenuItems = () => {
  const { data: products = [] } = useProducts();

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

  // Transform all products to menu items
  const allProductItems = products.map(product => ({
    label: product.name,
    href: `/${product.slug}`
  }));

  // Split products into two columns
  const midPoint = Math.ceil(allProductItems.length / 2);
  const leftColumnItems = allProductItems.slice(0, midPoint);
  const rightColumnItems = allProductItems.slice(midPoint);

  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>
          Kunststof Kozijnen
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="bg-white p-4 min-w-[600px]">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Algemeen</h4>
                <ul className="space-y-1">
                  {kunststofKozijnenItems.column1.map((item) => (
                    <li key={item.label}>
                      {renderMenuLink(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Services</h4>
                <ul className="space-y-1">
                  {kunststofKozijnenItems.column2.map((item) => (
                    <li key={item.label}>
                      {renderMenuLink(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Opties</h4>
                <ul className="space-y-1">
                  {kunststofKozijnenItems.column3.map((item) => (
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

      <NavigationMenuItem>
        <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>
          Oplossingen
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="bg-white p-4 min-w-[500px]">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex-1">
                <ul className="space-y-1">
                  {leftColumnItems.map((item) => (
                    <li key={item.label}>
                      {renderMenuLink(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <ul className="space-y-1">
                  {rightColumnItems.map((item) => (
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
    </>
  );
};
