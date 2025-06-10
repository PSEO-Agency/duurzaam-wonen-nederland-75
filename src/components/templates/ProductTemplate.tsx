
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import KozijnenHero from '@/components/kunststof-kozijnen/KozijnenHero';
import WhatAreKozijnen from '@/components/kunststof-kozijnen/WhatAreKozijnen';
import Benefits from '@/components/kunststof-kozijnen/Benefits';
import ProductTypes from '@/components/kunststof-kozijnen/ProductTypes';
import Colors from '@/components/kunststof-kozijnen/Colors';
import Brands from '@/components/kunststof-kozijnen/Brands';
import Montage from '@/components/kunststof-kozijnen/Montage';
import Services from '@/components/kunststof-kozijnen/Services';
import RegionsSection from '@/components/kunststof-kozijnen/RegionsSection';
import ContactCTA from '@/components/ContactCTA';
import Projects from '@/components/Projects';
import Reviews from '@/components/Reviews';
import { ProductData } from '@/hooks/useProducts';

interface ProductTemplateProps {
  product: ProductData;
  relatedProducts?: ProductData[];
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, relatedProducts = [] }) => {
  // Check if this is the kunststof kozijnen product
  const isKozijnenProduct = product.slug === 'kunststof-kozijnen' || 
                           product.name.toLowerCase().includes('kozijn');

  // If it's the kozijnen product, use the original static layout
  if (isKozijnenProduct) {
    return (
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>{product.meta_title || product.name}</title>
          <meta name="description" content={product.meta_description || product.description} />
          <link rel="canonical" href={`https://duurzaamwonen.info/products/${product.slug}`} />
        </Helmet>
        
        <Navbar />
        
        <main className="flex-grow pt-20">
          <KozijnenHero />
          <WhatAreKozijnen />
          <Benefits />
          <ProductTypes />
          <Colors />
          <Brands />
          <Montage />
          <Services />
          <Projects />
          <Reviews />
          <RegionsSection />
          <ContactCTA />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  // For other products, use the generic template (existing code)
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
  const quickLinks = parseJsonField(product.quick_links);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{product.meta_title || product.name}</title>
        <meta name="description" content={product.meta_description || product.description} />
        <link rel="canonical" href={`https://duurzaamwonen.info/products/${product.slug}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Generic product template content */}
        {/* This would be the existing generic template structure */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-8">{product.description}</p>
          
          {/* Add basic product information display */}
          {product.intro_text && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introductie</h2>
              <p className="text-gray-700">{product.intro_text}</p>
            </div>
          )}
          
          {benefits.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Voordelen</h2>
              <ul className="space-y-2">
                {benefits.map((benefit: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-brand-green">•</span>
                    <span>{benefit.title}: {benefit.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Kenmerken</h2>
              <ul className="space-y-2">
                {features.map((feature: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-brand-green">•</span>
                    <span>{feature.title}: {feature.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProductTemplate;
