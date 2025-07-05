
import React, { useEffect, useState } from 'react';
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
import SEOHead from '@/components/SEOHead';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Optimized preloading with faster timeout and parallel loading
    const preloadImages = [
      '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png', // Hero background
      '/lovable-uploads/a8156bd0-f063-47c4-bf91-4902c4a2fb9b.png', // Logo
      '/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png', // Keurmerk KOMO
    ];
    
    let loadedCount = 0;
    const totalImages = preloadImages.length;
    
    const checkComplete = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        // Reduced timeout for faster loading
        setTimeout(() => setIsLoading(false), 100);
      }
    };
    
    // Load images in parallel
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = checkComplete;
      img.onerror = checkComplete; // Still count failed loads to prevent hanging
    });
    
    // Reduced fallback timeout
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    
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
    
    // Set up observer after loading is complete
    const setupObserver = () => {
      document.querySelectorAll('.reveal-up').forEach((el) => {
        observer.observe(el);
      });
    };

    // Load review widget script asynchronously
    const loadReviewScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      return script;
    };

    const script = loadReviewScript();
    
    // Setup observer when page is ready
    if (document.readyState === 'complete') {
      setupObserver();
    } else {
      window.addEventListener('load', setupObserver);
    }
    
    return () => {
      document.querySelectorAll('.reveal-up').forEach((el) => {
        observer.unobserve(el);
      });
      clearTimeout(timeout);
      window.removeEventListener('load', setupObserver);
      // Clean up script
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`min-h-screen flex flex-col transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <SEOHead
          title="Duurzaam Wonen Nederland | Specialist in Woningverduurzaming"
          description="Meer dan 20 jaar ervaring in het verduurzamen van woningen met hoogwaardige en onderhoudsarme oplossingen voor een comfortabeler huis en lagere energiekosten."
          canonicalUrl="/"
          pageType="website"
          imageUrl="/lovable-uploads/a38deed8-4c39-4be4-b7e9-eddc9396fe87.png"
          keywords={[
            'woningverduurzaming',
            'kunststof kozijnen',
            'HR++ glas',
            'dakkapellen',
            'gevelbekleding',
            'energiebesparing',
            'Enschede'
          ]}
        />
        
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
