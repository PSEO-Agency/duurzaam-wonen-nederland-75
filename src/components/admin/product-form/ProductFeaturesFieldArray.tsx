
import React from 'react';
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Plus, Minus } from 'lucide-react';
import { ProductFormData } from './types';

interface ProductFeaturesFieldArrayProps {
  form: UseFormReturn<ProductFormData>;
  fields: UseFieldArrayReturn<ProductFormData, 'features', 'id'>['fields'];
  append: UseFieldArrayReturn<ProductFormData, 'features', 'id'>['append'];
  remove: UseFieldArrayReturn<ProductFormData, 'features', 'id'>['remove'];
}

export const ProductFeaturesFieldArray: React.FC<ProductFeaturesFieldArrayProps> = ({ 
  form, 
  fields, 
  append, 
  remove 
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-medium">Kenmerken</h4>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ title: '', description: '' })}
        >
          <Plus className="h-4 w-4 mr-2" />
          Kenmerk Toevoegen
        </Button>
      </div>
      
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
          <div className="flex justify-between items-start">
            <h5 className="font-medium">Kenmerk #{index + 1}</h5>
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
            name={`features.${index}.title`}
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
            name={`features.${index}.description`}
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
