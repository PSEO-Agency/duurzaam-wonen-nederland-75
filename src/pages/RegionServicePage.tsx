
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useRegion, useCitiesByRegion, useService } from '@/hooks/useLocations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, PhoneCall } from 'lucide-react';

const RegionServicePage: React.FC = () => {
  const { regionSlug, serviceSlug } = useParams<{ regionSlug: string; serviceSlug: string }>();
  
  const { data: region, isLoading: isLoadingRegion } = useRegion(regionSlug || '');
  const { data: service, isLoading: isLoadingService } = useService(serviceSlug || '');
  const { data: cities, isLoading: isLoadingCities } = useCitiesByRegion(region?.id || '');
  
  const isLoading = isLoadingRegion || isLoadingService || isLoadingCities;
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <div className="animate-pulse h-8 bg-gray-200 w-80 mx-auto mb-4 rounded"></div>
              <div className="animate-pulse h-4 bg-gray-200 w-1/2 mx-auto mb-8 rounded"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="animate-pulse h-32 bg-gray-100 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!region || !service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Pagina niet gevonden</h1>
              <p className="text-lg text-gray-600 mb-8">
                De opgevraagde service of regio kon niet worden gevonden.
              </p>
              <Button asChild>
                <Link to="/werkgebied">Bekijk alle locaties</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const title = `${service.name} in ${region.name}`;
  const description = `Ontdek alle steden in ${region.name} waar wij ${service.name.toLowerCase()} leveren en installeren. Professionele service met garantie.`;
  
  const metaTitle = `${service.name} in ${region.name} | Duurzaam Wonen Nederland`;
  const metaDescription = `${service.name} in ${region.name}. Bekijk alle steden waar wij actief zijn en vraag een vrijblijvende offerte aan.`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://duurzaamwonen.info/${serviceSlug}/${regionSlug}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium">
                    {region.name}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-brand-green hover:bg-brand-green-dark text-white"
                    asChild
                  >
                    <Link to="/offerte">
                      <span>Gratis offerte</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-brand-green border-brand-green hover:bg-brand-green/10"
                    asChild
                  >
                    <a href="tel:0533030213">
                      <PhoneCall className="mr-2 h-4 w-4" />
                      <span>Bel 053 303 0213</span>
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Steden in {region.name}
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Wij zijn actief in alle onderstaande steden in {region.name}. 
                  Klik op uw stad voor meer informatie over onze {service.name.toLowerCase()} in uw gebied.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities?.map((city) => (
                <AnimatedSection key={city.id} animation="fade-in">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-brand-green/10 p-2 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                          <MapPin className="h-5 w-5 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-semibold">{city.name}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {service.name} in {city.name} en omgeving. 
                        Professionele installatie met garantie en vakkundige service.
                      </p>
                      
                      <Button 
                        className="w-full group-hover:bg-brand-green-dark transition-colors"
                        asChild
                      >
                        <Link to={`/${serviceSlug}/${regionSlug}/${city.slug}`}>
                          <span>Bekijk {city.name}</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {(!cities || cities.length === 0) && (
              <AnimatedSection animation="fade-in">
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Geen steden gevonden
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Er zijn nog geen steden toegevoegd voor deze regio.
                  </p>
                  <Button asChild>
                    <Link to="/contact">Neem contact op</Link>
                  </Button>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RegionServicePage;
