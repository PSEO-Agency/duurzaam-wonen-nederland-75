
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
  bucketName?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  label,
  value,
  onChange,
  placeholder,
  bucketName = 'project-images'
}) => {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log('=== IMAGE UPLOAD DEBUG START ===');
    console.log('File selected:', {
      name: file.name,
      size: file.size,
      type: file.type
    });
    console.log('Target bucket:', bucketName);

    try {
      setUploading(true);
      
      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      console.log('Generated filename:', fileName);
      
      // Upload file to Supabase storage
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      console.log('Upload response:', { data, error });

      if (error) {
        console.error('Upload error details:', error);
        throw error;
      }

      console.log('Upload successful, data path:', data.path);

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(fileName);

      console.log('Public URL data:', urlData);
      console.log('Generated URL:', urlData.publicUrl);
      
      // Validate the URL
      if (!validateUrl(urlData.publicUrl)) {
        throw new Error('Generated URL is invalid');
      }

      // Test if the URL is accessible
      try {
        const response = await fetch(urlData.publicUrl, { method: 'HEAD' });
        console.log('URL accessibility test:', {
          status: response.status,
          ok: response.ok,
          headers: Object.fromEntries(response.headers.entries())
        });
        
        if (!response.ok) {
          console.warn('URL might not be immediately accessible:', response.status);
        }
      } catch (fetchError) {
        console.warn('Could not test URL accessibility:', fetchError);
      }

      // Call onChange with the URL
      console.log('Calling onChange with URL:', urlData.publicUrl);
      onChange(urlData.publicUrl);
      
      console.log('=== IMAGE UPLOAD DEBUG END ===');

      toast({
        title: "Afbeelding geüpload",
        description: "De afbeelding is succesvol geüpload.",
      });
    } catch (error: any) {
      console.error('=== IMAGE UPLOAD ERROR ===');
      console.error('Error details:', error);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      toast({
        title: "Upload fout",
        description: `Er is een fout opgetreden bij het uploaden van de afbeelding: ${error.message}`,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
      // Reset the input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleUploadClick = () => {
    console.log('Upload button clicked');
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    console.log('Clearing image, current value:', value);
    onChange('');
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    console.log('Manual URL change:', newUrl);
    onChange(newUrl);
  };

  // Debug current value
  console.log('ImageUpload render - current value:', value);

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      {value && (
        <div className="relative inline-block">
          <img 
            src={value} 
            alt="Preview" 
            className="w-32 h-32 object-cover rounded border"
            onLoad={() => console.log('Image loaded successfully:', value)}
            onError={(e) => {
              console.error('Image failed to load:', value);
              console.error('Image error event:', e);
            }}
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="absolute -top-2 -right-2 rounded-full p-1 h-6 w-6"
            onClick={clearImage}
          >
            <X size={12} />
          </Button>
        </div>
      )}
      
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={handleUrlChange}
          placeholder={placeholder || "Afbeelding URL"}
          className="flex-1"
        />
        
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            disabled={uploading}
          />
          <Button
            type="button"
            variant="outline"
            disabled={uploading}
            onClick={handleUploadClick}
          >
            <Upload size={16} className="mr-2" />
            {uploading ? 'Uploading...' : 'Upload'}
          </Button>
        </div>
      </div>
      
      {/* Debug info in development */}
      {process.env.NODE_ENV === 'development' && value && (
        <div className="text-xs text-gray-500 mt-2">
          <strong>Debug - Current URL:</strong> {value}
          <br />
          <strong>Valid URL:</strong> {validateUrl(value) ? 'Yes' : 'No'}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
