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
import { ServicePageTemplateProps } from './ServicePageTemplate';

// Helper functions - keeping the same safe helper functions from ServicePageTemplate
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

const safeArray = (arr: any): any[] => {
  return Array.isArray(arr) ? arr : [];
};

const safeString = (value: any): string => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  return '';
};

const safeObject = (obj: any, fallback: any = {}): any => {
  return (obj && typeof obj === 'object' && !Array.isArray(obj)) ? obj : fallback;
};

const MobileOptimizedServicePage: React.FC<ServicePageTemplateProps> = ({
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
      
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Mobile-Optimized Hero Section */}
        <section 
          className="relative min-h-[70vh] sm:min-h-screen pt-8 sm:pt-20 flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${safeString(hero?.backgroundImage) || ''}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <AnimatedSection animation="fade-in-right">
                  <span className="inline-block px-3 py-1 sm:px-4 bg-brand-green/90 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {safeString(hero?.badge) || 'Service'}
                  </span>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {safeString(hero?.title) || 'Our Service'}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                    {safeString(hero?.description) || 'High-quality service for your home.'}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white w-full sm:w-auto text-sm sm:text-base px-2 sm:px-6 py-3 sm:py-3 min-h-[48px] sm:min-h-[44px]">
                      <Link to={safeString(hero?.primaryButtonLink) || '/offerte'} className="flex items-center justify-center gap-1 sm:gap-2">
                        <span className="text-center leading-snug text-xs sm:text-sm md:text-base hyphens-auto break-words">{safeString(hero?.primaryButtonText) || 'Get Quote'}</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-white mb-6 sm:mb-8">
                    {safeArray(hero?.guarantees).map((guarantee, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="bg-brand-green/20 p-1 rounded-full">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-brand-green" />
                        </div>
                        <span className="text-sm sm:text-base">{safeString(guarantee)}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:col-span-5 mt-4 lg:mt-0">
                <AnimatedSection animation="fade-in-left" delay={300}>
                  <div className="glass-card p-4 sm:p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                      Voordelen
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {safeArray(hero?.benefits).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className="bg-brand-green p-0.5 sm:p-1 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                            <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                          </div>
                          <span className="text-white/90 text-sm sm:text-base leading-relaxed">{safeString(benefit)}</span>
                        </li>
                      ))}
                    </ul>
                    {safeArray(hero?.certificationLogos).length > 0 && (
                      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
                        <div className="bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                          <h4 className="text-xs sm:text-sm font-medium text-white mb-2 sm:mb-3">Keurmerken:</h4>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {safeArray(hero?.certificationLogos).map((logo, index) => {
                              const logoObj = safeObject(logo);
                              return (
                                <div key={index} className="bg-white rounded p-1 sm:p-2 h-10 sm:h-12 flex items-center justify-center" title={safeString(logoObj.title)}>
                                  <img src={safeString(logoObj.src)} alt={safeString(logoObj.alt)} className="h-6 sm:h-8 max-w-full object-contain" />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mobile-Optimized Introduction Section */}
        {introduction && (
          <section className="py-8 sm:py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">{safeString(introduction.title)}</h2>
                  <div className="space-y-3 sm:space-y-4 text-gray-700">
                    {safeArray(introduction.content).map((paragraph, index) => (
                      <p key={index} className="text-base sm:text-lg leading-relaxed">{safeString(paragraph)}</p>
                    ))}
                  </div>
                  
                  {introduction.quickLinks && introduction.quickLinks.length > 0 && (
                    <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Ga direct naar de volgende onderwerpen:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                        {introduction.quickLinks.map((link, index) => {
                          const linkObj = safeObject(link);
                          return (
                            <a key={index} href={safeString(linkObj.href)} className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors text-sm sm:text-base">
                              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-brand-green mr-2 flex-shrink-0" />
                              <span className="truncate">{safeString(linkObj.text)}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6 sm:mt-8 text-center">
                    <Button className="bg-brand-green hover:bg-brand-green-dark text-white px-2 sm:px-6 w-full sm:w-auto text-sm sm:text-base py-3 min-h-[48px] sm:min-h-[44px]">
                      <Link to={safeString(introduction.ctaLink)} className="flex items-center justify-center gap-1 sm:gap-2">
                        <span className="text-center leading-snug text-xs sm:text-sm md:text-base hyphens-auto break-words">{safeString(introduction.ctaText)}</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}
        
        {/* Keep existing sections but with mobile improvements */}
        {whatAre && (
          <section className="py-8 sm:py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{safeString(whatAre.title)}</h2>
                    {safeArray(whatAre.content).map((paragraph, index) => (
                      <p key={index} className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">{safeString(paragraph)}</p>
                    ))}
        
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {safeArray(whatAre.features).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-brand-green mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{safeString(feature)}</span>
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
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                            <p className="text-white font-medium text-sm sm:text-base">{safeString(whatAre.videoTitle)}</p>
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
        
        {benefits && (
          <section className="py-8 sm:py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{safeString(benefits.title)}</h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">{safeString(benefits.description)}</p>
        
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {safeArray(benefits.mainContent).map((content, index) => (
                        <p key={index} className="text-base sm:text-lg text-gray-700 leading-relaxed">{safeString(content)}</p>
                      ))}
                    </div>
        
                    <div className="mt-4 sm:mt-6">
                      <Button className="bg-brand-green hover:bg-brand-green-dark text-white w-full sm:w-auto text-sm sm:text-base px-2 sm:px-6 py-3 min-h-[48px] sm:min-h-[44px]">
                        <Link to={safeString(benefits.ctaLink)} className="flex items-center justify-center gap-1 sm:gap-2">
                          <span className="text-center leading-snug text-xs sm:text-sm md:text-base hyphens-auto break-words">{safeString(benefits.ctaText)}</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>
                </div>
        
                <div className="order-1 lg:order-2">
                  <AnimatedSection animation="fade-in" delay={200}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {safeArray(benefits.stats).map((stat, index) => {
                        const statObj = safeObject(stat);
                        return (
                          <div key={index} className="bg-gray-50 rounded-lg p-3 sm:p-4 shadow-sm text-center">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-green mb-1 sm:mb-2">{safeString(statObj.value)}</div>
                            <p className="text-sm sm:text-base text-gray-700 leading-tight">{safeString(statObj.label)}</p>
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
        
        {options && (
          <section className="py-8 sm:py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{safeString(options.title)}</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl leading-relaxed">{safeString(options.description)}</p>
              </AnimatedSection>
        
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {safeArray(options.categories).map((category, index) => {
                  const categoryObj = safeObject(category);
                  return (
                    <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-3 sm:p-4">
                          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{safeString(categoryObj.title)}</h3>
                          <ul className="space-y-1 sm:space-y-2">
                            {safeArray(categoryObj.items).map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-brand-green mr-2"></div>
                                <span className="text-sm sm:text-base">{safeString(item)}</span>
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
        
        {/* Mobile-Optimized Services Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Onze oplossingen</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl">Ontdek ons complete aanbod van hoogwaardige bouwoplossingen voor uw woning.</p>
            </AnimatedSection>
            
            {productsLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Oplossingen laden...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
                {displayServiceItems.map((service, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl group">
                      <div className="relative h-48 sm:h-64 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 text-lg sm:text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                      <div className="p-4 sm:p-6 flex-grow">
                        <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{service.description}</p>
                        <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                          {safeArray(service.features).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm sm:text-base">{safeString(feature)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 sm:p-6 pt-0 mt-auto">
                        <Button variant="ghost" asChild className="text-brand-green hover:text-brand-green-dark hover:bg-brand-green/10 text-xs sm:text-sm md:text-base w-full justify-start p-2 min-h-[44px] sm:min-h-[40px]">
                          <Link to={service.linkUrl} className="flex items-start gap-1 sm:gap-2">
                            <span className="break-words text-left leading-snug flex-1 hyphens-auto">{service.linkText}</span>
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 mt-0.5" />
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
        
        {/* Keep existing sections */}
        <Projects />
        <Workflow />
        <Reviews />
        {showRegions && <RegionsSection />}
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MobileOptimizedServicePage;
