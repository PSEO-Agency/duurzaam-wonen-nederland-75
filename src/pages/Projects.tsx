
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, Filter, MapPin, ArrowUpDown, Tag, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProjects } from '@/hooks/useProjects';

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  project_type: string;
  completion_date: string;
  image_url: string;
  featured_image: string;
  gallery_images: string[];
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

const Projects: React.FC = () => {
  const { data: projects = [], isLoading } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'az' | 'za'>('newest');

  // Get unique categories and tags
  const categories = Array.from(new Set(projects.map(project => project.project_type).filter(Boolean)));
  const allTags = Array.from(new Set(projects.flatMap(project => 
    project.project_type ? [project.project_type] : []
  )));

  // Handle filtering and sorting
  useEffect(() => {
    let result = [...projects];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(query) || 
          (project.description && project.description.toLowerCase().includes(query)) ||
          (project.location && project.location.toLowerCase().includes(query)) ||
          (project.project_type && project.project_type.toLowerCase().includes(query))
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(project => project.project_type === selectedCategory);
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter(project => 
        selectedTags.some(tag => project.project_type === tag)
      );
    }
    
    // Sort results
    switch (sortOption) {
      case 'newest':
        result = result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'oldest':
        result = result.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        break;
      case 'az':
        result = result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'za':
        result = result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    
    setFilteredProjects(result);
  }, [projects, searchQuery, selectedCategory, selectedTags, sortOption]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTags([]);
    setSortOption('newest');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-3 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Projecten | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Bekijk onze recente projecten op het gebied van woningverduurzaming, kozijnen, dakkapellen en meer. Laat u inspireren door ons vakmanschap." />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Onze Projecten</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Ontdek onze recente projecten op het gebied van woningverduurzaming, kozijnen en aanbouw. 
              Laat u inspireren en zie wat wij voor u kunnen betekenen.
            </p>
          </div>
        </section>
        
        {/* Filters and Projects */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white p-6 rounded-lg border shadow-sm">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Search className="h-4 w-4 mr-2" />
                      Zoeken
                    </h3>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Zoek projecten..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                      />
                      {searchQuery && (
                        <button 
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setSearchQuery('')}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Categorie
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="cat-all" 
                          name="category" 
                          checked={selectedCategory === 'all'} 
                          onChange={() => setSelectedCategory('all')}
                          className="mr-2"
                        />
                        <label htmlFor="cat-all">Alle categorieën</label>
                      </div>
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`cat-${category}`} 
                            name="category" 
                            checked={selectedCategory === category} 
                            onChange={() => setSelectedCategory(category)}
                            className="mr-2"
                          />
                          <label htmlFor={`cat-${category}`} className="capitalize">{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {allTags.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Tag className="h-4 w-4 mr-2" />
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant={selectedTags.includes(tag) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => handleTagToggle(tag)}
                          >
                            {tag}
                            {selectedTags.includes(tag) && (
                              <X className="ml-1 h-3 w-3" />
                            )}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <ArrowUpDown className="h-4 w-4 mr-2" />
                      Sorteren
                    </h3>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value as any)}
                    >
                      <option value="newest">Nieuwste eerst</option>
                      <option value="oldest">Oudste eerst</option>
                      <option value="az">A-Z</option>
                      <option value="za">Z-A</option>
                    </select>
                  </div>
                  
                  {(searchQuery || selectedCategory !== 'all' || selectedTags.length > 0) && (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={clearFilters}
                    >
                      Filters wissen
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Projects Grid */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    {filteredProjects.length} Projecten gevonden
                  </h2>
                </div>
                
                {filteredProjects.length === 0 ? (
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-xl font-semibold mb-2">Geen projecten gevonden</h3>
                    <p className="text-gray-600 mb-4">Pas uw zoekcriteria aan of wis de filters om meer resultaten te zien.</p>
                    <Button onClick={clearFilters}>Filters wissen</Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                      <Link to={`/projecten/${project.id}`} key={project.id} className="group">
                        <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={project.featured_image || project.image_url || '/placeholder.svg'} 
                              alt={project.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {project.project_type && (
                              <Badge className="absolute top-3 right-3 capitalize">
                                {project.project_type}
                              </Badge>
                            )}
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                              {project.title}
                            </CardTitle>
                            {project.location && (
                              <CardDescription className="flex items-center text-sm">
                                <MapPin className="h-4 w-4 mr-1" />
                                {project.location}
                              </CardDescription>
                            )}
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-gray-600 line-clamp-2">{project.description}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center pt-0">
                            {project.completion_date && (
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(project.completion_date).toLocaleDateString('nl-NL', {
                                  year: 'numeric',
                                  month: 'short'
                                })}
                              </div>
                            )}
                            <Button variant="ghost" size="sm" className="text-brand-green">
                              Bekijk project
                            </Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Projects;
