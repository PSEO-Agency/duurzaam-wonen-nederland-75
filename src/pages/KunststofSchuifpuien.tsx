
import React from 'react';
import { useProduct } from '@/hooks/useProducts';
import { createServicePageFromProduct } from '@/utils/createServicePageFromProduct';
import { kunststofSchuifpuienConfig } from '@/data/servicePageConfigs';
import { createServicePage } from '@/utils/createServicePage';

const KunststofSchuifpuien: React.FC = () => {
  const { data: product, isLoading, error } = useProduct('kunststof-schuifpuien');

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
    // Fallback to static config if database fails
    const FallbackPage = createServicePage(kunststofSchuifpuienConfig);
    return <FallbackPage />;
  }

  // If no product found in database, use static config as fallback
  if (!product) {
    console.warn('No product found in database, using static config');
    const FallbackPage = createServicePage(kunststofSchuifpuienConfig);
    return <FallbackPage />;
  }

  // Create and render the page from database product data
  const DatabaseServicePage = createServicePageFromProduct(product);
  return <DatabaseServicePage />;
};

export default KunststofSchuifpuien;
