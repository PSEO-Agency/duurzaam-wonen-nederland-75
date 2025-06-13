
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCityServiceNew, useCity, useService, useRegion } from '@/hooks/useLocations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, CheckIcon, ArrowRight, PhoneCall, ArrowLeft } from 'lucide-react';

// Type guards for JSON data
const isArray = (value: any): value is any[] => Array.isArray(value);

interface Benefit {
  id: string;
  text: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
}

// Type guards for validating benefit and feature objects
const isBenefit = (item: any): item is Benefit => {
  return typeof item === 'object' && 
         item !== null && 
         typeof item.id === 'string' && 
         typeof item.text === 'string';
};

const isFeature = (item: any): item is Feature => {
  return typeof item === 'object' && 
         item !== null && 
         typeof item.id === 'string' && 
         typeof item.title === 'string' && 
         typeof item.description === 'string';
};

// Helper functions to safely parse JSON arrays
const parseBenefits = (value: any): Benefit[] => {
  if (!isArray(value)) return [];
  return value.filter(isBenefit);
};

const parseFeatures = (value: any): Feature[] => {
  if (!isArray(value)) return [];
  return value.filter(isFeature);
};

const CityServicePageNew: React.FC = () => {
  const { citySlug, serviceSlug, regionSlug } = useParams<{ 
    citySlug: string; 
    serviceSlug: string; 
    regionSlug: string;
  }>();
  
  const { data: cityService, isLoading, error } = useCityServiceNew(citySlug || '', serviceSlug || '');
  
  // Fallbacks in case direct city service query fails
  const { data: city } = useCity(citySlug || '');
  const { data: service } = useService(serviceSlug || '');
  const { data: region } = useRegion(regionSlug || '');
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <div className="animate-pulse h-8 bg-gray-200 w-80 mx-auto mb-4 rounded"></div>
              <div className="animate-pulse h-4 bg-gray-200 w-1/2 mx-auto mb-8 rounded"></div>
              <div className="animate-pulse h-64 bg-gray-100 w-full rounded-lg"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (error || !cityService) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Service niet gevonden</h1>
              <p className="text-lg text-gray-600 mb-8">
                We konden de opgevraagde service voor deze locatie niet vinden.
              </p>
              <div className="flex gap-4 justify-center">
                {region && service && (
                  <Button asChild variant="outline">
                    <Link to={`/${serviceSlug}/${regionSlug}`}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Terug naar {region.name}
                    </Link>
                  </Button>
                )}
                <Button asChild>
                  <Link to="/werkgebied">Bekijk alle locaties</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const serviceData = cityService.services;
  const cityData = cityService.cities;
  
  const title = cityService.custom_title || `${serviceData.name} in ${cityData.name}`;
  const description = cityService.custom_description || 
    `Hoogwaardige ${serviceData.name} in ${cityData.name} en omgeving. Professionele installatie met garantie.`;
  
  const metaTitle = cityService.custom_meta_title || 
    `${serviceData.name} in ${cityData.name} | Duurzaam Wonen Nederland`;
  const metaDescription = cityService.custom_meta_description || 
    `Specialistische ${serviceData.name} in ${cityData.name} op maat. Vraag nu een vrijblijvende offerte aan.`;
  
  // Safely parse benefits and features with proper type validation
  const benefits: Benefit[] = parseBenefits(cityService.benefits);
  const features: Feature[] = parseFeatures(cityService.features);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://duurzaamwonen.info/${serviceSlug}/${regionSlug}/${citySlug}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-brand-green">Home</Link>
              <span>/</span>
              <Link to={`/${serviceSlug}`} className="hover:text-brand-green">{serviceData.name}</Link>
              <span>/</span>
              {region && (
                <>
                  <Link to={`/${serviceSlug}/${regionSlug}`} className="hover:text-brand-green">{region.name}</Link>
                  <span>/</span>
                </>
              )}
              <span className="text-gray-900">{cityData.name}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium">
                    {cityData.name}
                  </span>
                  {region && (
                    <span className="inline-block px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                      {region.name}
                    </span>
                  )}
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

        {/* Main Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <AnimatedSection animation="fade-in-right">
                  <h2 className="text-3xl font-bold mb-6">{serviceData.name} in {cityData.name}</h2>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 mb-6">
                      {cityService.custom_description || 
                       `Duurzaam Wonen Nederland is uw specialist voor ${serviceData.name.toLowerCase()} in ${cityData.name} en omgeving. 
                        Met jarenlange ervaring en vakmanschap bieden wij hoogwaardige oplossingen die perfect passen bij uw woning.`}
                    </p>
                    
                    {/* Default content if no custom description */}
                    {!cityService.custom_description && (
                      <>
                        <p className="mb-4">
                          Wij begrijpen dat elke woning in {cityData.name} uniek is. Daarom bieden wij maatwerk 
                          oplossingen die perfect aansluiten bij uw specifieke wensen en de architecturale stijl 
                          van uw huis. Onze producten combineren kwaliteit, duurzaamheid en een stijlvol design.
                        </p>
                        <p className="mb-4">
                          Als inwoner van {cityData.name} kunt u rekenen op onze lokale expertise en kennis 
                          van de regionale bouwstijlen. Onze installatieteams werken snel, schoon en met oog 
                          voor detail om zo min mogelijk overlast te veroorzaken tijdens de werkzaamheden.
                        </p>
                      </>
                    )}
                  </div>
                  
                  {/* Benefits Section */}
                  {benefits.length > 0 && (
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-4">Voordelen</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {benefits.map((benefit) => (
                          <div key={benefit.id} className="flex items-start">
                            <div className="mt-1 bg-brand-green/10 p-1 rounded-full">
                              <CheckIcon className="h-4 w-4 text-brand-green" />
                            </div>
                            <p className="ml-2 text-gray-700">{benefit.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Features Section */}
                  {features.length > 0 && (
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-4">Kenmerken</h3>
                      <div className="space-y-6">
                        {features.map((feature) => (
                          <div key={feature.id} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                            <p className="text-gray-700">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Pricing Section */}
                  {cityService.pricing_info && (
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-4">Prijsinformatie</h3>
                      <Card>
                        <CardContent className="p-6">
                          <p className="text-gray-700">{cityService.pricing_info}</p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </AnimatedSection>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <AnimatedSection animation="fade-in-left" delay={200}>
                  <div className="sticky top-24 space-y-6">
                    {/* Navigation Card */}
                    {region && (
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4">Navigatie</h3>
                          <div className="space-y-3">
                            <Button variant="outline" className="w-full justify-start" asChild>
                              <Link to={`/${serviceSlug}/${regionSlug}`}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Terug naar {region.name}
                              </Link>
                            </Button>
                            <Button variant="outline" className="w-full justify-start" asChild>
                              <Link to={`/${serviceSlug}`}>
                                Alle {serviceData.name}
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                    
                    {/* Location Info Card */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Werkgebied {cityData.name}</h3>
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="h-5 w-5 text-brand-green" />
                          <span>{cityData.name} en omgeving</span>
                        </div>
                        <p className="text-gray-700 mb-6">
                          Wij zijn actief in heel {cityData.name} en de omliggende gebieden. 
                          Onze monteurs komen graag bij u langs voor een vrijblijvend adviesgesprek.
                        </p>
                        <Button className="w-full" asChild>
                          <Link to="/offerte">
                            <span>Plan een afspraak</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                    
                    {/* Contact Card */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Direct contact</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <PhoneCall className="h-5 w-5 text-brand-green" />
                            <span className="font-medium">053 303 0213</span>
                          </div>
                          <p className="text-gray-700">
                            Heeft u vragen over {serviceData.name.toLowerCase()} in {cityData.name}? 
                            Neem direct contact met ons op voor meer informatie of een vrijblijvende offerte.
                          </p>
                          <Button variant="outline" className="w-full" asChild>
                            <a href="tel:0533030213">
                              <PhoneCall className="mr-2 h-4 w-4" />
                              <span>Bel ons nu</span>
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              </div>
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

export default CityServicePageNew;
