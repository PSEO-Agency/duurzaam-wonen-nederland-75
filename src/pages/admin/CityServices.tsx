import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  useCities, useServices, useCityServices, 
  useCreateCityService, useUpdateCityService 
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { PlusIcon, Edit2Icon, MapPinIcon, SearchIcon, CheckIcon, XIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BenefitItem {
  id: string;
  text: string;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

const CityServices: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [newCityService, setNewCityService] = useState({
    city_id: '',
    service_id: '',
    custom_title: '',
    custom_description: '',
    custom_meta_title: '',
    custom_meta_description: '',
    pricing_info: '',
    benefits: [] as BenefitItem[],
    features: [] as FeatureItem[],
    is_active: true
  });
  
  const [editCityService, setEditCityService] = useState({
    id: '',
    city_id: '',
    service_id: '',
    custom_title: '',
    custom_description: '',
    custom_meta_title: '',
    custom_meta_description: '',
    pricing_info: '',
    benefits: [] as BenefitItem[],
    features: [] as FeatureItem[],
    is_active: true
  });
  
  // For benefits and features management
  const [newBenefit, setNewBenefit] = useState('');
  const [newFeatureTitle, setNewFeatureTitle] = useState('');
  const [newFeatureDescription, setNewFeatureDescription] = useState('');

  const { data: cities } = useCities();
  const { data: services } = useServices();
  const { data: cityServices, isLoading: isLoadingCityServices } = useCityServices(
    selectedCityId === 'all' ? undefined : selectedCityId, 
    selectedServiceId === 'all' ? undefined : selectedServiceId
  );
  
  const createCityServiceMutation = useCreateCityService();
  const updateCityServiceMutation = useUpdateCityService();

  const handleCreateCityService = () => {
    const payload = {
      ...newCityService,
      benefits: newCityService.benefits.length > 0 ? newCityService.benefits : null,
      features: newCityService.features.length > 0 ? newCityService.features : null
    };
    
    createCityServiceMutation.mutate(payload);
    setNewCityService({
      city_id: '',
      service_id: '',
      custom_title: '',
      custom_description: '',
      custom_meta_title: '',
      custom_meta_description: '',
      pricing_info: '',
      benefits: [],
      features: [],
      is_active: true
    });
  };
  
  const handleUpdateCityService = () => {
    if (!editCityService.id) return;
    
    const payload = {
      ...editCityService,
      benefits: editCityService.benefits.length > 0 ? editCityService.benefits : null,
      features: editCityService.features.length > 0 ? editCityService.features : null
    };
    
    updateCityServiceMutation.mutate(payload);
  };
  
  const handleCityServiceEdit = (cityService: any) => {
    setEditCityService({
      id: cityService.id,
      city_id: cityService.city_id,
      service_id: cityService.service_id,
      custom_title: cityService.custom_title || '',
      custom_description: cityService.custom_description || '',
      custom_meta_title: cityService.custom_meta_title || '',
      custom_meta_description: cityService.custom_meta_description || '',
      pricing_info: cityService.pricing_info || '',
      benefits: cityService.benefits || [],
      features: cityService.features || [],
      is_active: cityService.is_active
    });
  };
  
  const addBenefit = (target: 'new' | 'edit') => {
    if (target === 'new' && newBenefit.trim()) {
      setNewCityService(prev => ({
        ...prev,
        benefits: [...prev.benefits, { id: Date.now().toString(), text: newBenefit.trim() }]
      }));
      setNewBenefit('');
    } else if (target === 'edit' && newBenefit.trim()) {
      setEditCityService(prev => ({
        ...prev,
        benefits: [...prev.benefits, { id: Date.now().toString(), text: newBenefit.trim() }]
      }));
      setNewBenefit('');
    }
  };
  
  const removeBenefit = (target: 'new' | 'edit', id: string) => {
    if (target === 'new') {
      setNewCityService(prev => ({
        ...prev,
        benefits: prev.benefits.filter(benefit => benefit.id !== id)
      }));
    } else if (target === 'edit') {
      setEditCityService(prev => ({
        ...prev,
        benefits: prev.benefits.filter(benefit => benefit.id !== id)
      }));
    }
  };
  
  const addFeature = (target: 'new' | 'edit') => {
    if (target === 'new' && newFeatureTitle.trim()) {
      setNewCityService(prev => ({
        ...prev,
        features: [
          ...prev.features, 
          { 
            id: Date.now().toString(), 
            title: newFeatureTitle.trim(), 
            description: newFeatureDescription.trim() 
          }
        ]
      }));
      setNewFeatureTitle('');
      setNewFeatureDescription('');
    } else if (target === 'edit' && newFeatureTitle.trim()) {
      setEditCityService(prev => ({
        ...prev,
        features: [
          ...prev.features, 
          { 
            id: Date.now().toString(), 
            title: newFeatureTitle.trim(), 
            description: newFeatureDescription.trim() 
          }
        ]
      }));
      setNewFeatureTitle('');
      setNewFeatureDescription('');
    }
  };
  
  const removeFeature = (target: 'new' | 'edit', id: string) => {
    if (target === 'new') {
      setNewCityService(prev => ({
        ...prev,
        features: prev.features.filter(feature => feature.id !== id)
      }));
    } else if (target === 'edit') {
      setEditCityService(prev => ({
        ...prev,
        features: prev.features.filter(feature => feature.id !== id)
      }));
    }
  };
  
  // Filter cityServices based on search query
  const filteredCityServices = cityServices?.filter(cs => {
    const cityName = cs.cities?.name?.toLowerCase() || '';
    const serviceName = cs.services?.name?.toLowerCase() || '';
    const customTitle = cs.custom_title?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();
    
    return cityName.includes(query) || 
           serviceName.includes(query) || 
           customTitle.includes(query);
  });

  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>City Services Management | Admin</title>
      </Helmet>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">City Services Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="h-4 w-4 mr-2" />
              Add City Service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add New City Service</DialogTitle>
              <DialogDescription>
                Create a new service for a specific city
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="basic">
              <TabsList className="mb-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic">
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Select 
                        onValueChange={(value) => setNewCityService(prev => ({ ...prev, city_id: value }))}
                        value={newCityService.city_id}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities?.map(city => (
                            <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service</Label>
                      <Select 
                        onValueChange={(value) => setNewCityService(prev => ({ ...prev, service_id: value }))}
                        value={newCityService.service_id}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services?.map(service => (
                            <SelectItem key={service.id} value={service.id}>{service.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-title">Custom Title</Label>
                    <Input 
                      id="custom-title" 
                      placeholder="Custom title (e.g. Kunststof Kozijnen in Amsterdam)"
                      value={newCityService.custom_title}
                      onChange={(e) => setNewCityService(prev => ({ ...prev, custom_title: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-description">Custom Description</Label>
                    <Textarea 
                      id="custom-description" 
                      placeholder="Custom description for this service in this city"
                      value={newCityService.custom_description}
                      onChange={(e) => setNewCityService(prev => ({ ...prev, custom_description: e.target.value }))}
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pricing">Pricing Information</Label>
                    <Textarea 
                      id="pricing" 
                      placeholder="Pricing details specific to this city"
                      value={newCityService.pricing_info}
                      onChange={(e) => setNewCityService(prev => ({ ...prev, pricing_info: e.target.value }))}
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is-active"
                      checked={newCityService.is_active}
                      onChange={(e) => setNewCityService(prev => ({ ...prev, is_active: e.target.checked }))}
                      className="h-4 w-4"
                    />
                    <Label htmlFor="is-active">Active</Label>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="seo">
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="meta-title">Meta Title</Label>
                    <Input 
                      id="meta-title" 
                      placeholder="SEO title"
                      value={newCityService.custom_meta_title}
                      onChange={(e) => setNewCityService(prev => ({ ...prev, custom_meta_title: e.target.value }))}
                    />
                    <p className="text-xs text-gray-500">Recommended: 50-60 characters</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="meta-description">Meta Description</Label>
                    <Textarea 
                      id="meta-description" 
                      placeholder="SEO description"
                      value={newCityService.custom_meta_description}
                      onChange={(e) => setNewCityService(prev => ({ ...prev, custom_meta_description: e.target.value }))}
                      rows={3}
                    />
                    <p className="text-xs text-gray-500">Recommended: 150-160 characters</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits">
                <div className="space-y-4 py-4">
                  <div className="flex items-end gap-2">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor="benefit">Add Benefit</Label>
                      <Input 
                        id="benefit" 
                        placeholder="e.g. 10 year warranty"
                        value={newBenefit}
                        onChange={(e) => setNewBenefit(e.target.value)}
                      />
                    </div>
                    <Button onClick={() => addBenefit('new')} type="button">Add</Button>
                  </div>
                  
                  {newCityService.benefits.length > 0 ? (
                    <div className="mt-4 space-y-2">
                      <Label>Current Benefits</Label>
                      <div className="space-y-2">
                        {newCityService.benefits.map(benefit => (
                          <div key={benefit.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                            <span>{benefit.text}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => removeBenefit('new', benefit.id)}
                            >
                              <XIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 mt-4">No benefits added yet</p>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="features">
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="feature-title">Feature Title</Label>
                    <Input 
                      id="feature-title" 
                      placeholder="e.g. Energy Efficient"
                      value={newFeatureTitle}
                      onChange={(e) => setNewFeatureTitle(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="feature-description">Feature Description</Label>
                    <Textarea 
                      id="feature-description" 
                      placeholder="Detailed description of the feature"
                      value={newFeatureDescription}
                      onChange={(e) => setNewFeatureDescription(e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <Button onClick={() => addFeature('new')} type="button" className="w-full">
                    Add Feature
                  </Button>
                  
                  {newCityService.features.length > 0 ? (
                    <div className="mt-4 space-y-4">
                      <Label>Current Features</Label>
                      <div className="space-y-3">
                        {newCityService.features.map(feature => (
                          <div key={feature.id} className="p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">{feature.title}</h4>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => removeFeature('new', feature.id)}
                              >
                                <XIcon className="h-4 w-4" />
                              </Button>
                            </div>
                            {feature.description && (
                              <p className="text-sm text-gray-700">{feature.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 mt-4">No features added yet</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button onClick={handleCreateCityService}>Save</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter City Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="filter-city" className="mb-2 block">Filter by City</Label>
              <Select 
                onValueChange={(value) => setSelectedCityId(value)}
                value={selectedCityId}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All cities</SelectItem>
                  {cities?.map(city => (
                    <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="filter-service" className="mb-2 block">Filter by Service</Label>
              <Select 
                onValueChange={(value) => setSelectedServiceId(value)}
                value={selectedServiceId}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All services</SelectItem>
                  {services?.map(service => (
                    <SelectItem key={service.id} value={service.id}>{service.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="search" className="mb-2 block">Search</Label>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="search"
                  placeholder="Search city services..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>City Services</CardTitle>
          <CardDescription>
            Manage service offerings for specific cities
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingCityServices ? (
            <div>Loading city services...</div>
          ) : filteredCityServices?.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No city services found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCityServices?.map(cityService => (
                <Card key={cityService.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 flex flex-row justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={cityService.is_active ? "default" : "outline"}>
                          {cityService.is_active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">
                        {cityService.custom_title || `${cityService.services?.name} in ${cityService.cities?.name}`}
                      </CardTitle>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPinIcon className="h-3 w-3 mr-1" />
                        {cityService.cities?.name}
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleCityServiceEdit(cityService)}
                        >
                          <Edit2Icon className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Edit City Service</DialogTitle>
                          <DialogDescription>
                            Update {cityService.services?.name} in {cityService.cities?.name}
                          </DialogDescription>
                        </DialogHeader>
                        <Tabs defaultValue="basic">
                          <TabsList className="mb-4">
                            <TabsTrigger value="basic">Basic Info</TabsTrigger>
                            <TabsTrigger value="seo">SEO</TabsTrigger>
                            <TabsTrigger value="benefits">Benefits</TabsTrigger>
                            <TabsTrigger value="features">Features</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="basic">
                            <div className="space-y-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label>City</Label>
                                  <div className="p-2 bg-gray-50 rounded-md">
                                    {cities?.find(c => c.id === editCityService.city_id)?.name}
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <Label>Service</Label>
                                  <div className="p-2 bg-gray-50 rounded-md">
                                    {services?.find(s => s.id === editCityService.service_id)?.name}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="edit-custom-title">Custom Title</Label>
                                <Input 
                                  id="edit-custom-title" 
                                  value={editCityService.custom_title}
                                  onChange={(e) => setEditCityService(prev => ({ ...prev, custom_title: e.target.value }))}
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="edit-custom-description">Custom Description</Label>
                                <Textarea 
                                  id="edit-custom-description" 
                                  value={editCityService.custom_description}
                                  onChange={(e) => setEditCityService(prev => ({ ...prev, custom_description: e.target.value }))}
                                  rows={4}
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="edit-pricing">Pricing Information</Label>
                                <Textarea 
                                  id="edit-pricing" 
                                  value={editCityService.pricing_info}
                                  onChange={(e) => setEditCityService(prev => ({ ...prev, pricing_info: e.target.value }))}
                                  rows={3}
                                />
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  id="edit-is-active"
                                  checked={editCityService.is_active}
                                  onChange={(e) => setEditCityService(prev => ({ ...prev, is_active: e.target.checked }))}
                                  className="h-4 w-4"
                                />
                                <Label htmlFor="edit-is-active">Active</Label>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="seo">
                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="edit-meta-title">Meta Title</Label>
                                <Input 
                                  id="edit-meta-title" 
                                  value={editCityService.custom_meta_title}
                                  onChange={(e) => setEditCityService(prev => ({ ...prev, custom_meta_title: e.target.value }))}
                                />
                                <p className="text-xs text-gray-500">Recommended: 50-60 characters</p>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="edit-meta-description">Meta Description</Label>
                                <Textarea 
                                  id="edit-meta-description" 
                                  value={editCityService.custom_meta_description}
                                  onChange={(e) => setEditCityService(prev => ({ ...prev, custom_meta_description: e.target.value }))}
                                  rows={3}
                                />
                                <p className="text-xs text-gray-500">Recommended: 150-160 characters</p>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="benefits">
                            <div className="space-y-4 py-4">
                              <div className="flex items-end gap-2">
                                <div className="flex-1 space-y-2">
                                  <Label htmlFor="edit-benefit">Add Benefit</Label>
                                  <Input 
                                    id="edit-benefit" 
                                    placeholder="e.g. 10 year warranty"
                                    value={newBenefit}
                                    onChange={(e) => setNewBenefit(e.target.value)}
                                  />
                                </div>
                                <Button onClick={() => addBenefit('edit')} type="button">Add</Button>
                              </div>
                              
                              {editCityService.benefits.length > 0 ? (
                                <div className="mt-4 space-y-2">
                                  <Label>Current Benefits</Label>
                                  <div className="space-y-2">
                                    {editCityService.benefits.map(benefit => (
                                      <div key={benefit.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                                        <span>{benefit.text}</span>
                                        <Button 
                                          variant="ghost" 
                                          size="icon" 
                                          onClick={() => removeBenefit('edit', benefit.id)}
                                        >
                                          <XIcon className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <p className="text-sm text-gray-500 mt-4">No benefits added yet</p>
                              )}
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="features">
                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="edit-feature-title">Feature Title</Label>
                                <Input 
                                  id="edit-feature-title" 
                                  placeholder="e.g. Energy Efficient"
                                  value={newFeatureTitle}
                                  onChange={(e) => setNewFeatureTitle(e.target.value)}
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="edit-feature-description">Feature Description</Label>
                                <Textarea 
                                  id="edit-feature-description" 
                                  placeholder="Detailed description of the feature"
                                  value={newFeatureDescription}
                                  onChange={(e) => setNewFeatureDescription(e.target.value)}
                                  rows={3}
                                />
                              </div>
                              
                              <Button onClick={() => addFeature('edit')} type="button" className="w-full">
                                Add Feature
                              </Button>
                              
                              {editCityService.features.length > 0 ? (
                                <div className="mt-4 space-y-4">
                                  <Label>Current Features</Label>
                                  <div className="space-y-3">
                                    {editCityService.features.map(feature => (
                                      <div key={feature.id} className="p-3 bg-gray-50 rounded-md">
                                        <div className="flex items-center justify-between mb-1">
                                          <h4 className="font-medium">{feature.title}</h4>
                                          <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            onClick={() => removeFeature('edit', feature.id)}
                                          >
                                            <XIcon className="h-4 w-4" />
                                          </Button>
                                        </div>
                                        {feature.description && (
                                          <p className="text-sm text-gray-700">{feature.description}</p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <p className="text-sm text-gray-500 mt-4">No features added yet</p>
                              )}
                            </div>
                          </TabsContent>
                        </Tabs>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button onClick={handleUpdateCityService}>Update</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent>
                    {cityService.custom_description && (
                      <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                        {cityService.custom_description}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 text-xs">
                      {cityService.benefits && cityService.benefits.length > 0 && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3" />
                          {cityService.benefits.length} benefits
                        </Badge>
                      )}
                      
                      {cityService.features && cityService.features.length > 0 && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3" />
                          {cityService.features.length} features
                        </Badge>
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

export default CityServices;
