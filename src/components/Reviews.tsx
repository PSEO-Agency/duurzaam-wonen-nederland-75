
import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const reviewsData = [
  {
    name: 'Johan van der Berg',
    location: 'Enschede',
    rating: 5,
    text: 'Zeer tevreden over de nieuwe kozijnen en gevelbekleding. Alles is netjes afgewerkt en de monteurs werkten snel en secuur. Ik merk al direct verschil in warmte en geluidsisolatie!',
    date: '15 maart 2023'
  },
  {
    name: 'Marloes de Vries',
    location: 'Zwolle',
    rating: 5,
    text: 'Wij hebben een dakkapel laten plaatsen en zijn erg blij met het resultaat. Vanaf het eerste contact tot en met de oplevering verliep alles soepel en professioneel. Een aanrader!',
    date: '28 april 2023'
  },
  {
    name: 'Peter Jansen',
    location: 'Arnhem',
    rating: 4,
    text: 'Goede service en kwaliteit. De kunststof kozijnen zien er mooi uit en sluiten perfect. Kleine puntjes bij de afwerking, maar deze zijn na melding direct opgelost. Al met al zeer tevreden.',
    date: '10 juni 2023'
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="section-container">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Tevreden klanten</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Wat onze klanten zeggen over hun ervaring met Duurzaam Wonen Nederland
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-card h-full p-6 flex flex-col">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Review Text */}
                <div className="flex-grow">
                  <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                </div>
                
                {/* Customer Info */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {review.date}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={400}>
          <div className="mt-12 flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center glass-card p-6 max-w-2xl">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xl font-bold mb-1">4.9 / 5 gemiddelde beoordeling</p>
                <p className="text-gray-600 text-sm mb-4 md:mb-0">Gebaseerd op meer dan 250 reviews</p>
              </div>
              <div className="md:ml-8 flex gap-4">
                <div className="glass-card p-2 bg-white shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Google_G_Logo.svg/768px-Google_G_Logo.svg.png" 
                       alt="Google Reviews" 
                       className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="glass-card p-2 bg-white shadow-sm">
                  <div className="h-8 w-8 flex items-center justify-center font-bold text-blue-500">
                    F
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Reviews;
