
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Filter, ArrowLeft, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import WhatAreKozijnen from '@/components/kunststof-kozijnen/WhatAreKozijnen';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import RegionsSection from '@/components/kunststof-kozijnen/RegionsSection';
import Services from '@/components/kunststof-kozijnen/Services';
import Hero from '@/components/Hero';
import ProductFilters from '@/components/kunststof-kozijnen/ProductFilters';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Trocal 76 Kozijn',
    image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
    rating: 4.9,
    reviewCount: 123,
    features: ['Uitstekende isolatie', 'Nederlands fabricaat', 'Onderhoudsarm'],
    price: '€199',
    perUnit: 'per m²',
    category: 'draai-kiep',
    material: 'kunststof',
    color: 'wit',
  },
  {
    id: 2,
    name: 'Trocal 88 Premium Kozijn',
    image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
    rating: 5.0,
    reviewCount: 87,
    features: ['Topprestaties in isolatie', 'Slanke profielen', 'Onderhoudsarm'],
    price: '€249',
    perUnit: 'per m²',
    category: 'vast',
    material: 'kunststof',
    color: 'antraciet',
  },
  {
    id: 3,
    name: 'Gealan S9000 Kozijn',
    image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
    rating: 4.7,
    reviewCount: 56,
    features: ['Triple beglazing mogelijk', 'Duits fabricaat', 'Duurzaam'],
    price: '€229',
    perUnit: 'per m²',
    category: 'schuif',
    material: 'kunststof',
    color: 'grijs',
  },
  {
    id: 4,
    name: 'Veka Softline 82 Kozijn',
    image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
    rating: 4.8,
    reviewCount: 92,
    features: ['Energiezuinig', 'Inbraakwerend', 'Geluidsisolerend'],
    price: '€239',
    perUnit: 'per m²',
    category: 'draai-kiep',
    material: 'kunststof',
    color: 'houtlook',
  },
];

const filters = {
  type: ['Vast kozijn', 'Draai-kiep kozijn', 'Schuifpui'],
  material: ['Kunststof', 'Kunststof met aluminium look'],
  color: ['Wit', 'Antraciet', 'Grijs', 'Crème', 'Houtlook'],
  features: ['Triple beglazing', 'Inbraakwerend', 'Geluidsisolerend', 'Onderhoudsarm'],
};

