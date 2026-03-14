
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Button } from "@/components/ui/button";
import { Search, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const GALLERY_ITEMS = [
  // Gastronomia
  { id: 1, src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800", cat: "Gastronomia", alt: "Culinária Mineira" },
  { id: 2, src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", cat: "Gastronomia", alt: "Prato Mineiro" },
  { id: 3, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800", cat: "Gastronomia", alt: "Mesa Farta" },
  // Drinks
  { id: 4, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800", cat: "Drinks", alt: "Cachaça Mineira" },
  { id: 5, src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800", cat: "Drinks", alt: "Cocktail Artesanal" },
  { id: 6, src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800", cat: "Drinks", alt: "Gin do Cerrado" },
  // Ambiente
  { id: 7, src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800", cat: "Ambiente", alt: "Interior Trem Bar" },
  { id: 8, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", cat: "Ambiente", alt: "Mesa de Restaurante" },
  { id: 9, src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800", cat: "Ambiente", alt: "Ambiente Externo" },
  // Eventos
  { id: 10, src: "https://images.unsplash.com/photo-1514525253344-f814d074e015?w=800", cat: "Eventos", alt: "Show ao Vivo" },
  { id: 11, src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800", cat: "Eventos", alt: "Noite de Jazz" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = filter === "Todos" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.cat === filter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight" && selectedImage !== null) nextImage();
      if (e.key === "ArrowLeft" && selectedImage !== null) prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const nextImage = () => {
    if (selectedImage === null) return;
    const nextIdx = (selectedImage + 1) % filtered.length;
    setSelectedImage(nextIdx);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    const prevIdx = (selectedImage - 1 + filtered.length) % filtered.length;
    setSelectedImage(prevIdx);
  };

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 text-center mb-16">
          <span className="font-script gold-text text-4xl">Registros do Nosso Trilho</span>
          <h1 className="font-display text-5xl md:text-8xl font-bold text-white mt-4 uppercase tracking-tighter">GALERIA</h1>
          <ArtDecoDivider className="max-w-md mx-auto" />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Todos", "Gastronomia", "Drinks", "Ambiente", "Eventos"].map((f) => (
              <Button 
                key={f}
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-none px-8 border-trem-gold text-[10px] font-bold uppercase tracking-widest transition-all",
                  filter === f ? "bg-trem-gold text-white" : "text-trem-gold hover:bg-trem-gold/10"
                )}
              >
                {f}
              </Button>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, idx) => (
              <div 
                key={item.id} 
                className="relative group overflow-hidden cursor-pointer border border-trem-gold/10 hover:border-trem-gold transition-all break-inside-avoid animate-fade-in-up"
                onClick={() => setSelectedImage(idx)}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative w-full">
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    width={600}
                    height={800}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-trem-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                    <ZoomIn className="gold-text" size={40} />
                    <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">{item.cat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-[100] bg-trem-dark/95 backdrop-blur-xl flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-trem-gold transition-colors"
            >
              <X size={40} />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-trem-gold hover:scale-110 transition-transform hidden md:block"
            >
              <ChevronLeft size={60} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-trem-gold hover:scale-110 transition-transform hidden md:block"
            >
              <ChevronRight size={60} />
            </button>

            <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6">
              <div className="relative w-full h-[70vh]">
                <Image 
                  src={filtered[selectedImage].src} 
                  alt={filtered[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center animate-fade-in-up">
                <span className="gold-text text-xs font-bold uppercase tracking-[0.4em] mb-2 block">{filtered[selectedImage].cat}</span>
                <p className="text-white font-display text-2xl">{filtered[selectedImage].alt}</p>
                <span className="text-white/30 text-[10px] mt-4 block">{selectedImage + 1} / {filtered.length}</span>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
