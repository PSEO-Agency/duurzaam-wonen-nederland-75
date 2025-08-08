import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const ProfilesOverview: React.FC = () => {
  const profiles = [
    {
      id: 'living-82',
      name: 'Schüco Living Kozijnprofiel',
      slug: 'schuco-living-kozijnprofiel',
      image: '/lovable-uploads/b17265b8-0e61-4866-a077-8567ce7ccf9b.png',
      description: 'Ramen zijn een essentieel onderdeel van uw woning en dienen niet alleen aanwezig te zijn, maar ook praktisch, stijlvol en kwalitatief te zijn.',
      logo: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png'
    },
    {
      id: 'ct-70-as',
      name: 'Schüco CT70 Kozijnprofiel',
      slug: 'schuco-ct70-kozijnprofiel', 
      image: '/lovable-uploads/a9f0e889-dd7f-4195-8461-661638f5fc21.png',
      description: 'Het kiezen van het juiste raamsysteem is essentieel voor het comfort, de veiligheid en de esthetiek van uw woning.',
      logo: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kunststof Kozijnen Profielen - Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek onze premium kozijn profielen van Schüco. Van het Living systeem tot het CT70 profiel - kwaliteit en duurzaamheid gegarandeerd." />
      </Helmet>
      
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-green to-brand-green-dark">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Onze Kozijn Profielen
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Ontdek onze premium Schüco kozijn profielen voor elke woning
                </p>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Van het geavanceerde Living systeem tot het efficiënte CT70 profiel - 
                  kies voor kwaliteit, duurzaamheid en energiezuinigheid.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Profiles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
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
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                  Klaar voor nieuwe kozijnen?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ontdek welk profiel het beste bij uw woning past. 
                  Vraag vrijblijvend een offerte aan voor persoonlijk advies.
                </p>
                <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                  <Link to="/offerte">
                    Vraag offerte aan
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProfilesOverview;
