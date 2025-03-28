
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const Geschiedenis: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Onze Geschiedenis | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek de geschiedenis van Duurzaam Wonen Nederland. Van onze bescheiden start tot een toonaangevende specialist in duurzame woningverbetering." />
        <link rel="canonical" href="https://duurzaamwonen.info/over-ons/geschiedenis" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Onze geschiedenis
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Van start tot heden</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Ontdek hoe Duurzaam Wonen Nederland is uitgegroeid van een klein familiebedrijf tot een toonaangevende specialist in woningverduurzaming.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-12 text-center">Onze tijdlijn</h2>
              </AnimatedSection>
              
              {/* Simple timeline for example */}
              <div className="relative border-l-2 border-brand-green ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 md:pl-0">
                {[
                  {
                    year: "2003",
                    title: "De oprichting",
                    description: "Duurzaam Wonen Nederland wordt opgericht door Jan Jansen met een focus op energiebesparende oplossingen.",
                    position: "left"
                  },
                  {
                    year: "2008",
                    title: "Eerste showroom",
                    description: "Opening van onze eerste showroom in Enschede om klanten beter te kunnen adviseren.",
                    position: "right"
                  },
                  {
                    year: "2013",
                    title: "Uitbreiding diensten",
                    description: "Uitbreiding van onze diensten met complete woningverduurzaming oplossingen.",
                    position: "left"
                  },
                  {
                    year: "2018",
                    title: "Innovatie & groei",
                    description: "Introductie van nieuwe innovatieve producten en uitbreiding naar landelijke dekking.",
                    position: "right"
                  },
                  {
                    year: "2023",
                    title: "20-jarig jubileum",
                    description: "Viering van ons 20-jarig bestaan met meer dan 7500 succesvolle projecten.",
                    position: "left"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative mb-12">
                    <div className="absolute -left-10 md:static md:flex justify-center">
                      <div className="bg-brand-green text-white px-4 py-2 rounded-lg font-semibold md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                        {item.year}
                      </div>
                    </div>
                    
                    <AnimatedSection animation={item.position === "left" ? "fade-in-right" : "fade-in-left"} delay={index * 100}>
                      <div className={`md:w-1/2 md:${item.position === "left" ? "mr-auto md:pr-12" : "ml-auto md:pl-12"} bg-white p-6 rounded-lg shadow-sm`}>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </AnimatedSection>
                  </div>
                ))}
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

export default Geschiedenis;
