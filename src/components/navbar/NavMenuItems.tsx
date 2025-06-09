
import React from 'react';
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useSolutions, useSolutionCategories } from '@/hooks/useSolutions';

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
  const { data: solutions = [], isLoading: isLoadingSolutions } = useSolutions();
  const { data: categories = [], isLoading: isLoadingCategories } = useSolutionCategories();

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

  const renderSolutionLink = (solution: any) => {
    return (
      <Link to={`/${solution.slug}`} className={dropdownItemClass}>
        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
        <span>{solution.name}</span>
      </Link>
    );
  };

  // Group solutions by category
  const solutionsByCategory = categories.map(category => ({
    ...category,
    solutions: solutions.filter(solution => solution.category_id === category.id)
  }));

  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>
          Oplossingen
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[500px] bg-white p-4">
            {isLoadingSolutions || isLoadingCategories ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-sm text-gray-500">Laden...</div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-6">
                  {solutionsByCategory.map((category) => (
                    category.solutions.length > 0 && (
                      <div key={category.id}>
                        <h4 className="font-medium text-gray-900 mb-2">{category.name}</h4>
                        <ul className="space-y-1">
                          {category.solutions.slice(0, 4).map((solution) => (
                            <li key={solution.id}>
                              {renderSolutionLink(solution)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link 
                    to="/oplossingen" 
                    className="text-brand-green font-medium hover:underline"
                  >
                    Bekijk alle oplossingen →
                  </Link>
                </div>
              </>
            )}
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
          Admin
        </NavigationMenuTrigger>
        <NavigationMenuContent className="right-0">
          <div className="bg-white p-4 w-auto">
            <h3 className="font-semibold text-lg mb-2">Admin Panel</h3>
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
    </>
  );
};
