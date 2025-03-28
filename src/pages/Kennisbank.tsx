
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ArrowRight, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import { kennisbankArticles } from '@/data/kennisbankArticles';
import { KennisbankArticle, KennisbankCategory } from '@/types/kennisbank';
import { Link } from 'react-router-dom';

// Helper function to format dates
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('nl-NL', options);
};

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

const Kennisbank: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  // Filter articles based on search query and selected category
  const filteredArticles = kennisbankArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  // Get featured articles
  const featuredArticles = kennisbankArticles.filter(article => article.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kennisbank | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek alles over kunststof kozijnen in onze uitgebreide kennisbank. Van technische specificaties tot installatierichtlijnen." />
        <link rel="canonical" href="https://duurzaamwonen.info/kennisbank" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-brand-green py-12 md:py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Kennisbank</h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Ontdek alles over kunststof kozijnen: van materialen en typen tot installatie, onderhoud en kosten.
                  Uw bron voor betrouwbare informatie over woningverduurzaming.
                </p>
                
                {/* Search bar */}
                <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 mt-8">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      placeholder="Zoek in kennisbank..."
                      className="pl-10 h-12 bg-white text-gray-800 border-0 shadow-lg rounded-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-12 rounded-full bg-white text-gray-800 border-0 shadow-lg w-full sm:w-40">
                      <SelectValue placeholder="Categorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Alle categorieën</SelectItem>
                      {Object.entries(categories).map(([value, label]) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Featured Articles Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Uitgelichte artikelen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 3).map((article) => (
                <AnimatedSection key={article.id} animation="fade-in" delay={100}>
                  <Link to={`/kennisbank/${article.slug}`}>
                    <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                      {article.featuredImage && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                          <div className="absolute top-3 left-3 bg-brand-green text-white text-xs px-3 py-1 rounded-full">
                            {categories[article.category]}
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{formatDate(article.publishedDate)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{article.readTime} min leestijd</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center text-brand-green font-medium">
                          <span>Lees meer</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Content - All Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Alle artikelen</h2>
              
              <div className="flex items-center mt-4 md:mt-0">
                <Filter className="h-5 w-5 mr-2 text-gray-500" />
                <span className="mr-3 text-gray-600">Filter op:</span>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px] border-gray-300">
                    <SelectValue placeholder="Categorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle categorieën</SelectItem>
                    {Object.entries(categories).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <AnimatedSection key={article.id} animation="fade-in">
                    <Link to={`/kennisbank/${article.slug}`}>
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-xs font-medium text-brand-green mb-2">
                            {categories[article.category]} - {article.subCategory}
                          </div>
                          <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{formatDate(article.publishedDate)}</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{article.readTime} min leestijd</span>
                          </div>
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
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500 mb-4">Geen artikelen gevonden die voldoen aan uw zoekcriteria.</p>
                <Button onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                }}>
                  Toon alle artikelen
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Categories Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Categorieën</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.entries(categories).map(([category, label]) => {
                const categoryArticles = kennisbankArticles.filter(article => article.category === category as KennisbankCategory);
                if (categoryArticles.length === 0) return null;
                
                return (
                  <AnimatedSection key={category} animation="fade-in">
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-3">{label}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{categoryArticles.length} artikelen</p>
                        <Button 
                          variant="outline" 
                          className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                          onClick={() => setSelectedCategory(category)}
                        >
                          Bekijk artikelen
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-brand-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Hulp nodig bij het kiezen van de juiste kozijnen?</h2>
              <p className="text-lg mb-8 opacity-90">
                Onze experts staan klaar om u te helpen. Neem contact op voor persoonlijk advies 
                of een vrijblijvende offerte voor uw project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-brand-green hover:bg-gray-100">
                  <Link to="/contact">
                    Contact opnemen
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/kunststof-kozijnen">
                    Bekijk kozijnen
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

export default Kennisbank;
