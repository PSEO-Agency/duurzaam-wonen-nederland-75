
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { OfferteFormData } from '@/pages/Offerte';

interface WindowDetailsStepProps {
  formData: OfferteFormData;
  updateFormData: (field: string, value: any) => void;
}

const WindowDetailsStep: React.FC<WindowDetailsStepProps> = ({ formData, updateFormData }) => {
  const windowTypeOptions = [
    { id: 'draaikiepraam', label: 'Draaikiepraam' },
    { id: 'vast', label: 'Vast raam' },
    { id: 'schuifraam', label: 'Schuifraam' },
    { id: 'vouwwand', label: 'Vouwwand' },
    { id: 'anders', label: 'Anders' }
  ];

  const handleWindowTypeToggle = (type: string) => {
    const currentTypes = [...formData.windowTypes];
    const index = currentTypes.indexOf(type);
    
    if (index >= 0) {
      currentTypes.splice(index, 1);
    } else {
      currentTypes.push(type);
    }
    
    updateFormData('windowTypes', currentTypes);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Welke kozijnen heeft u nodig?</h2>
        <p className="text-gray-500 mt-2">Specificeer de details van uw gewenste kozijnen (optioneel)</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <Label className="text-base mb-2 block">Type kozijnen (meerdere opties mogelijk)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
            {windowTypeOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-center border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green ${
                  formData.windowTypes.includes(option.id) 
                    ? 'border-brand-green bg-brand-green/5' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <Checkbox
                  id={`window-type-${option.id}`}
                  checked={formData.windowTypes.includes(option.id)}
                  onCheckedChange={() => handleWindowTypeToggle(option.id)}
                  className="data-[state=checked]:bg-brand-green data-[state=checked]:text-white border-gray-300 mr-3"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="quantity" className="text-base mb-1.5 block">Aantal kozijnen (schatting)</Label>
            <Input 
              id="quantity" 
              placeholder="Bijv. 5 ramen, 2 deuren" 
              value={formData.quantity}
              onChange={(e) => updateFormData('quantity', e.target.value)}
              className="border-gray-300"
            />
          </div>
          
          <div>
            <Label htmlFor="dimensions" className="text-base mb-1.5 block">Afmetingen (indien bekend)</Label>
            <Input 
              id="dimensions" 
              placeholder="Bijv. 100x150 cm" 
              value={formData.dimensions}
              onChange={(e) => updateFormData('dimensions', e.target.value)}
              className="border-gray-300"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="color" className="text-base mb-1.5 block">Gewenste kleur</Label>
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
          <Label htmlFor="additionalInfo" className="text-base mb-1.5 block">Aanvullende informatie</Label>
          <Textarea 
            id="additionalInfo" 
            placeholder="Heeft u specifieke wensen of vragen over uw kozijnen?" 
            className="min-h-[120px] border-gray-300"
            value={formData.additionalInfo}
            onChange={(e) => updateFormData('additionalInfo', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default WindowDetailsStep;
