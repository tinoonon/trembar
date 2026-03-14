
"use client";

import { Header } from "@/components/layout/header";
import { ArtDecoDivider } from "@/components/ui/art-deco-divider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const MENU_DATA = {
  entradas: [
    { id: 1, name: "Torresmo de Rolo", desc: "Clássico mineiro, pele pururucada e carne macia.", badge: "Destaque", img: PlaceHolderImages.find(i => i.id === 'torresmo')?.imageUrl },
    { id: 2, name: "Pão de Queijo Recheado", desc: "Artesanal com queijo canastra e pernil desfiado.", badge: "Favorito", img: PlaceHolderImages.find(i => i.id === 'pao-de-queijo')?.imageUrl },
    { id: 3, name: "Pastéis de Angu", desc: "Mix de queijo canastra e carne seca (6 unid).", img: "https://images.unsplash.com/photo-1593504049359-74330189a055?q=80&w=800" },
  ],
  principais: [
    { id: 4, name: "Frango ao Molho Pardo", desc: "Receita tradicional mineira com frango caipira.", badge: "Tradicional", img: PlaceHolderImages.find(i => i.id === 'frango-molho-pardo')?.imageUrl },
    { id: 5, name: "Feijão Tropeiro Trem Bar", desc: "O autêntico tropeiro com lombo, ovo e couve.", badge: "Mais Pedido", img: PlaceHolderImages.find(i => i.id === 'feijao-tropeiro')?.imageUrl },
    { id: 6, name: "Costelinha de Porco", desc: "Assada lentamente com molho de goiabada picante.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" },
  ],
  bebidas: [
    { id: 7, name: "Chope Pilsen 500ml", desc: "Artesanal da casa, servido trincando.", badge: "Frio", img: PlaceHolderImages.find(i => i.id === 'chopp')?.imageUrl },
    { id: 8, name: "Caipirinha Clássica", desc: "Com cachaça artesanal envelhecida e limão.", img: PlaceHolderImages.find(i => i.id === 'caipirinha')?.imageUrl },
  ]
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-trem-dark">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 text-center mb-12">
          <span className="font-script gold-text text-4xl">Sabores de Minas</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 uppercase tracking-tighter">CARDÁPIO</h1>
          <ArtDecoDivider className="max-w-md mx-auto" />
          <p className="text-foreground/60 max-w-lg mx-auto mt-4">
            Uma seleção artesanal preparada com ingredientes frescos e a alma da gastronomia mineira.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <Tabs defaultValue="entradas" className="w-full">
            <TabsList className="flex flex-wrap h-auto bg-transparent border-b border-primary/20 rounded-none mb-12 gap-4 justify-center">
              {Object.keys(MENU_DATA).map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-lg uppercase tracking-widest font-bold py-4 transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(MENU_DATA).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => (
                    <Card key={item.id} className="bg-trem-brown/40 border-primary/10 group hover:border-trem-gold transition-all overflow-hidden flex flex-col">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image 
                          src={item.img || "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800"} 
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <h3 className="font-display text-xl font-bold text-white">{item.name}</h3>
                          {item.badge && (
                            <Badge className="bg-primary text-[10px] py-0">{item.badge}</Badge>
                          )}
                        </div>
                        <p className="text-foreground/60 text-sm mb-6 flex-1">{item.desc}</p>
                        
                        <a 
                          href={`https://wa.me/5531999999999?text=Olá, gostaria de consultar a disponibilidade do prato: ${item.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-primary hover:text-white transition-colors mt-auto"
                        >
                          <MessageCircle size={14} />
                          Consultar disponibilidade
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}
