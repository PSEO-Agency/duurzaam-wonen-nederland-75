
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
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import Reviews from '@/components/Reviews';
import SolutionHero from '@/components/solution/SolutionHero';
import SolutionBenefits from '@/components/solution/SolutionBenefits';
import SolutionFeatures from '@/components/solution/SolutionFeatures';
import SolutionProjects from '@/components/solution/SolutionProjects';
import SolutionFAQ from '@/components/solution/SolutionFAQ';
import SolutionWorkflow from '@/components/solution/SolutionWorkflow';
import SolutionLocations from '@/components/solution/SolutionLocations';
import SolutionRelated from '@/components/solution/SolutionRelated';
import { useSolutions } from '@/hooks/useSolutions';

interface QuickLink {
  label: string;
  href: string;
}

interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

interface Feature {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  location: string;
  completion_date: string;
  project_type: string;
}

interface SolutionData {
  id: string;
  name: string;
  slug: string;
  description: string;
  hero_title: string;
  hero_description: string;
  hero_image_url: string;
  intro_text: string;
  what_are_description: string;
  quick_links: QuickLink[];
  benefits: Benefit[];
  features: Feature[];
  pricing_info: string;
  faq: FAQItem[];
  workflow_steps: WorkflowStep[];
  meta_title: string;
  meta_description: string;
  projects?: Project[];
}

interface SolutionTemplateProps {
  solution: SolutionData;
  relatedSolutions?: SolutionData[];
}

const SolutionTemplate: React.FC<SolutionTemplateProps> = ({ 
  solution, 
  relatedSolutions = [] 
}) => {
  const { data: allSolutions = [] } = useSolutions();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{solution.meta_title || solution.name} | Duurzaam Wonen Nederland</title>
        <meta name="description" content={solution.meta_description || solution.description} />
        <link rel="canonical" href={`https://duurzaamwonen.info/${solution.slug}`} />
        <meta property="og:title" content={solution.meta_title || solution.name} />
        <meta property="og:description" content={solution.meta_description || solution.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://duurzaamwonen.info/${solution.slug}`} />
        {solution.hero_image_url && (
          <meta property="og:image" content={solution.hero_image_url} />
        )}
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
                  <BreadcrumbLink asChild>
                    <Link to="/oplossingen">Oplossingen</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{solution.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <SolutionHero solution={solution} />

        {/* Intro Section */}
        {solution.intro_text && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {solution.intro_text}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* What Are Section */}
        {solution.what_are_description && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Wat zijn {solution.name}?
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {solution.what_are_description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <SolutionBenefits benefits={solution.benefits} />

        {/* Features Section */}
        <SolutionFeatures features={solution.features} />

        {/* Related Solutions Section */}
        <SolutionRelated solutions={allSolutions} />

        {/* Recent Projects Section */}
        <SolutionProjects projects={solution.projects || []} />

        {/* FAQ Section */}
        <SolutionFAQ faq={solution.faq} />

        {/* Workflow Section */}
        <SolutionWorkflow workflowSteps={solution.workflow_steps} />

        {/* Reviews Section */}
        <Reviews />

        {/* Locations Section */}
        <SolutionLocations />

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SolutionTemplate;
