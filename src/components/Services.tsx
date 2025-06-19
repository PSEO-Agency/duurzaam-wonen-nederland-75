
import React from 'react';
import { CornerDownRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';

const Services: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();

  // Helper function to extract feature text from various formats
  const extractFeatureText = (feature: any, index: number = 0): string => {
    console.log(`Processing feature ${index}:`, feature, typeof feature);
    
    if (typeof feature === 'string') {
      return feature;
    }
    
    if (typeof feature === 'object' && feature !== null) {
      // If it's an object with title, use title
      if (feature.title && typeof feature.title === 'string') {
        return feature.title;
      }
      // If it's an object with description, use description
      if (feature.description && typeof feature.description === 'string') {
        return feature.description;
      }
      // If it's an object with name, use name
      if (feature.name && typeof feature.name === 'string') {
        return feature.name;
      }
      // If it's an object with text, use text
      if (feature.text && typeof feature.text === 'string') {
        return feature.text;
      }
      // If it's an object but no clear text property, return a fallback
      console.warn('Feature object has no recognizable text property:', feature);
      return 'Feature beschrijving';
    }
    
    // Fallback for other types (numbers, booleans, etc.)
    if (feature === null || feature === undefined) {
      return 'Feature beschrijving';
    }
    
    return String(feature);
  };

  // Transform all CMS products to match the current UI structure
  const displayProducts = products && products.length > 0 
    ? products.map(product => {
        console.log('Processing product:', product.name, 'Features:', product.features);
        
        let processedFeatures = ['Hoogwaardige kwaliteit', 'Onderhoudsvrij', 'Diverse opties'];
        
        if (product.features && Array.isArray(product.features)) {
          try {
            processedFeatures = product.features
              .slice(0, 3)
              .map((feature, index) => extractFeatureText(feature, index))
              .filter(feature => feature && typeof feature === 'string');
            
            // Ensure we have at least some features
            if (processedFeatures.length === 0) {
              processedFeatures = ['Hoogwaardige kwaliteit', 'Onderhoudsvrij', 'Diverse opties'];
            }
          } catch (err) {
            console.error('Error processing features for product:', product.name, err);
            processedFeatures = ['Hoogwaardige kwaliteit', 'Onderhoudsvrij', 'Diverse opties'];
          }
        }
        
        return {
          image: product.hero_image_url || product.hero_background_image || 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
          title: product.name,
          description: product.description || product.hero_description || '',
          features: processedFeatures,
          slug: product.slug
        };
      })
    : [];

  if (isLoading) {
    return (
      <section id="services" className="section-container">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section-container">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title">Oplossingen</h2>
          <p className="section-subtitle">
            Duurzaam Wonen Nederland biedt een breed scala aan hoogwaardige verduurzamingsoplossingen
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {displayProducts.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => {
                      console.log(`Rendering feature ${idx}:`, feature, typeof feature);
                      
                      // Extra safety check to ensure we're only rendering strings
                      if (typeof feature !== 'string') {
                        console.error('Non-string feature detected:', feature);
                        return null;
                      }
                      
                      return (
                        <li key={idx} className="flex items-start">
                          <CornerDownRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="ghost" asChild className="text-brand-green hover:text-brand-green-dark hover:bg-brand-green/10 -ml-3">
                    <Link to={`/${service.slug}`}>
                      Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
