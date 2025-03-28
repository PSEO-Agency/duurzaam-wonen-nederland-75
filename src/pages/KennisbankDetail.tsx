import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Bookmark, Printer, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import { kennisbankArticles } from '@/data/kennisbankArticles';
import { KennisbankCategory } from '@/types/kennisbank';

// Categories with their display names
const categories: Record<KennisbankCategory, string> = {
  'inleiding': 'Inleiding tot Kunststof Kozijnen',
  'voordelen': 'Voordelen van Kunststof Kozijnen',
  'nadelen': 'Nadelen en Aandachtspunten',
  'soorten': 'Soorten en Stijlen',
  'technisch': 'Technische Specificaties',
  'installatie': 'Installatie en Plaatsing',
  'onderhoud': 'Onderhoud en Reiniging',
  'kosten': 'Kosten en Besparingen',
  'milieu': 'Milieu-Impact en Duurzaamheid',
  'faq': 'Veelgestelde Vragen (FAQ)',
  'cases': 'Case Studies en Projecten',
  'normen': 'Normen en Regelgeving',
  'innovaties': 'Innovaties en Toekomstige Ontwikkelingen'
};

// Helper function to format dates
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('nl-NL', options);
};

const KennisbankDetail: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const navigate = useNavigate();
  
  // Find the current article
  const article = useMemo(() => {
    return kennisbankArticles.find(article => article.slug === articleSlug);
  }, [articleSlug]);
  
  // Find related articles - either explicitly related or from the same category
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    
    // First try to get explicitly related articles
    if (article.relatedArticles && article.relatedArticles.length > 0) {
      return kennisbankArticles.filter(a => article.relatedArticles?.includes(a.id)).slice(0, 3);
    }
    
    // Otherwise get articles from the same category
    return kennisbankArticles
      .filter(a => a.category === article.category && a.id !== article.id)
      .slice(0, 3);
  }, [article]);
  
  // If article not found, redirect to 404
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-20">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold mb-4">Artikel niet gevonden</h1>
            <p className="text-lg text-gray-600 mb-8">
              Het artikel dat u zoekt bestaat niet of is verplaatst.
            </p>
            <Button asChild>
              <Link to="/kennisbank">Terug naar kennisbank</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{article.title} | Kennisbank | Duurzaam Wonen Nederland</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`https://duurzaamwonen.info/kennisbank/${article.slug}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Breadcrumb navigation */}
        <div className="bg-gray-50 border-b py-3">
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
                    <Link to="/kennisbank">Kennisbank</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={`/kennisbank?category=${article.category}`}>
                      {categories[article.category]}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{article.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Article Header */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mb-6 hover:bg-gray-100"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span>Terug</span>
                </Button>
                
                <div className="mb-6">
                  <div className="inline-block bg-brand-green/10 text-brand-green text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {article.subCategory}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
                  <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-x-6 gap-y-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Gepubliceerd: {formatDate(article.publishedDate)}</span>
                    </div>
                    {article.lastUpdated && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Bijgewerkt: {formatDate(article.lastUpdated)}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{article.readTime} min leestijd</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      <span>Delen</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Bookmark className="h-4 w-4" />
                      <span>Opslaan</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Printer className="h-4 w-4" />
                      <span>Afdrukken</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <FileText className="h-4 w-4" />
                      <span>PDF</span>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Featured Image */}
              {article.featuredImage && (
                <AnimatedSection animation="fade-in" delay={100}>
                  <div className="relative rounded-lg overflow-hidden mb-8 max-h-[500px]">
                    <img 
                      src={article.featuredImage} 
                      alt={article.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </AnimatedSection>
              )}
              
              {/* Article Content */}
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="prose prose-lg max-w-none mb-12">
                  {/* This would normally be rendered from HTML or Markdown */}
                  <p className="mb-4">{article.content}</p>
                  <p className="mb-4">
                    Dit is een voorbeeldartikel. In een echte implementatie zou hier volledige inhoud staan,
                    mogelijk opgemaakt met HTML of gerenderd vanuit Markdown.
                  </p>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Subkop van het artikel</h2>
                  <p className="mb-4">
                    Hier zou meer gedetailleerde informatie staan over {article.title.toLowerCase()}.
                    Met tekstblokken, opsommingen, afbeeldingen en andere elementen die het onderwerp goed uitleggen.
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Belangrijk punt 1 over kunststof kozijnen</li>
                    <li className="mb-2">Belangrijk punt 2 met meer details</li>
                    <li className="mb-2">Belangrijk punt 3 met verdere uitleg</li>
                  </ul>
                  <p>
                    Voor meer specifieke informatie over {article.title.toLowerCase()}, neem gerust contact met ons op
                    of bekijk onze andere kennisartikelen.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Gerelateerde artikelen</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <AnimatedSection key={relatedArticle.id} animation="fade-in">
                      <Link to={`/kennisbank/${relatedArticle.slug}`}>
                        <Card className="h-full hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="text-xs font-medium text-brand-green mb-2">
                              {relatedArticle.subCategory}
                            </div>
                            <h3 className="text-lg font-bold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">{relatedArticle.excerpt}</p>
                            <div className="flex items-center text-brand-green font-medium">
                              <span>Lees artikel</span>
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Call to Action */}
        <section className="py-12 bg-brand-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Heeft u nog vragen over kunststof kozijnen?</h2>
              <p className="mb-8 opacity-90">
                Onze experts staan klaar om al uw vragen te beantwoorden. Neem contact op voor persoonlijk advies 
                of maak een afspraak in onze showroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-brand-green hover:bg-gray-100">
                  <Link to="/contact">
                    Contact opnemen
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/showroom">
                    Bezoek showroom
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default KennisbankDetail;
