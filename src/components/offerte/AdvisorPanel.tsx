
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const AdvisorPanel: React.FC = () => {
  return (
    <Card className="bg-white shadow-sm border-0 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Uw Persoonlijke Adviseur</h3>
          <div className="h-0.5 w-16 bg-brand-green mx-auto mt-2"></div>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img 
              src="/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png" 
              alt="Adviseur" 
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-lg font-medium">Mark de Vries</h4>
          <p className="text-gray-500">Senior Kozijnen Specialist</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <blockquote className="text-gray-600 italic text-sm">
            "Ik help u graag bij het vinden van de perfecte kozijnen voor uw woning. Samen kijken we naar de beste opties binnen uw budget."
          </blockquote>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-brand-green/10 p-2 rounded-full">
              <Phone size={18} className="text-brand-green" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Telefoon</p>
              <p className="font-medium">085 - 020 5500</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-brand-green/10 p-2 rounded-full">
              <Mail size={18} className="text-brand-green" />
            </div>
            <div>
              <p className="text-sm text-gray-500">E-mail</p>
              <p className="font-medium">info@dwn.nl</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-brand-green/10 p-2 rounded-full">
              <MessageSquare size={18} className="text-brand-green" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Beschikbaarheid</p>
              <p className="font-medium">Ma-Vr: 9:00 - 17:00</p>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <h5 className="font-medium mb-3">Waarom kiezen voor ons?</h5>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm">Persoonlijk advies op maat</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm">Gratis inmeting aan huis</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm">10 jaar garantie</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm">Vakkundige montage</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvisorPanel;
