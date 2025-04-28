import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Home, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const StickyNavigation: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });
  
  const location = useLocation();
  const path = location.pathname;
  const isMobile = useIsMobile();
  
  let currentPage = '';
  let parentPage = '';
  let isSubPage = false;
  let isNestedSubPage = false;
  
  if (path.includes('/kunststof-kozijnen')) {
    isSubPage = path !== '/kunststof-kozijnen';
    
    if (path.includes('/kleuren')) {
      currentPage = 'Kleuren';
      if (path.includes('/kleuren/')) {
        isNestedSubPage = true;
        const colorSlug = path.split('/').pop();
        if (colorSlug) {
          currentPage = colorSlug.charAt(0).toUpperCase() + colorSlug.slice(1).replace('-', ' ');
          parentPage = 'Kleuren';
        }
      }
    } else if (path.includes('/types')) {
      currentPage = 'Types';
      if (path.includes('/types/')) {
        isNestedSubPage = true;
        parentPage = 'Types';
        if (path.includes('draaikiepraam')) {
          currentPage = 'Draaikiepraam';
        }
      }
    } else if (path.includes('/afmetingen')) {
      currentPage = 'Afmetingen';
      if (path.includes('/afmetingen/')) {
        isNestedSubPage = true;
        parentPage = 'Afmetingen';
        if (path.includes('100x100')) {
          currentPage = '100x100 cm';
        }
      }
    } else if (path.includes('/montage')) {
      currentPage = 'Montage';
    } else if (path.includes('/prijzen')) {
      currentPage = 'Prijzen';
      if (path.includes('/prijzen/')) {
        isNestedSubPage = true;
        parentPage = 'Prijzen';
        if (path.includes('afbetaling')) {
          currentPage = 'Afbetaling';
        } else if (path.includes('subsidie')) {
          currentPage = 'Subsidie';
        }
      }
    } else if (path.includes('/merken')) {
      currentPage = 'Merken';
      if (path.includes('/merken/')) {
        isNestedSubPage = true;
        parentPage = 'Merken';
        if (path.includes('schuco')) {
          currentPage = 'Schüco';
        }
      }
    } else if (path.includes('/locaties/')) {
      isNestedSubPage = true;
      parentPage = 'Locaties';
      if (path.includes('enschede')) {
        currentPage = 'Enschede';
      }
    } else if (path.includes('/services/')) {
      isNestedSubPage = true;
      parentPage = 'Services';
      if (path.includes('inmeten')) {
        currentPage = 'Inmeten';
      }
    }
  }

  const renderBreadcrumbs = () => (
    <Breadcrumb>
      <BreadcrumbList className={`text-sm ${isMobile ? 'flex-nowrap whitespace-nowrap' : ''}`}>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center hover:text-brand-green transition-colors">
              <Home className="h-3.5 w-3.5" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/producten" className="hover:text-brand-green transition-colors">
              Producten
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          {isSubPage ? (
            <BreadcrumbLink asChild>
              <Link to="/kunststof-kozijnen" className="hover:text-brand-green transition-colors">
                Kunststof Kozijnen
              </Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Kunststof Kozijnen</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {isSubPage && !isNestedSubPage && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
        {isNestedSubPage && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link 
                  to={`/kunststof-kozijnen/${parentPage.toLowerCase()}`} 
                  className="hover:text-brand-green transition-colors"
                >
                  {parentPage}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );

  return (
    <>
      <nav className="bg-white border-b shadow-sm">
        <div ref={ref} className="absolute invisible" />
        <div className="container mx-auto px-4">
          <div className="py-2 overflow-x-auto">
            {renderBreadcrumbs()}
          </div>
        </div>
      </nav>
      
      {!inView && (
        <nav className="fixed top-[109px] left-0 right-0 z-20 bg-white border-b shadow-md">
          <div className="container mx-auto px-4">
            <div className="py-2 overflow-x-auto">
              {renderBreadcrumbs()}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default StickyNavigation;
