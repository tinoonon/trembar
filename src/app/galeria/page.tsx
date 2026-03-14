
"use client";

import { Header } from "@/components/layout/header";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const GALLERY_ITEMS = [
  { id: 1, src: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800", cat: "Gastronomia", alt: "Feijão Tropeiro Tradicional" },
  { id: 2, src: "https://images.unsplash.com/photo-1599307767316-776533bb941c?q=80&w=800", cat: "Ambiente", alt: "Mesa Farta Trem Bar" },
  { id: 3, src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800", cat: "Drinks", alt: "Caipirinha de Cachaça" },
  { id: 4, src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800", cat: "Gastronomia", alt: "Cozinha Artesanal" },
  { id: 5, src: "https://images.unsplash.com/photo-1514525253344-f814d074e015?q=80&w=800", cat: "Eventos", alt: "Show ao Vivo" },
  { id: 6, src: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=800", cat: "Drinks", alt: "Chopp Gelado" },
  { id: 7, src: "https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=800", cat: "Gastronomia", alt: "Torresmo de Rolo" },
  { id: 8, src: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800", cat: "Gastronomia", alt: "Pão de Queijo Mineiro" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.cat === filter);

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 text-center mb-16">
          <span className="font-script gold-text text-4xl">Beleza em Cada Detalhe</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 uppercase tracking-tighter">GALERIA</h1>
          <ArtDecoDivider className="max-w-md mx-auto" />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Todos", "Gastronomia", "Drinks", "Ambiente", "Eventos"].map((f) => (
              <Button 
                key={f}
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className={`rounded-none px-6 border-trem-gold text-xs font-bold uppercase tracking-widest ${filter !== f ? 'text-primary' : ''}`}
              >
                {f} ({f === "Todos" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.cat === f).length})
              </Button>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div 
                key={item.id} 
                className="relative group overflow-hidden cursor-pointer rounded-lg border border-primary/10 hover:border-trem-gold transition-all"
              >
                <div className="aspect-[4/5] relative">
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-trem-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                    <Search className="gold-text" size={32} />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{item.cat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
