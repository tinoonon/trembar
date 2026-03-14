
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Beer, Utensils, Music, MapPin, Phone, Instagram, Star, Quote, TrainFront, Users, GlassWater } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const torresmoImg = PlaceHolderImages.find(i => i.id === 'torresmo')?.imageUrl || "";
  const paoDeQueijoImg = PlaceHolderImages.find(i => i.id === 'pao-de-queijo')?.imageUrl || "";
  const caipirinhaImg = PlaceHolderImages.find(i => i.id === 'caipirinha')?.imageUrl || "";
  const aboutImg = PlaceHolderImages.find(i => i.id === 'about-chef')?.imageUrl || "";
  const reservationBg = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80";

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      <Hero />

      {/* About Section - Personalized */}
      <section className="py-24 bg-trem-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group animate-fade-in-up">
              <div className="absolute -inset-4 border border-trem-gold/30 rotate-3 transition-transform group-hover:rotate-0" />
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-trem-gold/20">
                <Image
                  src={aboutImg}
                  alt="Trem Bar Cozinha Artesanal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-trem-gold p-6 text-white shadow-xl hidden md:block">
                <p className="font-display text-2xl font-bold">Desde 2021</p>
                <p className="text-[10px] uppercase tracking-widest opacity-80">Mercadão de Lagoa Santa</p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="font-script gold-text text-3xl">Nossa Estação</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                A Alma de Minas, <br />Inspirada nos Trilhos.
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  O Trem Bar Gastronomia nasceu em 2021 da paixão dos fundadores pela hospitalidade mineira e pelo charme nostálgico das antigas estações ferroviárias. Localizado no icônico Mercadão de Lagoa Santa, nosso espaço foi planejado para ser uma "estação de sabores".
                </p>
                <p>
                  Cada detalhe em madeira rústica e ferro envelhecido conta uma parte da nossa história. Unimos o melhor da culinária de raiz com técnicas artesanais, resultando em pratos que são verdadeiras viagens sensoriais.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {[
                  { icon: Beer, label: "Chopes Artesanais" },
                  { icon: Utensils, label: "Cozinha Mineira" },
                  { icon: Music, label: "Música ao Vivo" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4 bg-trem-brown/30 border border-trem-gold/10 hover:border-trem-gold transition-colors">
                    <item.icon className="gold-text mb-3 h-8 w-8" />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArtDecoDivider className="container mx-auto" />

      {/* Menu Preview Section - Badges Added */}
      <section className="py-24 bg-trem-brown/10">
        <div className="container mx-auto px-4 text-center mb-16">
          <span className="font-script gold-text text-3xl">Destaques da Estação</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Sabores Premiados</h2>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Torresmo de Rolo", 
              desc: "Crocante por fora, suculento por dentro. Acompanha geleia de pimenta.", 
              img: torresmoImg,
              cat: "ENTRADA",
              link: "Torresmo"
            },
            { 
              name: "Pão de Queijo Recheado", 
              desc: "Receita artesanal recheada com pernil desfiado e queijo canastra.", 
              img: paoDeQueijoImg,
              cat: "ENTRADA",
              link: "Pão de Queijo"
            },
            { 
              name: "Drink Maria Fumaça", 
              desc: "Cachaça artesanal, infusão de frutas vermelhas e espuma de gengibre.", 
              img: caipirinhaImg,
              cat: "DRINK",
              link: "Maria Fumaça"
            }
          ].map((item, idx) => (
            <Card key={idx} className="bg-trem-brown/40 border-primary/10 group hover:border-trem-gold transition-all overflow-hidden relative flex flex-col h-full">
              <Badge className="absolute top-4 left-4 z-10 bg-trem-gold text-white font-bold text-[10px] py-1 px-3 border-none rounded-none shadow-lg">
                {item.cat}
              </Badge>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-bold text-white mb-3">{item.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-8 flex-1">{item.desc}</p>
                <div className="flex flex-col gap-4">
                  <a 
                    href={`https://wa.me/5531988887777?text=Olá! Gostaria de pedir o ${item.name}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-trem-gold/10 border border-trem-gold/30 text-trem-gold hover:bg-trem-gold hover:text-white transition-all py-3 font-bold text-xs uppercase tracking-widest"
                  >
                    <Phone size={14} /> Pedir pelo WhatsApp
                  </a>
                  <Link href="/cardapio" className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40 hover:text-white transition-colors">
                    Ver no Cardápio
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reservation Section - Improved UI */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={reservationBg} alt="Ambiente Trem Bar" fill className="object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-trem-dark via-trem-dark/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-8">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">Sua Mesa <br/><span className="gold-text">Está Pronta.</span></h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Garanta seu lugar na nossa estação. Seja para um brinde com amigos ou uma celebração especial, oferecemos o ambiente perfeito.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Utensils, text: "Ambiente Reservado" },
                  { icon: Music, text: "Música ao Vivo" },
                  { icon: Star, text: "Ocasiões Especiais" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-2 bg-trem-gold/20 text-trem-gold border border-trem-gold/30 rounded-full group-hover:bg-trem-gold group-hover:text-white transition-all">
                      <item.icon size={18} />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-xs">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-trem-brown/50 border border-trem-gold/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">8 mesas disponíveis para hoje</span>
                </div>
              </div>
            </div>

            <div className="bg-trem-brown/40 backdrop-blur-md p-10 border border-trem-gold/20 relative">
              <div className="absolute -top-4 -right-4 p-4 text-trem-gold opacity-10">
                <TrainFront size={100} />
              </div>
              <h3 className="font-display text-3xl font-bold mb-8 text-center">Fazer Reserva</h3>
              <div className="space-y-6">
                <Button asChild size="lg" className="w-full bg-trem-gold hover:bg-trem-gold/90 text-white font-bold rounded-none py-8 text-lg border-b-4 border-r-4 border-black/30 uppercase tracking-[0.2em]">
                  <Link href="/reservas">SOLICITAR AGORA</Link>
                </Button>
                <p className="text-[10px] text-center text-foreground/40 uppercase tracking-widest">Confirmação em até 15 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-trem-dark/50 border-y border-trem-gold/10">
        <div className="container mx-auto px-4 text-center">
          <Quote className="mx-auto mb-8 text-trem-gold opacity-30" size={60} />
          <h2 className="font-display text-4xl font-bold text-white mb-16">O Que Dizem da Viagem</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mariana Silva", date: "há 2 semanas", text: "O melhor torresmo de rolo que já comi! O ambiente é rústico e muito acolhedor. Voltarei com certeza." },
              { name: "Ricardo Oliveira", date: "há 1 mês", text: "Excelente atendimento e os chopes artesanais estão sempre na temperatura perfeita. Uma joia em Lagoa Santa." },
              { name: "Ana Beatriz", date: "há 3 dias", text: "Noite de jazz maravilhosa! A música ao vivo combinada com a culinária mineira é uma experiência de outro mundo." }
            ].map((t, i) => (
              <Card key={i} className="bg-trem-brown/20 border-trem-gold/10 p-8 text-left group hover:border-trem-gold transition-all">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-trem-gold text-trem-gold" />)}
                </div>
                <p className="text-foreground/70 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-trem-gold/20 flex items-center justify-center font-bold text-trem-gold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-[10px] uppercase text-foreground/40">{t.date}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
