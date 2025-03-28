
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
  const priceRanges = [
    {
      category: 'Vast kozijn',
      standard: { min: 250, max: 450 },
      premium: { min: 450, max: 700 },
      sizes: '60x60 cm tot 120x120 cm'
    },
    {
      category: 'Draai-kiep kozijn',
      standard: { min: 400, max: 700 },
      premium: { min: 700, max: 1100 },
      sizes: '60x80 cm tot 100x160 cm'
    },
    {
      category: 'Stolpstel kozijn',
      standard: { min: 800, max: 1200 },
      premium: { min: 1200, max: 1800 },
      sizes: '120x120 cm tot 200x200 cm'
    },
    {
      category: 'Schuifpui',
      standard: { min: 1200, max: 2000 },
      premium: { min: 2000, max: 3500 },
      sizes: '180x210 cm tot 400x210 cm'
    },
    {
      category: 'Harmonica kozijn',
      standard: { min: 1800, max: 3000 },
      premium: { min: 3000, max: 5000 },
      sizes: '240x210 cm tot 600x250 cm'
    }
  ];

  const additionalOptions = [
    { option: 'Triple beglazing', price: '€75 - €150 per m²' },
    { option: 'Geluidsisolerend glas', price: '€90 - €180 per m²' },
    { option: 'Veiligheidsglas', price: '€100 - €200 per m²' },
    { option: 'Zonwerend glas', price: '€85 - €170 per m²' },
    { option: 'Roedes tussen glas', price: '€40 - €80 per m²' },
    { option: 'Inbouw-/opbouwrolluiken', price: '€200 - €400 per kozijn' },
    { option: 'Ventilatieroosters', price: '€50 - €150 per stuk' },
    { option: 'Horren', price: '€60 - €150 per stuk' },
    { option: 'Speciale grepen/krukken', price: '€20 - €100 per stuk' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijnen Prijzen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek transparante prijsinformatie voor kunststof kozijnen, inclusief prijsranges, factoren die de prijs beïnvloeden en besparingstips." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/prijzen" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                Prijzen Kunststof Kozijnen
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Wat Kosten Kunststof Kozijnen?
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Transparante informatie over de prijzen van kunststof kozijnen, van standaard tot premium, inclusief alle factoren die de prijs beïnvloeden.
              </p>
            </div>
          </div>
        </section>
        
        <StickyNavigation />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-2 text-center">Prijsoverzicht Kunststof Kozijnen</h2>
              <p className="text-gray-500 mb-8 text-center">Indicatieve prijzen inclusief BTW, exclusief montage</p>
              
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/5">Type kozijn</TableHead>
                      <TableHead className="w-1/5">Standaard kwaliteit</TableHead>
                      <TableHead className="w-1/5">Premium kwaliteit</TableHead>
                      <TableHead className="w-1/5">Afmetingen</TableHead>
                      <TableHead className="w-1/5">Eigenschappen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {priceRanges.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>€{item.standard.min} - €{item.standard.max}</TableCell>
                        <TableCell>€{item.premium.min} - €{item.premium.max}</TableCell>
                        <TableCell>{item.sizes}</TableCell>
                        <TableCell>
                          {index === 0 && "Maximale isolatie, vaste ruit"}
                          {index === 1 && "Ventilatie mogelijk, draaibaar"}
                          {index === 2 && "Brede opening, klassieke uitstraling"}
                          {index === 3 && "Ruimtebesparend, grote glaspartijen"}
                          {index === 4 && "Maximale opening, flexibel"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <p className="text-sm text-gray-500 mb-8 max-w-3xl mx-auto">
                * Bovenstaande prijzen zijn indicatief en kunnen variëren afhankelijk van specifieke wensen, situatie, en marktomstandigheden. 
                Voor een exacte prijsopgave kunt u een vrijblijvende offerte aanvragen. Prijzen zijn exclusief montage.
              </p>
              
              <div className="flex justify-center">
                <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <span>Vraag een persoonlijke prijsopgave aan</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                            <p className="text-sm text-gray-700">Prijsindicatie: €250 - €500</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="h-full">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Middelgroot formaat</h4>
                            <p className="text-sm text-gray-700 mb-2">Afmetingen: 100x100 cm tot 150x150 cm</p>
                            <p className="text-sm text-gray-700">Prijsindicatie: €500 - €800</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="h-full">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Groot formaat</h4>
                            <p className="text-sm text-gray-700 mb-2">Afmetingen: 150x150 cm tot 200x200 cm</p>
                            <p className="text-sm text-gray-700">Prijsindicatie: €800 - €1500</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="h-full">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Extra groot formaat</h4>
                            <p className="text-sm text-gray-700 mb-2">Afmetingen: boven 200x200 cm</p>
                            <p className="text-sm text-gray-700">Prijsindicatie: vanaf €1500</p>
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
                          <span className="text-gray-700">Vast kozijn: laagste prijscategorie (vanaf €250)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Draai-kiep kozijn: middencategorie (vanaf €400)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Stolpstel: hogere middencategorie (vanaf €800)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Schuifpui: hoge categorie (vanaf €1200)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Harmonica kozijn: hoogste prijscategorie (vanaf €1800)</span>
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
                            <p className="text-sm text-gray-700">Meerprijs: standaard inbegrepen</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block">Triple glas</strong>
                            <p className="text-sm text-gray-700">Uitstekende isolatie (U-waarde ±0,7)</p>
                            <p className="text-sm text-gray-700">Meerprijs: €75 - €150 per m²</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block">Geluidsisolerend glas</strong>
                            <p className="text-sm text-gray-700">Reduceert geluid van buiten</p>
                            <p className="text-sm text-gray-700">Meerprijs: €90 - €180 per m²</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block">Veiligheidsglas</strong>
                            <p className="text-sm text-gray-700">Inbraakwerend of letselwerend</p>
                            <p className="text-sm text-gray-700">Meerprijs: €100 - €200 per m²</p>
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
                              <TableHead className="w-2/3">Extra optie</TableHead>
                              <TableHead className="w-1/3">Prijsindicatie</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {additionalOptions.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell>{item.option}</TableCell>
                                <TableCell>{item.price}</TableCell>
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
                            <p className="text-gray-700 text-sm">Standaardmaten zijn voordeliger dan maatwerk. Als uw kozijnopeningen standaard afmetingen hebben, kunt u tot 15% besparen.</p>
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
                            <p className="text-gray-700 text-sm">Als maximale isolatie niet noodzakelijk is, kunt u kiezen voor HR++ glas in plaats van triple glas. Dit kan een besparing opleveren van €75-€150 per m².</p>
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
                            <p className="text-gray-700 text-sm">Jaarlijkse besparing op stookkosten: €200-€500</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Onderhoudskosten</strong>
                            <p className="text-gray-700 text-sm">Besparing op schilderwerk: €75-€150 per kozijn per 5 jaar</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Waardestijging woning</strong>
                            <p className="text-gray-700 text-sm">Gemiddelde waardestijging: 1-3% van de woningwaarde</p>
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
                            <strong>Voorjaarsactie 2023:</strong> Bij aanschaf van 4 of meer kozijnen ontvangt u 10% korting op het totaalbedrag. Actie geldig t/m 30 juni 2023. Vraag naar de voorwaarden.
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
              <h2 className="text-3xl font-bold mb-8 text-center">Prijsvergelijking</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <AnimatedSection animation="fade-in" delay={100}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <div className="p-4 bg-brand-green text-white text-center">
                      <h3 className="text-xl font-semibold">Kunststof Kozijnen</h3>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <span className="text-3xl font-bold">€400 - €700</span>
                        <p className="text-sm text-gray-500">per kozijn, excl. montage</p>
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
                      
                      <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white">
                        <span>Bekijk aanbod</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
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
                        <span className="text-3xl font-bold">€800 - €1500</span>
                        <p className="text-sm text-gray-500">per kozijn, excl. montage</p>
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
                          <span className="text-gray-400">Hoger in prijs</span>
                        </li>
                      </ul>
                      
                      <Button variant="outline" className="w-full">
                        <span>Vergelijk opties</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
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
                        <span className="text-3xl font-bold">€900 - €1800</span>
                        <p className="text-sm text-gray-500">per kozijn, excl. montage</p>
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
                      
                      <Button variant="outline" className="w-full">
                        <span>Vergelijk opties</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
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
                      Wat is een realistische prijs voor kunststof kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Een realistische prijs voor kunststof kozijnen ligt tussen €250 en €700 per kozijn voor standaardformaten, 
                        exclusief montage. Voor grote kozijnen, schuifpuien of harmonica deuren kan dit oplopen tot €1200-€5000 
                        per element. De totaalprijs voor een gemiddelde woning met 8-10 kozijnen ligt doorgaans tussen €5000 en €15.000 
                        inclusief montage, afhankelijk van de gekozen opties en afmetingen.
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
                        hoogwaardige isolerende kozijnen. Deze subsidies kunnen variëren van €35 tot €100 per m² glas. Daarnaast 
                        is er vaak een btw-teruggave mogelijk van 9% (verschil tussen 21% en 12% btw-tarief) als de kozijnen worden 
                        geplaatst in woningen ouder dan 2 jaar. We adviseren u om de actuele subsidiemogelijkheden in uw gemeente 
                        te controleren of ons hierover te raadplegen.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">
                      Wat is het prijsverschil tussen standaard en premium kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Het prijsverschil tussen standaard en premium kunststof kozijnen bedraagt gemiddeld 30-50%. Premium kozijnen 
                        onderscheiden zich door betere isolatiewaarden (vaak 6+ kamers in het profiel vs. 3-5 kamers bij standaard), 
                        hoogwaardiger beslag, extra verstevigingen, en geavanceerdere afdichtingen. Ook bieden premium kozijnen meestal 
                        meer esthetische opties zoals vlakke verbindingen in plaats van zichtbare lasnaden, en luxere afwerkingen. 
                        De investering in premium kozijnen verdient zich vaak terug door hogere energiebesparing en langere levensduur.
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
                        <li>Montagekosten: €200-€500 per kozijn, afhankelijk van complexiteit</li>
                        <li>Verwijdering en afvoer oude kozijnen: €50-€100 per kozijn</li>
                        <li>Aanpassingen aan metselwerk: €75-€300 indien nodig</li>
                        <li>Nieuwe vensterbanken: €40-€120 per strekkende meter</li>
                        <li>Afwerking binnenzijde (stucwerk, schilderwerk): €75-€200 per kozijn</li>
                        <li>Eventuele vergunningskosten: variabel per gemeente</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        We raden aan om altijd een gespecificeerde offerte aan te vragen waarin alle kosten duidelijk staan vermeld.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-semibold">
                      Wat is financieel gezien de beste periode om kozijnen te vervangen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        De wintermaanden (november-februari) zijn vaak voordeliger voor de aanschaf van kozijnen. In deze periode 
                        is er minder vraag, waardoor leveranciers regelmatig winteracties aanbieden met kortingen van 10-15%. 
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
