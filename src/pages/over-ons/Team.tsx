
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Jan Jansen",
      position: "Oprichter & Directeur",
      photo: "/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png",
      bio: "Jan startte Duurzaam Wonen Nederland in 2003 en heeft meer dan 25 jaar ervaring in de bouwsector. Zijn passie voor duurzaamheid en innovatie drijft de visie van het bedrijf.",
    },
    {
      name: "Laura Smit",
      position: "Operationeel Manager",
      photo: "/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png",
      bio: "Laura zorgt ervoor dat alle operationele processen soepel verlopen. Met haar achtergrond in projectmanagement houdt ze alle ballen in de lucht.",
    },
    {
      name: "Eric de Vries",
      position: "Hoofd Verkoop",
      photo: "/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png",
      bio: "Eric heeft een scherp oog voor de behoeften van klanten en zorgt ervoor dat we altijd de beste oplossingen bieden.",
    },
    {
      name: "Anna Berg",
      position: "Technisch Adviseur",
      photo: "/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png",
      bio: "Anna is onze technisch specialist die alle ins en outs van onze producten kent. Ze adviseert klanten over de beste technische oplossingen.",
    },
    {
      name: "Peter Klein",
      position: "Hoofd Montage",
      photo: "/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png",
      bio: "Peter leidt ons montageteam en zorgt ervoor dat alle installaties perfect worden uitgevoerd volgens de hoogste kwaliteitsnormen.",
    },
    {
      name: "Sophie Bakker",
      position: "Klantenservice Manager",
      photo: "/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png",
      bio: "Sophie zorgt ervoor dat onze klanten altijd tevreden zijn en de service krijgen die ze verdienen.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Ons Team | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Maak kennis met het team van Duurzaam Wonen Nederland. Een gedreven groep professionals die zich inzet voor duurzame woningverbetering." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://duurzaamwonen.info/over-ons/team" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Ons team
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">De mensen achter Duurzaam Wonen Nederland</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Maak kennis met ons team van experts die elke dag werken aan duurzame oplossingen voor uw woning.
                  Een groep gepassioneerde professionals met jarenlange ervaring in de branche.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Team Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.photo} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-brand-green font-medium mb-4">{member.position}</p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                        <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
                          <Phone className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Onze kernwaarden</h2>
                <p className="text-lg text-gray-600">
                  Deze waarden vormen de basis van ons team en hoe we werken.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  value: "Kwaliteit",
                  description: "We streven naar de hoogste kwaliteit in alles wat we doen, van advies tot installatie."
                },
                {
                  value: "Betrokkenheid",
                  description: "We zijn persoonlijk betrokken bij elk project en staan altijd klaar voor onze klanten."
                },
                {
                  value: "Duurzaamheid",
                  description: "Duurzaamheid zit in ons DNA. We zijn gedreven om bij te dragen aan een betere toekomst."
                }
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-brand-green">{item.value}</h3>
                    <p className="text-gray-600">{item.description}</p>
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

export default Team;
