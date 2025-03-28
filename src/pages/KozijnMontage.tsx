import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Wrench, Clock, Hammer, ShieldCheck, Star, X, Ruler, Settings, Paintbrush, CheckCircle } from 'lucide-react';
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

const KozijnMontage: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Inmeten',
      description: 'Nauwkeurige opmeting van alle kozijnopeningen om de exacte maten te bepalen.',
      icon: <Ruler className="h-8 w-8 text-brand-green" />,
      duration: '1 dag'
    },
    {
      id: 2,
      title: 'Productie',
      description: 'Uw kozijnen worden op maat gemaakt in onze fabriek volgens de afgesproken specificaties.',
      icon: <Settings className="h-8 w-8 text-brand-green" />,
      duration: '4-6 weken'
    },
    {
      id: 3,
      title: 'Oude kozijnen verwijderen',
      description: 'De bestaande kozijnen worden zorgvuldig gedemonteerd en afgevoerd.',
      icon: <Wrench className="h-8 w-8 text-brand-green" />,
      duration: '1-2 dagen'
    },
    {
      id: 4,
      title: 'Nieuwe kozijnen plaatsen',
      description: 'De nieuwe kunststof kozijnen worden waterpas en luchtdicht gemonteerd.',
      icon: <Hammer className="h-8 w-8 text-brand-green" />,
      duration: '1-2 dagen'
    },
    {
      id: 5,
      title: 'Afwerking',
      description: 'Alle naden worden netjes afgewerkt met kit en eventueel worden nieuwe vensterbanken geplaatst.',
      icon: <Paintbrush className="h-8 w-8 text-brand-green" />,
      duration: '1 dag'
    },
    {
      id: 6,
      title: 'Eindcontrole',
      description: 'Controle op werking, luchtdichtheid en afwerking van alle gemonteerde kozijnen.',
      icon: <CheckCircle className="h-8 w-8 text-brand-green" />,
      duration: 'Direct na montage'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijnen Montage | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Alles over de professionele montage van kunststof kozijnen: het proces, do's & don'ts, en belangrijke overwegingen voor een perfect resultaat." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/montage" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                Montage Kunststof Kozijnen
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Vakkundige Montage Van Uw Kunststof Kozijnen
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                De kwaliteit van montage is net zo belangrijk als de kwaliteit van de kozijnen zelf. Ontdek hoe onze professionals zorgen voor een perfecte installatie.
              </p>
            </div>
          </div>
        </section>
        
        <StickyNavigation />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Het montageproces van kunststof kozijnen</h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                Een goede montage is cruciaal voor de levensduur, isolatiewaarde en functionaliteit van uw kozijnen. Hieronder vindt u de stappen van ons professionele montageproces.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {steps.map((step, index) => (
                  <AnimatedSection key={step.id} animation="fade-in" delay={index * 100}>
                    <Card className="h-full hover:shadow-md transition-shadow border-t-4 border-t-brand-green">
                      <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="bg-gray-50 p-3 rounded-full mr-4">
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-brand-green">Stap {step.id}</span>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                          {step.description}
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Duur: {step.duration}</span>
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
                  <h2 className="text-3xl font-bold mb-6">Montage Opties</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Bij Duurzaam Wonen Nederland bieden we verschillende montage-opties aan, zodat u kunt kiezen wat het beste bij uw situatie past.
                  </p>
                  
                  <Tabs defaultValue="full" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="full">All-inclusive montage</TabsTrigger>
                      <TabsTrigger value="basic">Basis montage</TabsTrigger>
                      <TabsTrigger value="self">Zelf monteren</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="full" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">All-inclusive montage pakket:</h3>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Verwijderen en afvoeren oude kozijnen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Professionele montage nieuwe kozijnen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Afwerking binnen- en buitenzijde</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Plaatsing nieuwe vensterbanken (optioneel)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Schoonmaak werkplek na montage</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">10 jaar garantie op montage</span>
                        </li>
                      </ul>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700">
                          <strong>Prijs: </strong>Vanaf €300 per kozijn, afhankelijk van situatie en complexiteit
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="basic" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Basis montage pakket:</h3>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Verwijderen oude kozijnen (zonder afvoer)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Montage nieuwe kozijnen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Basis afwerking (zonder schilderwerk)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">5 jaar garantie op montage</span>
                        </li>
                      </ul>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700">
                          <strong>Prijs: </strong>Vanaf €200 per kozijn, afhankelijk van situatie en complexiteit
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="self" className="space-y-4">
                      <h3 className="text-xl font-semibold mb-3">Zelf monteren:</h3>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Levering kozijnen op locatie</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Uitgebreide montageinstructies</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">Telefonische ondersteuning tijdens montage</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">10 jaar garantie op kozijnen (niet op montage)</span>
                        </li>
                      </ul>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700">
                          <strong>Prijs: </strong>Alleen materiaalkosten - geen montagetarief
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-8">
                    <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                      <span>Vraag een offerte aan</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/2">
                <AnimatedSection animation="fade-in" delay={200}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png" 
                        alt="Montage kunststof kozijnen" 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white">Professionele installatie</h3>
                          <p className="text-white/90">Door gecertificeerde monteurs</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <ShieldCheck className="h-5 w-5 mr-2 text-brand-green" />
                        <span>Waarom kiezen voor professionele montage?</span>
                      </h3>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Gegarandeerde kwaliteit</strong>
                            <p className="text-gray-700 text-sm">Onze monteurs zijn gecertificeerd en hebben jarenlange ervaring.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Optimale isolatie</strong>
                            <p className="text-gray-700 text-sm">Professionele montage zorgt voor een luchtdichte aansluiting en maximale isolatiewaarde.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Garantie</strong>
                            <p className="text-gray-700 text-sm">Bij professionele montage krijgt u tot 10 jaar garantie op zowel de kozijnen als de montage.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <div>
                            <strong className="block text-gray-800">Tijdsbesparing</strong>
                            <p className="text-gray-700 text-sm">Onze monteurs werken snel en efficiënt, met minimale overlast voor uw woning.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 border-t border-gray-100">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-brand-green" />
                        <span>Wat klanten zeggen over onze montage</span>
                      </h3>
                      
                      <div className="bg-white p-4 rounded-md border border-gray-100 mb-4">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-sm font-medium">Familie De Vries, Enschede</span>
                        </div>
                        <p className="text-gray-700 text-sm italic">
                          "De monteurs werkten ongelooflijk netjes en precies. Alles werd perfect afgewerkt en ze ruimden alles keurig op. Zeer tevreden!"
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-sm font-medium">Jan Bakker, Hengelo</span>
                        </div>
                        <p className="text-gray-700 text-sm italic">
                          "Wat een verschil met onze oude kozijnen! De monteurs legden alles duidelijk uit en werkten zeer zorgvuldig. De isolatiewaarde is enorm verbeterd."
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Do's & Don'ts bij Kozijnmontage</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <AnimatedSection animation="fade-in" delay={100}>
                  <Card className="h-full border-green-100 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-600" />
                        <span>Do's</span>
                      </h3>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Zorg voor nauwkeurige inmeting van alle kozijnopeningen</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Controleer het bouwkundig kader op scheuren of ongelijke delen</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Plaats de kozijnen 100% waterpas en in het lood</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Gebruik hoogwaardige afdichtingsmaterialen voor een luchtdichte montage</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Zorg voor voldoende bevestigingspunten verspreid over het kozijn</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Test de werking van alle bewegende delen na montage</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200}>
                  <Card className="h-full border-red-100 bg-red-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
                        <X className="h-5 w-5 mr-2 text-red-600" />
                        <span>Don'ts</span>
                      </h3>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Kozijnen monteren zonder ervaring of specifieke kennis</p>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Besparen op bevestigings- en afdichtingsmaterialen</p>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Het kozijn volledig vastzetten voordat het waterpas en in het lood staat</p>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">De dilatatievoeg (ruimte tussen kozijn en muur) te klein of te groot maken</p>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Kozijnen geforceerd in de opening duwen bij een te strakke passing</p>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-600 mt-1 mr-2 shrink-0" />
                          <p className="text-gray-700">Afkitten bij temperaturen onder 5°C of boven 30°C</p>
                        </li>
                      </ul>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen over montage</h2>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">
                      Hoe lang duurt de montage van kunststof kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        De montageduur is afhankelijk van het aantal kozijnen, de complexiteit van de situatie en eventuele bijkomende werkzaamheden. Voor een gemiddelde woning met 6-8 kozijnen duurt de montage meestal 1-2 dagen. Bij grotere projecten of complexe situaties kan dit oplopen tot meerdere dagen. Onze monteurs geven vooraf een realistische indicatie van de verwachte doorlooptijd.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">
                      Kan ik in mijn woning blijven tijdens de montage?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Ja, in de meeste gevallen kunt u gewoon in uw woning blijven tijdens de montage. Onze monteurs zorgen ervoor dat de overlast tot een minimum beperkt blijft. Per ruimte duurt de montage meestal enkele uren. In koude periodes adviseren we wel om de betreffende ruimte tijdelijk niet te gebruiken, aangezien deze open komt te staan. We werken meestal kamer voor kamer, zodat niet uw hele woning tegelijk open staat.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">
                      Wat gebeurt er met mijn oude kozijnen?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Bij onze all-inclusive montage verzorgen wij de complete afvoer en recycling van uw oude kozijnen. Houten kozijnen worden gescheiden van het glas en op verantwoorde wijze verwerkt. Kunststof kozijnen worden gerecycled en kunnen dienen als grondstof voor nieuwe producten. Zo dragen we bij aan een duurzame verwerking van materialen. Als u kiest voor basis montage, dient u zelf voor de afvoer te zorgen.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      Kan ik kunststof kozijnen zelf monteren?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Hoewel het technisch mogelijk is om kunststof kozijnen zelf te monteren, raden wij dit alleen aan voor ervaren doe-het-zelvers. Een correcte montage is cruciaal voor de levensduur, isolatiewaarde en functionaliteit van uw kozijnen. Bovendien kan onjuiste montage leiden tot het vervallen van de garantie. Wij bieden wel ondersteuning voor zelfmontage met uitgebreide instructies en telefonische hulp, maar adviseren in de meeste gevallen professionele montage.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-semibold">
                      Moet ik mijn woning voorbereiden voor de montage?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Ja, enige voorbereiding is handig. Wij adviseren om:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                        <li>De ruimte rondom de kozijnen vrij te maken (minimaal 1,5 meter)</li>
                        <li>Gordijnen, jaloezieën en andere raamdecoratie te verwijderen</li>
                        <li>Waardevolle en kwetsbare items uit de werkruimte te halen</li>
                        <li>Indien aanwezig, alarmsystemen tijdelijk uit te schakelen</li>
                        <li>Huisdieren eventueel onder te brengen in een andere ruimte</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        Onze monteurs leggen beschermende materialen neer, maar enige voorbereiding helpt om de werkzaamheden vlot te laten verlopen.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <Services />
        
        <Reviews />
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default KozijnMontage;
