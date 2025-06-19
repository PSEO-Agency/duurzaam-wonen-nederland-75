import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

const Living82: React.FC = () => {
  const galleryImages = [
    {
      src: '/lovable-uploads/a9f0e889-dd7f-4195-8461-661638f5fc21.png',
      alt: 'Schüco Living kozijnprofiel doorsnede',
      title: 'Profiel doorsnede'
    },
    {
      src: '/lovable-uploads/62501faa-0bd0-42dd-9184-060b70f05901.png',
      alt: 'Schüco Living kozijn detail',
      title: 'Kozijn detail'
    },
    {
      src: '/lovable-uploads/18b63e63-da2c-4124-b2cd-e1dfb88a1e9e.png',
      alt: 'Schüco Living kozijn montage',
      title: 'Montage detail'
    },
    {
      src: '/lovable-uploads/ffb78dec-281c-4b32-869d-c58bf5e549fe.png',
      alt: 'Schüco Living kozijn afwerking',
      title: 'Afwerking detail'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Schüco Living Kozijnprofiel | Duurzaam en Energiezuinig</title>
        <meta name="description" content="Ontdek het Schüco Living kozijnprofiel. Energiezuinig, duurzaam en verkrijgbaar in vele kleuren. Uitstekende isolatie en moderne uitstraling." />
      </Helmet>
      
      <Navbar />

      <main className="pt-20">
        <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/kunststof-kozijnen/profielen">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Terug naar profielen
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl font-bold">Schüco Living Kozijnprofiel</h1>
                    <img 
                      src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                      alt="Schüco" 
                      className="h-8 w-auto"
                    />
                  </div>
                  <p className="text-xl text-gray-600 mb-6">
                    Ramen zijn een essentieel onderdeel van uw woning en dienen niet alleen aanwezig te zijn, maar ook praktisch, stijlvol en kwalitatief te zijn. Ons Schüco Living systeem biedt hier de perfecte combinatie van.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Energielabel A</Badge>
                    <Badge variant="secondary">7 kamersysteem</Badge>
                    <Badge variant="secondary">170+ kleuren</Badge>
                    <Badge variant="secondary">120mm inbouwdiepte</Badge>
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
                    src="/lovable-uploads/a9f0e889-dd7f-4195-8461-661638f5fc21.png"
                    alt="Schüco Living kozijnprofiel doorsnede"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-2xl font-bold text-center mb-8">Productgalerij</h2>
              <div className="max-w-4xl mx-auto px-12">
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-video items-center justify-center p-6">
                              <div className="text-center">
                                <img 
                                  src={image.src} 
                                  alt={image.alt}
                                  className="w-full h-auto max-h-96 object-contain rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-medium text-gray-800">{image.title}</h3>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
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
                      <h2 className="text-2xl font-bold mb-4">Unieke kwaliteiten van Schüco Living</h2>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Optimale dichtheid</h4>
                            <p className="text-sm text-gray-600">Dankzij hoogwaardige EPDM-dichtingen optimale dichtheid gedurende de levensduur van de ramen. Uitstekende geluidsisolatie.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Gezonde luchtcirculatie</h4>
                            <p className="text-sm text-gray-600">Ontworpen om gezonde luchtcirculatie te garanderen en problemen zoals schimmel, vocht en condensatie te voorkomen.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Extra veiligheid</h4>
                            <p className="text-sm text-gray-600">Materialen met hoge weerstand en geavanceerde beveiligingsfuncties zorgen voor extra veiligheid en rust.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Milieuvriendelijk en energiezuinig</h4>
                            <p className="text-sm text-gray-600">Energielabel A draagt bij aan vermindering van energieverbruik. Gemaakt van recyclebare materialen via energie-efficiënt productieproces.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Personaliseerbaar</h4>
                            <p className="text-sm text-gray-600">Verkrijgbaar in meer dan 170 kleuren en houtstructuren die aansluiten bij uw persoonlijke stijl.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Onderhoudsarm</h4>
                            <p className="text-sm text-gray-600">Hoogwaardig PVC-materiaal dat weinig onderhoud vergt en langdurig gebruik garandeert.</p>
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
                              <span className="text-gray-600">Inbouwdiepte</span>
                              <span className="font-medium">120 mm</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Kamersysteem</span>
                              <span className="font-medium">7 kamers</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Energielabel</span>
                              <span className="font-medium">A</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Kleuren</span>
                              <span className="font-medium">170+ opties</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-3">Prestaties</h3>
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">U-waarde</span>
                              <span className="font-medium">1,1 W/(m²·K)</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Dichtingen</span>
                              <span className="font-medium">EPDM rubber</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Materiaal</span>
                              <span className="font-medium">Hoogwaardig PVC</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Onderhoud</span>
                              <span className="font-medium">Onderhoudsarm</span>
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
                          <Link to="/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel">
                            Schüco CT70 Kozijnprofiel
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

export default Living82;
