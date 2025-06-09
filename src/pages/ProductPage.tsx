
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProductTemplate from '@/components/templates/ProductTemplate';
import LoadingScreen from '@/components/LoadingScreen';
import { useProduct, useRelatedProducts } from '@/hooks/useProducts';

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { 
    data: product, 
    isLoading: isLoadingProduct, 
    error: productError 
  } = useProduct(slug || '');
  
  const { 
    data: relatedProducts = [],
    isLoading: isLoadingRelated 
  } = useRelatedProducts(
    product?.id || '', 
    product?.category_id
  );

  if (isLoadingProduct) {
    return <LoadingScreen />;
  }

  if (productError || !product) {
    return <Navigate to="/404" replace />;
  }

  return (
    <ProductTemplate 
      product={product} 
      relatedProducts={relatedProducts}
    />
  );
};

export default ProductPage;
