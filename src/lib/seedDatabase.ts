
import { supabase } from '@/integrations/supabase/client';
import { sampleServices, sampleCityServices, sampleRegions, sampleCities } from './sampleData';

export async function seedServices() {
  try {
    console.log('Starting to seed services...');
    
    for (const service of sampleServices) {
      // Check if service already exists
      const { data: existingService } = await supabase
        .from('services')
        .select('id')
        .eq('slug', service.slug)
        .single();

      if (!existingService) {
        const { error } = await supabase
          .from('services')
          .insert(service);

        if (error) {
          console.error(`Error inserting service ${service.name}:`, error);
        } else {
          console.log(`Successfully inserted service: ${service.name}`);
        }
      } else {
        console.log(`Service ${service.name} already exists, skipping...`);
      }
    }
    
    console.log('Services seeding completed');
  } catch (error) {
    console.error('Error seeding services:', error);
  }
}

export async function seedCityServices() {
  try {
    console.log('Starting to seed city services...');
    
    for (const cityService of sampleCityServices) {
      // Get city ID
      const { data: city } = await supabase
        .from('cities')
        .select('id')
        .eq('name', cityService.city_name)
        .single();

      // Get service ID  
      const { data: service } = await supabase
        .from('services')
        .select('id')
        .eq('name', cityService.service_name)
        .single();

      if (city && service) {
        // Check if city service already exists
        const { data: existingCityService } = await supabase
          .from('city_services')
          .select('id')
          .eq('city_id', city.id)
          .eq('service_id', service.id)
          .single();

        if (!existingCityService) {
          const cityServiceData = {
            city_id: city.id,
            service_id: service.id,
            custom_title: cityService.custom_title,
            custom_description: cityService.custom_description,
            custom_meta_title: cityService.custom_meta_title,
            custom_meta_description: cityService.custom_meta_description,
            pricing_info: cityService.pricing_info,
            benefits: cityService.benefits || [],
            features: cityService.features || [],
            is_active: true
          };

          const { error } = await supabase
            .from('city_services')
            .insert(cityServiceData);

          if (error) {
            console.error(`Error inserting city service ${cityService.city_name} - ${cityService.service_name}:`, error);
          } else {
            console.log(`Successfully inserted city service: ${cityService.city_name} - ${cityService.service_name}`);
          }
        } else {
          console.log(`City service ${cityService.city_name} - ${cityService.service_name} already exists, skipping...`);
        }
      } else {
        console.log(`City ${cityService.city_name} or service ${cityService.service_name} not found, skipping...`);
      }
    }
    
    console.log('City services seeding completed');
  } catch (error) {
    console.error('Error seeding city services:', error);
  }
}

// Function to seed comprehensive Dutch regions and cities
export async function seedSampleLocations() {
  try {
    console.log('Starting to seed comprehensive Dutch locations...');
    
    // Insert all Dutch regions
    for (const region of sampleRegions) {
      const { data: existingRegion } = await supabase
        .from('regions')
        .select('id')
        .eq('slug', region.slug)
        .single();

      if (!existingRegion) {
        const { error } = await supabase.from('regions').insert(region);
        if (error) {
          console.error(`Error inserting region ${region.name}:`, error);
        } else {
          console.log(`Inserted region: ${region.name}`);
        }
      } else {
        console.log(`Region ${region.name} already exists, skipping...`);
      }
    }

    // Insert all cities with their regions
    for (const city of sampleCities) {
      const { data: region } = await supabase
        .from('regions')
        .select('id')
        .eq('slug', city.region_slug)
        .single();

      if (region) {
        const { data: existingCity } = await supabase
          .from('cities')
          .select('id')
          .eq('slug', city.slug)
          .single();

        if (!existingCity) {
          const cityData = {
            name: city.name,
            slug: city.slug,
            region_id: region.id,
            description: city.description,
            meta_title: `${city.name} - Duurzaam Wonen Nederland`,
            meta_description: `${city.description} Ontdek onze diensten in ${city.name}.`
          };

          const { error } = await supabase.from('cities').insert(cityData);
          if (error) {
            console.error(`Error inserting city ${city.name}:`, error);
          } else {
            console.log(`Inserted city: ${city.name}`);
          }
        } else {
          console.log(`City ${city.name} already exists, skipping...`);
        }
      } else {
        console.error(`Region not found for city ${city.name} with region_slug ${city.region_slug}`);
      }
    }
    
    console.log('Comprehensive Dutch locations seeding completed');
  } catch (error) {
    console.error('Error seeding comprehensive locations:', error);
  }
}

// Main seeding function
export async function seedAllData() {
  console.log('Starting comprehensive database seeding...');
  await seedSampleLocations();
  await seedServices();
  await seedCityServices();
  console.log('Comprehensive database seeding completed!');
}
