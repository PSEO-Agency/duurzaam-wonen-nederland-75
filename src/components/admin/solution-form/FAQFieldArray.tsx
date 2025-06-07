
import React from 'react';
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Plus, Minus } from 'lucide-react';
import { SolutionFormData } from './types';

interface FAQFieldArrayProps {
  form: UseFormReturn<SolutionFormData>;
  fields: UseFieldArrayReturn<SolutionFormData, 'faq', 'id'>['fields'];
  append: UseFieldArrayReturn<SolutionFormData, 'faq', 'id'>['append'];
  remove: UseFieldArrayReturn<SolutionFormData, 'faq', 'id'>['remove'];
}

export const FAQFieldArray: React.FC<FAQFieldArrayProps> = ({ 
  form, 
  fields, 
  append, 
  remove 
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-medium">FAQ</h4>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ question: '', answer: '' })}
        >
          <Plus className="h-4 w-4 mr-2" />
          FAQ Toevoegen
        </Button>
      </div>
      
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
          <div className="flex justify-between items-start">
            <h5 className="font-medium">FAQ #{index + 1}</h5>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => remove(index)}
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
          
          <FormField
            control={form.control}
            name={`faq.${index}.question`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vraag</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name={`faq.${index}.answer`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Antwoord</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}
    </div>
  );
};
