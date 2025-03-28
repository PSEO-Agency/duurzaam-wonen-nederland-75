
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { OfferteFormData } from '@/pages/Offerte';

interface FinalStepProps {
  formData: OfferteFormData;
  updateFormData: (field: string, value: any) => void;
}

const FinalStep: React.FC<FinalStepProps> = ({ formData, updateFormData }) => {
  const availabilityDays = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];

  const handleAvailabilityToggle = (day: string) => {
    const currentAvailability = [...formData.availability];
    const index = currentAvailability.indexOf(day);
    
    if (index >= 0) {
      currentAvailability.splice(index, 1);
    } else {
      currentAvailability.push(day);
    }
    
    updateFormData('availability', currentAvailability);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Voorkeuren</h2>
        <p className="text-gray-500 mt-2">Bijna klaar! Geef uw contactvoorkeuren aan</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <Label className="text-base mb-3 block">Hoe wilt u dat we contact met u opnemen?</Label>
          <RadioGroup 
            value={formData.preferredContact} 
            onValueChange={(value: 'email' | 'phone') => updateFormData('preferredContact', value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.preferredContact === 'email' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="email" id="email-contact" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.preferredContact === 'email' ? 'checked' : 'unchecked'}>
                {formData.preferredContact === 'email' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-gray-600" />
                <span>Via e-mail</span>
              </div>
            </label>
            
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.preferredContact === 'phone' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="phone" id="phone-contact" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.preferredContact === 'phone' ? 'checked' : 'unchecked'}>
                {formData.preferredContact === 'phone' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gray-600" />
                <span>Via telefoon</span>
              </div>
            </label>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="text-base mb-3 block">Wanneer bent u het beste bereikbaar?</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {availabilityDays.map((day) => (
              <label
                key={day}
                className={`flex items-center border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green ${
                  formData.availability.includes(day) 
                    ? 'border-brand-green bg-brand-green/5' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <Checkbox
                  id={`availability-${day}`}
                  checked={formData.availability.includes(day)}
                  onCheckedChange={() => handleAvailabilityToggle(day)}
                  className="data-[state=checked]:bg-brand-green data-[state=checked]:text-white border-gray-300 mr-3"
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>
        
        <Card className="border-gray-200 bg-gray-50 mt-8">
          <CardContent className="p-5">
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox 
                  id="terms" 
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => updateFormData('termsAccepted', checked === true)}
                  className="data-[state=checked]:bg-brand-green data-[state=checked]:text-white border-gray-300 mt-0.5"
                />
                <div>
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium cursor-pointer"
                  >
                    Ik ga akkoord met de algemene voorwaarden en het privacybeleid*
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Door deze aanvraag te versturen, geeft u toestemming om contact met u op te nemen over uw offerte.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinalStep;
