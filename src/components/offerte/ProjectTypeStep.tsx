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
          <Label className="text-base mb-3 block">Type aanvrager</Label>
          <RadioGroup 
            value={formData.applicantType} 
            onValueChange={(value) => updateFormData('applicantType', value)} 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.applicantType === 'particulier' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="particulier" id="particulier" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.applicantType === 'particulier' ? 'checked' : 'unchecked'}>
                {formData.applicantType === 'particulier' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">Particulier</span>
            </label>
            
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.applicantType === 'vve' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="vve" id="vve" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.applicantType === 'vve' ? 'checked' : 'unchecked'}>
                {formData.applicantType === 'vve' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">VvE</span>
            </label>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="text-base mb-3 block">Type project</Label>
          <RadioGroup 
            value={formData.projectType} 
            onValueChange={(value) => updateFormData('projectType', value)} 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.projectType === 'nieuwbouw' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="nieuwbouw" id="nieuwbouw" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.projectType === 'nieuwbouw' ? 'checked' : 'unchecked'}>
                {formData.projectType === 'nieuwbouw' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">Nieuwbouw</span>
            </label>
            
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.projectType === 'renovatie' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="renovatie" id="renovatie" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.projectType === 'renovatie' ? 'checked' : 'unchecked'}>
                {formData.projectType === 'renovatie' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">Renovatie</span>
            </label>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="text-base mb-3 block">Type woning</Label>
          <RadioGroup 
            value={formData.propertyType} 
            onValueChange={(value) => updateFormData('propertyType', value)} 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'eengezinswoning' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="eengezinswoning" id="eengezinswoning" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'eengezinswoning' ? 'checked' : 'unchecked'}>
                {formData.propertyType === 'eengezinswoning' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">Eengezinswoning</span>
            </label>
            
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'appartement' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="appartement" id="appartement" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'appartement' ? 'checked' : 'unchecked'}>
                {formData.propertyType === 'appartement' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">Appartement</span>
            </label>

            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'twee-onder-een-kap' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="twee-onder-een-kap" id="twee-onder-een-kap" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'twee-onder-een-kap' ? 'checked' : 'unchecked'}>
                {formData.propertyType === 'twee-onder-een-kap' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">Twee-onder-een-kapwoning</span>
            </label>
            
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'bedrijfspand' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="bedrijfspand" id="bedrijfspand" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'bedrijfspand' ? 'checked' : 'unchecked'}>
                {formData.propertyType === 'bedrijfspand' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">Bedrijfspand</span>
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
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.timeline === 'zo-snel-mogelijk' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="zo-snel-mogelijk" id="zo-snel-mogelijk" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.timeline === 'zo-snel-mogelijk' ? 'checked' : 'unchecked'}>
                {formData.timeline === 'zo-snel-mogelijk' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Zo snel mogelijk</span>
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
      </div>
    </div>
  );
};

export default ProjectTypeStep;
