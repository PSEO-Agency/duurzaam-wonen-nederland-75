
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, Filter, ArrowUpDown, Tag, X, Clock, User } from 'lucide-react';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { blogPosts, getBlogCategories } from '@/data/blogPosts';
import { BlogPost, BlogCategory } from '@/types/blog';

const Blog: React.FC = () => {
  const categories = getBlogCategories();
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'az' | 'za' | 'readtime'>('newest');

  // All unique tags from blog posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Handle filtering and sorting
  useEffect(() => {
    let result = [...blogPosts];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(query) || 
          post.content.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter(post => 
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }
    
    // Sort results
    switch (sortOption) {
      case 'newest':
        result = result.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      case 'oldest':
        result = result.sort((a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime());
        break;
      case 'az':
        result = result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'za':
        result = result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'readtime':
        result = result.sort((a, b) => a.readTime - b.readTime);
        break;
    }
    
    setFilteredPosts(result);
  }, [searchQuery, selectedCategory, selectedTags, sortOption]);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Lees onze laatste artikelen over duurzaam wonen, energiebesparing, kunststof kozijnen en meer. Praktische tips en de laatste trends." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Ontdek de nieuwste trends en tips op het gebied van duurzaam wonen, 
              energiebesparing, kozijnen en meer. Blijf op de hoogte van de laatste 
              ontwikkelingen in de branche.
            </p>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Uitgelichte artikelen</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => post.featured).slice(0, 3).map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Badge className="capitalize">{post.category}</Badge>
                        <span className="text-sm text-gray-500 ml-2 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime} min leestijd
                        </span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{post.author.name}</span>
                        <Separator orientation="vertical" className="mx-2 h-4" />
                        <span>{formatDate(post.publishedDate)}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="text-brand-green">
                        Lees artikel
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Articles */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Alle artikelen</h2>
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
                        placeholder="Zoek artikelen..."
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
                      <option value="readtime">Leestijd (oplopend)</option>
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
              
              {/* Blog Posts Grid */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    {filteredPosts.length} Artikelen gevonden
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Weergave:</span>
                    <Tabs defaultValue="grid" className="w-[200px]">
                      <TabsList>
                        <TabsTrigger value="grid">Grid</TabsTrigger>
                        <TabsTrigger value="list">Lijst</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                
                {filteredPosts.length === 0 ? (
                  <div className="bg-white p-8 rounded-lg text-center">
                    <h3 className="text-xl font-semibold mb-2">Geen artikelen gevonden</h3>
                    <p className="text-gray-600 mb-4">Pas uw zoekcriteria aan of wis de filters om meer resultaten te zien.</p>
                    <Button onClick={clearFilters}>Filters wissen</Button>
                  </div>
                ) : (
                  <Tabs defaultValue="grid">
                    <TabsContent value="grid" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post) => (
                          <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                              <div className="aspect-video overflow-hidden">
                                <img 
                                  src={post.featuredImage} 
                                  alt={post.title} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <CardHeader className="pb-2">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge className="capitalize">{post.category}</Badge>
                                  <span className="text-xs text-gray-500 flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {post.readTime} min
                                  </span>
                                </div>
                                <CardTitle className="text-xl group-hover:text-brand-green transition-colors line-clamp-2">
                                  {post.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="pb-2">
                                <p className="text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                                <div className="flex items-center">
                                  <Avatar className="h-6 w-6 mr-2">
                                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">{post.author.name}</span>
                                  <Separator orientation="vertical" className="mx-2 h-4" />
                                  <span className="text-sm text-gray-500">{formatDate(post.publishedDate)}</span>
                                </div>
                              </CardContent>
                              <CardFooter className="pt-0">
                                <Button variant="ghost" size="sm" className="text-brand-green">
                                  Lees artikel
                                </Button>
                              </CardFooter>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="list" className="mt-0">
                      <div className="space-y-6">
                        {filteredPosts.map((post) => (
                          <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                            <Card className="overflow-hidden hover:shadow-md transition-shadow">
                              <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 relative">
                                  <img 
                                    src={post.featuredImage} 
                                    alt={post.title} 
                                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <Badge className="absolute top-3 right-3 capitalize">
                                    {post.category}
                                  </Badge>
                                </div>
                                <div className="md:w-2/3 p-6">
                                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-green transition-colors">
                                    {post.title}
                                  </h3>
                                  <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Avatar className="h-6 w-6 mr-2">
                                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span>{post.author.name}</span>
                                    <Separator orientation="vertical" className="mx-2 h-4" />
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {formatDate(post.publishedDate)}
                                    <Separator orientation="vertical" className="mx-2 h-4" />
                                    <Clock className="h-4 w-4 mr-1" />
                                    {post.readTime} min leestijd
                                  </div>
                                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 3).map((tag) => (
                                      <Badge key={tag} variant="outline">{tag}</Badge>
                                    ))}
                                    {post.tags.length > 3 && (
                                      <Badge variant="outline">+{post.tags.length - 3}</Badge>
                                    )}
                                  </div>
                                  <div className="flex justify-end">
                                    <Button size="sm" className="bg-brand-green hover:bg-brand-green-dark">
                                      Lees artikel
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
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

export default Blog;
