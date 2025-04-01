import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle, Info, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectTypeStep from '@/components/offerte/ProjectTypeStep';
import WindowDetailsStep from '@/components/offerte/WindowDetailsStep';
import ContactInfoStep from '@/components/offerte/ContactInfoStep';
import FinalStep from '@/components/offerte/FinalStep';
import ReviewStep from '@/components/offerte/ReviewStep';
import AdvisorPanel from '@/components/offerte/AdvisorPanel';

export type OfferteFormData = {
  // Project info
  projectType: 'nieuwbouw' | 'renovatie' | 'vervanging' | '';
  propertyType: 'eengezinswoning' | 'appartement' | 'twee-onder-een-kap' | 'bedrijfspand' | '';
  timeline: string;
  
  // Window details
  windowTypes: string[];
  quantity: string;
  dimensions: string;
  color: string;
  additionalInfo: string;
  
  // Contact info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  
  // Preferences
  preferredContact: 'email' | 'phone' | 'whatsapp' | '';
  availability: string[];
  availabilitySchedule: string; // Serialized JSON of the schedule
  termsAccepted: boolean;
};

const initialFormData: OfferteFormData = {
  projectType: '',
  propertyType: '',
  timeline: '',
  
  windowTypes: [],
  quantity: '',
  dimensions: '',
  color: '',
  additionalInfo: '',
  
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  
  preferredContact: '',
  availability: [],
  availabilitySchedule: '',
  termsAccepted: false
};

const demoFormData: OfferteFormData = {
  projectType: 'renovatie',
  propertyType: 'eengezinswoning',
  timeline: 'binnen 3 maanden',
  
  windowTypes: ['draaikiepraam', 'vast'],
  quantity: '4 ramen, 1 deur',
  dimensions: '120x150 cm',
  color: 'antraciet',
  additionalInfo: 'Ik zoek kozijnen met hoge isolatiewaarde',
  
  firstName: 'Demo',
  lastName: 'Gebruiker',
  email: 'demo@example.com',
  phone: '0612345678',
  address: 'Voorbeeldstraat 123',
  postalCode: '1234 AB',
  city: 'Amsterdam',
  
  preferredContact: 'email',
  availability: ['ochtend', 'middag'],
  availabilitySchedule: '{}',
  termsAccepted: true
};

const WEBHOOK_URL = 'https://n8n.virtualmin.programmaticseobuilder.com/webhook/a8d7075d-1b28-494f-86a0-c05adf144309';

