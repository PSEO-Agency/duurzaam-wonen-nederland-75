
import React from 'react';
import SubpageHero from '@/components/kunststof-kozijnen/SubpageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import AnimatedSection from '@/components/AnimatedSection';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, ShieldCheck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import ContactCTA from '@/components/ContactCTA';
import Services from '@/components/kunststof-kozijnen/Services';
import Reviews from '@/components/Reviews';

// Schüco product data
const schucoProducts = [
  {
    id: 1,
    name: "Schüco Living",
    description: "Premium profielsysteem met uitstekende isolatiewaarden en modern design.",
    features: [
      "82mm profieldiepte voor optimale isolatie",
      "7 kamers voor uitstekende thermische prestaties",
      "Uitermate geschikt voor passief bouwen",
      "Triple beglazing mogelijk tot 52mm dikte"
    ],
    image: "/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png"
  },
  {
    id: 2,
    name: "Schüco CT 70",
    description: "Veelzijdig kozijnsysteem dat comfort en design perfect combineert.",
    features: [
      "70mm profieldiepte voor goede isolatie",
      "5 kamers voor effectieve thermische isolatie",
      "Modern design met slanke zichtlijnen",
      "Beglazing tot 40mm dikte mogelijk"
    ],
    image: "/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png"
  },
  {
    id: 3,
    name: "Schüco Living Slide",
    description: "Hoogwaardig schuifsysteem voor maximaal wooncomfort en gebruiksgemak.",
    features: [
      "82mm profieldiepte voor uitstekende isolatie",
      "Speciaal ontworpen voor grote glazen oppervlakken",
      "Lage dorpel voor comfortabele doorgang",
      "Inbraakwerendheid tot RC2"
    ],
    image: "/lovable-uploads/16c4e987-ea24-4f28-adf8-f1e4a100cc98.png"
  }
];

