import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, ChevronDown, Ruler, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
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

const KozijnSizes: React.FC = () => {
  const standardSizes = [
    { width: 60, height: 60, type: 'Vast' },
    { width: 80, height: 100, type: 'Vast' },
    { width: 100, height: 100, type: 'Vast/Draai-kiep' },
    { width: 120, height: 120, type: 'Vast/Draai-kiep' },
    { width: 150, height: 120, type: 'Vast/Draai-kiep' },
    { width: 180, height: 120, type: 'Vast/Draai-kiep/Stolpstel' },
    { width: 200, height: 120, type: 'Vast/Stolpstel' },
    { width: 240, height: 210, type: 'Schuifpui' },
    { width: 300, height: 210, type: 'Schuifpui/Harmonica' },
    { width: 400, height: 210, type: 'Schuifpui/Harmonica' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijnen Afmetingen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek alle beschikbare afmetingen voor kunststof kozijnen en leer welke formaten het beste zijn voor uw woning." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/afmetingen" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                Afmetingen Kunststof Kozijnen
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                De Juiste Afmetingen Voor Uw Kunststof Kozijnen
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Van standaard formaten tot volledig maatwerk - ontdek alle mogelijkheden voor de afmetingen van uw kunststof kozijnen en vind de perfecte maat voor uw woning.
              </p>
            </div>
          </div>
        </section>
        
        <StickyNavigation />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Standaard Afmetingen vs. Maatwerk</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Bij kunststof kozijnen heeft u de keuze tussen standaard afmetingen en volledig maatwerk. Beide opties hebben voor- en nadelen.
                  </p>
                  
                  <Tabs defaultValue="standaard" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="standaard">Standaard maten</TabsTrigger>
                      <TabsTrigger value="maatwerk">Maatwerk</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="standaard" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Voordelen standaard afmetingen:</h3>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Vaak goedkoper dan maatwerk</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Snellere levertijd - veelal uit voorraad leverbaar</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Ideaal voor nieuwbouw of renovaties waar flexibiliteit is</span>
                        </li>
                      </ul>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Meest gevraagde standaard afmetingen:</h4>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Breedte (cm)</TableHead>
                              <TableHead>Hoogte (cm)</TableHead>
                              <TableHead>Type kozijn</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {standardSizes.slice(0, 5).map((size, index) => (
                              <TableRow key={index}>
                                <TableCell>{size.width}</TableCell>
                                <TableCell>{size.height}</TableCell>
                                <TableCell>{size.type}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="maatwerk" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Voordelen maatwerk:</h3>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Perfecte pasvorm voor uw specifieke situatie</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Optimale lichtinval en ventilatie op maat</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Ideaal voor bijzondere architectuur of historische panden</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Mogelijkheid om speciale vormen te realiseren (rond, driehoekig, etc.)</span>
                        </li>
                      </ul>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                          Bij maatwerk nemen we de exacte afmetingen van uw kozijnopeningen op en produceren kozijnen die tot op de millimeter nauwkeurig passen. Dit is ideaal voor renovaties waar de bestaande openingen onregelmatig kunnen zijn.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-8">
                    <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white">
                      <Link to="/offerte">
                        <span>Vraag adviesgesprek aan</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in" delay={200}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Ruler className="h-5 w-5 mr-2 text-brand-green" />
                        <span>Volledige Tabel Standaard Afmetingen</span>
                      </h3>
                      
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Breedte (cm)</TableHead>
                              <TableHead>Hoogte (cm)</TableHead>
                              <TableHead>Geschikte types</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {standardSizes.map((size, index) => (
                              <TableRow key={index}>
                                <TableCell>{size.width}</TableCell>
                                <TableCell>{size.height}</TableCell>
                                <TableCell>{size.type}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4">
                        * Alle maten zijn in centimeters en bij benadering. Exacte maten kunnen licht afwijken.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 border-t border-gray-100">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Maximize2 className="h-5 w-5 mr-2 text-brand-green" />
                        <span>Minimale en Maximale Afmetingen</span>
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-md border border-gray-100">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Minimize2 className="h-4 w-4 mr-2 text-brand-green" />
                            <span>Minimale afmetingen</span>
                          </h4>
                          <ul className="space-y-1">
                            <li className="text-sm">Vast kozijn: 30 x 30 cm</li>
                            <li className="text-sm">Draai-kiep: 50 x 60 cm</li>
                            <li className="text-sm">Schuifpui: 180 x 180 cm</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md border border-gray-100">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Maximize2 className="h-4 w-4 mr-2 text-brand-green" />
                            <span>Maximale afmetingen</span>
                          </h4>
                          <ul className="space-y-1">
                            <li className="text-sm">Vast kozijn: 300 x 250 cm</li>
                            <li className="text-sm">Draai-kiep: 160 x 220 cm</li>
                            <li className="text-sm">Schuifpui: 600 x 250 cm</li>
                          </ul>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4">
                        * Voor grotere afmetingen zijn er speciale constructiemogelijkheden. Vraag naar de mogelijkheden.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Afmetingen Per Ruimte</h2>
              <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                De ideale afmetingen van uw kozijnen zijn afhankelijk van de ruimte waarin ze worden geplaatst. Hieronder vindt u enkele richtlijnen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatedSection animation="fade-in" delay={100}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Woonkamer</h3>
                      <p className="text-gray-700 mb-4">
                        In woonkamers worden vaak grotere kozijnen geplaatst voor maximale lichtinval:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Vaste kozijnen: 150-300 cm breed, 120-220 cm hoog</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Schuifpuien: 240-600 cm breed, 210-250 cm hoog</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Slaapkamer</h3>
                      <p className="text-gray-700 mb-4">
                        In slaapkamers worden vaak draai-kiep kozijnen toegepast voor ventilatie:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep: 80-120 cm breed, 100-140 cm hoog</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Balkondeuren: 80-100 cm breed, 210-230 cm hoog</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Badkamer</h3>
                      <p className="text-gray-700 mb-4">
                        In badkamers worden kleinere kozijnen toegepast, vaak met melkglas:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep: 60-80 cm breed, 60-100 cm hoog</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Vast met melkglas: 40-60 cm breed, 40-80 cm hoog</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={400}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Keuken</h3>
                      <p className="text-gray-700 mb-4">
                        In keukens worden vaak kozijnen boven het aanrecht geplaatst:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep: 80-100 cm breed, 60-100 cm hoog</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Vast: 120-180 cm breed, 80-120 cm hoog</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={500}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Zolder/Dakkapel</h3>
                      <p className="text-gray-700 mb-4">
                        In dakkapellen worden vaak bredere, lagere kozijnen toegepast:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Combinatie vast/draai-kiep: 180-300 cm breed, 100-140 cm hoog</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep: 60-80 cm breed, 80-120 cm hoog</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={600}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Bijzondere vormen</h3>
                      <p className="text-gray-700 mb-4">
                        Kunststof kozijnen zijn ook in bijzondere vormen leverbaar:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Rond of ovaal: 40-120 cm diameter</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Driehoekig: variabele afmetingen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Trapezium: variabele afmetingen</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
              
              <div className="mt-10 text-center">
                <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <Link to="/kunststof-kozijnen/types">
                    <span>Bekijk de verschillende kozijntypes</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen over afmetingen</h2>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">
                      Kan ik kozijnen in elke gewenste afmeting bestellen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Ja, kunststof kozijnen kunnen op maat worden gemaakt in vrijwel elke afmeting. Er zijn wel technische beperkingen aan de maximale en minimale afmetingen, afhankelijk van het type kozijn. Voor zeer grote kozijnen kunnen verstevigingsprofielen nodig zijn. Onze specialisten adviseren u graag over de mogelijkheden voor uw specifieke situatie.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">
                      Hoe worden de afmetingen van kozijnen precies gemeten?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Bij renovatie meten we de dagmaat (de opening in de muur) en berekenen we daarvan de exacte kozijnmaat. We houden hierbij rekening met speling voor montage en eventuele oneffenheden. Bij nieuwbouw worden de kozijnen gemaakt volgens de specificaties van de architect of aannemer. In beide gevallen komt een ervaren inmeter langs om de exacte maten op te nemen.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">
                      Wat is de standaard hoogte van een borstwering bij kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        De standaard hoogte van een borstwering (het muurdeel onder het kozijn) is volgens het Bouwbesluit minimaal 85 cm vanaf de vloer tot de onderkant van het kozijn voor woningen. Voor hogere verdiepingen kan dit 110 cm zijn. Deze maat is belangrijk voor de veiligheid, maar kan bij renovaties soms afwijken afhankelijk van de bestaande situatie.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      Kunnen kozijnen achteraf nog aangepast worden qua afmeting?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Nee, eenmaal geproduceerde kunststof kozijnen kunnen niet meer aangepast worden qua afmeting. Daarom is het cruciaal dat de maten vooraf zorgvuldig worden opgenomen. Bij twijfel adviseren we altijd om een professionele inmeting te laten uitvoeren door onze specialisten.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <Services />
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default KozijnSizes;
