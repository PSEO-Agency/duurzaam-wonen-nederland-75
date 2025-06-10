
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Save } from 'lucide-react';

const ProductEditor: React.FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    description: '',
    seo_title: '',
    seo_description: '',
    hero_title: '',
    hero_description: '',
    is_active: true
  });

  const isEditing = !!productId;

  useEffect(() => {
    if (isEditing) {
      loadProduct();
    }
  }, [productId]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();

      if (error) throw error;

      if (data) {
        setProduct({
          name: data.name || '',
          slug: data.slug || '',
          description: data.description || '',
          seo_title: data.seo_title || '',
          seo_description: data.seo_description || '',
          hero_title: data.hero_title || '',
          hero_description: data.hero_description || '',
          is_active: data.is_active ?? true
        });
      }
    } catch (error) {
      console.error('Error loading product:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het laden van het product.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      if (isEditing) {
        const { error } = await supabase
          .from('products')
          .update({
            name: product.name,
            slug: product.slug,
            description: product.description,
            seo_title: product.seo_title,
            seo_description: product.seo_description,
            hero_title: product.hero_title,
            hero_description: product.hero_description,
            is_active: product.is_active,
            updated_at: new Date().toISOString()
          })
          .eq('id', productId);

        if (error) throw error;

        toast({
          title: "Product bijgewerkt",
          description: "Het product is succesvol bijgewerkt.",
        });
      } else {
        const { error } = await supabase
          .from('products')
          .insert({
            name: product.name,
            slug: product.slug,
            description: product.description,
            seo_title: product.seo_title,
            seo_description: product.seo_description,
            hero_title: product.hero_title,
            hero_description: product.hero_description,
            is_active: product.is_active
          });

        if (error) throw error;

        toast({
          title: "Product aangemaakt",
          description: "Het product is succesvol aangemaakt.",
        });
      }

      navigate('/admin/products');
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het opslaan van het product.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (loading && isEditing) {
    return (
      <div className="space-y-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/admin/products')}
          className="p-2"
        >
          <ArrowLeft size={20} />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">
            {isEditing ? 'Product bewerken' : 'Nieuw product'}
          </h1>
          <p className="text-gray-500">
            {isEditing ? 'Bewerk de productinformatie' : 'Maak een nieuw product aan'}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Productinformatie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Naam*</Label>
              <Input
                id="name"
                value={product.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Product naam"
              />
            </div>
            <div>
              <Label htmlFor="slug">Slug*</Label>
              <Input
                id="slug"
                value={product.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                placeholder="product-slug"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Beschrijving</Label>
            <Textarea
              id="description"
              value={product.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Product beschrijving"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="seo_title">SEO Titel</Label>
              <Input
                id="seo_title"
                value={product.seo_title}
                onChange={(e) => handleInputChange('seo_title', e.target.value)}
                placeholder="SEO titel"
              />
            </div>
            <div>
              <Label htmlFor="hero_title">Hero Titel</Label>
              <Input
                id="hero_title"
                value={product.hero_title}
                onChange={(e) => handleInputChange('hero_title', e.target.value)}
                placeholder="Hero titel"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="seo_description">SEO Beschrijving</Label>
            <Textarea
              id="seo_description"
              value={product.seo_description}
              onChange={(e) => handleInputChange('seo_description', e.target.value)}
              placeholder="SEO beschrijving"
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="hero_description">Hero Beschrijving</Label>
            <Textarea
              id="hero_description"
              value={product.hero_description}
              onChange={(e) => handleInputChange('hero_description', e.target.value)}
              placeholder="Hero beschrijving"
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_active"
              checked={product.is_active}
              onCheckedChange={(checked) => handleInputChange('is_active', checked)}
            />
            <Label htmlFor="is_active">Actief</Label>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleSave} disabled={loading} className="bg-brand-green hover:bg-brand-green-dark">
              <Save size={18} className="mr-2" />
              {loading ? 'Opslaan...' : 'Opslaan'}
            </Button>
            <Button variant="outline" onClick={() => navigate('/admin/products')}>
              Annuleren
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductEditor;
