
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, MapPin, Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSolutions } from '@/hooks/useSolutions';

interface QuickLink {
  label: string;
  href: string;
}

interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

interface Feature {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  location: string;
  completion_date: string;
  project_type: string;
}

interface SolutionData {
  id: string;
  name: string;
  slug: string;
  description: string;
  hero_title: string;
  hero_description: string;
  hero_image_url: string;
  intro_text: string;
  what_are_description: string;
  quick_links: QuickLink[];
  benefits: Benefit[];
  features: Feature[];
  pricing_info: string;
  faq: FAQItem[];
  workflow_steps: WorkflowStep[];
  meta_title: string;
  meta_description: string;
  projects?: Project[];
}

interface SolutionTemplateProps {
  solution: SolutionData;
  relatedSolutions?: SolutionData[];
}

const SolutionTemplate: React.FC<SolutionTemplateProps> = ({ 
  solution, 
  relatedSolutions = [] 
}) => {
  const isMobile = useIsMobile();
  const { data: allSolutions = [] } = useSolutions();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{solution.meta_title || solution.name} | Duurzaam Wonen Nederland</title>
        <meta name="description" content={solution.meta_description || solution.description} />
        <link rel="canonical" href={`https://duurzaamwonen.info/${solution.slug}`} />
        <meta property="og:title" content={solution.meta_title || solution.name} />
        <meta property="og:description" content={solution.meta_description || solution.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://duurzaamwonen.info/${solution.slug}`} />
        {solution.hero_image_url && (
          <meta property="og:image" content={solution.hero_image_url} />
        )}
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-20">
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/oplossingen">Oplossingen</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{solution.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section 
          className="relative min-h-[70vh] flex items-center"
          style={{
            backgroundImage: solution.hero_image_url 
              ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${solution.hero_image_url}")` 
              : 'linear-gradient(135deg, #2D5016 0%, #4A7C23 100%)',
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
                    Duurzaam Wonen Nederland
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {solution.hero_title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                    {solution.hero_description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                      <Link to="/offerte">
                        <span>Offerte aanvragen</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20">
                      <Link to="/contact">
                        Gratis advies
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand-green" />
                      <span>10 jaar garantie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand-green" />
                      <span>Gratis advies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand-green" />
                      <span>Vakkundige montage</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:col-span-5">
                <AnimatedSection animation="fade-in-left" delay={300}>
                  <div className="glass-card p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Waarom kiezen voor {solution.name}?
                    </h3>
                    
                    {solution.quick_links && solution.quick_links.length > 0 && (
                      <div className="space-y-3 mb-6">
                        {solution.quick_links.map((link, index) => (
                          <Link
                            key={index}
                            to={link.href}
                            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-brand-green" />
                            <span>{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-white/80 text-sm mb-4">
                        {solution.pricing_info || "Vraag een vrijblijvende offerte aan en ontdek wat wij voor u kunnen betekenen."}
                      </p>
                      <Button asChild className="w-full bg-white text-brand-green hover:bg-gray-100">
                        <Link to="/offerte">
                          Offerte Aanvragen
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        {solution.intro_text && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {solution.intro_text}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* What Are Section */}
        {solution.what_are_description && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Wat zijn {solution.name}?
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {solution.what_are_description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {solution.benefits && solution.benefits.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-12 text-center">Voordelen</h2>
                <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                  {solution.benefits.map((benefit, index) => (
                    <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                            <Check className="h-6 w-6 text-brand-green" />
                          </div>
                          <CardTitle className="text-xl">{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Features Section */}
        {solution.features && solution.features.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-12 text-center">Kenmerken</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Onze Oplossingen Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center">Onze Oplossingen</h2>
              <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                {allSolutions.slice(0, 6).map((solutionItem, index) => (
                  <AnimatedSection key={solutionItem.id} animation="fade-in" delay={index * 100}>
                    <Card className="h-full hover:shadow-lg transition-shadow group">
                      {solutionItem.hero_image_url && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img 
                            src={solutionItem.hero_image_url} 
                            alt={solutionItem.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                          {solutionItem.name}
                        </CardTitle>
                        <CardDescription>{solutionItem.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link to={`/${solutionItem.slug}`}>
                            <span>Meer informatie</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Recent Projects Section */}
        {solution.projects && solution.projects.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-12 text-center">Recente Projecten</h2>
                <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                  {solution.projects.slice(0, 6).map((project, index) => (
                    <AnimatedSection key={project.id} animation="fade-in" delay={index * 100}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        {project.image_url && (
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={project.image_url} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>{project.location}</span>
                            <Calendar className="h-4 w-4 ml-2" />
                            <span>{new Date(project.completion_date).getFullYear()}</span>
                          </div>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          {project.project_type && (
                            <Badge variant="secondary">{project.project_type}</Badge>
                          )}
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{project.description}</p>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {solution.faq && solution.faq.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-12 text-center">Veelgestelde Vragen</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                  {solution.faq.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Workflow Section */}
        {solution.workflow_steps && solution.workflow_steps.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-12 text-center">Onze Werkwijze</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
                    {solution.workflow_steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <iframe 
                className="lc_reviews_widget w-full h-[600px] md:h-[600px]" 
                src="https://reputationhub.site/reputation/widgets/review_widget/3aRsj8TT2qcU3nkx3kWm" 
                frameBorder="0" 
                scrolling="yes"
                style={{ 
                  minWidth: '100%', 
                  width: '100%', 
                  height: '600px'
                }}
                title="Customer Reviews"
              />
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center">Onze Werkgebieden</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    'Enschede', 'Hengelo', 'Almelo', 'Oldenzaal',
                    'Haaksbergen', 'Losser', 'Denekamp', 'Tubbergen',
                    'Twenterand', 'Wierden', 'Rijssen-Holten', 'Hellendoorn'
                  ].map((city, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-medium text-gray-800">{city}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button asChild variant="outline">
                    <Link to="/werkgebied">
                      Bekijk alle werkgebieden
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SolutionTemplate;
