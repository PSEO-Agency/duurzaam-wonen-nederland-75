
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import ProductFilters from '@/components/kunststof-kozijnen/ProductFilters';
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
          <Services />
          <ProductFilters />
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
