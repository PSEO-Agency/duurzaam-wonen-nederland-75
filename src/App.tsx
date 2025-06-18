import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import ScrollToTop from '@/components/ScrollToTop';
import ScrollToTopOnNavigate from '@/components/ScrollToTopOnNavigate';
import AdminBar from '@/components/admin/AdminBar';
import AdminModeToggle from '@/components/admin/AdminModeToggle';
import AdminWrapper from '@/components/admin/AdminWrapper';
import AdminLayout from '@/components/admin/AdminLayout';

import Dashboard from '@/pages/admin/Dashboard';
import Products from '@/pages/admin/Products';
import ProductEditor from '@/pages/admin/ProductEditor';
import Services from '@/pages/admin/Services';
import CityServices from '@/pages/admin/CityServices';
import Locations from '@/pages/admin/Locations';
import Projects from '@/pages/admin/Projects';
import Pages from '@/pages/admin/Pages';
import PageEditor from '@/pages/admin/PageEditor';
import Sections from '@/pages/admin/Sections';
import SectionEditor from '@/pages/admin/SectionEditor';
import Templates from '@/pages/admin/Templates';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import ProductPage from '@/pages/ProductPage';
import ServicePage from '@/pages/ServicePage';
import CityServicePage from '@/pages/CityServicePage';
import LocationsPage from '@/pages/LocationsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import GenericPage from '@/pages/GenericPage';
import NotFound from '@/pages/NotFound';

import { AdminProvider } from '@/contexts/AdminContext';

import AdminLogin from '@/pages/admin/Login';
import ProtectedAdminRoute from '@/components/admin/ProtectedAdminRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <AdminProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="relative">
              <AdminWrapper>
                <AdminBar />
                <ScrollToTopOnNavigate />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products" element={<ProductPage />} />
                  <Route path="/products/:id" element={<ProductPage />} />
                  <Route path="/services" element={<ServicePage />} />
                  <Route path="/services/:slug" element={<ServicePage />} />
                  <Route path="/city-services" element={<CityServicePage />} />
                  <Route path="/city-services/:city/:service" element={<CityServicePage />} />
                  <Route path="/locations" element={<LocationsPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/:slug" element={<GenericPage />} />
                  
                  {/* Admin Login Route - unprotected */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  
                  {/* Protected Admin Routes */}
                  <Route path="/admin/dashboard" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Dashboard />
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
                  <Route path="/admin/locations" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Locations />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  <Route path="/admin/projects" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Projects />
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
                  <Route path="/admin/templates" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Templates />
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <ScrollToTop />
              </AdminWrapper>
              <Toaster />
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </AdminProvider>
    </HelmetProvider>
  );
}

export default App;
