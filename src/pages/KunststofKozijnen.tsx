
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useProduct } from '@/hooks/useProducts';
import LoadingScreen from '@/components/LoadingScreen';

const KunststofKozijnen: React.FC = () => {
  // Try to find a product with slug 'kunststof-kozijnen'
  const { data: product, isLoading, error } = useProduct('kunststof-kozijnen');

  if (isLoading) {
    return <LoadingScreen />;
  }

  // If we found a product with the slug, redirect to the new product page
  if (product) {
    return <Navigate to={`/products/${product.slug}`} replace />;
  }

  // If no product found, redirect to products overview
  return <Navigate to="/products" replace />;
};

export default KunststofKozijnen;
