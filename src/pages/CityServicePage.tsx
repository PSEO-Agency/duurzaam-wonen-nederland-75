
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import { services } from '@/data/services';
import { cityServices } from '@/data/cityServices';
import { regions } from '@/components/kunststof-kozijnen/RegionsSection';

interface CityServicePageParams {
  citySlug: string;
  serviceSlug: string;
}

const CityServicePage: React.FC = () => {
  const { citySlug, serviceSlug } = useParams<keyof CityServicePageParams>() as CityServicePageParams;
  
  // Find the base service
  const service = services.find(s => s.slug === serviceSlug);
  
  // Find the city
  let cityName = '';
  let provinceName = '';
  
  for (const province of regions) {
    const city = province.cities.find(c => c.slug === citySlug);
    if (city) {
      cityName = city.name;
      provinceName = province.name;
      break;
    }
  }
  
  // Find any city-specific service data
  const cityService = cityServices.find(cs => cs.cityId === citySlug && cs.serviceId === serviceSlug);
  
  // Use city-specific data if available, otherwise fall back to general service data
  const title = cityService?.title || (service ? `${service.title} in ${cityName}` : '');
  const description = cityService?.description || service?.fullDescription || '';
  const features = cityService?.customFeatures || service?.features || [];
  const benefits = cityService?.customBenefits || service?.benefits || [];
  const customContent = cityService?.customContent || '';
  
  // SEO data
  const metaTitle = cityService?.metaTitle || (service && cityName ? `${service.title} in ${cityName} | Duurzaam Wonen Nederland` : '');
  const metaDescription = cityService?.metaDescription || (service ? `${service.shortDescription} Professionele installatie in ${cityName}. Neem contact op voor een vrijblijvende offerte.` : '');

  if (!service || !cityName) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl font-bold mb-6">Pagina niet gevonden</h1>
              <p className="text-lg">Deze dienst of locatie bestaat niet.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://duurzaamwonen.info/${service.slug}/${citySlug}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  {service.title} {cityName}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  {description}
                </p>
                <Button 
                  size="lg" 
                  className="bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  <span>Vrijblijvende offerte</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Local Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-right">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <MapPin className="h-4 w-4 text-brand-green" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{provinceName} > {cityName}</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-6">{service.title} oplossingen voor {cityName}</h2>
                
                <div className="prose max-w-none text-gray-700 mb-6" 
                     dangerouslySetInnerHTML={{ __html: customContent }} />
                
                {features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Kenmerken</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {features.map((feature) => (
                        <div key={feature.id} className="flex items-start">
                          <div className="bg-brand-green/10 p-2 rounded-full mt-1 mr-4">
                            <Check className="h-4 w-4 text-brand-green" />
                          </div>
                          <div>
                            <h4 className="font-medium">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
                  {service.imageUrl ? (
                    <img 
                      src={service.imageUrl}
                      alt={`${service.title} in ${cityName}`}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Afbeelding niet beschikbaar</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        {benefits.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold text-center mb-12">Voordelen voor inwoners van {cityName}</h2>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                      <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                        <Check className="h-5 w-5 text-brand-green" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CityServicePage;
