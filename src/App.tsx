
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchProvider } from '@/contexts/SearchContext';

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
import Locations from './pages/admin/Locations';
import Services from './pages/admin/Services';
import CityServices from './pages/admin/CityServices';
import AdminSolutions from './pages/admin/Solutions';
import Solutions from './pages/Solutions';
import SolutionPage from './pages/SolutionPage';
import Zoeken from './pages/Zoeken';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 60 seconds
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <SearchProvider>
          <div className="min-h-screen bg-background font-sans antialiased">
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
                <Route path="locations" element={<Locations />} />
                <Route path="services" element={<Services />} />
                <Route path="city-services" element={<CityServices />} />
                <Route path="solutions" element={<AdminSolutions />} />
              </Route>

              {/* Search results page */}
              <Route path="/zoeken" element={<Zoeken />} />

              {/* Add new solution routes */}
              <Route path="/oplossingen" element={<Solutions />} />
              <Route path="/:slug" element={<SolutionPage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
