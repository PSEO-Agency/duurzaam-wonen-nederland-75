
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';
import { Helmet } from 'react-helmet-async';

const Projects: React.FC = () => {
  const { data: projects, isLoading } = useProjects();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const featuredProjects = projects?.filter(project => project.is_featured) || [];
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects?.slice(0, 4) || [];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === displayProjects.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? displayProjects.length - 1 : prev - 1));
  };

  // Generate structured data for projects
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Duurzaam Wonen Nederland Projecten",
    "description": "Recente verduurzamingsprojecten van Duurzaam Wonen Nederland",
    "itemListElement": displayProjects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": project.featured_image || project.image_url,
        "url": `https://duurzaamwonen.info/projecten/${project.id}`,
        "creator": {
          "@type": "Organization",
          "name": "Duurzaam Wonen Nederland"
        },
        "locationCreated": {
          "@type": "Place",
          "name": project.location
        }
      }
    }))
  };

  if (isLoading) {
    return (
      <section id="projects" className="section-container bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="glass-card h-full overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (!displayProjects.length) {
    return null;
  }
  
  return (
    <section id="projects" className="section-container bg-gradient-to-b from-gray-50 to-white py-20">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(projectsStructuredData)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">Onze recente projecten</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Ontdek een selectie van onze recente verduurzamingsprojecten in heel Nederland
              </p>
            </div>
            <div className="flex gap-2 mt-6 md:mt-0">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                className="rounded-full h-10 w-10 border-gray-300"
                aria-label="Vorige project"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="rounded-full h-10 w-10 border-gray-300"
                aria-label="Volgende project"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Desktop Carousel */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <Link to={`/projecten/${project.id}`} className="block h-full">
                <article className="glass-card h-full overflow-hidden group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.featured_image || project.image_url || '/placeholder.svg'} 
                      alt={`${project.title} - Duurzaam Wonen Nederland project in ${project.location}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="text-sm font-medium bg-brand-green py-1 px-2 rounded-md">{project.location}</span>
                      <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {displayProjects.map((project, index) => (
              <div key={project.id} className="w-full flex-shrink-0 px-4">
                <Link to={`/projecten/${project.id}`} className="block h-full">
                  <article className="glass-card h-full overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.featured_image || project.image_url || '/placeholder.svg'} 
                        alt={`${project.title} - Duurzaam Wonen Nederland project in ${project.location}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <span className="text-sm font-medium bg-brand-green py-1 px-2 rounded-md">{project.location}</span>
                        <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {displayProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-6 bg-brand-green' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Ga naar project ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
            <Link to="/projecten">
              Bekijk alle projecten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
