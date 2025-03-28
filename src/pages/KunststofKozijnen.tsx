import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Filter, ArrowRight, ArrowDown, Star, ChevronDown } from 'lucide-react';
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
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';
import ProductFilters from '@/components/kunststof-kozijnen/ProductFilters';
import KozijnenHero from '@/components/kunststof-kozijnen/KozijnenHero';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

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
        <KozijnenHero />
        
        <StickyNavigation />
        
        <section id="introductie" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Kunststof Kozijnen - De Ideale Oplossing</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    Kunststof kozijnen zijn dé ideale keuze voor wie op zoek is naar een combinatie van duurzaamheid, betaalbaarheid en stijl. 
                    Met hun onderhoudsvrije eigenschappen, uitstekende isolatie en lange levensduur bieden ze een perfecte oplossing voor 
                    zowel moderne als traditionele woningen. Of je nu energiekosten wilt besparen, de waarde van je woning wilt verhogen, 
                    of gewoon een strakke, stijlvolle uitstraling wilt creëren – kunststof kozijnen bieden het allemaal.
                  </p>
                  
                  <p className="text-lg">
                    Dankzij hun energiezuinige eigenschappen zorgen kunststof kozijnen voor een betere isolatie, waardoor je minder 
                    warmte verliest en kunt besparen op stookkosten. Bovendien zijn ze onderhoudsvrij, wat betekent dat je geen tijd 
                    en geld kwijt bent aan schilderwerk of complexe reinigingsbeurten. En met een breed scala aan kleuren, stijlen en 
                    glasopties passen kunststof kozijnen perfect bij jouw persoonlijke smaak en woningstijl.
                  </p>
                  
                  <p className="text-lg font-medium">
                    Wil je meer weten over de voordelen van kunststof kozijnen?
                  </p>
                  
                  <p className="text-lg">
                    Ontdek alles over kunststof kozijnen, inclusief prijzen, montageopties en de vele kleurmogelijkheden, 
                    en maak vandaag nog een weloverwogen keuze!
                  </p>
                </div>
                
                <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Ga direct naar de volgende onderwerpen:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <a href="#wat-zijn" className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                      <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                      <span>Wat zijn Kunststof Kozijnen?</span>
                    </a>
                    <a href="#voordelen" className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                      <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                      <span>Voordelen Kunststof Kozijnen</span>
                    </a>
                    <a href="#diensten" className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                      <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                      <span>Onze Diensten</span>
                    </a>
                    <a href="#soorten" className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                      <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                      <span>Soorten Kunststof Kozijnen</span>
                    </a>
                    <a href="#kleuren" className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                      <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                      <span>Verschillende Kleuren</span>
                    </a>
                    <a href="#montage" className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                      <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                      <span>Montage Opties</span>
                    </a>
                    <a href="#regio" className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                      <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                      <span>Kunststof Kozijnen in jouw regio</span>
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-brand-green hover:bg-brand-green-dark text-white px-6">
                    <span>Vraag nu vrijblijvend een offerte aan</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <WhatAreKozijnen />
        
        <section id="voordelen" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Voordelen van Kunststof Kozijnen</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Waarom kiezen voor kunststof kozijnen? Kunststof kozijnen zijn onderhoudsarm, energiezuinig en betaalbaar. 
                    Ze bieden uitstekende isolatie, helpen energiekosten te verlagen en gaan meer dan 30 jaar mee. 
                    Ze zijn veelzijdig, beschikbaar in verschillende kleuren en stijlen, en vaak gemaakt van recyclebaar materiaal.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Belangrijkste voordelen:</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                      <span className="text-gray-700">Onderhoudsarm – geen schilderwerk nodig.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                      <span className="text-gray-700">Energiezuinig – bespaar op stookkosten.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                      <span className="text-gray-700">Lange levensduur – bestand tegen weer en wind.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                      <span className="text-gray-700">Betaalbaar – lagere kosten dan hout of aluminium.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                      <span className="text-gray-700">Duurzaam – recyclebaar en milieuvriendelijk.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4">
                    <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                      <span>Overweeg kunststof kozijnen? Vraag vrijblijvend een offerte aan!</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in" delay={200}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
                      <div className="text-3xl font-bold text-brand-green mb-2">30+</div>
                      <p className="text-gray-700">Jaar levensduur zonder groot onderhoud</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
                      <div className="text-3xl font-bold text-brand-green mb-2">20%</div>
                      <p className="text-gray-700">Gemiddelde energiebesparing per jaar</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
                      <div className="text-3xl font-bold text-brand-green mb-2">100%</div>
                      <p className="text-gray-700">Recyclebaar materiaal voor duurzaamheid</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
                      <div className="text-3xl font-bold text-brand-green mb-2">0</div>
                      <p className="text-gray-700">Schilderbeurten nodig tijdens levensduur</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <section id="types" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-6">Kunststof Kozijnen - Alle Opties</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                Ontdek alle mogelijkheden voor kunststof kozijnen, van verschillende types en kleuren tot diverse afmetingen.
                Filter op uw specifieke wensen om het perfecte kozijn voor uw woning te vinden.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <AnimatedSection animation="fade-in" delay={100}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Type Kozijn</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Vast kozijn</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Draai-kiep kozijn</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Schuifpui</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Stolpstel kozijn</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Harmonica kozijn</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <a href="#soorten" className="text-brand-green flex items-center hover:underline">
                        <span>Bekijk alle types</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Kleur Kozijn</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-white border border-gray-300 mr-2"></div>
                        <span>Wit</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-black mr-2"></div>
                        <span>Zwart</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-700 mr-2"></div>
                        <span>Antraciet</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-amber-800 mr-2"></div>
                        <span>Houtlook</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span>Grijs</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <Link to="/kunststof-kozijnen/kleuren" className="text-brand-green flex items-center hover:underline">
                        <span>Bekijk alle kleuren</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Kozijn Afmeting</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>100x100 cm</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>200x100 cm</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>300x100 cm</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>400x100 cm</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Maatwerk</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <a href="#sizes" className="text-brand-green flex items-center hover:underline">
                        <span>Bekijk alle afmetingen</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={400}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Montage</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Inclusief montage</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Exclusief montage</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Zelfmontage</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Professioneel advies</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Inmeten service</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <a href="#montage" className="text-brand-green flex items-center hover:underline">
                        <span>Bekijk montage opties</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={500}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Prijssegment</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Goedkope kozijnen</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Middensegment</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Premium kozijnen</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Aanbiedingen</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Incl. subsidie</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <a href="#prijzen" className="text-brand-green flex items-center hover:underline">
                        <span>Bekijk prijssegmenten</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={600}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">(Keur)Merken</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Schüco</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Veka</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Kömmerling</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Deceuninck</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                        <span>Gealan</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <a href="#merken" className="text-brand-green flex items-center hover:underline">
                        <span>Bekijk alle merken</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <section id="assortiment" className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-6">Filter ons assortiment</h2>
            </AnimatedSection>
            
            <ProductFilters />
          </div>
        </section>
        
        <Services />
        
        <Projects />
        
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
                        Onze kozijnen zijn verkrijgbaar in diverse kleuren en afwerkingen, waaronder houtnerf-uitvoeringen 
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
        
        <Workflow />
        
        <Reviews />
        
        <RegionsSection />
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default KunststofKozijnen;
