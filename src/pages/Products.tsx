
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedSection from '@/components/AnimatedSection';
import { useProducts } from '@/hooks/useProducts';

const Products: React.FC = () => {
  const { data: products = [], isLoading, error } = useProducts();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Er is een fout opgetreden bij het laden van de producten.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Producten | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek ons complete assortiment duurzame producten voor woningverduurzaming." />
        <link rel="canonical" href="https://duurzaamwonen.info/products" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-brand-green py-12 md:py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Onze Producten voor Woningverduurzaming
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-8 opacity-90 px-2">
                  Ontdek ons complete assortiment duurzame producten voor uw woning. 
                  Van energiezuinige kozijnen tot moderne isolatiematerialen - wij hebben het perfecte product voor elke situatie.
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Al onze Producten</h2>
                <p className="text-lg text-gray-600">
                  Bekijk hieronder al onze beschikbare producten voor woningverduurzaming
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <AnimatedSection key={product.id} animation="fade-in" delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <Button asChild className="w-full">
                        <Link to={`/products/${product.slug}`}>
                          Meer informatie
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">Er zijn momenteel geen producten beschikbaar.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Products;
