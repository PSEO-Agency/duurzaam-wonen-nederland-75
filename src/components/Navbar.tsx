
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
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
  
  // Top bar navigation items
  const topNavItems = [
    { label: 'Blog', href: '#blog' },
    { label: 'Kennisbank', href: '#knowledge' },
    { label: 'Zakelijk', href: '#business' },
    { label: 'Werkgebied', href: '#area' },
    { label: 'Contact', href: '#contact' },
  ];
  
  // Main navigation items
  const mainNavItems = [
    { label: 'Projecten', href: '#projects' },
    { label: 'Showroom', href: '#showroom' },
    { label: 'Werkwijze', href: '#workflow' },
  ];

  // Oplossingen mega menu items
  const oplossingenItems = [
    { label: 'Aanbouw/Uitbouw', href: '#aanbouw' },
    { label: 'Dakopbouw', href: '#dakopbouw' },
    { label: 'Hooiberg woning', href: '#hooiberg' },
    { label: 'Mantelzorgwoning', href: '#mantelzorg' },
    { label: 'Tiny House', href: '#tiny-house' },
    { label: 'Bijgebouw', href: '#bijgebouw' },
    { label: 'Vakantiewoning', href: '#vakantiewoning' },
    { label: 'Dakkapel', href: '#dakkapel' },
    { label: 'Woning', href: '#woning' },
    { label: 'Aanleunwoning', href: '#aanleunwoning' },
  ];

  // Producten mega menu items - Updated to Kunststof Kozijnen (plural)
  const productenItems = [
    { label: 'Kunststof Kozijnen', href: '/kunststof-kozijnen' },
    { label: 'HSB wanden', href: '#hsb-wanden' },
    { label: 'Hellend dak', href: '#hellend-dak' },
    { label: 'Plat dak', href: '#plat-dak' },
  ];

  // Over ons mega menu items
  const overOnsItems = [
    { label: 'Ons team', href: '#team' },
    { label: 'Onze geschiedenis', href: '#history' },
    { label: 'Onze missie', href: '#mission' },
    { label: 'Duurzaamheid', href: '#sustainability' },
    { label: 'Vacatures', href: '#careers' },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Black Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Top Navigation Links - Desktop */}
            <div className="hidden md:flex">
              {topNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-sm mx-3 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Bar */}
      <div 
        className={cn(
          'bg-white transition-all duration-300 ease-in-out py-3 border-b',
          isScrolled ? 'shadow-sm' : ''
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png" 
                alt="Duurzaam Wonen Logo" 
                className="h-12"
              />
            </a>
            
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-2 ml-6 flex-grow max-w-md">
              <Search size={20} className="text-gray-500 mr-2" />
              <Input 
                type="text" 
                placeholder="Zoek" 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm h-6"
              />
            </div>
            
            {/* Desktop Main Navigation with Mega Menus */}
            <NavigationMenu className="hidden md:flex ml-6">
              <NavigationMenuList>
                {/* Oplossingen Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-brand-green bg-transparent">Oplossingen</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg">
                    <div className="grid grid-cols-2 gap-10 p-4 w-[600px]">
                      <div>
                        <h3 className="font-bold text-xl mb-4">Oplossingen</h3>
                        <ul className="space-y-2">
                          {oplossingenItems.map((item) => (
                            <li key={item.label}>
                              <NavigationMenuLink asChild>
                                <a 
                                  href={item.href}
                                  className="flex items-center text-gray-700 hover:text-brand-green"
                                >
                                  <span className="mr-2">›</span> {item.label}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-4">Producten</h3>
                        <ul className="space-y-2">
                          {productenItems.map((item) => (
                            <li key={item.label}>
                              <NavigationMenuLink asChild>
                                <a 
                                  href={item.href}
                                  className="flex items-center text-gray-700 hover:text-brand-green"
                                >
                                  <span className="mr-2">›</span> {item.label}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Standard Navigation Items */}
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink 
                      href={item.href}
                      className="text-gray-700 hover:text-brand-green transition-colors duration-200 font-medium px-4 py-2"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* Over ons Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-brand-green bg-transparent">Over ons</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg">
                    <div className="p-4 w-[400px]">
                      <h3 className="font-bold text-xl mb-4">Over ons</h3>
                      <ul className="space-y-2">
                        {overOnsItems.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <a 
                                href={item.href}
                                className="flex items-center text-gray-700 hover:text-brand-green"
                              >
                                <span className="mr-2">›</span> {item.label}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Action Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3 ml-4">              
              {/* Phone Button */}
              <Button asChild className="bg-brand-green text-white hover:bg-brand-green-dark transition-colors">
                <a href="tel:0533030213" className="flex items-center gap-2">
                  <span>053-3030213</span>
                  <Phone size={16} />
                </a>
              </Button>
              
              {/* WhatsApp Button */}
              <Button 
                variant="outline" 
                className="border-brand-green text-brand-green hover:bg-brand-green/10 flex items-center gap-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {/* Search Bar - Mobile */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mb-4">
              <Search size={20} className="text-gray-500 mr-2" />
              <Input 
                type="text" 
                placeholder="Zoek" 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm h-6"
              />
            </div>
            
            {/* Oplossingen Dropdown - Mobile */}
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Oplossingen</h3>
              <ul className="space-y-2 pl-4">
                {oplossingenItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-1 text-gray-700 hover:text-brand-green"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      › {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Producten Dropdown - Mobile */}
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Producten</h3>
              <ul className="space-y-2 pl-4">
                {productenItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-1 text-gray-700 hover:text-brand-green"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      › {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Main Nav Items - Mobile */}
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-brand-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Over ons Dropdown - Mobile */}
            <div className="mb-4 mt-4">
              <h3 className="font-bold text-lg mb-2">Over ons</h3>
              <ul className="space-y-2 pl-4">
                {overOnsItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-1 text-gray-700 hover:text-brand-green"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      › {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Top Nav Items - Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              {topNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-brand-green"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
              {/* Phone Button - Mobile */}
              <Button 
                asChild 
                className="w-full bg-brand-green hover:bg-brand-green-dark transition-colors duration-200"
              >
                <a href="tel:0533030213" className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>053-3030213</span>
                </a>
              </Button>
              
              {/* WhatsApp Button - Mobile */}
              <Button 
                variant="outline" 
                className="w-full border-brand-green text-brand-green hover:bg-brand-green/10"
              >
                <MessageCircle size={20} className="mr-2" />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
