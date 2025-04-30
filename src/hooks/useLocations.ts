
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Region, City, Neighborhood, Service, CityService, CityServiceWithRelations } from '@/types/location';
import { toast } from "@/components/ui/use-toast";

// Regions
export const useRegions = () => {
  return useQuery({
    queryKey: ['regions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('regions')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as Region[];
    }
  });
};

// Cities
export const useCities = (regionId?: string) => {
  return useQuery({
    queryKey: ['cities', regionId],
    queryFn: async () => {
      let query = supabase.from('cities').select('*').order('name');
      
      if (regionId) {
        query = query.eq('region_id', regionId);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data as City[];
    },
    enabled: !regionId || !!regionId
  });
};

export const useCity = (slug: string) => {
  return useQuery({
    queryKey: ['cities', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cities')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data as City;
    },
    enabled: !!slug
  });
};

export const useUpdateCity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (city: Partial<City> & { id: string }) => {
      const { data, error } = await supabase
        .from('cities')
        .update(city)
        .eq('id', city.id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cities'] });
      toast({
        title: "Success",
        description: "City updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update city: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

export const useCreateCity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (city: Omit<City, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('cities')
        .insert(city)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cities'] });
      toast({
        title: "Success",
        description: "City created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create city: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

// Neighborhoods
export const useNeighborhoods = (cityId?: string) => {
  return useQuery({
    queryKey: ['neighborhoods', cityId],
    queryFn: async () => {
      let query = supabase.from('neighborhoods').select('*').order('name');
      
      if (cityId) {
        query = query.eq('city_id', cityId);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data as Neighborhood[];
    },
    enabled: !cityId || !!cityId
  });
};

export const useCreateNeighborhood = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (neighborhood: Omit<Neighborhood, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('neighborhoods')
        .insert(neighborhood)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['neighborhoods', variables.city_id] });
      toast({
        title: "Success",
        description: "Neighborhood created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create neighborhood: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

// Services
export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as Service[];
    }
  });
};

export const useService = (slug: string) => {
  return useQuery({
    queryKey: ['services', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data as Service;
    },
    enabled: !!slug
  });
};

export const useCreateService = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('services')
        .insert(service)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
      toast({
        title: "Success",
        description: "Service created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create service: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

export const useUpdateService = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (service: Partial<Service> & { id: string }) => {
      const { data, error } = await supabase
        .from('services')
        .update(service)
        .eq('id', service.id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
      toast({
        title: "Success",
        description: "Service updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update service: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

// City Services
export const useCityServices = (cityId?: string, serviceId?: string) => {
  return useQuery({
    queryKey: ['city-services', cityId, serviceId],
    queryFn: async () => {
      let query = supabase
        .from('city_services')
        .select(`
          *,
          cities:city_id(*),
          services:service_id(*)
        `);
      
      if (cityId) {
        query = query.eq('city_id', cityId);
      }
      
      if (serviceId) {
        query = query.eq('service_id', serviceId);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data as CityServiceWithRelations[];
    },
    enabled: (!cityId && !serviceId) || !!cityId || !!serviceId
  });
};

export const useCityService = (citySlug: string, serviceSlug: string) => {
  return useQuery({
    queryKey: ['city-service', citySlug, serviceSlug],
    queryFn: async () => {
      // First get the city ID
      const { data: city, error: cityError } = await supabase
        .from('cities')
        .select('id')
        .eq('slug', citySlug)
        .single();
      
      if (cityError) throw cityError;
      
      // Then get the service ID
      const { data: service, error: serviceError } = await supabase
        .from('services')
        .select('id')
        .eq('slug', serviceSlug)
        .single();
      
      if (serviceError) throw serviceError;
      
      // Finally get the city service
      const { data, error } = await supabase
        .from('city_services')
        .select(`
          *,
          cities:city_id(*),
          services:service_id(*)
        `)
        .eq('city_id', city.id)
        .eq('service_id', service.id)
        .single();
      
      if (error) throw error;
      return data as CityServiceWithRelations;
    },
    enabled: !!citySlug && !!serviceSlug
  });
};

export const useCreateCityService = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (cityService: Omit<CityService, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('city_services')
        .insert(cityService)
        .select(`
          *,
          cities:city_id(*),
          services:service_id(*)
        `)
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['city-services'] });
      queryClient.invalidateQueries({ queryKey: ['city-services', variables.city_id] });
      queryClient.invalidateQueries({ queryKey: ['city-services', variables.city_id, variables.service_id] });
      toast({
        title: "Success",
        description: "City service created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create city service: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};

export const useUpdateCityService = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (cityService: Partial<CityService> & { id: string }) => {
      const { data, error } = await supabase
        .from('city_services')
        .update(cityService)
        .eq('id', cityService.id)
        .select(`
          *,
          cities:city_id(*),
          services:service_id(*)
        `)
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['city-services'] });
      queryClient.invalidateQueries({ queryKey: ['city-services', data.city_id] });
      queryClient.invalidateQueries({ queryKey: ['city-services', data.city_id, data.service_id] });
      queryClient.invalidateQueries({ queryKey: ['city-service'] });
      toast({
        title: "Success",
        description: "City service updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update city service: ${error.message}`,
        variant: "destructive",
      });
    }
  });
};
