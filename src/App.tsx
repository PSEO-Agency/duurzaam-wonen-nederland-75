
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";
import AdminWrapper from './components/admin/AdminWrapper';
import AdminLayout from './components/admin/AdminLayout';

// Lazy load pages
const Index = lazy(() => import('./pages/Index'));
const Oplossingen = lazy(() => import('./pages/Oplossingen'));
const KunststofKozijnen = lazy(() => import('./pages/KunststofKozijnen'));
const AluminiumKozijnen = lazy(() => import('./pages/AluminiumKozijnen'));
const KunststofSchuifpuien = lazy(() => import('./pages/KunststofSchuifpuien'));
const RentevrijeFinanciering = lazy(() => import('./pages/RentevrijeFinanciering'));
const OverOns = lazy(() => import('./pages/OverOns'));
const Contact = lazy(() => import('./pages/Contact'));
const Offerte = lazy(() => import('./pages/Offerte'));
const OfferteSuccess = lazy(() => import('./pages/OfferteSuccess'));
const Werkwijze = lazy(() => import('./pages/Werkwijze'));
const Vacatures = lazy(() => import('./pages/over-ons/Vacatures'));
const Werkgebied = lazy(() => import('./pages/Werkgebied'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const SitemapXML = lazy(() => import('./pages/SitemapXML'));
const RobotsTxt = lazy(() => import('./pages/RobotsTxt'));
const CityServicePage = lazy(() => import('./pages/CityServicePage'));

// New location pages
const RegionServicePage = lazy(() => import('./pages/RegionServicePage'));
const CityServicePageNew = lazy(() => import('./pages/CityServicePageNew'));

// Product pages
const ProductPage = lazy(() => import('./pages/ProductPage'));

// Project pages
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

// Job detail pages
const KunststofKozijnenMonteur = lazy(() => import('./pages/vacatures/KunststofKozijnenMonteur'));
const CommercieeelMedewerker = lazy(() => import('./pages/vacatures/CommercieeelMedewerker'));

// Kunststof Kozijnen subpages
const KozijnTypes = lazy(() => import('./pages/KozijnTypes'));
const ColorOptions = lazy(() => import('./pages/ColorOptions'));
const ColorDetail = lazy(() => import('./pages/ColorDetail'));
const KozijnSizes = lazy(() => import('./pages/KozijnSizes'));
const KozijnMontage = lazy(() => import('./pages/KozijnMontage'));
const KozijnPrices = lazy(() => import('./pages/KozijnPrices'));
const SchucoBrand = lazy(() => import('./pages/brands/SchucoBrand'));
const Draaikiepraam = lazy(() => import('./pages/types/Draaikiepraam'));
const Kozijn100x100 = lazy(() => import('./pages/sizes/Kozijn100x100'));
const KozijnenAfbetaling = lazy(() => import('./pages/prices/KozijnenAfbetaling'));
const KozijnenSubsidie = lazy(() => import('./pages/prices/KozijnenSubsidie'));
const KozijnenEnschede = lazy(() => import('./pages/locaties/KozijnenEnschede'));
const KozijnenInmeten = lazy(() => import('./pages/services/KozijnenInmeten'));

// Profile pages
const ProfilesOverview = lazy(() => import('./pages/ProfilesOverview'));
const Living82 = lazy(() => import('./pages/profielen/Living82'));
const CT70AS = lazy(() => import('./pages/profielen/CT70AS'));

// Admin pages
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminPages = lazy(() => import('./pages/admin/Pages'));
const AdminLocations = lazy(() => import('./pages/admin/Locations'));
const AdminServices = lazy(() => import('./pages/admin/Services'));
const AdminCityServices = lazy(() => import('./pages/admin/CityServices'));
const AdminProjects = lazy(() => import('./pages/admin/Projects'));
const AdminProducts = lazy(() => import('./pages/admin/Products'));
const AdminProductEditor = lazy(() => import('./pages/admin/ProductEditor'));

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <AdminWrapper>
            <Suspense fallback={<div>Loading...</div>}>
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
                
                {/* Project routes */}
                <Route path="/projecten" element={<Projects />} />
                <Route path="/projecten/:projectId" element={<ProjectDetail />} />
                
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
                <Route path="/kunststof-kozijnen/locaties/enschede" element={<KozijnenEnschede />} />
                <Route path="/kunststof-kozijnen/services/inmeten" element={<KozijnenInmeten />} />
                
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
                </Route>
              </Routes>
            </Suspense>
          </AdminWrapper>
          <Toaster />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
