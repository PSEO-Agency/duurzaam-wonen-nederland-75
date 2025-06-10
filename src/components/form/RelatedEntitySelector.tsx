
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, GripVertical } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Simplified base type
interface RelatedEntity {
  id: string;
  sort_order?: number;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
  // Entity-specific fields
  question?: string;      // FAQ
  answer?: string;        // FAQ
  category?: string;      // FAQ
  title?: string;         // Project
  description?: string;   // Project
  image_url?: string;     // Project
  location?: string;      // Project
  project_type?: string;  // Project
  name?: string;          // Region
  slug?: string;          // Region
}

interface RelatedEntitySelectorProps {
  label: string;
  entityType: 'faqs' | 'projects' | 'regions';
  productId?: string;
  selectedItems: RelatedEntity[];
  onSelectionChange: (items: RelatedEntity[]) => void;
}

const RelatedEntitySelector: React.FC<RelatedEntitySelectorProps> = ({
  label,
  entityType,
  productId,
  selectedItems,
  onSelectionChange
}) => {
  const [availableItems, setAvailableItems] = useState<RelatedEntity[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadAvailableItems();
  }, [entityType]);

  const loadAvailableItems = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from(entityType)
        .select('*')
        .eq('is_active', true)
        .order('sort_order');

      if (error) throw error;
      setAvailableItems(data || []);
    } catch (error) {
      console.error(`Error loading ${entityType}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const getItemLabel = (item: RelatedEntity): string => {
    switch (entityType) {
      case 'faqs':
        return item.question || 'Unknown FAQ';
      case 'projects':
        return item.title || 'Unknown Project';
      case 'regions':
        return item.name || 'Unknown Region';
      default:
        return 'Unknown item';
    }
  };

  const handleItemToggle = (item: RelatedEntity, checked: boolean) => {
    if (checked) {
      const newItem: RelatedEntity = {
        id: item.id,
        sort_order: selectedItems.length,
        is_active: item.is_active,
        created_at: item.created_at,
        updated_at: item.updated_at,
        question: item.question,
        answer: item.answer,
        category: item.category,
        title: item.title,
        description: item.description,
        image_url: item.image_url,
        location: item.location,
        project_type: item.project_type,
        name: item.name,
        slug: item.slug
      };
      
      const newItems: RelatedEntity[] = [...selectedItems, newItem];
      onSelectionChange(newItems);
    } else {
      const filteredItems = selectedItems.filter(selected => selected.id !== item.id);
      onSelectionChange(filteredItems);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    const filteredItems = selectedItems.filter(item => item.id !== itemId);
    onSelectionChange(filteredItems);
  };

  const handleSortOrderChange = (itemId: string, sortOrder: number) => {
    const updatedItems = selectedItems.map(item =>
      item.id === itemId ? { ...item, sort_order: sortOrder } : item
    );
    onSelectionChange(updatedItems);
  };

  const isSelected = (itemId: string): boolean => {
    return selectedItems.some(item => item.id === itemId);
  };

  return (
    <div className="space-y-4">
      <Label className="text-lg font-semibold">{label}</Label>
      
      {/* Selected Items */}
      {selectedItems.length > 0 && (
        <div className="space-y-2">
          <Label className="text-sm text-gray-600">Geselecteerde items:</Label>
          {selectedItems
            .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
            .map((item) => (
            <Card key={item.id} className="p-3">
              <div className="flex items-center gap-3">
                <GripVertical size={16} className="text-gray-400" />
                <div className="flex-1">
                  <span className="font-medium">{getItemLabel(item)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-xs">Volgorde:</Label>
                  <Input
                    type="number"
                    value={item.sort_order || 0}
                    onChange={(e) => handleSortOrderChange(item.id, parseInt(e.target.value) || 0)}
                    className="w-20"
                    min={0}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Available Items */}
      <div className="space-y-2">
        <Label className="text-sm text-gray-600">Beschikbare items:</Label>
        <div className="max-h-64 overflow-y-auto border rounded p-3 space-y-2">
          {loading ? (
            <div className="text-center py-4 text-gray-500">Laden...</div>
          ) : availableItems.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              Geen items beschikbaar
            </div>
          ) : (
            availableItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`${entityType}-${item.id}`}
                  checked={isSelected(item.id)}
                  onCheckedChange={(checked) => handleItemToggle(item, checked as boolean)}
                />
                <Label 
                  htmlFor={`${entityType}-${item.id}`}
                  className="flex-1 cursor-pointer"
                >
                  {getItemLabel(item)}
                </Label>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedEntitySelector;