const SchucoBrand: React.FC = () => {
  const faqs = [
    {
      question: 'Wat maakt Schüco kozijnen bijzonder?',
      answer: 'Schüco kozijnen onderscheiden zich door Duitse topkwaliteit, innovatieve technologie en uitstekende isolatiewaarden. De kozijnen worden geproduceerd volgens strenge kwaliteitsnormen en hebben een uniek design met slanke profielen voor maximaal glasoppervlak. Daarnaast biedt Schüco geavanceerde beveiligingsopties en een breed scala aan kleuren en afwerkingen.'
    },
    {
      question: 'Hoe verhouden Schüco kozijnen zich qua prijs tot andere merken?',
      answer: 'Schüco positioneert zich in het premium segment van kunststof kozijnen. De prijs ligt gemiddeld 10-15% hoger dan standaard kozijnen, maar dit vertaalt zich in betere isolatiewaarden, langere levensduur en hoogwaardige afwerking. Door de energiebesparing verdient u deze meerprijs vaak terug. We helpen u graag de juiste balans te vinden tussen budget en kwaliteitswensen.'
    },
    {
      question: 'Wat is de levensduur van Schüco kunststof kozijnen?',
      answer: 'Schüco kunststof kozijnen hebben een zeer lange levensduur van minimaal 30-40 jaar. Door de hoogwaardige materialen en versterkingsprofielen behouden ze jarenlang hun functionaliteit en uiterlijk. De kozijnen verkleuren niet en blijven vormvast, ook bij extreme weersomstandigheden. Hierdoor zijn ze een duurzame investering voor uw woning.'
    },
    {
      question: 'Welk Schüco profielsysteem is het meest geschikt voor mijn woning?',
      answer: 'De keuze voor het juiste Schüco systeem hangt af van uw specifieke situatie. Voor nieuwbouw of zeer energiezuinige woningen adviseren we het Schüco Living systeem met 82mm profieldiepte. Voor renovatie is het CT 70 systeem met 70mm vaak een goede keuze. Bij grotere glaspuien komt het Living Slide systeem goed tot zijn recht. Tijdens een vrijblijvend adviesgesprek helpen we u de optimale keuze te maken.'
    },
    {
      question: 'Zijn er speciale onderhoudsvoorschriften voor Schüco kozijnen?',
      answer: 'Schüco kozijnen zijn zeer onderhoudsarm. Voor optimaal behoud volstaat een regelmatige reiniging met water en een mild reinigingsmiddel. Het hang- en sluitwerk dient jaarlijks gesmeerd te worden met zuurvrije olie of siliconenspray. Controleer ook regelmatig of de ontwateringsopeningen vrij zijn van vuil. Bij correct onderhoud blijven de kozijnen in perfecte staat en behoudt u uw garantie.'
    }
  ];

  const benefits = [
    "Duitse topkwaliteit met uitstekende isolatie",
    "Slanke profielen voor maximaal glasoppervlak",
    "Uitgebreid kleurenaanbod inclusief houtlook",
    "Hoge inbraakwerendheid tot RC3",
    "Geluiddempende eigenschappen",
    "Tot 40% energiebesparing mogelijk"
  ];

  const certifications = [
    {
      title: "KOMO-certificaat",
      description: "Het KOMO-keurmerk garandeert dat de koz­ijnen voldoen aan de Nederlandse eisen voor kwaliteit, veiligheid en duurzaamheid.",
      icon: ShieldCheck
    },
    {
      title: "CE-markering",
      description: "De CE-markering geeft aan dat de kozijnen voldoen aan de Europese richtlijnen voor bouwproducten.",
      icon: Award
    },
    {
      title: "RAL Gütezeichen",
      description: "Het Duitse RAL-keurmerk staat voor hoogwaardige kwaliteit en strenge eisen wat betreft materiaalgebruik.",
      icon: Star
    }
  ];

  // Profile data in homepage format
  const profiles = [
    {
      id: 'living-82',
      name: 'Schüco Living Kozijnprofiel',
      slug: 'schuco-living-kozijnprofiel',
      image: '/lovable-uploads/a9f0e889-dd7f-4195-8461-661638f5fc21.png',
      description: 'Ramen zijn een essentieel onderdeel van uw woning en dienen niet alleen aanwezig te zijn, maar ook praktisch, stijlvol en kwalitatief te zijn.',
      logo: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png'
    },
    {
      id: 'ct-70-as',
      name: 'Schüco CT70 Kozijnprofiel',
      slug: 'schuco-ct70-kozijnprofiel', 
      image: '/lovable-uploads/b17265b8-0e61-4866-a077-8567ce7ccf9b.png',
      description: 'Het kiezen van het juiste raamsysteem is essentieel voor het comfort, de veiligheid en de esthetiek van uw woning.',
      logo: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png'
    }
  ];

  const relatedPages = [
    { title: 'Kunststof Kozijnen Types', slug: '/kunststof-kozijnen/types', excerpt: 'Ontdek alle verschillende types kunststof kozijnen en hun toepassingen.' },
    { title: 'Kozijn Kleuren', slug: '/kunststof-kozijnen/kleuren', excerpt: 'Bekijk het uitgebreide kleurenaanbod voor uw nieuwe kozijnen.' },
    { title: 'Kozijn Prijzen', slug: '/kunststof-kozijnen/prijzen', excerpt: 'Informatie over prijzen en financieringsmogelijkheden.' },
    { title: 'Kozijn Montage', slug: '/kunststof-kozijnen/montage', excerpt: 'Alles over de professionele montage van uw nieuwe kozijnen.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Schüco Kunststof Kozijnen | Premium Duitse Kwaliteit | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Schüco kunststof kozijnen van topkwaliteit. Ontdek het premium assortiment met uitstekende isolatiewaarden, modern design en Duitse kwaliteit. Vraag vrijblijvend een offerte aan." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/schuco" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <SubpageHero 
          title="Schüco Kunststof Kozijnen" 
          description="Premium kozijnen met Duitse kwaliteit en innovatieve technologie. Ontdek het Schüco assortiment met uitstekende isolatiewaarden en slank design."
          imageUrl="/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png"
          benefits={benefits}
        />
        
        <StickyNavigation />
        
        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Waarom kiezen voor Schüco?</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Schüco behoort tot de absolute wereldtop op het gebied van kunststof kozijnen. Het Duitse merk staat bekend om 
                    zijn innovatieve technologieën, hoogwaardige materialen en vooruitstrevende designs. Als officiële Schüco partner 
                    levert Duurzaam Wonen Nederland het complete assortiment Schüco kozijnen, inclusief vakkundige montage en service.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Deutsche Qualität</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li><strong>Uitstekende isolatie</strong> - Schüco profielen hebben uitzonderlijk lage U-waarden voor maximale energiebesparing</li>
                    <li><strong>Slank design</strong> - De slanke profielen maximaliseren het glasoppervlak voor meer lichtinval</li>
                    <li><strong>Hoogwaardige materialen</strong> - Gebruik van eersteklas kunststof en versterkingsprofielen voor langdurige stabiliteit</li>
                    <li><strong>Geavanceerde technologie</strong> - Innovatieve afdichtingssystemen en hoogwaardig hang- en sluitwerk</li>
                    <li><strong>Duurzaamheid</strong> - Milieuvriendelijke productieprocessen en recyclebare materialen</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Voor elke woning het juiste systeem</h3>
                  <p className="text-gray-700 mb-6">
                    Of u nu een nieuwbouwwoning heeft, een jaren '30 herenhuis of een moderne villa, Schüco biedt voor elke situatie 
                    de perfecte kozijnoplossing. De kozijnen zijn verkrijgbaar in verschillende profieldieptes (70mm en 82mm), 
                    waardoor we altijd kunnen voldoen aan uw specifieke isolatie-eisen. Het uitgebreide kleurenprogramma biedt 
                    daarnaast vrijwel onbeperkte mogelijkheden om de kozijnen perfect aan te laten sluiten bij de architectuur 
                    van uw woning.
                  </p>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/3">
                <AnimatedSection animation="fade-in" delay={200}>
                  <div className="rounded-lg overflow-hidden shadow-md mb-8">
                    <img 
                      src="/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png" 
                      alt="Schüco Kunststof Kozijnen" 
                      className="w-full h-auto"
                    />
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300} className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">Voordelen van Schüco</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-green mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={400} className="bg-brand-green text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Interesse in Schüco?</h3>
                  <p className="mb-4">
                    Onze adviseurs helpen u graag bij het maken van de juiste keuze uit het Schüco assortiment.
                  </p>
                  <Button asChild className="w-full bg-white text-brand-green hover:bg-gray-100">
                    <Link to="/contact">
                      <span>Vraag advies aan</span>
                    </Link>
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Assortment Section - Updated to match homepage format */}
        <section id="soorten" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Schüco Assortiment</h2>
                <p className="text-lg text-gray-600">
                  Ontdek onze Schüco kozijn profielen van topkwaliteit
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {profiles.map((profile, index) => (
                <AnimatedSection key={profile.id} animation="fade-in" delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="aspect-w-4 aspect-h-3">
                      <img 
                        src={profile.image} 
                        alt={`${profile.name} doorsnede`}
                        className="object-cover w-full h-64"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">{profile.name}</h3>
                        <img 
                          src={profile.logo} 
                          alt="Schüco" 
                          className="h-5 w-auto"
                        />
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {profile.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full bg-white hover:bg-gray-50 border-gray-300"
                        asChild
                      >
                        <Link to={`/kunststof-kozijnen/profielen/${profile.slug}`}>
                          Bekijk profiel details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection animation="fade-in" delay={300} className="mt-12">
              <div className="text-center bg-white rounded-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-3">Garantie op al onze profielen</h3>
                <p className="text-gray-600 mb-4">
                  Op alle Schüco profielen bieden wij 15 jaar productgarantie en 10 jaar servicegarantie op de montage.
                </p>
                <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                  <Link to="/offerte">
                    Vraag vrijblijvend een offerte aan
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Keurmerken en Certificeringen</h2>
              <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                Schüco kozijnen beschikken over alle belangrijke keurmerken en certificeringen die garant staan 
                voor kwaliteit, veiligheid en duurzaamheid.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {certifications.map((cert, index) => (
                  <AnimatedSection key={cert.title} animation="fade-in" delay={index * 100}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                            <cert.icon className="h-6 w-6 text-brand-green" />
                          </div>
                          <h3 className="text-xl font-semibold">{cert.title}</h3>
                        </div>
                        <p className="text-gray-700">{cert.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
              
              {/* Certification Logos */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Onze certificeringen</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                  <div className="bg-white rounded p-4 h-20 flex items-center justify-center">
                    <img src="/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png" alt="KOMO" className="h-12 max-w-full object-contain" />
                  </div>
                  <div className="bg-white rounded p-4 h-20 flex items-center justify-center">
                    <img src="/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png" alt="CE" className="h-12 max-w-full object-contain" />
                  </div>
                  <div className="bg-white rounded p-4 h-20 flex items-center justify-center">
                    <img src="/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png" alt="PKVW" className="h-14 max-w-full object-contain" />
                  </div>
                  <div className="bg-white rounded p-4 h-20 flex items-center justify-center">
                    <img src="/lovable-uploads/84861c8c-4187-4055-a956-1249dbe30fe3.png" alt="Warmtefonds" className="h-14 max-w-full object-contain" />
                  </div>
                  <div className="bg-white rounded p-4 h-20 flex items-center justify-center">
                    <img src="/lovable-uploads/4d42855f-0a4b-48ef-b632-25f5f01975fc.png" alt="Schüco" className="h-12 max-w-full object-contain" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen over Schüco kozijnen</h2>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Related Pages Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8">Gerelateerde informatie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {relatedPages.map((page, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{page.title}</h3>
                    {page.excerpt && <p className="text-gray-700 mb-4">{page.excerpt}</p>}
                    <Link 
                      to={page.slug} 
                      className="text-brand-green flex items-center hover:underline"
                    >
                      <span>Meer informatie</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
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

export default SchucoBrand;
