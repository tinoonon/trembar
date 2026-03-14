"use client";

import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Beer, Utensils, Music, MapPin, Phone, Instagram } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const torresmoImg = PlaceHolderImages.find(i => i.id === 'torresmo')?.imageUrl || "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80";
  const paoDeQueijoImg = PlaceHolderImages.find(i => i.id === 'pao-de-queijo')?.imageUrl || "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80";
  const caipirinhaImg = PlaceHolderImages.find(i => i.id === 'caipirinha')?.imageUrl || "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80";
  const aboutImg = PlaceHolderImages.find(i => i.id === 'about-chef')?.imageUrl || "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800";

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-trem-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-trem-gold/30 rotate-3 transition-transform group-hover:rotate-0" />
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-trem-gold/20">
                <Image
                  src={aboutImg}
                  alt="Trem Bar Cozinha Artesanal"
                  fill
                  className="object-cover"
                  data-ai-hint="cozinha mineira chef artesanal"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-trem-gold p-6 text-white shadow-xl hidden md:block">
                <p className="font-display text-2xl font-bold">Desde 2021</p>
                <p className="text-xs uppercase tracking-widest opacity-80">No Mercadão de Lagoa Santa</p>
              </div>
            </div>

            <div className="space-y-6">
              <span className="font-script gold-text text-3xl">Uma Estação de Sabores</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                A Alma de Minas, <br />o Charme da Estação.
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                O Trem Bar Gastronomia nasceu da paixão pela culinária rústica mineira aliada à elegância das antigas estações ferroviárias. Cada detalhe, do madeiramento ao ferro envelhecido, foi pensado para proporcionar uma experiência sensorial completa.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Aqui, a tradição encontra o contemporâneo em pratos artesanais, chopes premiados e drinks que contam histórias. Sente-se, relaxe e deixe o trem partir rumo ao sabor.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="flex flex-col items-center text-center p-4 bg-trem-brown/30 border border-trem-gold/10 hover:border-trem-gold transition-colors">
                  <Beer className="gold-text mb-3 h-8 w-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">Chopes Artesanais</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-trem-brown/30 border border-trem-gold/10 hover:border-trem-gold transition-colors">
                  <Utensils className="gold-text mb-3 h-8 w-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">Cozinha Mineira</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-trem-brown/30 border border-trem-gold/10 hover:border-trem-gold transition-colors">
                  <Music className="gold-text mb-3 h-8 w-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">Música ao Vivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArtDecoDivider className="container mx-auto" />

      {/* Menu Preview Section */}
      <section className="py-24 bg-trem-brown/10">
        <div className="container mx-auto px-4 text-center mb-16">
          <span className="font-script gold-text text-3xl">Para beliscar ou jantar</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Destaques do Cardápio</h2>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Torresmo de Rolo", 
              desc: "Crocante por fora, suculento por dentro. Acompanha geleia de pimenta.", 
              img: torresmoImg,
              alt: "Torresmo de rolo crocante",
              hint: "torresmo brasileiro"
            },
            { 
              name: "Pão de Queijo Recheado", 
              desc: "Receita artesanal recheada com pernil desfiado e queijo canastra.", 
              img: paoDeQueijoImg,
              alt: "Pão de queijo mineiro recheado",
              hint: "pão de queijo mineiro"
            },
            { 
              name: "Drink Maria Fumaça", 
              desc: "Cachaça artesanal, infusão de frutas vermelhas e espuma de gengibre.", 
              img: caipirinhaImg,
              alt: "Drink Maria Fumaça com cachaça artesanal",
              hint: "caipirinha cachaça brasil"
            }
          ].map((item, idx) => (
            <Card key={idx} className="bg-trem-brown/40 border-primary/10 group hover:border-trem-gold transition-all overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.alt} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  data-ai-hint={item.hint}
                />
              </div>
              <CardContent className="p-6 text-left">
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/5531999999999?text=Olá, gostaria de saber se tem ${item.name} hoje!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase font-bold tracking-widest text-primary hover:text-white transition-colors"
                  >
                    Consultar disponibilidade
                  </a>
                  <Link href="/cardapio" className="text-foreground/40 font-bold text-[10px] tracking-widest uppercase hover:text-primary transition-colors">
                    Ver no Cardápio
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-trem-gold text-trem-gold hover:bg-trem-gold hover:text-white rounded-none uppercase tracking-widest font-bold px-10 py-8">
            <Link href="/cardapio">VER CARDÁPIO COMPLETO</Link>
          </Button>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-trem-gold/10 skew-y-3 origin-left -z-10" />
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Reserve sua Mesa</h2>
          <p className="text-foreground/80 text-lg mb-10">
            Garanta seu lugar na nossa estação. Seja para um jantar romântico, celebração com amigos ou evento corporativo, estamos prontos para receber você.
          </p>
          <Button asChild size="lg" className="bg-trem-gold hover:bg-trem-gold/90 text-white font-bold rounded-none px-12 py-8 text-xl border-b-4 border-r-4 border-black/30 uppercase tracking-[0.2em]">
            <Link href="/reservas">RESERVAR AGORA</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-trem-dark border-t border-trem-gold/20 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="font-display text-2xl font-bold text-white">TREM BAR</div>
              <p className="text-foreground/60 text-sm">
                Cozinha Artesanal Mineira no coração de Lagoa Santa. Experiências rústicas e elegantes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="gold-text hover:text-white"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest gold-text text-sm">Contatos</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2"><Phone size={14} className="gold-text" /> (31) 9999-9999</li>
                <li className="flex items-center gap-2"><MapPin size={14} className="gold-text" /> Av. das Árvores, 290 - Lagoa Santa/MG</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest gold-text text-sm">Horários</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>Ter - Qui: 17h às 23h</li>
                <li>Sex - Sáb: 12h às 00h</li>
                <li>Dom: 12h às 22h</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest gold-text text-sm">Parceiros</h4>
              <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                <span className="text-xs font-bold">TARENA DE MINAS</span>
                <span className="text-xs font-bold">LICOR ANAUÊ</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/10 pt-8 text-center text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} Trem Bar Gastronomia. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
