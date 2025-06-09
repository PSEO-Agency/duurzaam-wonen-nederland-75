
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import SolutionsBenefits from '@/components/solutions/SolutionsBenefits';
import ContactCTA from '@/components/ContactCTA';
import { useProducts } from '@/hooks/useProducts';

const Products: React.FC = () => {
  const { data: products = [], isLoading } = useProducts();

  const heroData = {
    title: "Onze Producten",
    subtitle: "Hoogwaardige duurzame producten voor uw woning",
    description: "Ontdek ons uitgebreide assortiment aan duurzame producten. Van energie-efficiënte oplossingen tot milieuvriendelijke materialen - wij bieden kwaliteitsproducten die bijdragen aan een duurzame toekomst.",
    backgroundImage: "/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Producten | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek ons uitgebreide assortiment aan duurzame producten voor uw woning. Hoogwaardige, energie-efficiënte en milieuvriendelijke oplossingen." />
        <link rel="canonical" href="https://duurzaamwonen.info/producten" />
        <meta property="og:title" content="Producten | Duurzaam Wonen Nederland" />
        <meta property="og:description" content="Ontdek ons uitgebreide assortiment aan duurzame producten voor uw woning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duurzaamwonen.info/producten" />
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-20">
        <SolutionsHero {...heroData} />
        <SolutionsOverview 
          items={products} 
          isLoading={isLoading}
          itemType="product"
          basePath="/producten"
        />
        <SolutionsBenefits />
        <ContactCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Products;
