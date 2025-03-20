
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="glass-card bg-white shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Heeft u vragen? We zijn er om te helpen</h2>
                <p className="text-gray-600 mb-8 max-w-lg">
                  Neem contact met ons op voor meer informatie over onze diensten of voor een vrijblijvende offerte. 
                  Onze experts staan klaar om al uw vragen te beantwoorden.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Telefoon</h4>
                      <a href="tel:0533030213" className="text-brand-green hover:underline">
                        053 303 0213
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">E-mail</h4>
                      <a href="mailto:info@duurzaamwonen.info" className="text-brand-green hover:underline">
                        info@duurzaamwonen.info
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Adres</h4>
                      <p className="text-gray-600">Twenteweg 24, 7532 ST Enschede</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-brand-green hover:bg-brand-green-dark">
                  Neem contact op
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div 
                className="lg:col-span-2 bg-brand-green h-full min-h-[300px] lg:min-h-0"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="bg-brand-green/80 h-full w-full p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Vrijblijvend adviesgesprek</h3>
                  <p className="text-white/90 mb-6">
                    Maak een afspraak voor een gratis en vrijblijvend adviesgesprek 
                    bij u thuis of in onze showroom.
                  </p>
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 w-full md:w-auto">
                    Plan een afspraak
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactCTA;
