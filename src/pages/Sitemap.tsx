import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import { ListTree } from 'lucide-react';

// Define site structure with nested pages
const siteStructure = [
  {
    title: 'Home',
    path: '/',
    description: 'Startpagina van Duurzaam Wonen Nederland',
  },
  {
    title: 'Kunststof Kozijnen',
    path: '/kunststof-kozijnen',
    description: 'Alles over kunststof kozijnen',
    children: [
      {
        title: 'Kleuren',
        path: '/kunststof-kozijnen/kleuren',
        description: 'Beschikbare kleuren voor kunststof kozijnen',
        children: [
          {
            title: 'Kleur opties',
            path: '/kunststof-kozijnen/kleuren',
            description: 'Alle beschikbare kleuropties',
          }
        ]
      },
      {
        title: 'Types',
        path: '/kunststof-kozijnen/types',
        description: 'Verschillende types kunststof kozijnen',
        children: [
          {
            title: 'Draaikiepraam',
            path: '/kunststof-kozijnen/types/draaikiepraam',
            description: 'Informatie over draaikiepramen',
          }
        ]
      },
      {
        title: 'Afmetingen',
        path: '/kunststof-kozijnen/afmetingen',
        description: 'Standaard en op maat gemaakte afmetingen',
        children: [
          {
            title: '100x100 kozijn',
            path: '/kunststof-kozijnen/afmetingen/100x100',
            description: 'Standaard 100x100 kozijn informatie',
          }
        ]
      },
      {
        title: 'Montage',
        path: '/kunststof-kozijnen/montage',
        description: 'Montage van kunststof kozijnen',
      },
      {
        title: 'Prijzen',
        path: '/kunststof-kozijnen/prijzen',
        description: 'Prijsinformatie over kunststof kozijnen',
        children: [
          {
            title: 'Afbetaling',
            path: '/kunststof-kozijnen/prijzen/afbetaling',
            description: 'Afbetalingsmogelijkheden voor kozijnen',
          },
          {
            title: 'Subsidie',
            path: '/kunststof-kozijnen/prijzen/subsidie',
            description: 'Beschikbare subsidies voor kozijnen',
          }
        ]
      },
      {
        title: 'Merken',
        path: '/kunststof-kozijnen/merken',
        description: 'Verschillende merken kunststof kozijnen',
        children: [
          {
            title: 'Schuco',
            path: '/kunststof-kozijnen/merken/schuco',
            description: 'Schuco kunststof kozijnen informatie',
          }
        ]
      },
      {
        title: 'Services',
        description: 'Onze diensten voor kunststof kozijnen',
        children: [
          {
            title: 'Inmeten',
            path: '/kunststof-kozijnen/services/inmeten',
            description: 'Kozijnen inmeetservice',
          },
          {
            title: 'Montage',
            path: '/kunststof-kozijnen/services/montage',
            description: 'Kozijnen montageservice',
          },
          {
            title: 'Reparatie',
            path: '/kunststof-kozijnen/services/reparatie',
            description: 'Kozijnen reparatieservice',
          }
        ]
      },
      {
        title: 'Locaties',
        description: 'Kozijnen in verschillende regio\'s',
        children: [
          {
            title: 'Enschede',
            path: '/kunststof-kozijnen/locaties/enschede',
            description: 'Kunststof kozijnen in Enschede',
          }
        ]
      }
    ]
  },
  {
    title: 'Projecten',
    path: '/projecten',
    description: 'Onze afgeronde projecten',
  },
  {
    title: 'Over Ons',
    path: '/over-ons',
    description: 'Over Duurzaam Wonen Nederland',
    children: [
      {
        title: 'Team',
        path: '/over-ons/team',
        description: 'Ons team',
      },
      {
        title: 'Geschiedenis',
        path: '/over-ons/geschiedenis',
        description: 'Onze geschiedenis',
      },
      {
        title: 'Missie',
        path: '/over-ons/missie',
        description: 'Onze missie',
      },
      {
        title: 'Duurzaamheid',
        path: '/over-ons/duurzaamheid',
        description: 'Onze duurzaamheidsvisie',
      },
      {
        title: 'Vacatures',
        path: '/over-ons/vacatures',
        description: 'Werken bij Duurzaam Wonen Nederland',
      }
    ]
  },
  {
    title: 'Kennisbank',
    path: '/kennisbank',
    description: 'Artikelen en informatie over verduurzaming',
  },
  {
    title: 'Blog',
    path: '/blog',
    description: 'Onze blog met nieuws en inzichten',
  },
  {
    title: 'Werkgebied',
    path: '/werkgebied',
    description: 'Ons werkgebied in Nederland',
  },
  {
    title: 'Showroom',
    path: '/showroom',
    description: 'Onze showroom in Enschede',
  },
  {
    title: 'Werkwijze',
    path: '/werkwijze',
    description: 'Onze werkwijze van A tot Z',
  },
  {
    title: 'Contact',
    path: '/contact',
    description: 'Neem contact met ons op',
  },
  {
    title: 'Offerte',
    path: '/offerte',
    description: 'Vraag een vrijblijvende offerte aan',
  }
];

// Component to render a page item with its children recursively
const PageItem: React.FC<{
  page: {
    title: string;
    path?: string;
    description?: string;
    children?: Array<{
      title: string;
      path?: string;
      description?: string;
      children?: any[];
    }>;
  };
  level: number;
}> = ({ page, level }) => {
  return (
    <div className={`mb-${level === 0 ? '8' : '4'} pl-${level * 4}`}>
      <div className={`mb-2 ${level === 0 ? 'border-b border-gray-200 pb-2' : ''}`}>
        {page.path ? (
          <Link 
            to={page.path} 
            className={`${level === 0 ? 'text-xl font-bold text-brand-green' : 'text-lg font-semibold text-gray-800'} hover:underline flex items-center`}
          >
            {level === 0 && <ListTree className="mr-2 h-5 w-5" />}
            {page.title}
          </Link>
        ) : (
          <div className={`${level === 0 ? 'text-xl font-bold text-brand-green' : 'text-lg font-semibold text-gray-800'} flex items-center`}>
            {level === 0 && <ListTree className="mr-2 h-5 w-5" />}
            {page.title}
          </div>
        )}
        {page.description && <p className="text-gray-600 text-sm mt-1">{page.description}</p>}
      </div>
      {page.children && page.children.length > 0 && (
        <div className={`pl-${level === 0 ? '0' : '4'}`}>
          {page.children.map((child, index) => (
            <PageItem key={index} page={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Bekijk de volledige sitemap van Duurzaam Wonen Nederland om snel de gewenste pagina te vinden." />
        <link rel="canonical" href="https://duurzaamwonen.info/sitemap" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Sitemap</h1>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Hieronder vindt u een overzicht van alle pagina's op onze website. Gebruik deze sitemap om snel te navigeren naar de informatie die u zoekt.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={100}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {siteStructure.map((page, index) => (
                <PageItem key={index} page={page} level={0} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Sitemap;
