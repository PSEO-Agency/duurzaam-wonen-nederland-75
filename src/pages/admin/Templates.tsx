
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Templates: React.FC = () => {
  // This would normally come from an API call or state management
  const templates = [
    { id: '1', name: 'Home Template', pagesCount: 1, sectionsCount: 7, createdAt: '2023-06-15', updatedAt: '2023-07-15' },
    { id: '2', name: 'Product Template', pagesCount: 3, sectionsCount: 5, createdAt: '2023-06-14', updatedAt: '2023-07-14' },
    { id: '3', name: 'Location Template', pagesCount: 12, sectionsCount: 6, createdAt: '2023-06-13', updatedAt: '2023-07-13' },
    { id: '4', name: 'Contact Template', pagesCount: 1, sectionsCount: 3, createdAt: '2023-06-12', updatedAt: '2023-07-12' },
    { id: '5', name: 'Product Type Template', pagesCount: 7, sectionsCount: 4, createdAt: '2023-06-11', updatedAt: '2023-07-11' },
    { id: '6', name: 'Blog Template', pagesCount: 22, sectionsCount: 4, createdAt: '2023-06-10', updatedAt: '2023-07-10' },
    { id: '7', name: 'Service Template', pagesCount: 5, sectionsCount: 5, createdAt: '2023-06-09', updatedAt: '2023-07-09' },
    { id: '8', name: 'About Template', pagesCount: 1, sectionsCount: 6, createdAt: '2023-06-08', updatedAt: '2023-07-08' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Templates</h1>
          <p className="text-gray-500">Manage your page templates and their sections.</p>
        </div>
        
        <Button className="bg-brand-green hover:bg-brand-green-dark">
          <Plus size={18} className="mr-2" />
          Add Template
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search templates..." 
                className="pl-10"
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Pages</TableHead>
                <TableHead>Sections</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templates.map(template => (
                <TableRow key={template.id}>
                  <TableCell className="font-medium">{template.name}</TableCell>
                  <TableCell>{template.pagesCount}</TableCell>
                  <TableCell>{template.sectionsCount}</TableCell>
                  <TableCell>{template.createdAt}</TableCell>
                  <TableCell>{template.updatedAt}</TableCell>
                  <TableCell className="text-right">
                    <Link 
                      to={`/admin/templates/${template.id}`}
                      className="text-brand-green hover:text-brand-green-dark inline-flex items-center"
                    >
                      View
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

export default Templates;
