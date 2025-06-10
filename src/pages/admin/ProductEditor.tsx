import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Save } from 'lucide-react';
import JsonArrayEditor from '@/components/form/JsonArrayEditor';
import ImageUpload from '@/components/form/ImageUpload';

const ProductEditor: React.FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    // Basic Information
    name: '',
    slug: '',
    description: '',
    template_type: 'service_page',
    is_active: true,
    sort_order: 0,
    
    // SEO Fields
    seo_title: '',
    seo_description: '',
    seo_canonical_url: '',
    
    // Hero Section
    hero_badge: '',
    hero_title: '',
    hero_description: '',
    hero_background_image: '',
    hero_primary_button_text: '',
    hero_primary_button_link: '',
    hero_secondary_button_text: '',
    hero_secondary_button_link: '',
    hero_guarantees: [] as any[],
    hero_certification_logos: [] as any[],
    
    // Introduction Section
    introduction_title: '',
    introduction_content: [] as any[],
    introduction_quick_links: [] as any[],
    introduction_cta_text: '',
    introduction_cta_link: '',
    
    // What Are Section
    what_are_title: '',
    what_are_content: [] as any[],
    what_are_video_url: '',
    what_are_video_title: '',
    
    // Benefits Section
    benefits_title: '',
    benefits_description: '',
    benefits_main_content: [] as any[],
    benefits_stats: [] as any[],
    benefits_cta_text: '',
    benefits_cta_link: '',
    
    // Options Section
    options_title: '',
    options_description: '',
    options_categories: [] as any[],
    
    // Services Section
    services_title: '',
    services_description: '',
    services_items: [] as any[],
    
    // Information Section
    information_title: '',
    information_image: '',
    information_image_alt: '',
    information_tabs: [] as any[],
    information_did_you_know: [] as any[],
    
    // FAQ Section
    faq_title: '',
    faq_description: '',
    
    // Settings
    show_regions: true
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
          template_type: data.template_type || 'service_page',
          is_active: data.is_active ?? true,
          sort_order: data.sort_order || 0,
          seo_title: data.seo_title || '',
          seo_description: data.seo_description || '',
          seo_canonical_url: data.seo_canonical_url || '',
          hero_badge: data.hero_badge || '',
          hero_title: data.hero_title || '',
          hero_description: data.hero_description || '',
          hero_background_image: data.hero_background_image || '',
          hero_primary_button_text: data.hero_primary_button_text || '',
          hero_primary_button_link: data.hero_primary_button_link || '',
          hero_secondary_button_text: data.hero_secondary_button_text || '',
          hero_secondary_button_link: data.hero_secondary_button_link || '',
          hero_guarantees: Array.isArray(data.hero_guarantees) ? data.hero_guarantees : [],
          hero_certification_logos: Array.isArray(data.hero_certification_logos) ? data.hero_certification_logos : [],
          introduction_title: data.introduction_title || '',
          introduction_content: Array.isArray(data.introduction_content) ? data.introduction_content : [],
          introduction_quick_links: Array.isArray(data.introduction_quick_links) ? data.introduction_quick_links : [],
          introduction_cta_text: data.introduction_cta_text || '',
          introduction_cta_link: data.introduction_cta_link || '',
          what_are_title: data.what_are_title || '',
          what_are_content: Array.isArray(data.what_are_content) ? data.what_are_content : [],
          what_are_video_url: data.what_are_video_url || '',
          what_are_video_title: data.what_are_video_title || '',
          benefits_title: data.benefits_title || '',
          benefits_description: data.benefits_description || '',
          benefits_main_content: Array.isArray(data.benefits_main_content) ? data.benefits_main_content : [],
          benefits_stats: Array.isArray(data.benefits_stats) ? data.benefits_stats : [],
          benefits_cta_text: data.benefits_cta_text || '',
          benefits_cta_link: data.benefits_cta_link || '',
          options_title: data.options_title || '',
          options_description: data.options_description || '',
          options_categories: Array.isArray(data.options_categories) ? data.options_categories : [],
          services_title: data.services_title || '',
          services_description: data.services_description || '',
          services_items: Array.isArray(data.services_items) ? data.services_items : [],
          information_title: data.information_title || '',
          information_image: data.information_image || '',
          information_image_alt: data.information_image_alt || '',
          information_tabs: Array.isArray(data.information_tabs) ? data.information_tabs : [],
          information_did_you_know: Array.isArray(data.information_did_you_know) ? data.information_did_you_know : [],
          faq_title: data.faq_title || '',
          faq_description: data.faq_description || '',
          show_regions: data.show_regions ?? true
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

      const productData = {
        name: product.name,
        slug: product.slug,
        description: product.description,
        template_type: product.template_type,
        is_active: product.is_active,
        sort_order: product.sort_order,
        seo_title: product.seo_title,
        seo_description: product.seo_description,
        seo_canonical_url: product.seo_canonical_url,
        hero_badge: product.hero_badge,
        hero_title: product.hero_title,
        hero_description: product.hero_description,
        hero_background_image: product.hero_background_image,
        hero_primary_button_text: product.hero_primary_button_text,
        hero_primary_button_link: product.hero_primary_button_link,
        hero_secondary_button_text: product.hero_secondary_button_text,
        hero_secondary_button_link: product.hero_secondary_button_link,
        hero_guarantees: product.hero_guarantees,
        hero_certification_logos: product.hero_certification_logos,
        introduction_title: product.introduction_title,
        introduction_content: product.introduction_content,
        introduction_quick_links: product.introduction_quick_links,
        introduction_cta_text: product.introduction_cta_text,
        introduction_cta_link: product.introduction_cta_link,
        what_are_title: product.what_are_title,
        what_are_content: product.what_are_content,
        what_are_video_url: product.what_are_video_url,
        what_are_video_title: product.what_are_video_title,
        benefits_title: product.benefits_title,
        benefits_description: product.benefits_description,
        benefits_main_content: product.benefits_main_content,
        benefits_stats: product.benefits_stats,
        benefits_cta_text: product.benefits_cta_text,
        benefits_cta_link: product.benefits_cta_link,
        options_title: product.options_title,
        options_description: product.options_description,
        options_categories: product.options_categories,
        services_title: product.services_title,
        services_description: product.services_description,
        services_items: product.services_items,
        information_title: product.information_title,
        information_image: product.information_image,
        information_image_alt: product.information_image_alt,
        information_tabs: product.information_tabs,
        information_did_you_know: product.information_did_you_know,
        faq_title: product.faq_title,
        faq_description: product.faq_description,
        show_regions: product.show_regions,
        updated_at: new Date().toISOString()
      };

      if (isEditing) {
        const { error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', productId);

        if (error) throw error;

        toast({
          title: "Product bijgewerkt",
          description: "Het product is succesvol bijgewerkt.",
        });
      } else {
        const { error } = await supabase
          .from('products')
          .insert(productData);

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

  const handleInputChange = (field: string, value: string | boolean | number | any[]) => {
    setProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleJsonFieldChange = (field: string, value: string) => {
    try {
      const parsed = value ? JSON.parse(value) : [];
      handleInputChange(field, parsed);
    } catch (error) {
      // Keep the string value for now so user can fix it
      console.warn('Invalid JSON in field:', field, error);
    }
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
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="basic">Basis</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="hero">Hero</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="benefits">Voordelen</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="settings">Instellingen</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
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
                  <Label htmlFor="template_type">Template Type</Label>
                  <Input
                    id="template_type"
                    value={product.template_type}
                    onChange={(e) => handleInputChange('template_type', e.target.value)}
                    placeholder="service_page"
                  />
                </div>
                <div>
                  <Label htmlFor="sort_order">Sorteervolgorde</Label>
                  <Input
                    id="sort_order"
                    type="number"
                    value={product.sort_order}
                    onChange={(e) => handleInputChange('sort_order', parseInt(e.target.value) || 0)}
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_active"
                  checked={product.is_active}
                  onCheckedChange={(checked) => handleInputChange('is_active', checked)}
                />
                <Label htmlFor="is_active">Actief</Label>
              </div>
            </TabsContent>

            <TabsContent value="seo" className="space-y-6">
              <div>
                <Label htmlFor="seo_title">SEO Titel</Label>
                <Input
                  id="seo_title"
                  value={product.seo_title}
                  onChange={(e) => handleInputChange('seo_title', e.target.value)}
                  placeholder="SEO titel voor zoekmachines"
                />
              </div>

              <div>
                <Label htmlFor="seo_description">SEO Beschrijving</Label>
                <Textarea
                  id="seo_description"
                  value={product.seo_description}
                  onChange={(e) => handleInputChange('seo_description', e.target.value)}
                  placeholder="SEO beschrijving voor zoekmachines"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="seo_canonical_url">Canonical URL</Label>
                <Input
                  id="seo_canonical_url"
                  value={product.seo_canonical_url}
                  onChange={(e) => handleInputChange('seo_canonical_url', e.target.value)}
                  placeholder="https://duurzaamwonen.info/product-slug"
                />
              </div>
            </TabsContent>

            <TabsContent value="hero" className="space-y-6">
              <div>
                <Label htmlFor="hero_badge">Hero Badge</Label>
                <Input
                  id="hero_badge"
                  value={product.hero_badge}
                  onChange={(e) => handleInputChange('hero_badge', e.target.value)}
                  placeholder="Specialist in..."
                />
              </div>

              <div>
                <Label htmlFor="hero_title">Hero Titel</Label>
                <Input
                  id="hero_title"
                  value={product.hero_title}
                  onChange={(e) => handleInputChange('hero_title', e.target.value)}
                  placeholder="Hoofdtitel voor hero sectie"
                />
              </div>

              <div>
                <Label htmlFor="hero_description">Hero Beschrijving</Label>
                <Textarea
                  id="hero_description"
                  value={product.hero_description}
                  onChange={(e) => handleInputChange('hero_description', e.target.value)}
                  placeholder="Beschrijving voor hero sectie"
                  rows={3}
                />
              </div>

              <ImageUpload
                label="Hero Achtergrond Afbeelding"
                value={product.hero_background_image}
                onChange={(url) => handleInputChange('hero_background_image', url)}
                placeholder="/lovable-uploads/image.png"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="hero_primary_button_text">Primaire Knop Tekst</Label>
                  <Input
                    id="hero_primary_button_text"
                    value={product.hero_primary_button_text}
                    onChange={(e) => handleInputChange('hero_primary_button_text', e.target.value)}
                    placeholder="Offerte aanvragen"
                  />
                </div>
                <div>
                  <Label htmlFor="hero_primary_button_link">Primaire Knop Link</Label>
                  <Input
                    id="hero_primary_button_link"
                    value={product.hero_primary_button_link}
                    onChange={(e) => handleInputChange('hero_primary_button_link', e.target.value)}
                    placeholder="/offerte"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="hero_secondary_button_text">Secundaire Knop Tekst</Label>
                  <Input
                    id="hero_secondary_button_text"
                    value={product.hero_secondary_button_text}
                    onChange={(e) => handleInputChange('hero_secondary_button_text', e.target.value)}
                    placeholder="Meer informatie"
                  />
                </div>
                <div>
                  <Label htmlFor="hero_secondary_button_link">Secundaire Knop Link</Label>
                  <Input
                    id="hero_secondary_button_link"
                    value={product.hero_secondary_button_link}
                    onChange={(e) => handleInputChange('hero_secondary_button_link', e.target.value)}
                    placeholder="/meer-info"
                  />
                </div>
              </div>

              <JsonArrayEditor
                label="Hero Garanties"
                value={product.hero_guarantees}
                onChange={(value) => handleInputChange('hero_guarantees', value)}
                itemType="string"
                placeholder="Voeg garanties toe..."
              />

              <JsonArrayEditor
                label="Hero Certificering Logo's"
                value={product.hero_certification_logos}
                onChange={(value) => handleInputChange('hero_certification_logos', value)}
                itemType="object"
                objectFields={[
                  { key: 'src', label: 'Logo URL', type: 'text' },
                  { key: 'alt', label: 'Alt tekst', type: 'text' },
                  { key: 'title', label: 'Titel', type: 'text' }
                ]}
              />
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <div>
                <Label htmlFor="introduction_title">Introductie Titel</Label>
                <Input
                  id="introduction_title"
                  value={product.introduction_title}
                  onChange={(e) => handleInputChange('introduction_title', e.target.value)}
                  placeholder="Introductie sectie titel"
                />
              </div>

              <JsonArrayEditor
                label="Introductie Content"
                value={product.introduction_content}
                onChange={(value) => handleInputChange('introduction_content', value)}
                itemType="string"
                placeholder="Voeg paragrafen toe..."
              />

              <JsonArrayEditor
                label="Introductie Quick Links"
                value={product.introduction_quick_links}
                onChange={(value) => handleInputChange('introduction_quick_links', value)}
                itemType="object"
                objectFields={[
                  { key: 'href', label: 'Link URL', type: 'text' },
                  { key: 'text', label: 'Link tekst', type: 'text' }
                ]}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="introduction_cta_text">Introductie CTA Tekst</Label>
                  <Input
                    id="introduction_cta_text"
                    value={product.introduction_cta_text}
                    onChange={(e) => handleInputChange('introduction_cta_text', e.target.value)}
                    placeholder="Call-to-action tekst"
                  />
                </div>
                <div>
                  <Label htmlFor="introduction_cta_link">Introductie CTA Link</Label>
                  <Input
                    id="introduction_cta_link"
                    value={product.introduction_cta_link}
                    onChange={(e) => handleInputChange('introduction_cta_link', e.target.value)}
                    placeholder="/offerte"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="what_are_title">"Wat zijn" Titel</Label>
                <Input
                  id="what_are_title"
                  value={product.what_are_title}
                  onChange={(e) => handleInputChange('what_are_title', e.target.value)}
                  placeholder="Wat zijn [Product]?"
                />
              </div>

              <JsonArrayEditor
                label='"Wat zijn" Content'
                value={product.what_are_content}
                onChange={(value) => handleInputChange('what_are_content', value)}
                itemType="string"
                placeholder="Voeg uitleg paragrafen toe..."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="what_are_video_url">"Wat zijn" Video URL</Label>
                  <Input
                    id="what_are_video_url"
                    value={product.what_are_video_url}
                    onChange={(e) => handleInputChange('what_are_video_url', e.target.value)}
                    placeholder="https://www.youtube.com/embed/..."
                  />
                </div>
                <div>
                  <Label htmlFor="what_are_video_title">"Wat zijn" Video Titel</Label>
                  <Input
                    id="what_are_video_title"
                    value={product.what_are_video_title}
                    onChange={(e) => handleInputChange('what_are_video_title', e.target.value)}
                    placeholder="Video titel"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <div>
                <Label htmlFor="benefits_title">Voordelen Titel</Label>
                <Input
                  id="benefits_title"
                  value={product.benefits_title}
                  onChange={(e) => handleInputChange('benefits_title', e.target.value)}
                  placeholder="Voordelen van [Product]"
                />
              </div>

              <div>
                <Label htmlFor="benefits_description">Voordelen Beschrijving</Label>
                <Textarea
                  id="benefits_description"
                  value={product.benefits_description}
                  onChange={(e) => handleInputChange('benefits_description', e.target.value)}
                  placeholder="Beschrijving van de voordelen"
                  rows={3}
                />
              </div>

              <JsonArrayEditor
                label="Voordelen Hoofdcontent"
                value={product.benefits_main_content}
                onChange={(value) => handleInputChange('benefits_main_content', value)}
                itemType="string"
                placeholder="Voeg voordelen uitleg toe..."
              />

              <JsonArrayEditor
                label="Voordelen Statistieken"
                value={product.benefits_stats}
                onChange={(value) => handleInputChange('benefits_stats', value)}
                itemType="object"
                objectFields={[
                  { key: 'value', label: 'Waarde', type: 'text' },
                  { key: 'label', label: 'Label', type: 'text' }
                ]}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="benefits_cta_text">Voordelen CTA Tekst</Label>
                  <Input
                    id="benefits_cta_text"
                    value={product.benefits_cta_text}
                    onChange={(e) => handleInputChange('benefits_cta_text', e.target.value)}
                    placeholder="CTA tekst"
                  />
                </div>
                <div>
                  <Label htmlFor="benefits_cta_link">Voordelen CTA Link</Label>
                  <Input
                    id="benefits_cta_link"
                    value={product.benefits_cta_link}
                    onChange={(e) => handleInputChange('benefits_cta_link', e.target.value)}
                    placeholder="/offerte"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="options_title">Opties Titel</Label>
                <Input
                  id="options_title"
                  value={product.options_title}
                  onChange={(e) => handleInputChange('options_title', e.target.value)}
                  placeholder="Verschillende opties"
                />
              </div>

              <div>
                <Label htmlFor="options_description">Opties Beschrijving</Label>
                <Textarea
                  id="options_description"
                  value={product.options_description}
                  onChange={(e) => handleInputChange('options_description', e.target.value)}
                  placeholder="Beschrijving van de beschikbare opties"
                  rows={2}
                />
              </div>

              <JsonArrayEditor
                label="Opties Categorieën"
                value={product.options_categories}
                onChange={(value) => handleInputChange('options_categories', value)}
                itemType="object"
                objectFields={[
                  { key: 'title', label: 'Categorie titel', type: 'text' },
                  { key: 'items', label: 'Items (JSON array)', type: 'textarea' }
                ]}
              />
            </TabsContent>

            <TabsContent value="services" className="space-y-6">
              <div>
                <Label htmlFor="services_title">Services Titel</Label>
                <Input
                  id="services_title"
                  value={product.services_title}
                  onChange={(e) => handleInputChange('services_title', e.target.value)}
                  placeholder="Onze oplossingen"
                />
              </div>

              <div>
                <Label htmlFor="services_description">Services Beschrijving</Label>
                <Textarea
                  id="services_description"
                  value={product.services_description}
                  onChange={(e) => handleInputChange('services_description', e.target.value)}
                  placeholder="Beschrijving van onze services"
                  rows={2}
                />
              </div>

              <JsonArrayEditor
                label="Services Items"
                value={product.services_items}
                onChange={(value) => handleInputChange('services_items', value)}
                itemType="object"
                objectFields={[
                  { key: 'title', label: 'Service titel', type: 'text' },
                  { key: 'description', label: 'Beschrijving', type: 'textarea' },
                  { key: 'image', label: 'Afbeelding URL', type: 'text' },
                  { key: 'features', label: 'Features (JSON array)', type: 'textarea' },
                  { key: 'linkText', label: 'Link tekst', type: 'text' },
                  { key: 'linkUrl', label: 'Link URL', type: 'text' }
                ]}
              />

              <div>
                <Label htmlFor="information_title">Informatie Titel</Label>
                <Input
                  id="information_title"
                  value={product.information_title}
                  onChange={(e) => handleInputChange('information_title', e.target.value)}
                  placeholder="Meer informatie"
                />
              </div>

              <ImageUpload
                label="Informatie Afbeelding"
                value={product.information_image}
                onChange={(url) => handleInputChange('information_image', url)}
                placeholder="/lovable-uploads/image.png"
              />

              <div>
                <Label htmlFor="information_image_alt">Informatie Afbeelding Alt Tekst</Label>
                <Input
                  id="information_image_alt"
                  value={product.information_image_alt}
                  onChange={(e) => handleInputChange('information_image_alt', e.target.value)}
                  placeholder="Alt tekst voor afbeelding"
                />
              </div>

              <JsonArrayEditor
                label="Informatie Tabs"
                value={product.information_tabs}
                onChange={(value) => handleInputChange('information_tabs', value)}
                itemType="object"
                objectFields={[
                  { key: 'title', label: 'Tab titel', type: 'text' },
                  { key: 'content', label: 'Content', type: 'textarea' }
                ]}
              />

              <JsonArrayEditor
                label="Wist je dat"
                value={product.information_did_you_know}
                onChange={(value) => handleInputChange('information_did_you_know', value)}
                itemType="object"
                objectFields={[
                  { key: 'title', label: 'Titel', type: 'text' },
                  { key: 'content', label: 'Content', type: 'textarea' }
                ]}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="faq_title">FAQ Titel</Label>
                  <Input
                    id="faq_title"
                    value={product.faq_title}
                    onChange={(e) => handleInputChange('faq_title', e.target.value)}
                    placeholder="Veelgestelde vragen"
                  />
                </div>
                <div>
                  <Label htmlFor="faq_description">FAQ Beschrijving</Label>
                  <Input
                    id="faq_description"
                    value={product.faq_description}
                    onChange={(e) => handleInputChange('faq_description', e.target.value)}
                    placeholder="Antwoorden op veelgestelde vragen"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="show_regions"
                  checked={product.show_regions}
                  onCheckedChange={(checked) => handleInputChange('show_regions', checked)}
                />
                <Label htmlFor="show_regions">Toon Regio's Sectie</Label>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex gap-4 mt-8">
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
