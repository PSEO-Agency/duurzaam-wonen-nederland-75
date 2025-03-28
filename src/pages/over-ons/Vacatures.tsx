
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const Vacatures: React.FC = () => {
  const vacancies = [
    {
      title: "Monteur Kunststof Kozijnen",
      location: "Enschede",
      type: "Fulltime",
      description: "Als monteur ben je verantwoordelijk voor het plaatsen van kunststof kozijnen bij onze klanten. Je werkt zelfstandig of in een klein team.",
    },
    {
      title: "Technisch Adviseur",
      location: "Enschede",
      type: "Fulltime",
      description: "Als technisch adviseur bezoek je potentiële klanten, breng je de situatie in kaart en adviseer je over de beste oplossingen.",
    },
    {
      title: "Verkoopadviseur Showroom",
      location: "Enschede",
      type: "Parttime/Fulltime",
      description: "Als verkoopadviseur in onze showroom ontvang je klanten, informeer je hen over onze producten en maak je offertes op maat.",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Vacatures | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek de vacatures bij Duurzaam Wonen Nederland. Word onderdeel van ons team en help mee aan een duurzamere toekomst." />
        <link rel="canonical" href="https://duurzaamwonen.info/over-ons/vacatures" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Vacatures
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Werken bij Duurzaam Wonen Nederland</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Ben je op zoek naar een nieuwe uitdaging in een duurzame en groeiende organisatie? 
                  Ontdek hieronder onze vacatures en word onderdeel van ons team!
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Why Work With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-right">
                <h2 className="text-3xl font-bold mb-6">Waarom werken bij ons?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Bij Duurzaam Wonen Nederland bieden we meer dan alleen een baan. We bieden een 
                  kans om bij te dragen aan een duurzamere toekomst in een prettige werkomgeving 
                  met volop mogelijkheden voor persoonlijke en professionele groei.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Werken in een groeiend en innovatief bedrijf",
                    "Uitstekende arbeidsvoorwaarden",
                    "Volop mogelijkheden voor persoonlijke ontwikkeling",
                    "Een prettige en informele werksfeer",
                    "Bijdragen aan een duurzamere toekomst"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="rounded-lg overflow-hidden h-[400px]">
                  <img 
                    src="/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png"
                    alt="Werken bij Duurzaam Wonen Nederland" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Vacancies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center">Actuele vacatures</h2>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {vacancies.length > 0 ? (
                vacancies.map((vacancy, index) => (
                  <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{vacancy.title}</h3>
                        <div className="flex items-center gap-3 mt-2 md:mt-0">
                          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            {vacancy.location}
                          </span>
                          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            {vacancy.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{vacancy.description}</p>
                      <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                        <span>Solliciteer nu</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AnimatedSection>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-600">
                    Momenteel hebben we geen openstaande vacatures. Houd deze pagina in de gaten voor toekomstige mogelijkheden.
                  </p>
                </div>
              )}
            </div>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Open sollicitatie</h3>
                <p className="text-gray-600 mb-6">
                  Staat jouw droombaan er niet tussen? Stuur ons dan een open sollicitatie. 
                  We zijn altijd op zoek naar getalenteerde en gemotiveerde mensen.
                </p>
                <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <span>Stuur open sollicitatie</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Vacatures;
