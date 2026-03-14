"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  // Option B: High-quality rustic restaurant table image
  const HERO_BG = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85&fit=crop&crop=center";

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105 z-0"
        style={{ 
          backgroundImage: `url(${HERO_BG})`,
        }}
        data-ai-hint="rustic restaurant atmosphere"
      />
      
      {/* Optimized Overlay for Legibility */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: "linear-gradient(to bottom, rgba(26, 10, 0, 0.55) 0%, rgba(59, 26, 8, 0.70) 60%, rgba(26, 10, 0, 0.90) 100%)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-script text-primary text-3xl md:text-5xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 drop-shadow-lg">
          Cozinha Artesanal Mineira
        </h2>
        <h1 className="font-display text-5xl md:text-8xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 drop-shadow-2xl">
          TREM BAR
        </h1>
        <p className="max-w-2xl mx-auto text-foreground/90 text-lg md:text-xl mb-10 font-body animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 drop-shadow-md">
          Chopes gelados, drinks autorais e a alma de Minas em cada prato. 
          Uma viagem gastronômica no coração de Lagoa Santa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <Button asChild size="lg" className="rounded-none px-12 py-7 text-lg bg-primary hover:bg-primary/90 text-white font-bold tracking-widest border-b-4 border-r-4 border-black/20 transition-transform active:scale-95">
            <Link href="/cardapio">VER CARDÁPIO</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-none px-12 py-7 text-lg border-primary text-primary hover:bg-primary hover:text-white font-bold tracking-widest bg-background/20 backdrop-blur-sm transition-transform active:scale-95">
            <Link href="/reservas">RESERVAR MESA</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-primary/60 z-10">
        <span className="text-xs uppercase tracking-[0.3em] mb-2 font-bold drop-shadow-md">Descubra</span>
        <ChevronDown />
      </div>
    </section>
  );
}
