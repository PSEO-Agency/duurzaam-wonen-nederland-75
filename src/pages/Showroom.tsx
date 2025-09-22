
import React from 'react';
import { ArrowRight, MapPin, Calendar, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import SEOHead from '@/components/SEOHead';

const Showroom: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Showroom - Ervaar onze producten in het echt"
        description="Bezoek onze showroom in Enschede en ontdek het volledige assortiment van Duurzaam Wonen Nederland. Plan eenvoudig een bezoek en laat u inspireren."
        canonicalUrl="/showroom"
        pageType="page"
        pageSlug="showroom"
        imageUrl="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png"
        keywords={['showroom', 'Enschede', 'kunststof kozijnen', 'bezoek', 'ervaring', 'producten bekijken']}
      />
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/lovable-uploads/hero-background-new.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade-in-right">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Onze showroom
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ervaar onze producten in het echt
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                  Bezoek onze showroom in Enschede en ontdek alle mogelijkheden voor het verduurzamen 
                  van uw woning. Bekijk materialen, kleuren en krijg persoonlijk advies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                    <span>Maak een afspraak</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Routebeschrijving</span>
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-green/20 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-brand-green" />
                    </div>
                    <span>Twenteweg 24, Enschede</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-green/20 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-brand-green" />
                    </div>
                    <span>Ma-Vr: 08:30-17:00, Za: 10:00-16:00</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* About Our Showroom */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-right">
                <h2 className="text-3xl font-bold mb-6">Ontdek onze showroom</h2>
                <p className="text-lg text-gray-700 mb-4">
                  In onze ruime showroom kunt u alle producten bekijken, aanraken en ervaren. 
                  Van kunststof kozijnen in verschillende kleuren en stijlen tot innovatieve 
                  verduurzamingsoplossingen voor uw woning.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Onze experts staan voor u klaar om al uw vragen te beantwoorden en 
                  persoonlijk advies te geven dat perfect aansluit bij uw wensen en de 
                  mogelijkheden van uw woning.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Wat kunt u verwachten:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'Alle soorten kozijnen en deuren in diverse uitvoeringen',
                    'Verschillende kleuropties en afwerkingen',
                    'Demonstraties van innovatieve vergrendelingssystemen',
                    'Voorbeelden van dakkapellen en uitbouwen',
                    'Persoonlijk advies van onze experts'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                        <Eye className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Plan uw bezoek</span>
                </Button>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png"
                      alt="Showroom Duurzaam Wonen Nederland"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png"
                      alt="Kunststof kozijnen showroom"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden col-span-2">
                    <img
                      src="/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png"
                      alt="Duurzame woonoplossingen showroom"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* VR Experience */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Virtuele showroom ervaring</h2>
                <p className="text-lg text-gray-600">
                  Kunt u niet naar onze showroom komen? Bekijk hieronder onze virtuele 
                  rondleiding of maak een afspraak voor een persoonlijke online tour.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">360° showroom rondleiding hier</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Appointment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="fade-in-right">
                  <h2 className="text-3xl font-bold mb-6">Maak een afspraak</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    We werken graag op afspraak zodat we u persoonlijke aandacht 
                    kunnen geven en u optimaal kunnen adviseren.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Plan hiernaast eenvoudig een afspraak in op een moment dat u 
                    het beste uitkomt. Onze showroom is geopend op werkdagen van 
                    08:30 tot 17:00 uur en op zaterdag van 10:00 tot 16:00 uur.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-green/10 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-brand-green" />
                      </div>
                      <span className="text-gray-700">Afspraak duurt ongeveer 45-60 minuten</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-green/10 p-2 rounded-full">
                        <Calendar className="h-5 w-5 text-brand-green" />
                      </div>
                      <span className="text-gray-700">Ook mogelijkheid voor avondafspraken</span>
                    </div>
                  </div>
                  
                  <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                    <span>Bel voor een afspraak</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in-left" delay={200}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Online afspraak maken</h3>
                    <div className="mb-4">
                      <p className="text-gray-600">
                        Selecteer hier direct een datum en tijd voor uw bezoek:
                      </p>
                    </div>
                    <div className="h-[300px] bg-gray-100 rounded flex items-center justify-center mb-4">
                      <p className="text-gray-500">Agenda widget hier</p>
                    </div>
                    <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white">
                      Afspraak inplannen
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
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

export default Showroom;
