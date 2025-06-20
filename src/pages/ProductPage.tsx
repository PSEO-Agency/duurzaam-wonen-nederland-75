
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useProduct } from '@/hooks/useProducts';
import { createServicePageFromProduct } from '@/utils/createServicePageFromProduct';

const ProductPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const location = useLocation();
  
  // Extract slug from URL path if not available in params
  const slug = productSlug || location.pathname.replace('/', '');
  
  const { data: product, isLoading, error } = useProduct(slug);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-green mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Laden...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    console.error('Error loading product:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product niet gevonden</h1>
          <p className="text-gray-600 mb-8">Het product dat u zoekt bestaat niet of is niet meer beschikbaar.</p>
          <a href="/" className="bg-brand-green text-white px-6 py-2 rounded hover:bg-brand-green-dark">
            Terug naar home
          </a>
        </div>
      </div>
    );
  }

  // If no product found in database, show not found
  if (!product) {
    console.warn('No product found in database for slug:', slug);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product niet gevonden</h1>
          <p className="text-gray-600 mb-8">Het product dat u zoekt bestaat niet of is niet meer beschikbaar.</p>
          <a href="/" className="bg-brand-green text-white px-6 py-2 rounded hover:bg-brand-green-dark">
            Terug naar home
          </a>
        </div>
      </div>
    );
  }

  console.log('Rendering product page for:', product.name, 'with slug:', slug);

  // Create and render the page from database product data
  const DatabaseServicePage = createServicePageFromProduct(product);
  return <DatabaseServicePage />;
};

export default ProductPage;
