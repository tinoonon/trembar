
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Plus, Trash2, Edit2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateAdminContent } from "@/ai/flows/generate-admin-content-flow";

export default function AdminCardapio() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    description: "",
    price: ""
  });

  const handleMagicGenerate = async () => {
    if (!formData.name || !formData.details) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Preencha o nome e detalhes para gerar a descrição mágica.",
      });
      return;
    }

    setLoading(true);
    try {
      const result = await generateAdminContent({
        contentType: "menu_item",
        name: formData.name,
        details: formData.details
      });
      setFormData({ ...formData, description: result.description });
      toast({
        title: "Conteúdo Gerado!",
        description: "A IA criou uma descrição incrível para o seu prato.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível gerar a descrição no momento.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold">Gestão do Cardápio</h1>
          <p className="text-slate-400">Adicione ou edite pratos e bebidas.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 rounded-none gap-2">
          <Plus size={18} /> Novo Item
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle>Adicionar Novo Prato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome do Prato</Label>
                  <Input 
                    placeholder="Ex: Frango ao Molho Pardo" 
                    className="bg-slate-950 border-slate-800"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Preço (R$)</Label>
                  <Input 
                    placeholder="59,90" 
                    className="bg-slate-950 border-slate-800"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Detalhes Chave (para a IA)</Label>
                <Input 
                  placeholder="Ex: Frango caipira, sangue fresco, ervas da horta, acompanha arroz e quiabo" 
                  className="bg-slate-950 border-slate-800"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Descrição Final</Label>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleMagicGenerate}
                    disabled={loading}
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 gap-2"
                  >
                    <Sparkles size={14} /> 
                    {loading ? "Gerando..." : "Gerar com IA"}
                  </Button>
                </div>
                <Textarea 
                  placeholder="A descrição que os clientes verão no site..." 
                  className="bg-slate-950 border-slate-800 h-32" 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">Salvar Item</Button>
            </CardContent>
          </Card>
        </div>

        {/* List Column */}
        <div className="space-y-4">
          <h2 className="font-bold uppercase tracking-widest text-xs text-slate-500">Recentes</h2>
          {[1, 2, 3].map(i => (
            <Card key={i} className="bg-slate-900 border-slate-800">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm">Item {i}</div>
                  <div className="text-xs text-slate-500">R$ 45,00</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white"><Edit2 size={14} /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:bg-red-950/20"><Trash2 size={14} /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
