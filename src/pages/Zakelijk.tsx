
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Briefcase, TrendingUp, Users, Coins, BadgeCheck, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const Zakelijk: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Zakelijke Samenwerking | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Word partner van Duurzaam Wonen Nederland en profiteer van bulkprijzen, ondersteuning en meer projectcapaciteit voor groei van uw bedrijf." />
        <link rel="canonical" href="https://duurzaamwonen.info/zakelijk" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-2 bg-brand-green rounded-full mb-6">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Zakelijke samenwerking</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  Word partner van Duurzaam Wonen Nederland en profiteer van exclusieve voordelen voor de groei van uw onderneming.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-brand-green hover:bg-brand-green-dark text-white"
                  >
                    <span>Word partner</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    <span>Meer informatie</span>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Voordelen van partnership</h2>
                <p className="text-lg text-gray-600">
                  Als partner van Duurzaam Wonen Nederland profiteert u van exclusieve voordelen die uw bedrijf helpen groeien, uw capaciteit vergroten en uw omzet en winst verhogen.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-100">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <Coins className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Bulkprijzen</h3>
                  <p className="text-gray-600">
                    Profiteer van aantrekkelijke bulkprijzen voor al onze producten en diensten, waardoor u concurrerende prijzen kunt aanbieden aan uw klanten met behoud van uw marge.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-100">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <TrendingUp className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Groei ondersteuning</h3>
                  <p className="text-gray-600">
                    Wij bieden ondersteuning bij de groei van uw onderneming door middel van marketingmateriaal, trainingen en projectbegeleiding om uw bedrijf te laten groeien.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-100">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <Users className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Meer projectcapaciteit</h3>
                  <p className="text-gray-600">
                    Vergroot uw projectcapaciteit door gebruik te maken van onze expertise en resources. Neem meer projecten aan zonder uw team direct uit te breiden.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-100">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <BadgeCheck className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Kwaliteitsgarantie</h3>
                  <p className="text-gray-600">
                    Onze producten en diensten voldoen aan de hoogste kwaliteitsnormen, waardoor u met vertrouwen kunt samenwerken en een uitstekende reputatie opbouwt.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={500}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-100">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <ShieldCheck className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Technische ondersteuning</h3>
                  <p className="text-gray-600">
                    Ontvang technische ondersteuning van onze experts voor al uw projecten, inclusief ontwerp, installatie en after-sales service voor een zorgeloze samenwerking.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={600}>
                <div className="bg-brand-green p-6 rounded-lg shadow-md h-full text-white">
                  <h3 className="text-xl font-semibold mb-3">Exclusief partnerportaal</h3>
                  <p className="mb-4">
                    Krijg toegang tot ons exclusieve partnerportaal met:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Directe orderverwerking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Projectbeheer tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Marketingmateriaal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Technische documentatie</span>
                    </li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white text-brand-green hover:bg-gray-100"
                  >
                    <span>Aanmelden voor portaal</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Partnership Program */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Ons partnerprogramma</h2>
                <p className="text-lg text-gray-600">
                  Kies het partnerniveau dat het beste past bij de behoeften van uw onderneming.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Basis partner</h3>
                  <div className="text-brand-green font-bold text-2xl mb-4">5% korting</div>
                  <p className="text-gray-600 mb-4">Ideaal voor kleinere ondernemingen die af en toe samenwerken.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Toegang tot partnerportaal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Basis marketing materiaal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">E-mail ondersteuning</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white">
                    Word Basis partner
                  </Button>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-brand-green relative transform scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-sm font-medium">
                    Aanbevolen
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium partner</h3>
                  <div className="text-brand-green font-bold text-2xl mb-4">12% korting</div>
                  <p className="text-gray-600 mb-4">Voor bedrijven die regelmatig met ons samenwerken.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Alles van Basis partner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Prioritaire ondersteuning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Technische training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Co-marketing mogelijkheden</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white">
                    Word Premium partner
                  </Button>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Elite partner</h3>
                  <div className="text-brand-green font-bold text-2xl mb-4">20% korting</div>
                  <p className="text-gray-600 mb-4">Voor grootschalige samenwerking en projecten.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Alles van Premium partner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Dedicated accountmanager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Gezamenlijke projectontwikkeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm">Vroege toegang tot nieuwe producten</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white">
                    Word Elite partner
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Wat onze partners zeggen</h2>
                <p className="text-lg text-gray-600">
                  Ontdek waarom bedrijven kiezen voor een partnership met Duurzaam Wonen Nederland.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Bouwbedrijf van der Veen</h4>
                      <p className="text-sm text-gray-600">Premium Partner sinds 2019</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Dankzij onze samenwerking met Duurzaam Wonen Nederland hebben we onze projectcapaciteit met 30% kunnen verhogen, zonder dat we ons team hoefden uit te breiden."
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Kozijnen Specialist B.V.</h4>
                      <p className="text-sm text-gray-600">Elite Partner sinds 2021</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "De technische ondersteuning en de bulkprijzen hebben ons geholpen om concurrerender te worden in de markt, met behoud van onze marges."
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Duurzaam Renoveren</h4>
                      <p className="text-sm text-gray-600">Basis Partner sinds 2022</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Als startend bedrijf hebben we enorm geprofiteerd van de marketing ondersteuning en trainingen. Onze omzet is in één jaar tijd verdubbeld."
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

export default Zakelijk;
