
"use client";

import { Header } from "@/components/layout/header";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem Enviada!",
        description: "Agradecemos o contato. Em breve retornaremos.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 text-center mb-16">
          <span className="font-script gold-text text-4xl">Fale com a Estação</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 uppercase tracking-tighter">CONTATO</h1>
          <ArtDecoDivider className="max-w-md mx-auto" />
        </section>

        <section className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 mb-24">
          {/* Info Column */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-trem-brown p-4 border border-trem-gold/30">
                  <MapPin className="gold-text" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-xs gold-text mb-2">Endereço</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Av. das Árvores, 290 - Jardim Ipê<br />
                    Lagoa Santa/MG (Mercadão Lagoa Santa)
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-trem-brown p-4 border border-trem-gold/30">
                  <Clock className="gold-text" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-xs gold-text mb-2">Funcionamento</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Seg a Sex: 17h às 23h<br />
                    Sábado: 12h às 00h<br />
                    Domingo: 12h às 22h
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-trem-brown p-4 border border-trem-gold/30">
                  <Phone className="gold-text" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-xs gold-text mb-2">Canais Digitais</h3>
                  <p className="text-foreground/80 mb-4">(31) 9999-9999 (WhatsApp)</p>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-trem-brown/50 border border-trem-gold/20 hover:border-trem-gold transition-colors rounded-full"><Instagram size={20} /></a>
                    <a href="#" className="p-3 bg-trem-brown/50 border border-trem-gold/20 hover:border-trem-gold transition-colors rounded-full"><Facebook size={20} /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-trem-brown/20 border border-trem-gold/10">
              <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] gold-text mb-6">Nossos Parceiros</h4>
              <div className="space-y-3 text-sm text-foreground/40 font-display">
                <p>@mercadaolagoasanta</p>
                <p>@tavernademinas</p>
                <p>@anaue.licor</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-trem-brown/30 p-8 md:p-12 border border-trem-gold/20">
            <h3 className="font-display text-3xl font-bold text-white mb-8">Fale Conosco</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Nome Completo *</Label>
                <Input required className="bg-trem-dark border-trem-gold/20 rounded-none focus:border-trem-gold h-12" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">E-mail *</Label>
                <Input required type="email" className="bg-trem-dark border-trem-gold/20 rounded-none focus:border-trem-gold h-12" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Telefone / WhatsApp</Label>
                  <Input className="bg-trem-dark border-trem-gold/20 rounded-none focus:border-trem-gold h-12" placeholder="(31) 9..." />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Assunto</Label>
                  <Select>
                    <SelectTrigger className="bg-trem-dark border-trem-gold/20 rounded-none focus:border-trem-gold h-12">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-trem-brown border-trem-gold/30">
                      <SelectItem value="reserva">Reserva</SelectItem>
                      <SelectItem value="evento">Evento</SelectItem>
                      <SelectItem value="parceria">Parceria</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Mensagem *</Label>
                <Textarea required className="bg-trem-dark border-trem-gold/20 rounded-none focus:border-trem-gold min-h-[150px]" />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-trem-gold hover:bg-trem-gold/90 text-white font-bold py-8 text-lg rounded-none uppercase tracking-[0.2em] transition-transform active:scale-95">
                {loading ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
              </Button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[400px] bg-trem-dark border-y border-trem-gold/20 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.117180231584!2d-43.8885062!3d-19.622359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68e27c000000001%3A0x0!2zMTnCsDM3JzIwLjUiUyA0M8KwNTMnMTguNiJX!5e0!3m2!1spt-BR!2sbr!4v1683900000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="google-maps-dark"
          />
        </section>
      </main>
    </div>
  );
}
