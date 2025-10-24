
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, MapPin, Tag, ChevronRight, Users, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  location: string | null;
  project_type: string | null;
  completion_date: string | null;
  image_url: string | null;
  featured_image: string | null;
  gallery_images: any;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

const ProjectDetail: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<string>('');
  
  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', projectSlug],
    queryFn: async () => {
      if (!projectSlug) throw new Error('Project slug is required');
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', projectSlug)
        .eq('is_active', true)
        .single();
      
      if (error) throw error;
      return data as Project;
    },
    enabled: !!projectSlug
  });

  const { data: relatedProjects = [] } = useQuery({
    queryKey: ['related-projects', project?.project_type],
    queryFn: async () => {
      if (!project) return [];
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_active', true)
        .eq('project_type', project.project_type)
        .neq('id', project.id)
        .limit(3);
      
      if (error) throw error;
      return data as Project[];
    },
    enabled: !!project
  });
  
  useEffect(() => {
    if (project) {
      // Build gallery from featured_image and gallery_images only
      const galleryImages = [];
      
      if (project.featured_image) {
        galleryImages.push(project.featured_image);
      }
      
      if (project.gallery_images && Array.isArray(project.gallery_images)) {
        galleryImages.push(...project.gallery_images);
      }
      
      // Set the first available image as active, or fallback to image_url if gallery is empty
      if (galleryImages.length > 0) {
        setActiveImage(galleryImages[0]);
      } else if (project.image_url) {
        setActiveImage(project.image_url);
      }
    }
  }, [project]);

  useEffect(() => {
    if (error) {
      navigate('/projecten');
    }
  }, [error, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project wordt geladen...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project niet gevonden</h1>
            <Button asChild variant="outline">
              <Link to="/projecten">Terug naar projecten</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Build gallery images from featured_image and gallery_images
  const galleryImages = [];
  
  if (project.featured_image) {
    galleryImages.push(project.featured_image);
  }
  
  if (project.gallery_images && Array.isArray(project.gallery_images)) {
    galleryImages.push(...project.gallery_images);
  }

  // Fallback to image_url if no gallery images
  const displayImage = activeImage || project.image_url;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{project.title} | Duurzaam Wonen Nederland</title>
        <meta name="description" content={project.description || `Project ${project.title} in ${project.location}`} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-brand-green">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link to="/projecten" className="hover:text-brand-green">Projecten</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900 font-medium truncate">{project.title}</span>
            </nav>
          </div>
        </div>
        
        {/* Project Header */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <Button variant="outline" size="sm" asChild className="mb-4">
                  <Link to="/projecten" className="flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Terug naar projecten
                  </Link>
                </Button>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  {project.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-brand-green" />
                      {project.location}
                    </div>
                  )}
                  {project.completion_date && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-brand-green" />
                      {new Date(project.completion_date).toLocaleDateString('nl-NL', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  )}
                </div>
              </div>
              {project.project_type && (
                <Badge className="text-sm capitalize self-start md:self-auto">
                  {project.project_type}
                </Badge>
              )}
            </div>
          </div>
        </section>
        
        {/* Project Gallery and Details */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Gallery */}
              <div className="lg:col-span-2">
                {displayImage && (
                  <div className="mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={displayImage} 
                      alt={project.title} 
                      className="w-full h-auto object-contain max-h-[600px] mx-auto"
                    />
                  </div>
                )}
                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-5 gap-2">
                    {galleryImages.map((image, index) => (
                      <div 
                        key={index}
                        className={`rounded-md overflow-hidden cursor-pointer border-2 aspect-square bg-gray-100 ${
                          activeImage === image ? 'border-brand-green' : 'border-transparent'
                        }`}
                        onClick={() => setActiveImage(image)}
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - afbeelding ${index + 1}`} 
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Project Details Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.project_type && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Categorie</h3>
                        <p className="capitalize">{project.project_type}</p>
                      </div>
                    )}
                    {project.location && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Locatie</h3>
                        <p>{project.location}</p>
                      </div>
                    )}
                    {project.completion_date && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Opleverdatum</h3>
                        <p>{new Date(project.completion_date).toLocaleDateString('nl-NL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand-green hover:bg-brand-green-dark" asChild>
                      <Link to="/offerte">Soortgelijk project aanvragen</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Description */}
        {project.description && (
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">Projectbeschrijving</h2>
              <div className="prose prose-lg max-w-none">
                <p>{project.description}</p>
              </div>
            </div>
          </section>
        )}
        
        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Gerelateerde Projecten</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link to={`/projecten/${relatedProject.slug}`} key={relatedProject.id} className="group">
                    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img 
                          src={relatedProject.featured_image || relatedProject.image_url || '/placeholder.svg'} 
                          alt={relatedProject.title} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        {relatedProject.project_type && (
                          <Badge className="absolute top-3 right-3 capitalize">
                            {relatedProject.project_type}
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                          {relatedProject.title}
                        </CardTitle>
                        {relatedProject.location && (
                          <CardDescription className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {relatedProject.location}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-gray-600 line-clamp-2">{relatedProject.description}</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="ghost" size="sm" className="text-brand-green">
                          Bekijk project
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline">
                  <Link to="/projecten">Bekijk alle projecten</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default ProjectDetail;
