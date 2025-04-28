import { NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface MenuSection {
  label: string;
  href: string;
}

const menuItemClass = "text-gray-700 hover:text-brand-green transition-colors duration-200 text-sm font-medium px-2";
const megaMenuItemClass = "flex items-center text-gray-700 hover:text-brand-green text-sm";
const megaMenuHeaderClass = "font-bold text-lg mb-2";

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
        <NavigationMenuContent className="absolute left-0 right-0 w-screen bg-white p-6 rounded-b-md shadow-lg">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className={megaMenuHeaderClass}>Oplossingen</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {oplossingenItems.map((item) => (
                    <Link 
                      key={item.label}
                      to={item.href}
                      className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-white font-medium text-lg">{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className={megaMenuHeaderClass}>Producten</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {productenItems.map((item) => (
                    <Link 
                      key={item.label}
                      to={item.href}
                      className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-white font-medium text-lg">{item.label}</span>
                      </div>
                    </Link>
                  ))}
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
        <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg">
          <div className="p-4 w-[400px]">
            <h3 className={megaMenuHeaderClass}>Over ons</h3>
            <ul className="space-y-2">
              {overOnsItems.map((item) => (
                <li key={item.label}>
                  <NavigationMenuLink asChild>
                    {renderMenuLink(item)}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
};
