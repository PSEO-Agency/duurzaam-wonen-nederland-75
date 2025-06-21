import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import KozijnenHero from '@/components/kunststof-kozijnen/KozijnenHero';
import Services from '@/components/kunststof-kozijnen/Services';
import Projects from '@/components/Projects';
import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';

const KozijnTypes: React.FC = () => {
  const types = [
    {
      id: 'vast',
      name: 'Vast Kozijn',
      description: 'Vaste kozijnen zijn kozijnen zonder bewegende delen. Ze bieden maximale isolatie en lichtinval.',
      benefits: ['Maximale isolatie', 'Optimale lichtinval', 'Onderhoudsarm', 'Lage kosten', 'Lange levensduur'],
      applications: ['Woonkamers', 'Slaapkamers', 'Aanbouw', 'Dakkapel'],
    },
    {
      id: 'draai',
      name: 'Draai-Kiep Kozijn',
      description: 'Draai-kiep kozijnen kunnen zowel volledig open draaien als in kiepstand worden gezet voor ventilatie.',
      benefits: ['Flexibele ventilatie', 'Makkelijk schoon te maken', 'Inbraakwerend', 'Meerdere standen', 'Complete opening mogelijk'],
      applications: ['Slaapkamers', 'Woonkamers', 'Badkamers', 'Keukens'],
    },
    {
      id: 'schuif',
      name: 'Schuifpui',
      description: 'Schuifpuien creëren een naadloze overgang tussen binnen en buiten zonder ruimteverlies bij het openen.',
      benefits: ['Ruimtebesparend', 'Grote glasoppervlakken', 'Toegang tot tuin/balkon', 'Maximale lichtinval', 'Modern design'],
      applications: ['Woonkamers', 'Tuinen', 'Terrassen', 'Balkons'],
    },
    {
      id: 'verhuis',
      name: 'Verhuis Kozijn',
      description: 'Verhuis kozijnen bestaan uit twee ramen die in het midden samenkomen, waarbij één raam als hoofddeur fungeert.',
      benefits: ['Brede opening mogelijk', 'Klassieke uitstraling', 'Flexibel in gebruik', 'Goede ventilatie', 'Statige uitstraling'],
      applications: ['Woonkamers', 'Erkers', 'Klassieke woningen', 'Voorgevels'],
    },
    {
      id: 'harmonica',
      name: 'Harmonica Kozijn',
      description: 'Harmonica kozijnen vouwen open als een accordeon, ideaal om een volledig open verbinding te creëren.',
      benefits: ['Volledige opening mogelijk', 'Maximale doorgang', 'Flexibel in gebruik', 'Perfect voor binnen-buiten verbinding', 'Uniek design'],
      applications: ['Veranda\'s', 'Woonkamers met tuin', 'Commerciële ruimtes', 'Horecagelegenheden'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Type Kunststof Kozijnen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek de verschillende types kunststof kozijnen: vast, draai-kiep, schuifpui, verhuis en harmonica kozijnen voor uw woning." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/types" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                Types Kunststof Kozijnen
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welk Type Kunststof Kozijn Past Bij Uw Woning?
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Van vaste kozijnen tot schuifpuien en draai-kiep systemen - ontdek alle beschikbare types kunststof kozijnen en vind de perfecte oplossing voor uw woning.
              </p>
            </div>
          </div>
        </section>
        
        <StickyNavigation />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">De 5 Meest Gekozen Types Kunststof Kozijnen</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {types.map((type, index) => (
                  <AnimatedSection key={type.id} animation="fade-in" delay={index * 100}>
                    <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl text-gray-400 mb-2">🏠</div>
                          <div className="absolute top-4 right-4">
                            <img 
                              src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                              alt="Schüco logo" 
                              className="h-8 opacity-90"
                            />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                        <p className="text-gray-700 mb-4">
                          {type.description}
                        </p>
                        <h4 className="font-medium mb-2">Voordelen:</h4>
                        <ul className="space-y-1 mb-4">
                          {type.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-4 w-4 text-brand-green mt-1 mr-2 shrink-0" />
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <h4 className="font-medium mb-2">Toepassing:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {type.applications.map((app, idx) => (
                            <span key={idx} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">
                              {app}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <Button asChild variant="link" className="text-brand-green p-0 h-auto">
                            <Link to="/offerte">
                              <span>Meer informatie</span>
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
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
                  <h2 className="text-3xl font-bold mb-6">Welk Type Kozijn Is Het Beste Voor U?</h2>
                  
                  <Tabs defaultValue="functionaliteit" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="functionaliteit">Functionaliteit</TabsTrigger>
                      <TabsTrigger value="gebruik">Dagelijks gebruik</TabsTrigger>
                      <TabsTrigger value="uitstraling">Uitstraling</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="functionaliteit" className="space-y-4">
                      <p className="text-gray-700">
                        De functionaliteit van uw kozijnen is een belangrijke overweging. Denk aan:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Wilt u de ramen kunnen openen voor ventilatie? Kies dan voor draai-kiep kozijnen.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Wilt u een brede doorgang naar buiten? Overweeg dan schuifpuien of harmonica kozijnen.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Zoekt u maximale isolatie en lichtinval? Vaste kozijnen zijn een uitstekende keuze.</span>
                        </li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="gebruik" className="space-y-4">
                      <p className="text-gray-700">
                        Het dagelijks gebruik bepaalt welk type kozijn het meest praktisch is:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep kozijnen zijn ideaal voor kamers waar regelmatige ventilatie gewenst is.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Schuifpuien zijn perfect voor ruimtes met beperkte binnenruimte waar een deur naar binnen zou hinderen.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Harmonica kozijnen zijn ideaal voor wie regelmatig een volledige opening wil creëren tussen twee ruimtes.</span>
                        </li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="uitstraling" className="space-y-4">
                      <p className="text-gray-700">
                        De uitstraling van uw kozijnen draagt bij aan de stijl van uw woning:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Verhuis kozijnen passen uitstekend bij klassieke architectuur en geven een statige uitstraling.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Schuifpuien en grote vaste kozijnen passen perfect bij moderne, minimalistische woningen.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep kozijnen zijn veelzijdig en passen bij vrijwel elke architectuurstijl.</span>
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-8">
                    <p className="text-gray-700 mb-4">
                      Twijfelt u nog over welk type kozijn het beste bij uw situatie past? Onze adviseurs helpen u graag bij het maken van de juiste keuze, passend bij uw wensen, budget en woningtype.
                    </p>
                    <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white">
                      <Link to="/offerte">
                        <span>Vraag gratis advies aan</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in" delay={200}>
                  <img 
                    src="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png" 
                    alt="Verschillende types kunststof kozijnen" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Meest gestelde vragen over kozijntypes</h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium text-lg">
                          Wat is het verschil tussen een draai- en een kiepfunctie?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Bij de draaifunctie opent het raam volledig naar binnen toe, wat handig is voor maximale ventilatie of om het raam te reinigen. De kiepfunctie zorgt ervoor dat het raam aan de onderkant naar binnen kantelt, wat zorgt voor ventilatie maar met beperkte opening - ideaal voor constante, veilige ventilatie.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium text-lg">
                          Welk type kozijn is het meest energiezuinig?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Vaste kozijnen zijn doorgaans het meest energiezuinig omdat ze geen bewegende delen hebben en daarom volledig afgesloten kunnen worden. Echter, moderne draai-kiep kozijnen en schuifpuien zijn ook zeer goed geïsoleerd en bieden het voordeel van ventilatie.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium text-lg">
                          Zijn schuifpuien inbraakwerend?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Ja, moderne kunststof schuifpuien zijn voorzien van geavanceerde sluitsystemen die voldoen aan de hoogste veiligheidsnormen. Ze kunnen worden uitgerust met meerpuntsvergrendelingen, veiligheidsbeslag en veiligheidsglas voor optimale inbraakwerendheid.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Combinatiemogelijkheden</h2>
              <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Verschillende kozijntypes kunnen perfect gecombineerd worden voor optimale functionaliteit en een harmonieus uiterlijk.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedSection animation="fade-in" delay={100}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Gevel met verschillende kozijntypes</h3>
                      <p className="text-gray-700 mb-4">
                        Een harmonieuze compositie van verschillende kozijntypes in dezelfde gevel:
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Vaste kozijnen voor maximale lichtinval in woonkamers</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep kozijnen voor slaapkamers en badkamers</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Schuifpui voor toegang tot de tuin of het terras</span>
                        </li>
                      </ul>
                      <p className="text-gray-700">
                        Door dezelfde kleur en profilering te kiezen voor alle kozijnen, creëert u een uniform uiterlijk, ondanks de verschillende types.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Samengestelde kozijnen</h3>
                      <p className="text-gray-700 mb-4">
                        Combineer verschillende functionaliteiten binnen één kozijngeheel:
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Vast glas met draai-kiep ramen in één kozijn</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Schuifdeur met vaste zijlichten</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep ramen boven een vast onderlicht</span>
                        </li>
                      </ul>
                      <p className="text-gray-700">
                        Deze oplossingen bieden het beste van beide werelden: maximale lichtinval én flexibele ventilatiemogelijkheden.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <Link to="/kunststof-kozijnen">
                    <span>Bekijk alle kunststof kozijn opties</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <Services />
        
        <Projects />
        
        <Reviews />
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default KozijnTypes;
