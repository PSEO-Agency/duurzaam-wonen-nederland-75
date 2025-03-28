
import React from 'react';
import SubpageHero from '@/components/kunststof-kozijnen/SubpageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import AnimatedSection from '@/components/AnimatedSection';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactCTA from '@/components/ContactCTA';

const relatedBrands = [
  { title: 'Veka Kozijnen', slug: '/kunststof-kozijnen/merken/veka', excerpt: 'Hoogwaardige Duitse kwaliteit met uitstekende isolatiewaarden.' },
  { title: 'Rehau Kozijnen', slug: '/kunststof-kozijnen/merken/rehau', excerpt: 'Innovatieve kozijnsystemen met diverse profielopties.' },
  { title: 'Kömmerling Kozijnen', slug: '/kunststof-kozijnen/merken/kommerling', excerpt: 'Premium kozijnen met geavanceerde technologie.' },
  { title: 'Deceuninck Kozijnen', slug: '/kunststof-kozijnen/merken/deceuninck', excerpt: 'Duurzame kozijnen met innovatieve recyclingsmogelijkheden.' },
];

// Product data for the Schüco assortment
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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Schüco Kunststof Kozijnen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Schüco kunststof kozijnen van topkwaliteit. Ontdek het premium assortiment met uitstekende isolatiewaarden, modern design en Duitse kwaliteit." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/merken/schuco" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <SubpageHero 
          title="Schüco Kunststof Kozijnen" 
          description="Premium kozijnen met Duitse kwaliteit en innovatieve technologie. Ontdek het Schüco assortiment met uitstekende isolatiewaarden en slank design."
          imageUrl="/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png"
          benefits={[
            'Duitse topkwaliteit met uitstekende isolatie',
            'Slanke profielen voor maximaal glasoppervlak',
            'Uitgebreid kleurenaanbod inclusief houtlook',
            'Hoge inbraakwerendheid tot RC3',
            'Geluiddempende eigenschappen',
            'Tot 40% energiebesparing mogelijk'
          ]}
        />
        
        <StickyNavigation />
        
        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Schüco Kunststof Kozijnen</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Schüco behoort tot de absolute wereldtop op het gebied van kunststof kozijnen. Het Duitse merk staat bekend om 
                    zijn innovatieve technologieën, hoogwaardige materialen en vooruitstrevende designs. Als officiële Schüco partner 
                    levert Duurzaam Wonen Nederland het complete assortiment Schüco kozijnen, inclusief vakkundige montage en service.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Waarom kiezen voor Schüco?</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li><strong>Uitstekende isolatie</strong> - Schüco profielen hebben uitzonderlijk lage U-waarden voor maximale energiebesparing</li>
                    <li><strong>Slank design</strong> - De slanke profielen maximaliseren het glasoppervlak voor meer lichtinval</li>
                    <li><strong>Hoogwaardige materialen</strong> - Gebruik van eersteklas kunststof en versterkingsprofielen voor langdurige stabiliteit</li>
                    <li><strong>Geavanceerde technologie</strong> - Innovatieve afdichtingssystemen en hoogwaardig hang- en sluitwerk</li>
                    <li><strong>Duurzaamheid</strong> - Milieuvriendelijke productieprocessen en recyclebare materialen</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">De juiste kozijnen voor uw woning</h3>
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
                  <h3 className="text-xl font-semibold mb-4">Voordelen</h3>
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
        
        {/* Product Assortment Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Schüco Assortiment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {schucoProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-700 mb-4">{product.description}</p>
                      <h4 className="font-medium mb-2">Kenmerken:</h4>
                      <ul className="space-y-1 mb-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-brand-green mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full mt-2">
                        <Link to="/contact">
                          <span>Meer informatie</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen over Schüco kozijnen</h2>
              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Related Brands Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8">Andere kozijnmerken</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBrands.map((brand, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{brand.title}</h3>
                    {brand.excerpt && <p className="text-gray-700 mb-4">{brand.excerpt}</p>}
                    <Link 
                      to={brand.slug} 
                      className="text-brand-green flex items-center hover:underline"
                    >
                      <span>Meer over {brand.title}</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SchucoBrand;
