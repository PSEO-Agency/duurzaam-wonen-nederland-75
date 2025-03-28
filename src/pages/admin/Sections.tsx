
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Sections: React.FC = () => {
  // This would normally come from an API call or state management
  const sections = [
    { id: '1', name: 'Hero Section', type: 'hero', usageCount: 15, createdAt: '2023-06-15', updatedAt: '2023-07-15' },
    { id: '2', name: 'Product Gallery', type: 'gallery', usageCount: 8, createdAt: '2023-06-14', updatedAt: '2023-07-14' },
    { id: '3', name: 'Benefits List', type: 'benefits', usageCount: 12, createdAt: '2023-06-13', updatedAt: '2023-07-13' },
    { id: '4', name: 'FAQ Section', type: 'faq', usageCount: 9, createdAt: '2023-06-12', updatedAt: '2023-07-12' },
    { id: '5', name: 'Contact CTA', type: 'cta', usageCount: 24, createdAt: '2023-06-11', updatedAt: '2023-07-11' },
    { id: '6', name: 'Featured Products', type: 'products', usageCount: 6, createdAt: '2023-06-10', updatedAt: '2023-07-10' },
    { id: '7', name: 'Testimonials', type: 'content', usageCount: 11, createdAt: '2023-06-09', updatedAt: '2023-07-09' },
    { id: '8', name: 'Newsletter Signup', type: 'cta', usageCount: 19, createdAt: '2023-06-08', updatedAt: '2023-07-08' },
  ];

  // Function to get color for each section type
  const getSectionTypeColor = (type: string) => {
    switch (type) {
      case 'hero':
        return 'bg-blue-100 text-blue-800';
      case 'gallery':
        return 'bg-purple-100 text-purple-800';
      case 'benefits':
        return 'bg-green-100 text-green-800';
      case 'faq':
        return 'bg-yellow-100 text-yellow-800';
      case 'cta':
        return 'bg-red-100 text-red-800';
      case 'products':
        return 'bg-indigo-100 text-indigo-800';
      case 'content':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sections</h1>
          <p className="text-gray-500">Manage your reusable content sections.</p>
        </div>
        
        <Button className="bg-brand-green hover:bg-brand-green-dark">
          <Plus size={18} className="mr-2" />
          Add Section
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Sections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search sections..." 
                className="pl-10"
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sections.map(section => (
                <TableRow key={section.id}>
                  <TableCell className="font-medium">{section.name}</TableCell>
                  <TableCell>
                    <Badge className={getSectionTypeColor(section.type)}>
                      {section.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{section.usageCount} pages</TableCell>
                  <TableCell>{section.createdAt}</TableCell>
                  <TableCell>{section.updatedAt}</TableCell>
                  <TableCell className="text-right">
                    <Link 
                      to={`/admin/sections/edit/${section.id}`}
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

export default Sections;
