import React, { useState, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, Check, Info, HomeIcon, FileText, Mail } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type ProjectType = 'nieuwbouw' | 'renovatie' | 'vervanging';
type PropertyType = 'woning' | 'bedrijfspand' | 'anders';
type WindowType = 'draaikiepraam' | 'vast' | 'schuifraam' | 'vouwwand' | 'anders';

interface FormData {
  projectType: ProjectType | '';
  propertyType: PropertyType | '';
  windowTypes: WindowType[];
  quantity: string;
  dimensions: string;
  color: string;
  budget: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  message: string;
  preferredContact: 'email' | 'phone' | '';
  availability: string[];
  termsAccepted: boolean;
}

const initialFormData: FormData = {
  projectType: '',
  propertyType: '',
  windowTypes: [],
  quantity: '',
  dimensions: '',
  color: '',
  budget: '',
  timeline: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  message: '',
  preferredContact: '',
  availability: [],
  termsAccepted: false
};

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Stap {currentStep} van {totalSteps}</span>
        <span className="text-sm font-medium">{Math.round(progress)}% voltooid</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

const OfferteAanvragen: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = useCallback((name: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleWindowTypeToggle = useCallback((type: WindowType) => {
    setFormData(prev => {
      const newWindowTypes = [...prev.windowTypes];
      const index = newWindowTypes.indexOf(type);
      
      if (index >= 0) {
        newWindowTypes.splice(index, 1);
      } else {
        newWindowTypes.push(type);
      }
      
      return { ...prev, windowTypes: newWindowTypes };
    });
  }, []);

  const handleAvailabilityToggle = useCallback((day: string) => {
    setFormData(prev => {
      const newAvailability = [...prev.availability];
      const index = newAvailability.indexOf(day);
      
      if (index >= 0) {
        newAvailability.splice(index, 1);
      } else {
        newAvailability.push(day);
      }
      
      return { ...prev, availability: newAvailability };
    });
  }, []);

  const nextStep = useCallback(() => {
    if (validateCurrentStep()) {
      setStep(prev => Math.min(prev + 1, totalSteps));
      window.scrollTo(0, 0);
    }
  }, [step, formData, totalSteps]);

  const prevStep = useCallback(() => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  }, []);

  const validateCurrentStep = () => {
    let isValid = true;
    let errorMessage = '';

    switch (step) {
      case 1:
        if (!formData.projectType) {
          isValid = false;
          errorMessage = 'Selecteer het type project';
        } else if (!formData.propertyType) {
          isValid = false;
          errorMessage = 'Selecteer het type eigendom';
        }
        break;
      case 2:
        // Window types are optional - no validation needed
        break;
      case 3:
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
        if (!formData.preferredContact) {
          isValid = false;
          errorMessage = 'Selecteer uw voorkeur voor contact';
        } else if (!formData.termsAccepted) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCurrentStep()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Offerte aanvraag verzonden!",
        description: "We nemen zo spoedig mogelijk contact met u op.",
      });
      
      setFormData(initialFormData);
      setStep(1);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Er is een fout opgetreden",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const windowTypeOptions = useMemo(() => [
    { id: 'draaikiepraam', label: 'Draaikiepraam' },
    { id: 'vast', label: 'Vast raam' },
    { id: 'schuifraam', label: 'Schuifraam' },
    { id: 'vouwwand', label: 'Vouwwand' },
    { id: 'anders', label: 'Anders' }
  ], []);

  const availabilityDays = useMemo(() => 
    ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
  []);

  const renderWindowTypeCard = useCallback((option: { id: string; label: string }) => {
    const isChecked = formData.windowTypes.includes(option.id as WindowType);
    
    return (
      <div 
        key={option.id}
        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
          isChecked ? 'border-brand-green bg-brand-green/5' : 'hover:border-gray-400'
        }`}
        onClick={() => handleWindowTypeToggle(option.id as WindowType)}
      >
        <div className="flex items-center space-x-2">
          <Checkbox 
            id={`window-type-${option.id}`}
            checked={isChecked}
            onCheckedChange={() => {}}
            className="pointer-events-none"
          />
          <Label htmlFor={`window-type-${option.id}`} className="cursor-pointer">{option.label}</Label>
        </div>
      </div>
    );
  }, [formData.windowTypes, handleWindowTypeToggle]);

  const renderAvailabilityCard = useCallback((day: string) => {
    const isChecked = formData.availability.includes(day);
    
    return (
      <div 
        key={day}
        className={`border rounded-lg p-3 cursor-pointer transition-colors ${
          isChecked ? 'border-brand-green bg-brand-green/5' : 'hover:border-gray-400'
        }`}
        onClick={() => handleAvailabilityToggle(day)}
      >
        <div className="flex items-center space-x-2">
          <Checkbox 
            id={`availability-${day}`}
            checked={isChecked}
            onCheckedChange={() => {}}
            className="pointer-events-none"
          />
          <Label htmlFor={`availability-${day}`} className="cursor-pointer">{day}</Label>
        </div>
      </div>
    );
  }, [formData.availability, handleAvailabilityToggle]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Wat voor project heeft u?</h2>
              <p className="text-gray-500 mt-2">Help ons uw project beter te begrijpen</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-base mb-2 block">Type project</Label>
                <RadioGroup 
                  value={formData.projectType} 
                  onValueChange={(value: ProjectType) => updateFormData('projectType', value)} 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-brand-green transition-colors">
                    <RadioGroupItem value="nieuwbouw" id="nieuwbouw" />
                    <Label htmlFor="nieuwbouw" className="flex-1 cursor-pointer">Nieuwbouw</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-brand-green transition-colors">
                    <RadioGroupItem value="renovatie" id="renovatie" />
                    <Label htmlFor="renovatie" className="flex-1 cursor-pointer">Renovatie</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-brand-green transition-colors">
                    <RadioGroupItem value="vervanging" id="vervanging" />
                    <Label htmlFor="vervanging" className="flex-1 cursor-pointer">Vervanging bestaande kozijnen</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mt-6">
                <Label className="text-base mb-2 block">Type pand</Label>
                <RadioGroup 
                  value={formData.propertyType} 
                  onValueChange={(value: PropertyType) => updateFormData('propertyType', value)} 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-brand-green transition-colors">
                    <RadioGroupItem value="woning" id="woning" />
                    <Label htmlFor="woning" className="flex-1 cursor-pointer">Woning</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-brand-green transition-colors">
                    <RadioGroupItem value="bedrijfspand" id="bedrijfspand" />
                    <Label htmlFor="bedrijfspand" className="flex-1 cursor-pointer">Bedrijfspand</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-brand-green transition-colors">
                    <RadioGroupItem value="anders" id="anders" />
                    <Label htmlFor="anders" className="flex-1 cursor-pointer">Anders</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label htmlFor="timeline">Gewenste tijdlijn</Label>
                  <Select value={formData.timeline} onValueChange={(value) => updateFormData('timeline', value)}>
                    <SelectTrigger id="timeline">
                      <SelectValue placeholder="Wanneer wilt u starten?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-3 maanden">Binnen 3 maanden</SelectItem>
                      <SelectItem value="3-6 maanden">3 tot 6 maanden</SelectItem>
                      <SelectItem value="6-12 maanden">6 tot 12 maanden</SelectItem>
                      <SelectItem value="orienterend">Alleen oriënterend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="budget">Budget indicatie</Label>
                  <Select value={formData.budget} onValueChange={(value) => updateFormData('budget', value)}>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Wat is uw budget?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="< €5.000">Minder dan €5.000</SelectItem>
                      <SelectItem value="€5.000 - €10.000">€5.000 - €10.000</SelectItem>
                      <SelectItem value="€10.000 - €20.000">€10.000 - €20.000</SelectItem>
                      <SelectItem value="> €20.000">Meer dan €20.000</SelectItem>
                      <SelectItem value="geen idee">Nog geen idee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Welke kozijnen heeft u nodig?</h2>
              <p className="text-gray-500 mt-2">Specificeer de details van uw gewenste kozijnen (optioneel)</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <Label className="text-base mb-2 block">Type kozijnen (meerdere opties mogelijk, optioneel)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                  {windowTypeOptions.map(renderWindowTypeCard)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="quantity">Aantal kozijnen (schatting)</Label>
                  <Input 
                    id="quantity" 
                    placeholder="Bijv. 5 ramen, 2 deuren" 
                    value={formData.quantity}
                    onChange={(e) => updateFormData('quantity', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="dimensions">Afmetingen (indien bekend)</Label>
                  <Input 
                    id="dimensions" 
                    placeholder="Bijv. 100x150 cm" 
                    value={formData.dimensions}
                    onChange={(e) => updateFormData('dimensions', e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="color">Gewenste kleur</Label>
                <Select value={formData.color} onValueChange={(value) => updateFormData('color', value)}>
                  <SelectTrigger id="color">
                    <SelectValue placeholder="Selecteer een kleur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wit">Wit</SelectItem>
                    <SelectItem value="crème">Crème</SelectItem>
                    <SelectItem value="grijs">Grijs</SelectItem>
                    <SelectItem value="antraciet">Antraciet</SelectItem>
                    <SelectItem value="zwart">Zwart</SelectItem>
                    <SelectItem value="houtlook">Houtlook</SelectItem>
                    <SelectItem value="anders">Anders / weet ik nog niet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Aanvullende informatie</Label>
                <Textarea 
                  id="message" 
                  placeholder="Heeft u specifieke wensen of vragen over uw kozijnen?" 
                  className="min-h-[100px]"
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Uw gegevens</h2>
              <p className="text-gray-500 mt-2">Vul uw contactgegevens in voor de offerte</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">Voornaam</Label>
                <Input 
                  id="firstName" 
                  placeholder="Voornaam" 
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Achternaam</Label>
                <Input 
                  id="lastName" 
                  placeholder="Achternaam" 
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">E-mailadres</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="uw@email.nl" 
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefoonnummer</Label>
                <Input 
                  id="phone" 
                  placeholder="06 12345678" 
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="address">Adres</Label>
              <Input 
                id="address" 
                placeholder="Straatnaam en huisnummer" 
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="postalCode">Postcode</Label>
                <Input 
                  id="postalCode" 
                  placeholder="1234 AB" 
                  value={formData.postalCode}
                  onChange={(e) => updateFormData('postalCode', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="city">Plaats</Label>
                <Input 
                  id="city" 
                  placeholder="Plaats" 
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Bevestig uw aanvraag</h2>
              <p className="text-gray-500 mt-2">We nemen zo snel mogelijk contact met u op</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <Label className="text-base mb-2 block">Hoe wilt u dat we contact met u opnemen?</Label>
                <RadioGroup 
                  value={formData.preferredContact} 
                  onValueChange={(value: 'email' | 'phone') => updateFormData('preferredContact', value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-brand-green transition-colors">
                    <RadioGroupItem value="email" id="email-contact" />
                    <Label htmlFor="email-contact" className="flex items-center gap-2 cursor-pointer">
                      <Mail size={18} /> 
                      <span>Via e-mail</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-brand-green transition-colors">
                    <RadioGroupItem value="phone" id="phone-contact" />
                    <Label htmlFor="phone-contact" className="flex items-center gap-2 cursor-pointer">
                      <FileText size={18} /> 
                      <span>Via telefoon</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="text-base mb-2 block">Wanneer bent u het beste bereikbaar?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  {availabilityDays.map(renderAvailabilityCard)}
                </div>
              </div>
              
              <Card className="border-green-100 bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="text-brand-green mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900">Wat gebeurt er na uw aanvraag?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        1. U ontvangt direct een bevestiging van uw aanvraag
                        <br />
                        2. Onze specialist neemt binnen 24 uur contact met u op
                        <br />
                        3. We plannen een vrijblijvende inmeting bij u thuis
                        <br />
                        4. U ontvangt een gedetailleerde offerte op maat
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => updateFormData('termsAccepted', checked === true)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    Ik ga akkoord met de algemene voorwaarden en het privacybeleid
                  </Label>
                  <p className="text-sm text-gray-500">
                    Door deze aanvraag te versturen, geeft u toestemming om contact met u op te nemen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Offerte Aanvragen | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Vraag vrijblijvend een offerte aan voor kunststof kozijnen op maat. Vul onze eenvoudige wizard in en ontvang een gepersonaliseerde offerte." />
      </Helmet>
      
      <Navbar />
      
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Vraag vrijblijvend een offerte aan</h1>
            <p className="text-lg text-gray-600 mt-3">
              Maak gebruik van onze handige wizard om in enkele stappen een offerte op maat te ontvangen
            </p>
          </div>
          
          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                <StepIndicator currentStep={step} totalSteps={totalSteps} />
                
                {renderStep()}
                
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mt-8">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Vorige
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {step < totalSteps ? (
                    <Button 
                      type="button"
                      onClick={nextStep}
                      className="bg-brand-green hover:bg-brand-green-dark"
                    >
                      Volgende
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="bg-brand-green hover:bg-brand-green-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Verzenden...</>
                      ) : (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Offerte aanvragen
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default OfferteAanvragen;
