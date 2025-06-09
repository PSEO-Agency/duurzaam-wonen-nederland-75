
import { supabase } from '@/integrations/supabase/client';
import { sampleServices, sampleCityServices } from './sampleData';

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

// Function to seed sample regions and cities for testing
export async function seedSampleLocations() {
  try {
    console.log('Starting to seed sample locations...');
    
    // Sample regions
    const sampleRegions = [
      { name: 'Noord-Holland', slug: 'noord-holland' },
      { name: 'Zuid-Holland', slug: 'zuid-holland' },
      { name: 'Utrecht', slug: 'utrecht' },
      { name: 'Gelderland', slug: 'gelderland' }
    ];

    // Insert regions
    for (const region of sampleRegions) {
      const { data: existingRegion } = await supabase
        .from('regions')
        .select('id')
        .eq('slug', region.slug)
        .single();

      if (!existingRegion) {
        await supabase.from('regions').insert(region);
        console.log(`Inserted region: ${region.name}`);
      }
    }

    // Sample cities with their regions
    const sampleCities = [
      { name: 'Amsterdam', slug: 'amsterdam', region_slug: 'noord-holland' },
      { name: 'Haarlem', slug: 'haarlem', region_slug: 'noord-holland' },
      { name: 'Rotterdam', slug: 'rotterdam', region_slug: 'zuid-holland' },
      { name: 'Den Haag', slug: 'den-haag', region_slug: 'zuid-holland' },
      { name: 'Utrecht', slug: 'utrecht', region_slug: 'utrecht' },
      { name: 'Arnhem', slug: 'arnhem', region_slug: 'gelderland' }
    ];

    // Insert cities
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
          await supabase.from('cities').insert({
            name: city.name,
            slug: city.slug,
            region_id: region.id,
            description: `${city.name} en omgeving`
          });
          console.log(`Inserted city: ${city.name}`);
        }
      }
    }
    
    console.log('Sample locations seeding completed');
  } catch (error) {
    console.error('Error seeding sample locations:', error);
  }
}

// Main seeding function
export async function seedAllData() {
  console.log('Starting database seeding...');
  await seedSampleLocations();
  await seedServices();
  await seedCityServices();
  console.log('Database seeding completed!');
}
