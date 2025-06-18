
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KozijnenHero from '@/components/kunststof-kozijnen/KozijnenHero';
import WhatAreKozijnen from '@/components/kunststof-kozijnen/WhatAreKozijnen';
import Benefits from '@/components/kunststof-kozijnen/Benefits';
import ProductTypes from '@/components/kunststof-kozijnen/ProductTypes';
import Colors from '@/components/kunststof-kozijnen/Colors';
import Brands from '@/components/kunststof-kozijnen/Brands';
import Montage from '@/components/kunststof-kozijnen/Montage';
import Services from '@/components/kunststof-kozijnen/Services';
import RegionsSection from '@/components/kunststof-kozijnen/RegionsSection';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import ContactCTA from '@/components/ContactCTA';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const KunststofKozijnen = () => {
  const profiles = [
    {
      id: "living-82",
      name: "Schüco LivIng 82",
      slug: "living-82",
      description: "Premium profiel met uitstekende isolatiewaarden en moderne uitstraling",
      image: "/lovable-uploads/651c14c4-00b2-4f06-8f31-60accb52464d.png"
    },
    {
      id: "ct-70-as", 
      name: "Schüco CT 70 AS",
      slug: "ct-70-as",
      description: "Veelzijdig profiel voor renovatie en nieuwbouw projecten",
      image: "/lovable-uploads/a7eb24e5-febb-40e5-a6f2-a535f1bc62ef.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kunststof Kozijnen | Duurzaam, Energiezuinig & Onderhoudsvriendelijk</title>
        <meta name="description" content="Ontdek onze kunststof kozijnen: energiezuinig, onderhoudsvriendelijk en duurzaam. ✓ Gratis advies ✓ Vakkundige montage ✓ Scherpe prijzen. Vraag vrijblijvend offerte aan!" />
      </Helmet>
      
      <Navbar />
      <StickyNavigation />
      
      <main>
        <KozijnenHero />
        <WhatAreKozijnen />
        <Benefits />
        <ProductTypes />
        
        {/* Assortiment section with profiles */}
        <section id="assortiment" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ons Assortiment
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ontdek onze kunststof kozijn profielen van topkwaliteit
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {profiles.map((profile, index) => (
                <AnimatedSection key={profile.id} animation="fade-in" delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold">{profile.name}</h3>
                        <img 
                          src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                          alt="Schüco" 
                          className="h-5 w-auto"
                        />
                      </div>
                      <p className="text-gray-600 mb-4">{profile.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        asChild
                      >
                        <Link to={`/kunststof-kozijnen/profielen/${profile.slug}`}>
                          Bekijk profiel details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        <Colors />
        <Brands />
        
        {/* Werkwijze section with the specific sentence changed */}
        <section id="werkwijze" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Werkwijze
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Van eerste contact tot complete montage - zo werken wij
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Gratis advies</h3>
                  <p className="text-gray-600">Persoonlijk advies op maat en een vrijblijvende offerte</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Inmeten</h3>
                  <p className="text-gray-600">Professioneel inmeten voor een perfecte pasvorm</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Productie</h3>
                  <p className="text-gray-600">Maatwerk productie in onze moderne fabriek</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={400}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Nazorg & garantie</h3>
                  <p className="text-gray-600">Goede nazorg en waarborging van volledige tevredenheid.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <Montage />
        <Services />
        <RegionsSection />
        <ContactCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default KunststofKozijnen;
