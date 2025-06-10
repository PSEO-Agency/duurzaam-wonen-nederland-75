
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, GripVertical } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Simple interface without optional chaining complexity
interface RelatedEntity {
  id: string;
  sort_order: number;
  [key: string]: any; // Allow any additional properties
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
  const [availableItems, setAvailableItems] = useState<any[]>([]);
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

  const getItemLabel = (item: any): string => {
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

  const handleItemToggle = (item: any, checked: boolean) => {
    if (checked) {
      const newItem: RelatedEntity = {
        id: item.id,
        sort_order: selectedItems.length,
        ...item
      };
      
      onSelectionChange([...selectedItems, newItem]);
    } else {
      onSelectionChange(selectedItems.filter(selected => selected.id !== item.id));
    }
  };

  const handleRemoveItem = (itemId: string) => {
    onSelectionChange(selectedItems.filter(item => item.id !== itemId));
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
            .sort((a, b) => a.sort_order - b.sort_order)
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
                    value={item.sort_order}
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
