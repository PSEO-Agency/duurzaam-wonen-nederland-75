
import React from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Plus, Minus } from 'lucide-react';
import { SolutionFormData } from './types';

interface WorkflowTabProps {
  form: UseFormReturn<SolutionFormData>;
}

export const WorkflowTab: React.FC<WorkflowTabProps> = ({ form }) => {
  const { fields: workflowFields, append: appendWorkflow, remove: removeWorkflow } = useFieldArray({
    control: form.control,
    name: 'workflow_steps',
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Werkwijze</CardTitle>
        <CardDescription>Stappen in het proces</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-medium">Workflow Stappen</h4>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              const nextStep = workflowFields.length + 1;
              appendWorkflow({ step: nextStep, title: '', description: '' });
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Stap Toevoegen
          </Button>
        </div>
        
        {workflowFields.map((field, index) => (
          <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
            <div className="flex justify-between items-start">
              <h5 className="font-medium">Stap {index + 1}</h5>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeWorkflow(index)}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name={`workflow_steps.${index}.step`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stap #</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          {...field} 
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="col-span-10">
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
              </div>
            </div>
            
            <FormField
              control={form.control}
              name={`workflow_steps.${index}.description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beschrijving</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={2} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
