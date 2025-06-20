
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onItemClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onItemClick }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-6 space-y-4">
        <Link
          to="/oplossingen"
          className="block py-3 text-gray-700 hover:text-brand-green transition-colors font-medium border-b border-gray-100"
          onClick={onItemClick}
        >
          Oplossingen
        </Link>

        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-gray-700 hover:text-brand-green transition-colors font-medium border-b border-gray-100">
            Kozijnen
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 space-y-2 mt-2">
            <Link
              to="/kunststof-kozijnen"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Kunststof Kozijnen
            </Link>
            <Link
              to="/aluminium-kozijnen"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Aluminium Kozijnen
            </Link>
            <Link
              to="/kozijn-types"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Kozijn Types
            </Link>
            <Link
              to="/kozijn-merken"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Kozijn Merken
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-gray-700 hover:text-brand-green transition-colors font-medium border-b border-gray-100">
            Diensten
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 space-y-2 mt-2">
            <Link
              to="/kozijnen-inmeten"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Kozijnen Inmeten
            </Link>
            <Link
              to="/kozijn-montage"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Kozijn Montage
            </Link>
            <Link
              to="/werkwijze"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Werkwijze
            </Link>
            <Link
              to="/showroom"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Showroom
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <Link
          to="/projecten"
          className="block py-3 text-gray-700 hover:text-brand-green transition-colors font-medium border-b border-gray-100"
          onClick={onItemClick}
        >
          Projecten
        </Link>

        <Link
          to="/werkgebied"
          className="block py-3 text-gray-700 hover:text-brand-green transition-colors font-medium border-b border-gray-100"
          onClick={onItemClick}
        >
          Werkgebied
        </Link>

        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-gray-700 hover:text-brand-green transition-colors font-medium border-b border-gray-100">
            Over Ons
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 space-y-2 mt-2">
            <Link
              to="/over-ons"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Over Ons
            </Link>
            <Link
              to="/over-ons/team"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Ons Team
            </Link>
            <Link
              to="/over-ons/duurzaamheid"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Duurzaamheid
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-gray-600 hover:text-brand-green transition-colors"
              onClick={onItemClick}
            >
              Blog
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <Link
          to="/contact"
          className="block py-3 text-gray-700 hover:text-brand-green transition-colors font-medium border-b border-gray-100"
          onClick={onItemClick}
        >
          Contact
        </Link>

        <div className="pt-4">
          <Button asChild className="w-full bg-brand-green hover:bg-brand-green-dark">
            <Link to="/offerte" onClick={onItemClick}>
              Offerte Aanvragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
