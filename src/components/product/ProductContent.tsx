
import React from 'react';
import { Check, Shield, Award, Clock } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface ProductContentProps {
  introText?: string;
  whatAreDescription?: string;
  pricingInfo?: string;
  productName?: string;
}

const ProductContent: React.FC<ProductContentProps> = ({ 
  introText, 
  whatAreDescription, 
  pricingInfo,
  productName = 'producten'
}) => {
  if (!introText && !whatAreDescription && !pricingInfo) {
    return null;
  }

  const isKozijnenProduct = productName.toLowerCase().includes('kozijn');

  const qualityFeatures = [
    {
      icon: Shield,
      title: 'Hoogwaardige materialen',
      description: 'Alleen de beste materialen voor maximale duurzaamheid'
    },
    {
      icon: Award,
      title: 'Gecertificeerde kwaliteit',
      description: 'KOMO en CE gecertificeerd voor garantie op kwaliteit'
    },
    {
      icon: Clock,
      title: '15+ jaar ervaring',
      description: 'Jarenlange expertise in duurzame woningverduurzaming'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {introText && (
          <AnimatedSection animation="fade-in">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="prose prose-lg max-w-none text-gray-700 text-center">
                <p className="text-xl leading-relaxed">{introText}</p>
              </div>
            </div>
          </AnimatedSection>
        )}
        
        {whatAreDescription && (
          <AnimatedSection animation="fade-in">
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                {isKozijnenProduct ? 'Wat zijn kunststof kozijnen?' : `Wat zijn ${productName}?`}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                    <p className="text-lg leading-relaxed">{whatAreDescription}</p>
                  </div>
                  
                  {isKozijnenProduct && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-4">Waarom kiezen voor kunststof kozijnen?</h3>
                      <ul className="space-y-3">
                        {[
                          'Uitstekende isolatiewaarde - tot 70% energiebesparing',
                          'Onderhoudsvrij - nooit meer schilderen of onderhoud',
                          'Lange levensduur - minimaal 30 jaar meegaan',
                          'Veilig - moderne veiligheidssloten standaard',
                          'Stijlvol - verkrijgbaar in vele kleuren en uitvoeringen'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="space-y-6">
                  {isKozijnenProduct && (
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <img 
                        src="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png" 
                        alt="Kunststof kozijnen voorbeeld"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <p className="text-sm text-gray-600 text-center">
                        Moderne kunststof kozijnen in verschillende uitvoeringen
                      </p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 gap-4">
                    {qualityFeatures.map((feature, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-6 w-6 text-brand-green" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}
        
        {pricingInfo && (
          <AnimatedSection animation="fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-center">Prijsinformatie</h3>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed">{pricingInfo}</p>
                </div>
                
                {isKozijnenProduct && (
                  <div className="mt-8 p-6 bg-brand-green/5 rounded-lg">
                    <h4 className="font-semibold text-brand-green mb-3">Inclusief in onze service:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Gratis advies en inmeten',
                        'Vakkundige montage',
                        '10 jaar garantie',
                        'Afvoer van oude kozijnen',
                        'Opruimen na montage',
                        'Rentevrije financiering mogelijk'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-brand-green flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default ProductContent;
