
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ProductFormData } from './types';

interface HeroTabProps {
  form: UseFormReturn<ProductFormData>;
}

export const HeroTab: React.FC<HeroTabProps> = ({ form }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Sectie</CardTitle>
        <CardDescription>Hoofdafbeelding en intro tekst</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="hero_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hero Titel</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hero_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hero Beschrijving</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hero_image_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hero Afbeelding URL</FormLabel>
              <FormControl>
                <Input {...field} type="url" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
