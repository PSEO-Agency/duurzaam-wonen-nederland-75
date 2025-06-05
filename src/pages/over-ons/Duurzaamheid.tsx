
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sprout, Recycle, Leaf, TreePine } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const Duurzaamheid: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Duurzaamheid | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek hoe Duurzaam Wonen Nederland bijdraagt aan een duurzamere toekomst door middel van onze producten, processen en bedrijfsvoering." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://duurzaamwonen.info/over-ons/duurzaamheid" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Duurzaamheid
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Onze bijdrage aan een duurzame toekomst</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Bij Duurzaam Wonen Nederland zit duurzaamheid in ons DNA. Ontdek hoe wij bijdragen aan een betere wereld door middel van onze producten, processen en bedrijfsvoering.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Sustainability Pillars */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center">Onze duurzaamheidspijlers</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sprout,
                  title: "Duurzame producten",
                  description: "Onze producten zijn ontworpen om lang mee te gaan en energie te besparen, wat resulteert in een kleinere ecologische voetafdruk."
                },
                {
                  icon: Recycle,
                  title: "Circulaire processen",
                  description: "We streven naar circulaire processen door materialen te hergebruiken en afval te minimaliseren tijdens productie en installatie."
                },
                {
                  icon: Leaf,
                  title: "Milieuvriendelijke materialen",
                  description: "We kiezen bewust voor milieuvriendelijke materialen die minder belastend zijn voor het milieu tijdens productie en gebruik."
                },
                {
                  icon: TreePine,
                  title: "Duurzame bedrijfsvoering",
                  description: "Onze bedrijfsvoering is gericht op minimale milieubelasting door efficiënt gebruik van energie en middelen."
                }
              ].map((pillar, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                    <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                      <pillar.icon className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Onze impact</h2>
                <p className="text-lg text-gray-600">
                  Door samen te werken met onze klanten hebben we al een aanzienlijke positieve impact kunnen maken op het milieu.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Energiebesparing", value: "15,6 miljoen", unit: "kWh per jaar" },
                { title: "CO₂-reductie", value: "7.250", unit: "ton per jaar" },
                { title: "Geplaatste kozijnen", value: "45.000+", unit: "duurzame kozijnen" }
              ].map((stat, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
                    <div className="text-brand-green font-bold text-3xl mb-1">{stat.value}</div>
                    <p className="text-gray-600">{stat.unit}</p>
                  </div>
                </AnimatedSection>
              ))}
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

export default Duurzaamheid;
