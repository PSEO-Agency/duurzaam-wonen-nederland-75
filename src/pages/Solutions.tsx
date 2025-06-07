
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
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
import LoadingScreen from '@/components/LoadingScreen';
import { useSolutions, useSolutionCategories } from '@/hooks/useSolutions';
import { useIsMobile } from '@/hooks/use-mobile';

const Solutions: React.FC = () => {
  const isMobile = useIsMobile();
  const { data: solutions = [], isLoading: isLoadingSolutions } = useSolutions();
  const { data: categories = [], isLoading: isLoadingCategories } = useSolutionCategories();

  if (isLoadingSolutions || isLoadingCategories) {
    return <LoadingScreen />;
  }

  // Group solutions by category
  const solutionsByCategory = categories.map(category => ({
    ...category,
    solutions: solutions.filter(solution => solution.category_id === category.id)
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Oplossingen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek onze complete range van duurzame woningverduurzaming oplossingen. Van kunststof kozijnen tot gevelbekleding - alles voor een energiezuinige woning." />
        <link rel="canonical" href="https://duurzaamwonen.info/oplossingen" />
        <meta property="og:title" content="Oplossingen | Duurzaam Wonen Nederland" />
        <meta property="og:description" content="Ontdek onze complete range van duurzame woningverduurzaming oplossingen. Van kunststof kozijnen tot gevelbekleding - alles voor een energiezuinige woning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duurzaamwonen.info/oplossingen" />
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
                  <BreadcrumbPage>Oplossingen</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-brand-green py-12 md:py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Onze Oplossingen voor Woningverduurzaming
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-8 opacity-90 px-2">
                  Ontdek onze complete range van duurzame oplossingen voor uw woning. 
                  Van energiezuinige kozijnen tot moderne gevelbekleding - wij hebben de perfecte oplossing voor elke situatie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-brand-green hover:bg-gray-100">
                    <Link to="/offerte">
                      Vraag offerte aan
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/contact">
                      Gratis advies
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Oplossingen die passen bij uw woning
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Met meer dan 20 jaar ervaring bieden wij hoogwaardige en onderhoudsarme oplossingen 
                  voor een comfortabeler huis en lagere energiekosten.
                </p>
              </div>
            </AnimatedSection>

            {solutionsByCategory.map((category, categoryIndex) => (
              category.solutions.length > 0 && (
                <div key={category.id} className="mb-16">
                  <AnimatedSection animation="fade-in" delay={categoryIndex * 200}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{category.name}</h3>
                      {category.description && (
                        <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                      )}
                    </div>
                  </AnimatedSection>

                  <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {category.solutions.map((solution, solutionIndex) => (
                      <AnimatedSection 
                        key={solution.id} 
                        animation="fade-in" 
                        delay={(categoryIndex * 200) + (solutionIndex * 100)}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow group">
                          {solution.hero_image_url && (
                            <div className="aspect-video overflow-hidden rounded-t-lg">
                              <img 
                                src={solution.hero_image_url} 
                                alt={solution.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary">{category.name}</Badge>
                              <div className="flex items-center gap-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className="text-sm">★</span>
                                ))}
                              </div>
                            </div>
                            <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                              {solution.name}
                            </CardTitle>
                            <CardDescription>{solution.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <div className="space-y-3 mb-6">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-brand-green" />
                                <span>10 jaar garantie</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-brand-green" />
                                <span>Professionele montage</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-brand-green" />
                                <span>Energiebesparend</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-col gap-3">
                              <Button asChild className="w-full">
                                <Link to={`/${solution.slug}`}>
                                  <span>Meer informatie</span>
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                              <Button asChild variant="outline" className="w-full">
                                <Link to="/offerte">
                                  Offerte aanvragen
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Waarom kiezen voor Duurzaam Wonen Nederland?
                </h2>
              </div>
              
              <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8`}>
                {[
                  {
                    title: "20+ jaar ervaring",
                    description: "Ruime ervaring in woningverduurzaming"
                  },
                  {
                    title: "10 jaar garantie",
                    description: "Uitgebreide garantie op al onze producten"
                  },
                  {
                    title: "Vakkundige montage",
                    description: "Professionele installatie door experts"
                  },
                  {
                    title: "Gratis advies",
                    description: "Persoonlijk advies op maat voor uw situatie"
                  }
                ].map((benefit, index) => (
                  <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-8 bg-gray-50">
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

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Solutions;
