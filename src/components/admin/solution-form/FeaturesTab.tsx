
import React from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Plus, Minus } from 'lucide-react';
import { SolutionFormData } from './types';

interface FeaturesTabProps {
  form: UseFormReturn<SolutionFormData>;
}

export const FeaturesTab: React.FC<FeaturesTabProps> = ({ form }) => {
  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control: form.control,
    name: 'features',
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Features</CardTitle>
        <CardDescription>Kenmerken en eigenschappen</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-medium">Product Features</h4>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendFeature({ title: '', description: '' })}
          >
            <Plus className="h-4 w-4 mr-2" />
            Feature Toevoegen
          </Button>
        </div>
        
        {featureFields.map((field, index) => (
          <div key={field.id} className="flex gap-4 items-end mb-4">
            <FormField
              control={form.control}
              name={`features.${index}.title`}
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
              name={`features.${index}.description`}
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
              onClick={() => removeFeature(index)}
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
