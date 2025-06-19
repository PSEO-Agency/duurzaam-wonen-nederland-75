
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  useServices, useCreateService, useUpdateService
} from '@/hooks/useLocations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { PlusIcon, Edit2Icon } from 'lucide-react';

const Services: React.FC = () => {
  const [newService, setNewService] = useState({
    name: '',
    slug: '',
    description: '',
    icon_name: '',
    meta_title: '',
    meta_description: '',
  });
  
  const [editService, setEditService] = useState({
    id: '',
    name: '',
    description: '',
    icon_name: '',
    meta_title: '',
    meta_description: '',
  });

  const { data: services, isLoading: isLoadingServices } = useServices();
  
  const createServiceMutation = useCreateService();
  const updateServiceMutation = useUpdateService();

  const handleCreateService = () => {
    if (!newService.name || !newService.slug) return;
    createServiceMutation.mutate(newService);
    setNewService({
      name: '',
      slug: '',
      description: '',
      icon_name: '',
      meta_title: '',
      meta_description: '',
    });
  };
  
  const handleUpdateService = () => {
    if (!editService.id) return;
    updateServiceMutation.mutate(editService);
  };
  
  const handleServiceEdit = (service: any) => {
    setEditService({
      id: service.id,
      name: service.name,
      description: service.description || '',
      icon_name: service.icon_name || '',
      meta_title: service.meta_title || '',
      meta_description: service.meta_description || '',
    });
  };
  
  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>Services Management | Admin</title>
      </Helmet>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Services Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>
                Create a new service offering
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Service Name</Label>
                <Input 
                  id="name" 
                  placeholder="Service name"
                  value={newService.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    setNewService(prev => ({ 
                      ...prev, 
                      name, 
                      slug: generateSlug(name)
                    }));
                  }}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input 
                  id="slug" 
                  placeholder="service-slug"
                  value={newService.slug}
                  onChange={(e) => setNewService(prev => ({ ...prev, slug: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Service description"
                  value={newService.description}
                  onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="icon">Icon Name</Label>
                <Input 
                  id="icon" 
                  placeholder="Icon name (e.g. Window, Home)"
                  value={newService.icon_name}
                  onChange={(e) => setNewService(prev => ({ ...prev, icon_name: e.target.value }))}
                />
                <p className="text-xs text-gray-500">Use Lucide icon names</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input 
                  id="meta-title" 
                  placeholder="SEO title"
                  value={newService.meta_title}
                  onChange={(e) => setNewService(prev => ({ ...prev, meta_title: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea 
                  id="meta-description" 
                  placeholder="SEO description"
                  value={newService.meta_description}
                  onChange={(e) => setNewService(prev => ({ ...prev, meta_description: e.target.value }))}
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button onClick={handleCreateService}>Save</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
          <CardDescription>
            Manage services offered by your company
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingServices ? (
            <div>Loading services...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services?.map(service => (
                <Card key={service.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 flex flex-row justify-between">
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleServiceEdit(service)}
                        >
                          <Edit2Icon className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Service</DialogTitle>
                          <DialogDescription>
                            Update information for {service.name}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="edit-name">Name</Label>
                            <Input 
                              id="edit-name" 
                              value={editService.name}
                              onChange={(e) => setEditService(prev => ({ ...prev, name: e.target.value }))}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="edit-description">Description</Label>
                            <Textarea 
                              id="edit-description" 
                              value={editService.description}
                              onChange={(e) => setEditService(prev => ({ ...prev, description: e.target.value }))}
                              rows={3}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="edit-icon">Icon Name</Label>
                            <Input 
                              id="edit-icon" 
                              value={editService.icon_name}
                              onChange={(e) => setEditService(prev => ({ ...prev, icon_name: e.target.value }))}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="edit-meta-title">Meta Title</Label>
                            <Input 
                              id="edit-meta-title" 
                              value={editService.meta_title}
                              onChange={(e) => setEditService(prev => ({ ...prev, meta_title: e.target.value }))}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="edit-meta-description">Meta Description</Label>
                            <Textarea 
                              id="edit-meta-description" 
                              value={editService.meta_description}
                              onChange={(e) => setEditService(prev => ({ ...prev, meta_description: e.target.value }))}
                              rows={3}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button onClick={handleUpdateService}>Update</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent>
                    {service.description && (
                      <p className="text-sm text-gray-700 mb-2">{service.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      <span>Slug: {service.slug}</span>
                      {service.icon_name && (
                        <span>Icon: {service.icon_name}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Services;
