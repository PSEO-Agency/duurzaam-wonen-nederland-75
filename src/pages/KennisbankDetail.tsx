
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, ChevronRight, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import { kennisbankArticles } from '@/data/kennisbankArticles';
import { KennisbankArticle } from '@/types/kennisbank';
import NotFound from './NotFound';

// Helper function to format dates
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('nl-NL', options);
};

const KennisbankDetail: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const [article, setArticle] = useState<KennisbankArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<KennisbankArticle[]>([]);
  
  useEffect(() => {
    // Find the article based on the slug
    const foundArticle = kennisbankArticles.find(item => item.slug === articleSlug);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Get related articles
      if (foundArticle.relatedArticles && foundArticle.relatedArticles.length > 0) {
        const related = kennisbankArticles.filter(item => 
          foundArticle.relatedArticles?.includes(item.id)
        );
        setRelatedArticles(related);
      } else {
        // If no related articles specified, get 3 from the same category
        const sameCategoryArticles = kennisbankArticles.filter(item => 
          item.category === foundArticle.category && item.id !== foundArticle.id
        );
        setRelatedArticles(sameCategoryArticles.slice(0, 3));
      }
    } else {
      setArticle(null);
      setRelatedArticles([]);
    }
    
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [articleSlug]);
  
  if (!article) {
    return <NotFound />;
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
        {/* Hero Section */}
        <section className={`py-10 ${article.featuredImage ? 'pb-0' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to="/kennisbank">Kennisbank</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink className="max-w-[200px] truncate">{article.title}</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="max-w-4xl mx-auto">
              <Link to="/kennisbank" className="inline-flex items-center text-gray-600 hover:text-brand-green mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Terug naar kennisbank
              </Link>
              
              <div className="mb-8">
                <div className="text-sm font-medium text-brand-green mb-2">
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)} - {article.subCategory}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{article.excerpt}</p>
                
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 gap-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Gepubliceerd: {formatDate(article.publishedDate)}</span>
                  </div>
                  {article.lastUpdated && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Bijgewerkt: {formatDate(article.lastUpdated)}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.readTime} min leestijd</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Delen</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Bookmark className="h-4 w-4" />
                    <span className="hidden sm:inline">Opslaan</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {article.featuredImage && (
            <div className="w-full h-64 md:h-96 overflow-hidden">
              <img 
                src={article.featuredImage} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </section>
        
        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in">
                <div className="prose prose-lg max-w-none">
                  <p>{article.content}</p>
                  
                  {/* Placeholder for full content - in a real app, this would be rich text */}
                  <p>Dit artikel bevat uitgebreide informatie over kunststof kozijnen, hun voordelen, installatie, en onderhoud. In een volledige versie zou hier rijke HTML-content staan met meerdere paragrafen, koppen, afbeeldingen, en mogelijk video's.</p>
                  
                  <h2>Meer informatie over {article.subCategory}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
                  
                  <h3>Specificaties en details</h3>
                  <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  
                  <ul>
                    <li>Hoge isolatiewaarden voor energiebesparing</li>
                    <li>Duurzame materialen met lange levensduur</li>
                    <li>Minimaal onderhoud vereist</li>
                    <li>Beschikbaar in diverse kleuren en afwerkingen</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Gerelateerde artikelen</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <AnimatedSection key={relatedArticle.id} animation="fade-in">
                      <Link to={`/kennisbank/${relatedArticle.slug}`}>
                        <Card className="h-full hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="text-sm font-medium text-brand-green mb-2">
                              {relatedArticle.subCategory}
                            </div>
                            <h3 className="text-xl font-bold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">{relatedArticle.excerpt}</p>
                            <div className="flex items-center text-brand-green font-medium">
                              <span>Lees artikel</span>
                              <ChevronRight className="ml-1 h-4 w-4" />
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
        <section className="py-16 bg-brand-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Heeft u vragen over kunststof kozijnen?</h2>
              <p className="text-lg mb-8 opacity-90">
                Onze experts staan klaar om al uw vragen te beantwoorden en u te helpen bij het kiezen 
                van de juiste oplossing voor uw woning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-brand-green hover:bg-gray-100">
                  <Link to="/contact">
                    Contact opnemen
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/kennisbank">
                    Meer artikelen
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
