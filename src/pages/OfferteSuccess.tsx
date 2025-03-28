
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OfferteSuccess: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aanvraag Verzonden | Duurzaam Wonen Nederland</title>
        <meta 
          name="description" 
          content="Uw offerte aanvraag is succesvol verzonden. We nemen spoedig contact met u op."
        />
      </Helmet>
      
      <Navbar />
      
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle className="h-12 w-12 text-brand-green" />
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Uw offerte aanvraag is verzonden!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Bedankt voor uw aanvraag. We hebben uw gegevens ontvangen en 
              een van onze specialisten neemt binnen 24 uur contact met u op.
            </p>
            
            <div className="space-y-6 max-w-lg mx-auto">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Wat gebeurt er nu?</h3>
                <ol className="text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <span className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0">1</span>
                    <span>U ontvangt een bevestigingsmail van uw aanvraag</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0">2</span>
                    <span>Onze specialist neemt binnen 24 uur contact met u op</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0">3</span>
                    <span>We plannen een vrijblijvende inmeting bij u thuis</span>
                  </li>
                </ol>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="outline">
                  <Link to="/kunststof-kozijnen">
                    Bekijk kozijnen
                  </Link>
                </Button>
                <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                  <Link to="/">
                    Terug naar homepage
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default OfferteSuccess;
