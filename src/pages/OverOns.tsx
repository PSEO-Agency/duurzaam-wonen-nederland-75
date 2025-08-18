import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Award, Calendar, Users, Sprout, Building, History, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';

const OverOns: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Over ons - Duurzaam Wonen Nederland</title>
        <meta name="description" content="Leer meer over Duurzaam Wonen Nederland, onze missie, visie en het team achter onze duurzame woningoplossingen." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://duurzaamwonen.info/over-ons" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Wie zijn wij
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Over Duurzaam Wonen Nederland</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Duurzaam Wonen Nederland is specialist in het verduurzamen van woningen met 
                  meer dan 20 jaar ervaring. Ontdek wie we zijn en wat we voor u kunnen betekenen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    asChild
                    className="bg-brand-green hover:bg-brand-green-dark text-white"
                  >
                    <Link to="/over-ons/team">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Ontmoet ons team</span>
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    asChild
                    variant="outline" 
                    className="border-gray-300"
                  >
                    <Link to="/over-ons/missie">
                      <History className="mr-2 h-4 w-4" />
                      <span>Onze missie</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-right">
                <h2 className="text-3xl font-bold mb-6">Uw partner voor woningverduurzaming</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Sinds onze oprichting in 2003 hebben we ons ontwikkeld tot een toonaangevende 
                  specialist in duurzame woningverbetering. Met een team van ruim 45 medewerkers 
                  bieden we oplossingen die niet alleen energie besparen, maar ook het comfort en 
                  de waarde van woningen verhogen.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Onze kracht ligt in een persoonlijke aanpak en hoogwaardige, onderhoudsarme 
                  producten. Van kunststof kozijnen tot complete dakopbouwen - we hebben alle 
                  expertise in huis om uw woning te verduurzamen.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4">
                    <div className="text-brand-green font-bold text-3xl mb-1">20+</div>
                    <p className="text-gray-600 text-sm">Jaar ervaring</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-brand-green font-bold text-3xl mb-1">45+</div>
                    <p className="text-gray-600 text-sm">Medewerkers</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-brand-green font-bold text-3xl mb-1">7500+</div>
                    <p className="text-gray-600 text-sm">Projecten</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-brand-green font-bold text-3xl mb-1">4.9/5</div>
                    <p className="text-gray-600 text-sm">Klanttevredenheid</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white">
                    <Link to="/over-ons/missie">
                      <span>Onze missie & visie</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gray-300">
                    <Link to="/over-ons/duurzaamheid">
                      <Sprout className="mr-2 h-4 w-4 text-brand-green" />
                      <span>Duurzaamheid</span>
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="relative rounded-lg overflow-hidden h-[500px]">
                  <img 
                    src="/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png"
                    alt="Duurzaam Wonen Nederland team" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-green rounded-full p-2">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-white">
                        <span className="block text-sm font-medium">Opgericht in</span>
                        <span className="block text-xl font-bold">2003</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Quick Links */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold text-center mb-12">Ontdek meer over ons</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <Link to="/over-ons/team">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                      <Users className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ons team</h3>
                    <p className="text-gray-700 mb-4">
                      Maak kennis met de mensen achter Duurzaam Wonen Nederland. Een gedreven team 
                      van experts die klaarstaan om uw woning te verduurzamen.
                    </p>
                    <div className="flex items-center text-brand-green font-medium">
                      <span>Ontmoet het team</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <Link to="/over-ons/missie">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                      <Award className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Onze missie</h3>
                    <p className="text-gray-700 mb-4">
                      Wij geloven in duurzame, comfortabele woningen voor iedereen. Lees meer over 
                      onze missie, visie en kernwaarden die ons werk elke dag vormgeven.
                    </p>
                    <div className="flex items-center text-brand-green font-medium">
                      <span>Ontdek onze missie</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <Link to="/over-ons/duurzaamheid">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                      <Sprout className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Duurzaamheid</h3>
                    <p className="text-gray-700 mb-4">
                      Duurzaamheid zit in ons DNA. Ontdek hoe wij bijdragen aan een beter milieu
                      door middel van onze producten, processen en bedrijfsvoering.
                    </p>
                    <div className="flex items-center text-brand-green font-medium">
                      <span>Lees meer</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={400}>
                <Link to="/projecten">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                      <Building className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Onze projecten</h3>
                    <p className="text-gray-700 mb-4">
                      Bekijk een selectie van de projecten die wij hebben gerealiseerd en laat u 
                      inspireren door de mogelijkheden voor uw eigen woning.
                    </p>
                    <div className="flex items-center text-brand-green font-medium">
                      <span>Bekijk projecten</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={500}>
                <Link to="/over-ons/vacatures">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                      <MessageCircle className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Vacatures</h3>
                    <p className="text-gray-700 mb-4">
                      Op zoek naar een nieuwe uitdaging? Ontdek onze vacatures en word onderdeel van ons team.
                    </p>
                    <div className="flex items-center text-brand-green font-medium">
                      <span>Bekijk vacatures</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={600}>
                <Link to="/over-ons/vacatures">
                  <div className="bg-brand-green p-6 rounded-lg shadow-sm h-full text-white">
                    <h3 className="text-xl font-semibold mb-3">Werken bij ons</h3>
                    <p className="mb-4">
                      Op zoek naar een nieuwe uitdaging? Ontdek onze vacatures en word onderdeel van ons team.
                    </p>
                    <div className="flex items-center font-medium">
                      <span>Bekijk vacatures</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Waarom klanten voor ons kiezen</h2>
                <p className="text-lg text-gray-600">
                  Er zijn veel redenen waarom klanten vertrouwen op onze expertise en service.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Kwaliteit",
                  description: "Hoogwaardige, duurzame producten met lange levensduur en uitstekende garantie."
                },
                {
                  icon: Users,
                  title: "Expertise",
                  description: "Meer dan 20 jaar ervaring en een team van gespecialiseerde vakmensen."
                },
                {
                  icon: MessageCircle,
                  title: "Persoonlijk",
                  description: "Persoonlijke benadering, duidelijke communicatie en één aanspreekpunt."
                },
                {
                  icon: Sprout,
                  title: "Duurzaam",
                  description: "Milieuvriendelijke materialen en processen voor een betere toekomst."
                }
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className="text-center">
                    <div className="bg-brand-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
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

export default OverOns;
