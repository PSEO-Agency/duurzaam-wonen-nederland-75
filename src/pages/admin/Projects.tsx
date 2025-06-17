
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Calendar, MapPin } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import ImageUpload from '@/components/form/ImageUpload';

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  project_type: string;
  completion_date: string;
  image_url: string;
  featured_image: string;
  gallery_images: string[];
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

const Projects: React.FC = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: projects, isLoading } = useQuery({
    queryKey: ['admin-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as Project[];
    }
  });

  const createProjectMutation = useMutation({
    mutationFn: async (projectData: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('projects')
        .insert([projectData])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-projects'] });
      setIsCreateDialogOpen(false);
      toast({
        title: "Project aangemaakt",
        description: "Het project is succesvol aangemaakt.",
      });
    },
    onError: (error) => {
      toast({
        title: "Fout bij aanmaken",
        description: `Er is een fout opgetreden: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  const updateProjectMutation = useMutation({
    mutationFn: async ({ id, ...projectData }: Partial<Project> & { id: string }) => {
      const { data, error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-projects'] });
      setIsEditDialogOpen(false);
      setSelectedProject(null);
      toast({
        title: "Project bijgewerkt",
        description: "Het project is succesvol bijgewerkt.",
      });
    },
    onError: (error) => {
      toast({
        title: "Fout bij bijwerken",
        description: `Er is een fout opgetreden: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  const deleteProjectMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-projects'] });
      toast({
        title: "Project verwijderd",
        description: "Het project is succesvol verwijderd.",
      });
    },
    onError: (error) => {
      toast({
        title: "Fout bij verwijderen",
        description: `Er is een fout opgetreden: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  const ProjectForm: React.FC<{ 
    project?: Project | null; 
    onSubmit: (data: any) => void; 
    isLoading?: boolean;
  }> = ({ project, onSubmit, isLoading = false }) => {
    const [formData, setFormData] = useState({
      title: project?.title || '',
      description: project?.description || '',
      location: project?.location || '',
      project_type: project?.project_type || '',
      completion_date: project?.completion_date || '',
      image_url: project?.image_url || '',
      featured_image: project?.featured_image || '',
      gallery_images: project?.gallery_images || [],
      is_featured: project?.is_featured || false,
      is_active: project?.is_active ?? true,
      sort_order: project?.sort_order || 0
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      // Clean up the data before submitting
      const cleanedData = {
        ...formData,
        completion_date: formData.completion_date || null,
      };
      
      onSubmit(cleanedData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Titel *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Beschrijving</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="location">Locatie</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="project_type">Project Type</Label>
            <Input
              id="project_type"
              value={formData.project_type}
              onChange={(e) => setFormData(prev => ({ ...prev, project_type: e.target.value }))}
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
              onChange={(e) => setFormData(prev => ({ ...prev, completion_date: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="sort_order">Sorteervolgorde</Label>
            <Input
              id="sort_order"
              type="number"
              value={formData.sort_order}
              onChange={(e) => setFormData(prev => ({ ...prev, sort_order: parseInt(e.target.value) || 0 }))}
            />
          </div>
        </div>

        <ImageUpload
          label="Hoofdafbeelding"
          value={formData.image_url}
          onChange={(url) => setFormData(prev => ({ ...prev, image_url: url }))}
          bucketName="project-images"
        />

        <ImageUpload
          label="Featured Afbeelding"
          value={formData.featured_image}
          onChange={(url) => setFormData(prev => ({ ...prev, featured_image: url }))}
          bucketName="project-images"
        />

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="is_featured"
              checked={formData.is_featured}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_featured: !!checked }))}
            />
            <Label htmlFor="is_featured">Uitgelicht</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="is_active"
              checked={formData.is_active}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: !!checked }))}
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

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Projecten</h1>
        </div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Projecten</h1>
          <p className="text-gray-600">Beheer projecten en portfolio items</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nieuw Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Nieuw Project Aanmaken</DialogTitle>
              <DialogDescription>
                Maak een nieuw project aan voor de portfolio.
              </DialogDescription>
            </DialogHeader>
            <ProjectForm 
              onSubmit={(data) => createProjectMutation.mutate(data)}
              isLoading={createProjectMutation.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-48">
              {project.featured_image || project.image_url ? (
                <img 
                  src={project.featured_image || project.image_url} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Geen afbeelding</span>
                </div>
              )}
              <div className="absolute top-2 right-2 flex gap-2">
                {project.is_featured && (
                  <Badge variant="secondary">Uitgelicht</Badge>
                )}
                {!project.is_active && (
                  <Badge variant="destructive">Inactief</Badge>
                )}
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                {project.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </div>
                )}
                {project.completion_date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(project.completion_date).toLocaleDateString('nl-NL')}
                  </div>
                )}
                {project.project_type && (
                  <Badge variant="outline" className="text-xs">
                    {project.project_type}
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsEditDialogOpen(true);
                  }}
                >
                  <Edit className="h-3 w-3" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => deleteProjectMutation.mutate(project.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Project Bewerken</DialogTitle>
            <DialogDescription>
              Bewerk de projectgegevens.
            </DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <ProjectForm 
              project={selectedProject}
              onSubmit={(data) => updateProjectMutation.mutate({ ...data, id: selectedProject.id })}
              isLoading={updateProjectMutation.isPending}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
