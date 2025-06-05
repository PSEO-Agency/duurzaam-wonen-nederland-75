
import React, { useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const Reviews: React.FC = () => {
  useEffect(() => {
    // Load review widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Clean up script
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="reviews" className="section-container">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Tevreden klanten</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Wat onze klanten zeggen over hun ervaring met Duurzaam Wonen Nederland
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="max-w-4xl mx-auto">
            <iframe 
              className="lc_reviews_widget" 
              src="https://reputationhub.site/reputation/widgets/review_widget/3aRsj8TT2qcU3nkx3kWm" 
              frameBorder="0" 
              scrolling="no" 
              style={{ minWidth: '100%', width: '100%', height: '400px' }}
              title="Customer Reviews"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Reviews;
