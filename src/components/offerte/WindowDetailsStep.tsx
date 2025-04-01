
import React from 'react';
import { Label } from '@/components/ui/label';
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
    { 
      id: 'kunststof', 
      label: 'Kunststof kozijnen',
      image: '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png'
    },
    { 
      id: 'schuifpui', 
      label: 'Schuifpui',
      image: '/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png'
    },
    { 
      id: 'tuindeuren', 
      label: 'Tuindeuren',
      image: '/lovable-uploads/4c9a119b-a8e6-43f0-82fc-8e485c5ec3d5.png'
    },
    { 
      id: 'gehele-woning', 
      label: 'Gehele woning',
      image: '/lovable-uploads/78d706ca-fb91-4c03-82ca-97b0b0c127eb.png'
    },
    { 
      id: 'deur', 
      label: 'Voor/Achterdeur',
      image: '/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png'
    },
    { 
      id: 'anders', 
      label: 'Anders / Nader te bepalen',
      image: '/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png'
    }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {windowTypeOptions.map((option) => (
              <label
                key={option.id}
                className={`flex flex-col border rounded-lg overflow-hidden cursor-pointer transition-all hover:border-brand-green ${
                  formData.windowTypes.includes(option.id) 
                    ? 'border-brand-green bg-brand-green/5' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="aspect-video w-full bg-gray-100 overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.label} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex items-center">
                  <Checkbox
                    id={`window-type-${option.id}`}
                    checked={formData.windowTypes.includes(option.id)}
                    onCheckedChange={() => handleWindowTypeToggle(option.id)}
                    className="data-[state=checked]:bg-brand-green data-[state=checked]:text-white border-gray-300 mr-3"
                  />
                  <span>{option.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="quantity" className="text-base mb-1.5 block">Aantal kozijnen</Label>
          <Select value={formData.quantity} onValueChange={(value) => updateFormData('quantity', value)}>
            <SelectTrigger id="quantity" className="border-gray-300">
              <SelectValue placeholder="Selecteer aantal kozijnen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-3">1-3 kozijnen</SelectItem>
              <SelectItem value="3-6">3-6 kozijnen</SelectItem>
              <SelectItem value="6-9">6-9 kozijnen</SelectItem>
              <SelectItem value="9+">9 of meer kozijnen</SelectItem>
              <SelectItem value="anders">Anders / Nader te bepalen</SelectItem>
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
