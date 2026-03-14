"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, Music, Clock, TrainFront, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Noite do Jazz Mineiro",
    desc: "O melhor do jazz instrumental com pitadas de música regional e participação especial.",
    date: "SÁB, 20 MAIO • 21h",
    type: "Música ao Vivo",
    img: "https://images.unsplash.com/photo-1514525253344-f814d074e015?q=80&w=800",
  },
  {
    id: 2,
    title: "Festival da Cachaça",
    desc: "Degustação de rótulos premiados e harmonização com petiscos da casa.",
    date: "DOM, 21 MAIO • 13h",
    type: "Datas Especiais",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
  },
  {
    id: 3,
    title: "Workshop de Drinks",
    desc: "Aprenda a fazer os clássicos mineiros com nossos mixologistas.",
    date: "QUA, 24 MAIO • 19h",
    type: "Corporativo",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800",
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState("Todos");
  const filteredEvents = filter === "Todos" ? UPCOMING_EVENTS : UPCOMING_EVENTS.filter(e => e.type === filter);

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-24">
          <Image 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920" 
            alt="Show ao Vivo Trem Bar" 
            fill 
            className="object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-trem-dark/60" />
          <div className="relative z-10 text-center px-4 animate-fade-in-up">
            <span className="font-script gold-text text-4xl">Momentos Inesquecíveis</span>
            <h1 className="font-display text-5xl md:text-8xl font-bold text-white mt-4 uppercase tracking-tighter">EVENTOS</h1>
            <ArtDecoDivider className="max-w-md mx-auto" />
          </div>
        </section>

        <section className="container mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4 uppercase tracking-widest">Programação Fixa</h2>
            <div className="h-1 w-12 bg-trem-gold mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-trem-brown/30 border-trem-gold/10 p-10 flex flex-col items-center text-center group hover:border-trem-gold transition-all">
              <Music className="gold-text mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="font-display text-2xl font-bold mb-4">MÚSICA AO VIVO</h3>
              <p className="text-foreground/60 text-sm mb-10">Toda sexta e sábado a partir das 20h. O melhor do MPB, Samba e Jazz regional.</p>
              <Button asChild className="mt-auto bg-trem-gold hover:bg-trem-gold/90 text-white font-bold rounded-none uppercase text-[10px] tracking-widest px-8">
                <Link href="/reservas">Reservar Mesa</Link>
              </Button>
            </Card>

            <Card className="bg-trem-brown/30 border-trem-gold/10 p-10 flex flex-col items-center text-center group hover:border-trem-gold transition-all">
              <Clock className="gold-text mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="font-display text-2xl font-bold mb-4">HAPPY HOUR</h3>
              <p className="text-foreground/60 text-sm mb-10">Terça a Sexta, das 17h às 19h. Chope especial e petiscos com preços exclusivos.</p>
              <Button asChild variant="outline" className="mt-auto border-trem-gold text-trem-gold hover:bg-trem-gold hover:text-white rounded-none uppercase text-[10px] tracking-widest px-8">
                <Link href="/cardapio">Ver Promoção</Link>
              </Button>
            </Card>

            <Card className="bg-trem-brown/30 border-trem-gold/10 p-10 flex flex-col items-center text-center group hover:border-trem-gold transition-all">
              <Users className="gold-text mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="font-display text-2xl font-bold mb-4">SEU EVENTO</h3>
              <p className="text-foreground/60 text-sm mb-10">Reserve nosso espaço para aniversários, confraternizações e eventos corporativos.</p>
              <Button asChild className="mt-auto bg-trem-gold hover:bg-trem-gold/90 text-white font-bold rounded-none uppercase text-[10px] tracking-widest px-8">
                <Link href="/contato">Solicitar Orçamento</Link>
              </Button>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-24 border-t border-trem-gold/10 pt-24">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <h2 className="font-display text-3xl font-bold uppercase tracking-widest">Próximos Trilhos</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Todos", "Música ao Vivo", "Datas Especiais", "Corporativo"].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-6 py-2 border border-trem-gold text-[10px] font-bold uppercase tracking-widest transition-all",
                    filter === f ? "bg-trem-gold text-white shadow-lg" : "text-trem-gold hover:bg-trem-gold/10"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredEvents.map((event, idx) => (
              <Card key={event.id} className="bg-trem-brown/40 border-trem-gold/10 group hover:border-trem-gold transition-all overflow-hidden animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative aspect-video overflow-hidden">
                  <Image src={event.img} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-trem-dark/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-trem-gold text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                      <CalendarIcon size={12} className="inline mr-2" /> {event.date}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <span className="text-trem-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{event.type}</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-trem-gold transition-colors">{event.title}</h3>
                  <p className="text-foreground/70 mb-8 text-sm leading-relaxed">{event.desc}</p>
                  <Button asChild className="w-full bg-trem-gold hover:bg-trem-gold/90 text-white font-bold rounded-none uppercase text-xs tracking-[0.2em] py-6 shadow-xl active:scale-95 transition-transform">
                    <Link href="/reservas">Reservar Vaga</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
            {filteredEvents.length === 0 && (
              <div className="col-span-full py-24 text-center">
                <div className="mb-6 opacity-20"><TrainFront size={80} className="mx-auto" /></div>
                <p className="text-foreground/40 italic text-lg mb-8">Nenhum evento próximo nesta categoria.</p>
                <p className="text-trem-gold font-bold uppercase tracking-widest text-xs">Siga @trembaroficial para não perder nada!</p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-trem-brown/20 py-24 border-y border-trem-gold/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-16">Momentos do Passado</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-square relative overflow-hidden group border border-trem-gold/10">
                  <Image 
                    src={`https://images.unsplash.com/photo-1514525253344?w=400&auto=format&fit=crop&q=60&sig=${i}`} 
                    alt="Evento passado" 
                    fill 
                    className="object-cover group-hover:scale-110 grayscale transition-all group-hover:grayscale-0" 
                  />
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="text-trem-gold font-bold uppercase tracking-[0.3em] text-[10px] hover:text-white">
              <Link href="/galeria">Ver galeria completa</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
