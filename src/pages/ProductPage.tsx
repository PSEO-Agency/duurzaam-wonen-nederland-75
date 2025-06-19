
import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '@/hooks/useProducts';
import { createServicePageFromProduct } from '@/utils/createServicePageFromProduct';
import NotFound from './NotFound';

const ProductPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { data: product, isLoading, error } = useProduct(productSlug || '');

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

  // Show error state or not found
  if (error || !product) {
    console.error('Error loading product or product not found:', error);
    return <NotFound />;
  }

  // Create and render the page from database product data
  const DatabaseServicePage = createServicePageFromProduct(product);
  return <DatabaseServicePage />;
};

export default ProductPage;
