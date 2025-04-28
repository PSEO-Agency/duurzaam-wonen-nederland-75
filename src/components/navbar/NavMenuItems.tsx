
import React from 'react';
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';

interface MenuSection {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

const menuItemClass = "text-gray-700 hover:text-brand-green transition-colors duration-200 text-sm font-medium px-2";

export const mainNavItems: MenuSection[] = [
  { label: 'Projecten', href: '/projecten' },
  { label: 'Rentevrije Financiering*', href: '/rentevrije-financiering' },
  { label: 'Werkwijze', href: '/werkwijze' },
];

export const oplossingenItems: MenuSection[] = [
  { 
    label: 'Kunststof Schuifpuien', 
    href: '/kunststof-schuifpuien',
    description: 'Moderne schuifpuien voor uw woning of bedrijfspand'
  },
  { 
    label: 'Kunststof Deuren', 
    href: '/kunststof-deuren',
    description: 'Duurzame en energiezuinige deuroplossingen'
  },
  { 
    label: 'Gevelbekleding', 
    href: '/gevelbekleding',
    description: 'Moderne en onderhoudsarme geveloplossingen'
  },
];

export const productenItems: MenuSection[] = [
  { 
    label: 'Kunststof Kozijnen', 
    href: '/kunststof-kozijnen',
    description: 'Hoogwaardige kunststof kozijnen met uitstekende isolatie'
  },
  { 
    label: 'HSB wanden', 
    href: '#hsb-wanden',
    description: 'Houtskeletbouw voor duurzame wandconstructies'
  },
  { 
    label: 'Hellend dak', 
    href: '#hellend-dak',
    description: 'Optimale dakoplossingen voor elk type woning'
  },
  { 
    label: 'Plat dak', 
    href: '#plat-dak',
    description: 'Moderne en efficiënte platte dakconstructies'
  },
];

export const overOnsItems: MenuSection[] = [
  { 
    label: 'Ons team', 
    href: '/over-ons/team',
    description: 'Maak kennis met onze vakspecialisten'
  },
  { 
    label: 'Onze geschiedenis', 
    href: '/over-ons/geschiedenis',
    description: 'Meer dan 25 jaar ervaring in de branche'
  },
  { 
    label: 'Onze missie', 
    href: '/over-ons/missie',
    description: 'Kwaliteit en duurzaamheid als kernwaarden'
  },
  { 
    label: 'Duurzaamheid', 
    href: '/over-ons/duurzaamheid',
    description: 'Onze bijdrage aan een betere wereld'
  },
  { 
    label: 'Vacatures', 
    href: '/over-ons/vacatures',
    description: 'Word onderdeel van ons team'
  },
];

export const NavMenuItems = () => {
  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>
          Oplossingen
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto py-10 px-8">
              <div className="grid grid-cols-3 gap-10">
                <div className="col-span-3 md:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Oplossingen</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {oplossingenItems.map((item) => (
                      <Link 
                        key={item.label}
                        to={item.href}
                        className="group p-4 rounded-lg border hover:border-brand-green hover:shadow-md transition-all duration-200 flex flex-col gap-2"
                      >
                        <h4 className="font-medium text-gray-900 group-hover:text-brand-green">{item.label}</h4>
                        {item.description && (
                          <p className="text-sm text-gray-500">{item.description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="col-span-3 md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Producten</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productenItems.map((item) => (
                      item.href.startsWith('#') ? (
                        <a
                          key={item.label}
                          href={item.href}
                          className="group p-4 rounded-lg border hover:border-brand-green hover:shadow-md transition-all duration-200 flex flex-col gap-2"
                        >
                          <h4 className="font-medium text-gray-900 group-hover:text-brand-green">{item.label}</h4>
                          {item.description && (
                            <p className="text-sm text-gray-500">{item.description}</p>
                          )}
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="group p-4 rounded-lg border hover:border-brand-green hover:shadow-md transition-all duration-200 flex flex-col gap-2"
                        >
                          <h4 className="font-medium text-gray-900 group-hover:text-brand-green">{item.label}</h4>
                          {item.description && (
                            <p className="text-sm text-gray-500">{item.description}</p>
                          )}
                        </Link>
                      )
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
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto py-10 px-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Over ons</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {overOnsItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group p-4 rounded-lg border hover:border-brand-green hover:shadow-md transition-all duration-200 flex flex-col gap-2"
                  >
                    <h4 className="font-medium text-gray-900 group-hover:text-brand-green">{item.label}</h4>
                    {item.description && (
                      <p className="text-sm text-gray-500">{item.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
};
