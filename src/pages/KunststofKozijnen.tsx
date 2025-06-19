
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Filter, ArrowRight, ArrowDown, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import WhatAreKozijnen from '@/components/kunststof-kozijnen/WhatAreKozijnen';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import RegionsSection from '@/components/kunststof-kozijnen/RegionsSection';
import Services from '@/components/kunststof-kozijnen/Services';
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Reviews from '@/components/Reviews';
import ContactCTA from '@/components/ContactCTA';
import ProductFilters from '@/components/kunststof-kozijnen/ProductFilters';
import KozijnenHero from '@/components/kunststof-kozijnen/KozijnenHero';
import ProductTypes from '@/components/kunststof-kozijnen/ProductTypes';
import Benefits from '@/components/kunststof-kozijnen/Benefits';
import Brands from '@/components/kunststof-kozijnen/Brands';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

console.log('KunststofKozijnen page loading...');

const KunststofKozijnen: React.FC = () => {
  console.log('KunststofKozijnen component rendering');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Kunststof Kozijnen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Bekijk ons assortiment kunststof kozijnen. Hoogwaardige, energiezuinige en onderhoudsarme kozijnen voor uw woning." />
        <link rel="canonical" href="https://duurzaamwonen.info/kunststof-kozijnen" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <KozijnenHero />
        
        <StickyNavigation />
        
        <section id="introductie" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Kunststof Kozijnen - De Ideale Oplossing</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    Kunststof kozijnen zijn dé ideale keuze voor wie op zoek is naar een combinatie van duurzaamheid, betaalbaarheid en stijl. 
                    Met hun onderhoudsvrije eigenschappen, uitstekende isolatie en lange levensduur bieden ze een perfecte oplossing voor 
                    zowel moderne als traditionele woningen.
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-brand-green hover:bg-brand-green-dark text-white px-6">
                    <span>Vraag nu vrijblijvend een offerte aan</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <WhatAreKozijnen />
        
        <Benefits />
        
        <ProductTypes />
        
        <ProductFilters />
        
        <Services />
        
        <Projects />
        
        <Brands />
        
        <Workflow />
        
        <Reviews />
        
        <RegionsSection />
        
        <ContactCTA />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default KunststofKozijnen;
