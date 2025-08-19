import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle, Info } from 'lucide-react';
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
  // Applicant type
  applicantType: 'particulier' | 'vve' | '';
  
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
  // Applicant type
  applicantType: '',
  
  // Project info
  projectType: '',
  propertyType: '',
  timeline: '',
  // Window details
  windowTypes: [],
  quantity: '',
  dimensions: '',
  color: '',
  additionalInfo: '',
  // Contact info
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  // Preferences
  preferredContact: '',
  availability: [],
  availabilitySchedule: '',
  termsAccepted: false
};

// Define webhook URLs
const FORM_SUBMISSION_ENDPOINT = 'https://n8n.virtualmin.programmaticseobuilder.com/webhook/a8d7075d-1b28-494f-86a0-c05adf144309';
// GoHighLevel webhook URL - Actual webhook URL from GoHighLevel
const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/3aRsj8TT2qcU3nkx3kWm/webhook-trigger/fe83d1b1-2118-455d-bc33-55e085692dbf';
const WEBHOOK_RETRY_ATTEMPTS = 3;
const Offerte: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OfferteFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 5;
  const navigate = useNavigate();
  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
      case 1:
        // Project Type
        if (!formData.applicantType) {
          isValid = false;
          errorMessage = 'Selecteer het type aanvrager';
        } else if (!formData.projectType) {
          isValid = false;
          errorMessage = 'Selecteer het type project';
        } else if (!formData.propertyType) {
          isValid = false;
          errorMessage = 'Selecteer het type eigendom';
        }
        break;
      case 2:
        // Window Details
        // Window types are optional
        break;
      case 3:
        // Contact Info
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
      case 4:
        // Final Step
        if (!formData.preferredContact) {
          isValid = false;
          errorMessage = 'Selecteer uw voorkeur voor contact';
        } else if (!formData.termsAccepted) {
          isValid = false;
          errorMessage = 'U moet akkoord gaan met de voorwaarden';
        }
        break;
      case 5:
        // Review
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
        description: errorMessage
      });
    }
    return isValid;
  };

  // Updated to send data to N8N webhook as a backup
  const sendFormData = async (data: OfferteFormData) => {
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
      const response = await fetch(`${FORM_SUBMISSION_ENDPOINT}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      console.log('Form data submitted successfully to N8N');
      return true;
    } catch (error) {
      console.error('Error submitting form data to N8N:', error);
      return false;
    }
  };

  // Enhanced function to send data to GoHighLevel webhook with ALL form fields
  const sendToGHLWebhook = async (data: OfferteFormData, retryCount = 0): Promise<boolean> => {
    try {
      // Format the data according to GoHighLevel webhook expectations with ALL form fields
      const ghlPayload = {
        // Contact Information
        contact: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          address: {
            line1: data.address,
            city: data.city,
            postalCode: data.postalCode,
            country: "Netherlands"
          }
        },
        // Opportunity Information
        opportunity: {
          name: `Offerte Aanvraag - ${data.firstName} ${data.lastName}`,
          value: 0,
          // Set an estimated value if known
          pipelineStageId: "new",
          // Replace with your actual pipeline stage ID
          status: "open",
          source: "Website Offerte"
        },
        // Project Details - ensure ALL form fields are included
        customFields: {
          // Applicant Type Information
          applicantType: data.applicantType,
          
          // Project Type Information
          projectType: data.projectType,
          propertyType: data.propertyType,
          timeline: data.timeline,
          // Window Details
          windowTypes: Array.isArray(data.windowTypes) ? data.windowTypes.join(", ") : data.windowTypes,
          quantity: data.quantity,
          dimensions: data.dimensions,
          color: data.color,
          additionalInfo: data.additionalInfo || "Geen extra informatie",
          // Contact Preferences
          preferredContact: data.preferredContact,
          termsAccepted: data.termsAccepted ? "Ja" : "Nee",
          // Availability details
          availabilityTimes: Array.isArray(data.availability) ? data.availability.join(", ") : data.availability,
          availabilityDetails: data.availabilitySchedule || "{}",
          // The full schedule JSON

          // Additional form metadata
          formSubmissionDate: new Date().toISOString(),
          formSubmissionOrigin: window.location.origin,
          browserInfo: navigator.userAgent
        },
        // Additional metadata
        meta: {
          timestamp: new Date().toISOString(),
          source: window.location.origin,
          formType: "Offerte Aanvraag"
        }
      };
      console.log("Sending to GHL webhook:", JSON.stringify(ghlPayload, null, 2));
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ghlPayload)
      });
      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(`GHL webhook error: ${response.status} - ${responseText}`);
      }
      console.log('Form data submitted successfully to GoHighLevel webhook');
      return true;
    } catch (error) {
      console.error('Error submitting to GoHighLevel webhook:', error);

      // Implement retry logic for transient errors
      if (retryCount < WEBHOOK_RETRY_ATTEMPTS) {
        console.log(`Retrying GHL webhook submission (${retryCount + 1}/${WEBHOOK_RETRY_ATTEMPTS})...`);
        // Exponential backoff: wait longer with each retry
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
        return sendToGHLWebhook(data, retryCount + 1);
      }
      return false;
    }
  };

  // Updated submitForm function to use both webhooks with N8N as fallback
  const submitForm = async () => {
    if (!validateCurrentStep()) return;
    setIsSubmitting(true);
    try {
      // Create a flag to track overall success status
      let submissionSuccess = false;

      // Try the GoHighLevel webhook first
      const ghlSuccess = await sendToGHLWebhook(formData);
      if (ghlSuccess) {
        submissionSuccess = true;
        console.log('GoHighLevel webhook submission successful');
      } else {
        console.warn('GoHighLevel webhook submission failed, trying backup N8N webhook...');

        // If GHL webhook fails, fall back to N8N webhook
        const n8nSuccess = await sendFormData(formData);
        if (n8nSuccess) {
          submissionSuccess = true;
          console.log('Backup N8N webhook submission successful');
        }
      }

      // If all submission methods failed
      if (!submissionSuccess) {
        throw new Error('All submission methods failed');
      }

      // Add slight delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Offerte aanvraag verzonden!",
        description: "We nemen zo spoedig mogelijk contact met u op."
      });
      navigate('/offerte/success');
      setFormData(initialFormData);
      setStep(1);
    } catch (error) {
      console.error('Error during form submission:', error);
      toast({
        variant: "destructive",
        title: "Er is een fout opgetreden",
        description: "Probeer het later opnieuw of neem telefonisch contact op."
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
        return <ProjectTypeStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <WindowDetailsStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <ContactInfoStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <FinalStep formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };
  return <>
      <Helmet>
        <title>Kunststof Kozijnen Offerte Aanvragen (Binnen 24 uur) - Duurzaam Wonen Nederland</title>
        <meta name="description" content="Vraag vrijblijvend een offerte aan voor kunststof kozijnen op maat. Vul onze eenvoudige wizard in en ontvang een gepersonaliseerde offerte." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
        <style>{`
          /* Hide chat widget on offerte page */
          div[data-widget-id="680f48b10f7b390172882aea"] {
            display: none !important;
          }
        `}</style>
      </Helmet>
      
      <Navbar />
      
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 py-[50px]">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Vraag vrijblijvend een offerte aan</h1>
            <p className="text-lg text-gray-600 mt-3">
              Maak gebruik van onze handige wizard om in enkele minuten een offerte en/of adviesgesprek aan te vragen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Card className="bg-white shadow-sm border-0">
                <CardContent className="p-6 sm:p-8">
                  {step < totalSteps ? <form onSubmit={handleNavigate}>
                      <div className="mb-8">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Stap {step} van {totalSteps}</span>
                          <span className="text-sm font-medium">{Math.round(step / totalSteps * 100)}% voltooid</span>
                        </div>
                        <Progress value={step / totalSteps * 100} className="h-2" />
                      </div>
                      
                      <div className="min-h-[400px]">
                        {renderStepContent()}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mt-8">
                        {step > 1 ? <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting} className="w-full sm:w-auto">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Vorige
                          </Button> : <div></div>}
                        
                        <Button type="submit" className="bg-brand-green hover:bg-brand-green-dark w-full sm:w-auto">
                          Volgende
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form> : <div>
                      <div className="mb-8">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Stap {step} van {totalSteps}</span>
                          <span className="text-sm font-medium">{Math.round(step / totalSteps * 100)}% voltooid</span>
                        </div>
                        <Progress value={step / totalSteps * 100} className="h-2" />
                      </div>
                      
                      <div className="min-h-[400px]">
                        {renderStepContent()}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mt-8">
                        <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting} className="w-full sm:w-auto">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Vorige
                        </Button>
                        
                        <Button type="button" className="bg-brand-green hover:bg-brand-green-dark w-full sm:w-auto" onClick={submitForm} disabled={isSubmitting}>
                          {isSubmitting ? <>Verzenden...</> : <>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Offerte aanvragen
                            </>}
                        </Button>
                      </div>
                    </div>}
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
                    <span>We plannen een vrijblijvend adviesgesprek bij u thuis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0">4</span>
                    <span>U ontvangt een aantrekkelijke offerte op maat</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>;
};
export default Offerte;
