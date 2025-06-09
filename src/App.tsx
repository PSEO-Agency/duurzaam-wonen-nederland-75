
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SearchProvider } from '@/contexts/SearchContext';
import { CmsProvider } from '@/contexts/CmsContext';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTopOnNavigate from '@/components/ScrollToTopOnNavigate';
import AdminWrapper from '@/components/admin/AdminWrapper';
import CookieConsent from '@/components/CookieConsent';

import Index from './pages/Index';
import Projects from './pages/Projects';
import Werkwijze from './pages/Werkwijze';
import RentevrijeFinanciering from './pages/RentevrijeFinanciering';
import Contact from './pages/Contact';
import OverOns from './pages/OverOns';
import Team from './pages/over-ons/Team';
import Missie from './pages/over-ons/Missie';
import Duurzaamheid from './pages/over-ons/Duurzaamheid';
import Vacatures from './pages/over-ons/Vacatures';
import KunststofKozijnen from './pages/KunststofKozijnen';
import NotFound from './pages/NotFound';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Pages from './pages/admin/Pages';
import Templates from './pages/admin/Templates';
import Sections from './pages/admin/Sections';
import Locations from './pages/admin/Locations';
import Services from './pages/admin/Services';
import CityServices from './pages/admin/CityServices';
import AdminSolutions from './pages/admin/Solutions';
import AdminProducts from './pages/admin/Products';
import Solutions from './pages/Solutions';
import SolutionPage from './pages/SolutionPage';
import Zoeken from './pages/Zoeken';
import Products from '@/pages/Products';
import ProductPage from '@/pages/ProductPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 60 seconds
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <CmsProvider>
            <AdminWrapper>
              <ScrollToTopOnNavigate />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projecten" element={<Projects />} />
                <Route path="/werkwijze" element={<Werkwijze />} />
                <Route path="/rentevrije-financiering" element={<RentevrijeFinanciering />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/over-ons" element={<OverOns />} />
                <Route path="/over-ons/team" element={<Team />} />
                <Route path="/over-ons/missie" element={<Missie />} />
                <Route path="/over-ons/duurzaamheid" element={<Duurzaamheid />} />
                <Route path="/over-ons/vacatures" element={<Vacatures />} />
                
                <Route path="/kunststof-kozijnen" element={<KunststofKozijnen />} />
                
                {/* Wrap all admin routes with AdminLayout */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="pages" element={<Pages />} />
                  <Route path="templates" element={<Templates />} />
                  <Route path="sections" element={<Sections />} />
                  <Route path="locations" element={<Locations />} />
                  <Route path="services" element={<Services />} />
                  <Route path="city-services" element={<CityServices />} />
                  <Route path="solutions" element={<AdminSolutions />} />
                  <Route path="products" element={<AdminProducts />} />
                </Route>
                
                {/* Search results page */}
                <Route path="/zoeken" element={<Zoeken />} />
                
                {/* Add new solution routes */}
                <Route path="/oplossingen" element={<Solutions />} />
                <Route path="/:slug" element={<SolutionPage />} />
                
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductPage />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
              <CookieConsent />
            </AdminWrapper>
          </CmsProvider>
        </SearchProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
