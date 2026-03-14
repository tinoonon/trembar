
"use client";

import { Header } from "@/components/layout/header";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Music, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EVENTS = [
  {
    id: 1,
    title: "Noite do Jazz Mineiro",
    desc: "O melhor do jazz instrumental com pitadas de música regional.",
    date: "Sábado, 20 Mai • 21h",
    type: "Música ao Vivo",
    img: "https://images.unsplash.com/photo-1514525253344-f814d074e015?q=80&w=800",
  },
  {
    id: 2,
    title: "Almoço de Domingo em Família",
    desc: "Buffet livre de comida mineira no fogão a lenha.",
    date: "Domingo, 21 Mai • 12h",
    type: "Datas Especiais",
    img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800",
  },
  {
    id: 3,
    title: "Happy Hour Corporativo",
    desc: "Pacotes especiais para empresas e confraternizações.",
    date: "Terça a Quinta • 17h",
    type: "Corporativo",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800",
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState("Todos");
  const filteredEvents = filter === "Todos" ? EVENTS : EVENTS.filter(e => e.type === filter);

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 text-center mb-16">
          <span className="font-script gold-text text-4xl">Momentos Inesquecíveis</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 uppercase tracking-tighter">EVENTOS</h1>
          <ArtDecoDivider className="max-w-md mx-auto" />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Todos", "Música ao Vivo", "Datas Especiais", "Corporativo"].map((f) => (
              <Button 
                key={f}
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className={`rounded-none px-6 border-trem-gold text-xs font-bold uppercase tracking-widest ${filter !== f ? 'text-primary' : ''}`}
              >
                {f}
              </Button>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="bg-trem-brown/40 border-primary/10 group hover:border-trem-gold transition-all overflow-hidden">
              <div className="relative aspect-video">
                <Image src={event.img} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-trem-dark/80 backdrop-blur-md px-4 py-2 text-[10px] font-bold gold-text uppercase tracking-widest border border-trem-gold">
                  <CalendarIcon size={12} className="inline mr-2" /> {event.date}
                </div>
              </div>
              <CardContent className="p-8">
                <Badge variant="outline" className="text-primary border-primary mb-4 rounded-none uppercase text-[10px] tracking-widest">
                  {event.type}
                </Badge>
                <h3 className="font-display text-2xl font-bold text-white mb-4">{event.title}</h3>
                <p className="text-foreground/70 mb-8 text-sm leading-relaxed">{event.desc}</p>
                <div className="flex gap-4">
                  <Button variant="link" className="text-primary font-bold p-0 uppercase text-xs tracking-widest hover:text-white">Saber Mais</Button>
                  <Button asChild className="ml-auto bg-trem-gold hover:bg-trem-gold/90 text-white font-bold rounded-none uppercase text-xs tracking-widest">
                    <Link href="/reservas">Reservar Vaga</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filteredEvents.length === 0 && (
            <div className="col-span-full py-24 text-center text-foreground/40 italic">
              Nenhum evento próximo nesta categoria.
            </div>
          )}
        </section>

        <section className="bg-trem-brown/20 py-24 border-y border-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-12">Programação Recorrente</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="p-8 border border-trem-gold/30 bg-trem-dark/40 flex flex-col items-center">
                <Music className="gold-text mb-6" size={40} />
                <h3 className="font-display text-xl font-bold mb-4">Música ao Vivo</h3>
                <p className="text-sm text-foreground/60">Toda sexta e sábado a partir das 20h. O melhor do MPB, Samba e Jazz.</p>
              </div>
              <div className="p-8 border border-trem-gold/30 bg-trem-dark/40 flex flex-col items-center">
                <Clock className="gold-text mb-6" size={40} />
                <h3 className="font-display text-xl font-bold mb-4">Happy Hour</h3>
                <p className="text-sm text-foreground/60">Terça a Quinta, das 17h às 20h. Chope e petiscos com 20% de desconto.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a 
        href="https://wa.me/5531999999999?text=Olá, gostaria de reservar para um evento no Trem Bar!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <span className="hidden md:inline mr-2 font-bold text-xs uppercase tracking-widest">Quero reservar para um evento</span>
        <Music size={24} />
      </a>
    </div>
  );
}
