
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
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.projectType === 'nieuwbouw' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="nieuwbouw" id="nieuwbouw" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.projectType === 'nieuwbouw' ? 'checked' : 'unchecked'}>
                {formData.projectType === 'nieuwbouw' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Nieuwbouw</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.projectType === 'renovatie' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="renovatie" id="renovatie" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.projectType === 'renovatie' ? 'checked' : 'unchecked'}>
                {formData.projectType === 'renovatie' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Renovatie</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.projectType === 'vervanging' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="vervanging" id="vervanging" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.projectType === 'vervanging' ? 'checked' : 'unchecked'}>
                {formData.projectType === 'vervanging' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Vervanging bestaande kozijnen</span>
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
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'woning' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="woning" id="woning" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'woning' ? 'checked' : 'unchecked'}>
                {formData.propertyType === 'woning' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Woning</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'bedrijfspand' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="bedrijfspand" id="bedrijfspand" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'bedrijfspand' ? 'checked' : 'unchecked'}>
                {formData.propertyType === 'bedrijfspand' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Bedrijfspand</span>
            </label>
            
            <label className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.propertyType === 'anders' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="anders" id="anders" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.propertyType === 'anders' ? 'checked' : 'unchecked'}>
                {formData.propertyType === 'anders' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <span className="flex-1">Anders</span>
            </label>
          </RadioGroup>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <Label htmlFor="timeline" className="text-base mb-1.5 block">Gewenste tijdlijn</Label>
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
            <Label htmlFor="budget" className="text-base mb-1.5 block">Budget indicatie</Label>
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
};

export default ProjectTypeStep;
