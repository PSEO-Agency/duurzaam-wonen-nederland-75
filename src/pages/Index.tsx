import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Projects from '@/components/Projects';
import AboutUs from '@/components/AboutUs';
import Workflow from '@/components/Workflow';
import Brands from '@/components/Brands';
import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';
import LoadingScreen from '@/components/LoadingScreen';
import Assortiment from '@/components/kunststof-kozijnen/Assortiment';
import { useProducts } from '@/hooks/useProducts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';

const ProductsSection: React.FC = () => {
  const { data: products, isLoading } = useProducts();

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading products...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Products</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Ontdek onze uitgebreide collectie van hoogwaardige producten voor woningverduurzaming
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product, index) => (
            <AnimatedSection
              key={product.id}
              animation="fade-in"
              delay={index * 100}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                {product.image_url && (
                  <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 hover:border-brand-green hover:text-brand-green group"
                    asChild
                  >
                    <Link to={`/products/${product.slug}`}>
                      Meer informatie
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Preload critical images and resources
    const preloadImages = [
      '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png', // Hero background
      '/lovable-uploads/a8156bd0-f063-47c4-bf91-4902c4a2fb9b.png', // Logo
      '/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png', // Keurmerk KOMO
    ];
    
    let loadedCount = 0;
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === preloadImages.length) {
          // Small timeout to ensure smooth transition
          setTimeout(() => setIsLoading(false), 300);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === preloadImages.length) {
          setTimeout(() => setIsLoading(false), 300);
        }
      };
    });
    
    // Fallback in case images don't load
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.reveal-up').forEach((el) => {
      observer.observe(el);
    });

    // Load review widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      document.querySelectorAll('.reveal-up').forEach((el) => {
        observer.unobserve(el);
      });
      clearTimeout(timeout);
      // Clean up script
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`min-h-screen flex flex-col ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Helmet>
          <title>Duurzaam Wonen Nederland | Specialist in Woningverduurzaming</title>
          <meta name="description" content="Meer dan 20 jaar ervaring in het verduurzamen van woningen met hoogwaardige en onderhoudsarme oplossingen voor een comfortabeler huis en lagere energiekosten." />
          <meta name="keywords" content="woningverduurzaming, kunststof kozijnen, HR++ glas, dakkapellen, gevelbekleding, energiebesparing, Enschede" />
          <meta property="og:title" content="Duurzaam Wonen Nederland | Specialist in Woningverduurzaming" />
          <meta property="og:description" content="Meer dan 20 jaar ervaring in het verduurzamen van woningen met hoogwaardige en onderhoudsarme oplossingen voor een comfortabeler huis en lagere energiekosten." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://duurzaamwonen.info" />
          <meta property="og:image" content="/lovable-uploads/a8156bd0-f063-47c4-bf91-4902c4a2fb9b.png" />
          <link rel="canonical" href="https://duurzaamwonen.info" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <meta name="robots" content="index, follow" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "HomeAndConstructionBusiness",
                "name": "Duurzaam Wonen Nederland",
                "image": "/lovable-uploads/a8156bd0-f063-47c4-bf91-4902c4a2fb9b.png",
                "url": "https://duurzaamwonen.info",
                "telephone": "053 303 0213",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Twenteweg 24",
                  "addressLocality": "Enschede",
                  "postalCode": "7532 ST",
                  "addressCountry": "NL"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 52.2215,
                  "longitude": 6.8937
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                "sameAs": [
                  "https://www.facebook.com/duurzaamwonennederland",
                  "https://www.instagram.com/duurzaamwonen.nl"
                ]
              }
            `}
          </script>
        </Helmet>
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Benefits />
          <ProductsSection />
          <Assortiment />
          <Projects />
          <AboutUs />
          <Workflow />
          <Brands />
          <Reviews />
          <ContactCTA />
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </div>
    </>
  );
};

export default Index;
