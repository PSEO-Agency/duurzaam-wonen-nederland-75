
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

const relatedServices = [
  { title: 'Kozijnen Montage', slug: '/kunststof-kozijnen/montage', excerpt: 'Professionele montage van uw kunststof kozijnen door ervaren monteurs.' },
  { title: 'Kozijnen Advies', slug: '/kunststof-kozijnen/services/advies', excerpt: 'Persoonlijk advies over de beste kozijnen voor uw woning.' },
  { title: 'Kozijnen Offerte', slug: '/contact', excerpt: 'Vraag een vrijblijvende offerte aan voor uw kunststof kozijnen.' },
  { title: 'Kozijnen Onderhoud', slug: '/kunststof-kozijnen/services/onderhoud', excerpt: 'Onderhoudstips en -services voor uw kunststof kozijnen.' },
];

const KozijnenInmeten: React.FC = () => {
  const faqs = [
    {
      question: 'Waarom is professioneel inmeten van kozijnen belangrijk?',
      answer: 'Professioneel inmeten is cruciaal om ervoor te zorgen dat uw kozijnen perfect passen. Zelfs kleine meetfouten kunnen leiden tot problemen bij de installatie, tocht, lekkage of een slechte isolatie. Onze ervaren inmeeters nemen alle relevante factoren in overweging voor een perfect eindresultaat.'
    },
    {
      question: 'Hoe verloopt een inmeetafspraak?',
      answer: 'Tijdens een inmeetafspraak komt onze specialist bij u thuis om de exacte afmetingen van uw kozijnopeningen op te nemen. Hierbij wordt rekening gehouden met eventuele oneffenheden, de staat van de muren en specifieke wensen. De specialist geeft ook advies over de beste kozijnoplossingen voor uw situatie.'
    },
    {
      question: 'Wat kost het inmeten van kozijnen?',
      answer: 'Het inmeten van kozijnen is gratis wanneer u besluit om bij ons te kopen. Als u alleen een inmeetservice wenst, rekenen we voorrijkosten en een uurtarief dat afhankelijk is van de omvang van het project.'
    },
    {
      question: 'Hoe snel kan er worden ingemeten?',
      answer: 'We streven ernaar om binnen 1-2 weken na uw aanvraag een inmeetafspraak te plannen. In drukke periodes kan dit iets langer duren. Na het inmeten ontvangt u binnen enkele werkdagen een gedetailleerde offerte.'
    },
    {
      question: 'Moet ik voorbereidingen treffen voor het inmeten?',
      answer: 'Het is handig als de kozijnopeningen goed toegankelijk zijn. Verwijder indien mogelijk gordijnen, jaloezieën en andere obstakels. Ook is het fijn als u eventuele specifieke wensen vooraf doordenkt, zodat onze inmeter hier rekening mee kan houden.'
    }
  ];

  const benefits = [
    "Gratis inmeten bij aankoop kozijnen",
    "Ervaren inmeeters met specialistische kennis",
    "Nauwkeurige meetapparatuur",
    "Gedetailleerd inmeetrapport",
    "Advies over kozijntypes tijdens inmeten",
    "Geen verrassingen achteraf dankzij correcte maten"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijnen Inmeten | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Professioneel inmeten van kunststof kozijnen door ervaren specialisten. Gratis inmeetservice bij aankoop. Nauwkeurige metingen voor perfect passende kozijnen." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen/services/inmeten" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <SubpageHero 
          title="Kunststof Kozijnen Inmeten" 
          description="Professioneel inmeten is de basis voor perfect passende kunststof kozijnen. Onze ervaren inmeeters zorgen voor nauwkeurige metingen en deskundig advies."
          imageUrl="/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png"
          benefits={[
            'Gratis inmeten bij aankoop kozijnen',
            'Ervaren inmeeters met specialistische kennis',
            'Nauwkeurige meetapparatuur',
            'Gedetailleerd inmeetrapport',
            'Advies over kozijntypes tijdens inmeten',
            'Geen verrassingen achteraf'
          ]}
        />
        
        <StickyNavigation />
        
        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-3xl font-bold mb-6">Kunststof Kozijnen Inmeten</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    De eerste stap naar perfect passende kunststof kozijnen is een nauwkeurige inmeting. Bij Duurzaam Wonen Nederland 
                    begrijpen we het belang van precisie. Onze ervaren inmeeters zorgen ervoor dat uw nieuwe kozijnen perfect aansluiten 
                    op uw woning, zonder kieren, tocht of andere problemen.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Ons inmeetproces</h3>
                  <p className="text-gray-700 mb-6">
                    Onze professionele inmeeters gebruiken geavanceerde meetapparatuur om de exacte afmetingen van uw kozijnopeningen te bepalen. 
                    We houden rekening met alle relevante factoren zoals:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Exacte breedte en hoogte van elke opening</li>
                    <li>Eventuele afwijkingen in de maatvoering (scheefstand, verzakkingen)</li>
                    <li>Staat van het omringende metselwerk</li>
                    <li>Diepte van de kozijnen</li>
                    <li>Aansluiting op vensterbanken en aftimmeringen</li>
                    <li>Specifieke wensen voor draairichtingen</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Waarom professioneel inmeten?</h3>
                  <p className="text-gray-700 mb-6">
                    Sommige mensen kiezen ervoor om zelf de maten van hun kozijnen op te nemen. Hoewel dit mogelijk is, raden we dit sterk 
                    af. Professioneel inmeten biedt diverse voordelen:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Gegarandeerde maatnauwkeurigheid tot op de millimeter</li>
                    <li>Vakkundig advies over de beste kozijnoplossingen</li>
                    <li>Identificatie van potentiële problemen vooraf</li>
                    <li>Correcte inschatting van montagebenodigdheden</li>
                    <li>Zekerheid over het eindresultaat</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Inmeten en offerte</h3>
                  <p className="text-gray-700 mb-6">
                    Na het inmeten verwerken onze specialisten de gegevens tot een gedetailleerde offerte. Hierin vindt u een exacte 
                    specificatie van de benodigde kozijnen, inclusief alle opties en de totale kosten. Als u vragen heeft over de offerte, 
                    staan we klaar om deze toe te lichten.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Planning en werkwijze</h3>
                  <p className="text-gray-700 mb-6">
                    Een inmeetafspraak duurt gemiddeld 1-2 uur, afhankelijk van het aantal kozijnen. Onze inmeter bespreekt tijdens het 
                    bezoek ook uw wensen qua type kozijn, kleur, beglazing en andere opties. Na het inmeten ontvangt u binnen enkele 
                    werkdagen een gedetailleerde offerte.
                  </p>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/3">
                <AnimatedSection animation="fade-in" delay={200}>
                  <div className="rounded-lg overflow-hidden shadow-md mb-8">
                    <img 
                      src="/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png" 
                      alt="Kunststof Kozijnen Inmeten" 
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
                    Wilt u meer weten over het inmeten van uw kozijnen? Onze experts staan klaar om al uw vragen te beantwoorden.
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
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen over inmeten van kozijnen</h2>
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
        
        {/* Related Services Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-8">Gerelateerde diensten</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    {service.excerpt && <p className="text-gray-700 mb-4">{service.excerpt}</p>}
                    <Link 
                      to={service.slug} 
                      className="text-brand-green flex items-center hover:underline"
                    >
                      <span>Meer over {service.title}</span>
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

export default KozijnenInmeten;
