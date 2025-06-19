
import React from 'react';
import SchucoTemplate from '@/components/templates/SchucoTemplate';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, Award, ShieldCheck } from 'lucide-react';

const Schuco: React.FC = () => {
  const benefits = [
    'Duitse topkwaliteit met uitstekende isolatie',
    'Slanke profielen voor maximaal glasoppervlak',
    'Uitgebreid kleurenaanbod inclusief houtlook',
    'Hoge inbraakwerendheid tot RC3',
    'Geluiddempende eigenschappen',
    'Tot 40% energiebesparing mogelijk'
  ];

  return (
    <SchucoTemplate
      title="Schüco Kozijnen | Duurzaam Wonen Nederland"
      description="Schüco kunststof kozijnen van topkwaliteit. Ontdek het premium assortiment met uitstekende isolatiewaarden, modern design en Duitse kwaliteit."
      canonicalUrl="https://duurzaamwonen.info/schuco"
      heroTitle="Schüco Kozijnen"
      heroDescription="Premium kozijnen met Duitse kwaliteit en innovatieve technologie. Ontdek het Schüco assortiment met uitstekende isolatiewaarden en slank design."
      heroImageUrl="/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png"
      heroBenefits={benefits}
    >
      {/* Main Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-6">Schüco Kunststof Kozijnen</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Schüco behoort tot de absolute wereldtop op het gebied van kunststof kozijnen. Het Duitse merk staat bekend om 
                  zijn innovatieve technologieën, hoogwaardige materialen en vooruitstrevende designs. Als officiële Schüco partner 
                  levert Duurzaam Wonen Nederland het complete assortiment Schüco kozijnen, inclusief vakkundige montage en service.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Waarom kiezen voor Schüco?</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Uitstekende isolatie</strong> - Schüco profielen hebben uitzonderlijk lage U-waarden voor maximale energiebesparing</li>
                  <li><strong>Slank design</strong> - De slanke profielen maximaliseren het glasoppervlak voor meer lichtinval</li>
                  <li><strong>Hoogwaardige materialen</strong> - Gebruik van eersteklas kunststof en versterkingsprofielen voor langdurige stabiliteit</li>
                  <li><strong>Geavanceerde technologie</strong> - Innovatieve afdichtingssystemen en hoogwaardig hang- en sluitwerk</li>
                  <li><strong>Duurzaamheid</strong> - Milieuvriendelijke productieprocessen en recyclebare materialen</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">De juiste kozijnen voor uw woning</h3>
                <p className="text-gray-700 mb-6">
                  Of u nu een nieuwbouwwoning heeft, een jaren '30 herenhuis of een moderne villa, Schüco biedt voor elke situatie 
                  de perfecte kozijnoplossing. De kozijnen zijn verkrijgbaar in verschillende profieldieptes (70mm en 82mm), 
                  waardoor we altijd kunnen voldoen aan uw specifieke isolatie-eisen. Het uitgebreide kleurenprogramma biedt 
                  daarnaast vrijwel onbeperkte mogelijkheden om de kozijnen perfect aan te laten sluiten bij de architectuur 
                  van uw woning.
                </p>
              </AnimatedSection>
            </div>
            
            <div className="lg:w-1/3">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="rounded-lg overflow-hidden shadow-md mb-8">
                  <img 
                    src="/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png" 
                    alt="Schüco Kunststof Kozijnen" 
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300} className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Voordelen</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-green mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={400} className="bg-brand-green text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Interesse in Schüco?</h3>
                <p className="mb-4">
                  Onze adviseurs helpen u graag bij het maken van de juiste keuze uit het Schüco assortiment.
                </p>
                <button className="w-full bg-white text-brand-green hover:bg-gray-100 px-4 py-2 rounded font-medium transition-colors">
                  Vraag advies aan
                </button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Keurmerken en Certificeringen Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Keurmerken en certificeringen</h2>
            <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              Schüco kozijnen beschikken over alle belangrijke keurmerken en certificeringen die kwaliteit en duurzaamheid garanderen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                      <ShieldCheck className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold">KOMO-certificaat</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Het KOMO-keurmerk garandeert dat de kozijnen voldoen aan de Nederlandse eisen voor kwaliteit, veiligheid en duurzaamheid.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                      <ShieldCheck className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold">CE-markering</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    De CE-markering geeft aan dat de kozijnen voldoen aan de Europese richtlijnen voor bouwproducten.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green/10 p-2 rounded-full mr-3">
                      <Award className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold">RAL Gütezeichen</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Het Duitse RAL-keurmerk staat voor hoogwaardige kwaliteit en strenge productieprocessen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </SchucoTemplate>
  );
};

export default Schuco;
