
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ProductFormData } from './types';

interface ContentTabProps {
  form: UseFormReturn<ProductFormData>;
}

export const ContentTab: React.FC<ContentTabProps> = ({ form }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Secties</CardTitle>
        <CardDescription>Teksten voor verschillende secties van de productpagina</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="intro_text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Intro Tekst</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} placeholder="Introductie tekst voor de productpagina" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="what_are_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wat zijn [Product] Beschrijving</FormLabel>
              <FormControl>
                <Textarea {...field} rows={4} placeholder="Uitleg over wat dit product is en waarom het nuttig is" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pricing_info"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prijsinformatie</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} placeholder="Informatie over prijzen, financiering en wat er inbegrepen is" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
