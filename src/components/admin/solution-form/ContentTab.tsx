
import React from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SolutionFormData } from './types';
import { BenefitsFieldArray } from './BenefitsFieldArray';
import { FAQFieldArray } from './FAQFieldArray';

interface ContentTabProps {
  form: UseFormReturn<SolutionFormData>;
}

export const ContentTab: React.FC<ContentTabProps> = ({ form }) => {
  const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({
    control: form.control,
    name: 'benefits',
  });

  const { fields: faqFields, append: appendFaq, remove: removeFaq } = useFieldArray({
    control: form.control,
    name: 'faq',
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Secties</CardTitle>
        <CardDescription>Hoofdinhoud van de oplossing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="intro_text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Intro Tekst</FormLabel>
              <FormControl>
                <Textarea {...field} rows={4} />
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
              <FormLabel>Wat Zijn... Beschrijving</FormLabel>
              <FormControl>
                <Textarea {...field} rows={4} />
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
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />

        <BenefitsFieldArray
          form={form}
          fields={benefitFields}
          append={appendBenefit}
          remove={removeBenefit}
        />

        <Separator />

        <FAQFieldArray
          form={form}
          fields={faqFields}
          append={appendFaq}
          remove={removeFaq}
        />
      </CardContent>
    </Card>
  );
};
