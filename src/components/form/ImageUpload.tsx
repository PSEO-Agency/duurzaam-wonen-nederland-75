
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

  const ensureBucketExists = async (bucket: string) => {
    try {
      // Try to get bucket info to see if it exists
      const { data: buckets, error } = await supabase.storage.listBuckets();
      
      if (error) {
        console.error('Error listing buckets:', error);
        return false;
      }

      const bucketExists = buckets?.find(b => b.name === bucket);
      
      if (!bucketExists) {
        console.log(`Bucket ${bucket} does not exist, but we'll try to upload anyway`);
        // Note: In production, the bucket should be created via SQL migrations
        // This is just a fallback for development
      }
      
      return true;
    } catch (error) {
      console.error('Error checking bucket existence:', error);
      return false;
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      
      console.log('Starting file upload:', file.name, 'to bucket:', bucketName);
      
      // Ensure bucket exists
      await ensureBucketExists(bucketName);
      
      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      console.log('Uploading file:', fileName, 'to bucket:', bucketName);
      
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Upload error:', error);
        throw error;
      }

      console.log('Upload successful:', data);

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(fileName);

      console.log('Public URL:', urlData.publicUrl);
      
      onChange(urlData.publicUrl);
      
      toast({
        title: "Afbeelding geüpload",
        description: "De afbeelding is succesvol geüpload.",
      });
    } catch (error: any) {
      console.error('Error uploading file:', error);
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
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    console.log('Clearing image for field');
    onChange('');
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      {value && (
        <div className="relative inline-block">
          <img 
            src={value} 
            alt="Preview" 
            className="w-32 h-32 object-cover rounded border"
            onError={(e) => {
              console.error('Preview image failed to load:', value);
              e.currentTarget.style.display = 'none';
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
          onChange={(e) => onChange(e.target.value)}
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
    </div>
  );
};

export default ImageUpload;
