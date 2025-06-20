
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ChevronDown } from 'lucide-react';

interface NavMenuItemsProps {
  onItemClick?: () => void;
}

const NavMenuItems: React.FC<NavMenuItemsProps> = ({ onItemClick }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-6">
        <NavigationMenuItem>
          <Link 
            to="/oplossingen" 
            className="text-gray-700 hover:text-brand-green transition-colors font-medium"
            onClick={onItemClick}
          >
            Oplossingen
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-brand-green transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
            Kozijnen
            <ChevronDown className="ml-1 h-4 w-4" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="row-span-3">
                <Link
                  to="/kunststof-kozijnen"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  onClick={onItemClick}
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Kunststof Kozijnen
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Energiezuinige en onderhoudsarme kunststof kozijnen voor uw woning.
                  </p>
                </Link>
              </div>
              <div className="grid gap-1">
                <Link
                  to="/aluminium-kozijnen"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  onClick={onItemClick}
                >
                  <div className="text-sm font-medium leading-none">Aluminium Kozijnen</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Stijlvolle en duurzame aluminium kozijnen.
                  </p>
                </Link>
                <Link
                  to="/kozijn-types"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  onClick={onItemClick}
                >
                  <div className="text-sm font-medium leading-none">Kozijn Types</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Overzicht van alle beschikbare kozijn types.
                  </p>
                </Link>
                <Link
                  to="/kozijn-merken"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  onClick={onItemClick}
                >
                  <div className="text-sm font-medium leading-none">Kozijn Merken</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Bekende merken en hun specialiteiten.
                  </p>
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-brand-green transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
            Diensten
            <ChevronDown className="ml-1 h-4 w-4" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <Link
                to="/kozijnen-inmeten"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={onItemClick}
              >
                <div className="text-sm font-medium leading-none">Kozijnen Inmeten</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Professioneel inmeten van uw kozijnen.
                </p>
              </Link>
              <Link
                to="/kozijn-montage"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={onItemClick}
              >
                <div className="text-sm font-medium leading-none">Kozijn Montage</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Vakkundige montage door ervaren specialisten.
                </p>
              </Link>
              <Link
                to="/werkwijze"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={onItemClick}
              >
                <div className="text-sm font-medium leading-none">Werkwijze</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Hoe wij te werk gaan bij uw project.
                </p>
              </Link>
              <Link
                to="/showroom"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={onItemClick}
              >
                <div className="text-sm font-medium leading-none">Showroom</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Bezoek onze showroom voor inspiratie.
                </p>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            to="/projecten" 
            className="text-gray-700 hover:text-brand-green transition-colors font-medium"
            onClick={onItemClick}
          >
            Projecten
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            to="/werkgebied" 
            className="text-gray-700 hover:text-brand-green transition-colors font-medium"
            onClick={onItemClick}
          >
            Werkgebied
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-brand-green transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
            Over Ons
            <ChevronDown className="ml-1 h-4 w-4" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <Link
                to="/over-ons"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={onItemClick}
              >
                <div className="text-sm font-medium leading-none">Over Ons</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Leer meer over ons bedrijf en onze missie.
                </p>
              </Link>
              <Link
                to="/over-ons/team"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={onItemClick}
              >
                <div className="text-sm font-medium leading-none">Ons Team</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Ontmoet de mensen achter ons bedrijf.
                </p>
              </Link>
              <Link
                to="/over-ons/duurzaamheid"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={onItemClick}
              >
                <div className="text-sm font-medium leading-none">Duurzaamheid</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Onze inzet voor een duurzame toekomst.
                </p>
              </Link>
              <Link
                to="/blog"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={onItemClick}
              >
                <div className="text-sm font-medium leading-none">Blog</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Tips, trends en nieuws over kozijnen.
                </p>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-brand-green transition-colors font-medium"
            onClick={onItemClick}
          >
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenuItems;
