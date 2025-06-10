
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';
import ImageUpload from '@/components/form/ImageUpload';

const Projects: React.FC = () => {
  const { data: projects, refetch } = useProjects();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image_url: '',
    location: '',
    completion_date: '',
    project_type: '',
    featured_image: '',
    gallery_images: [],
    is_featured: false,
    is_active: true,
    sort_order: 0
  });

  const handleSaveProject = async (project: any, isNew: boolean = false) => {
    try {
      setLoading(true);
      
      if (isNew) {
        const { error } = await supabase
          .from('projects')
          .insert(project);

        if (error) throw error;

        toast({
          title: "Project aangemaakt",
          description: "Het project is succesvol aangemaakt.",
        });

        setNewProject({
          title: '',
          description: '',
          image_url: '',
          location: '',
          completion_date: '',
          project_type: '',
          featured_image: '',
          gallery_images: [],
          is_featured: false,
          is_active: true,
          sort_order: 0
        });
      } else {
        const { error } = await supabase
          .from('projects')
          .update(project)
          .eq('id', project.id);

        if (error) throw error;

        toast({
          title: "Project bijgewerkt",
          description: "Het project is succesvol bijgewerkt.",
        });

        setEditingProject(null);
      }

      refetch();
    } catch (error) {
      console.error('Error saving project:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het opslaan van het project.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Weet je zeker dat je dit project wilt verwijderen?')) return;

    try {
      setLoading(true);
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Project verwijderd",
        description: "Het project is succesvol verwijderd.",
      });

      refetch();
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het verwijderen van het project.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projecten</h1>
          <p className="text-gray-500">Beheer projecten</p>
        </div>
      </div>

      {/* New Project Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus size={20} />
            Nieuw Project
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="new-title">Titel*</Label>
            <Input
              id="new-title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              placeholder="Project titel"
            />
          </div>
          <div>
            <Label htmlFor="new-description">Beschrijving</Label>
            <Textarea
              id="new-description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              placeholder="Project beschrijving"
              rows={3}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="new-location">Locatie</Label>
              <Input
                id="new-location"
                value={newProject.location}
                onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                placeholder="Project locatie"
              />
            </div>
            <div>
              <Label htmlFor="new-project-type">Project Type</Label>
              <Input
                id="new-project-type"
                value={newProject.project_type}
                onChange={(e) => setNewProject({ ...newProject, project_type: e.target.value })}
                placeholder="Type project"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="new-completion-date">Voltooiingsdatum</Label>
              <Input
                id="new-completion-date"
                type="date"
                value={newProject.completion_date}
                onChange={(e) => setNewProject({ ...newProject, completion_date: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="new-sort-order">Sorteervolgorde</Label>
              <Input
                id="new-sort-order"
                type="number"
                value={newProject.sort_order}
                onChange={(e) => setNewProject({ ...newProject, sort_order: parseInt(e.target.value) || 0 })}
                placeholder="0"
              />
            </div>
          </div>
          <ImageUpload
            label="Project Afbeelding"
            value={newProject.image_url}
            onChange={(url) => setNewProject({ ...newProject, image_url: url })}
            placeholder="/lovable-uploads/image.png"
          />
          <ImageUpload
            label="Featured Afbeelding"
            value={newProject.featured_image}
            onChange={(url) => setNewProject({ ...newProject, featured_image: url })}
            placeholder="/lovable-uploads/image.png"
          />
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="new-is-featured"
                checked={newProject.is_featured}
                onCheckedChange={(checked) => setNewProject({ ...newProject, is_featured: checked })}
              />
              <Label htmlFor="new-is-featured">Featured</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="new-is-active"
                checked={newProject.is_active}
                onCheckedChange={(checked) => setNewProject({ ...newProject, is_active: checked })}
              />
              <Label htmlFor="new-is-active">Actief</Label>
            </div>
          </div>
          <Button 
            onClick={() => handleSaveProject(newProject, true)} 
            disabled={loading || !newProject.title}
            className="bg-brand-green hover:bg-brand-green-dark"
          >
            <Save size={16} className="mr-2" />
            Project Opslaan
          </Button>
        </CardContent>
      </Card>

      {/* Projects List */}
      <div className="space-y-4">
        {projects?.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              {editingProject?.id === project.id ? (
                <div className="space-y-4">
                  {/* Edit form similar to new project form but with existing values */}
                  <div>
                    <Label>Titel*</Label>
                    <Input
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Beschrijving</Label>
                    <Textarea
                      value={editingProject.description || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleSaveProject(editingProject)} 
                      disabled={loading}
                      className="bg-brand-green hover:bg-brand-green-dark"
                    >
                      <Save size={16} className="mr-2" />
                      Opslaan
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setEditingProject(null)}
                    >
                      <X size={16} className="mr-2" />
                      Annuleren
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                      {project.description && (
                        <p className="text-gray-600 mb-2">{project.description}</p>
                      )}
                      <div className="flex gap-4 text-sm text-gray-500">
                        {project.location && <span>📍 {project.location}</span>}
                        {project.project_type && <span>🏷️ {project.project_type}</span>}
                        {project.completion_date && <span>📅 {project.completion_date}</span>}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingProject(project)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Sortering: {project.sort_order}</span>
                    <div className="flex gap-4">
                      {project.is_featured && <span className="text-yellow-600">⭐ Featured</span>}
                      <span className={project.is_active ? 'text-green-600' : 'text-red-600'}>
                        {project.is_active ? 'Actief' : 'Inactief'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
