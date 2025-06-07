
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SolutionFormData } from './types';

interface SEOTabProps {
  form: UseFormReturn<SolutionFormData>;
}

export const SEOTab: React.FC<SEOTabProps> = ({ form }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO & Meta</CardTitle>
        <CardDescription>Zoekmachine optimalisatie</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="meta_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Titel</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Maximaal 60 karakters aanbevolen</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="meta_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Beschrijving</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormDescription>Maximaal 160 karakters aanbevolen</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
