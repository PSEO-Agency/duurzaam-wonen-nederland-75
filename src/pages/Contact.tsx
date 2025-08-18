
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact - Duurzaam Wonen Nederland</title>
        <meta name="description" content="Neem contact op met Duurzaam Wonen Nederland voor vragen over duurzame woningverbetering, kunststof kozijnen en meer." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
        <link rel="canonical" href="https://duurzaamwonen.info/contact" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-green/10 to-white py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                  Neem contact op
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Heeft u vragen over onze producten of diensten? Wilt u een offerte aanvragen of een afspraak maken? 
                  Neem gerust contact met ons op. We staan voor u klaar!
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <AnimatedSection animation="fade-in-right">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Contactgegevens</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-brand-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Telefonisch contact</h3>
                        <p className="text-gray-600 mb-2">We zijn bereikbaar op werkdagen van 08:30 tot 17:00 uur</p>
                        <a href="tel:0533030213" className="text-brand-green font-medium hover:underline">053 303 0213</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-brand-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">E-mail</h3>
                        <p className="text-gray-600 mb-2">We reageren binnen 24 uur op uw bericht</p>
                        <a href="mailto:kantoor@duurzaamwonen.info" className="text-brand-green font-medium hover:underline">kantoor@duurzaamwonen.info</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-brand-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Bezoekadres</h3>
                        <p className="text-gray-600 mb-2">Bezoek onze showroom</p>
                        <address className="not-italic text-gray-700">
                          Twenteweg 24<br />
                          7532 ST Enschede
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-brand-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Openingstijden</h3>
                        <ul className="text-gray-600 space-y-1 mt-2">
                          <li className="flex justify-between">
                            <span>Maandag t/m vrijdag:</span>
                            <span>08:30 - 17:00</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Zaterdag:</span>
                            <span>10:00 - 16:00</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Zondag:</span>
                            <span>Gesloten</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Maps */}
                  <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 h-64">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.755846848202!2d6.9433978!3d52.2229364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8154f9d9487e5%3A0xaaf6dcd78dca124c!2sDuurzaam%20Wonen%20Nederland%20in%20Enschede!5e0!3m2!1sen!2snl!4v1714675998115!5m2!1sen!2snl" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Duurzaam Wonen Nederland Locatie"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Contact Form */}
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Stuur ons een bericht</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Voornaam</Label>
                        <Input id="firstName" placeholder="Voornaam" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Achternaam</Label>
                        <Input id="lastName" placeholder="Achternaam" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mailadres</Label>
                        <Input id="email" type="email" placeholder="uw@email.nl" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoonnummer</Label>
                        <Input id="phone" type="tel" placeholder="06 12345678" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Onderwerp</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecteer een onderwerp" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">Informatie aanvraag</SelectItem>
                          <SelectItem value="quote">Offerte aanvraag</SelectItem>
                          <SelectItem value="appointment">Afspraak maken</SelectItem>
                          <SelectItem value="complaint">Klacht</SelectItem>
                          <SelectItem value="other">Anders</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Uw bericht</Label>
                      <Textarea 
                        id="message"
                        placeholder="Schrijf hier uw bericht..." 
                        rows={6}
                        required
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-brand-green hover:bg-brand-green-dark text-white">
                        <span>Verstuur bericht</span>
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Veelgestelde vragen</h2>
                <p className="text-lg text-gray-600">
                  Hieronder vindt u antwoorden op de meest gestelde vragen. Staat uw vraag er niet bij? Neem dan contact met ons op.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Hoe kan ik een offerte aanvragen?",
                  answer: "U kunt een offerte aanvragen via het contactformulier op deze pagina, telefonisch of door een e-mail te sturen. Wij nemen dan zo snel mogelijk contact met u op om uw wensen te bespreken en een vrijblijvende offerte op te stellen."
                },
                {
                  question: "Is het mogelijk om een showroom afspraak te maken?",
                  answer: "Ja, u kunt een afspraak maken om onze showroom te bezoeken. Hier kunt u onze producten bekijken en krijgt u persoonlijk advies van onze experts. Maak een afspraak via telefoon of het contactformulier."
                },
                {
                  question: "Hoe lang duurt het voordat mijn vraag wordt beantwoord?",
                  answer: "Wij streven ernaar om binnen 24 uur op uw e-mail of contactformulier te reageren op werkdagen. Telefonisch zijn we direct bereikbaar tijdens onze openingstijden."
                },
                {
                  question: "Werken jullie in heel Nederland?",
                  answer: (
                    <>
                      Ja, wij zijn actief in een groot deel van Nederland. Bekijk onze{" "}
                      <Link to="/werkgebied" className="text-brand-green hover:underline">
                        werkgebied
                      </Link>{" "}
                      pagina voor meer informatie over de regio's waarin wij actief zijn.
                    </>
                  )
                }
              ].map((faq, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
