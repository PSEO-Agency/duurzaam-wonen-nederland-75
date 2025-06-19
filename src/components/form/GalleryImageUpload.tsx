
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X, Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface GalleryImageUploadProps {
  label: string;
  images: string[];
  onChange: (images: string[]) => void;
  bucketName?: string;
}

const GalleryImageUpload: React.FC<GalleryImageUploadProps> = ({
  label,
  images,
  onChange,
  bucketName = 'project-images'
}) => {
  const [uploading, setUploading] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState('');
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `gallery-${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(fileName);
      
      onChange([...images, urlData.publicUrl]);
      
      toast({
        title: "Afbeelding toegevoegd",
        description: "De afbeelding is succesvol toegevoegd aan de galerij.",
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Upload fout",
        description: `Er is een fout opgetreden: ${error.message}`,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const addImageUrl = () => {
    if (newImageUrl.trim()) {
      onChange([...images, newImageUrl.trim()]);
      setNewImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <Label>{label}</Label>
      
      {/* Display current images */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="relative group">
              <img
                src={imageUrl}
                alt={`Gallery ${index + 1}`}
                className="w-full h-32 object-cover rounded border"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute -top-2 -right-2 rounded-full p-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeImage(index)}
              >
                <X size={12} />
              </Button>
            </div>
          ))}
        </div>
      )}
      
      {/* Add new image via upload */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
        <div className="text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="gallery-file-upload"
            disabled={uploading}
          />
          <label
            htmlFor="gallery-file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">
              {uploading ? 'Uploading...' : 'Klik om een afbeelding te uploaden'}
            </span>
          </label>
        </div>
      </div>
      
      {/* Add image via URL */}
      <div className="flex gap-2">
        <Input
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          placeholder="Of voeg een afbeelding URL toe"
          className="flex-1"
        />
        <Button
          type="button"
          variant="outline"
          onClick={addImageUrl}
          disabled={!newImageUrl.trim()}
        >
          <Plus size={16} />
        </Button>
      </div>
    </div>
  );
};

export default GalleryImageUpload;
