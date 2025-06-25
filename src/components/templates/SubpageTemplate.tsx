
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import ContactCTA from '@/components/ContactCTA';
import SEOHead from '@/components/SEOHead';
import { useIsMobile } from '@/hooks/use-mobile';

interface RelatedItem {
  title: string;
  slug: string;
  excerpt?: string;
}

interface SubpageTemplateProps {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  heroTitle: string;
  heroDescription: string;
  mainImageUrl?: string;
  mainContent: React.ReactNode;
  benefits?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  relatedItems?: RelatedItem[];
  relatedItemsTitle?: string;
  relatedItemsType?: string;
  breadcrumbTitle?: string;
  showContactCTA?: boolean;
  pageType?: string;
  pageSlug?: string;
  pageId?: string;
  keywords?: string[];
}

const SubpageTemplate: React.FC<SubpageTemplateProps> = ({
  title,
  metaDescription,
  canonicalUrl,
  heroTitle,
  heroDescription,
  mainImageUrl,
  mainContent,
  benefits = [],
  faqs = [],
  relatedItems = [],
  relatedItemsTitle = "Gerelateerde artikelen",
  relatedItemsType = "kozijnen",
  breadcrumbTitle,
  showContactCTA = true,
  pageType = 'page',
  pageSlug,
  pageId,
  keywords = [],
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={title}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        pageType={pageType}
        pageSlug={pageSlug}
        pageId={pageId}
        imageUrl={mainImageUrl}
        keywords={keywords}
      />
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-brand-green py-12 md:py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{heroTitle}</h1>
                <p className="text-base md:text-lg lg:text-xl mb-8 opacity-90 px-2">
                  {heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-brand-green hover:bg-gray-100">
                    <Link to="/offerte">
                      Vraag offerte aan
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/kunststof-kozijnen">
                      Bekijk alle kozijnen
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <StickyNavigation />
        
        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${isMobile ? '' : 'lg:flex-row'} gap-12`}>
              <div className={isMobile ? "w-full" : "lg:w-2/3"}>
                <AnimatedSection animation="fade-in">
                  {mainContent}
                </AnimatedSection>
              </div>
              
              <div className={isMobile ? "w-full" : "lg:w-1/3"}>
                {mainImageUrl && (
                  <AnimatedSection animation="fade-in" delay={200}>
                    <div className="rounded-lg overflow-hidden shadow-md mb-8">
                      <img 
                        src={mainImageUrl} 
                        alt={heroTitle} 
                        className="w-full h-auto"
                      />
                    </div>
                  </AnimatedSection>
                )}
                
                {benefits.length > 0 && (
                  <AnimatedSection animation="fade-in" delay={300} className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">Voordelen</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-green mr-2 flex-shrink-0">✓</span>
                          <span className="text-sm md:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                )}
                
                <AnimatedSection animation="fade-in" delay={400} className="bg-brand-green text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Hulp nodig?</h3>
                  <p className="mb-4 text-sm md:text-base">
                    Onze experts staan klaar om u te helpen bij het kiezen van de juiste kozijnen voor uw woning.
                  </p>
                  <Button asChild className="w-full bg-white text-brand-green hover:bg-gray-100">
                    <Link to="/offerte">
                      Offerte Aanvragen
                    </Link>
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        {faqs.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
                <div className="max-w-3xl mx-auto">
                  {faqs.map((faq, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-700 text-sm md:text-base">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}
        
        {/* Related Items Section */}
        {relatedItems.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-8">{relatedItemsTitle}</h2>
                <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                  {relatedItems.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      {item.excerpt && <p className="text-gray-700 text-sm md:text-base mb-4">{item.excerpt}</p>}
                      <Link 
                        to={item.slug} 
                        className="text-brand-green flex items-center hover:underline"
                      >
                        <span>Meer over {item.title}</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}
        
        {/* Contact CTA Section */}
        {showContactCTA && <ContactCTA />}
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SubpageTemplate;
