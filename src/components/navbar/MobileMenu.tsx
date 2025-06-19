
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { mainNavItems } from './NavMenuItems';
import { useProducts } from '@/hooks/useProducts';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { data: products = [] } = useProducts();
  
  if (!isOpen) return null;

  const dynamicProductItems = products.map(product => ({
    label: product.name,
    href: `/${product.slug}`
  }));

  // Kunststof Kozijnen mobile menu items
  const kunststofKozijnenItems = [
    { label: 'Kunststof Kozijnen', href: '/kunststof-kozijnen' },
    { label: 'Types Kozijnen', href: '/kunststof-kozijnen/types' },
    { label: 'Kleuren', href: '/kunststof-kozijnen/kleuren' },
    { label: 'Afmetingen', href: '/kunststof-kozijnen/afmetingen' },
    { label: 'Prijzen', href: '/kunststof-kozijnen/prijzen' },
    { label: 'Schüco Kozijnen', href: '/kunststof-kozijnen/schuco' },
    { label: 'Merken', href: '/kunststof-kozijnen/merken' },
    { label: 'Profielen', href: '/kunststof-kozijnen/profielen' },
    { label: 'Montage', href: '/kunststof-kozijnen/montage' },
    { label: 'Schuifpuien', href: '/kunststof-schuifpuien' },
  ];

  return (
    <div className="md:hidden bg-white shadow-lg overflow-y-auto max-h-[80vh]">
      <div className="container mx-auto px-4 py-3">
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="kunststof-kozijnen" className="border-b">
            <AccordionTrigger className="py-3 text-base font-medium">
              Kunststof Kozijnen
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 py-2">
                <ul className="space-y-3">
                  {kunststofKozijnenItems.map((item) => (
                    <li key={item.label}>
                      <Link 
                        to={item.href} 
                        className="flex items-center text-gray-700 hover:text-brand-green"
                        onClick={onClose}
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

          <AccordionItem value="oplossingen" className="border-b">
            <AccordionTrigger className="py-3 text-base font-medium">
              Oplossingen
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 py-2">
                <ul className="space-y-3">
                  {dynamicProductItems.map((item) => (
                    <li key={item.label}>
                      <Link 
                        to={item.href} 
                        className="flex items-center text-gray-700 hover:text-brand-green"
                        onClick={onClose}
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
                onClick={onClose}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
