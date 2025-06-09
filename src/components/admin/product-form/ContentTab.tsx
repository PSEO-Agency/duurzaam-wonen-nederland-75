
import React from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ProductFormData } from './types';
import { ProductBenefitsFieldArray } from './ProductBenefitsFieldArray';
import { ProductFeaturesFieldArray } from './ProductFeaturesFieldArray';
import { ProductFAQFieldArray } from './ProductFAQFieldArray';

interface ContentTabProps {
  form: UseFormReturn<ProductFormData>;
}

export const ContentTab: React.FC<ContentTabProps> = ({ form }) => {
  const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({
    control: form.control,
    name: 'benefits',
  });

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control: form.control,
    name: 'features',
  });

  const { fields: faqFields, append: appendFaq, remove: removeFaq } = useFieldArray({
    control: form.control,
    name: 'faq',
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Secties</CardTitle>
        <CardDescription>Hoofdinhoud van het product</CardDescription>
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

        <ProductBenefitsFieldArray
          form={form}
          fields={benefitFields}
          append={appendBenefit}
          remove={removeBenefit}
        />

        <Separator />

        <ProductFeaturesFieldArray
          form={form}
          fields={featureFields}
          append={appendFeature}
          remove={removeFeature}
        />

        <Separator />

        <ProductFAQFieldArray
          form={form}
          fields={faqFields}
          append={appendFaq}
          remove={removeFaq}
        />
      </CardContent>
    </Card>
  );
};
