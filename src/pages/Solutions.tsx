
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ContactCTA from '@/components/ContactCTA';
import LoadingScreen from '@/components/LoadingScreen';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import SolutionsBenefits from '@/components/solutions/SolutionsBenefits';
import { useSolutions, useSolutionCategories } from '@/hooks/useSolutions';

const Solutions: React.FC = () => {
  const { data: solutions = [], isLoading: isLoadingSolutions } = useSolutions();
  const { data: categories = [], isLoading: isLoadingCategories } = useSolutionCategories();

  if (isLoadingSolutions || isLoadingCategories) {
    return <LoadingScreen />;
  }

  // Group solutions by category
  const solutionsByCategory = categories.map(category => ({
    ...category,
    solutions: solutions.filter(solution => solution.category_id === category.id)
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Oplossingen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Ontdek onze complete range van duurzame woningverduurzaming oplossingen. Van kunststof kozijnen tot gevelbekleding - alles voor een energiezuinige woning." />
        <link rel="canonical" href="https://duurzaamwonen.info/oplossingen" />
        <meta property="og:title" content="Oplossingen | Duurzaam Wonen Nederland" />
        <meta property="og:description" content="Ontdek onze complete range van duurzame woningverduurzaming oplossingen. Van kunststof kozijnen tot gevelbekleding - alles voor een energiezuinige woning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duurzaamwonen.info/oplossingen" />
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-20">
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Oplossingen</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <SolutionsHero />

        {/* Solutions Overview */}
        <SolutionsOverview solutionsByCategory={solutionsByCategory} />

        {/* Benefits Section */}
        <SolutionsBenefits />

        {/* Reviews Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <iframe 
                className="lc_reviews_widget w-full h-[600px] md:h-[600px]" 
                src="https://reputationhub.site/reputation/widgets/review_widget/3aRsj8TT2qcU3nkx3kWm" 
                frameBorder="0" 
                scrolling="yes"
                style={{ 
                  minWidth: '100%', 
                  width: '100%', 
                  height: '600px'
                }}
                title="Customer Reviews"
              />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Solutions;
