
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AdminProvider } from "@/contexts/AdminContext";
import { SearchProvider } from "@/contexts/SearchContext";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import CookieConsent from "@/components/CookieConsent";
import AdminWrapper from "@/components/admin/AdminWrapper";
import AdminLayout from "@/components/admin/AdminLayout";
import ProtectedAdminRoute from "@/components/admin/ProtectedAdminRoute";

// Import all pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import OverOns from "./pages/OverOns";
import KunststofKozijnen from "./pages/KunststofKozijnen";
import AluminiumKozijnen from "./pages/AluminiumKozijnen";
import KunststofSchuifpuien from "./pages/KunststofSchuifpuien";
import Werkwijze from "./pages/Werkwijze";
import RentevrijeFinanciering from "./pages/RentevrijeFinanciering";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Offerte from "./pages/Offerte";
import OfferteSuccess from "./pages/OfferteSuccess";
import Werkgebied from "./pages/Werkgebied";
import Showroom from "./pages/Showroom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductPage from "./pages/ProductPage";
import CityServicePage from "./pages/CityServicePage";
import CityServicePageNew from "./pages/CityServicePageNew";
import RegionServicePage from "./pages/RegionServicePage";
import ColorOptions from "./pages/ColorOptions";
import ColorDetail from "./pages/ColorDetail";
import KozijnTypes from "./pages/KozijnTypes";
import KozijnBrands from "./pages/KozijnBrands";
import KozijnSizes from "./pages/KozijnSizes";
import KozijnPrices from "./pages/KozijnPrices";
import KozijnMontage from "./pages/KozijnMontage";
import Sitemap from "./pages/Sitemap";
import SitemapXML from "./pages/SitemapXML";
import RobotsTxt from "./pages/RobotsTxt";

// Admin pages
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Pages from "./pages/admin/Pages";
import PageEditor from "./pages/admin/PageEditor";
import Templates from "./pages/admin/Templates";
import Sections from "./pages/admin/Sections";
import SectionEditor from "./pages/admin/SectionEditor";
import Products from "./pages/admin/Products";
import ProductEditor from "./pages/admin/ProductEditor";
import Locations from "./pages/admin/Locations";
import Services from "./pages/admin/Services";
import CityServices from "./pages/admin/CityServices";
import AdminProjects from "./pages/admin/Projects";

// Location-specific pages
import KozijnenEnschede from "./pages/locaties/KozijnenEnschede";

// Over ons subpages
import Team from "./pages/over-ons/Team";
import Missie from "./pages/over-ons/Missie";
import Duurzaamheid from "./pages/over-ons/Duurzaamheid";
import Vacatures from "./pages/over-ons/Vacatures";

// Vacature pages
import CommercieeelMedewerker from "./pages/vacatures/CommercieeelMedewerker";
import KunststofKozijnenMonteur from "./pages/vacatures/KunststofKozijnenMonteur";

// Service-specific pages
import KozijnenInmeten from "./pages/services/KozijnenInmeten";

// Price-specific pages
import KozijnenAfbetaling from "./pages/prices/KozijnenAfbetaling";
import KozijnenSubsidie from "./pages/prices/KozijnenSubsidie";

// Size-specific pages
import Kozijn100x100 from "./pages/sizes/Kozijn100x100";

// Profile-specific pages
import CT70AS from "./pages/profielen/CT70AS";
import Living82 from "./pages/profielen/Living82";

// Type-specific pages
import Draaikiepraam from "./pages/types/Draaikiepraam";

