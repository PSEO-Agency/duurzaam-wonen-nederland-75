
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
    // Much faster loading - don't wait for images or scripts
    const quickLoad = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
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

    // Load review widget script asynchronously (non-blocking)
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
      clearTimeout(quickLoad);
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
