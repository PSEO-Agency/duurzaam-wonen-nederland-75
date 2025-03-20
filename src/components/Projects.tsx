
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const projectsData = [
  {
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    title: 'Renovatie jaren \'70 woning',
    description: 'Complete verduurzaming met nieuwe kozijnen, gevelbekleding en hr++ glas',
    location: 'Enschede'
  },
  {
    image: 'https://images.unsplash.com/photo-1560184897-502a475f7a0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    title: 'Dakkapel uitbouw',
    description: 'Plaatsing dakkapel met kunststof kozijnen en triple glas voor maximale isolatie',
    location: 'Zwolle'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    title: 'Gevelrenovatie hoekwoning',
    description: 'Vernieuwing complete gevel met Keralit gevelbekleding en nieuwe kozijnen',
    location: 'Arnhem'
  },
  {
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    title: 'Zonwering installatie',
    description: 'Slimme zonwering met app-bediening voor optimale klimaatbeheersing',
    location: 'Hengelo'
  }
];

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };
  
  return (
    <section id="projects" className="section-container bg-gradient-to-b from-gray-50 to-white py-20">
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
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="rounded-full h-10 w-10 border-gray-300"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Desktop Carousel */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-card h-full overflow-hidden group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-sm font-medium bg-brand-green py-1 px-2 rounded-md">{project.location}</span>
                    <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
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
            {projectsData.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="glass-card h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="text-sm font-medium bg-brand-green py-1 px-2 rounded-md">{project.location}</span>
                      <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-6 bg-brand-green' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-brand-green hover:bg-brand-green-dark">
            Bekijk alle projecten
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
