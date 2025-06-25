
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import RegionsSection from '@/components/RegionsSection';
import ContactCTA from '@/components/ContactCTA';

const Werkgebied: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Ons Werkgebied | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Bekijk in welke regio's Duurzaam Wonen Nederland actief is. Wij leveren en installeren duurzame oplossingen voor uw woning in heel Nederland." />
        <link rel="canonical" href="https://duurzaamwonen.info/werkgebied" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Landelijke dekking
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Ons Werkgebied</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Duurzaam Wonen Nederland is actief in heel Nederland. Ontdek hieronder of wij ook in uw regio werken en neem vrijblijvend contact met ons op.
                </p>
                <Button 
                  size="lg" 
                  className="bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  <span>Direct contact opnemen</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Information Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-right">
                <h2 className="text-3xl font-bold mb-6">Waar werken wij?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Bij Duurzaam Wonen Nederland zijn we trots op onze landelijke dekking. Onze professionele teams zijn actief in elke provincie van Nederland, wat betekent dat we onze hoogwaardige duurzame oplossingen kunnen leveren en installeren, waar u ook woont.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Of u nu in Groningen of Enschede woont, u kunt rekenen op dezelfde hoge kwaliteit producten en installatie. Onze teams werken volgens strikte kwaliteitsnormen in heel Nederland.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Bekijk hieronder de provincies en steden waar we actief zijn, en ontdek of we ook in uw regio werken. Heeft u vragen over uw specifieke locatie? Neem dan gerust contact met ons op.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-green/20 p-1 rounded-full">
                      <MapPin className="h-4 w-4 text-brand-green" />
                    </div>
                    <span className="font-medium">Hoofdkantoor: Enschede</span>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
                  <div className="absolute inset-0 bg-brand-green/10 z-10 flex items-center justify-center">
                    <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-sm">
                      <h3 className="text-xl font-semibold mb-3">Onze belofte</h3>
                      <p className="text-gray-700 mb-4">
                        Waar u ook woont in Nederland, wij leveren dezelfde hoge kwaliteit en service. Onze lokale experts kennen de specifieke uitdagingen en regelgeving in uw regio.
                      </p>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-brand-green" />
                        <span className="font-medium">Binnen 48 uur bij u op locatie</span>
                      </div>
                    </div>
                  </div>
                  <img 
                    src="/lovable-uploads/8950f3c3-8de7-4c0c-8465-8bb4c566b9e2.png"
                    alt="Duurzaam Wonen Nederland werkgebied"
                    className="object-cover w-full h-full"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Regions Section */}
        <RegionsSection 
          title="Onze werkgebieden"
          description="Wij zijn actief in heel Nederland. Bekijk hieronder of wij ook in uw regio actief zijn."
          serviceSlug="kunststof-kozijnen"
        />
        
        {/* Service Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold text-center mb-12">Onze service in heel Nederland</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <MapPin className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Lokale expertise</h3>
                  <p className="text-gray-700">
                    Onze teams bestaan uit lokale professionals die uw regio door en door kennen. 
                    Ze begrijpen de specifieke uitdagingen en bouwstijlen in uw omgeving.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <MapPin className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Snelle responstijd</h3>
                  <p className="text-gray-700">
                    Dankzij onze landelijke dekking kunnen we snel reageren op uw aanvraag. 
                    We streven ernaar om binnen 48 uur een afspraak in te plannen voor een vrijblijvend adviesgesprek.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <MapPin className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Consistente kwaliteit</h3>
                  <p className="text-gray-700">
                    Of u nu in Groningen of Enschede woont, u kunt rekenen op dezelfde hoge kwaliteit producten en installatie. 
                    Onze teams werken volgens strikte kwaliteitsnormen in heel Nederland.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Werkgebied;
