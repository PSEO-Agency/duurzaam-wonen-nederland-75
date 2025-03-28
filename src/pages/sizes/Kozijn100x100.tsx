
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

const relatedSizes = [
  { title: 'Kozijn 200x100', slug: '/kunststof-kozijnen/afmetingen/200x100', excerpt: 'Breed kozijn van 200x100 cm voor grotere gevelopeningen.' },
  { title: 'Kozijn 100x150', slug: '/kunststof-kozijnen/afmetingen/100x150', excerpt: 'Verticaal kozijn van 100x150 cm, ideaal voor hogere raampartijen.' },
  { title: 'Kozijn 150x150', slug: '/kunststof-kozijnen/afmetingen/150x150', excerpt: 'Vierkant kozijn van 150x150 cm voor maximale lichtinval.' },
  { title: 'Maatwerk Kozijnen', slug: '/kunststof-kozijnen/afmetingen/maatwerk', excerpt: 'Kozijnen volledig op maat gemaakt voor uw specifieke situatie.' },
];

const Kozijn100x100: React.FC = () => {
  const faqs = [
    {
      question: 'Wat kost een kunststof kozijn van 100x100 cm?',
      answer: 'Een standaard kunststof kozijn van 100x100 cm kost gemiddeld tussen €300 en €450, afhankelijk van het profieltype, glassoort en eventuele extra opties. Met montage erbij ligt de prijs tussen €475 en €650. Voor een exacte prijsopgave kunt u een vrijblijvende offerte aanvragen.'
    },
    {
      question: 'Kan ik een 100x100 kozijn als draaikiepraam krijgen?',
      answer: 'Ja, een kozijn van 100x100 cm is zeer geschikt als draaikiepraam. Deze afmeting biedt voldoende ruimte voor een comfortabele doorgang en is niet te groot voor het hang- en sluitwerk. We kunnen ook andere opties aanbieden zoals een vast raam of valraam.'
    },
    {
      question: 'Hoe lang duurt de levering van een 100x100 kozijn?',
      answer: 'Voor standaard kozijnen van 100x100 cm hanteren we een levertijd van 4-6 weken na bestelling. Bij specifieke kleur- of afwerkingswensen kan dit oplopen tot 6-8 weken. We informeren u altijd vooraf over de exacte levertijd.'
    },
    {
      question: 'Is 100x100 cm een standaardmaat voor kozijnen?',
      answer: 'Een kozijn van 100x100 cm behoort tot de meest voorkomende afmetingen in de Nederlandse woningbouw. Hierdoor zijn ze vaak snel leverbaar en hebben ze een gunstige prijs. We produceren echter alle kozijnen op maat, dus ook afwijkende maten zijn mogelijk.'
    },
    {
      question: 'Welk type beglazing is geschikt voor een 100x100 kozijn?',
      answer: 'Voor een kozijn van 100x100 cm bieden we diverse beglazingsopties. Standaard is HR++ glas (U-waarde 1,1), maar we kunnen ook triple glas (U-waarde 0,7), geluidswerend glas of veiligheidsglas toepassen. De keuze hangt af van uw specifieke wensen op het gebied van isolatie, geluid en veiligheid.'
    }
  ];

  const benefits = [
    "Perfect formaat voor kleinere ruimtes",
    "Snel leverbaar als standaardmaat",
    "Uitstekende isolatiewaarden",
    "Diverse openingsmogelijkheden",
    "Gunstige prijs-kwaliteitverhouding",
    "Op maat gemaakt voor uw woning"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijn 100x100 cm | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Kunststof kozijnen in de maat 100x100 cm. Perfect voor badkamers en kleinere ruimtes. Ontdek onze hoogwaardige, energiezuinige kozijnen op maat." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/afmetingen/100x100" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <SubpageHero 
          title="Kunststof Kozijn 100x100 cm" 
          description="Veelzijdige kozijnen in de standaardmaat 100x100 cm voor optimale lichtinval en isolatie. Verkrijgbaar in diverse uitvoeringen en kleuren."
          imageUrl="/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png"
          benefits={[
            'Perfect formaat voor kleinere ruimtes',
            'Snel leverbaar als standaardmaat',
            'Uitstekende isolatiewaarden',
            'Diverse openingsmogelijkheden',
            'Gunstige prijs-kwaliteitverhouding',
            'Op maat gemaakt voor uw woning'
          ]}
        />
        
        <StickyNavigation />
        
        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Kunststof Kozijn 100x100 cm</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Een kunststof kozijn van 100x100 cm is een van de meest gangbare en veelzijdige kozijnmaten in de Nederlandse woningbouw. 
                    Deze vierkante afmeting biedt een perfecte balans tussen lichtinval en functionaliteit, en past in diverse gevelopeningen. 
                    Bij Duurzaam Wonen Nederland leveren we hoogwaardige 100x100 kozijnen, exact op maat gemaakt en in diverse uitvoeringen.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Kenmerken 100x100 kozijn</h3>
                  <p className="text-gray-700 mb-6">
                    Deze kozijnmaat heeft enkele specifieke kenmerken die het bijzonder maken:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Perfect vierkante proporties voor een harmonieuze uitstraling</li>
                    <li>Ideale maat voor badkamers, bijkeukens en kleinere ruimtes</li>
                    <li>Geschikt voor zowel draaikiepramen als vaste beglazing</li>
                    <li>Efficiënte verhouding tussen kozijnoppervlak en glasoppervlak</li>
                    <li>Standaardmaat die vaak snel leverbaar is</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Toepassingen</h3>
                  <p className="text-gray-700 mb-6">
                    Kozijnen van 100x100 cm worden veel toegepast in:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Badkamers, waar privacy en ventilatie belangrijk zijn</li>
                    <li>Trappenhuizen, waar een beperkte maar effectieve lichtinval gewenst is</li>
                    <li>Gangen en overige ruimtes die natuurlijk licht nodig hebben</li>
                    <li>Bijgebouwen zoals garages en schuren</li>
                    <li>Woonkamers, als onderdeel van een grotere raampartij</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Technische specificaties</h3>
                  <p className="text-gray-700 mb-6">
                    Onze kunststof kozijnen van 100x100 cm worden geproduceerd volgens de hoogste kwaliteitsnormen:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Buitenwerkse maat: exact 100x100 cm (tolerantie +/- 2mm)</li>
                    <li>Beschikbare profielsystemen: 70mm of 82mm diepte</li>
                    <li>Standaard beglazing: HR++ glas 4-16-4 (U-waarde 1,1)</li>
                    <li>Optionele beglazing: triple glas 4-12-4-12-4 (U-waarde 0,7)</li>
                    <li>Inbouwdiepte: minimaal 70mm voor optimale isolatie</li>
                    <li>Versterkingsprofielen: thermisch onderbroken staalprofiel</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Kozijn configuraties</h3>
                  <p className="text-gray-700 mb-6">
                    Een kozijn van 100x100 cm kan op verschillende manieren worden uitgevoerd:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li><strong>Vast kozijn</strong> - maximale isolatie en lichtinval zonder opengaande delen</li>
                    <li><strong>Draaikiepraam</strong> - veelzijdige opening voor ventilatie en gemakkelijke reiniging</li>
                    <li><strong>Valraam</strong> - kantelt aan de bovenzijde open voor veilige ventilatie</li>
                    <li><strong>Draaivalraam</strong> - combineert draai- en valfunctie in één window</li>
                    <li><strong>Combinatie</strong> - bijvoorbeeld half vast, half draaikiepraam</li>
                  </ul>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/3">
                <AnimatedSection animation="fade-in" delay={200}>
                  <div className="rounded-lg overflow-hidden shadow-md mb-8">
                    <img 
                      src="/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png" 
                      alt="Kunststof Kozijn 100x100 cm" 
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
                  <h3 className="text-xl font-semibold mb-4">Hulp nodig?</h3>
                  <p className="mb-4">
                    Wilt u meer weten over onze 100x100 kozijnen? Neem contact op voor persoonlijk advies.
                  </p>
                  <Button asChild className="w-full bg-white text-brand-green hover:bg-gray-100">
                    <Link to="/contact">
                      <span>Neem contact op</span>
                    </Link>
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen over 100x100 kozijnen</h2>
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
        
        {/* Related Sizes Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8">Andere kozijnafmetingen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedSizes.map((size, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{size.title}</h3>
                    {size.excerpt && <p className="text-gray-700 mb-4">{size.excerpt}</p>}
                    <Link 
                      to={size.slug} 
                      className="text-brand-green flex items-center hover:underline"
                    >
                      <span>Meer over {size.title}</span>
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

export default Kozijn100x100;
