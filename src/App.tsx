
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
