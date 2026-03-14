
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Button } from "@/components/ui/button";
import { Beer, Utensils, Music, Star, MapPin, Heart, TrainFront, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const partners = [
    { name: "@tavernademinas", insta: "https://instagram.com/tavernademinas" },
    { name: "@anaue.licor", insta: "https://instagram.com/anaue.licor" },
    { name: "@mercadaolagoasanta", insta: "https://instagram.com/mercadaolagoasanta" }
  ];

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32">
        {/* Section 1 - Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24">
          <Image 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920" 
            alt="Ambiente Trem Bar" 
            fill 
            className="object-cover opacity-40 grayscale" 
          />
          <div className="absolute inset-0 bg-trem-dark/50" />
          <div className="relative z-10 text-center px-4 animate-fade-in-up">
            <span className="font-script gold-text text-4xl md:text-5xl">Nossa Estação de Sabores</span>
            <h1 className="font-display text-5xl md:text-8xl font-bold text-white mt-4 uppercase tracking-tighter">NOSSA HISTÓRIA</h1>
            <ArtDecoDivider className="max-w-md mx-auto" />
          </div>
        </section>

        {/* Section 2 - History */}
        <section className="container mx-auto px-4 pb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="font-display text-4xl font-bold text-white border-l-4 border-trem-gold pl-6">A Alma do Trem Bar</h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                <p>
                  O Trem Bar Gastronomia nasceu em 2021 da paixão pela cozinha mineira de raiz, unindo tradição e hospitalidade no coração do Mercadão de Lagoa Santa.
                </p>
                <p>
                  Inspirados pelo charme das antigas estações ferroviárias de Minas Gerais, criamos um espaço onde madeira rústica, ferro envelhecido e uma cozinha artesanal se encontram para oferecer uma experiência única.
                </p>
                <p>
                  Cada prato é preparado com ingredientes frescos e receitas que passam de geração em geração. Aqui, você não vem só comer — você embarca numa viagem de sabores que celebra o melhor do nosso estado.
                </p>
                <p className="font-bold gold-text">Seja bem-vindo a bordo.</p>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-4 border-2 border-trem-gold/20 translate-x-4 translate-y-4 -z-10" />
              <div className="relative aspect-square border border-trem-gold/50 overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800" 
                  alt="Cozinha Mineira Artesanal" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute bottom-8 left-8 bg-trem-gold px-8 py-3 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl">
                  Cozinha de Raiz
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Differentials */}
        <section className="bg-trem-brown/20 py-24 border-y border-trem-gold/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Beer, title: "Chopes", sub: "Artesanais" },
                { icon: Utensils, title: "Cozinha", sub: "Mineira" },
                { icon: Music, title: "Música", sub: "ao Vivo" },
                { icon: Heart, title: "Hospitalidade", sub: "Mineira" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-10 border border-trem-gold/10 hover:border-trem-gold transition-all bg-trem-dark/30 hover:-translate-y-2 group">
                  <item.icon className="gold-text mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="font-bold uppercase tracking-widest text-sm text-white mb-2">{item.title}</h4>
                  <span className="text-[10px] text-foreground/40 uppercase tracking-widest">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - Local Highlight */}
        <section className="py-32 relative flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-block p-4 border border-trem-gold/30 rounded-full mb-8">
              <MapPin className="gold-text" size={32} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Estamos no Mercadão Lagoa Santa</h2>
            <p className="text-foreground/60 text-lg mb-12">Av. das Árvores, 290 — Jardim Ipê. Venha viver essa experiência no coração de Lagoa Santa.</p>
            <Button asChild size="lg" className="rounded-none px-12 py-8 bg-trem-gold hover:bg-trem-gold/90 text-white font-bold uppercase tracking-[0.2em]">
              <a href="https://goo.gl/maps/XYZ" target="_blank">COMO CHEGAR</a>
            </Button>
          </div>
        </section>

        {/* Section 5 - Partners */}
        <section className="bg-trem-brown/10 py-24 border-t border-trem-gold/10 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] gold-text font-bold mb-16">Nossos Parceiros</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
              {partners.map((p, i) => (
                <a key={i} href={p.insta} target="_blank" className="font-display text-2xl font-bold text-foreground/30 hover:text-white transition-all hover:scale-105">
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 - CTA */}
        <section className="bg-trem-brown py-32 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 p-8 text-white opacity-5">
            <TrainFront size={300} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-12">Pronto para o Embarque?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="rounded-none px-12 py-8 bg-trem-gold hover:bg-trem-gold/90 text-white font-bold uppercase tracking-widest border-b-4 border-r-4 border-black/30">
                <Link href="/reservas">FAZER RESERVA</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-12 py-8 border-trem-gold text-trem-gold hover:bg-trem-gold hover:text-white font-bold uppercase tracking-widest">
                <Link href="/cardapio">VER CARDÁPIO</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
