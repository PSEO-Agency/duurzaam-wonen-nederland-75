
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";
import AdminWrapper from './components/admin/AdminWrapper';
import AdminLayout from './components/admin/AdminLayout';
import RedirectHandler from './components/RedirectHandler';

// Direct imports instead of lazy loading for faster loading
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Oplossingen from './pages/Oplossingen';
import KunststofKozijnen from './pages/KunststofKozijnen';
import AluminiumKozijnen from './pages/AluminiumKozijnen';
import KunststofSchuifpuien from './pages/KunststofSchuifpuien';
import RentevrijeFinanciering from './pages/RentevrijeFinanciering';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';
import Offerte from './pages/Offerte';
import OfferteSuccess from './pages/OfferteSuccess';
import Werkwijze from './pages/Werkwijze';
import Vacatures from './pages/over-ons/Vacatures';
import Werkgebied from './pages/Werkgebied';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';
import SitemapXML from './pages/SitemapXML';
import RobotsTxt from './pages/RobotsTxt';
import CityServicePage from './pages/CityServicePage';

// New location pages
import RegionServicePage from './pages/RegionServicePage';
import CityServicePageNew from './pages/CityServicePageNew';

// Product pages
import ProductPage from './pages/ProductPage';

// Project pages
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

// Job detail pages
import KunststofKozijnenMonteur from './pages/vacatures/KunststofKozijnenMonteur';
import CommercieeelMedewerker from './pages/vacatures/CommercieeelMedewerker';

// Kunststof Kozijnen subpages
import KozijnTypes from './pages/KozijnTypes';
import ColorOptions from './pages/ColorOptions';
import ColorDetail from './pages/ColorDetail';
import KozijnSizes from './pages/KozijnSizes';
import KozijnMontage from './pages/KozijnMontage';
import KozijnPrices from './pages/KozijnPrices';
import SchucoBrand from './pages/brands/SchucoBrand';
import Draaikiepraam from './pages/types/Draaikiepraam';
import Kozijn100x100 from './pages/sizes/Kozijn100x100';
import KozijnenAfbetaling from './pages/prices/KozijnenAfbetaling';
import KozijnenSubsidie from './pages/prices/KozijnenSubsidie';
import KozijnenEnschede from './pages/locaties/KozijnenEnschede';

// Profile pages
import ProfilesOverview from './pages/ProfilesOverview';
import Living82 from './pages/profielen/Living82';
import CT70AS from './pages/profielen/CT70AS';

// Admin pages
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminPages from './pages/admin/Pages';
import AdminLocations from './pages/admin/Locations';
import AdminServices from './pages/admin/Services';
import AdminCityServices from './pages/admin/CityServices';
import AdminProjects from './pages/admin/Projects';
import AdminProducts from './pages/admin/Products';
import AdminProductEditor from './pages/admin/ProductEditor';
import AdminOGImages from './pages/admin/OGImages';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <AdminWrapper>
            <RedirectHandler />
            <Routes>
              {/* SEO Routes */}
              <Route path="/sitemap.xml" element={<SitemapXML />} />
              <Route path="/robots.txt" element={<RobotsTxt />} />
              
              {/* Main pages */}
              <Route path="/" element={<Index />} />
              <Route path="/oplossingen" element={<Oplossingen />} />
              <Route path="/kunststof-kozijnen" element={<KunststofKozijnen />} />
              <Route path="/aluminium-kozijnen" element={<AluminiumKozijnen />} />
              <Route path="/kunststof-schuifpuien" element={<KunststofSchuifpuien />} />
              <Route path="/rentevrije-financiering" element={<RentevrijeFinanciering />} />
              <Route path="/over-ons" element={<OverOns />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/offerte" element={<Offerte />} />
              <Route path="/offerte/success" element={<OfferteSuccess />} />
              <Route path="/werkwijze" element={<Werkwijze />} />
              <Route path="/vacatures" element={<Vacatures />} />
              <Route path="/werkgebied" element={<Werkgebied />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Product routes - using ProductPage component */}
              <Route path="/gevelbekleding" element={<ProductPage />} />
              <Route path="/hr-beglazing" element={<ProductPage />} />
              <Route path="/dakkapel" element={<ProductPage />} />
              <Route path="/kunststof-deuren" element={<ProductPage />} />
              <Route path="/raamdecoratie" element={<ProductPage />} />
              
              {/* Project routes */}
              <Route path="/projecten" element={<Projects />} />
              <Route path="/projecten/:projectSlug" element={<ProjectDetail />} />
              
              {/* Job detail routes */}
              <Route path="/vacatures/kunststof-kozijnen-monteur" element={<KunststofKozijnenMonteur />} />
              <Route path="/vacatures/commercieel-medewerker" element={<CommercieeelMedewerker />} />
              
              {/* Kunststof Kozijnen subpage routes */}
              <Route path="/kunststof-kozijnen/types" element={<KozijnTypes />} />
              <Route path="/kunststof-kozijnen/types/draaikiepraam" element={<Draaikiepraam />} />
              <Route path="/kunststof-kozijnen/kleuren" element={<ColorOptions />} />
              <Route path="/kunststof-kozijnen/kleuren/:colorSlug" element={<ColorDetail />} />
              <Route path="/kunststof-kozijnen/afmetingen" element={<KozijnSizes />} />
              <Route path="/kunststof-kozijnen/afmetingen/100x100" element={<Kozijn100x100 />} />
              <Route path="/kunststof-kozijnen/montage" element={<KozijnMontage />} />
              <Route path="/kunststof-kozijnen/prijzen" element={<KozijnPrices />} />
              <Route path="/kunststof-kozijnen/prijzen/afbetaling" element={<KozijnenAfbetaling />} />
              <Route path="/kunststof-kozijnen/prijzen/subsidie" element={<KozijnenSubsidie />} />
              <Route path="/kunststof-kozijnen/schuco" element={<SchucoBrand />} />
              
              
              {/* Profile routes */}
              <Route path="/kunststof-kozijnen/profielen" element={<ProfilesOverview />} />
              <Route path="/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel" element={<Living82 />} />
              <Route path="/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel" element={<CT70AS />} />
              
              {/* New URL structure - /{service}/{region}/{city} */}
              <Route path="/:serviceSlug/:regionSlug/:citySlug" element={<CityServicePageNew />} />
              <Route path="/:serviceSlug/:regionSlug" element={<RegionServicePage />} />
              
              {/* Old URL structure for backward compatibility - /diensten/{city}/{service} */}
              <Route path="/diensten/:citySlug/:serviceSlug" element={<CityServicePage />} />
              
              {/* Admin login route (standalone, not in AdminLayout) */}
              <Route path="/admin/login" element={<AdminLogin />} />
              
              {/* Admin routes with AdminLayout wrapper - all protected by AdminAuthGuard */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="pages" element={<AdminPages />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="products/create" element={<AdminProductEditor />} />
                <Route path="products/edit/:productId" element={<AdminProductEditor />} />
                <Route path="locations" element={<AdminLocations />} />
                <Route path="services" element={<AdminServices />} />
                <Route path="city-services" element={<AdminCityServices />} />
                <Route path="projects" element={<AdminProjects />} />
                <Route path="og-images" element={<AdminOGImages />} />
              </Route>

              {/* Catch-all route for 404 pages - MUST be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AdminWrapper>
          <Toaster />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
