
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

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
  
  // Load Facebook widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  // Top bar navigation items
  const topNavItems = [
    { label: 'Blog', href: '#blog' },
    { label: 'Werken bij', href: '#careers' },
    { label: 'Kennisbank', href: '#knowledge' },
    { label: 'Maatje worden', href: '#partner' },
    { label: 'Contact', href: '#contact' },
  ];
  
  // Main navigation items
  const mainNavItems = [
    { label: 'Oplossingen', href: '#services' },
    { label: 'Projecten', href: '#projects' },
    { label: 'Showroom', href: '#showroom' },
    { label: 'Over ons', href: '#about' },
    { label: 'Zo werkt het', href: '#workflow' },
    { label: 'Prefapp', href: '#prefapp' },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Black Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Ratings Text */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-green-400">{star}</span>
                ))}
              </div>
              <span className="text-sm">Lees hier wat klanten van ons vinden</span>
            </div>
            
            {/* Top Navigation Links - Desktop */}
            <div className="hidden md:flex ml-auto">
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
                placeholder="Zoek een product" 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm h-6"
              />
            </div>
            
            {/* Desktop Main Navigation Items */}
            <nav className="hidden md:flex items-center space-x-6 ml-6">
              {mainNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-green transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* Action Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3 ml-4">
              {/* Bouwbedrijven Button */}
              <Button 
                variant="outline" 
                className="bg-brand-green text-white border-brand-green hover:bg-brand-green-dark hover:border-brand-green-dark transition-colors"
              >
                Bouwbedrijven
                <span className="ml-1">→</span>
              </Button>
              
              {/* Phone Button */}
              <Button asChild className="bg-brand-green text-white hover:bg-brand-green-dark transition-colors">
                <a href="tel:0533030213" className="flex items-center gap-2">
                  <span>053-3030213</span>
                  <Phone size={16} />
                </a>
              </Button>
              
              {/* WhatsApp Button */}
              <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10 p-2 h-10 w-10">
                <MessageCircle size={20} />
              </Button>
              
              {/* Facebook Rating Widget (hidden but loaded for script to attach to) */}
              <div className="hidden elfsight-app-4bd45e33-f576-4478-bdd9-4d9257b33093" data-elfsight-app-lazy></div>
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
                placeholder="Zoek een product" 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm h-6"
              />
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
              {/* Bouwbedrijven Button - Mobile */}
              <Button 
                variant="outline" 
                className="w-full bg-brand-green text-white border-brand-green hover:bg-brand-green-dark hover:border-brand-green-dark transition-colors"
              >
                Bouwbedrijven
                <span className="ml-1">→</span>
              </Button>
              
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
              
              {/* Facebook Rating Widget for Mobile (visible) */}
              <div className="mt-4 elfsight-app-4bd45e33-f576-4478-bdd9-4d9257b33093" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
