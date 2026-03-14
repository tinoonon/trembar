"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Users } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const MENU_DATA = {
  entradas: [
    { id: 1, name: "Torresmo de Rolo", desc: "Clássico mineiro, pele pururucada e carne suculenta.", badge: "Destaque", tags: ["🥓 Favorito", "⏱️ Artesanal"], img: PlaceHolderImages.find(i => i.id === 'torresmo')?.imageUrl },
    { id: 2, name: "Pão de Queijo Recheado", desc: "Massa artesanal com queijo canastra e pernil desfiado.", badge: "Tradicional", tags: ["🧀 Queijo Canastra"], img: PlaceHolderImages.find(i => i.id === 'pao-de-queijo')?.imageUrl },
    { id: 3, name: "Pastéis de Angu", desc: "Massa de milho moído na hora. Mix de queijo e carne seca.", tags: ["🌽 Milho Verde"], img: "https://images.unsplash.com/photo-1593504049359-74330189a055?w=800" },
  ],
  porções: [
    { id: 4, name: "Linguiça Mineira Acebolada", desc: "Linguiça artesanal produzida na região, servida com mandioca na manteiga.", tags: ["👨‍👩‍👧 Serve 2"], img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800" },
    { id: 5, name: "Bolinho de Feijão", desc: "Receita de vó com recheio de couve e bacon.", tags: ["🥓 Com Bacon"], img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800" },
  ],
  principais: [
    { id: 6, name: "Frango ao Molho Pardo", desc: "Receita histórica com frango caipira criado solto.", badge: "Especialidade", tags: ["🐔 Caipira", "🥘 Tradicional"], img: PlaceHolderImages.find(i => i.id === 'frango-molho-pardo')?.imageUrl },
    { id: 7, name: "Feijão Tropeiro Trem Bar", desc: "O autêntico tropeiro com lombo, ovo frito e couve fina.", badge: "Mais Pedido", tags: ["👨‍👩‍👧 Serve 2", "🌶️ Leve Pimenta"], img: PlaceHolderImages.find(i => i.id === 'feijao-tropeiro')?.imageUrl },
  ],
  bebidas: [
    { id: 8, name: "Chope Pilsen 500ml", desc: "Produção local exclusiva, filtrado e servido a -2°C.", badge: "Gelado", tags: ["🍺 Artesanal"], img: PlaceHolderImages.find(i => i.id === 'chopp')?.imageUrl },
    { id: 9, name: "Cachaça da Casa", desc: "Envelhecida 3 anos em barril de Amburana.", tags: ["🥃 Premium"], img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800" },
  ],
  drinks: [
    { id: 10, name: "Maria Fumaça", desc: "Cachaça premium, frutas vermelhas e espuma cítrica de gengibre.", tags: ["🍓 Frutado"], img: PlaceHolderImages.find(i => i.id === 'caipirinha')?.imageUrl },
    { id: 11, name: "Gin do Cerrado", desc: "Gin artesanal com infusão de especiarias locais.", tags: ["🌿 Botânico"], img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800" },
  ],
  sobremesas: [
    { id: 12, name: "Romeu e Julieta Quente", desc: "Queijo Minas grelhado com goiabada cascão derretida.", tags: ["🧀 Queijo Real"], img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800" },
  ]
};

export default function MenuPage() {
  const WHATSAPP_NUMBER = "5531988887777";

  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden mb-12">
          <Image 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" 
            alt="Gastronomia Mineira" 
            fill 
            className="object-cover opacity-40 grayscale" 
          />
          <div className="absolute inset-0 bg-trem-dark/60" />
          <div className="relative z-10 text-center px-4">
            <span className="font-script gold-text text-4xl animate-fade-in-up">Sabores que Viajam</span>
            <h1 className="font-display text-5xl md:text-8xl font-bold text-white mt-4 uppercase tracking-tighter animate-fade-in-up">CARDÁPIO</h1>
            <div className="h-1 w-24 bg-trem-gold mx-auto mt-6" />
            <p className="text-foreground/60 mt-6 max-w-lg mx-auto italic">"Ingredientes frescos, receitas de família e a alma de Minas Gerais em cada prato."</p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <Tabs defaultValue="entradas" className="w-full">
            <TabsList className="flex flex-wrap h-auto bg-transparent border-b border-trem-gold/10 rounded-none mb-16 gap-2 md:gap-8 justify-center overflow-x-auto">
              {Object.keys(MENU_DATA).map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-trem-gold data-[state=active]:bg-transparent data-[state=active]:text-trem-gold text-xs md:text-lg uppercase tracking-[0.2em] font-bold py-6 transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(MENU_DATA).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0 outline-none">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {items.map((item) => (
                    <Card key={item.id} className="bg-trem-brown/30 border-trem-gold/10 group hover:border-trem-gold transition-all overflow-hidden flex flex-col">
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image 
                          src={item.img || "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800"} 
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {item.badge && (
                          <div className="absolute top-4 right-4 bg-trem-gold text-white text-[9px] font-bold px-3 py-1 uppercase tracking-widest shadow-xl">
                            {item.badge}
                          </div>
                        )}
                      </div>
                      <CardContent className="p-8 flex flex-col flex-1">
                        <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-trem-gold transition-colors">{item.name}</h3>
                        <p className="text-foreground/60 text-sm mb-6 flex-1 leading-relaxed">{item.desc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-trem-dark/50 border border-trem-gold/20 px-2 py-1 text-foreground/40">{tag}</span>
                          ))}
                        </div>
                        
                        <a 
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de pedir o prato: ${item.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-4 border border-trem-gold/30 bg-trem-gold/5 text-trem-gold hover:bg-trem-gold hover:text-white transition-all text-[10px] uppercase font-bold tracking-[0.2em]"
                        >
                          <Phone size={14} />
                          Pedir pelo WhatsApp
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <section className="mt-24 p-12 bg-trem-brown/40 border border-trem-gold/20 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-trem-gold opacity-5 group-hover:opacity-10 transition-opacity">
              <Users size={200} />
            </div>
            <span className="font-script gold-text text-3xl">Sugestão do Maquinista</span>
            <h2 className="font-display text-4xl font-bold text-white mt-4 mb-8">MONTE SEU COMBO</h2>
            <p className="text-foreground/60 max-w-lg mx-auto mb-10">
              Combine Entrada + Prato Principal + Bebida e ganhe uma mini sobremesa da casa. Ideal para quem quer a experiência completa.
            </p>
            <Button asChild size="lg" className="bg-trem-gold hover:bg-trem-gold/90 text-white font-bold rounded-none px-12 py-8 uppercase tracking-widest border-b-4 border-r-4 border-black/30">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de montar um combo no Trem Bar.`}>MONTAR MEU COMBO</a>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
