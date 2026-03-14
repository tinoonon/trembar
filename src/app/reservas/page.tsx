
"use client";

import { Header } from "@/components/layout/header";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { TrainFront } from "lucide-react";

export default function ReservationsPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Reserva Enviada!",
        description: "Em breve entraremos em contato para confirmar sua estação.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 text-center mb-12">
          <span className="font-script text-primary text-4xl">Sua Estação Reservada</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 uppercase tracking-tighter">RESERVAS</h1>
          <ArtDecoDivider className="max-w-md mx-auto" />
        </div>

        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card/30 p-8 md:p-12 border border-primary/20 relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrainFront size={100} />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary uppercase tracking-widest text-xs font-bold">Nome Completo</Label>
                  <Input id="name" required className="bg-background border-primary/30 rounded-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary uppercase tracking-widest text-xs font-bold">WhatsApp</Label>
                  <Input id="phone" required placeholder="(31) 9..." className="bg-background border-primary/30 rounded-none focus:border-primary" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-primary uppercase tracking-widest text-xs font-bold">Data Desejada</Label>
                  <Input id="date" type="date" required className="bg-background border-primary/30 rounded-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-primary uppercase tracking-widest text-xs font-bold">Nº de Passageiros</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-primary/30 rounded-none focus:border-primary">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8,10,12].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num} Pessoas</SelectItem>
                      ))}
                      <SelectItem value="group">Grupo Grande (12+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-primary uppercase tracking-widest text-xs font-bold">Observações / Ocasião Especial</Label>
                <Textarea id="notes" placeholder="Aniversário, área externa, etc." className="bg-background border-primary/30 rounded-none focus:border-primary h-32" />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-8 text-xl rounded-none border-b-4 border-r-4 border-black/30 tracking-widest transition-transform active:scale-95">
                {loading ? "PROCESSANDO..." : "SOLICITAR RESERVA"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
