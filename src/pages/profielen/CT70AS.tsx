
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const CT70AS: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Schüco CT 70 AS | Kunststof Kozijn Profiel</title>
        <meta name="description" content="Ontdek het Schüco CT 70 AS kunststof kozijn profiel. Betaalbaar en betrouwbaar voor iedere toepassing. Bekijk specificaties en voordelen." />
      </Helmet>
      
      <Navbar />

      <main className="pt-20">
        <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl font-bold">Schüco CT 70 AS</h1>
                    <img 
                      src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                      alt="Schüco" 
                      className="h-8 w-auto"
                    />
                  </div>
                  <p className="text-xl text-gray-600 mb-6">
                    Het betrouwbare kunststof kozijn systeem met uitstekende prijs-kwaliteitverhouding. Ideaal voor standaard toepassingen in woningbouw.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">70mm profieldiepte</Badge>
                    <Badge variant="secondary">Uf ≤ 1,3 W/(m²·K)</Badge>
                    <Badge variant="secondary">Klasse 4 luchtdichtheid</Badge>
                    <Badge variant="secondary">Betaalbaar</Badge>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="bg-brand-green hover:bg-brand-green-dark" asChild>
                      <Link to="/offerte">
                        Offerte aanvragen
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Brochure downloaden
                    </Button>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="/lovable-uploads/97291a33-75bc-4a31-9791-a3e0610a5963.png"
                    alt="Schüco CT 70 AS doorsnede"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <AnimatedSection animation="fade-in">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Voordelen van Schüco CT 70 AS</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Goede prijs-kwaliteit</h4>
                            <p className="text-sm text-gray-600">Betaalbaar zonder in te boeten op kwaliteit</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Bewezen kwaliteit</h4>
                            <p className="text-sm text-gray-600">Jarenlange ervaring en betrouwbaarheid</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Eenvoudige montage</h4>
                            <p className="text-sm text-gray-600">Vertrouwd systeem voor snelle installatie</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Onderhoudsvrij</h4>
                            <p className="text-sm text-gray-600">Geen schilderwerk, alleen af en toe schoonmaken</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Veelzijdige toepassing</h4>
                            <p className="text-sm text-gray-600">Geschikt voor verschillende kozijntypen</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Kleurbereik</h4>
                            <p className="text-sm text-gray-600">Standaard kleuren beschikbaar</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-in" delay={100}>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Technische specificaties</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-semibold mb-3">Algemeen</h3>
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Profieldiepte</span>
                              <span className="font-medium">70 mm</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Aanzichtsbreedte min.</span>
                              <span className="font-medium">112 mm</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Kamers</span>
                              <span className="font-medium">5 kamers</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Versterking</span>
                              <span className="font-medium">Gegalvaniseerd staal</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-3">Prestaties</h3>
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Uf-waarde frame ≥</span>
                              <span className="font-medium">1,3 W/(m²·K)</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Luchtdichtheid</span>
                              <span className="font-medium">Klasse 4</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Slagregendichtheid</span>
                              <span className="font-medium">Klasse 9A</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Windbelasting</span>
                              <span className="font-medium">Klasse C4/B4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              <div className="space-y-6">
                <AnimatedSection animation="fade-in" delay={300}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Gerelateerd</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link to="/kunststof-kozijnen/profielen/living-82">
                            Schüco LivIng 82
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link to="/kunststof-kozijnen/kleuren">
                            Kleurenmodule
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link to="/kunststof-kozijnen/types">
                            Kozijntypen
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
};

export default CT70AS;
