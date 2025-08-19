import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const AdvisorPanel: React.FC = () => {
  const advisors = [
    {
      name: "Ronald",
      title: "Adviseur",
    },
    {
      name: "Youri",
      title: "Adviseur",
    }
  ];

  return (
    <Card className="bg-white shadow-sm border-0 h-full w-80">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Uw Persoonlijke Adviseurs</h3>
          <div className="h-0.5 w-16 bg-brand-green mx-auto mt-2"></div>
        </div>
        
        <div className="flex flex-row justify-center gap-4 mb-6">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex-1">
              <div className="flex flex-col items-center">
                <h4 className="text-base font-medium">{advisor.name}</h4>
                <p className="text-gray-500 text-xs">{advisor.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact info first */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-green/10 p-1.5 rounded-full">
              <Phone size={16} className="text-brand-green" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Telefoon</p>
              <p className="text-sm font-medium">053 303 0213</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-brand-green/10 p-1.5 rounded-full">
              <Mail size={16} className="text-brand-green" />
            </div>
            <div>
              <p className="text-xs text-gray-500">E-mail</p>
              <p className="text-sm font-medium">aanvraag@duurzaamwonen.info</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-brand-green/10 p-1.5 rounded-full">
              <MessageSquare size={16} className="text-brand-green" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Beschikbaarheid</p>
              <p className="text-sm font-medium">Ma-Vr: 9:00 - 17:00</p>
            </div>
          </div>
        </div>
        
        {/* USPs below contact info */}
        <div>
          <h5 className="font-medium text-sm mb-2">Waarom kiezen voor ons?</h5>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs">Persoonlijk advies op maat</span>
            </li>
            <li className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs">Gratis inmeting aan huis</span>
            </li>
            <li className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs">10 jaar servicegarantie</span>
            </li>
            <li className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs">15 jaar productgarantie</span>
            </li>
            <li className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs">Vakkundige montage</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvisorPanel;
