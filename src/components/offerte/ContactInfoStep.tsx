
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { OfferteFormData } from '@/pages/Offerte';

interface ContactInfoStepProps {
  formData: OfferteFormData;
  updateFormData: (field: string, value: any) => void;
}

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Uw contactgegevens</h2>
        <p className="text-gray-500 mt-2">Vul uw contactgegevens in voor de offerte</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" className="text-base mb-1.5 block">Voornaam</Label>
          <Input 
            id="firstName" 
            placeholder="Voornaam" 
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className="border-gray-300"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="lastName" className="text-base mb-1.5 block">Achternaam</Label>
          <Input 
            id="lastName" 
            placeholder="Achternaam" 
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className="border-gray-300"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="text-base mb-1.5 block">E-mailadres</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="uw@email.nl" 
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className="border-gray-300"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-base mb-1.5 block">Telefoonnummer</Label>
          <Input 
            id="phone" 
            placeholder="06 12345678" 
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            className="border-gray-300"
            required
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="address" className="text-base mb-1.5 block">Adres</Label>
        <Input 
          id="address" 
          placeholder="Straatnaam en huisnummer" 
          value={formData.address}
          onChange={(e) => updateFormData('address', e.target.value)}
          className="border-gray-300"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="postalCode" className="text-base mb-1.5 block">Postcode</Label>
          <Input 
            id="postalCode" 
            placeholder="1234 AB" 
            value={formData.postalCode}
            onChange={(e) => updateFormData('postalCode', e.target.value)}
            className="border-gray-300"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="city" className="text-base mb-1.5 block">Plaats</Label>
          <Input 
            id="city" 
            placeholder="Plaats" 
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
            className="border-gray-300"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStep;
