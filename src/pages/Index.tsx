
import React, { useEffect } from 'react';
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
import { SearchProvider } from '@/contexts/SearchContext';

const Index: React.FC = () => {
  useEffect(() => {
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
    
    return () => {
      document.querySelectorAll('.reveal-up').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <SearchProvider>
      <div className="min-h-screen flex flex-col">
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
