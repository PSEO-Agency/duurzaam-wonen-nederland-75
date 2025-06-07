
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  location: string;
  completion_date: string;
  project_type: string;
}

interface SolutionProjectsProps {
  projects: Project[];
}

const SolutionProjects: React.FC<SolutionProjectsProps> = ({ projects }) => {
  const isMobile = useIsMobile();

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Recente Projecten</h2>
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
            {projects.slice(0, 6).map((project, index) => (
              <AnimatedSection key={project.id} animation="fade-in" delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  {project.image_url && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image_url} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                      <Calendar className="h-4 w-4 ml-2" />
                      <span>{new Date(project.completion_date).getFullYear()}</span>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.project_type && (
                      <Badge variant="secondary">{project.project_type}</Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionProjects;
