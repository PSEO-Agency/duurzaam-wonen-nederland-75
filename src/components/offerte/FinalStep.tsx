
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Phone, MessageSquare, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { OfferteFormData } from '@/pages/Offerte';

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
}

interface DaySchedule {
  day: string;
  slots: TimeSlot[];
}

interface FinalStepProps {
  formData: OfferteFormData;
  updateFormData: (field: string, value: any) => void;
}

const FinalStep: React.FC<FinalStepProps> = ({ formData, updateFormData }) => {
  const days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];
  
  // Parse the availability from string format to DaySchedule objects
  const parseAvailability = (): DaySchedule[] => {
    if (!formData.availabilitySchedule) {
      // Initialize with empty schedule for each day
      return days.map(day => ({
        day,
        slots: []
      }));
    }
    
    try {
      return JSON.parse(formData.availabilitySchedule);
    } catch (e) {
      // If parsing fails, return empty schedule
      return days.map(day => ({
        day,
        slots: []
      }));
    }
  };
  
  const [schedule, setSchedule] = React.useState<DaySchedule[]>(parseAvailability());
  
  // Update the availability in formData when schedule changes
  React.useEffect(() => {
    updateFormData('availabilitySchedule', JSON.stringify(schedule));
    // Create a formatted string representation for the review step
    const formattedAvailability = schedule
      .filter(day => day.slots.length > 0)
      .map(day => {
        const slotTexts = day.slots.map(slot => `${slot.startTime}-${slot.endTime}`);
        return `${day.day}: ${slotTexts.join(', ')}`;
      });
    updateFormData('availability', formattedAvailability);
  }, [schedule]);
  
  // Add a new time slot to a specific day
  const addTimeSlot = (dayIndex: number) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].slots.push({
      id: `slot-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      startTime: '09:00',
      endTime: '12:00'
    });
    setSchedule(newSchedule);
  };
  
  // Remove a time slot
  const removeTimeSlot = (dayIndex: number, slotIndex: number) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].slots.splice(slotIndex, 1);
    setSchedule(newSchedule);
  };
  
  // Update a time slot
  const updateTimeSlot = (dayIndex: number, slotIndex: number, field: 'startTime' | 'endTime', value: string) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].slots[slotIndex][field] = value;
    setSchedule(newSchedule);
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
            onValueChange={(value: 'email' | 'phone' | 'whatsapp') => updateFormData('preferredContact', value)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
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
            
            <label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:border-brand-green hover:bg-brand-green/5 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5" data-state={formData.preferredContact === 'whatsapp' ? 'checked' : 'unchecked'}>
              <RadioGroupItem value="whatsapp" id="whatsapp-contact" className="sr-only" />
              <div className="rounded-full w-5 h-5 border border-gray-300 flex items-center justify-center data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green" data-state={formData.preferredContact === 'whatsapp' ? 'checked' : 'unchecked'}>
                {formData.preferredContact === 'whatsapp' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-gray-600" />
                <span>Via WhatsApp</span>
              </div>
            </label>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="text-base mb-3 block">Wanneer bent u het beste bereikbaar?</Label>
          <p className="text-sm text-gray-500 mb-4">Voeg tijdslots toe voor de dagen waarop u beschikbaar bent.</p>
          
          <div className="space-y-4">
            {schedule.map((day, dayIndex) => (
              <div key={day.day} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">{day.day}</h4>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => addTimeSlot(dayIndex)}
                    className="text-xs"
                  >
                    <Plus className="h-3.5 w-3.5 mr-1" />
                    Tijdslot toevoegen
                  </Button>
                </div>
                
                {day.slots.length === 0 ? (
                  <p className="text-sm text-gray-500 italic">Geen beschikbaarheid opgegeven</p>
                ) : (
                  <div className="space-y-2">
                    {day.slots.map((slot, slotIndex) => (
                      <div key={slot.id} className="flex items-center gap-2">
                        <div className="grid grid-cols-2 gap-2 flex-1">
                          <div>
                            <Label htmlFor={`${day.day}-start-${slotIndex}`} className="sr-only">Starttijd</Label>
                            <Input
                              id={`${day.day}-start-${slotIndex}`}
                              type="time"
                              value={slot.startTime}
                              onChange={(e) => updateTimeSlot(dayIndex, slotIndex, 'startTime', e.target.value)}
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`${day.day}-end-${slotIndex}`} className="sr-only">Eindtijd</Label>
                            <Input
                              id={`${day.day}-end-${slotIndex}`}
                              type="time"
                              value={slot.endTime}
                              onChange={(e) => updateTimeSlot(dayIndex, slotIndex, 'endTime', e.target.value)}
                              className="text-sm"
                            />
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeTimeSlot(dayIndex, slotIndex)}
                          className="h-8 w-8 text-gray-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
