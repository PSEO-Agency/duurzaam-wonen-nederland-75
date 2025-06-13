
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";

// Lazy load pages
const Index = lazy(() => import('./pages/Index'));
const KunststofKozijnen = lazy(() => import('./pages/KunststofKozijnen'));
const AluminiumKozijnen = lazy(() => import('./pages/AluminiumKozijnen'));
const KunststofSchuifpuien = lazy(() => import('./pages/KunststofSchuifpuien'));
const KunststofDeuren = lazy(() => import('./pages/KunststofDeuren'));
const Gevelbekleding = lazy(() => import('./pages/Gevelbekleding'));
const RentevrijeFinanciering = lazy(() => import('./pages/RentevrijeFinanciering'));
const OverOns = lazy(() => import('./pages/OverOns'));
const Contact = lazy(() => import('./pages/Contact'));
const Projecten = lazy(() => import('./pages/Projecten'));
const Offerte = lazy(() => import('./pages/Offerte'));
const OfferteSuccess = lazy(() => import('./pages/OfferteSuccess'));
const Werkwijze = lazy(() => import('./pages/Werkwijze'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Admin pages
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminPages = lazy(() => import('./pages/admin/Pages'));
const AdminLocations = lazy(() => import('./pages/admin/Locations'));
const AdminServices = lazy(() => import('./pages/admin/Services'));
const AdminCityServices = lazy(() => import('./pages/admin/CityServices'));

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Index />} />
              <Route path="/kunststof-kozijnen" element={<KunststofKozijnen />} />
              <Route path="/aluminium-kozijnen" element={<AluminiumKozijnen />} />
              <Route path="/kunststof-schuifpuien" element={<KunststofSchuifpuien />} />
              <Route path="/kunststof-deuren" element={<KunststofDeuren />} />
              <Route path="/gevelbekleding" element={<Gevelbekleding />} />
              <Route path="/rentevrije-financiering" element={<RentevrijeFinanciering />} />
              <Route path="/over-ons" element={<OverOns />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projecten" element={<Projecten />} />
              <Route path="/offerte" element={<Offerte />} />
              <Route path="/offerte/success" element={<OfferteSuccess />} />
              <Route path="/werkwijze" element={<Werkwijze />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Admin routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/pages" element={<AdminPages />} />
              <Route path="/admin/locations" element={<AdminLocations />} />
              <Route path="/admin/services" element={<AdminServices />} />
              <Route path="/admin/city-services" element={<AdminCityServices />} />
            </Routes>
          </Suspense>
          <Toaster />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
