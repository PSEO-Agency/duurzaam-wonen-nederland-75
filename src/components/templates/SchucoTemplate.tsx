
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import SubpageHero from '@/components/kunststof-kozijnen/SubpageHero';
import ProductFilters from '@/components/kunststof-kozijnen/ProductFilters';
import Services from '@/components/kunststof-kozijnen/Services';
import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';

interface SchucoTemplateProps {
  title: string;
  description: string;
  canonicalUrl: string;
  heroTitle: string;
  heroDescription: string;
  heroImageUrl: string;
  heroBenefits: string[];
  children?: React.ReactNode;
}

const SchucoTemplate: React.FC<SchucoTemplateProps> = ({
  title,
  description,
  canonicalUrl,
  heroTitle,
  heroDescription,
  heroImageUrl,
  heroBenefits,
  children
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <SubpageHero 
          title={heroTitle}
          description={heroDescription}
          imageUrl={heroImageUrl}
          benefits={heroBenefits}
        />
        
        <StickyNavigation />
        
        {children}
        
        <ProductFilters />
        
        <Services />
        
        <Reviews />
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SchucoTemplate;
