
import React from 'react';
import { useAllProducts } from '@/hooks/useAllProducts';
import { convertProductToServicePageConfig } from '@/utils/createServicePageFromProduct';
import MobileOptimizedServicePage from '@/components/templates/MobileOptimizedServicePage';
import RaamdecoratieHero from '@/components/raamdecoratie/RaamdecoratieHero';

const Raamdecoratie: React.FC = () => {
  const { data: products = [], isLoading } = useAllProducts();
  
  // Find the raamdecoratie product
  const raamdecoratieProduct = products.find(product => product.slug === 'raamdecoratie');
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green mx-auto mb-4"></div>
          <p className="text-gray-600">Pagina laden...</p>
        </div>
      </div>
    );
  }
  
  if (!raamdecoratieProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product niet gevonden</h1>
          <p className="text-gray-600">Het raamdecoratie product kon niet worden geladen.</p>
        </div>
      </div>
    );
  }
  
  // Convert the product data to the service page configuration
  const config = convertProductToServicePageConfig(raamdecoratieProduct);
  
  return (
    <MobileOptimizedServicePage 
      {...config} 
      customHero={RaamdecoratieHero}
    />
  );
};

export default Raamdecoratie;
