
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Search, Check, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCms } from '@/contexts/CmsContext';

const Pages: React.FC = () => {
  const { pages } = useCms();
  const navigate = useNavigate();
  
  // Filtered and enhanced pages data that matches our routes
  const [pagesData, setPagesData] = useState(pages);
  const [searchQuery, setSearchQuery] = useState('');

  // Update pages with actual route information
  useEffect(() => {
    const routeBasedPages = [
      { id: '1', title: 'Home', slug: '/', templateName: 'Home Template', isPublished: true, createdAt: '2023-06-15', updatedAt: '2023-07-15' },
      { id: '2', title: 'Kunststof Kozijnen', slug: '/kunststof-kozijnen', templateName: 'Product Template', isPublished: true, createdAt: '2023-06-14', updatedAt: '2023-07-14' },
      { id: '3', title: 'Contact', slug: '/contact', templateName: 'Contact Template', isPublished: true, createdAt: '2023-06-13', updatedAt: '2023-07-13' },
      { id: '4', title: 'Kunststof Kozijnen Enschede', slug: '/kunststof-kozijnen/locaties/enschede', templateName: 'Location Template', isPublished: true, createdAt: '2023-06-12', updatedAt: '2023-07-12' },
      { id: '5', title: 'Draaikiepraam', slug: '/kunststof-kozijnen/types/draaikiepraam', templateName: 'Product Type Template', isPublished: true, createdAt: '2023-06-11', updatedAt: '2023-07-11' },
      { id: '6', title: 'Blog', slug: '/blog', templateName: 'Blog Template', isPublished: true, createdAt: '2023-06-10', updatedAt: '2023-07-10' },
      { id: '7', title: 'Over Ons', slug: '/over-ons', templateName: 'About Template', isPublished: true, createdAt: '2023-06-09', updatedAt: '2023-07-09' },
      { id: '8', title: 'Projects', slug: '/projecten', templateName: 'Projects Template', isPublished: true, createdAt: '2023-06-08', updatedAt: '2023-07-08' },
      { id: '9', title: 'Werkgebied', slug: '/werkgebied', templateName: 'Location Template', isPublished: true, createdAt: '2023-06-07', updatedAt: '2023-07-07' },
      { id: '10', title: 'Showroom', slug: '/showroom', templateName: 'Location Template', isPublished: true, createdAt: '2023-06-06', updatedAt: '2023-07-06' },
      { id: '11', title: 'Werkwijze', slug: '/werkwijze', templateName: 'Content Template', isPublished: true, createdAt: '2023-06-05', updatedAt: '2023-07-05' },
      { id: '12', title: 'Kennisbank', slug: '/kennisbank', templateName: 'Knowledge Template', isPublished: true, createdAt: '2023-06-04', updatedAt: '2023-07-04' },
    ];
    
    setPagesData(routeBasedPages);
  }, [pages]);

  // Handle search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter pages based on search query
  const filteredPages = pagesData.filter(page => 
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    page.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.templateName.toLowerCase().includes(searchQuery.toLowerCase())
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
                  <TableCell>{page.updatedAt}</TableCell>
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