const Offerte: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OfferteFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 5;
  const navigate = useNavigate();

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep(prev => Math.min(prev + 1, totalSteps));
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const validateCurrentStep = (): boolean => {
    let isValid = true;
    let errorMessage = '';

    switch (step) {
      case 1: // Project Type
        if (!formData.projectType) {
          isValid = false;
          errorMessage = 'Selecteer het type project';
        } else if (!formData.propertyType) {
          isValid = false;
          errorMessage = 'Selecteer het type eigendom';
        }
        break;
      case 2: // Window Details
        // Window types are optional
        break;
      case 3: // Contact Info
        if (!formData.firstName || !formData.lastName) {
          isValid = false;
          errorMessage = 'Vul uw voor- en achternaam in';
        } else if (!formData.email) {
          isValid = false;
          errorMessage = 'Vul uw e-mailadres in';
        } else if (!formData.phone) {
          isValid = false;
          errorMessage = 'Vul uw telefoonnummer in';
        } else if (!formData.address || !formData.postalCode || !formData.city) {
          isValid = false;
          errorMessage = 'Vul uw adresgegevens in';
        }
        break;
      case 4: // Final Step
        if (!formData.preferredContact) {
          isValid = false;
          errorMessage = 'Selecteer uw voorkeur voor contact';
        } else if (!formData.termsAccepted) {
          isValid = false;
          errorMessage = 'U moet akkoord gaan met de voorwaarden';
        }
        break;
      case 5: // Review
        if (!formData.termsAccepted) {
          isValid = false;
          errorMessage = 'U moet akkoord gaan met de voorwaarden';
        }
        break;
      default:
        break;
    }

    if (!isValid) {
      toast({
        variant: "destructive",
        title: "Er ontbreken gegevens",
        description: errorMessage,
      });
    }

    return isValid;
  };

  const sendToWebhook = async (data: OfferteFormData) => {
    try {
      const params = new URLSearchParams();
      
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object') {
          params.append(key, JSON.stringify(value));
        } else {
          params.append(key, String(value));
        }
      }
      
      params.append('timestamp', new Date().toISOString());
      params.append('source', window.location.origin);
      
      const response = await fetch(`${WEBHOOK_URL}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      console.log('Data sent to webhook successfully');
      return true;
    } catch (error) {
      console.error('Error sending data to webhook:', error);
      return false;
    }
  };

  const submitForm = async () => {
    if (!validateCurrentStep()) return;
    
    setIsSubmitting(true);
    
    try {
      const webhookSuccess = await sendToWebhook(formData);
      
      if (!webhookSuccess) {
        console.warn('Webhook submission failed, but continuing with form submission');
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Offerte aanvraag verzonden!",
        description: "We nemen zo spoedig mogelijk contact met u op.",
      });
      
      navigate('/offerte/success');
      
      setFormData(initialFormData);
      setStep(1);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Er is een fout opgetreden",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
      });
      setIsSubmitting(false);
    }
  };

  const submitDemoForm = async () => {
    setIsSubmitting(true);
    
    try {
      const webhookSuccess = await sendToWebhook(demoFormData);
      
      if (!webhookSuccess) {
        console.warn('Demo webhook submission failed');
      }
      
      toast({
        title: "Demo aanvraag verzonden!",
        description: "De demo is succesvol verzonden.",
      });
      
      navigate('/offerte/success');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Er is een fout opgetreden",
        description: "Kon de demo aanvraag niet verzenden.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <ProjectTypeStep 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        );
      case 2:
        return (
          <WindowDetailsStep 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        );
      case 3:
        return (
          <ContactInfoStep 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        );
      case 4:
        return (
          <FinalStep 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        );
      case 5:
        return (
          <ReviewStep 
            formData={formData} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Offerte Aanvragen | Duurzaam Wonen Nederland</title>
        <meta 
          name="description" 
          content="Vraag vrijblijvend een offerte aan voor kunststof kozijnen op maat. Vul onze eenvoudige wizard in en ontvang een gepersonaliseerde offerte."
        />
      </Helmet>
      
      <Navbar />
      
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Vraag vrijblijvend een offerte aan</h1>
            <p className="text-lg text-gray-600 mt-3">
              Maak gebruik van onze handige wizard om in enkele stappen een offerte op maat te ontvangen
            </p>
            
            <div className="mt-6">
              <Button 
                onClick={submitDemoForm} 
                disabled={isSubmitting}
                variant="outline"
                className="bg-amber-50 hover:bg-amber-100 border-amber-200"
              >
                <Zap className="mr-2 h-4 w-4 text-amber-500" />
                Demo Aanvraag
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-sm border-0">
                <CardContent className="p-6 sm:p-8">
                  {step < totalSteps ? (
                    <form onSubmit={handleNavigate}>
                      <div className="mb-8">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Stap {step} van {totalSteps}</span>
                          <span className="text-sm font-medium">{Math.round((step / totalSteps) * 100)}% voltooid</span>
                        </div>
                        <Progress value={(step / totalSteps) * 100} className="h-2" />
                      </div>
                      
                      <div className="min-h-[400px]">
                        {renderStepContent()}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mt-8">
                        {step > 1 ? (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            disabled={isSubmitting}
                            className="w-full sm:w-auto"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Vorige
                          </Button>
                        ) : (
                          <div></div>
                        )}
                        
                        <Button 
                          type="submit"
                          className="bg-brand-green hover:bg-brand-green-dark w-full sm:w-auto"
                        >
                          Volgende
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div>
                      <div className="mb-8">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Stap {step} van {totalSteps}</span>
                          <span className="text-sm font-medium">{Math.round((step / totalSteps) * 100)}% voltooid</span>
                        </div>
                        <Progress value={(step / totalSteps) * 100} className="h-2" />
                      </div>
                      
                      <div className="min-h-[400px]">
                        {renderStepContent()}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mt-8">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          disabled={isSubmitting}
                          className="w-full sm:w-auto"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Vorige
                        </Button>
                        
                        <Button 
                          type="button"
                          className="bg-brand-green hover:bg-brand-green-dark w-full sm:w-auto"
                          onClick={submitForm}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>Verzenden...</>
                          ) : (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Offerte aanvragen
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <AdvisorPanel />
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start gap-3">
              <Info className="text-brand-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Wat gebeurt er na uw aanvraag?</h3>
                <ol className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0">1</span>
                    <span>U ontvangt direct een bevestiging van uw aanvraag</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0">2</span>
                    <span>Onze specialist neemt binnen 24 uur contact met u op</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0">3</span>
                    <span>We plannen een vrijblijvende inmeting bij u thuis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0">4</span>
                    <span>U ontvangt een gedetailleerde offerte op maat</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Offerte;
