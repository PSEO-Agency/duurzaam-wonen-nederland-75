
import React, { useState } from 'react';
import { Check, Filter, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AnimatedSection from '../AnimatedSection';

interface FilterOption {
  id: string;
  label: string;
}

const ProductFilters: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    type: [],
    color: [],
    size: [],
    mounting: [],
    price: [],
    brand: []
  });

  // Filter categories and options
  const filterCategories = {
    type: [
      { id: 'prefab', label: 'Prefab' },
      { id: 'vast-kozijn', label: 'Vast kozijn' },
      { id: 'draairaam', label: 'Draairaam' },
      { id: 'draaikiepraam', label: 'Draaikiepraam' },
      { id: 'stolpstel-kozijn', label: 'Stolpstel kozijn' },
      { id: 'draaikiepraam-bovenlicht', label: 'Draaikiepraam met bovenlicht' },
      { id: 'kozijn-valraam', label: 'Kozijn met valraam' },
    ],
    color: [
      { id: 'wit', label: 'Witte Kunststof Kozijnen' },
      { id: 'zwart', label: 'Zwarte Kunststof Kozijnen' },
      { id: 'antraciet', label: 'Antraciet' },
      { id: 'houtlook', label: 'Houtlook' },
    ],
    size: [
      { id: '50x100', label: '50x100' },
      { id: '100x100', label: '100x100' },
      { id: '200x100', label: '200x100' },
      { id: '300x100', label: '300x100' },
      { id: '400x100', label: '400x100' },
    ],
    mounting: [
      { id: 'inclusief-montage', label: 'Inclusief montage' },
      { id: 'exclusief-montage', label: 'Exclusief montage' },
    ],
    price: [
      { id: 'goedkoop', label: 'Goedkope Kunststof Kozijnen' },
      { id: 'middensegment', label: 'Middensegment' },
      { id: 'premium', label: 'Premium' },
    ],
    brand: [
      { id: 'schuco', label: 'Schüco' },
      { id: 'veka', label: 'Veka' },
      { id: 'kommerling', label: 'Kömmerling' },
      { id: 'deceuninck', label: 'Deceuninck' },
    ]
  };

  const toggleFilter = (category: string, id: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[category].includes(id)) {
        newFilters[category] = newFilters[category].filter(item => item !== id);
      } else {
        newFilters[category] = [...newFilters[category], id];
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      type: [],
      color: [],
      size: [],
      mounting: [],
      price: [],
      brand: []
    });
    setSearchQuery('');
  };

  const countActiveFilters = () => {
    return Object.values(activeFilters).reduce((total, filters) => total + filters.length, 0);
  };

  const renderFilterSection = (title: string, category: string, options: FilterOption[]) => (
    <div className="mb-6">
      <h3 className="font-medium mb-3">{title}</h3>
      <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <Checkbox 
              id={`${category}-${option.id}`} 
              checked={activeFilters[category].includes(option.id)}
              onCheckedChange={() => toggleFilter(category, option.id)}
            />
            <Label 
              htmlFor={`${category}-${option.id}`}
              className="ml-2 text-sm cursor-pointer"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="soorten" className="py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-6">Kunststof Kozijnen Assortiment</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Filter ons ruime assortiment kunststof kozijnen op basis van type, kleur, afmeting, 
            montageoptie en prijssegment om het perfecte kozijn voor uw woning te vinden.
          </p>
        </AnimatedSection>

        <div className="flex items-center mb-8 gap-4">
          <div className="relative grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Zoek op type, kleur, afmeting..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2"
          >
            <Filter size={16} />
            Filters
            {countActiveFilters() > 0 && (
              <span className="ml-1 bg-brand-green text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {countActiveFilters()}
              </span>
            )}
          </Button>
          
          {countActiveFilters() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-sm flex items-center text-gray-500 hover:text-gray-700"
            >
              <X size={16} className="mr-1" />
              Wis filters
            </Button>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 bg-black/60 z-40 md:hidden">
              <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="icon" onClick={() => setMobileFiltersOpen(false)}>
                    <X size={18} />
                  </Button>
                </div>
                
                {renderFilterSection('Type Kozijn', 'type', filterCategories.type)}
                {renderFilterSection('Kleur', 'color', filterCategories.color)}
                {renderFilterSection('Afmeting', 'size', filterCategories.size)}
                {renderFilterSection('Montage', 'mounting', filterCategories.mounting)}
                {renderFilterSection('Prijssegment', 'price', filterCategories.price)}
                {renderFilterSection('Merk', 'brand', filterCategories.brand)}
                
                <Button 
                  className="w-full mt-4 bg-brand-green hover:bg-brand-green-dark"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Toon resultaten ({countActiveFilters() > 0 ? `${countActiveFilters()} filters` : 'alle producten'})
                </Button>
              </div>
            </div>
          )}
          
          {/* Desktop Filters */}
          <div className="hidden md:block w-1/4">
            <Card className="sticky top-32">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  {countActiveFilters() > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-sm flex items-center text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} className="mr-1" />
                      Wis alles
                    </Button>
                  )}
                </div>
                
                {renderFilterSection('Type Kozijn', 'type', filterCategories.type)}
                {renderFilterSection('Kleur', 'color', filterCategories.color)}
                {renderFilterSection('Afmeting', 'size', filterCategories.size)}
                {renderFilterSection('Montage', 'mounting', filterCategories.mounting)}
                {renderFilterSection('Prijssegment', 'price', filterCategories.price)}
                {renderFilterSection('Merk', 'brand', filterCategories.brand)}
              </CardContent>
            </Card>
          </div>
          
          {/* Products Display - Placeholder for demonstration */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">
                Toont alle producten {countActiveFilters() > 0 ? `met ${countActiveFilters()} filter${countActiveFilters() > 1 ? 's' : ''}` : ''}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sorteer op:</span>
                <select className="pl-3 pr-8 py-1 border rounded-md text-sm appearance-none bg-white">
                  <option>Populariteit</option>
                  <option>Prijs (laag-hoog)</option>
                  <option>Prijs (hoog-laag)</option>
                  <option>Nieuwste producten</option>
                </select>
              </div>
            </div>
            
            {/* Sample product grid - Placeholder products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-w-4 aspect-h-3">
                      <img 
                        src="/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png" 
                        alt="Kunststof kozijn voorbeeld" 
                        className="object-cover w-full h-48"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{`Kunststof Kozijn Type ${index + 1}`}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">(24 reviews)</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {['Wit', 'Antraciet', 'Houtlook'][index % 3]}
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {['100x100', '200x100', '300x100'][index % 3]}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg">€{199 + (index * 20)}</span>
                          <Button size="sm" className="bg-brand-green hover:bg-brand-green-dark">
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10">
                Meer producten laden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFilters;
