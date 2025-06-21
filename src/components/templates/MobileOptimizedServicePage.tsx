
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Filter, ArrowRight, ArrowDown, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import RegionsSection from '@/components/RegionsSection';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';

export interface ServicePageTemplateProps {
  seo: {
    title: string;
    description: string;
    canonicalUrl?: string;
  };
  
  hero: {
    backgroundImage?: string;
    badge?: string;
    title: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    guarantees?: string[];
    benefits?: string[];
    certificationLogos?: Array<{
      src: string;
      alt: string;
    }>;
  };
  
  introduction?: {
    title: string;
    content: string[];
    quickLinks?: Array<{
      label: string;
      href: string;
    }>;
    ctaText?: string;
    ctaLink?: string;
  };
  
  whatAre?: {
    title: string;
    content: string[];
    features?: string[];
    videoUrl?: string;
    videoTitle?: string;
  };
  
  benefits?: {
    title: string;
    description?: string;
    mainContent: string[];
    stats?: Array<{
      value: string;
      label: string;
    }>;
    ctaText?: string;
    ctaLink?: string;
  };
  
  options?: {
    title: string;
    description?: string;
    categories: Array<{
      title: string;
      items: string[];
    }>;
  };
  
  services?: {
    title: string;
    description?: string;
    serviceItems: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  
  information?: {
    title: string;
    image: string;
    imageAlt: string;
    tabs: Array<{
      id: string;
      label: string;
      content: string[];
    }>;
    didYouKnow: {
      title: string;
      facts: string[];
    };
  };
  
  faq: {
    title: string;
    description?: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  showRegions?: boolean;
}

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
  // Helper function to render buttons with proper link handling
  const renderButton = (text: string, link: string, variant: 'primary' | 'secondary' = 'primary') => {
    const buttonClass = variant === 'primary' 
      ? "bg-brand-green hover:bg-brand-green-dark text-white px-6"
      : "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-6";

    // Check if it's an external link (starts with http/https) or Facebook mobile link
    if (link?.startsWith('http') || link?.startsWith('https://m.facebook.com')) {
      return (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center ${buttonClass}`}
        >
          <span>{text}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      );
    }

    // Internal link
    return (
      <Button asChild className={buttonClass}>
        <Link to={link || '/offerte'}>
          <span>{text}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>  
      </Button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: hero.backgroundImage ? `url(${hero.backgroundImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <AnimatedSection animation="fade-in">
                {hero.badge && (
                  <div className="inline-block bg-brand-green text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {hero.badge}
                  </div>
                )}
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{hero.title}</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">{hero.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  {hero.primaryButtonText && hero.primaryButtonLink && 
                    renderButton(hero.primaryButtonText, hero.primaryButtonLink, 'primary')
                  }
                  {hero.secondaryButtonText && hero.secondaryButtonLink && 
                    renderButton(hero.secondaryButtonText, hero.secondaryButtonLink, 'secondary')
                  }
                </div>
                
                {hero.guarantees && hero.guarantees.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    {hero.guarantees.map((guarantee, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-brand-green" />
                        <span>{guarantee}</span>
                      </div>
                    ))}
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        {hero.benefits && hero.benefits.length > 0 && (
          <section className="py-6 bg-brand-green text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-6 text-center">
                {hero.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Introduction Section */}
        {introduction && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">{introduction.title}</h2>
                  <div className="space-y-4 text-gray-700">
                    {introduction.content.map((paragraph, index) => (
                      <p key={index} className="text-lg">{paragraph}</p>
                    ))}
                  </div>
                  
                  {introduction.quickLinks && introduction.quickLinks.length > 0 && (
                    <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold mb-4">Ga direct naar:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {introduction.quickLinks.map((link, index) => (
                          <a 
                            key={index}
                            href={link.href} 
                            className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-brand-green mr-2" />
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {introduction.ctaText && introduction.ctaLink && (
                    <div className="mt-8 text-center">
                      {renderButton(introduction.ctaText, introduction.ctaLink)}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* What Are Section */}
        {whatAre && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-3xl font-bold mb-6">{whatAre.title}</h2>
                    <div className="space-y-4 text-gray-700">
                      {whatAre.content.map((paragraph, index) => (
                        <p key={index} className="text-lg">{paragraph}</p>
                      ))}
                    </div>
                    
                    {whatAre.features && whatAre.features.length > 0 && (
                      <ul className="space-y-3 mt-6">
                        {whatAre.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </AnimatedSection>
                </div>
                
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in" delay={200}>
                    {whatAre.videoUrl ? (
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          src={whatAre.videoUrl}
                          title={whatAre.videoTitle || whatAre.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Video placeholder</span>
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
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-3xl font-bold mb-6">{benefits.title}</h2>
                    {benefits.description && (
                      <p className="text-lg text-gray-700 mb-6">{benefits.description}</p>
                    )}
                    
                    <div className="space-y-4 text-gray-700 mb-6">
                      {benefits.mainContent.map((paragraph, index) => (
                        <p key={index} className="text-lg">{paragraph}</p>
                      ))}
                    </div>
                    
                    {benefits.ctaText && benefits.ctaLink && (
                      <div className="mt-4">
                        {renderButton(benefits.ctaText, benefits.ctaLink)}
                      </div>
                    )}
                  </AnimatedSection>
                </div>
                
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in" delay={200}>
                    {benefits.stats && benefits.stats.length > 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {benefits.stats.map((stat, index) => (
                          <div key={index} className="bg-white rounded-lg p-5 shadow-sm text-center">
                            <div className="text-3xl font-bold text-brand-green mb-2">{stat.value}</div>
                            <p className="text-gray-700">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Options Section */}
        {options && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-6 text-center">{options.title}</h2>
                {options.description && (
                  <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                    {options.description}
                  </p>
                )}
              </AnimatedSection>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {options.categories.map((category, index) => (
                  <AnimatedSection key={index} animation="fade-in" delay={100 * (index + 1)}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-brand-green mr-2"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {services && (
          <Services />
        )}
        
        {/* Projects Section */}
        <Projects />
        
        {/* Information Section */}
        {information && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <AnimatedSection animation="fade-in">
                    <h2 className="text-3xl font-bold mb-6">{information.title}</h2>
                    
                    {information.tabs && information.tabs.length > 0 && (
                      <Tabs defaultValue={information.tabs[0]?.id} className="w-full">
                        <TabsList className="mb-6">
                          {information.tabs.map((tab) => (
                            <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
                          ))}
                        </TabsList>
                        
                        {information.tabs.map((tab) => (
                          <TabsContent key={tab.id} value={tab.id} className="space-y-4">
                            {tab.content.map((paragraph, index) => (
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
                  
                  {information.didYouKnow && information.didYouKnow.facts.length > 0 && (
                    <AnimatedSection className="mt-6 bg-gray-50 p-6 rounded-lg" animation="fade-in" delay={300}>
                      <h3 className="text-xl font-semibold mb-3">{information.didYouKnow.title}</h3>
                      <ul className="space-y-3">
                        {information.didYouKnow.facts.map((fact, index) => (
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
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-10" animation="fade-in">
              <h2 className="text-3xl font-bold mb-4">{faq.title}</h2>
              {faq.description && (
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">{faq.description}</p>
              )}
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faq.questions.map((item, index) => (
                  <AnimatedSection key={index} animation="fade-in" delay={100 * (index + 1)}>
                    <AccordionItem value={`item-${index}`}>
                      <Acc ordionTrigger className="text-lg font-semibold">
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
