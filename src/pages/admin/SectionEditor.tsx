
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCms } from '@/contexts/CmsContext';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save } from 'lucide-react';
import { Section } from '@/types/cms';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const SectionEditor: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const { sections, refreshData } = useCms();
  const navigate = useNavigate();
  
  const [section, setSection] = useState<Section | null>(null);
  const [name, setName] = useState('');
  const [type, setType] = useState<'hero' | 'content' | 'faq' | 'cta' | 'gallery' | 'products' | 'benefits'>('content');
  const [config, setConfig] = useState('{}');
  const [isConfigValid, setIsConfigValid] = useState(true);
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  useEffect(() => {
    // Find section by ID
    const foundSection = sections.find(s => s.id === sectionId);
    if (foundSection) {
      setSection(foundSection);
      setName(foundSection.name);
      setType(foundSection.type);
      setConfig(JSON.stringify(foundSection.config, null, 2));
    }
  }, [sectionId, sections]);

  const handleConfigChange = (value: string) => {
    setConfig(value);
    try {
      JSON.parse(value);
      setIsConfigValid(true);
    } catch (e) {
      setIsConfigValid(false);
    }
  };

  const handleSave = () => {
    // In a real app, this would save to an API
    setShowSaveDialog(true);
    // refreshData() would be called after API success
  };

  const handleGoBack = () => {
    navigate('/admin/sections');
  };

  if (!section) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Section not found or loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={handleGoBack}>
          <ArrowLeft size={16} className="mr-1" /> Back to Sections
        </Button>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Edit Section</h1>
          <p className="text-gray-500">Customize your section content and configuration.</p>
        </div>
        <Button 
          className="bg-brand-green hover:bg-brand-green-dark"
          onClick={handleSave}
          disabled={!isConfigValid}
        >
          <Save size={18} className="mr-2" />
          Save Changes
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Section Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="name">Section Name</Label>
              <Input 
                id="name"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter section name" 
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="type">Section Type</Label>
              <Select value={type} onValueChange={(value: any) => setType(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a section type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hero">Hero</SelectItem>
                  <SelectItem value="content">Content</SelectItem>
                  <SelectItem value="faq">FAQ</SelectItem>
                  <SelectItem value="cta">Call to Action</SelectItem>
                  <SelectItem value="gallery">Gallery</SelectItem>
                  <SelectItem value="products">Products</SelectItem>
                  <SelectItem value="benefits">Benefits</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="config">Configuration (JSON)</Label>
            <Textarea 
              id="config"
              value={config}
              onChange={(e) => handleConfigChange(e.target.value)}
              className="min-h-[300px] font-mono"
              placeholder="Enter JSON configuration"
              style={{ backgroundColor: isConfigValid ? '' : 'rgba(220, 38, 38, 0.1)' }}
            />
            {!isConfigValid && (
              <p className="text-red-500 text-sm">Invalid JSON format</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Changes Saved</DialogTitle>
            <DialogDescription>
              Your section has been updated successfully.
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

export default SectionEditor;
