
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface FAQItem {
  question: string;
  answer: string;
}

interface SolutionFAQProps {
  faq: FAQItem[];
}

const SolutionFAQ: React.FC<SolutionFAQProps> = ({ faq }) => {
  if (!faq || faq.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Veelgestelde Vragen</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionFAQ;
