
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

interface ProductWorkflowProps {
  workflowSteps: WorkflowStep[];
}

const ProductWorkflow: React.FC<ProductWorkflowProps> = ({ workflowSteps }) => {
  if (!workflowSteps || workflowSteps.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Werkwijze</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductWorkflow;
