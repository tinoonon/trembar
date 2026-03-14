
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Phone, Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const WHATSAPP_NUMBER = "5531988887777";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      assunto: formData.get('assunto'),
      mensagem: formData.get('mensagem'),
    };

    const waMessage = `Olá! Meu nome é ${data.nome} (${data.email}). Assunto: ${data.assunto}. Mensagem: ${data.mensagem}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem Preparada!",
        description: "Redirecionando para o WhatsApp...",
      });
      window.open(waUrl, '_blank');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 text-center mb-16 animate-fade-in-up">
          <span className="font-script gold-text text-4xl">Fale com a Estação</span>
          <h1 className="font-display text-5xl md:text-8xl font-bold text-white mt-4 uppercase tracking-tighter">CONTATO</h1>
          <ArtDecoDivider className="max-w-md mx-auto" />
        </section>

        <section className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 mb-24">
          {/* Info Column */}
          <div className="space-y-16 animate-fade-in-up">
            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="bg-trem-brown p-5 border border-trem-gold/20 text-trem-gold group-hover:bg-trem-gold group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.3em] text-[10px] gold-text mb-3">Onde Desembarcar</h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    Av. das Árvores, 290 - Jardim Ipê<br />
                    Lagoa Santa/MG (Mercadão Lagoa Santa)
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="bg-trem-brown p-5 border border-trem-gold/20 text-trem-gold group-hover:bg-trem-gold group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.3em] text-[10px] gold-text mb-3">Horário dos Trilhos</h3>
                  <div className="text-foreground/80 leading-relaxed text-lg grid grid-cols-2 gap-x-8">
                    <span>Ter a Qui:</span> <span>17h às 23h</span>
                    <span>Sábado:</span> <span>12h às 00h</span>
                    <span>Domingo:</span> <span>12h às 22h</span>
                    <span className="text-red-500/50">Segunda:</span> <span className="text-red-500/50 uppercase text-xs font-bold pt-1">Fechado</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="bg-trem-brown p-5 border border-trem-gold/20 text-trem-gold group-hover:bg-trem-gold group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.3em] text-[10px] gold-text mb-3">Canais Digitais</h3>
                  <p className="text-foreground/80 text-xl mb-6">(31) 98888-7777 (WhatsApp)</p>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/trembaroficial" target="_blank" className="p-4 bg-trem-brown/30 border border-trem-gold/20 text-trem-gold hover:bg-trem-gold hover:text-white transition-all rounded-full hover:scale-110"><Instagram size={24} /></a>
                    <a href="#" className="p-4 bg-trem-brown/30 border border-trem-gold/20 text-trem-gold hover:bg-trem-gold hover:text-white transition-all rounded-full hover:scale-110"><Facebook size={24} /></a>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="p-4 bg-trem-brown/30 border border-trem-gold/20 text-trem-gold hover:bg-trem-gold hover:text-white transition-all rounded-full hover:scale-110"><MessageCircle size={24} /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-trem-brown/20 border border-trem-gold/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><MessageCircle size={100} /></div>
              <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] gold-text mb-6">Nossos Parceiros</h4>
              <div className="space-y-4 text-sm text-foreground/40 font-display">
                <p className="hover:text-white transition-colors cursor-pointer">@mercadaolagoasanta</p>
                <p className="hover:text-white transition-colors cursor-pointer">@tavernademinas</p>
                <p className="hover:text-white transition-colors cursor-pointer">@anaue.licor</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-trem-brown/30 p-10 md:p-16 border border-trem-gold/20 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-display text-4xl font-bold text-white mb-10">Fale Conosco</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/40">Nome Completo *</Label>
                <Input name="nome" required className="bg-trem-dark/50 border-trem-gold/20 rounded-none focus:border-trem-gold h-14 transition-all focus:ring-0" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/40">E-mail *</Label>
                  <Input name="email" required type="email" className="bg-trem-dark/50 border-trem-gold/20 rounded-none focus:border-trem-gold h-14 transition-all focus:ring-0" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/40">Assunto</Label>
                  <Select name="assunto">
                    <SelectTrigger className="bg-trem-dark/50 border-trem-gold/20 rounded-none focus:border-trem-gold h-14 transition-all focus:ring-0">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-trem-brown border-trem-gold/30">
                      <SelectItem value="Reserva">Reserva</SelectItem>
                      <SelectItem value="Evento">Evento Especial</SelectItem>
                      <SelectItem value="Parceria">Parceria</SelectItem>
                      <SelectItem value="Outro">Outro Assunto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/40">Sua Mensagem *</Label>
                <Textarea name="mensagem" required className="bg-trem-dark/50 border-trem-gold/20 rounded-none focus:border-trem-gold min-h-[180px] transition-all focus:ring-0" />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-trem-gold hover:bg-trem-gold/90 text-white font-bold py-10 text-xl rounded-none uppercase tracking-[0.3em] shadow-xl transition-all active:scale-95 group">
                {loading ? "PREPARANDO..." : (
                  <span className="flex items-center gap-3">
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" /> 
                    ENVIAR PELO WHATSAPP
                  </span>
                )}
              </Button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[500px] bg-trem-dark border-y border-trem-gold/10 overflow-hidden relative">
          <div className="absolute top-8 left-8 z-10 bg-trem-dark/90 backdrop-blur-md p-6 border border-trem-gold/20 hidden md:block animate-fade-in-up">
            <h4 className="font-display text-xl font-bold mb-2">Visite nossa Estação</h4>
            <p className="text-xs text-foreground/60 max-w-[200px]">Estamos localizados dentro do Mercadão de Lagoa Santa.</p>
          </div>
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
      <Footer />
    </div>
  );
}
