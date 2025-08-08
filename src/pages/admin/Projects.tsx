
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Calendar, MapPin } from 'lucide-react';
import ProjectForm from '@/components/admin/ProjectForm';

interface Project {
  id: string;
  title: string;
  slug: string;
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

const Projects: React.FC = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: projects, isLoading } = useQuery({
    queryKey: ['admin-projects'],
    queryFn: async () => {
      console.log('Fetching projects from Supabase...');
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }
      
      console.log('Fetched projects:', data);
      return data as Project[];
    }
  });

  const createProjectMutation = useMutation({
    mutationFn: async (projectData: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
      console.log('Creating project with data:', projectData);
      const { data, error } = await supabase
        .from('projects')
        .insert([projectData])
        .select()
        .single();
      
      if (error) {
        console.error('Error creating project:', error);
        throw error;
      }
      
      console.log('Project created successfully:', data);
      return data;
    },
    onSuccess: (data) => {
      console.log('Create project mutation successful:', data);
      queryClient.invalidateQueries({ queryKey: ['admin-projects'] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      setIsCreateDialogOpen(false);
      toast({
        title: "Project aangemaakt",
        description: "Het project is succesvol aangemaakt.",
      });
    },
    onError: (error) => {
      console.error('Create project mutation error:', error);
      toast({
        title: "Fout bij aanmaken",
        description: `Er is een fout opgetreden: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  const updateProjectMutation = useMutation({
    mutationFn: async ({ id, ...projectData }: Partial<Project> & { id: string }) => {
      console.log('Updating project with ID:', id, 'Data:', projectData);
      const { data, error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', id)
        .select()
        .single();
      
      if (error) {
        console.error('Error updating project:', error);
        throw error;
      }
      
      console.log('Project updated successfully:', data);
      return data;
    },
    onSuccess: (data) => {
      console.log('Update project mutation successful:', data);
      queryClient.invalidateQueries({ queryKey: ['admin-projects'] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      setIsEditDialogOpen(false);
      setSelectedProject(null);
      toast({
        title: "Project bijgewerkt",
        description: "Het project is succesvol bijgewerkt.",
      });
    },
    onError: (error) => {
      console.error('Update project mutation error:', error);
      toast({
        title: "Fout bij bijwerken",
        description: `Er is een fout opgetreden: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  const deleteProjectMutation = useMutation({
    mutationFn: async (id: string) => {
      console.log('Deleting project with ID:', id);
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting project:', error);
        throw error;
      }
      
      console.log('Project deleted successfully');
    },
    onSuccess: () => {
      console.log('Delete project mutation successful');
      queryClient.invalidateQueries({ queryKey: ['admin-projects'] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({
        title: "Project verwijderd",
        description: "Het project is succesvol verwijderd.",
      });
    },
    onError: (error) => {
      console.error('Delete project mutation error:', error);
      toast({
        title: "Fout bij verwijderen",
        description: `Er is een fout opgetreden: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  const handleEditProject = (project: Project) => {
    console.log('Opening edit dialog for project:', project);
    setSelectedProject(project);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    console.log('Closing edit dialog');
    setIsEditDialogOpen(false);
    setSelectedProject(null);
  };

  const handleCloseCreateDialog = () => {
    console.log('Closing create dialog');
    setIsCreateDialogOpen(false);
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
                  onError={(e) => {
                    console.error('Image failed to load:', e.currentTarget.src);
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="w-full h-full bg-gray-200 flex items-center justify-center"
                style={{ display: (project.featured_image || project.image_url) ? 'none' : 'flex' }}
              >
                <span className="text-gray-500">Geen afbeelding</span>
              </div>
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
                {project.description || 'Geen beschrijving'}
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
                  onClick={() => handleEditProject(project)}
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
      <Dialog open={isEditDialogOpen} onOpenChange={handleCloseEditDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Project Bewerken</DialogTitle>
            <DialogDescription>
              Bewerk de projectgegevens.
            </DialogDescription>
          </DialogHeader>
          <ProjectForm 
            project={selectedProject}
            onSubmit={(data) => updateProjectMutation.mutate({ ...data, id: selectedProject!.id })}
            isLoading={updateProjectMutation.isPending}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
