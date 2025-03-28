
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useSearch } from '@/contexts/SearchContext';
import SearchResultCard from '@/components/search/SearchResultCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const Zoeken: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { searchResults, isLoading, searchTerm, performSearch } = useSearch();
  
  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
  };
  
  // Count results by type
  const typeCounts = {
    All: searchResults.length,
    Project: searchResults.filter(result => result.type === 'Project').length,
    Oplossing: searchResults.filter(result => result.type === 'Oplossing').length,
    Product: searchResults.filter(result => result.type === 'Product').length,
    Pagina: searchResults.filter(result => result.type === 'Pagina').length,
    Blog: searchResults.filter(result => result.type === 'Blog').length,
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Zoekresultaten | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Zoek binnen het aanbod van Duurzaam Wonen Nederland naar producten, projecten, blogs en meer." />
        <link rel="canonical" href={`https://duurzaamwonen.info/zoeken?q=${query}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Zoekresultaten</h1>
            
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Zoek binnen Duurzaam Wonen Nederland..."
                  className="pl-10 py-3 text-base"
                  value={searchTerm}
                  onChange={(e) => performSearch(e.target.value)}
                />
              </div>
            </form>
            
            {query && (
              <div className="mb-6">
                <p className="text-gray-600">
                  {isLoading 
                    ? 'Zoeken...' 
                    : `${searchResults.length} resultaten gevonden voor "${query}"`}
                </p>
              </div>
            )}
            
            <Tabs defaultValue="All" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="All">
                  Alle resultaten ({typeCounts.All})
                </TabsTrigger>
                <TabsTrigger value="Project">
                  Projecten ({typeCounts.Project})
                </TabsTrigger>
                <TabsTrigger value="Oplossing">
                  Oplossingen ({typeCounts.Oplossing})
                </TabsTrigger>
                <TabsTrigger value="Product">
                  Producten ({typeCounts.Product})
                </TabsTrigger>
                <TabsTrigger value="Pagina">
                  Pagina's ({typeCounts.Pagina})
                </TabsTrigger>
                <TabsTrigger value="Blog">
                  Blog ({typeCounts.Blog})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="All">
                <div className="grid gap-4 md:grid-cols-2">
                  {isLoading ? (
                    <div className="col-span-2 text-center py-8">
                      <p>Zoeken...</p>
                    </div>
                  ) : searchResults.length > 0 ? (
                    searchResults.map(result => (
                      <SearchResultCard
                        key={result.id}
                        title={result.title}
                        excerpt={result.excerpt}
                        url={result.url}
                        type={result.type}
                      />
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8">
                      <p>Geen resultaten gevonden voor "{query}"</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {['Project', 'Oplossing', 'Product', 'Pagina', 'Blog'].map(type => (
                <TabsContent key={type} value={type}>
                  <div className="grid gap-4 md:grid-cols-2">
                    {isLoading ? (
                      <div className="col-span-2 text-center py-8">
                        <p>Zoeken...</p>
                      </div>
                    ) : searchResults.filter(result => result.type === type).length > 0 ? (
                      searchResults
                        .filter(result => result.type === type)
                        .map(result => (
                          <SearchResultCard
                            key={result.id}
                            title={result.title}
                            excerpt={result.excerpt}
                            url={result.url}
                            type={result.type}
                          />
                        ))
                    ) : (
                      <div className="col-span-2 text-center py-8">
                        <p>Geen {type.toLowerCase()}en gevonden voor "{query}"</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Zoeken;
