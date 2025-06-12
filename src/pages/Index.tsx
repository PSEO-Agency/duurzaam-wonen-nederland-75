import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
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
import SEOOptimizer from '@/components/SEOOptimizer';
import { SearchProvider } from '@/contexts/SearchContext';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Skip loading screen for React-snap
    const isReactSnap = typeof window !== 'undefined' && window.navigator.userAgent === 'ReactSnap';
    if (isReactSnap) {
      setIsLoading(false);
      return;
    }
    
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
    <SearchProvider>
      <SEOOptimizer />
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
          
          {/* Internal Links Section for SEO */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Ontdek al onze diensten en producten</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-brand-green">Kunststof Kozijnen</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/kunststof-kozijnen" className="text-gray-600 hover:text-brand-green">Kunststof Kozijnen</Link></li>
                      <li><Link to="/kunststof-kozijnen/kleuren" className="text-gray-600 hover:text-brand-green">Kleuren</Link></li>
                      <li><Link to="/kunststof-kozijnen/types" className="text-gray-600 hover:text-brand-green">Types</Link></li>
                      <li><Link to="/kunststof-kozijnen/afmetingen" className="text-gray-600 hover:text-brand-green">Afmetingen</Link></li>
                      <li><Link to="/kunststof-kozijnen/montage" className="text-gray-600 hover:text-brand-green">Montage</Link></li>
                      <li><Link to="/kunststof-kozijnen/prijzen" className="text-gray-600 hover:text-brand-green">Prijzen</Link></li>
                      <li><Link to="/kunststof-kozijnen/merken" className="text-gray-600 hover:text-brand-green">Merken</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-brand-green">Producten</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/kunststof-schuifpuien" className="text-gray-600 hover:text-brand-green">Kunststof Schuifpuien</Link></li>
                      <li><Link to="/kunststof-deuren" className="text-gray-600 hover:text-brand-green">Kunststof Deuren</Link></li>
                      <li><Link to="/gevelbekleding" className="text-gray-600 hover:text-brand-green">Gevelbekleding</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-brand-green">Over Ons</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/over-ons" className="text-gray-600 hover:text-brand-green">Over Ons</Link></li>
                      <li><Link to="/over-ons/team" className="text-gray-600 hover:text-brand-green">Ons Team</Link></li>
                      <li><Link to="/over-ons/missie" className="text-gray-600 hover:text-brand-green">Onze Missie</Link></li>
                      <li><Link to="/over-ons/duurzaamheid" className="text-gray-600 hover:text-brand-green">Duurzaamheid</Link></li>
                      <li><Link to="/over-ons/vacatures" className="text-gray-600 hover:text-brand-green">Vacatures</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-brand-green">Service & Info</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/projecten" className="text-gray-600 hover:text-brand-green">Projecten</Link></li>
                      <li><Link to="/werkwijze" className="text-gray-600 hover:text-brand-green">Werkwijze</Link></li>
                      <li><Link to="/rentevrije-financiering" className="text-gray-600 hover:text-brand-green">Rentevrije Financiering</Link></li>
                      <li><Link to="/werkgebied" className="text-gray-600 hover:text-brand-green">Werkgebied</Link></li>
                      <li><Link to="/blog" className="text-gray-600 hover:text-brand-green">Blog</Link></li>
                      <li><Link to="/contact" className="text-gray-600 hover:text-brand-green">Contact</Link></li>
                      <li><Link to="/offerte" className="text-gray-600 hover:text-brand-green">Offerte Aanvragen</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Review Widget Section */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <iframe 
                  className="lc_reviews_widget w-full h-[600px] md:h-[600px]" 
                  src="https://reputationhub.site/reputation/widgets/review_widget/3aRsj8TT2qcU3nkx3kWm" 
                  frameBorder="0" 
                  scrolling="yes"
                  style={{ 
                    minWidth: '100%', 
                    width: '100%', 
                    height: '600px'
                  }}
                  title="Customer Reviews - Quick Preview"
                />
              </div>
            </div>
          </section>
          
          <Services />
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
    </SearchProvider>
  );
};

export default Index;
