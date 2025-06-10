import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import LoadingScreen from "./components/LoadingScreen";
import CookieConsent from "./components/CookieConsent";
import AdminWrapper from "./components/admin/AdminWrapper";

import { SearchProvider } from "./contexts/SearchContext";
import { CmsProvider } from "./contexts/CmsContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <CmsProvider>
            <SearchProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTopOnNavigate />
                <LoadingScreen />
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/kunststof-kozijnen" element={<KunststofKozijnen />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/offerte" element={<Offerte />} />
                  <Route path="/offerte/bedankt" element={<OfferteSuccess />} />
                  <Route path="/over-ons" element={<OverOns />} />
                  <Route path="/projecten" element={<Projects />} />
                  <Route path="/projecten/:slug" element={<ProjectDetail />} />
                  <Route path="/aluminium-kozijnen" element={<AluminiumKozijnen />} />
                  <Route path="/kunststof-schuifpuien" element={<KunststofSchuifpuien />} />
                  <Route path="/showroom" element={<Showroom />} />
                  <Route path="/werkwijze" element={<Werkwijze />} />
                  <Route path="/werkgebied" element={<Werkgebied />} />
                  <Route path="/rentevrije-financiering" element={<RentevrijeFinanciering />} />
                  <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route path="/zoeken" element={<Zoeken />} />

                  {/* Dynamic routes */}
                  <Route path="/product/:slug" element={<ProductPage />} />
                  <Route path="/:city/:service" element={<CityServicePage />} />

                  {/* Product type pages */}
                  <Route path="/kozijn-types" element={<KozijnTypes />} />
                  <Route path="/kozijn-types/draaikiepraam" element={<Draaikiepraam />} />

                  {/* Color pages */}
                  <Route path="/kozijn-kleuren" element={<ColorOptions />} />
                  <Route path="/kozijn-kleuren/:color" element={<ColorDetail />} />

                  {/* Size pages */}
                  <Route path="/kozijn-maten" element={<KozijnSizes />} />
                  <Route path="/kozijn-maten/100x100" element={<Kozijn100x100 />} />

                  {/* Brand pages */}
                  <Route path="/kozijn-merken" element={<KozijnBrands />} />
                  <Route path="/kozijn-merken/schuco" element={<SchucoBrand />} />

                  {/* Service pages */}
                  <Route path="/kozijnen-inmeten" element={<KozijnenInmeten />} />

                  {/* Price pages */}
                  <Route path="/kozijn-prijzen" element={<KozijnPrices />} />
                  <Route path="/kozijn-prijzen/afbetaling" element={<KozijnenAfbetaling />} />
                  <Route path="/kozijn-prijzen/subsidie" element={<KozijnenSubsidie />} />

                  {/* Montage page */}
                  <Route path="/kozijn-montage" element={<KozijnMontage />} />

                  {/* Location pages */}
                  <Route path="/kozijnen-enschede" element={<KozijnenEnschede />} />

                  {/* About us pages */}
                  <Route path="/over-ons/team" element={<Team />} />
                  <Route path="/over-ons/missie" element={<Missie />} />
                  <Route path="/over-ons/duurzaamheid" element={<Duurzaamheid />} />
                  <Route path="/over-ons/vacatures" element={<Vacatures />} />

                  {/* Admin routes */}
                  <Route path="/admin/*" element={
                    <AdminWrapper>
                      <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="pages" element={<Pages />} />
                        <Route path="pages/new" element={<PageEditor />} />
                        <Route path="pages/edit/:pageId" element={<PageEditor />} />
                        <Route path="templates" element={<Templates />} />
                        <Route path="sections" element={<Sections />} />
                        <Route path="sections/new" element={<SectionEditor />} />
                        <Route path="sections/edit/:sectionId" element={<SectionEditor />} />
                        <Route path="products" element={<AdminProducts />} />
                        <Route path="products/new" element={<ProductEditor />} />
                        <Route path="products/edit/:productId" element={<ProductEditor />} />
                        <Route path="faqs" element={<AdminFaqs />} />
                        <Route path="projects" element={<AdminProjects />} />
                        <Route path="locations" element={<Locations />} />
                        <Route path="services" element={<Services />} />
                        <Route path="city-services" element={<CityServices />} />
                      </Routes>
                    </AdminWrapper>
                  } />

                  {/* 404 route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <CookieConsent />
              </BrowserRouter>
            </SearchProvider>
          </CmsProvider>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
