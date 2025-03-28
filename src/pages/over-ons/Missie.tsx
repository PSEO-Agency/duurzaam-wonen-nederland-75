
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Heart, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const Missie: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Onze Missie & Visie | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Lees meer over de missie en visie van Duurzaam Wonen Nederland. Wij streven naar een duurzame toekomst voor woningen in Nederland." />
        <link rel="canonical" href="https://duurzaamwonen.info/over-ons/missie" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Onze missie & visie
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Wat ons drijft</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Ontdek de missie, visie en kernwaarden achter Duurzaam Wonen Nederland en hoe deze onze dagelijkse werkzaamheden vormgeven.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Mission, Vision, Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Target className="h-10 w-10 text-brand-green" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Onze Missie</h2>
                  <p className="text-gray-600">
                    Wij maken duurzame, comfortabele en energiezuinige woningen toegankelijk voor iedereen. 
                    Door hoogwaardige en onderhoudsarme oplossingen te bieden, dragen we bij aan een betere 
                    leefomgeving en een duurzamere toekomst.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-10 w-10 text-brand-green" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Onze Visie</h2>
                  <p className="text-gray-600">
                    Wij streven ernaar om de toonaangevende specialist in woningverduurzaming te zijn in Nederland. 
                    Door continu te innoveren en te excelleren in kwaliteit en service, willen we bijdragen aan de 
                    energietransitie in de woningbouw.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-10 w-10 text-brand-green" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Onze Waarden</h2>
                  <ul className="text-gray-600 text-left space-y-4">
                    <li className="flex items-start">
                      <div className="bg-brand-green/10 p-1 rounded-full mt-1 mr-3">
                        <Check className="h-3 w-3 text-brand-green" />
                      </div>
                      <span><strong>Kwaliteit:</strong> We streven naar de hoogste kwaliteit in alles wat we doen.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-green/10 p-1 rounded-full mt-1 mr-3">
                        <Check className="h-3 w-3 text-brand-green" />
                      </div>
                      <span><strong>Duurzaamheid:</strong> We maken keuzes die bijdragen aan een betere toekomst.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-green/10 p-1 rounded-full mt-1 mr-3">
                        <Check className="h-3 w-3 text-brand-green" />
                      </div>
                      <span><strong>Innovatie:</strong> We zoeken continu naar betere oplossingen.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-green/10 p-1 rounded-full mt-1 mr-3">
                        <Check className="h-3 w-3 text-brand-green" />
                      </div>
                      <span><strong>Transparantie:</strong> We zijn open en eerlijk in alles wat we doen.</span>
                    </li>
                  </ul>
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

export default Missie;
