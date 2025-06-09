
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProductHero from '@/components/product/ProductHero';
import ProductBenefits from '@/components/product/ProductBenefits';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductWorkflow from '@/components/product/ProductWorkflow';
import ProductFAQ from '@/components/product/ProductFAQ';
import ProductContent from '@/components/product/ProductContent';
import ProductRelated from '@/components/product/ProductRelated';
import ContactCTA from '@/components/ContactCTA';
import Projects from '@/components/Projects';
import Reviews from '@/components/Reviews';
import { ProductData } from '@/hooks/useProducts';

interface ProductTemplateProps {
  product: ProductData;
  relatedProducts?: ProductData[];
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, relatedProducts = [] }) => {
  // Parse JSON fields safely
  const parseJsonField = (field: any) => {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    try {
      return JSON.parse(field);
    } catch {
      return [];
    }
  };

  const benefits = parseJsonField(product.benefits);
  const features = parseJsonField(product.features);
  const faq = parseJsonField(product.faq);
  const workflowSteps = parseJsonField(product.workflow_steps);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{product.meta_title || product.name}</title>
        <meta name="description" content={product.meta_description || product.description} />
        <link rel="canonical" href={`https://duurzaamwonen.info/products/${product.slug}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <ProductHero 
          title={product.hero_title || product.name}
          description={product.hero_description || product.description}
          imageUrl={product.hero_image_url}
        />
        
        {product.intro_text && (
          <ProductContent 
            introText={product.intro_text}
            whatAreDescription={product.what_are_description}
            pricingInfo={product.pricing_info}
          />
        )}
        
        {benefits.length > 0 && <ProductBenefits benefits={benefits} />}
        
        {features.length > 0 && <ProductFeatures features={features} />}
        
        <Projects />
        
        {workflowSteps.length > 0 && <ProductWorkflow workflowSteps={workflowSteps} />}
        
        <Reviews />
        
        {faq.length > 0 && <ProductFAQ faq={faq} />}
        
        {relatedProducts.length > 0 && (
          <ProductRelated products={relatedProducts} />
        )}
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProductTemplate;
