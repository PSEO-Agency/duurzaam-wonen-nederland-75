
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KunststofKozijnen from "./pages/KunststofKozijnen";
import KunststofSchuifpuien from "./pages/KunststofSchuifpuien";
import ColorOptions from "./pages/ColorOptions";
import ColorDetail from "./pages/ColorDetail";
import KozijnTypes from "./pages/KozijnTypes";
import KozijnSizes from "./pages/KozijnSizes";
import KozijnMontage from "./pages/KozijnMontage";
import KozijnPrices from "./pages/KozijnPrices";
import KozijnBrands from "./pages/KozijnBrands";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Werkgebied from "./pages/Werkgebied";
import Contact from "./pages/Contact";
import Zoeken from "./pages/Zoeken";
import RentevrijeFinanciering from "./pages/RentevrijeFinanciering";
import Werkwijze from "./pages/Werkwijze";
import OverOns from "./pages/OverOns";
import Team from "./pages/over-ons/Team";
import Missie from "./pages/over-ons/Missie";
import Duurzaamheid from "./pages/over-ons/Duurzaamheid";
import Vacatures from "./pages/over-ons/Vacatures";
import Offerte from "./pages/Offerte";
import OfferteSuccess from "./pages/OfferteSuccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import KozijnenEnschede from "./pages/locaties/KozijnenEnschede";
import KozijnenInmeten from "./pages/services/KozijnenInmeten";
import Draaikiepraam from "./pages/types/Draaikiepraam";
import Kozijn100x100 from "./pages/sizes/Kozijn100x100";
import SchucoBrand from "./pages/brands/SchucoBrand";
import KozijnenAfbetaling from "./pages/prices/KozijnenAfbetaling";
import KozijnenSubsidie from "./pages/prices/KozijnenSubsidie";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Templates from "./pages/admin/Templates";
import Pages from "./pages/admin/Pages";
import PageEditor from "./pages/admin/PageEditor";
import Sections from "./pages/admin/Sections";
import SectionEditor from "./pages/admin/SectionEditor";
import Sitemap from "./pages/Sitemap";
import Locations from "./pages/admin/Locations";
import Services from "./pages/admin/Services";
import CityServices from "./pages/admin/CityServices";
import CityServicePage from "./pages/CityServicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SearchProvider>
          <Routes>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="templates" element={<Templates />} />
              <Route path="pages" element={<Pages />} />
              <Route path="pages/edit/:pageId" element={<PageEditor />} />
              <Route path="pages/create" element={<PageEditor />} />
              <Route path="sections" element={<Sections />} />
              <Route path="sections/edit/:sectionId" element={<SectionEditor />} />
              <Route path="settings" element={<Dashboard />} />
              <Route path="users" element={<Dashboard />} />
              <Route path="locations" element={<Locations />} />
              <Route path="services" element={<Services />} />
              <Route path="city-services" element={<CityServices />} />
            </Route>
            
            <Route path="/" element={<Index />} />
            <Route path="/offerte" element={<Offerte />} />
            <Route path="/offerte/success" element={<OfferteSuccess />} />
            <Route path="/kunststof-kozijnen" element={<KunststofKozijnen />} />
            <Route path="/kunststof-schuifpuien" element={<KunststofSchuifpuien />} />
            <Route path="/kunststof-kozijnen/kleuren" element={<ColorOptions />} />
            <Route path="/kunststof-kozijnen/kleuren/:colorSlug" element={<ColorDetail />} />
            <Route path="/kunststof-kozijnen/types" element={<KozijnTypes />} />
            <Route path="/kunststof-kozijnen/afmetingen" element={<KozijnSizes />} />
            <Route path="/kunststof-kozijnen/montage" element={<KozijnMontage />} />
            <Route path="/kunststof-kozijnen/prijzen" element={<KozijnPrices />} />
            <Route path="/kunststof-kozijnen/merken" element={<KozijnBrands />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            <Route path="/projecten" element={<Projects />} />
            <Route path="/projecten/:projectSlug" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogSlug" element={<BlogDetail />} />
            <Route path="/werkgebied" element={<Werkgebied />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/zoeken" element={<Zoeken />} />
            <Route path="/rentevrije-financiering" element={<RentevrijeFinanciering />} />
            <Route path="/werkwijze" element={<Werkwijze />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/over-ons/team" element={<Team />} />
            <Route path="/over-ons/missie" element={<Missie />} />
            <Route path="/over-ons/duurzaamheid" element={<Duurzaamheid />} />
            <Route path="/over-ons/vacatures" element={<Vacatures />} />
            
            {/* Dynamic city service routes */}
            <Route path="/diensten/:citySlug/:serviceSlug" element={<CityServicePage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SearchProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
