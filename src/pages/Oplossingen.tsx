
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import Services from '@/components/Services';
import ContactCTA from '@/components/ContactCTA';

const Oplossingen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Oplossingen voor Verduurzamen van je Huis - Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek alle oplossingen van Duurzaam Wonen Nederland. Van kunststof kozijnen tot gevelbekleding en dakkapellen. Hoogwaardige kwaliteit en professionele service." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
        <link rel="canonical" href="https://duurzaamwonen.info/oplossingen" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section 
          className="relative min-h-[60vh] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/lovable-uploads/hero-background-new.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl">
              <AnimatedSection animation="fade-in-right">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Alle Oplossingen
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Onze Oplossingen
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                  Ontdek ons complete aanbod van hoogwaardige bouwoplossingen. Van kunststof kozijnen tot gevelbekleding en dakkapellen - alles voor de verduurzaming van uw woning.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                    <Link to="/offerte">
                      <span>Vraag offerte aan</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-black hover:bg-gray-800 text-white border-black">
                    <Link to="/contact">
                      Neem contact op
                    </Link>
                  </Button>
                </div>
                
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    <span>15 jaar garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    <span>Professionele montage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    <span>Vrijblijvend advies</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Waarom kiezen voor onze oplossingen?</h2>
                <div className="space-y-4 text-gray-700 text-lg mb-8">
                  <p>
                    Als specialist in woningverduurzaming bieden wij een breed scala aan hoogwaardige bouwoplossingen. 
                    Met meer dan 20 jaar ervaring in de installatietechniek zorgen wij voor kwaliteit die u kunt vertrouwen.
                  </p>
                  <p>
                    Van energiezuinige kozijnen tot duurzame gevelbekleding - al onze producten zijn geselecteerd op kwaliteit, 
                    duurzaamheid en energieprestaties. Ontdek hieronder ons complete aanbod en vind de perfecte oplossing voor uw woning.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-3xl font-bold text-brand-green mb-2">20+</div>
                    <p className="text-gray-700">Jaar ervaring</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-3xl font-bold text-brand-green mb-2">1000+</div>
                    <p className="text-gray-700">Tevreden klanten</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-3xl font-bold text-brand-green mb-2">15</div>
                    <p className="text-gray-700">Jaar garantie</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section - All Products */}
        <Services />

        {/* Contact CTA Section */}
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Oplossingen;
