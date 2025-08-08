import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { FileText, Layers, Puzzle, ArrowRight, Image } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-500">Manage your website content, templates, and sections.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Templates</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sections</CardTitle>
            <Puzzle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <Link to="/admin/og-images">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">OG Images</CardTitle>
              <Image className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
              <p className="text-xs text-muted-foreground">Manage social previews</p>
            </CardContent>
          </Link>
        </Card>
      </div>
      
      <Tabs defaultValue="pages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="sections">Sections</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Pages</CardTitle>
              <CardDescription>
                View and manage your website pages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PagesList />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Templates</CardTitle>
              <CardDescription>
                View and manage your page templates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TemplatesList />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Sections</CardTitle>
              <CardDescription>
                View and manage reusable content sections.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SectionsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const PagesList: React.FC = () => {
  // This would normally come from an API call or state management
  const pages = [
    { id: '1', title: 'Home', slug: '/', templateName: 'Home Template', isPublished: true, updatedAt: '2023-07-15' },
    { id: '2', title: 'Kunststof Kozijnen', slug: '/kunststof-kozijnen', templateName: 'Product Template', isPublished: true, updatedAt: '2023-07-14' },
    { id: '3', title: 'Contact', slug: '/contact', templateName: 'Contact Template', isPublished: true, updatedAt: '2023-07-13' },
    { id: '4', title: 'Draaikiepraam', slug: '/kunststof-kozijnen/types/draaikiepraam', templateName: 'Product Type Template', isPublished: true, updatedAt: '2023-07-12' },
    { id: '5', title: 'Schuco Brand', slug: '/kunststof-kozijnen/schuco', templateName: 'Brand Template', isPublished: true, updatedAt: '2023-07-11' },
  ];
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 text-xs font-medium text-gray-500 border-b pb-2">
        <div className="col-span-4">Title</div>
        <div className="col-span-3">Template</div>
        <div className="col-span-3">Last Updated</div>
        <div className="col-span-1">Status</div>
        <div className="col-span-1"></div>
      </div>
      {pages.map(page => (
        <div key={page.id} className="grid grid-cols-12 py-3 border-b border-gray-100 items-center">
          <div className="col-span-4 font-medium">{page.title}</div>
          <div className="col-span-3 text-sm text-gray-500">{page.templateName}</div>
          <div className="col-span-3 text-sm text-gray-500">{page.updatedAt}</div>
          <div className="col-span-1">
            {page.isPublished ? (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Live
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Draft
              </span>
            )}
          </div>
          <div className="col-span-1 text-right">
            <Link to={`/admin/pages/${page.id}`} className="text-brand-green hover:text-brand-green-dark">
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ))}
      <div className="pt-4">
        <Link to="/admin/pages" className="text-brand-green hover:text-brand-green-dark flex items-center text-sm font-medium">
          View all pages
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const TemplatesList: React.FC = () => {
  // This would normally come from an API call or state management
  const templates = [
    { id: '1', name: 'Home Template', pagesCount: 1, sectionsCount: 7, updatedAt: '2023-07-15' },
    { id: '2', name: 'Product Template', pagesCount: 3, sectionsCount: 5, updatedAt: '2023-07-14' },
    { id: '3', name: 'Location Template', pagesCount: 12, sectionsCount: 6, updatedAt: '2023-07-13' },
    { id: '4', name: 'Contact Template', pagesCount: 1, sectionsCount: 3, updatedAt: '2023-07-12' },
    { id: '5', name: 'Product Type Template', pagesCount: 7, sectionsCount: 4, updatedAt: '2023-07-11' },
  ];
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 text-xs font-medium text-gray-500 border-b pb-2">
        <div className="col-span-4">Name</div>
        <div className="col-span-2">Pages</div>
        <div className="col-span-2">Sections</div>
        <div className="col-span-3">Last Updated</div>
        <div className="col-span-1"></div>
      </div>
      {templates.map(template => (
        <div key={template.id} className="grid grid-cols-12 py-3 border-b border-gray-100 items-center">
          <div className="col-span-4 font-medium">{template.name}</div>
          <div className="col-span-2 text-sm text-gray-500">{template.pagesCount}</div>
          <div className="col-span-2 text-sm text-gray-500">{template.sectionsCount}</div>
          <div className="col-span-3 text-sm text-gray-500">{template.updatedAt}</div>
          <div className="col-span-1 text-right">
            <Link to={`/admin/templates/${template.id}`} className="text-brand-green hover:text-brand-green-dark">
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ))}
      <div className="pt-4">
        <Link to="/admin/templates" className="text-brand-green hover:text-brand-green-dark flex items-center text-sm font-medium">
          View all templates
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const SectionsList: React.FC = () => {
  // This would normally come from an API call or state management
  const sections = [
    { id: '1', name: 'Hero Section', type: 'hero', usageCount: 15, updatedAt: '2023-07-15' },
    { id: '2', name: 'Product Gallery', type: 'gallery', usageCount: 8, updatedAt: '2023-07-14' },
    { id: '3', name: 'Benefits List', type: 'benefits', usageCount: 12, updatedAt: '2023-07-13' },
    { id: '4', name: 'FAQ Section', type: 'faq', usageCount: 9, updatedAt: '2023-07-12' },
    { id: '5', name: 'Contact CTA', type: 'cta', usageCount: 24, updatedAt: '2023-07-11' },
  ];
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 text-xs font-medium text-gray-500 border-b pb-2">
        <div className="col-span-4">Name</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Usage</div>
        <div className="col-span-3">Last Updated</div>
        <div className="col-span-1"></div>
      </div>
      {sections.map(section => (
        <div key={section.id} className="grid grid-cols-12 py-3 border-b border-gray-100 items-center">
          <div className="col-span-4 font-medium">{section.name}</div>
          <div className="col-span-2 text-sm text-gray-500">{section.type}</div>
          <div className="col-span-2 text-sm text-gray-500">{section.usageCount} pages</div>
          <div className="col-span-3 text-sm text-gray-500">{section.updatedAt}</div>
          <div className="col-span-1 text-right">
            <Link to={`/admin/sections/${section.id}`} className="text-brand-green hover:text-brand-green-dark">
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ))}
      <div className="pt-4">
        <Link to="/admin/sections" className="text-brand-green hover:text-brand-green-dark flex items-center text-sm font-medium">
          View all sections
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
