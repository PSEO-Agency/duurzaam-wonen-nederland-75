
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const jobListings = [
  {
    id: 'kunststof-kozijnen-monteur',
    title: 'Kunststof Kozijnen Monteur',
    type: '1e en/of 2e Monteur',
    location: 'Enschede (max 1,5 uur rondom)',
    hours: 'Fulltime',
    description: 'Door de enorme groei van ons bedrijf zijn wij van Duurzaam Wonen Nederland WEDEROM opzoek naar een 1e monteur en/of 2e monteur (met ervaring) in het plaatsen van kunststofkozijnen, gevelbekleding en dakkapellen.',
    highlights: ['Goed salaris', 'Jonge werkbussen', 'Beste gereedschappen', 'Pensioenregeling']
  },
  {
    id: 'commercieel-medewerker',
    title: 'Commercieel medewerker',
    type: 'Commercieel talent',
    location: 'Enschede (max 1,5 uur rondom)',
    hours: 'Parttime/Fulltime (24-40 uur)',
    description: 'Ben jij een (potentieel) commercieel talent dan zijn wij opzoek naar jou om ons colportage team te komen versterken. Het aan de deur maken van afspraken voor onze adviseurs.',
    highlights: ['Marktconform salaris', 'Goede provisie', 'Auto van de zaak', 'Flexibele werktijden']
  }
];

const Vacatures: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Vacatures | Duurzaam Wonen Nederland</title>
        <meta 
          name="description" 
          content="Bekijk onze openstaande vacatures bij Duurzaam Wonen Nederland. Sluit je aan bij ons groeiende team!"
        />
      </Helmet>
      
      <Navbar />
      
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Werk bij <span className="text-brand-green">Duurzaam Wonen Nederland</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sluit je aan bij ons groeiende team en help mee aan een duurzamere toekomst. 
                Bekijk onze openstaande vacatures en ontdek jouw nieuwe uitdaging.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {jobListings.map((job, index) => (
              <AnimatedSection key={job.id} delay={index * 200}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-brand-green/10 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-brand-green" />
                      </div>
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Open
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                    <p className="text-brand-green font-medium mb-4">{job.type}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{job.hours}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {job.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Voordelen:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-brand-green hover:bg-brand-green-dark">
                      <Link to={`/vacatures/${job.id}`}>
                        Bekijk vacature
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400} className="text-center mt-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Geen passende vacature gevonden?</h3>
              <p className="text-gray-600 mb-6">
                We zijn altijd op zoek naar getalenteerde mensen die willen bijdragen aan onze missie. 
                Stuur gerust een open sollicitatie!
              </p>
              <div className="space-y-2">
                <p className="font-medium">Contact:</p>
                <p>Email: <a href="mailto:kantoor@duurzaamwonen.info" className="text-brand-green hover:underline">kantoor@duurzaamwonen.info</a></p>
                <p>Telefoon: <a href="tel:0533030213" className="text-brand-green hover:underline">053 303 0213</a></p>
                <p>WhatsApp: <a href="https://wa.me/31619774427" className="text-brand-green hover:underline">06 19774427</a></p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Vacatures;
