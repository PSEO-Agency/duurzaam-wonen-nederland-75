import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Index from './pages/Index';
import Projecten from './pages/Projecten';
import Werkwijze from './pages/Werkwijze';
import Financiering from './pages/Financiering';
import Contact from './pages/Contact';
import OverOns from './pages/OverOns';
import Team from './pages/Team';
import Missie from './pages/Missie';
import Duurzaamheid from './pages/Duurzaamheid';
import Vacatures from './pages/Vacatures';
import KunststofKozijnen from './pages/KunststofKozijnen';
import KunststofSchuifpuien from './pages/KunststofSchuifpuien';
import KunststofDeuren from './pages/KunststofDeuren';
import Gevelbekleding from './pages/Gevelbekleding';
import Error404Page from './pages/Error404Page';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import AdminWrapper from './components/AdminWrapper';
import Dashboard from './pages/admin/Dashboard';
import Pages from './pages/admin/Pages';
import Locations from './pages/admin/Locations';
import Services from './pages/admin/Services';
import CityServices from './pages/admin/CityServices';
import Solutions from './pages/Solutions';
import SolutionPage from './pages/SolutionPage';

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
        <BrowserRouter>
          <ScrollToTopOnNavigate />
          <div className="min-h-screen bg-background font-sans antialiased">
            <AdminWrapper>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projecten" element={<Projecten />} />
                <Route path="/werkwijze" element={<Werkwijze />} />
                <Route path="/rentevrije-financiering" element={<Financiering />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/over-ons" element={<OverOns />} />
                <Route path="/over-ons/team" element={<Team />} />
                <Route path="/over-ons/missie" element={<Missie />} />
                <Route path="/over-ons/duurzaamheid" element={<Duurzaamheid />} />
                <Route path="/over-ons/vacatures" element={<Vacatures />} />

                <Route path="/kunststof-kozijnen" element={<KunststofKozijnen />} />
                <Route path="/kunststof-schuifpuien" element={<KunststofSchuifpuien />} />
                <Route path="/kunststof-deuren" element={<KunststofDeuren />} />
                <Route path="/gevelbekleding" element={<Gevelbekleding />} />
                
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/pages" element={<Pages />} />
                <Route path="/admin/locations" element={<Locations />} />
                <Route path="/admin/services" element={<Services />} />
                <Route path="/admin/city-services" element={<CityServices />} />

                {/* Add new solution routes */}
                <Route path="/oplossingen" element={<Solutions />} />
                <Route path="/kunststof-schuifpuien" element={<SolutionPage />} />
                <Route path="/kunststof-deuren" element={<SolutionPage />} />
                <Route path="/gevelbekleding" element={<SolutionPage />} />
                
                <Route path="*" element={<Error404Page />} />
              </Routes>
            </AdminWrapper>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
