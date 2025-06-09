
import React from 'react';
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Plus, Minus } from 'lucide-react';
import { ProductFormData } from './types';

interface ProductQuickLinksFieldArrayProps {
  form: UseFormReturn<ProductFormData>;
  fields: UseFieldArrayReturn<ProductFormData, 'quick_links', 'id'>['fields'];
  append: UseFieldArrayReturn<ProductFormData, 'quick_links', 'id'>['append'];
  remove: UseFieldArrayReturn<ProductFormData, 'quick_links', 'id'>['remove'];
}

export const ProductQuickLinksFieldArray: React.FC<ProductQuickLinksFieldArrayProps> = ({ 
  form, 
  fields, 
  append, 
  remove 
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-medium">Snelle Links</h4>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ label: '', href: '' })}
        >
          <Plus className="h-4 w-4 mr-2" />
          Link Toevoegen
        </Button>
      </div>
      
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
          <div className="flex justify-between items-start">
            <h5 className="font-medium">Link #{index + 1}</h5>
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
            name={`quick_links.${index}.label`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Bijv. Offerte aanvragen" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name={`quick_links.${index}.href`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Bijv. /offerte" />
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
