
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from 'react-router-dom';
import SearchCommandMenu from '@/components/search/SearchCommandMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prevState => !prevState);
  }, []);
  
  const topNavItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Kennisbank', href: '/kennisbank' },
    { label: 'Werkgebied', href: '/werkgebied' },
    { label: 'Contact', href: '/contact' },
  ];
  
  const mainNavItems = [
    { label: 'Projecten', href: '/projecten' },
    { label: 'Rentevrije Financiering*', href: '/rentevrije-financiering' },
    { label: 'Werkwijze', href: '/werkwijze' },
  ];

  const oplossingenItems = [
    { label: 'Kunststof Kozijnen', href: '/kunststof-kozijnen' },
    { label: 'Kunststof Schuifpuien', href: '/kunststof-schuifpuien' },
    { label: 'Kunststof Deuren', href: '/kunststof-deuren' },
  ];

  const productenItems = [
    { label: 'Kunststof Kozijnen', href: '/kunststof-kozijnen' },
    { label: 'HSB wanden', href: '#hsb-wanden' },
    { label: 'Hellend dak', href: '#hellend-dak' },
    { label: 'Plat dak', href: '#plat-dak' },
  ];

  const overOnsItems = [
    { label: 'Ons team', href: '/over-ons/team' },
    { label: 'Onze geschiedenis', href: '/over-ons/geschiedenis' },
    { label: 'Onze missie', href: '/over-ons/missie' },
    { label: 'Duurzaamheid', href: '/over-ons/duurzaamheid' },
    { label: 'Vacatures', href: '/over-ons/vacatures' },
  ];
  
  const menuItemClass = "text-gray-700 hover:text-brand-green transition-colors duration-200 text-sm font-medium";
  const mobileMenuItemClass = "block py-2 text-gray-700 hover:text-brand-green text-sm font-medium";
  const megaMenuItemClass = "flex items-center text-gray-700 hover:text-brand-green text-sm";
  const megaMenuHeaderClass = "font-bold text-lg mb-2";
  
  const renderNavItem = useCallback((item: { label: string; href: string }, className: string, onClick?: () => void) => {
    if (item.href.startsWith('#')) {
      return (
        <a
          key={item.label}
          href={item.href}
          className={className}
          onClick={onClick}
        >
          {item.label}
        </a>
      );
    } else {
      return (
        <Link
          key={item.label}
          to={item.href}
          className={className}
          onClick={onClick}
        >
          {item.label}
        </Link>
      );
    }
  }, []);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex">
              {topNavItems.map((item) => (
                renderNavItem(
                  item, 
                  "text-white text-sm mx-3 hover:text-gray-300 transition-colors"
                )
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className={cn(
          'bg-white transition-all duration-300 ease-in-out py-3 border-b',
          isScrolled ? 'shadow-sm' : ''
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png" 
                alt="Duurzaam Wonen Logo" 
                className="h-12"
              />
            </Link>
            
            <div className="flex md:hidden items-center gap-2 mx-auto">
              <Button 
                asChild
                size="icon" 
                variant="ghost" 
                className="text-gray-700 hover:text-brand-green hover:bg-brand-green/10 h-9 w-9"
              >
                <a href="tel:0533030213">
                  <Phone size={20} />
                </a>
              </Button>
              
              <Button 
                asChild
                size="icon" 
                variant="ghost" 
                className="text-gray-700 hover:text-brand-green hover:bg-brand-green/10 h-9 w-9"
              >
                <a href="https://wa.me/+310533030213">
                  <MessageCircle size={20} />
                </a>
              </Button>
            </div>
            
            <div className="hidden md:block">
              <SearchCommandMenu />
            </div>
            
            <NavigationMenu className="hidden md:flex ml-6">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>Oplossingen</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg">
                    <div className="grid grid-cols-2 gap-10 p-4 w-[600px]">
                      <div>
                        <h3 className={megaMenuHeaderClass}>Oplossingen</h3>
                        <ul className="space-y-2">
                          {oplossingenItems.map((item) => (
                            <li key={item.label}>
                              <NavigationMenuLink asChild>
                                {renderNavItem(item, megaMenuItemClass)}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className={megaMenuHeaderClass}>Producten</h3>
                        <ul className="space-y-2">
                          {productenItems.map((item) => (
                            <li key={item.label}>
                              <NavigationMenuLink asChild>
                                {renderNavItem(item, megaMenuItemClass)}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      {renderNavItem(item, `${menuItemClass} px-4 py-2`)}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`${menuItemClass} bg-transparent`}>Over ons</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg">
                    <div className="p-4 w-[400px]">
                      <h3 className={megaMenuHeaderClass}>Over ons</h3>
                      <ul className="space-y-2">
                        {overOnsItems.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              {renderNavItem(item, megaMenuItemClass)}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="hidden md:flex items-center gap-3 ml-4">              
              <Button asChild className="bg-brand-green text-white hover:bg-brand-green-dark transition-colors">
                <a href="tel:0533030213" className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>053-3030213</span>
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-brand-green text-brand-green hover:bg-brand-green/10 flex items-center gap-2"
              >
                <a href="https://wa.me/+310533030213">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
            
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg overflow-y-auto max-h-[80vh]">
          <div className="container mx-auto px-4 py-3">
            <div className="mb-4">
              <SearchCommandMenu isMobile={true} />
            </div>
            
            <Accordion type="single" collapsible className="w-full mb-4">
              <AccordionItem value="oplossingen" className="border-b">
                <AccordionTrigger className="py-3 text-base font-medium">
                  Oplossingen
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4 py-2">
                    <h4 className="font-medium text-sm text-gray-500 mb-2">Oplossingen</h4>
                    <ul className="space-y-3">
                      {oplossingenItems.map((item) => (
                        <li key={item.label}>
                          <Link 
                            to={item.href} 
                            className="flex items-center text-gray-700 hover:text-brand-green"
                            onClick={toggleMobileMenu}
                          >
                            <ChevronRight size={16} className="mr-2" />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pl-4 py-2 mt-4">
                    <h4 className="font-medium text-sm text-gray-500 mb-2">Producten</h4>
                    <ul className="space-y-3">
                      {productenItems.map((item) => (
                        <li key={item.label}>
                          <Link 
                            to={item.href} 
                            className="flex items-center text-gray-700 hover:text-brand-green"
                            onClick={toggleMobileMenu}
                          >
                            <ChevronRight size={16} className="mr-2" />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {mainNavItems.map((item) => (
                <div key={item.label} className="py-3 border-b">
                  <Link 
                    to={item.href} 
                    className="block font-medium text-base"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              
              <AccordionItem value="over-ons" className="border-b">
                <AccordionTrigger className="py-3 text-base font-medium">
                  Over ons
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pl-4 space-y-3">
                    {overOnsItems.map((item) => (
                      <li key={item.label}>
                        <Link 
                          to={item.href} 
                          className="flex items-center text-gray-700 hover:text-brand-green"
                          onClick={toggleMobileMenu}
                        >
                          <ChevronRight size={16} className="mr-2" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              {topNavItems.map((item) => (
                <div key={item.label} className="py-2">
                  <Link 
                    to={item.href} 
                    className="block text-base"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
              <Button 
                asChild 
                className="bg-brand-green hover:bg-brand-green-dark transition-colors duration-200"
              >
                <a href="tel:0533030213" className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>Bellen</span>
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-brand-green text-brand-green hover:bg-brand-green/10"
              >
                <a href="https://wa.me/+310533030213" className="flex items-center justify-center gap-2">
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </Button>
              
              <Button 
                asChild
                className="col-span-2 bg-brand-green hover:bg-brand-green-dark mt-4"
              >
                <Link to="/offerte" onClick={toggleMobileMenu}>
                  Offerte Aanvragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
