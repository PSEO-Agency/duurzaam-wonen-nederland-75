
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { useFaqs } from '@/hooks/useFaqs';

const Faqs: React.FC = () => {
  const { data: faqs, refetch } = useFaqs();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [editingFaq, setEditingFaq] = useState<any>(null);
  const [newFaq, setNewFaq] = useState({
    question: '',
    answer: '',
    category: '',
    sort_order: 0,
    is_active: true
  });

  const handleSaveFaq = async (faq: any, isNew: boolean = false) => {
    try {
      setLoading(true);
      
      if (isNew) {
        const { error } = await supabase
          .from('faqs')
          .insert(faq);

        if (error) throw error;

        toast({
          title: "FAQ aangemaakt",
          description: "De FAQ is succesvol aangemaakt.",
        });

        setNewFaq({
          question: '',
          answer: '',
          category: '',
          sort_order: 0,
          is_active: true
        });
      } else {
        const { error } = await supabase
          .from('faqs')
          .update(faq)
          .eq('id', faq.id);

        if (error) throw error;

        toast({
          title: "FAQ bijgewerkt",
          description: "De FAQ is succesvol bijgewerkt.",
        });

        setEditingFaq(null);
      }

      refetch();
    } catch (error) {
      console.error('Error saving FAQ:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het opslaan van de FAQ.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFaq = async (id: string) => {
    if (!confirm('Weet je zeker dat je deze FAQ wilt verwijderen?')) return;

    try {
      setLoading(true);
      const { error } = await supabase
        .from('faqs')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "FAQ verwijderd",
        description: "De FAQ is succesvol verwijderd.",
      });

      refetch();
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      toast({
        title: "Fout",
        description: "Er is een fout opgetreden bij het verwijderen van de FAQ.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">FAQs</h1>
          <p className="text-gray-500">Beheer veelgestelde vragen</p>
        </div>
      </div>

      {/* New FAQ Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus size={20} />
            Nieuwe FAQ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="new-question">Vraag*</Label>
            <Input
              id="new-question"
              value={newFaq.question}
              onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
              placeholder="Voer de vraag in..."
            />
          </div>
          <div>
            <Label htmlFor="new-answer">Antwoord*</Label>
            <Textarea
              id="new-answer"
              value={newFaq.answer}
              onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
              placeholder="Voer het antwoord in..."
              rows={4}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="new-category">Categorie</Label>
              <Input
                id="new-category"
                value={newFaq.category}
                onChange={(e) => setNewFaq({ ...newFaq, category: e.target.value })}
                placeholder="Categorie"
              />
            </div>
            <div>
              <Label htmlFor="new-sort-order">Sorteervolgorde</Label>
              <Input
                id="new-sort-order"
                type="number"
                value={newFaq.sort_order}
                onChange={(e) => setNewFaq({ ...newFaq, sort_order: parseInt(e.target.value) || 0 })}
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="new-is-active"
              checked={newFaq.is_active}
              onCheckedChange={(checked) => setNewFaq({ ...newFaq, is_active: checked })}
            />
            <Label htmlFor="new-is-active">Actief</Label>
          </div>
          <Button 
            onClick={() => handleSaveFaq(newFaq, true)} 
            disabled={loading || !newFaq.question || !newFaq.answer}
            className="bg-brand-green hover:bg-brand-green-dark"
          >
            <Save size={16} className="mr-2" />
            FAQ Opslaan
          </Button>
        </CardContent>
      </Card>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs?.map((faq) => (
          <Card key={faq.id}>
            <CardContent className="p-6">
              {editingFaq?.id === faq.id ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`question-${faq.id}`}>Vraag*</Label>
                    <Input
                      id={`question-${faq.id}`}
                      value={editingFaq.question}
                      onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`answer-${faq.id}`}>Antwoord*</Label>
                    <Textarea
                      id={`answer-${faq.id}`}
                      value={editingFaq.answer}
                      onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`category-${faq.id}`}>Categorie</Label>
                      <Input
                        id={`category-${faq.id}`}
                        value={editingFaq.category || ''}
                        onChange={(e) => setEditingFaq({ ...editingFaq, category: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`sort-order-${faq.id}`}>Sorteervolgorde</Label>
                      <Input
                        id={`sort-order-${faq.id}`}
                        type="number"
                        value={editingFaq.sort_order}
                        onChange={(e) => setEditingFaq({ ...editingFaq, sort_order: parseInt(e.target.value) || 0 })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id={`is-active-${faq.id}`}
                      checked={editingFaq.is_active}
                      onCheckedChange={(checked) => setEditingFaq({ ...editingFaq, is_active: checked })}
                    />
                    <Label htmlFor={`is-active-${faq.id}`}>Actief</Label>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleSaveFaq(editingFaq)} 
                      disabled={loading}
                      className="bg-brand-green hover:bg-brand-green-dark"
                    >
                      <Save size={16} className="mr-2" />
                      Opslaan
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setEditingFaq(null)}
                    >
                      <X size={16} className="mr-2" />
                      Annuleren
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600 mb-2">{faq.answer}</p>
                      {faq.category && (
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {faq.category}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingFaq(faq)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteFaq(faq.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Sortering: {faq.sort_order}</span>
                    <span className={faq.is_active ? 'text-green-600' : 'text-red-600'}>
                      {faq.is_active ? 'Actief' : 'Inactief'}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
