
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Page, Section, Template } from '@/types/cms';

interface CmsContextType {
  pages: Page[];
  templates: Template[];
  sections: Section[];
  isLoading: boolean;
  error: string | null;
  refreshData: () => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pages, setPages] = useState<Page[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // This would be replaced with actual API calls
      // For now, let's simulate loading data from a JSON file or API
      
      // Mock data for templates
      const templateData: Template[] = [
        {
          id: '1',
          name: 'Home Template',
          description: 'Template for the home page',
          sections: [],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2',
          name: 'Product Template',
          description: 'Template for product pages',
          sections: [],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3',
          name: 'Location Template',
          description: 'Template for location-specific pages',
          sections: [],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
      
      // Mock data for sections
      const sectionData: Section[] = [
        {
          id: '1',
          name: 'Hero Section',
          type: 'hero',
          config: {
            title: 'Welcome to our site',
            description: 'Discover our products and services',
            imageSrc: '/path/to/image.jpg'
          },
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2',
          name: 'Product Gallery',
          type: 'gallery',
          config: {
            title: 'Our Products',
            items: []
          },
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3',
          name: 'FAQ Section',
          type: 'faq',
          config: {
            title: 'Frequently Asked Questions',
            items: []
          },
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
      
      // Update template sections
      templateData[0].sections = [sectionData[0], sectionData[1]];
      templateData[1].sections = [sectionData[0], sectionData[2]];
      templateData[2].sections = [sectionData[0], sectionData[1], sectionData[2]];
      
      // Mock data for pages
      const pageData: Page[] = [
        {
          id: '1',
          title: 'Home',
          slug: '/',
          templateId: '1',
          metaDescription: 'Welcome to our home page',
          isPublished: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2',
          title: 'Kunststof Kozijnen',
          slug: '/kunststof-kozijnen',
          templateId: '2',
          metaDescription: 'Explore our kunststof kozijnen products',
          isPublished: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3',
          title: 'Kunststof Kozijnen Enschede',
          slug: '/kunststof-kozijnen/locaties/enschede',
          templateId: '3',
          metaDescription: 'Kunststof kozijnen in Enschede area',
          isPublished: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
      
      setTemplates(templateData);
      setSections(sectionData);
      setPages(pageData);
      setError(null);
    } catch (err) {
      setError('Failed to load CMS data');
      console.error('Error loading CMS data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const refreshData = () => {
    loadData();
  };

  return (
    <CmsContext.Provider
      value={{
        pages,
        templates,
        sections,
        isLoading,
        error,
        refreshData
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = (): CmsContextType => {
  const context = useContext(CmsContext);
  if (context === undefined) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
