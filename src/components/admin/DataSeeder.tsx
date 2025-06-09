
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { seedAllData, seedServices, seedCityServices, seedSampleLocations } from '@/lib/seedDatabase';
import { toast } from "sonner";

const DataSeeder: React.FC = () => {
  const [isSeeding, setIsSeeding] = useState(false);

  const handleSeedAll = async () => {
    setIsSeeding(true);
    try {
      await seedAllData();
      toast.success('Database seeded successfully!');
    } catch (error) {
      console.error('Seeding error:', error);
      toast.error('Error seeding database');
    } finally {
      setIsSeeding(false);
    }
  };

  const handleSeedServices = async () => {
    setIsSeeding(true);
    try {
      await seedServices();
      toast.success('Services seeded successfully!');
    } catch (error) {
      console.error('Seeding error:', error);
      toast.error('Error seeding services');
    } finally {
      setIsSeeding(false);
    }
  };

  const handleSeedLocations = async () => {
    setIsSeeding(true);
    try {
      await seedSampleLocations();
      toast.success('Locations seeded successfully!');
    } catch (error) {
      console.error('Seeding error:', error);
      toast.error('Error seeding locations');
    } finally {
      setIsSeeding(false);
    }
  };

  const handleSeedCityServices = async () => {
    setIsSeeding(true);
    try {
      await seedCityServices();
      toast.success('City services seeded successfully!');
    } catch (error) {
      console.error('Seeding error:', error);
      toast.error('Error seeding city services');
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Database Seeder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={handleSeedAll} 
            disabled={isSeeding}
            className="w-full"
          >
            {isSeeding ? 'Seeding...' : 'Seed All Data'}
          </Button>
          <Button 
            onClick={handleSeedLocations} 
            disabled={isSeeding}
            variant="outline"
            className="w-full"
          >
            Seed Locations
          </Button>
          <Button 
            onClick={handleSeedServices} 
            disabled={isSeeding}
            variant="outline"
            className="w-full"
          >
            Seed Services
          </Button>
          <Button 
            onClick={handleSeedCityServices} 
            disabled={isSeeding}
            variant="outline"
            className="w-full"
          >
            Seed City Services
          </Button>
        </div>
        <p className="text-sm text-gray-600">
          This will populate the database with sample services, locations, and city service configurations for testing.
        </p>
      </CardContent>
    </Card>
  );
};

export default DataSeeder;
