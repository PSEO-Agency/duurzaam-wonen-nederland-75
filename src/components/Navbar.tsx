
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { Logo } from './navbar/Logo';
import { NavMenuItems } from './navbar/NavMenuItems';
import { MobileMenu } from './navbar/MobileMenu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const topNavItems = [
    { label: 'Werkgebied', href: '/werkgebied' },
    { label: 'Contact', href: '/contact' },
  ];
  
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
            <div className="flex">
              {topNavItems.map((item) => (
                renderNavItem(
                  item, 
                  "text-white text-sm mx-2 hover:text-gray-300 transition-colors"
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
            <Logo />
            
            <NavigationMenu className="hidden lg:flex justify-center px-4">
              <NavigationMenuList className="flex gap-1 lg:gap-2">
                <NavMenuItems />
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2 md:gap-3">
              <Button 
                asChild 
                size={isMobile ? "sm" : "lg"}
                variant="default"
                className="transition-all duration-[4000ms]"
              >
                <Link to="/offerte">
                  {isMobile ? "Offerte" : "Offerte Aanvragen"}
                </Link>
              </Button>

              <button
                className="lg:hidden focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
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
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Navbar;
