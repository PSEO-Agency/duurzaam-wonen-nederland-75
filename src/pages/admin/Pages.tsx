
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Search, Check, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCms } from '@/contexts/CmsContext';
import { Page } from '@/types/cms';

interface EnhancedPage extends Page {
  templateName?: string; // Optional for display purposes only
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
        title: 'Kunststof Kozijnen Enschede', 
        slug: '/kunststof-kozijnen/locaties/enschede', 
        templateId: '3',
        metaDescription: 'Kunststof kozijnen in Enschede area',
        isPublished: true, 
        createdAt: new Date('2023-06-12'), 
        updatedAt: new Date('2023-07-12'),
        templateName: 'Location Template'
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
        templateName: 'Product Type Template'
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
    (page.templateName && page.templateName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handle create new page
  const handleAddPage = () => {
    navigate('/admin/pages/create');
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
                    <Link 
                      to={`/admin/pages/edit/${page.id}`}
                      className="text-brand-green hover:text-brand-green-dark inline-flex items-center"
                    >
                      Edit
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
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
