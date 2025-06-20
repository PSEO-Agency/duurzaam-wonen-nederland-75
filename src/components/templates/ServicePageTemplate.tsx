import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';
import RegionsSection from '@/components/RegionsSection';
import { useAllProducts } from '@/hooks/useAllProducts';

export interface ServicePageTemplateProps {
  // SEO Data
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
  
  // Hero Section
  hero: {
    backgroundImage: string;
    badge: string;
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    guarantees: string[];
    benefits: string[];
    certificationLogos: Array<{
      src: string;
      alt: string;
      title: string;
    }>;
  };
  
  // Introduction Section
  introduction: {
    title: string;
    content: string[];
    quickLinks: Array<{
      href: string;
      text: string;
    }>;
    ctaText: string;
    ctaLink: string;
  };
  
  // What Are Section
  whatAre: {
    title: string;
    content: string[];
    features: string[];
    videoUrl?: string;
    videoTitle?: string;
  };
  
  // Benefits Section
  benefits: {
    title: string;
    description: string;
    mainContent: string[];
    stats: Array<{
      value: string;
      label: string;
    }>;
    ctaText: string;
    ctaLink: string;
  };
  
  // Options Section (optional)
  options?: {
    title: string;
    description: string;
    categories: Array<{
      title: string;
      items: string[];
      linkText: string;
      linkUrl: string;
    }>;
  };
  
  // Services Section
  services: {
    title: string;
    description: string;
    serviceItems: Array<{
      image: string;
      title: string;
      description: string;
      features: string[];
      linkText: string;
      linkUrl: string;
    }>;
  };
  
  // Information Section (optional)
  information?: {
    title: string;
    image: string;
    imageAlt: string;
    tabs: Array<{
      id: string;
      title: string;
      content: string[];
    }>;
    didYouKnow: {
      title: string;
      facts: string[];
    };
  };
  
  // FAQ Section
  faq: {
    title: string;
    description: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  // Regions/Locations (optional)
  showRegions?: boolean;
}

// Helper function to safely parse content arrays
const parseContentArray = (content: any): string[] => {
  if (Array.isArray(content)) {
    return content;
  }
  if (typeof content === 'string') {
    try {
      const parsed = JSON.parse(content);
      return Array.isArray(parsed) ? parsed : [content];
    } catch {
      return [content];
    }
  }
  return [];
};

// Helper function to safely access array properties
const safeArray = (arr: any): any[] => {
  return Array.isArray(arr) ? arr : [];
};

// Helper function to safely render strings only
const safeString = (value: any): string => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  return '';
};

