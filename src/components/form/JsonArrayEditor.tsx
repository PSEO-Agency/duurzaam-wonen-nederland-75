import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface JsonArrayEditorProps {
  label: string;
  value: any[];
  onChange: (value: any[]) => void;
  placeholder?: string;
  itemType?: 'string' | 'object';
  objectFields?: { key: string; label: string; type: 'text' | 'textarea' }[];
}

const JsonArrayEditor: React.FC<JsonArrayEditorProps> = ({
  label,
  value,
  onChange,
  placeholder,
  itemType = 'string',
  objectFields = []
}) => {
  const [isJsonMode, setIsJsonMode] = useState(false);
  const [jsonText, setJsonText] = useState('');

  const addItem = () => {
    if (itemType === 'string') {
      onChange([...value, '']);
    } else {
      const newItem: any = {};
      objectFields.forEach(field => {
        newItem[field.key] = '';
      });
      onChange([...value, newItem]);
    }
  };

  const removeItem = (index: number) => {
    const newValue = value.filter((_, i) => i !== index);
    onChange(newValue);
  };

  const updateStringItem = (index: number, newValue: string) => {
    const updated = [...value];
    updated[index] = newValue;
    onChange(updated);
  };

  const updateObjectItem = (index: number, field: string, newValue: string) => {
    const updated = [...value];
    updated[index] = { ...updated[index], [field]: newValue };
    onChange(updated);
  };

  const toggleJsonMode = () => {
    if (!isJsonMode) {
      setJsonText(JSON.stringify(value, null, 2));
    } else {
      try {
        const parsed = JSON.parse(jsonText);
        onChange(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.warn('Invalid JSON, keeping current value');
      }
    }
    setIsJsonMode(!isJsonMode);
  };

  const handleJsonChange = (newJson: string) => {
    setJsonText(newJson);
    try {
      const parsed = JSON.parse(newJson);
      if (Array.isArray(parsed)) {
        onChange(parsed);
      }
    } catch (error) {
      // Keep invalid JSON in text area for user to fix
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={toggleJsonMode}
        >
          {isJsonMode ? 'Visual Editor' : 'JSON Editor'}
        </Button>
      </div>

      {isJsonMode ? (
        <Textarea
          value={jsonText}
          onChange={(e) => handleJsonChange(e.target.value)}
          placeholder={placeholder}
          rows={8}
          className="font-mono text-sm"
        />
      ) : (
        <div className="space-y-3">
          {value.map((item, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="flex-1">
                {itemType === 'string' ? (
                  <Input
                    value={item}
                    onChange={(e) => updateStringItem(index, e.target.value)}
                    placeholder={`Item ${index + 1}`}
                  />
                ) : (
                  <div className="space-y-2 border rounded p-3">
                    {objectFields.map((field) => (
                      <div key={field.key}>
                        <Label className="text-xs">{field.label}</Label>
                        {field.type === 'textarea' ? (
                          <Textarea
                            value={item[field.key] || ''}
                            onChange={(e) => updateObjectItem(index, field.key, e.target.value)}
                            placeholder={field.label}
                            rows={2}
                          />
                        ) : (
                          <Input
                            value={item[field.key] || ''}
                            onChange={(e) => updateObjectItem(index, field.key, e.target.value)}
                            placeholder={field.label}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
          
          <Button
            type="button"
            variant="outline"
            onClick={addItem}
            className="w-full"
          >
            <Plus size={16} className="mr-2" />
            Add Item
          </Button>
        </div>
      )}
    </div>
  );
};

export default JsonArrayEditor;
