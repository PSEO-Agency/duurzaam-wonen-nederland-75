
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Search, Check, X, ExternalLink, Copy } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useProducts } from '@/hooks/useProducts';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Products: React.FC = () => {
  const { data: products, isLoading, refetch } = useProducts();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products?.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  ) || [];

  // Handle create new product
  const handleAddProduct = () => {
    navigate('/admin/products/create');
  };

  // Handle duplicate product
  const handleDuplicateProduct = async (product: any) => {
    try {
      const { error } = await supabase
        .from('products')
        .insert({
          ...product,
          id: undefined, // Let database generate new ID
          name: `${product.name} (Copy)`,
          slug: `${product.slug}-copy-${Date.now()}`,
          created_at: undefined,
          updated_at: undefined
        });

      if (error) throw error;

      toast({
        title: "Product gedupliceerd",
        description: "Het product is succesvol gedupliceerd.",
      });

      refetch();
    } catch (error) {
      console.error('Error duplicating product:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het dupliceren van het product.",
        variant: "destructive"
      });
    }
  };

  // Function to open the product page in a new tab
  const handlePreviewProduct = (slug: string) => {
    window.open(`/${slug}`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Products</h1>
            <p className="text-gray-500">Manage your product pages and their content.</p>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="space-y-2">
                {Array(5).fill(0).map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-gray-500">Manage your product pages and their content.</p>
        </div>
        
        <Button className="bg-brand-green hover:bg-brand-green-dark" onClick={handleAddProduct}>
          <Plus size={18} className="mr-2" />
          Add Product
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search products..." 
                className="pl-10"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map(product => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="text-sm font-mono">/{product.slug}</TableCell>
                  <TableCell>{product.template_type || 'service_page'}</TableCell>
                  <TableCell>
                    {product.is_active ? (
                      <span className="inline-flex items-center">
                        <Check size={16} className="text-green-500 mr-1" />
                        Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <X size={16} className="text-red-500 mr-1" />
                        No
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{new Date(product.updated_at).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handlePreviewProduct(product.slug)}
                        className="text-gray-500 hover:text-brand-green"
                      >
                        <ExternalLink size={16} />
                        <span className="sr-only">Preview</span>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDuplicateProduct(product)}
                        className="text-gray-500 hover:text-brand-green"
                      >
                        <Copy size={16} />
                        <span className="sr-only">Duplicate</span>
                      </Button>
                      <Link 
                        to={`/admin/products/edit/${product.id}`}
                        className="text-brand-green hover:text-brand-green-dark inline-flex items-center"
                      >
                        Edit
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Products;
