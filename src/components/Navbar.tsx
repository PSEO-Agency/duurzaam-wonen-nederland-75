
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  
  // Navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Diensten', href: '#services' },
    { label: 'Projecten', href: '#projects' },
    { label: 'Voordelen', href: '#benefits' },
    { label: 'Werkwijze', href: '#workflow' },
    { label: 'Over ons', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png" 
              alt="Duurzaam Wonen Logo" 
              className="h-12 md:h-14"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-brand-green transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-brand-green hover:bg-brand-green-dark transition-colors duration-200">
              <a href="tel:0533030213" className="flex items-center gap-2">
                <Phone size={16} />
                <span>053 303 0213</span>
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
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
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-brand-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 pb-2">
              <Button 
                asChild 
                className="w-full bg-brand-green hover:bg-brand-green-dark transition-colors duration-200"
              >
                <a href="tel:0533030213" className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>053 303 0213</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
