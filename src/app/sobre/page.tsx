
"use client";

import { Header } from "@/components/layout/header";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Button } from "@/components/ui/button";
import { Beer, Utensils, Music, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32">
        {/* Section 1 - Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24">
          <Image 
            src="https://images.unsplash.com/photo-1599307767316-776533bb941c?q=80&w=1920" 
            alt="Ambiente Trem Bar" 
            fill 
            className="object-cover opacity-40" 
          />
          <div className="relative z-10 text-center px-4">
            <span className="font-script gold-text text-4xl md:text-5xl">Uma Estação de Sabores</span>
            <h1 className="font-display text-5xl md:text-8xl font-bold text-white mt-4 uppercase tracking-tighter">NOSSA HISTÓRIA</h1>
            <ArtDecoDivider className="max-w-md mx-auto" />
          </div>
        </section>

        {/* Section 2 - History */}
        <section className="container mx-auto px-4 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-4xl font-bold text-white border-l-4 border-trem-gold pl-6">A Alma do Trem Bar</h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                <p>
                  O Trem Bar nasceu da paixão pela cozinha mineira de raiz. Localizado no Mercadão de Lagoa Santa, unimos a tradição das receitas de família com o charme rústico das antigas estações ferroviárias.
                </p>
                <p>
                  Cada prato é preparado de forma artesanal, com ingredientes selecionados e muito carinho. Valorizamos o pequeno produtor e a autenticidade dos sabores que vêm do campo direto para a sua mesa.
                </p>
                <p>
                  Aqui você encontra chopes bem gelados, drinks autorais com cachaça artesanal e uma cozinha que conta histórias a cada garfada. Seja bem-vindo a bordo desta viagem gastronômica.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-trem-gold/30 translate-x-4 translate-y-4 -z-10" />
              <div className="relative aspect-square border border-trem-gold/50 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" 
                  alt="Cozinha Mineira Artesanal" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute bottom-6 left-6 bg-trem-gold px-6 py-2 text-white font-bold text-xs uppercase tracking-widest shadow-xl">
                  Cozinha Artesanal Mineira
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Differentials */}
        <section className="bg-trem-brown/20 py-24 border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Beer, title: "Chopes", sub: "Artesanais" },
                { icon: Utensils, title: "Cozinha", sub: "Mineira" },
                { icon: Music, title: "Música", sub: "ao Vivo" },
                { icon: Star, title: "Eventos", sub: "Especiais" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-8 border border-trem-gold/10 hover:border-trem-gold transition-colors bg-trem-dark/30">
                  <item.icon className="gold-text mb-4" size={32} />
                  <h4 className="font-bold uppercase tracking-widest text-sm text-white">{item.title}</h4>
                  <span className="text-[10px] text-foreground/50 uppercase tracking-tighter">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - Partners */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-xs uppercase tracking-[0.4em] gold-text font-bold mb-12">Nossos Parceiros</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity">
            <span className="font-display text-xl font-bold">@tavernademinas</span>
            <span className="font-display text-xl font-bold">@anaue.licor</span>
            <span className="font-display text-xl font-bold">@mercadaolagoasanta</span>
          </div>
          <p className="mt-12 text-foreground/40 text-sm max-w-lg mx-auto italic">
            "Parcerias que tornam a experiência Trem Bar ainda mais especial e autêntica."
          </p>
        </section>

        {/* Section 5 - CTA */}
        <section className="bg-trem-brown py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Venha nos visitar</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="rounded-none px-12 py-8 bg-trem-gold hover:bg-trem-gold/90 text-white font-bold uppercase tracking-widest">
                <Link href="/reservas">Fazer Reserva</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-12 py-8 border-trem-gold text-trem-gold hover:bg-trem-gold hover:text-white font-bold uppercase tracking-widest">
                <Link href="/cardapio">Ver Cardápio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
