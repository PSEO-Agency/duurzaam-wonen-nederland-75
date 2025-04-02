import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Euro, PiggyBank, BarChart4, Calculator, BadgePercent } from 'lucide-react';
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

const KozijnPrices: React.FC = () => {
  const kozijnTypes = [
    {
      category: 'Vast kozijn',
      sizes: '60x60 cm tot 120x120 cm',
      features: 'Maximale isolatie, vaste ruit'
    },
    {
      category: 'Draai-kiep kozijn',
      sizes: '60x80 cm tot 100x160 cm',
      features: 'Ventilatie mogelijk, draaibaar'
    },
    {
      category: 'Stolpstel kozijn',
      sizes: '120x120 cm tot 200x200 cm',
      features: 'Brede opening, klassieke uitstraling'
    },
    {
      category: 'Schuifpui',
      sizes: '180x210 cm tot 400x210 cm',
      features: 'Ruimtebesparend, grote glaspartijen'
    },
    {
      category: 'Harmonica kozijn',
      sizes: '240x210 cm tot 600x250 cm',
      features: 'Maximale opening, flexibel'
    }
  ];

  const additionalOptions = [
    { option: 'Triple beglazing', feature: 'Superieure isolatie' },
    { option: 'Geluidsisolerend glas', feature: 'Optimale geluidswering' },
    { option: 'Veiligheidsglas', feature: 'Extra bescherming' },
    { option: 'Zonwerend glas', feature: 'Vermindert warmtetoetreding' },
    { option: 'Roedes tussen glas', feature: 'Klassieke uitstraling' },
    { option: 'Inbouw-/opbouwrolluiken', feature: 'Privacy en isolatie' },
    { option: 'Ventilatieroosters', feature: 'Gecontroleerde luchtcirculatie' },
    { option: 'Horren', feature: 'Insectenwerend' },
    { option: 'Speciale grepen/krukken', feature: 'Uniek design' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijnen Prijzen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Vraag vrijblijvend een offerte aan voor kunststof kozijnen. Elke prijsopgave wordt op maat gemaakt op basis van uw specifieke wensen en situatie." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/prijzen" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                Kunststof Kozijnen
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Prijsinformatie Kunststof Kozijnen
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Voor kunststof kozijnen werken wij uitsluitend met gepersonaliseerde prijsopgaves op basis van uw specifieke situatie en wensen.
              </p>
            </div>
          </div>
        </section>
        
        <StickyNavigation />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-2 text-center">Kozijnen op maat van hoogwaardige kwaliteit</h2>
              <p className="text-gray-500 mb-8 text-center">Vrijblijvende offerte op basis van uw specifieke wensen</p>
              
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/4">Type kozijn</TableHead>
                      <TableHead className="w-1/4">Afmetingen</TableHead>
                      <TableHead className="w-1/4">Eigenschappen</TableHead>
                      <TableHead className="w-1/4">Prijsindicatie</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {kozijnTypes.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>{item.sizes}</TableCell>
                        <TableCell>{item.features}</TableCell>
                        <TableCell>
                          <span className="text-brand-green font-medium">Op offertebasis</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <p className="text-sm text-gray-500 mb-8 max-w-3xl mx-auto">
                * Elke situatie is anders. Om u een eerlijke en exacte prijs te kunnen geven, stellen wij graag een 
                persoonlijke offerte voor u op. Hierin nemen we alle factoren mee zoals afmetingen, gewenste opties, 
                isolatiewaarden en montage.
              </p>
              
              <div className="flex justify-center">
                <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <Link to="/offerte">
                    <span>Vraag een vrijblijvende offerte aan</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Factoren die de prijs beïnvloeden</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    De prijs van kunststof kozijnen wordt door verschillende factoren bepaald. 
                    Hieronder vindt u de belangrijkste elementen die invloed hebben op de kosten:
                  </p>
                  
                  <Tabs defaultValue="formaat" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="formaat">Formaat</TabsTrigger>
                      <TabsTrigger value="type">Type kozijn</TabsTrigger>
                      <TabsTrigger value="glas">Beglazing</TabsTrigger>
                      <TabsTrigger value="opties">Extra opties</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="formaat" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Invloed van formaat op de prijs:</h3>
                      <p className="text-gray-700 mb-3">
                        De afmetingen van uw kozijnen hebben een directe invloed op de prijs. Hoe groter het kozijn, 
                        hoe meer materiaal nodig is en hoe hoger de prijs. Bovendien kunnen zeer grote kozijnen 
                        extra verstevigingen nodig hebben.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <Card className="h-full">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Klein formaat</h4>
                            <p className="text-sm text-gray-700 mb-2">Afmetingen: tot 100x100 cm</p>
                            <p className="text-sm text-gray-700">Prijs: Op offertebasis</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="h-full">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Middelgroot formaat</h4>
                            <p className="text-sm text-gray-700 mb-2">Afmetingen: 100x100 cm tot 150x150 cm</p>
                            <p className="text-sm text-gray-700">Prijs: Op offertebasis</p>
                          </CardContent>
                        
                        <Card className="h-full">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Groot formaat</h4>
                            <p className="text-sm text-gray-700 mb-2">Afmetingen: 150x150 cm tot 200x200 cm</p>
                            <p className="text-sm text-gray-700">Prijs: Op offertebasis</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="h-full">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Extra groot formaat</h4>
                            <p className="text-sm text-gray-700 mb-2">Afmetingen: boven 200x200 cm</p>
                            <p className="text-sm text-gray-700">Prijs: Op offertebasis</p>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="type" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Invloed van kozijntype op de prijs:</h3>
                      <p className="text-gray-700 mb-3">
                        Het type kozijn heeft een significante invloed op de prijs. Vaste kozijnen zijn het 
                        voordeligst omdat ze geen bewegende delen hebben. Zodra er draaiende of schuivende 
                        delen bij komen, stijgt de prijs vanwege het beslag en de extra bewerkingen.
                      </p>
                      
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Vast kozijn (prijs op offertebasis)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep kozijn (prijs op offertebasis)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Stolpstel (prijs op offertebasis)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Schuifpui (prijs op offertebasis)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Harmonica kozijn (prijs op offertebasis)</span>
                        </li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="glas" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Invloed van beglazing op de prijs:</h3>
                      <p className="text-gray-700 mb-3">
                        Het type beglazing heeft een aanzienlijke invloed op zowel de prijs als de isolatiewaarde. 
                        HR++ glas is standaard, maar voor optimale isolatie kunt u kiezen voor triple glas.
                      </p>
                      
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block">HR++ glas</strong>
                            <p className="text-sm text-gray-700">Standaard, goede isolatie (U-waarde ±1,1)</p>
                            <p className="text-sm text-gray-700">Prijs: Op offertebasis</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block">Triple glas</strong>
                            <p className="text-sm text-gray-700">Uitstekende isolatie (U-waarde ±0,7)</p>
                            <p className="text-sm text-gray-700">Prijs: Op offertebasis</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block">Geluidsisolerend glas</strong>
                            <p className="text-sm text-gray-700">Reduceert geluid van buiten</p>
                            <p className="text-sm text-gray-700">Prijs: Op offertebasis</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block">Veiligheidsglas</strong>
                            <p className="text-sm text-gray-700">Inbraakwerend of letselwerend</p>
                            <p className="text-sm text-gray-700">Prijs: Op offertebasis</p>
                          </div>
                        </li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="opties" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Invloed van extra opties op de prijs:</h3>
                      <p className="text-gray-700 mb-3">
                        Diverse extra opties kunnen de functionaliteit van uw kozijnen verbeteren, maar hebben 
                        ook invloed op de prijs. Denk aan ventilatieroosters, zonwering of speciale handgrepen.
                      </p>
                      
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-1/3">Extra optie</TableHead>
                              <TableHead className="w-1/3">Voordelen</TableHead>
                              <TableHead className="w-1/3">Prijsindicatie</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {additionalOptions.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell>{item.option}</TableCell>
                                <TableCell>{item.feature}</TableCell>
                                <TableCell>
                                  <span className="text-brand-green font-medium">Op offertebasis</span>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in" delay={200}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <PiggyBank className="h-5 w-5 mr-2 text-brand-green" />
                        <span>Besparingstips voor kunststof kozijnen</span>
                      </h3>
                      
                      <p className="text-gray-700 mb-4">
                        Er zijn verschillende manieren om te besparen op de aanschaf van kunststof kozijnen zonder in te leveren op kwaliteit:
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Kies voor standaardmaten</strong>
                            <p className="text-gray-700 text-sm">Standaardmaten zijn voordeliger dan maatwerk. Als uw kozijnopeningen standaard afmetingen hebben, kunt u besparen op de kosten.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Meerdere kozijnen tegelijk vervangen</strong>
                            <p className="text-gray-700 text-sm">Door meerdere kozijnen tegelijk te laten plaatsen, kunt u besparen op transport- en montagekosten. Vaak bieden leveranciers korting bij grotere orders.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Kies voor HR++ in plaats van triple glas</strong>
                            <p className="text-gray-700 text-sm">Als maximale isolatie niet noodzakelijk is, kunt u kiezen voor HR++ glas in plaats van triple glas. Dit kan een aanzienlijke besparing opleveren.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Let op subsidies</strong>
                            <p className="text-gray-700 text-sm">Controleer of er subsidies beschikbaar zijn voor energiebesparende maatregelen in uw gemeente. Dit kan uw investering aanzienlijk verlagen.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Vergelijk offertes</strong>
                            <p className="text-gray-700 text-sm">Vraag meerdere offertes aan en vergelijk deze zorgvuldig. Let niet alleen op de prijs, maar ook op wat precies wordt geleverd.</p>
                          </div>
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Calculator className="h-5 w-5 mr-2 text-brand-green" />
                        <span>ROI van kunststof kozijnen</span>
                      </h3>
                      
                      <p className="text-gray-700 mb-4">
                        Kunststof kozijnen zijn een investering die zichzelf terugverdient door:
                      </p>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Energiebesparing</strong>
                            <p className="text-gray-700 text-sm">Significante jaarlijkse besparing op stookkosten</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Onderhoudskosten</strong>
                            <p className="text-gray-700 text-sm">Besparing op schilderwerk en onderhoud</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Waardestijging woning</strong>
                            <p className="text-gray-700 text-sm">Verhoogt de waarde van uw woning</p>
                          </div>
                        </li>
                      </ul>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <h4 className="font-medium mb-2 flex items-center">
                          <BadgePercent className="h-4 w-4 mr-2 text-brand-green" />
                          <span>Actuele acties</span>
                        </h4>
                        <div className="bg-green-50 p-4 rounded-md border border-green-100">
                          <p className="text-gray-700 text-sm">
                            <strong>Voorjaarsactie 2025:</strong> Bij aanschaf van onze kozijnen, krijgt u altijd Gratis Houtnerf, Horren en Vensterbanken.
                          </p>
                        </div>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Vergelijk materialen</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <AnimatedSection animation="fade-in" delay={100}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <div className="p-4 bg-brand-green text-white text-center">
                      <h3 className="text-xl font-semibold">Kunststof Kozijnen</h3>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <span className="text-lg font-bold">Prijs op offertebasis</span>
                        <p className="text-sm text-gray-500">Vraag een vrijblijvende offerte aan</p>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Onderhoudsarm</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Uitstekende isolatie</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Lange levensduur (30+ jaar)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Diverse kleuren beschikbaar</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Weinig tot geen schilderwerk</span>
                        </li>
                      </ul>
                      
                      <Button asChild className="w-full bg-brand-green hover:bg-brand-green-dark text-white">
                        <Link to="/offerte">
                          <span>Offerte aanvragen</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <div className="p-4 bg-gray-700 text-white text-center">
                      <h3 className="text-xl font-semibold">Houten Kozijnen</h3>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <span className="text-lg font-bold">Prijs op offertebasis</span>
                        <p className="text-sm text-gray-500">Vraag een vrijblijvende offerte aan</p>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Natuurlijke uitstraling</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Goede isolatie mogelijk</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Lange levensduur bij goed onderhoud</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-gray-700 mt-1 mr-2 shrink-0 opacity-30" />
                          <span className="text-gray-400">Regelmatig onderhoud nodig</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-gray-700 mt-1 mr-2 shrink-0 opacity-30" />
                          <span className="text-gray-400">Minder duurzaam zonder onderhoud</span>
                        </li>
                      </ul>
                      
                      <Button variant="outline" asChild className="w-full">
                        <Link to="/offerte">
                          <span>Offerte aanvragen</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <div className="p-4 bg-gray-700 text-white text-center">
                      <h3 className="text-xl font-semibold">Aluminium Kozijnen</h3>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <span className="text-lg font-bold">Prijs op offertebasis</span>
                        <p className="text-sm text-gray-500">Vraag een vrijblijvende offerte aan</p>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Zeer duurzaam</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Onderhoudsarm</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Slanke profielen mogelijk</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-gray-700 mt-1 mr-2 shrink-0 opacity-30" />
                          <span className="text-gray-400">Hogere aanschafprijs</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-gray-700 mt-1 mr-2 shrink-0 opacity-30" />
                          <span className="text-gray-400">Minder goede isolatie zonder thermische onderbreking</span>
                        </li>
                      </ul>
                      
                      <Button variant="outline" asChild className="w-full">
                        <Link to="/offerte">
                          <span>Offerte aanvragen</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen over prijzen</h2>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">
                      Waarom werkt u alleen met offerteprijzen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Elke woningsituatie is uniek, en daarmee ook de prijs voor kunststof kozijnen. Factoren zoals exacte
                        afmetingen, type kozijn, beglazingsopties, isolatiewaarden en specifieke montage-eisen bepalen de
                        uiteindelijke prijs. Door met persoonlijke offertes te werken, kunnen wij u een eerlijke en nauwkeurige
                        prijsopgave bieden die exact aansluit op uw situatie, zonder verrassingen achteraf.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">
                      Zijn er subsidies beschikbaar voor kunststof kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Ja, in verschillende gemeenten zijn subsidies beschikbaar voor energiebesparende maatregelen, waaronder 
                        hoogwaardige isolerende kozijnen. Deze subsidies kunnen variëren per gemeente en per periode. Daarnaast 
                        is er vaak een btw-teruggave mogelijk als de kozijnen worden geplaatst in woningen ouder dan 2 jaar. 
                        We adviseren u om de actuele subsidiemogelijkheden in uw gemeente te controleren of ons hierover te raadplegen
                        tijdens het offertetraject.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">
                      Wat is het verschil tussen standaard en premium kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Premium kunststof kozijnen onderscheiden zich door betere isolatiewaarden (vaak 6+ kamers in het profiel 
                        vs. 3-5 kamers bij standaard), hoogwaardiger beslag, extra verstevigingen, en geavanceerdere afdichtingen. 
                        Ook bieden premium kozijnen meestal meer esthetische opties zoals vlakke verbindingen in plaats van zichtbare 
                        lasnaden, en luxere afwerkingen. De investering in premium kozijnen verdient zich vaak terug door hogere 
                        energiebesparing en langere levensduur. In onze offerte verduidelijken we graag de verschillen in kwaliteit 
                        en prijs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      Welke extra kosten moet ik verwachten naast de kozijnprijs?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Naast de basisprijs van de kozijnen zelf kunt u rekening houden met de volgende bijkomende kosten:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                        <li>Montagekosten (afhankelijk van complexiteit)</li>
                        <li>Verwijdering en afvoer oude kozijnen</li>
                        <li>Eventuele aanpassingen aan metselwerk</li>
                        <li>Nieuwe vensterbanken indien gewenst</li>
                        <li>Afwerking binnenzijde (stucwerk, schilderwerk)</li>
                        <li>Eventuele vergunningskosten (variabel per gemeente)</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        In onze offertes specificeren wij exact welke kosten inbegrepen zijn en welke niet, zodat u niet voor 
                        verrassingen komt te staan.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-semibold">
                      Wat is financieel gezien de beste periode om kozijnen te vervangen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        De wintermaanden (november-februari) zijn vaak financieel voordelig voor de aanschaf van kozijnen. In deze periode 
                        is er minder vraag, waardoor leveranciers regelmatig winteracties aanbieden met aantrekkelijke kortingen. 
                        Daarnaast is het begin van het jaar vaak een goed moment om te profiteren van nieuwe subsidies die door 
                        gemeenten en de rijksoverheid worden uitgegeven. Het nadeel van plaatsing in de winter is dat er bij vorst 
                        niet altijd direct kan worden gemonteerd en dat uw woning tijdens de werkzaamheden meer warmte verliest.
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

export default KozijnPrices;
