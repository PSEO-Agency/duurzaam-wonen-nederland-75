
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { mainNavItems } from './NavMenuItems';
import { useProducts } from '@/hooks/useProducts';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { data: products = [] } = useProducts();
  
  if (!isOpen) return null;

  const dynamicProductItems = products.map(product => ({
    label: product.name,
    href: `/${product.slug}`
  }));

  // Add Kunststof Kozijnen as the first item in Oplossingen
  const kunststofKozijnenItem = { label: 'Kunststof Kozijnen', href: '/kunststof-kozijnen' };
  const allOplossingenItems = [kunststofKozijnenItem, ...dynamicProductItems];

  // Kunststof Kozijnen mobile menu items
  const kunststofKozijnenItems = [
    { label: 'Wat zijn kunststof kozijnen?', href: '/kunststof-kozijnen#wat-zijn' },
    { label: 'Voordelen kunststof kozijnen', href: '/kunststof-kozijnen#voordelen' },
    { label: 'Schüco Kozijnen', href: '/kunststof-kozijnen/schuco' },
    { label: 'Kozijnen Montage', href: '/kunststof-kozijnen/montage' },
    { label: 'Kozijnen Prijzen', href: '/kunststof-kozijnen/prijzen' },
    { label: 'Type Kozijn', href: '/kunststof-kozijnen/types' },
    { label: 'Kleur Kozijn', href: '/kunststof-kozijnen/kleuren' },
    { label: 'Kozijn Afmeting', href: '/kunststof-kozijnen/afmetingen' },
    { label: 'Kozijn Profielen', href: '/kunststof-kozijnen/profielen' },
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
                  {allOplossingenItems.map((item) => (
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

export { MobileMenu };
