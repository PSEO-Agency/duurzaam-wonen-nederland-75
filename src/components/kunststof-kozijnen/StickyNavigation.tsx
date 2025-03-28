
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Home, ChevronRight } from 'lucide-react';

const StickyNavigation: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });
  
  const location = useLocation();
  const isKleurenPage = location.pathname.includes('/kunststof-kozijnen/kleuren');

  return (
    <div ref={ref}>
      <nav className={`sticky top-20 z-20 bg-white border-b shadow-sm transition-all duration-300 ${!inView ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          {/* Breadcrumb navigation */}
          <div className="py-2 border-b">
            <Breadcrumb>
              <BreadcrumbList className="text-sm">
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
                  {isKleurenPage ? (
                    <BreadcrumbLink asChild>
                      <Link to="/kunststof-kozijnen" className="hover:text-brand-green transition-colors">
                        Kunststof Kozijnen
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>Kunststof Kozijnen</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {isKleurenPage && (
                  <>
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>Kleuren</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StickyNavigation;
