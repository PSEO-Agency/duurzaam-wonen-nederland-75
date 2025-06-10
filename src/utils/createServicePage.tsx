
import React from 'react';
import ServicePageTemplate, { ServicePageTemplateProps } from '@/components/templates/ServicePageTemplate';

/**
 * Creates a service page component using the template with the provided configuration
 */
export const createServicePage = (config: ServicePageTemplateProps) => {
  const ServicePage: React.FC = () => {
    return <ServicePageTemplate {...config} />;
  };
  
  ServicePage.displayName = `ServicePage`;
  
  return ServicePage;
};

// You can also create a HOC version if needed
export const withServicePageTemplate = (config: ServicePageTemplateProps) => {
  return (Component?: React.ComponentType) => {
    const WrappedComponent: React.FC = (props) => {
      if (Component) {
        return (
          <>
            <ServicePageTemplate {...config} />
            <Component {...props} />
          </>
        );
      }
      return <ServicePageTemplate {...config} />;
    };
    
    WrappedComponent.displayName = `withServicePageTemplate(${Component?.displayName || Component?.name || 'Component'})`;
    
    return WrappedComponent;
  };
};
