
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Home, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProductStickyNavigationProps {
  productName: string;
  productSlug: string;
}

const ProductStickyNavigation: React.FC<ProductStickyNavigationProps> = ({ 
  productName, 
  productSlug 
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });
  
  const location = useLocation();
  const isMobile = useIsMobile();

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
            <Link to="/oplossingen" className="hover:text-brand-green transition-colors">
              Oplossingen
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{productName}</BreadcrumbPage>
        </BreadcrumbItem>
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

export default ProductStickyNavigation;
