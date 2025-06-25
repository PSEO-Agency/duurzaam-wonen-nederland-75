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

const CT70AS: React.FC = () => {
  const galleryImages = [
    {
      src: '/lovable-uploads/a9f0e889-dd7f-4195-8461-661638f5fc21.png',
      alt: 'Schüco CT70 kozijnprofiel doorsnede',
      title: 'Profiel doorsnede'
    },
    {
      src: '/lovable-uploads/62501faa-0bd0-42dd-9184-060b70f05901.png',
      alt: 'Schüco CT70 kozijn detail',
      title: 'Kozijn detail'
    },
    {
      src: '/lovable-uploads/18b63e63-da2c-4124-b2cd-e1dfb88a1e9e.png',
      alt: 'Schüco CT70 kozijn montage',
      title: 'Montage detail'
    },
    {
      src: '/lovable-uploads/ffb78dec-281c-4b32-869d-c58bf5e549fe.png',
      alt: 'Schüco CT70 kozijn afwerking',
      title: 'Afwerking detail'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Schüco CT70 Kozijnprofiel | Duurzaam en Energiezuinig</title>
        <meta name="description" content="Ontdek het Schüco CT70 kozijnprofiel. Perfecte balans tussen duurzaamheid, energie-efficiëntie en design. 5-kamersysteem met 70mm inbouwdiepte." />
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
                    <h1 className="text-4xl font-bold">Schüco CT70 Kozijnprofiel</h1>
                    <img 
                      src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                      alt="Schüco" 
                      className="h-8 w-auto"
                    />
                  </div>
                  <p className="text-xl text-gray-600 mb-6">
                    Het kiezen van het juiste raamsysteem is essentieel voor het comfort, de veiligheid en de esthetiek van uw woning. Het Schüco CT70 systeem biedt een perfecte balans tussen duurzaamheid, energie-efficiëntie en design.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">5-kamersysteem</Badge>
                    <Badge variant="secondary">70mm inbouwdiepte</Badge>
                    <Badge variant="secondary">Uitstekende isolatie</Badge>
                    <Badge variant="secondary">Slanke profielen</Badge>
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
                    alt="Schüco CT70 kozijnprofiel doorsnede"
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
                      <h2 className="text-2xl font-bold mb-4">Uitstekende thermische isolatie</h2>
                      <p className="text-gray-700 mb-4">
                        Het Schüco CT70 raamsysteem is gebaseerd op een geavanceerde 5-kamertechnologie met een inbouwdiepte van 70 mm. Deze constructie zorgt voor uitstekende thermische isolatie, waardoor warmteverlies wordt geminimaliseerd en uw woning energie-efficiënter wordt. Dit leidt tot lagere stookkosten en een comfortabel binnenklimaat, ongeacht het seizoen.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-in" delay={50}>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Voordelen van Schüco CT70</h2>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Veelzijdig design & esthetiek</h4>
                            <p className="text-sm text-gray-600">Het systeem biedt diverse ontwerpopties met verschillende vleugelprofielen zoals Classic, Rondo en Cava, plus een breed scala aan kleuren en afwerkingen.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Optimale lichtinval</h4>
                            <p className="text-sm text-gray-600">Dankzij de smalle aanzichtbreedten profiteert u van maximale lichtinval en een moderne uitstraling.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Duurzaamheid & milieuvriendelijkheid</h4>
                            <p className="text-sm text-gray-600">Hoogwaardige materialen bestand tegen diverse weersomstandigheden, recyclebaar en minimaal onderhoud.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Verbeterde geluidsisolatie</h4>
                            <p className="text-sm text-gray-600">Uitstekende geluidsisolerende eigenschappen voor een serene en comfortabele woonomgeving.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-2">Eenvoudig onderhoud</h4>
                            <p className="text-sm text-gray-600">Gladde, weerbestendige oppervlakken die eenvoudig schoon te maken zijn en hun uitstraling behouden.</p>
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
                              <span className="font-medium">70 mm</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Kamersysteem</span>
                              <span className="font-medium">5 kamers</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Materiaal</span>
                              <span className="font-medium">Hoogwaardig PVC</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Recyclebaar</span>
                              <span className="font-medium">Ja</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-3">Prestaties</h3>
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Thermische isolatie</span>
                              <span className="font-medium">Uitstekend</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Geluidsisolatie</span>
                              <span className="font-medium">Verbeterd</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Onderhoud</span>
                              <span className="font-medium">Eenvoudig</span>
                            </div>
                            <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                              <span className="text-gray-600">Lichtinval</span>
                              <span className="font-medium">Optimaal</span>
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
                          <Link to="/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel">
                            Schüco Living Kozijnprofiel
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