// Helper function to safely access object properties
const safeObject = (obj: any, fallback: any = {}): any => {
  return (obj && typeof obj === 'object' && !Array.isArray(obj)) ? obj : fallback;
};

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  seo,
  hero,
  introduction,
  whatAre,
  benefits,
  options,
  services,
  information,
  faq,
  showRegions = true
}) => {
  const { data: allProducts = [], isLoading: productsLoading } = useAllProducts();

  // Always use all products for the services section
  const displayServiceItems = allProducts.map(product => ({
    image: product.hero_background_image || '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
    title: safeString(product.name),
    description: safeString(product.description) || `Ontdek onze hoogwaardige ${safeString(product.name).toLowerCase()} oplossingen voor uw woning.`,
    features: Array.isArray(product.features) ? product.features.map(f => safeString(f)) : 
      typeof product.features === 'string' ? JSON.parse(product.features || '[]').map((f: any) => safeString(f)) : 
      ['Hoogwaardige kwaliteit', 'Professionele montage', 'Uitstekende service'],
    linkText: `Meer over ${safeString(product.name)}`,
    linkUrl: `/${product.slug || ''}`
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{safeString(seo?.title) || 'Service Page'}</title>
        <meta name="description" content={safeString(seo?.description) || ''} />
        <link rel="canonical" href={safeString(seo?.canonicalUrl) || ''} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen pt-20 flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${safeString(hero?.backgroundImage) || ''}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <AnimatedSection animation="fade-in-right">
                  <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                    {safeString(hero?.badge) || 'Service'}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {safeString(hero?.title) || 'Our Service'}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                    {safeString(hero?.description) || 'High-quality service for your home.'}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                      <Link to={safeString(hero?.primaryButtonLink) || '/offerte'}>
                        <span>{safeString(hero?.primaryButtonText) || 'Get Quote'}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-6 text-white mb-8">
                    {safeArray(hero?.guarantees).map((guarantee, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="bg-brand-green/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-brand-green" />
                        </div>
                        <span>{safeString(guarantee)}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:col-span-5">
                <AnimatedSection animation="fade-in-left" delay={300}>
                  <div className="glass-card p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Voordelen
                    </h3>
                    <ul className="space-y-3">
                      {safeArray(hero?.benefits).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-white/90">{safeString(benefit)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                        <h4 className="text-sm font-medium text-white mb-3">Keurmerken:</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {safeArray(hero?.certificationLogos).map((logo, index) => {
                            const logoObj = safeObject(logo);
                            return (
                              <div key={index} className="bg-white rounded p-2 h-16 flex items-center justify-center" title={safeString(logoObj.title)}>
                                <img src={safeString(logoObj.src)} alt={safeString(logoObj.alt)} className="h-10 max-w-full object-contain" />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        {introduction && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">{safeString(introduction.title)}</h2>
                  <div className="space-y-4 text-gray-700">
                    {safeArray(introduction.content).map((paragraph, index) => (
                      <p key={index} className="text-lg">{safeString(paragraph)}</p>
                    ))}
                  </div>
                  
                  {introduction.quickLinks && introduction.quickLinks.length > 0 && (
                    <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold mb-4">Ga direct naar de volgende onderwerpen:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {introduction.quickLinks.map((link, index) => {
                          const linkObj = safeObject(link);
                          return (
                            <a key={index} href={safeString(linkObj.href)} className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                              <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                              <span>{safeString(linkObj.text)}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 text-center">
                    <Button className="bg-brand-green hover:bg-brand-green-dark text-white px-6">
                      <Link to={safeString(introduction.ctaLink)}>
                        <span>{safeString(introduction.ctaText)}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}
        
        {/* What Are Section */}
        {whatAre && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-3xl font-bold mb-6">{safeString(whatAre.title)}</h2>
                    {safeArray(whatAre.content).map((paragraph, index) => (
                      <p key={index} className="text-lg text-gray-700 mb-6">{safeString(paragraph)}</p>
                    ))}
                    
                    <ul className="space-y-3 mb-6">
                      {safeArray(whatAre.features).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">{safeString(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                </div>
                
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in" delay={200}>
                    {whatAre.videoUrl ? (
                      <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-900 aspect-video">
                        <iframe 
                          className="absolute inset-0 w-full h-full"
                          src={safeString(whatAre.videoUrl)}
                          title={safeString(whatAre.videoTitle) || "Video"}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        
                        {whatAre.videoTitle && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <p className="text-white font-medium">{safeString(whatAre.videoTitle)}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                        <p className="text-gray-500">Video placeholder</p>
                      </div>
                    )}
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Benefits Section - Updated for better responsiveness */}
        {benefits && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{safeString(benefits.title)}</h2>
                    <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">{safeString(benefits.description)}</p>
                    
                    <div className="space-y-3 md:space-y-4 mb-6">
                      {safeArray(benefits.mainContent).map((content, index) => (
                        <p key={index} className="text-base md:text-lg text-gray-700">{safeString(content)}</p>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Button className="bg-brand-green hover:bg-brand-green-dark text-white w-full sm:w-auto">
                        <Link to={safeString(benefits.ctaLink)}>
                          <span>{safeString(benefits.ctaText)}</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>
                </div>
                
                <div className="order-1 lg:order-2">
                  <AnimatedSection animation="fade-in" delay={200}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {safeArray(benefits.stats).map((stat, index) => {
                        const statObj = safeObject(stat);
                        return (
                          <div key={index} className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm text-center">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-2">{safeString(statObj.value)}</div>
                            <p className="text-sm md:text-base text-gray-700 leading-tight">{safeString(statObj.label)}</p>
                          </div>
                        );
                      })}
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Options Section - Only render if options prop is provided */}
        {options && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-6">{safeString(options.title)}</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl">{safeString(options.description)}</p>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {safeArray(options.categories).map((category, index) => {
                  const categoryObj = safeObject(category);
                  return (
                    <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4">{safeString(categoryObj.title)}</h3>
                          <ul className="space-y-2">
                            {safeArray(categoryObj.items).map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                                <span>{safeString(item)}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        
        {/* Services Section - Now displays all products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-6">Onze oplossingen</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl">Ontdek ons complete aanbod van hoogwaardige bouwoplossingen voor uw woning.</p>
            </AnimatedSection>
            
            {productsLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Oplossingen laden...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {displayServiceItems.map((service, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl group">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                      <div className="p-6 flex-grow">
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {safeArray(service.features).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{safeString(feature)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 pt-0 mt-auto">
                        <Button variant="ghost" asChild className="text-brand-green hover:text-brand-green-dark hover:bg-brand-green/10 -ml-3">
                          <Link to={service.linkUrl}>
                            {service.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Projects Section */}
        <Projects />
        
        {/* Information Section - Only render if information prop is provided */}
        {information && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-3xl font-bold mb-6">{safeString(information.title)}</h2>
                    
                    {information.tabs && information.tabs.length > 0 && (
                      <Tabs defaultValue={information.tabs[0]?.id} className="w-full">
                        <TabsList className="mb-6">
                          {information.tabs.map((tab) => {
                            const tabObj = safeObject(tab);
                            return (
                              <TabsTrigger key={safeString(tabObj.id)} value={safeString(tabObj.id)}>
                                {safeString(tabObj.title)}
                              </TabsTrigger>
                            );
                          })}
                        </TabsList>
                        
                        {information.tabs.map((tab) => {
                          const tabObj = safeObject(tab);
                          return (
                            <TabsContent key={safeString(tabObj.id)} value={safeString(tabObj.id)} className="space-y-4">
                              {parseContentArray(tabObj.content).map((paragraph, index) => (
                                <p key={index}>{safeString(paragraph)}</p>
                              ))}
                            </TabsContent>
                          );
                        })}
                      </Tabs>
                    )}
                  </AnimatedSection>
                </div>
                
                <div className="lg:w-1/2">
                  <AnimatedSection className="rounded-lg overflow-hidden shadow-md" animation="fade-in" delay={200}>
                    <img 
                      src={safeString(information.image)}
                      alt={safeString(information.imageAlt)}
                      className="w-full h-auto"
                    />
                  </AnimatedSection>
                  
                  {information.didYouKnow && (
                    <AnimatedSection className="mt-6 bg-gray-50 p-6 rounded-lg" animation="fade-in" delay={300}>
                      {(() => {
                        const didYouKnowObj = safeObject(information.didYouKnow, { title: '', facts: [] });
                        return (
                          <>
                            <h3 className="text-xl font-semibold mb-3">{safeString(didYouKnowObj.title)}</h3>
                            <ul className="space-y-3">
                              {safeArray(didYouKnowObj.facts).map((fact, index) => (
                                <li key={index} className="flex items-start">
                                  <Check size={18} className="text-brand-green mr-2 mt-1" />
                                  <span>{safeString(fact)}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        );
                      })()}
                    </AnimatedSection>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* FAQ Section */}
        {faq && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-10" animation="fade-in">
                <h2 className="text-3xl font-bold mb-4">{safeString(faq.title)}</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">{safeString(faq.description)}</p>
              </AnimatedSection>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {safeArray(faq.questions).map((item, index) => {
                    const questionObj = safeObject(item);
                    return (
                      <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                        <AccordionItem value={`item-${index}`}>
                          <AccordionTrigger className="text-lg font-semibold">
                            {safeString(questionObj.question)}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-700">{safeString(questionObj.answer)}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </AnimatedSection>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </section>
        )}
        
        {/* Workflow Section */}
        <Workflow />
        
        {/* Reviews Section */}
        <Reviews />
        
        {/* Regions Section (conditional) */}
        {showRegions && <RegionsSection />}
        
        {/* Contact CTA Section */}
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicePageTemplate;
