
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import RaamdecoratieHero from './RaamdecoratieHero';
import Footer from '../Footer';

const RaamdecoratiePageContent: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Raamdecoratie op Maat | Specialist in Maatwerk Raamdecoratie</title>
        <meta 
          name="description" 
          content="Hoogwaardige raamdecoratie op maat voor uw woning. Van klassieke tot moderne stijlen - wij hebben de perfecte oplossing voor elke ruimte. Realisatie door onze partner Twents Design." 
        />
        <meta name="keywords" content="raamdecoratie, raamdecoratie op maat, gordijnen, luxaflex, jaloeziën, vouwgordijnen, rolgordijnen" />
        <link rel="canonical" href="https://www.example.com/raamdecoratie" />
      </Helmet>
      
      <Navbar />
      <main className="min-h-screen pt-20">
        <RaamdecoratieHero />
      </main>
      <Footer />
    </>
  );
};

export default RaamdecoratiePageContent;
