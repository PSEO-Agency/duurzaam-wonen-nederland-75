
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MessagesSquare, Ruler, ClipboardCheck, Truck, Wrench, ThumbsUp, Calendar, Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const Werkwijze: React.FC = () => {
  // Workflow steps - reordered as requested
  const workflowSteps = [
    {
      step: 1,
      title: "Vrijblijvend adviesgesprek",
      description: "In een persoonlijk gesprek bespreken we uw wensen en mogelijkheden voor uw woning.",
      icon: MessagesSquare,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
    },
    {
      step: 2,
      title: "Aantrekkelijke offerte",
      description: "U ontvangt direct ter plekke een aantrekkelijke offerte zonder verrassingen, volledig toegespitst op uw situatie. U hoeft er niet op te wachten!",
      icon: ClipboardCheck,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-500",
    },
    {
      step: 3,
      title: "Inmeten",
      description: "Onze expert komt bij u langs om nauwkeurige metingen te verrichten voor een passend resultaat.",
      icon: Ruler,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
    },
    {
      step: 4,
      title: "Bestelling & productie",
      description: "Na uw akkoord bestellen wij de benodigde materialen en starten met de productie van uw oplossing.",
      icon: Truck,
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
    },
    {
      step: 5,
      title: "Vakkundige montage",
      description: "Ons ervaren montageteam installeert uw nieuwe producten met aandacht voor detail.",
      icon: Wrench,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
    },
    {
      step: 6,
      title: "Oplevering & nazorg",
      description: "Na oplevering controleren we alles samen met u en blijven we beschikbaar voor service en onderhoud.",
      icon: ThumbsUp,
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-500",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Onze Werkwijze | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek de werkwijze van Duurzaam Wonen Nederland: van vrijblijvend adviesgesprek tot vakkundige montage en nazorg. Transparant en kwaliteitsgericht." />
        <link rel="canonical" href="https://duurzaamwonen.info/werkwijze" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Van advies tot oplevering
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Onze werkwijze</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Bij Duurzaam Wonen Nederland werken we volgens een beproefde methodiek voor een zorgeloos 
                  proces en hoogwaardig resultaat. Ontdek hieronder stap voor stap hoe wij te werk gaan.
                </p>
                <Button 
                  size="lg" 
                  className="bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Plan direct een vrijblijvend adviesgesprek</span>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Workflow Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-12">
                {workflowSteps.map((step, index) => (
                  <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"} delay={index * 100}>
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                      {/* Step number and icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className={`w-24 h-24 rounded-full flex items-center justify-center ${step.color} border-2`}>
                            <step.icon className={`h-12 w-12 ${step.iconColor}`} />
                          </div>
                          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">
                            {step.step}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow md:border-l-2 md:border-gray-200 md:pl-10">
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                        
                        {/* Additional details for specific steps */}
                        {step.step === 1 && (
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-medium text-blue-800 mb-2">Wat kunt u verwachten?</h4>
                            <ul className="space-y-2 text-blue-700">
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-blue-200 p-1 mt-1">
                                  <Check className="h-3 w-3 text-blue-700" />
                                </div>
                                <span>Persoonlijk gesprek met onze adviseur</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-blue-200 p-1 mt-1">
                                  <Check className="h-3 w-3 text-blue-700" />
                                </div>
                                <span>Inventarisatie van uw wensen en eisen</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-blue-200 p-1 mt-1">
                                  <Check className="h-3 w-3 text-blue-700" />
                                </div>
                                <span>Advies over mogelijkheden en materialen</span>
                              </li>
                            </ul>
                          </div>
                        )}
                        
                        {step.step === 5 && (
                          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <h4 className="font-medium text-red-800 mb-2">Onze montageservice:</h4>
                            <ul className="space-y-2 text-red-700">
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-red-200 p-1 mt-1">
                                  <Check className="h-3 w-3 text-red-700" />
                                </div>
                                <span>Eigen, ervaren montageteams</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-red-200 p-1 mt-1">
                                  <Check className="h-3 w-3 text-red-700" />
                                </div>
                                <span>Nette en schone werkomgeving</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-red-200 p-1 mt-1">
                                  <Check className="h-3 w-3 text-red-700" />
                                </div>
                                <span>Volledige afwerking en afvoer van oude materialen</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Waarom kiezen voor onze aanpak?</h2>
                <p className="text-lg text-gray-600">
                  Onze beproefde werkwijze biedt u zekerheid en kwaliteit bij elke stap van het proces.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <MessagesSquare className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Transparante communicatie</h3>
                  <p className="text-gray-700">
                    We communiceren helder en duidelijk in elke fase van het project.
                    Geen verrassingen achteraf, maar open en eerlijk overleg vanaf het begin.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <Wrench className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Vakkundige uitvoering</h3>
                  <p className="text-gray-700">
                    Onze gecertificeerde monteurs werken met de grootste zorg en precisie.
                    We garanderen een hoogwaardige afwerking en uitvoering van uw project.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                    <ThumbsUp className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Persoonlijke begeleiding</h3>
                  <p className="text-gray-700">
                    Eén vast aanspreekpunt begeleidt u door het hele proces.
                    We staan voor u klaar met advies en ondersteuning, ook na oplevering.
                  </p>
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
                <h2 className="text-3xl font-bold mb-4">Wat klanten zeggen</h2>
                <p className="text-lg text-gray-600">
                  Onze klanten waarderen onze professionele werkwijze en transparante aanpak.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Familie de Vries",
                  location: "Enschede",
                  quote: "Vanaf het eerste gesprek tot de oplevering werden we goed geïnformeerd. Het montageteam werkte netjes en vakkundig. Een aanrader!"
                },
                {
                  name: "Pieter Janssen",
                  location: "Hengelo",
                  quote: "De stapsgewijze aanpak van Duurzaam Wonen Nederland gaf ons vertrouwen. De nieuwe kozijnen zijn perfect geïnstalleerd en we merken nu al het verschil."
                },
                {
                  name: "Familie Bakker",
                  location: "Almelo",
                  quote: "De persoonlijke begeleiding was top. Ook na de installatie bleef het contact goed en werden kleine puntjes direct opgelost. Echte vakmensen!"
                }
              ].map((testimonial, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
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

export default Werkwijze;
