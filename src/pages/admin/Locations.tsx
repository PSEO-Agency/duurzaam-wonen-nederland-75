
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  useRegions, useCities, useNeighborhoods, useCreateCity, 
  useCreateNeighborhood, useUpdateCity 
} from '@/hooks/useLocations';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { PlusIcon, Edit2Icon, MapPinIcon } from 'lucide-react';

const Locations: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  
  const [newCity, setNewCity] = useState({
    region_id: '',
    name: '',
    slug: '',
    description: '',
  });
  
  const [editCity, setEditCity] = useState({
    id: '',
    name: '',
    description: '',
    meta_title: '',
    meta_description: '',
  });
  
  const [newNeighborhood, setNewNeighborhood] = useState({
    city_id: '',
    name: '',
    slug: '',
    description: '',
  });

  const { data: regions, isLoading: isLoadingRegions } = useRegions();
  const { data: cities, isLoading: isLoadingCities } = useCities(selectedRegionId || undefined);
  const { data: neighborhoods, isLoading: isLoadingNeighborhoods } = useNeighborhoods(selectedCityId || undefined);
  
  const createCityMutation = useCreateCity();
  const updateCityMutation = useUpdateCity();
  const createNeighborhoodMutation = useCreateNeighborhood();

  const handleCreateCity = () => {
    if (!newCity.region_id || !newCity.name || !newCity.slug) return;
    createCityMutation.mutate(newCity);
    setNewCity({
      region_id: '',
      name: '',
      slug: '',
      description: '',
    });
  };
  
  const handleUpdateCity = () => {
    if (!editCity.id) return;
    updateCityMutation.mutate(editCity);
  };
  
  const handleCreateNeighborhood = () => {
    if (!newNeighborhood.city_id || !newNeighborhood.name || !newNeighborhood.slug) return;
    createNeighborhoodMutation.mutate(newNeighborhood);
    setNewNeighborhood({
      city_id: '',
      name: '',
      slug: '',
      description: '',
    });
  };
  
  const handleCitySelect = (city: any) => {
    setSelectedCityId(city.id);
    setNewNeighborhood(prev => ({ ...prev, city_id: city.id }));
  };
  
  const handleCityEdit = (city: any) => {
    setEditCity({
      id: city.id,
      name: city.name,
      description: city.description || '',
      meta_title: city.meta_title || '',
      meta_description: city.meta_description || '',
    });
  };
  
  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>Locations Management | Admin</title>
      </Helmet>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Locations Management</h1>
      </div>
      
      <Tabs defaultValue="regions">
        <TabsList className="mb-6">
          <TabsTrigger value="regions">Regions</TabsTrigger>
          <TabsTrigger value="cities">Cities</TabsTrigger>
          <TabsTrigger value="neighborhoods">Neighborhoods</TabsTrigger>
        </TabsList>
        
        <TabsContent value="regions">
          <Card>
            <CardHeader>
              <CardTitle>Regions</CardTitle>
              <CardDescription>
                Manage regions in the Netherlands
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingRegions ? (
                <div>Loading regions...</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {regions?.map(region => (
                    <Card key={region.id} className="cursor-pointer hover:shadow-md transition-shadow" 
                      onClick={() => setSelectedRegionId(region.id)}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{region.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">Slug: {region.slug}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="cities">
          <div className="flex gap-6">
            <Card className="w-2/3">
              <CardHeader className="flex flex-row justify-between items-center">
                <div>
                  <CardTitle>Cities</CardTitle>
                  <CardDescription>
                    Manage cities within regions
                  </CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <PlusIcon className="h-4 w-4 mr-1" />
                      Add City
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New City</DialogTitle>
                      <DialogDescription>
                        Create a new city in a region
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="region">Region</Label>
                        <Select 
                          onValueChange={(value) => setNewCity(prev => ({ ...prev, region_id: value }))}
                          value={newCity.region_id}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            {regions?.map(region => (
                              <SelectItem key={region.id} value={region.id}>{region.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="City name"
                          value={newCity.name}
                          onChange={(e) => {
                            const name = e.target.value;
                            setNewCity(prev => ({ 
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
                          placeholder="city-slug"
                          value={newCity.slug}
                          onChange={(e) => setNewCity(prev => ({ ...prev, slug: e.target.value }))}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                          id="description" 
                          placeholder="City description"
                          value={newCity.description}
                          onChange={(e) => setNewCity(prev => ({ ...prev, description: e.target.value }))}
                          rows={3}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button onClick={handleCreateCity}>Save</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2 mb-4">
                    <Select 
                      onValueChange={(value) => setSelectedRegionId(value)}
                      value={selectedRegionId || ""}
                    >
                      <SelectTrigger className="w-[240px]">
                        <SelectValue placeholder="Filter by region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All regions</SelectItem>
                        {regions?.map(region => (
                          <SelectItem key={region.id} value={region.id}>{region.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {isLoadingCities ? (
                    <div>Loading cities...</div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cities?.map(city => (
                        <Card key={city.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2 flex flex-row justify-between">
                            <div>
                              <CardTitle className="text-lg flex items-center">
                                <MapPinIcon className="h-4 w-4 mr-1" />
                                {city.name}
                              </CardTitle>
                              {regions && (
                                <p className="text-xs text-gray-500">
                                  {regions.find(r => r.id === city.region_id)?.name}
                                </p>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleCitySelect(city)}
                              >
                                <MapPinIcon className="h-4 w-4" />
                              </Button>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="icon"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleCityEdit(city);
                                    }}
                                  >
                                    <Edit2Icon className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Edit City</DialogTitle>
                                    <DialogDescription>
                                      Update information for {city.name}
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-name">Name</Label>
                                      <Input 
                                        id="edit-name" 
                                        value={editCity.name}
                                        onChange={(e) => setEditCity(prev => ({ ...prev, name: e.target.value }))}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-description">Description</Label>
                                      <Textarea 
                                        id="edit-description" 
                                        value={editCity.description}
                                        onChange={(e) => setEditCity(prev => ({ ...prev, description: e.target.value }))}
                                        rows={3}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-meta-title">Meta Title</Label>
                                      <Input 
                                        id="edit-meta-title" 
                                        value={editCity.meta_title || ''}
                                        onChange={(e) => setEditCity(prev => ({ ...prev, meta_title: e.target.value }))}
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="edit-meta-description">Meta Description</Label>
                                      <Textarea 
                                        id="edit-meta-description" 
                                        value={editCity.meta_description || ''}
                                        onChange={(e) => setEditCity(prev => ({ ...prev, meta_description: e.target.value }))}
                                        rows={3}
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <DialogClose asChild>
                                      <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                      <Button onClick={handleUpdateCity}>Update</Button>
                                    </DialogClose>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </CardHeader>
                          <CardContent>
                            {city.description && (
                              <p className="text-sm text-gray-700 mb-2">{city.description}</p>
                            )}
                            <p className="text-xs text-gray-500">Slug: {city.slug}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card className="w-1/3">
              <CardHeader>
                <CardTitle>City Details</CardTitle>
                <CardDescription>
                  {selectedCityId 
                    ? 'View details and neighborhoods for selected city'
                    : 'Select a city to view details'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!selectedCityId ? (
                  <div className="text-center py-8 text-gray-500">
                    <MapPinIcon className="h-12 w-12 mx-auto mb-2 opacity-20" />
                    <p>No city selected</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      {cities?.find(c => c.id === selectedCityId)?.name}
                    </h3>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium flex justify-between items-center mb-2">
                          Neighborhoods
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline">
                                <PlusIcon className="h-3 w-3 mr-1" />
                                Add
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Add New Neighborhood</DialogTitle>
                                <DialogDescription>
                                  Create a new neighborhood in {cities?.find(c => c.id === selectedCityId)?.name}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                  <Label htmlFor="neighborhood-name">Name</Label>
                                  <Input 
                                    id="neighborhood-name" 
                                    placeholder="Neighborhood name"
                                    value={newNeighborhood.name}
                                    onChange={(e) => {
                                      const name = e.target.value;
                                      setNewNeighborhood(prev => ({ 
                                        ...prev, 
                                        name, 
                                        slug: generateSlug(name)
                                      }));
                                    }}
                                  />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="neighborhood-slug">Slug</Label>
                                  <Input 
                                    id="neighborhood-slug" 
                                    placeholder="neighborhood-slug"
                                    value={newNeighborhood.slug}
                                    onChange={(e) => setNewNeighborhood(prev => ({ ...prev, slug: e.target.value }))}
                                  />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="neighborhood-description">Description</Label>
                                  <Textarea 
                                    id="neighborhood-description" 
                                    placeholder="Neighborhood description"
                                    value={newNeighborhood.description}
                                    onChange={(e) => setNewNeighborhood(prev => ({ ...prev, description: e.target.value }))}
                                    rows={3}
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <DialogClose asChild>
                                  <Button onClick={handleCreateNeighborhood}>Save</Button>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </h4>
                        {isLoadingNeighborhoods ? (
                          <div>Loading neighborhoods...</div>
                        ) : neighborhoods?.length === 0 ? (
                          <p className="text-sm text-gray-500">No neighborhoods found</p>
                        ) : (
                          <div className="space-y-2">
                            {neighborhoods?.map(neighborhood => (
                              <div 
                                key={neighborhood.id} 
                                className="p-3 bg-gray-50 rounded-md text-sm"
                              >
                                <div className="font-medium">{neighborhood.name}</div>
                                <div className="text-xs text-gray-500">Slug: {neighborhood.slug}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="neighborhoods">
          <Card>
            <CardHeader>
              <CardTitle>Neighborhoods</CardTitle>
              <CardDescription>
                Manage neighborhoods within cities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Select 
                    onValueChange={(value) => setSelectedRegionId(value)}
                    value={selectedRegionId || ""}
                  >
                    <SelectTrigger className="w-[240px]">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All regions</SelectItem>
                      {regions?.map(region => (
                        <SelectItem key={region.id} value={region.id}>{region.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select 
                    onValueChange={(value) => setSelectedCityId(value)}
                    value={selectedCityId || ""}
                  >
                    <SelectTrigger className="w-[240px]">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All cities</SelectItem>
                      {cities?.map(city => (
                        <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {isLoadingNeighborhoods ? (
                  <div>Loading neighborhoods...</div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {neighborhoods?.map(neighborhood => (
                      <Card key={neighborhood.id}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{neighborhood.name}</CardTitle>
                          <p className="text-xs text-gray-500">
                            {cities?.find(c => c.id === neighborhood.city_id)?.name}
                          </p>
                        </CardHeader>
                        <CardContent>
                          {neighborhood.description && (
                            <p className="text-sm text-gray-700 mb-2">{neighborhood.description}</p>
                          )}
                          <p className="text-xs text-gray-500">Slug: {neighborhood.slug}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Locations;
