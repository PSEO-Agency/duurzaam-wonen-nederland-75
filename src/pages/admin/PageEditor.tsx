
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCms } from '@/contexts/CmsContext';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save, Plus, Trash } from 'lucide-react';
import { Page, Template, Section } from '@/types/cms';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';

const PageEditor: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const { pages, templates, sections, refreshData } = useCms();
  const navigate = useNavigate();
  
  const [page, setPage] = useState<Page | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [isPublished, setIsPublished] = useState(true);
  const [pageSections, setPageSections] = useState<Section[]>([]);
  const [availableTemplates, setAvailableTemplates] = useState<Template[]>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  useEffect(() => {
    // Find page by ID
    const foundPage = pages.find(p => p.id === pageId);
    setAvailableTemplates(templates);
    
    if (foundPage) {
      setPage(foundPage);
      setTitle(foundPage.title);
      setSlug(foundPage.slug);
      setTemplateId(foundPage.templateId);
      setMetaDescription(foundPage.metaDescription);
      setIsPublished(foundPage.isPublished);
      
      // Find template and its sections
      const template = templates.find(t => t.id === foundPage.templateId);
      if (template) {
        setPageSections(template.sections);
      }
    }
  }, [pageId, pages, templates]);

  const handleTemplateChange = (value: string) => {
    setTemplateId(value);
    const template = templates.find(t => t.id === value);
    if (template) {
      setPageSections(template.sections);
    } else {
      setPageSections([]);
    }
  };

  const handleSave = () => {
    // In a real app, this would save to an API
    setShowSaveDialog(true);
    // refreshData() would be called after API success
  };

  const handleGoBack = () => {
    navigate('/admin/pages');
  };

  const handleViewPage = () => {
    // Open the page in a new tab
    window.open(slug, '_blank');
  };

  if (!page) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Page not found or loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={handleGoBack}>
          <ArrowLeft size={16} className="mr-1" /> Back to Pages
        </Button>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Edit Page</h1>
          <p className="text-gray-500">Customize your page content and settings.</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline"
            onClick={handleViewPage}
          >
            View Page
          </Button>
          <Button 
            className="bg-brand-green hover:bg-brand-green-dark"
            onClick={handleSave}
          >
            <Save size={18} className="mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Page Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="title">Page Title</Label>
              <Input 
                id="title"
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter page title" 
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="slug">URL Slug</Label>
              <Input 
                id="slug"
                value={slug} 
                onChange={(e) => setSlug(e.target.value)} 
                placeholder="e.g., /about-us" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="template">Template</Label>
              <Select value={templateId} onValueChange={handleTemplateChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  {availableTemplates.map(template => (
                    <SelectItem key={template.id} value={template.id}>{template.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="published">Published Status</Label>
              <div className="flex items-center space-x-2 pt-2">
                <Switch 
                  id="published" 
                  checked={isPublished} 
                  onCheckedChange={setIsPublished} 
                />
                <Label htmlFor="published" className="cursor-pointer">
                  {isPublished ? 'Published' : 'Draft'}
                </Label>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="metaDescription">Meta Description</Label>
            <Textarea 
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="Enter meta description for SEO"
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Page Sections</CardTitle>
          <Button variant="outline" size="sm">
            <Plus size={16} className="mr-1" /> Add Section
          </Button>
        </CardHeader>
        <CardContent>
          {pageSections.length > 0 ? (
            <div className="space-y-4">
              {pageSections.map((section, index) => (
                <div key={section.id} className="border rounded-md p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{section.name}</h3>
                    <p className="text-sm text-gray-500">Type: {section.type}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/admin/sections/edit/${section.id}`)}
                    >
                      Edit Section
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500">
                      <Trash size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No sections added to this page yet.</p>
              <p className="text-sm">Select a template or add sections manually.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Changes Saved</DialogTitle>
            <DialogDescription>
              Your page has been updated successfully.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowSaveDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PageEditor;
