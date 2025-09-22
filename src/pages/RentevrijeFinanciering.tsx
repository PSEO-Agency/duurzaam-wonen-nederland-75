import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, CheckCircle, InfoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
const RentevrijeFinanciering: React.FC = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState<number>(5500);
  const [loanTerm, setLoanTerm] = useState<number>(10);
  const [isLowIncome, setIsLowIncome] = useState<boolean>(false);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(3.7);
  const handleOfferteClick = () => {
    navigate('/offerte');
  };

  // Calculate monthly payment based on inputs
  useEffect(() => {
    const calculatePayment = () => {
      if (loanAmount && loanTerm) {
        let rate = isLowIncome ? 0 : interestRate / 100;
        let monthlyRate = rate / 12;
        let numberOfPayments = loanTerm * 12;
        let payment;
        if (isLowIncome) {
          // No interest calculation
          payment = loanAmount / numberOfPayments;
        } else {
          // Standard loan calculation with interest
          if (monthlyRate > 0) {
            payment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
          } else {
            payment = loanAmount / numberOfPayments;
          }
        }
        setMonthlyPayment(payment);
        setTotalCost(payment * numberOfPayments);
      }
    };
    calculatePayment();
  }, [loanAmount, loanTerm, isLowIncome, interestRate]);
  const handleLoanAmountChange = (value: string) => {
    // Remove all non-digits and parse as integer
    const cleanValue = value.replace(/\D/g, '');
    const numValue = parseInt(cleanValue) || 0;

    // Set the loan amount with bounds checking
    if (numValue >= 1000 && numValue <= 28000) {
      setLoanAmount(numValue);
    } else if (numValue < 1000 && numValue > 0) {
      setLoanAmount(numValue); // Allow temporary values while typing
    } else if (numValue === 0) {
      setLoanAmount(0); // Allow clearing the field
    } else if (numValue > 28000) {
      setLoanAmount(28000);
    }
  };
  const formatDisplayValue = (value: number) => {
    if (value === 0) return '';
    return value.toLocaleString('nl-NL');
  };
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Rentevrije Financiering voor Kunststof Kozijnen - Duurzaam Wonen Nederland</title>
        <meta name="description" content="Financier uw isolerende deuren, kozijnen en panelen met een rentevrije lening van het Nationaal Warmtefonds. Ontdek de mogelijkheden voor uw verduurzamingsproject." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
        <link rel="canonical" href="https://duurzaamwonen.info/rentevrije-financiering" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/lovable-uploads/hero-background-new.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade-in-right">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Nationaal Warmtefonds
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Rentevrije Financiering* voor uw Verduurzaming
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                  Financier uw isolerende deuren, kozijnen en panelen met een aantrekkelijke lening via het Nationaal Warmtefonds en verduurzaam uw woning zonder hoge voorafkosten.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white" onClick={handleOfferteClick}>
                    <span>Vraag een lening aan</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-green/20 p-2 rounded-full">
                      <InfoIcon className="h-5 w-5 text-brand-green" />
                    </div>
                    <span>*Bij verzamelinkomen tot 60.000 pj</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-green/20 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-brand-green" />
                    </div>
                    <span>Looptijd tot 20 jaar mogelijk</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* About Nationaal Warmtefonds */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-right">
                <h2 className="text-3xl font-bold mb-6">Isolerende deuren, kozijnen en panelen</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Met isolerende buitendeuren, kozijnen en panelen ga je tocht, en dus warmteverlies, tegen. 
                  Dat is te danken aan het materiaal of aan een luchtkamer of een harde isolatielaag tussen de 
                  buitenkant en binnenkant van het materiaal.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Laat je nieuwe kozijnen plaatsen? Denk dan ook even na over welk hoogrendementsglas je kiest 
                  om het maximale rendement te behalen uit je investering.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Waar moet u op letten:</h3>
                <ul className="space-y-3 mb-8">
                  {['Tussen het voor- en achterblad van deuren moet isolatiemateriaal aanwezig zijn', 'De warmtedoorgangscoëfficiënt (Ud-waarde) van een deur is maximaal 1,5 W/m²K', 'Voor houten en kunststof kozijnen gelden geen specifieke eisen', 'Voor aluminium kozijnen mag de Ud-waarde niet groter zijn dan 2,4 W/m²K', 'De isolatiewaarde van kozijnpanelen moet afgestemd zijn op het glas'].map((item, index) => <li key={index} className="flex items-start gap-3">
                      <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>
                
                <Button className="bg-brand-green hover:bg-brand-green-dark text-white" onClick={handleOfferteClick}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Plan een adviesgesprek</span>
                </Button>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/a38deed8-4c39-4be4-b7e9-eddc9396fe87.png" alt="Moderne kunststof kozijnen met isolatieglas" className="w-full h-96 object-cover" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Loan Calculator Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Bereken uw maandbedrag</h2>
                <p className="text-lg text-gray-600">
                  Vul hieronder in aan welk bedrag en welke looptijd u denkt. U ziet dan snel wat de lening u per maand kost.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wat is uw gewenste leenbedrag?
                    </label>
                    <div className="relative mt-1">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">€</span>
                      <input type="text" value={formatDisplayValue(loanAmount)} onChange={e => handleLoanAmountChange(e.target.value)} onBlur={e => {
                      // Ensure minimum value on blur
                      if (loanAmount < 1000 && loanAmount > 0) {
                        setLoanAmount(1000);
                      }
                    }} className="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green" placeholder="5500" />
                      <div className="absolute inset-y-0 right-0 flex items-center mr-3 text-sm text-gray-400">
                        min €1.000 - max €28.000
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Selecteer uw gewenste looptijd
                    </label>
                    <select value={loanTerm} onChange={e => setLoanTerm(parseInt(e.target.value))} className="block w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green">
                      <option value="5">5 jaar</option>
                      <option value="10">10 jaar</option>
                      <option value="15">15 jaar</option>
                      <option value="20">20 jaar</option>
                    </select>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lowIncome" checked={isLowIncome} onCheckedChange={checked => setIsLowIncome(!!checked)} />
                      <label htmlFor="lowIncome" className="text-sm font-medium text-gray-700 cursor-pointer">
                        Mijn verzamelinkomen is onder €60.000 per jaar (rentevrij)
                      </label>
                    </div>
                    {isLowIncome && <p className="mt-2 text-sm text-brand-green font-medium">
                        ✓ U komt in aanmerking voor rentevrije financiering!
                      </p>}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium mb-6 text-center">Berekening</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-600">Leenbedrag</span>
                      <span className="font-semibold">€ {loanAmount.toLocaleString('nl-NL')}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-600">Looptijd</span>
                      <span className="font-semibold">{loanTerm} jaar</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-600">Totale kosten</span>
                      <span className="font-semibold">€ {totalCost.toLocaleString('nl-NL', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}</span>
                    </div>
                    {!isLowIncome && <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Rente</span>
                        <span className="font-semibold">{interestRate}%</span>
                      </div>}
                    {isLowIncome && <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Rente</span>
                        <span className="font-semibold text-brand-green">0% (Rentevrij!)</span>
                      </div>}
                    <div className="flex justify-between pt-2">
                      <span className="text-lg font-medium">Uw maandbedrag</span>
                      <span className="text-lg font-bold text-brand-green">€ {monthlyPayment.toLocaleString('nl-NL', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white py-6" onClick={handleOfferteClick}>
                      Doe een aanvraag
                    </Button>
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      {isLowIncome ? "* Rentevrije financiering bij verzamelinkomen onder €60.000" : "* Rentepercentage afhankelijk van persoonlijke situatie en creditcheck"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Requirements Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in">
                <h2 className="text-3xl font-bold mb-8 text-center">Belangrijke voorwaarden</h2>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <AnimatedSection animation="fade-in" delay={100}>
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <h3 className="text-xl font-semibold mb-4">Lenen voor deuren, kozijnen en panelen</h3>
                    <p className="text-gray-700 mb-4">
                      Ook voor isolerende deuren, kozijnen en panelen kunt u lenen bij het Nationaal Warmtefonds. 
                      Hier zijn de belangrijkste voorwaarden:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>U bent eigenaar én bewoner van het huis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>U leent minimaal € 1.000,- en maximaal € 28.000,-</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>Het bedrijf dat de kozijnen levert, bevestigt de isolatiewaarden met een verklaring</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200}>
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <h3 className="text-xl font-semibold mb-4">Energiebesparende maatregelen</h3>
                    <p className="text-gray-700 mb-4">
                      Wilt u uw woning verduurzamen? Dan kunt u kiezen uit meer dan 20 energiebesparende maatregelen. 
                      Meerwerk dat logischerwijs aan de energiebesparende maatregelen verbonden is, financiert u gewoon mee.
                    </p>
                    <p className="text-gray-700">
                      De kosten zijn helemaal afhankelijk van het aantal ramen of deuren dat u wilt aanpakken. 
                      Informatie hierover, en over subsidie, vindt u op de website van Milieu Centraal.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="mt-12 text-center">
                <AnimatedSection animation="fade-in" delay={300}>
                  <Button size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white" onClick={handleOfferteClick}>
                    Start met verduurzamen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="mt-4 text-gray-600">
                    * Onder voorbehoud van wijzigingen door het Nationaal Warmtefonds
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>;
};
export default RentevrijeFinanciering;