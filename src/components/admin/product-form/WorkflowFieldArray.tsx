
import React from 'react';
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Plus, Minus } from 'lucide-react';
import { ProductFormData } from './types';

interface ProductWorkflowFieldArrayProps {
  form: UseFormReturn<ProductFormData>;
  fields: UseFieldArrayReturn<ProductFormData, 'workflow_steps', 'id'>['fields'];
  append: UseFieldArrayReturn<ProductFormData, 'workflow_steps', 'id'>['append'];
  remove: UseFieldArrayReturn<ProductFormData, 'workflow_steps', 'id'>['remove'];
}

export const ProductWorkflowFieldArray: React.FC<ProductWorkflowFieldArrayProps> = ({ 
  form, 
  fields, 
  append, 
  remove 
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-medium">Werkwijze Stappen</h4>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ step: fields.length + 1, title: '', description: '' })}
        >
          <Plus className="h-4 w-4 mr-2" />
          Stap Toevoegen
        </Button>
      </div>
      
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
          <div className="flex justify-between items-start">
            <h5 className="font-medium">Stap #{index + 1}</h5>
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
            name={`workflow_steps.${index}.step`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stap Nummer</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="1" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name={`workflow_steps.${index}.title`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titel</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name={`workflow_steps.${index}.description`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beschrijving</FormLabel>
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
