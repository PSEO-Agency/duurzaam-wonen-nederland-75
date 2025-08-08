
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Search, Check, X, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCms } from '@/contexts/CmsContext';
import { Page } from '@/types/cms';

interface EnhancedPage extends Page {
  templateName?: string; // Optional for display purposes only
  parentPath?: string; // Optional parent path information
}

const Pages: React.FC = () => {
  const { pages, templates } = useCms();
  const navigate = useNavigate();
  
  // Filtered and enhanced pages data
  const [pagesData, setPagesData] = useState<EnhancedPage[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Update pages with actual route information and template names
  useEffect(() => {
    const routeBasedPages: EnhancedPage[] = [
      { 
        id: '1', 
        title: 'Home', 
        slug: '/', 
        templateId: '1', 
        metaDescription: 'Welcome to our home page',
        isPublished: true, 
        createdAt: new Date('2023-06-15'), 
        updatedAt: new Date('2023-07-15'),
        templateName: 'Home Template'
      },
      { 
        id: '2', 
        title: 'Kunststof Kozijnen', 
        slug: '/kunststof-kozijnen', 
        templateId: '2',
        metaDescription: 'Explore our kunststof kozijnen products',
        isPublished: true, 
        createdAt: new Date('2023-06-14'), 
        updatedAt: new Date('2023-07-14'),
        templateName: 'Product Template'
      },
      { 
        id: '3', 
        title: 'Contact', 
        slug: '/contact', 
        templateId: '3',
        metaDescription: 'Contact us for more information',
        isPublished: true, 
        createdAt: new Date('2023-06-13'), 
        updatedAt: new Date('2023-07-13'),
        templateName: 'Contact Template'
      },
      { 
        id: '4', 
        title: 'Product Types', 
        slug: '/kunststof-kozijnen/types', 
        templateId: '2',
        metaDescription: 'Different types of kozijnen',
        isPublished: true, 
        createdAt: new Date('2023-06-12'), 
        updatedAt: new Date('2023-07-12'),
        templateName: 'Product Type Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '5', 
        title: 'Draaikiepraam', 
        slug: '/kunststof-kozijnen/types/draaikiepraam', 
        templateId: '2',
        metaDescription: 'Learn about draaikiepraam windows',
        isPublished: true, 
        createdAt: new Date('2023-06-11'), 
        updatedAt: new Date('2023-07-11'),
        templateName: 'Product Type Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '6', 
        title: 'Blog', 
        slug: '/blog', 
        templateId: '2',
        metaDescription: 'Read our latest blog posts',
        isPublished: true, 
        createdAt: new Date('2023-06-10'), 
        updatedAt: new Date('2023-07-10'),
        templateName: 'Blog Template'
      },
      { 
        id: '7', 
        title: 'Over Ons', 
        slug: '/over-ons', 
        templateId: '2',
        metaDescription: 'Learn more about our company',
        isPublished: true, 
        createdAt: new Date('2023-06-09'), 
        updatedAt: new Date('2023-07-09'),
        templateName: 'About Template'
      },
      { 
        id: '8', 
        title: 'Projects', 
        slug: '/projecten', 
        templateId: '2',
        metaDescription: 'View our completed projects',
        isPublished: true, 
        createdAt: new Date('2023-06-08'), 
        updatedAt: new Date('2023-07-08'),
        templateName: 'Projects Template'
      },
      { 
        id: '9', 
        title: 'Werkgebied', 
        slug: '/werkgebied', 
        templateId: '3',
        metaDescription: 'Our service areas',
        isPublished: true, 
        createdAt: new Date('2023-06-07'), 
        updatedAt: new Date('2023-07-07'),
        templateName: 'Location Template'
      },
      { 
        id: '10', 
        title: 'Showroom', 
        slug: '/showroom', 
        templateId: '3',
        metaDescription: 'Visit our showroom',
        isPublished: true, 
        createdAt: new Date('2023-06-06'), 
        updatedAt: new Date('2023-07-06'),
        templateName: 'Location Template'
      },
      { 
        id: '11', 
        title: 'Werkwijze', 
        slug: '/werkwijze', 
        templateId: '2',
        metaDescription: 'Our working methods',
        isPublished: true, 
        createdAt: new Date('2023-06-05'), 
        updatedAt: new Date('2023-07-05'),
        templateName: 'Content Template'
      },
      { 
        id: '12', 
        title: 'Kennisbank', 
        slug: '/kennisbank', 
        templateId: '2',
        metaDescription: 'Knowledge base and resources',
        isPublished: true, 
        createdAt: new Date('2023-06-04'), 
        updatedAt: new Date('2023-07-04'),
        templateName: 'Knowledge Template'
      },
      // Add all pages from App.tsx routes
      { 
        id: '13', 
        title: 'Color Options', 
        slug: '/kunststof-kozijnen/kleuren', 
        templateId: '2',
        metaDescription: 'Explore color options for your kozijnen',
        isPublished: true, 
        createdAt: new Date('2023-06-03'), 
        updatedAt: new Date('2023-07-03'),
        templateName: 'Product Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '14', 
        title: 'Kozijn Types', 
        slug: '/kunststof-kozijnen/types', 
        templateId: '2',
        metaDescription: 'Different types of kozijnen',
        isPublished: true, 
        createdAt: new Date('2023-06-02'), 
        updatedAt: new Date('2023-07-02'),
        templateName: 'Product Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '15', 
        title: 'Kozijn Sizes', 
        slug: '/kunststof-kozijnen/afmetingen', 
        templateId: '2',
        metaDescription: 'Standard and custom kozijn sizes',
        isPublished: true, 
        createdAt: new Date('2023-06-01'), 
        updatedAt: new Date('2023-07-01'),
        templateName: 'Product Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '16', 
        title: 'Kozijn Montage', 
        slug: '/kunststof-kozijnen/montage', 
        templateId: '2',
        metaDescription: 'Installation services for kozijnen',
        isPublished: true, 
        createdAt: new Date('2023-05-31'), 
        updatedAt: new Date('2023-06-30'),
        templateName: 'Service Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '17', 
        title: 'Kozijn Prices', 
        slug: '/kunststof-kozijnen/prijzen', 
        templateId: '2',
        metaDescription: 'Pricing for kozijnen products',
        isPublished: true, 
        createdAt: new Date('2023-05-30'), 
        updatedAt: new Date('2023-06-29'),
        templateName: 'Product Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '18', 
        title: 'Kozijn Brands', 
        slug: '/kunststof-kozijnen/merken', 
        templateId: '2',
        metaDescription: 'Brands we work with for kozijnen',
        isPublished: true, 
        createdAt: new Date('2023-05-29'), 
        updatedAt: new Date('2023-06-28'),
        templateName: 'Brand Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '19', 
        title: 'Kozijnen Inmeten', 
        slug: '/kunststof-kozijnen/services/inmeten', 
        templateId: '2',
        metaDescription: 'Measurement services for kozijnen',
        isPublished: true, 
        createdAt: new Date('2023-05-28'), 
        updatedAt: new Date('2023-06-27'),
        templateName: 'Service Template',
        parentPath: '/kunststof-kozijnen'
      },
      { 
        id: '20', 
        title: 'Kozijn 100x100', 
        slug: '/kunststof-kozijnen/afmetingen/100x100', 
        templateId: '2',
        metaDescription: '100x100 size kozijnen',
        isPublished: true, 
        createdAt: new Date('2023-05-27'), 
        updatedAt: new Date('2023-06-26'),
        templateName: 'Size Template',
        parentPath: '/kunststof-kozijnen/afmetingen'
      },
      { 
        id: '21', 
        title: 'Schuco Brand', 
        slug: '/kunststof-kozijnen/merken/schuco', 
        templateId: '2',
        metaDescription: 'Schuco kozijnen products',
        isPublished: true, 
        createdAt: new Date('2023-05-26'), 
        updatedAt: new Date('2023-06-25'),
        templateName: 'Brand Template',
        parentPath: '/kunststof-kozijnen/merken'
      },
      { 
        id: '22', 
        title: 'Kozijnen Afbetaling', 
        slug: '/kunststof-kozijnen/prijzen/afbetaling', 
        templateId: '2',
        metaDescription: 'Payment plans for kozijnen',
        isPublished: true, 
        createdAt: new Date('2023-05-25'), 
        updatedAt: new Date('2023-06-24'),
        templateName: 'Price Template',
        parentPath: '/kunststof-kozijnen/prijzen'
      },
      { 
        id: '23', 
        title: 'Kozijnen Subsidie', 
        slug: '/kunststof-kozijnen/prijzen/subsidie', 
        templateId: '2',
        metaDescription: 'Subsidies for kozijnen installation',
        isPublished: true, 
        createdAt: new Date('2023-05-24'), 
        updatedAt: new Date('2023-06-23'),
        templateName: 'Price Template',
        parentPath: '/kunststof-kozijnen/prijzen'
      },
      { 
        id: '24', 
        title: 'Team', 
        slug: '/over-ons/team', 
        templateId: '2',
        metaDescription: 'Meet our team',
        isPublished: true, 
        createdAt: new Date('2023-05-23'), 
        updatedAt: new Date('2023-06-22'),
        templateName: 'Team Template',
        parentPath: '/over-ons'
      },
      { 
        id: '25', 
        title: 'Geschiedenis', 
        slug: '/over-ons/geschiedenis', 
        templateId: '2',
        metaDescription: 'Our company history',
        isPublished: true, 
        createdAt: new Date('2023-05-22'), 
        updatedAt: new Date('2023-06-21'),
        templateName: 'Content Template',
        parentPath: '/over-ons'
      },
      { 
        id: '26', 
        title: 'Missie', 
        slug: '/over-ons/missie', 
        templateId: '2',
        metaDescription: 'Our mission and values',
        isPublished: true, 
        createdAt: new Date('2023-05-21'), 
        updatedAt: new Date('2023-06-20'),
        templateName: 'Content Template',
        parentPath: '/over-ons'
      },
      { 
        id: '27', 
        title: 'Duurzaamheid', 
        slug: '/over-ons/duurzaamheid', 
        templateId: '2',
        metaDescription: 'Our sustainability efforts',
        isPublished: true, 
        createdAt: new Date('2023-05-20'), 
        updatedAt: new Date('2023-06-19'),
        templateName: 'Content Template',
        parentPath: '/over-ons'
      },
      { 
        id: '28', 
        title: 'Vacatures', 
        slug: '/over-ons/vacatures', 
        templateId: '2',
        metaDescription: 'Job opportunities',
        isPublished: true, 
        createdAt: new Date('2023-05-19'), 
        updatedAt: new Date('2023-06-18'),
        templateName: 'Content Template',
        parentPath: '/over-ons'
      },
      { 
        id: '29', 
        title: 'Zoeken', 
        slug: '/zoeken', 
        templateId: '2',
        metaDescription: 'Search our site',
        isPublished: true, 
        createdAt: new Date('2023-05-18'), 
        updatedAt: new Date('2023-06-17'),
        templateName: 'Search Template'
      },
      { 
        id: '30', 
        title: '404 Not Found', 
        slug: '*', 
        templateId: '3',
        metaDescription: 'Page not found',
        isPublished: true, 
        createdAt: new Date('2023-05-17'), 
        updatedAt: new Date('2023-06-16'),
        templateName: 'Error Template'
      }
    ];
    
    setPagesData(routeBasedPages);
  }, [pages, templates]);

  // Handle search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter pages based on search query
  const filteredPages = pagesData.filter(page => 
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    page.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (page.templateName && page.templateName.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (page.parentPath && page.parentPath.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handle create new page
  const handleAddPage = () => {
    navigate('/admin/pages/create');
  };

  // Helper function to show parent page name instead of path
  const getParentPageName = (parentPath: string | undefined): string => {
    if (!parentPath) return '-';
    const parentPage = pagesData.find(page => page.slug === parentPath);
    return parentPage ? parentPage.title : parentPath;
  };

  // Function to open the page URL in a new tab
  const handlePreviewPage = (slug: string) => {
    // Handle special case for 404 page (wildcard route)
    if (slug === '*') {
      // Open a non-existent page to trigger 404
      window.open('/non-existent-page-for-preview', '_blank');
    } else {
      window.open(slug, '_blank');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Pages</h1>
          <p className="text-gray-500">Manage your website pages and their content.</p>
        </div>
        
        <Button className="bg-brand-green hover:bg-brand-green-dark" onClick={handleAddPage}>
          <Plus size={18} className="mr-2" />
          Add Page
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search pages..." 
                className="pl-10"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Parent</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Published</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPages.map(page => (
                <TableRow key={page.id}>
                  <TableCell className="font-medium">{page.title}</TableCell>
                  <TableCell className="text-sm font-mono">{page.slug}</TableCell>
                  <TableCell>{getParentPageName(page.parentPath)}</TableCell>
                  <TableCell>{page.templateName}</TableCell>
                  <TableCell>
                    {page.isPublished ? (
                      <span className="inline-flex items-center">
                        <Check size={16} className="text-green-500 mr-1" />
                        Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <X size={16} className="text-red-500 mr-1" />
                        No
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{page.updatedAt.toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handlePreviewPage(page.slug)}
                        className="text-gray-500 hover:text-brand-green"
                      >
                        <ExternalLink size={16} />
                        <span className="sr-only">Preview</span>
                      </Button>
                      <Link 
                        to={`/admin/pages/edit/${page.id}`}
                        className="text-brand-green hover:text-brand-green-dark inline-flex items-center"
                      >
                        Edit
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pages;
