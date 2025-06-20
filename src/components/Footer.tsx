
import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Duurzaam<span className="text-brand-green">Wonen</span></h3>
            <p className="text-gray-300 mb-6">
              Specialist in woningverduurzaming met meer dan 20 jaar ervaring in installatietechniek.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Duurzaam-Wonen-Nederland/100057187820677/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/duurzaamwonennl/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Snelle links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/oplossingen" className="text-gray-300 hover:text-brand-green transition-colors duration-200 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Oplossingen
                </Link>
              </li>
              <li>
                <Link to="/projecten" className="text-gray-300 hover:text-brand-green transition-colors duration-200 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Projecten
                </Link>
              </li>
              <li>
                <Link to="/rentevrije-financiering" className="text-gray-300 hover:text-brand-green transition-colors duration-200 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Rentevrije Financiering
                </Link>
              </li>
              <li>
                <Link to="/werkwijze" className="text-gray-300 hover:text-brand-green transition-colors duration-200 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Werkwijze
                </Link>
              </li>
              <li>
                <Link to="/vacatures" className="text-gray-300 hover:text-brand-green transition-colors duration-200 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Vacatures
                </Link>
              </li>
              <li>
                <Link to="/werkgebied" className="text-gray-300 hover:text-brand-green transition-colors duration-200 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Werkgebied
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-green transition-colors duration-200 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Onze oplossingen</h4>
            <ul className="space-y-3">
              {[
                'Kunststof kozijnen', 
                'Dakkapellen', 
                'Gevelbekleding', 
                'Zonwering', 
                'Voordeuren',
                'Schu­if­puien'
              ].map((service) => (
                <li key={service}>
                  <Link to="/oplossingen" className="text-gray-300 hover:text-brand-green transition-colors duration-200 flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact informatie</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Twenteweg 24, 7532 ST Enschede</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                <a href="tel:0533030213" className="text-gray-300 hover:text-brand-green">053 303 0213</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                <a href="mailto:info@duurzaamwonen.info" className="text-gray-300 hover:text-brand-green">info@duurzaamwonen.info</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Duurzaam Wonen Nederland. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6">
              <Link to="/sitemap" className="text-gray-400 hover:text-brand-green text-sm">Sitemap</Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-brand-green text-sm">Privacybeleid</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
