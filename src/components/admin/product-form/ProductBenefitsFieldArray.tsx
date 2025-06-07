
import React from 'react';
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Plus, Minus } from 'lucide-react';
import { ProductFormData } from './types';

interface ProductBenefitsFieldArrayProps {
  form: UseFormReturn<ProductFormData>;
  fields: UseFieldArrayReturn<ProductFormData, 'benefits', 'id'>['fields'];
  append: UseFieldArrayReturn<ProductFormData, 'benefits', 'id'>['append'];
  remove: UseFieldArrayReturn<ProductFormData, 'benefits', 'id'>['remove'];
}

export const ProductBenefitsFieldArray: React.FC<ProductBenefitsFieldArrayProps> = ({ 
  form, 
  fields, 
  append, 
  remove 
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-medium">Voordelen</h4>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ title: '', description: '', icon: '' })}
        >
          <Plus className="h-4 w-4 mr-2" />
          Voordeel Toevoegen
        </Button>
      </div>
      
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-4 items-end mb-4">
          <FormField
            control={form.control}
            name={`benefits.${index}.title`}
            render={({ field }) => (
              <FormItem className="flex-1">
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
            name={`benefits.${index}.description`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Beschrijving</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => remove(index)}
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};
