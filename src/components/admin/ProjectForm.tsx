
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import ImageUpload from '@/components/form/ImageUpload';

interface Project {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  project_type: string | null;
  completion_date: string | null;
  image_url: string | null;
  featured_image: string | null;
  gallery_images: any;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

interface ProjectFormProps {
  project?: Project | null;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ 
  project, 
  onSubmit, 
  isLoading = false 
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    project_type: '',
    completion_date: '',
    image_url: '',
    featured_image: '',
    gallery_images: [],
    is_featured: false,
    is_active: true,
    sort_order: 0
  });

  // Initialize form data when project changes
  useEffect(() => {
    console.log('ProjectForm: Initializing with project:', project);
    
    if (project) {
      const initialData = {
        title: project.title || '',
        description: project.description || '',
        location: project.location || '',
        project_type: project.project_type || '',
        completion_date: project.completion_date || '',
        image_url: project.image_url || '',
        featured_image: project.featured_image || '',
        gallery_images: project.gallery_images || [],
        is_featured: project.is_featured || false,
        is_active: project.is_active ?? true,
        sort_order: project.sort_order || 0
      };
      
      console.log('ProjectForm: Setting form data to:', initialData);
      setFormData(initialData);
    } else {
      // Reset to default values for new project
      const defaultData = {
        title: '',
        description: '',
        location: '',
        project_type: '',
        completion_date: '',
        image_url: '',
        featured_image: '',
        gallery_images: [],
        is_featured: false,
        is_active: true,
        sort_order: 0
      };
      
      console.log('ProjectForm: Resetting to default data:', defaultData);
      setFormData(defaultData);
    }
  }, [project?.id]); // Only re-run when project ID changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('ProjectForm: Submitting form with data:', formData);
    
    // Clean up the data before submitting
    const cleanedData = {
      ...formData,
      description: formData.description.trim() || null,
      location: formData.location.trim() || null,
      project_type: formData.project_type.trim() || null,
      completion_date: formData.completion_date || null,
      image_url: formData.image_url.trim() || null,
      featured_image: formData.featured_image.trim() || null,
    };
    
    onSubmit(cleanedData);
  };

  const handleImageUpload = (field: 'image_url' | 'featured_image') => (url: string) => {
    console.log(`ProjectForm: Image uploaded for ${field}:`, url);
    setFormData(prev => {
      const newData = { ...prev, [field]: url };
      console.log('ProjectForm: Updated form data after image upload:', newData);
      return newData;
    });
  };

  const updateFormField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Titel *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => updateFormField('title', e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Beschrijving</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => updateFormField('description', e.target.value)}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="location">Locatie</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => updateFormField('location', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="project_type">Project Type</Label>
          <Input
            id="project_type"
            value={formData.project_type}
            onChange={(e) => updateFormField('project_type', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="completion_date">Opleverdatum</Label>
          <Input
            id="completion_date"
            type="date"
            value={formData.completion_date}
            onChange={(e) => updateFormField('completion_date', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="sort_order">Sorteervolgorde</Label>
          <Input
            id="sort_order"
            type="number"
            value={formData.sort_order}
            onChange={(e) => updateFormField('sort_order', parseInt(e.target.value) || 0)}
          />
        </div>
      </div>

      <ImageUpload
        label="Hoofdafbeelding"
        value={formData.image_url}
        onChange={handleImageUpload('image_url')}
        bucketName="project-images"
      />

      <ImageUpload
        label="Featured Afbeelding"
        value={formData.featured_image}
        onChange={handleImageUpload('featured_image')}
        bucketName="project-images"
      />

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="is_featured"
            checked={formData.is_featured}
            onCheckedChange={(checked) => updateFormField('is_featured', !!checked)}
          />
          <Label htmlFor="is_featured">Uitgelicht</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="is_active"
            checked={formData.is_active}
            onCheckedChange={(checked) => updateFormField('is_active', !!checked)}
          />
          <Label htmlFor="is_active">Actief</Label>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Bezig...' : (project ? 'Bijwerken' : 'Aanmaken')}
      </Button>
    </form>
  );
};

export default ProjectForm;
