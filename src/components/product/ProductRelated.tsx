
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProductData {
  id: string;
  name: string;
  slug: string;
  description: string;
  hero_image_url: string;
}

interface ProductRelatedProps {
  products: ProductData[];
  currentProductId?: string;
}

const ProductRelated: React.FC<ProductRelatedProps> = ({ products, currentProductId }) => {
  const isMobile = useIsMobile();

  // Filter out current product and limit to 3 related products
  const relatedProducts = products
    .filter(product => product.id !== currentProductId)
    .slice(0, 3);

  if (!relatedProducts || relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Gerelateerde Producten</h2>
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
            {relatedProducts.map((productItem, index) => (
              <AnimatedSection key={productItem.id} animation="fade-in" delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  {productItem.hero_image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={productItem.hero_image_url} 
                        alt={productItem.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                      {productItem.name}
                    </CardTitle>
                    <CardDescription>{productItem.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={`/producten/${productItem.slug}`}>
                        <span>Meer informatie</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          {relatedProducts.length >= 3 && (
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/producten">
                  Bekijk alle producten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductRelated;
