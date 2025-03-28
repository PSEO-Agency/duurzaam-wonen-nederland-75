
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OfferteFormData } from '@/pages/Offerte';

interface ProjectTypeStepProps {
  formData: OfferteFormData;
  updateFormData: (field: string, value: any) => void;
}

const ProjectTypeStep: React.FC<ProjectTypeStepProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Wat voor project heeft u?</h2>
        <p className="text-gray-500 mt-2">Help ons uw project beter te begrijpen</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <Label className="text-base mb-3 block">Type project</Label>
          <RadioGroup 
            value={formData.projectType} 
            onValueChange={(value) => updateFormData('projectType', value)} 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <label className="flex flex-col border rounded-lg cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.projectType === 'nieuwbouw' ? 'checked' : 'unchecked'}>
              <div className="aspect-video w-full bg-gray-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png" 
                  alt="Nieuwbouw" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center">
                <RadioGroupItem value="nieuwbouw" id="nieuwbouw" className="sr-only" />
                <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.projectType === 'nieuwbouw' ? 'checked' : 'unchecked'}>
                  {formData.projectType === 'nieuwbouw' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2">Nieuwbouw</span>
              </div>
            </label>
            
            <label className="flex flex-col border rounded-lg cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.projectType === 'renovatie' ? 'checked' : 'unchecked'}>
              <div className="aspect-video w-full bg-gray-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/78d706ca-fb91-4c03-82ca-97b0b0c127eb.png" 
                  alt="Renovatie" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center">
                <RadioGroupItem value="renovatie" id="renovatie" className="sr-only" />
                <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.projectType === 'renovatie' ? 'checked' : 'unchecked'}>
                  {formData.projectType === 'renovatie' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2">Renovatie</span>
              </div>
            </label>
            
            <label className="flex flex-col border rounded-lg cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.projectType === 'vervanging' ? 'checked' : 'unchecked'}>
              <div className="aspect-video w-full bg-gray-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png" 
                  alt="Vervanging kozijnen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center">
                <RadioGroupItem value="vervanging" id="vervanging" className="sr-only" />
                <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.projectType === 'vervanging' ? 'checked' : 'unchecked'}>
                  {formData.projectType === 'vervanging' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2">Vervanging bestaande kozijnen</span>
              </div>
            </label>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="text-base mb-3 block">Type pand</Label>
          <RadioGroup 
            value={formData.propertyType} 
            onValueChange={(value) => updateFormData('propertyType', value)} 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <label className="flex flex-col border rounded-lg cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'woning' ? 'checked' : 'unchecked'}>
              <div className="aspect-video w-full bg-gray-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                  alt="Woning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center">
                <RadioGroupItem value="woning" id="woning" className="sr-only" />
                <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'woning' ? 'checked' : 'unchecked'}>
                  {formData.propertyType === 'woning' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2">Woning</span>
              </div>
            </label>
            
            <label className="flex flex-col border rounded-lg cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'bedrijfspand' ? 'checked' : 'unchecked'}>
              <div className="aspect-video w-full bg-gray-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/16c4e987-ea24-4f28-adf8-f1e4a100cc98.png" 
                  alt="Bedrijfspand" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center">
                <RadioGroupItem value="bedrijfspand" id="bedrijfspand" className="sr-only" />
                <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'bedrijfspand' ? 'checked' : 'unchecked'}>
                  {formData.propertyType === 'bedrijfspand' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2">Bedrijfspand</span>
              </div>
            </label>
            
            <label className="flex flex-col border rounded-lg cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'anders' ? 'checked' : 'unchecked'}>
              <div className="aspect-video w-full bg-gray-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png" 
                  alt="Anders" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center">
                <RadioGroupItem value="anders" id="anders" className="sr-only" />
                <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'anders' ? 'checked' : 'unchecked'}>
                  {formData.propertyType === 'anders' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2">Anders</span>
              </div>
            </label>
          </RadioGroup>
        </div>
        
        <div className="mt-6">
          <Label className="text-base mb-3 block">Gewenste tijdlijn</Label>
          <RadioGroup 
            value={formData.timeline} 
            onValueChange={(value) => updateFormData('timeline', value)} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.timeline === 'per-direct' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="per-direct" id="per-direct" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.timeline === 'per-direct' ? 'checked' : 'unchecked'}>
                {formData.timeline === 'per-direct' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Per direct!</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.timeline === '0-3 maanden' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="0-3 maanden" id="0-3-maanden" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.timeline === '0-3 maanden' ? 'checked' : 'unchecked'}>
                {formData.timeline === '0-3 maanden' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Binnen 3 maanden</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.timeline === '3-6 maanden' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="3-6 maanden" id="3-6-maanden" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.timeline === '3-6 maanden' ? 'checked' : 'unchecked'}>
                {formData.timeline === '3-6 maanden' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">3 tot 6 maanden</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.timeline === 'orienterend' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="orienterend" id="orienterend" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.timeline === 'orienterend' ? 'checked' : 'unchecked'}>
                {formData.timeline === 'orienterend' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Oriënterend</span>
            </label>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="text-base mb-3 block">Budget indicatie</Label>
          <RadioGroup 
            value={formData.budget} 
            onValueChange={(value) => updateFormData('budget', value)} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.budget === '< €5.000' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="< €5.000" id="budget-1" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.budget === '< €5.000' ? 'checked' : 'unchecked'}>
                {formData.budget === '< €5.000' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Minder dan €5.000</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.budget === '€5.000 - €10.000' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="€5.000 - €10.000" id="budget-2" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.budget === '€5.000 - €10.000' ? 'checked' : 'unchecked'}>
                {formData.budget === '€5.000 - €10.000' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">€5.000 - €10.000</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.budget === '€10.000 - €20.000' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="€10.000 - €20.000" id="budget-3" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.budget === '€10.000 - €20.000' ? 'checked' : 'unchecked'}>
                {formData.budget === '€10.000 - €20.000' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">€10.000 - €20.000</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.budget === '> €20.000' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="> €20.000" id="budget-4" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.budget === '> €20.000' ? 'checked' : 'unchecked'}>
                {formData.budget === '> €20.000' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Meer dan €20.000</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.budget === 'geen idee' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="geen idee" id="budget-5" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.budget === 'geen idee' ? 'checked' : 'unchecked'}>
                {formData.budget === 'geen idee' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Nog geen idee</span>
            </label>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypeStep;
