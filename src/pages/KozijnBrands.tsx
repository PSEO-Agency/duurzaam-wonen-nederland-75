import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import Services from '@/components/kunststof-kozijnen/Services';
import Projects from '@/components/Projects';
import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';

const KozijnBrands: React.FC = () => {
  const brands = [
    {
      name: 'Schüco',
      logo: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png',
      country: 'Duitsland',
      founded: '1951',
      rating: 5,
      features: ['Premium kwaliteit', 'Uitstekende isolatie', 'Hoogwaardig design', 'Innovatieve systemen', 'Lange levensduur'],
      description: 'Schüco behoort tot de absolute top in de kozijnenindustrie. Het Duitse merk staat bekend om zijn innovatieve oplossingen, hoogwaardige kwaliteit en strakke design. De kunststof kozijnen van Schüco bieden uitstekende isolatiewaarden en zijn beschikbaar in diverse uitvoeringen.',
      profileSystems: ['Schüco Living', 'Schüco CT 70', 'Schüco SI 82'],
      priceIndication: 'Hoog'
    },
    {
      name: 'Veka',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', // Placeholder image
      country: 'Duitsland',
      founded: '1969',
      rating: 4.8,
      features: ['Hoogwaardige kwaliteit', 'Duurzame profielen', 'Breed assortiment', 'Goede isolatie', 'Kleurvast'],
      description: 'Veka is één van de grootste producenten van kunststof kozijnprofielen ter wereld. Het Duitse kwaliteitsmerk staat bekend om zijn robuuste profielen in Klasse A-kwaliteit. Veka-profielen zijn duurzaam, bieden uitstekende isolatie en zijn in vele uitvoeringen verkrijgbaar.',
      profileSystems: ['Veka Softline 82', 'Veka Softline 76', 'Veka Alphaline 90'],
      priceIndication: 'Midden tot hoog'
    },
    {
      name: 'Kömmerling',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', // Placeholder image
      country: 'Duitsland',
      founded: '1897',
      rating: 4.7,
      features: ['Uitstekende isolatie', 'Lange traditie', 'Hoge kwaliteit', 'Innovatief', 'Duurzaam'],
      description: 'Kömmerling produceert al meer dan 120 jaar kozijnprofielen en staat bekend om zijn constante innovatie en kwaliteit. Hun kunststof profielsystemen behoren tot de top in isolatiewaarden en zijn verkrijgbaar in diverse uitvoeringen, van standaard tot passief-geschikt.',
      profileSystems: ['Kömmerling 76', 'Kömmerling 88', 'PremiDoor 76'],
      priceIndication: 'Midden tot hoog'
    },
    {
      name: 'Gealan',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', // Placeholder image
      country: 'Duitsland',
      founded: '1921',
      rating: 4.5,
      features: ['Goede prijs-kwaliteit', 'Innovatieve oppervlaktes', 'Milieuvriendelijk', 'Breed assortiment', 'Betrouwbaar'],
      description: 'Gealan is een Duits merk dat bekend staat om zijn innovatieve oplossingen en goede prijs-kwaliteitverhouding. Het bedrijf heeft een bijzondere focus op milieuvriendelijke productie en recycling. Gealan biedt diverse profielsystemen voor verschillende toepassingen.',
      profileSystems: ['Gealan S9000', 'Gealan S8000', 'Gealan Futura'],
      priceIndication: 'Laag tot midden'
    },
    {
      name: 'Deceuninck',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', // Placeholder image
      country: 'België',
      founded: '1937',
      rating: 4.6,
      features: ['Brede kleurkeuze', 'Elegant design', 'Goede isolatie', 'Duurzaam', 'Innovatief'],
      description: 'Deceuninck is een Belgisch bedrijf met een sterke reputatie in kunststof bouwproducten. Hun kozijnprofielen kenmerken zich door elegante vormgeving, brede kleurmogelijkheden en goede isolatiewaarden. Deceuninck heeft een sterke focus op duurzaamheid en recycling.',
      profileSystems: ['Deceuninck Zendow', 'Deceuninck Zendow#neo', 'Deceuninck Elegant'],
      priceIndication: 'Midden'
    },
    {
      name: 'Rehau',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', // Placeholder image
      country: 'Duitsland',
      founded: '1948',
      rating: 4.7,
      features: ['Hoogwaardige kwaliteit', 'Uitstekende isolatie', 'Breed assortiment', 'Innovatief', 'Duurzaam'],
      description: 'Rehau is een toonaangevende fabrikant van polymeeroplossingen, waaronder hoogwaardige kozijnprofielen. Het Duitse bedrijf is bekend om zijn innovatieve technologieën, constante kwaliteit en uitstekende isolatiewaarden. Rehau biedt profielsystemen voor diverse toepassingen.',
      profileSystems: ['Rehau Synego', 'Rehau Geneo', 'Rehau Euro-Design'],
      priceIndication: 'Midden tot hoog'
    }
  ];

  const comparisonCriteria = [
    { criterion: 'Isolatiewaarde (U-waarde)', explanation: 'Hoe lager de U-waarde, hoe beter de isolatie. Premium merken bieden profielen met U-waardes tot 0,73 W/m²K.' },
    { criterion: 'Profieldikte', explanation: 'De wanddikte van het profiel bepaalt de duurzaamheid en stabiliteit. Klasse A-profielen (≥2,8mm) zijn het hoogst geclassificeerd.' },
    { criterion: 'Kamers in profiel', explanation: 'Meer kamers in het profiel zorgen voor betere isolatie. Premium profielen hebben vaak 6+ kamers.' },
    { criterion: 'Inbouwdiepte', explanation: 'Diepere profielen (76-90mm) bieden betere isolatie dan standaard profielen (70mm).' },
    { criterion: 'Afdichtingen', explanation: 'Drie afdichtingen (middendichting) bieden betere isolatie dan twee afdichtingen.' },
    { criterion: 'Versterking', explanation: 'De kwaliteit van de staalversterking in het profiel bepaalt de stabiliteit en levensduur.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijnen Merken | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek de topmerken in kunststof kozijnen: Schüco, Veka, Kömmerling en meer. Vergelijk kwaliteit, eigenschappen en prijsindicaties van verschillende fabrikanten." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/merken" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                Merken Kunststof Kozijnen
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                De Beste Merken Voor Kunststof Kozijnen
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Ontdek de toonaangevende fabrikanten van kunststof kozijnen en vergelijk hun kenmerken, specificaties en prijsindicaties om de beste keuze te maken voor uw woning.
              </p>
            </div>
          </div>
        </section>
        
        <StickyNavigation />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Toonaangevende Merken</h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                Bij Duurzaam Wonen Nederland werken we uitsluitend met hoogwaardige merken die kwaliteit, duurzaamheid en innovatie garanderen. Hieronder vindt u een overzicht van de merken waar wij mee samenwerken.
              </p>
              
              <div className="space-y-10">
                {brands.map((brand, index) => (
                  <AnimatedSection key={brand.name} animation="fade-in" delay={index * 100}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 bg-gray-50 p-6 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <img 
                              src={brand.logo} 
                              alt={`${brand.name} logo`} 
                              className="h-14 object-contain"
                            />
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < Math.floor(brand.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            <div>
                              <span className="text-sm text-gray-500">Land van herkomst</span>
                              <p className="font-medium">{brand.country}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">Opgericht</span>
                              <p className="font-medium">{brand.founded}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">Prijsindicatie</span>
                              <p className="font-medium">{brand.priceIndication}</p>
                            </div>
                          </div>
                          
                          {/* Certification Logos Section - Similar to Hero components */}
                          <div className="mt-auto">
                            <h4 className="text-sm font-medium mb-3">Keurmerken:</h4>
                            <div className="grid grid-cols-3 grid-rows-2 gap-4">
                              <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="KOMO-certificaat">
                                <img src="/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png" alt="KOMO" className="h-10 max-w-full object-contain" />
                              </div>
                              <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="CE-markering">
                                <img src="/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png" alt="CE" className="h-10 max-w-full object-contain" />
                              </div>
                              <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="PKVW Keurmerk">
                                <img src="/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png" alt="PKVW" className="h-12 max-w-full object-contain" />
                              </div>
                              <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="Nationaal Warmtefonds">
                                <img src="/lovable-uploads/84861c8c-4187-4055-a956-1249dbe30fe3.png" alt="Warmtefonds" className="h-12 max-w-full object-contain" />
                              </div>
                              <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="Schüco">
                                <img src="/lovable-uploads/4d42855f-0a4b-48ef-b632-25f5f01975fc.png" alt="Schüco" className="h-10 max-w-full object-contain" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="lg:w-2/3 p-6">
                          <h3 className="text-2xl font-bold mb-3">{brand.name}</h3>
                          <p className="text-gray-700 mb-4">
                            {brand.description}
                          </p>
                          
                          <h4 className="font-semibold mb-2">Belangrijkste kenmerken:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            {brand.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <Check className="h-5 w-5 text-brand-green mt-0.5 mr-2 shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                            <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                              <span>Bekijk producten</span>
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline">
                              <span>Vraag offerte aan</span>
                            </Button>
                            <Button variant="link" className="ml-auto" asChild>
                              <a href={`https://www.${brand.name.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <span>Bezoek website</span>
                                <ExternalLink className="ml-1 h-3.5 w-3.5" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Hoe merken vergelijken?</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Bij het vergelijken van verschillende merken kunststof kozijnen is het belangrijk om naar de juiste criteria te kijken. Hieronder vindt u de belangrijkste punten om te overwegen.
                  </p>
                  
                  <div className="space-y-4">
                    {comparisonCriteria.map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold mb-1">{item.criterion}</h3>
                        <p className="text-gray-700 text-sm">{item.explanation}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                      <span>Vraag persoonlijk advies</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in" delay={200}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-brand-green" />
                        <span>Waarom kiezen voor A-merken?</span>
                      </h3>
                      
                      <p className="text-gray-700 mb-6">
                        Hoewel A-merken mogelijk een hogere initiële investering vereisen, bieden ze verschillende voordelen die deze keuze op de lange termijn rechtvaardigen:
                      </p>
                      
                      <ul className="space-y-4 mb-6">
                        <li className="flex items-start">
                          <div className="bg-brand-green/10 p-2 rounded-full mr-3 shrink-0">
                            <ShieldCheck className="h-5 w-5 text-brand-green" />
                          </div>
                          <div>
                            <strong className="block text-gray-800 mb-1">Kwaliteit en duurzaamheid</strong>
                            <p className="text-gray-700 text-sm">A-merken gebruiken hoogwaardige materialen en hebben strenge kwaliteitscontroles. Dit resulteert in producten met een langere levensduur en betere prestaties op lange termijn.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-brand-green/10 p-2 rounded-full mr-3 shrink-0">
                            <Star className="h-5 w-5 text-brand-green" />
                          </div>
                          <div>
                            <strong className="block text-gray-800 mb-1">Innovatie en technologie</strong>
                            <p className="text-gray-700 text-sm">Toonaangevende merken investeren continu in R&D, wat resulteert in geavanceerde oplossingen voor betere isolatie, veiligheid en gebruiksgemak.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-brand-green/10 p-2 rounded-full mr-3 shrink-0">
                            <Check className="h-5 w-5 text-brand-green" />
                          </div>
                          <div>
                            <strong className="block text-gray-800 mb-1">Garantie en service</strong>
                            <p className="text-gray-700 text-sm">A-merken bieden doorgaans uitgebreidere garantievoorwaarden en betere after-sales service, wat zorgt voor gemoedsrust op lange termijn.</p>
                          </div>
                        </li>
                      </ul>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium mb-2">Onze merkkeuze</h4>
                        <p className="text-gray-700 text-sm">
                          Bij Duurzaam Wonen Nederland werken we voornamelijk met Schüco, Veka en Kömmerling kozijnen. Deze merken hebben in onze praktijkervaring bewezen de beste combinatie te bieden van kwaliteit, duurzaamheid, design en prijs-kwaliteitverhouding. Afhankelijk van uw wensen en budget adviseren wij het meest geschikte merk en profielsysteem.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Keurmerken en certificeringen</h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                Naast de reputatie van het merk zijn keurmerken en certificeringen belangrijke indicatoren voor kwaliteit en duurzaamheid. Hieronder vindt u de belangrijkste keurmerken voor kunststof kozijnen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <AnimatedSection animation="fade-in" delay={100}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                          <ShieldCheck className="h-6 w-6 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-semibold">KOMO-certificaat</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Het KOMO-keurmerk garandeert dat de kozijnen voldoen aan de Nederlandse eisen voor kwaliteit, veiligheid en duurzaamheid. Het wordt verstrekt na uitgebreide tests en regelmatige controles.
                      </p>
                      <p className="text-sm text-gray-600">
                        Alle door ons geleverde kozijnen beschikken over een KOMO-certificaat.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                          <ShieldCheck className="h-6 w-6 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-semibold">CE-markering</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        De CE-markering geeft aan dat de kozijnen voldoen aan de Europese richtlijnen voor bouwproducten. Het betreft eisen op het gebied van mechanische weerstand, brandveiligheid, hygiëne, geluid en energiebesparing.
                      </p>
                      <p className="text-sm text-gray-600">
                        Alle door ons geleverde kozijnen zijn voorzien van CE-markering.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                          <ShieldCheck className="h-6 w-6 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-semibold">RAL Gütezeichen</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Het Duitse RAL-keurmerk staat voor hoogwaardige kwaliteit en wordt alleen verleend aan producten die voldoen aan strenge eisen wat betreft materiaalgebruik, duurzaamheid en productieprocessen.
                      </p>
                      <p className="text-sm text-gray-600">
                        Alle Duitse merken in ons assortiment hebben het RAL Gütezeichen.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={400}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                          <ShieldCheck className="h-6 w-6 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-semibold">VKG Keurmerk</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Het VKG-keurmerk (Vereniging Kunststof Gevelelementenindustrie) garandeert dat de kozijnen voldoen aan de hoogste kwaliteitseisen en dat de producent zich houdt aan strikte milieu- en recyclingrichtlijnen.
                      </p>
                      <p className="text-sm text-gray-600">
                        Onze installateurs zijn VKG-gecertificeerd voor professionele montage.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={500}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                          <ShieldCheck className="h-6 w-6 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-semibold">Politiekeurmerk</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Het Politiekeurmerk Veilig Wonen (PKVW) stelt eisen aan de inbraakwerendheid van kozijnen en hang- en sluitwerk. Kozijnen met dit keurmerk bieden een hogere mate van inbraakbeveiliging.
                      </p>
                      <p className="text-sm text-gray-600">
                        Onze kozijnen kunnen worden uitgevoerd volgens de PKVW-eisen indien gewenst.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={600}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                          <ShieldCheck className="h-6 w-6 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-semibold">Energie labels</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Verschillende energie-labels (A++ tot G) geven aan hoe energiezuinig de kozijnen zijn. Deze labels houden rekening met de isolatiewaarde, luchtdichtheid en andere energieprestatie-indicatoren.
                      </p>
                      <p className="text-sm text-gray-600">
                        Onze premium kozijnen behalen meestal een A+ of A++ energielabel.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen over merken</h2>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">
                      Wat is het beste merk voor kunststof kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Er is niet één specifiek "beste" merk, aangezien de ideale keuze afhangt van uw specifieke wensen, budget en de architectuur van uw woning. 
                        In de hoogste kwaliteitsklasse worden Schüco, Veka en Kömmerling vaak als top beschouwd vanwege hun uitstekende isolatiewaarden, 
                        hoogwaardige materiaalkwaliteit en innovatieve oplossingen. Voor een uitstekende prijs-kwaliteitverhouding zijn Gealan en Deceuninck 
                        zeer goede opties. Wij adviseren u graag welk merk het beste past bij uw specifieke situatie.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">
                      Wat is het verschil tussen Duitse en Nederlandse kunststof kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        De belangrijkste verschillen zitten in de profilering, maatvoering en montagewijze. Duitse profielen worden vaak gekenmerkt door 
                        hun robuuste constructie, hoge isolatiewaarden en uitgebreide technische mogelijkheden. Nederlandse systemen zijn veelal specifiek 
                        ontwikkeld voor de Nederlandse bouwmethoden en esthetische voorkeuren. Duitse kozijnen worden traditioneel 'in de dag' gemonteerd 
                        (in de muuropening), terwijl Nederlandse kozijnen vaak 'achter de dag' worden geplaatst (tegen de buitenmuur aan). Beide hebben hun 
                        voordelen, afhankelijk van uw woning en wensen.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">
                      Hoe herken ik kwaliteitsverschillen tussen merken?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Kwaliteitsverschillen zijn te herkennen aan diverse aspecten:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                        <li>De dikte van het materiaal (Klasse A-profielen zijn dikker dan Klasse B)</li>
                        <li>Het aantal kamers in het profiel (meer kamers = betere isolatie)</li>
                        <li>De kwaliteit van het beslag en de afdichtingen</li>
                        <li>De afwerking van verbindingen en hoeken</li>
                        <li>De beschikbare certificeringen en keurmerken</li>
                        <li>De lengte en voorwaarden van de garantie</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        In onze showroom kunt u de verschillende merken en kwaliteitsklassen naast elkaar zien en vergelijken.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      Zijn duurdere merken hun geld waard?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        In veel gevallen is het extra investeren in premium merken zeker de moeite waard, vooral als u waarde hecht aan energie-efficiëntie, 
                        duurzaamheid en esthetiek. Premium kozijnen bieden doorgaans betere isolatiewaarden (tot 30% beter dan standaard kozijnen), zijn 
                        robuuster gebouwd voor een langere levensduur, en hebben vaak verfijndere details en afwerkingsmogelijkheden. Bovendien kan de hogere 
                        investering zich terugverdienen via lagere energiekosten en hogere woningwaarde. Wij helpen u graag bij het maken van een 
                        kosten-batenanalyse voor uw specifieke situatie.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-semibold">
                      Hoe zit het met garanties bij verschillende merken?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Garantievoorwaarden variëren per fabrikant:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                        <li>Premium merken zoals Schüco en Veka bieden doorgaans 10-15 jaar garantie op profielen</li>
                        <li>Middenklasse merken bieden meestal 5-10 jaar garantie</li>
                        <li>Garantie op hang- en sluitwerk is meestal 1-5 jaar</li>
                        <li>Garantie op glas varieert van 5-10 jaar</li>
                        <li>Garantie op montage is afhankelijk van de installateur (bij ons 10 jaar)</li>
                      </ul>
                      <p className="text-
