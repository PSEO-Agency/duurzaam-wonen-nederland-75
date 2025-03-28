
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KunststofKozijnen from "./pages/KunststofKozijnen";
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
import Zakelijk from "./pages/Zakelijk";
import Contact from "./pages/Contact";
import Zoeken from "./pages/Zoeken";
import Showroom from "./pages/Showroom";
import Werkwijze from "./pages/Werkwijze";
import OverOns from "./pages/OverOns";
import Team from "./pages/over-ons/Team";
import Geschiedenis from "./pages/over-ons/Geschiedenis";
import Missie from "./pages/over-ons/Missie";
import Duurzaamheid from "./pages/over-ons/Duurzaamheid";
import Vacatures from "./pages/over-ons/Vacatures";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SearchProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/kunststof-kozijnen" element={<KunststofKozijnen />} />
              <Route path="/kunststof-kozijnen/kleuren" element={<ColorOptions />} />
              <Route path="/kunststof-kozijnen/kleuren/:colorSlug" element={<ColorDetail />} />
              <Route path="/kunststof-kozijnen/types" element={<KozijnTypes />} />
              <Route path="/kunststof-kozijnen/afmetingen" element={<KozijnSizes />} />
              <Route path="/kunststof-kozijnen/montage" element={<KozijnMontage />} />
              <Route path="/kunststof-kozijnen/prijzen" element={<KozijnPrices />} />
              <Route path="/kunststof-kozijnen/merken" element={<KozijnBrands />} />
              <Route path="/projecten" element={<Projects />} />
              <Route path="/projecten/:projectSlug" element={<ProjectDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogSlug" element={<BlogDetail />} />
              <Route path="/werkgebied" element={<Werkgebied />} />
              <Route path="/zakelijk" element={<Zakelijk />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/zoeken" element={<Zoeken />} />
              <Route path="/showroom" element={<Showroom />} />
              <Route path="/werkwijze" element={<Werkwijze />} />
              <Route path="/over-ons" element={<OverOns />} />
              <Route path="/over-ons/team" element={<Team />} />
              <Route path="/over-ons/geschiedenis" element={<Geschiedenis />} />
              <Route path="/over-ons/missie" element={<Missie />} />
              <Route path="/over-ons/duurzaamheid" element={<Duurzaamheid />} />
              <Route path="/over-ons/vacatures" element={<Vacatures />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SearchProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
