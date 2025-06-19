import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import CookieConsent from './components/CookieConsent';
import AdminWrapper from './components/admin/AdminWrapper';

// Lazy load components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const Services = React.lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const Werkwijze = React.lazy(() => import('./pages/Werkwijze'));
const RegioPage = React.lazy(() => import('./pages/RegioPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const OffertePage = React.lazy(() => import('./pages/OffertePage'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Kunststof kozijnen pages
const KunststofKozijnen = React.lazy(() => import('./pages/KunststofKozijnen'));
const KozijnTypes = React.lazy(() => import('./pages/KozijnTypes'));
const KozijnColors = React.lazy(() => import('./pages/KozijnColors'));
const KozijnMontage = React.lazy(() => import('./pages/KozijnMontage'));
const Schuco = React.lazy(() => import('./pages/Schuco'));
const ProfilesOverview = React.lazy(() => import('./pages/ProfilesOverview'));
const Living82 = React.lazy(() => import('./pages/profielen/Living82'));
const CT70AS = React.lazy(() => import('./pages/profielen/CT70AS'));

// Kunststof schuifpuien pages
const KunststofSchuifpuien = React.lazy(() => import('./pages/KunststofSchuifpuien'));
const SchuifpuiTypes = React.lazy(() => import('./pages/SchuifpuiTypes'));
const SchuifpuiColors = React.lazy(() => import('./pages/SchuifpuiColors'));
const SchuifpuiMontage = React.lazy(() => import('./pages/SchuifpuiMontage'));

// Blog pages
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

// Admin pages
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const AdminProjects = React.lazy(() => import('./pages/admin/AdminProjects'));
const AdminProjectCreate = React.lazy(() => import('./pages/admin/AdminProjectCreate'));
const AdminProjectEdit = React.lazy(() => import('./pages/admin/AdminProjectEdit'));
const AdminBlog = React.lazy(() => import('./pages/admin/AdminBlog'));
const AdminBlogCreate = React.lazy(() => import('./pages/admin/AdminBlogCreate'));
const AdminBlogEdit = React.lazy(() => import('./pages/admin/AdminBlogEdit'));

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTopOnNavigate />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/over-ons" element={<AboutPage />} />
              <Route path="/diensten" element={<Services />} />
              <Route path="/projecten" element={<ProjectsPage />} />
              <Route path="/werkwijze" element={<Werkwijze />} />
              <Route path="/regio" element={<RegioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/offerte" element={<OffertePage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/kunststof-kozijnen" element={<KunststofKozijnen />} />
              <Route path="/kunststof-kozijnen/types" element={<KozijnTypes />} />
              <Route path="/kunststof-kozijnen/kleuren" element={<KozijnColors />} />
              <Route path="/kunststof-kozijnen/montage" element={<KozijnMontage />} />
              <Route path="/schuco" element={<Schuco />} />
              <Route path="/kunststof-kozijnen/profielen" element={<ProfilesOverview />} />
              <Route path="/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel" element={<Living82 />} />
              <Route path="/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel" element={<CT70AS />} />
              <Route path="/kunststof-schuifpuien" element={<KunststofSchuifpuien />} />
              <Route path="/kunststof-schuifpuien/types" element={<SchuifpuiTypes />} />
              <Route path="/kunststof-schuifpuien/kleuren" element={<SchuifpuiColors />} />
              <Route path="/kunststof-schuifpuien/montage" element={<SchuifpuiMontage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/projects" element={<AdminProjects />} />
              <Route path="/admin/projects/new" element={<AdminProjectCreate />} />
              <Route path="/admin/projects/:id/edit" element={<AdminProjectEdit />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/blog/new" element={<AdminBlogCreate />} />
              <Route path="/admin/blog/:id/edit" element={<AdminBlogEdit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieConsent />
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