// Brand-specific pages
import SchucoBrand from "./pages/brands/SchucoBrand";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AdminProvider>
              <SearchProvider>
                <ScrollToTopOnNavigate />
                <Routes>
                  {/* Admin routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Dashboard />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/pages" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Pages />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/pages/:id" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <PageEditor />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/templates" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Templates />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/sections" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Sections />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/sections/:id" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <SectionEditor />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/products" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Products />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/products/:id" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <ProductEditor />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/locations" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Locations />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/services" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Services />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/city-services" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <CityServices />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/projects" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <AdminProjects />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />

                  {/* Public routes */}
                  <Route path="/" element={<AdminWrapper><Index /></AdminWrapper>} />
                  <Route path="/contact" element={<AdminWrapper><Contact /></AdminWrapper>} />
                  <Route path="/over-ons" element={<AdminWrapper><OverOns /></AdminWrapper>} />
                  <Route path="/over-ons/team" element={<AdminWrapper><Team /></AdminWrapper>} />
                  <Route path="/over-ons/missie" element={<AdminWrapper><Missie /></AdminWrapper>} />
                  <Route path="/over-ons/duurzaamheid" element={<AdminWrapper><Duurzaamheid /></AdminWrapper>} />
                  <Route path="/over-ons/vacatures" element={<AdminWrapper><Vacatures /></AdminWrapper>} />
                  <Route path="/kunststof-kozijnen" element={<AdminWrapper><KunststofKozijnen /></AdminWrapper>} />
                  <Route path="/aluminium-kozijnen" element={<AdminWrapper><AluminiumKozijnen /></AdminWrapper>} />
                  <Route path="/kunststof-schuifpuien" element={<AdminWrapper><KunststofSchuifpuien /></AdminWrapper>} />
                  <Route path="/werkwijze" element={<AdminWrapper><Werkwijze /></AdminWrapper>} />
                  <Route path="/rentevrije-financiering" element={<AdminWrapper><RentevrijeFinanciering /></AdminWrapper>} />
                  <Route path="/projecten" element={<AdminWrapper><Projects /></AdminWrapper>} />
                  <Route path="/projecten/:id" element={<AdminWrapper><ProjectDetail /></AdminWrapper>} />
                  <Route path="/offerte" element={<AdminWrapper><Offerte /></AdminWrapper>} />
                  <Route path="/offerte/success" element={<AdminWrapper><OfferteSuccess /></AdminWrapper>} />
                  <Route path="/werkgebied" element={<AdminWrapper><Werkgebied /></AdminWrapper>} />
                  <Route path="/showroom" element={<AdminWrapper><Showroom /></AdminWrapper>} />
                  <Route path="/privacy-policy" element={<AdminWrapper><PrivacyPolicy /></AdminWrapper>} />
                  <Route path="/sitemap" element={<AdminWrapper><Sitemap /></AdminWrapper>} />
                  <Route path="/sitemap.xml" element={<SitemapXML />} />
                  <Route path="/robots.txt" element={<RobotsTxt />} />

                  {/* Dynamic product routes */}
                  <Route path="/:productSlug" element={<AdminWrapper><ProductPage /></AdminWrapper>} />
                  <Route path="/:productSlug/locaties/:citySlug" element={<AdminWrapper><CityServicePage /></AdminWrapper>} />
                  <Route path="/:productSlug/locatie/:citySlug" element={<AdminWrapper><CityServicePageNew /></AdminWrapper>} />
                  <Route path="/:productSlug/regio/:regionSlug" element={<AdminWrapper><RegionServicePage /></AdminWrapper>} />

                  {/* Location routes */}
                  <Route path="/kunststof-kozijnen/locaties/enschede" element={<AdminWrapper><KozijnenEnschede /></AdminWrapper>} />

                  {/* Service routes */}
                  <Route path="/kozijnen-inmeten" element={<AdminWrapper><KozijnenInmeten /></AdminWrapper>} />

                  {/* Color routes */}
                  <Route path="/kleuren" element={<AdminWrapper><ColorOptions /></AdminWrapper>} />
                  <Route path="/kleuren/:colorSlug" element={<AdminWrapper><ColorDetail /></AdminWrapper>} />

                  {/* Type routes */}
                  <Route path="/types" element={<AdminWrapper><KozijnTypes /></AdminWrapper>} />
                  <Route path="/types/:typeSlug" element={<AdminWrapper><Draaikiepraam /></AdminWrapper>} />

                  {/* Brand routes */}
                  <Route path="/merken" element={<AdminWrapper><KozijnBrands /></AdminWrapper>} />
                  <Route path="/merken/:brandSlug" element={<AdminWrapper><SchucoBrand /></AdminWrapper>} />

                  {/* Size routes */}
                  <Route path="/afmetingen" element={<AdminWrapper><KozijnSizes /></AdminWrapper>} />
                  <Route path="/afmetingen/:sizeSlug" element={<AdminWrapper><Kozijn100x100 /></AdminWrapper>} />

                  {/* Price routes */}
                  <Route path="/prijzen" element={<AdminWrapper><KozijnPrices /></AdminWrapper>} />
                  <Route path="/kozijnen-afbetaling" element={<AdminWrapper><KozijnenAfbetaling /></AdminWrapper>} />
                  <Route path="/kozijnen-subsidie" element={<AdminWrapper><KozijnenSubsidie /></AdminWrapper>} />

                  {/* Profile routes */}
                  <Route path="/profielen/ct70as" element={<AdminWrapper><CT70AS /></AdminWrapper>} />
                  <Route path="/profielen/living82" element={<AdminWrapper><Living82 /></AdminWrapper>} />

                  {/* Assembly routes */}
                  <Route path="/kozijnen-montage" element={<AdminWrapper><KozijnMontage /></AdminWrapper>} />

                  {/* Vacature routes */}
                  <Route path="/vacatures/commercieel-medewerker" element={<AdminWrapper><CommercieeelMedewerker /></AdminWrapper>} />
                  <Route path="/vacatures/kunststof-kozijnen-monteur" element={<AdminWrapper><KunststofKozijnenMonteur /></AdminWrapper>} />

                  {/* 404 Route */}
                  <Route path="*" element={<AdminWrapper><NotFound /></AdminWrapper>} />
                </Routes>
                <CookieConsent />
              </SearchProvider>
            </AdminProvider>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