const KunststofKozijnen: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    type: [],
    material: [],
    color: [],
    features: [],
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter(item => item !== value);
      } else {
        newFilters[category] = [...newFilters[category], value];
      }
      return newFilters;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijnen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Bekijk ons assortiment kunststof kozijnen. Hoogwaardige, energiezuinige en onderhoudsarme kozijnen voor uw woning." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section - Using the same Hero component as homepage */}
        <Hero />
        
        {/* Sticky Navigation */}
        <StickyNavigation />
        
        {/* What are Kunststof Kozijnen Section */}
        <WhatAreKozijnen />
        
        {/* Filter and Products Section */}
        <section id="assortiment" className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-6">Ons assortiment</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                Bekijk ons uitgebreide assortiment kunststof kozijnen en vind de perfecte oplossing voor uw woning.
              </p>
            </AnimatedSection>
            
            {/* Replace with ProductFilters component */}
            <ProductFilters />
          </div>
        </section>
        
        {/* Benefits Section */}
        <section id="voordelen" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-10" animation="fade-in" delay={100}>
              <h2 className="text-3xl font-bold mb-4">Voordelen van kunststof kozijnen</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Onze kunststof kozijnen bieden talloze voordelen voor uw woning en comfort. 
                Ontdek waarom zoveel huiseigenaren kiezen voor deze duurzame oplossing.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection className="bg-white p-6 rounded-lg shadow-sm" animation="fade-in" delay={200}>
                <h3 className="text-xl font-semibold mb-3">Uitstekende isolatie</h3>
                <p className="text-gray-700">
                  Kunststof kozijnen hebben uitstekende isolerende eigenschappen, wat resulteert in minder warmteverlies en lagere energiekosten.
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="bg-white p-6 rounded-lg shadow-sm" animation="fade-in" delay={300}>
                <h3 className="text-xl font-semibold mb-3">Onderhoudsarm</h3>
                <p className="text-gray-700">
                  Anders dan houten kozijnen hoeven kunststof kozijnen niet regelmatig geschilderd te worden. Een simpele schoonmaakbeurt volstaat.
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="bg-white p-6 rounded-lg shadow-sm" animation="fade-in" delay={400}>
                <h3 className="text-xl font-semibold mb-3">Lange levensduur</h3>
                <p className="text-gray-700">
                  Met een levensduur van minimaal 30 jaar zijn kunststof kozijnen een duurzame investering voor uw woning.
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="bg-white p-6 rounded-lg shadow-sm" animation="fade-in" delay={500}>
                <h3 className="text-xl font-semibold mb-3">Inbraakwerend</h3>
                <p className="text-gray-700">
                  Onze kunststof kozijnen zijn voorzien van moderne sluitingen en voldoen aan het Politiekeurmerk Veilig Wonen.
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="bg-white p-6 rounded-lg shadow-sm" animation="fade-in" delay={600}>
                <h3 className="text-xl font-semibold mb-3">Diverse uitvoeringen</h3>
                <p className="text-gray-700">
                  Verkrijgbaar in diverse kleuren en uitvoeringen, waaronder houtlook afwerkingen die niet van echt te onderscheiden zijn.
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="bg-white p-6 rounded-lg shadow-sm" animation="fade-in" delay={700}>
                <h3 className="text-xl font-semibold mb-3">Geluidsisolerend</h3>
                <p className="text-gray-700">
                  Geniet van een rustigere woonomgeving dankzij de goede geluidsisolerende eigenschappen van kunststof kozijnen.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Information Section */}
        <section id="informatie" className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Informatie over kunststof kozijnen</h2>
                  
                  <Tabs defaultValue="algemeen" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="algemeen">Algemeen</TabsTrigger>
                      <TabsTrigger value="materiaal">Materiaal</TabsTrigger>
                      <TabsTrigger value="montage">Montage</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="algemeen" className="space-y-4">
                      <p>
                        Kunststof kozijnen zijn een populaire keuze geworden voor huiseigenaren die op zoek zijn naar 
                        een duurzame, onderhoudsarme en energiebesparende oplossing voor hun woning. Bij Duurzaam Wonen 
                        Nederland bieden wij hoogwaardige kunststof kozijnen van gerenommeerde fabrikanten.
                      </p>
                      <p>
                        Onze kozijnen worden op maat gemaakt en kunnen worden voorzien van verschillende soorten beglazing, 
                        waaronder HR++, triple glas en geluidsisolerend glas. Dit zorgt voor een optimale isolatie van uw woning, 
                        wat resulteert in lagere energiekosten en een hoger wooncomfort.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="materiaal" className="space-y-4">
                      <p>
                        De kunststof kozijnen van Duurzaam Wonen Nederland worden gemaakt van hoogwaardig PVC. Dit materiaal 
                        is uiterst duurzaam, weerbestendig en heeft een lange levensduur. In tegenstelling tot hout is PVC 
                        ongevoelig voor rot, schimmel en aantasting door insecten.
                      </p>
                      <p>
                        Onze kozijnen zijn verkrijgbaar in diverse kleuren en afwerkingen, waaronder houtlook-uitvoeringen 
                        die niet te onderscheiden zijn van echte houten kozijnen. Het materiaal is UV-bestendig, waardoor 
                        de kleur jarenlang mooi blijft zonder verkleuring.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="montage" className="space-y-4">
                      <p>
                        De montage van kunststof kozijnen is precisiewerk dat door onze ervaren monteurs wordt uitgevoerd. 
                        Een correcte montage is essentieel voor het optimaal functioneren van de kozijnen en de isolatiewaarde.
                      </p>
                      <p>
                        Onze monteurs zorgen ervoor dat de kozijnen waterdicht worden geplaatst en goed worden aangesloten 
                        op de bestaande constructie. Na montage wordt alles netjes afgewerkt, zowel aan de binnen- als aan 
                        de buitenzijde. De gemiddelde montagetijd is afhankelijk van het aantal kozijnen en de complexiteit van de situatie.
                      </p>
                    </TabsContent>
                  </Tabs>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/2">
                <AnimatedSection className="rounded-lg overflow-hidden shadow-md" animation="fade-in" delay={200}>
                  <img 
                    src="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png" 
                    alt="Kunststof kozijn detail" 
                    className="w-full h-auto"
                  />
                </AnimatedSection>
                
                <AnimatedSection className="mt-6 bg-gray-50 p-6 rounded-lg" animation="fade-in" delay={300}>
                  <h3 className="text-xl font-semibold mb-3">Wist u dat?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={18} className="text-brand-green mr-2 mt-1" />
                      <span>Kunststof kozijnen kunnen tot 30% besparing opleveren op uw energierekening.</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-brand-green mr-2 mt-1" />
                      <span>Moderne kunststof kozijnen zijn 100% recyclebaar en daarmee een milieuvriendelijke keuze.</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-brand-green mr-2 mt-1" />
                      <span>De gemiddelde levensduur van kunststof kozijnen is minimaal 30 jaar.</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-brand-green mr-2 mt-1" />
                      <span>Kunststof kozijnen kunnen bijdragen aan een betere energielabel voor uw woning.</span>
                    </li>
                  </ul>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section - Now positioned before FAQ */}
        <Services />
        
        {/* FAQ Section */}
        <section id="faq" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-10" animation="fade-in">
              <h2 className="text-3xl font-bold mb-4">Veelgestelde vragen</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Antwoorden op de meest gestelde vragen over onze kunststof kozijnen.
              </p>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AnimatedSection animation="fade-in" delay={100}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">
                      Hoe lang gaan kunststof kozijnen mee?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Kunststof kozijnen hebben een gemiddelde levensduur van 30 tot 50 jaar, afhankelijk van de kwaliteit en 
                        het onderhoud. Onze kozijnen worden geleverd met garantie en zijn ontworpen voor een lange levensduur.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200}>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">
                      Zijn kunststof kozijnen onderhoudsvriendelijk?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Ja, kunststof kozijnen zijn zeer onderhoudsvriendelijk. Ze hoeven niet geschilderd te worden en een 
                        regelmatige schoonmaakbeurt met water en milde zeep is voldoende om ze in goede staat te houden.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300}>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">
                      Kan ik subsidie krijgen voor kunststof kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        In sommige gemeenten is het mogelijk subsidie te krijgen voor energiebesparende maatregelen, waaronder 
                        het plaatsen van kunststof kozijnen met hoogrendementsglas. Onze adviseurs kunnen u informeren over de 
                        actuele mogelijkheden in uw regio.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={400}>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      Kan ik mijn oude kozijnen inruilen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Bij renovatieprojecten verwijderen wij de oude kozijnen en zorgen voor een correcte afvoer hiervan. 
                        Er is geen specifiek inruilprogramma, maar wij nemen de afvoer en recycling van de oude materialen voor onze rekening.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={500}>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-semibold">
                      Hoe snel kunnen kunststof kozijnen geplaatst worden?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Na bestelling hebben we gemiddeld 4-6 weken productietijd nodig. De eigenlijke installatie gaat 
                        vrij snel: afhankelijk van het aantal kozijnen kan dit variëren van één dag tot enkele dagen.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={600}>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-lg font-semibold">
                      Kan ik kunststof kozijnen in elke kleur krijgen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Wij bieden een uitgebreid assortiment kleuren aan, waaronder standaardkleuren en speciale afwerkingen 
                        zoals houtnerf. Ook tweekleurige kozijnen zijn mogelijk, bijvoorbeeld wit aan de binnenkant en een andere kleur aan de buitenkant.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Regions Section - Now positioned below FAQ */}
        <RegionsSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-brand-green text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-4">Klaar voor nieuwe kunststof kozijnen?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Vraag vrijblijvend een offerte aan of maak een afspraak in onze showroom om onze kunststof kozijnen te bekijken.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-brand-green hover:bg-gray-100 px-6">
                  Offerte aanvragen
                </Button>
                <Button className="bg-transparent border border-white hover:bg-white/10 px-6">
                  Showroom bezoeken
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default KunststofKozijnen;
