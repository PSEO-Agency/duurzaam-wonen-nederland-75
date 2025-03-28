
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { getProjectBySlug, getRelatedProjects } from '@/data/projects';
import { Project } from '@/types/project';

const ProjectDetail: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [activeImage, setActiveImage] = useState<string>('');
  
  useEffect(() => {
    if (projectSlug) {
      const foundProject = getProjectBySlug(projectSlug);
      if (foundProject) {
        setProject(foundProject);
        setActiveImage(foundProject.featuredImage);
        
        // Get related projects
        const related = getRelatedProjects(foundProject.id, foundProject.category);
        setRelatedProjects(related);
      } else {
        navigate('/projecten');
      }
    }
  }, [projectSlug, navigate]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project wordt geladen...</h1>
            <Button asChild variant="outline">
              <Link to="/projecten">Terug naar projecten</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{project.title} | Duurzaam Wonen Nederland</title>
        <meta name="description" content={project.shortDescription} />
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
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-brand-green" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-brand-green" />
                    {new Date(project.completionDate).toLocaleDateString('nl-NL', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-brand-green" />
                    {project.clientName}
                  </div>
                </div>
              </div>
              <Badge className="text-sm capitalize self-start md:self-auto">
                {project.category}
              </Badge>
            </div>
          </div>
        </section>
        
        {/* Project Gallery and Details */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Gallery */}
              <div className="lg:col-span-2">
                <div className="mb-4 rounded-lg overflow-hidden aspect-video">
                  <img 
                    src={activeImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {project.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`rounded-md overflow-hidden cursor-pointer border-2 ${
                        activeImage === image ? 'border-brand-green' : 'border-transparent'
                      }`}
                      onClick={() => setActiveImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - afbeelding ${index + 1}`} 
                        className="w-full h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project Details Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Categorie</h3>
                      <p className="capitalize">{project.category}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Locatie</h3>
                      <p>{project.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Opdrachtgever</h3>
                      <p>{project.clientName}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Opleverdatum</h3>
                      <p>{new Date(project.completionDate).toLocaleDateString('nl-NL', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Tags</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand-green hover:bg-brand-green-dark">
                      Soortgelijk project aanvragen
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Description */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Projectbeschrijving</h2>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </section>
        
        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Gerelateerde Projecten</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link to={`/projecten/${relatedProject.slug}`} key={relatedProject.id} className="group">
                    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={relatedProject.featuredImage} 
                          alt={relatedProject.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 right-3 capitalize">
                          {relatedProject.category}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                          {relatedProject.title}
                        </CardTitle>
                        <CardDescription className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {relatedProject.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-gray-600 line-clamp-2">{relatedProject.shortDescription}</p>
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
