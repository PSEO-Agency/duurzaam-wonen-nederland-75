
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
    secondaryButtonText: string;
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

  // Create service items from all products if services.serviceItems is empty or only has placeholder data
  const shouldUseAllProducts = !services?.serviceItems || services.serviceItems.length === 0 || 
    services.serviceItems.some(item => item.title.includes('placeholder') || item.description.includes('placeholder'));

  const displayServiceItems = shouldUseAllProducts ? 
    allProducts.map(product => ({
      image: product.hero_background_image || '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
      title: product.name,
      description: product.description || `Ontdek onze hoogwaardige ${product.name.toLowerCase()} oplossingen voor uw woning.`,
      features: Array.isArray(product.features) ? product.features : 
        typeof product.features === 'string' ? JSON.parse(product.features || '[]') : 
        ['Hoogwaardige kwaliteit', 'Professionele montage', 'Uitstekende service'],
      linkText: `Meer over ${product.name}`,
      linkUrl: `/${product.slug}`
    })) : safeArray(services.serviceItems);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{seo?.title || 'Service Page'}</title>
        <meta name="description" content={seo?.description || ''} />
        <link rel="canonical" href={seo?.canonicalUrl || ''} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen pt-20 flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${hero?.backgroundImage || ''}")`,
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
                    {hero?.badge || 'Service'}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {hero?.title || 'Our Service'}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                    {hero?.description || 'High-quality service for your home.'}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                      <Link to={hero?.primaryButtonLink || '/offerte'}>
                        <span>{hero?.primaryButtonText || 'Get Quote'}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {hero?.secondaryButtonLink && (
                      <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20">
                        <Link to={hero.secondaryButtonLink}>
                          {hero?.secondaryButtonText || 'Learn More'}
                        </Link>
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-6 text-white mb-8">
                    {safeArray(hero?.guarantees).map((guarantee, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="bg-brand-green/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-brand-green" />
                        </div>
                        <span>{guarantee}</span>
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
                          <span className="text-white/90">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                        <h4 className="text-sm font-medium text-white mb-3">Keurmerken:</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {safeArray(hero?.certificationLogos).map((logo, index) => (
                            <div key={index} className="bg-white rounded p-2 h-16 flex items-center justify-center" title={logo.title}>
                              <img src={logo.src} alt={logo.alt} className="h-10 max-w-full object-contain" />
                            </div>
                          ))}
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
                  <h2 className="text-3xl font-bold mb-6 text-center">{introduction.title}</h2>
                  <div className="space-y-4 text-gray-700">
                    {safeArray(introduction.content).map((paragraph, index) => (
                      <p key={index} className="text-lg">{paragraph}</p>
                    ))}
                  </div>
                  
                  {introduction.quickLinks && introduction.quickLinks.length > 0 && (
                    <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold mb-4">Ga direct naar de volgende onderwerpen:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {introduction.quickLinks.map((link, index) => (
                          <a key={index} href={link.href} className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
                            <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                            <span>{link.text}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 text-center">
                    <Button className="bg-brand-green hover:bg-brand-green-dark text-white px-6">
                      <Link to={introduction.ctaLink}>
                        <span>{introduction.ctaText}</span>
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
                    <h2 className="text-3xl font-bold mb-6">{whatAre.title}</h2>
                    {safeArray(whatAre.content).map((paragraph, index) => (
                      <p key={index} className="text-lg text-gray-700 mb-6">{paragraph}</p>
                    ))}
                    
                    <ul className="space-y-3 mb-6">
                      {safeArray(whatAre.features).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
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
                          src={whatAre.videoUrl}
                          title={whatAre.videoTitle || "Video"}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        
                        {whatAre.videoTitle && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <p className="text-white font-medium">{whatAre.videoTitle}</p>
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
        
        {/* Benefits Section */}
        {benefits && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-3xl font-bold mb-6">{benefits.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{benefits.description}</p>
                    
                    {safeArray(benefits.mainContent).map((content, index) => (
                      <p key={index} className="text-lg text-gray-700 mb-6">{content}</p>
                    ))}
                    
                    <div className="mt-4">
                      <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                        <Link to={benefits.ctaLink}>
                          <span>{benefits.ctaText}</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>
                </div>
                
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in" delay={200}>
                    <div className="grid grid-cols-2 gap-4">
                      {safeArray(benefits.stats).map((stat, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-5 shadow-sm">
                          <div className="text-3xl font-bold text-brand-green mb-2">{stat.value}</div>
                          <p className="text-gray-700">{stat.label}</p>
                        </div>
                      ))}
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
                <h2 className="text-3xl font-bold mb-6">{options.title}</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl">{options.description}</p>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {safeArray(options.categories).map((category, index) => (
                  <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                          {safeArray(category.items).map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <Link to={category.linkUrl} className="text-brand-green flex items-center hover:underline">
                            <span>{category.linkText}</span>
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
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
                              <span className="text-gray-600">{feature}</span>
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
                    <h2 className="text-3xl font-bold mb-6">{information.title}</h2>
                    
                    {information.tabs && information.tabs.length > 0 && (
                      <Tabs defaultValue={information.tabs[0]?.id} className="w-full">
                        <TabsList className="mb-6">
                          {information.tabs.map((tab) => (
                            <TabsTrigger key={tab.id} value={tab.id}>{tab.title}</TabsTrigger>
                          ))}
                        </TabsList>
                        
                        {information.tabs.map((tab) => (
                          <TabsContent key={tab.id} value={tab.id} className="space-y-4">
                            {parseContentArray(tab.content).map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </TabsContent>
                        ))}
                      </Tabs>
                    )}
                  </AnimatedSection>
                </div>
                
                <div className="lg:w-1/2">
                  <AnimatedSection className="rounded-lg overflow-hidden shadow-md" animation="fade-in" delay={200}>
                    <img 
                      src={information.image}
                      alt={information.imageAlt}
                      className="w-full h-auto"
                    />
                  </AnimatedSection>
                  
                  {information.didYouKnow && (
                    <AnimatedSection className="mt-6 bg-gray-50 p-6 rounded-lg" animation="fade-in" delay={300}>
                      <h3 className="text-xl font-semibold mb-3">{information.didYouKnow.title}</h3>
                      <ul className="space-y-3">
                        {safeArray(information.didYouKnow.facts).map((fact, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className="text-brand-green mr-2 mt-1" />
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
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
                <h2 className="text-3xl font-bold mb-4">{faq.title}</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">{faq.description}</p>
              </AnimatedSection>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {safeArray(faq.questions).map((item, index) => (
                    <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </AnimatedSection>
                  ))}
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
