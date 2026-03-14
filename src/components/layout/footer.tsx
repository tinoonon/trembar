"use client";

import Link from "next/link";
import { Instagram, Facebook, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const WHATSAPP_NUMBER = "5531988887777";

  return (
    <footer className="bg-trem-dark border-t border-trem-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-bold text-white group flex items-center gap-2">
              TREM BAR
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Cozinha Artesanal Mineira no coração de Lagoa Santa. Onde a tradição encontra o charme das estações ferroviárias.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/trembaroficial" target="_blank" className="p-2 bg-trem-brown/50 border border-trem-gold/20 text-trem-gold hover:bg-trem-gold hover:text-white transition-all rounded-full"><Instagram size={18} /></a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="p-2 bg-trem-brown/50 border border-trem-gold/20 text-trem-gold hover:bg-trem-gold hover:text-white transition-all rounded-full"><MessageCircle size={18} /></a>
              <a href="#" className="p-2 bg-trem-brown/50 border border-trem-gold/20 text-trem-gold hover:bg-trem-gold hover:text-white transition-all rounded-full"><Facebook size={18} /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest gold-text text-sm">Navegação</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/" className="hover:text-trem-gold transition-colors">Início</Link></li>
              <li><Link href="/cardapio" className="hover:text-trem-gold transition-colors">Cardápio</Link></li>
              <li><Link href="/eventos" className="hover:text-trem-gold transition-colors">Eventos</Link></li>
              <li><Link href="/galeria" className="hover:text-trem-gold transition-colors">Galeria</Link></li>
              <li><Link href="/sobre" className="hover:text-trem-gold transition-colors">Nossa História</Link></li>
              <li><Link href="/contato" className="hover:text-trem-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest gold-text text-sm">Onde Estamos</h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="gold-text mt-1 shrink-0" /> 
                <span>Av. das Árvores, 290 - Jardim Ipê<br/>Lagoa Santa/MG (Mercadão)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="gold-text" /> 
                <span>(31) 98888-7777</span>
              </li>
              <li className="pt-2">
                <a 
                  href="https://goo.gl/maps/XYZ" 
                  target="_blank" 
                  className="text-[10px] font-bold uppercase tracking-widest text-trem-gold hover:underline"
                >
                  Ver no Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest gold-text text-sm">Parceiros</h4>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com/tavernademinas" target="_blank" className="text-xs text-foreground/40 hover:text-white transition-colors flex items-center gap-2">
                <div className="w-1 h-1 bg-trem-gold rounded-full" />
                @tavernademinas
              </a>
              <a href="https://instagram.com/anaue.licor" target="_blank" className="text-xs text-foreground/40 hover:text-white transition-colors flex items-center gap-2">
                <div className="w-1 h-1 bg-trem-gold rounded-full" />
                @anaue.licor
              </a>
              <a href="https://instagram.com/mercadaolagoasanta" target="_blank" className="text-xs text-foreground/40 hover:text-white transition-colors flex items-center gap-2">
                <div className="w-1 h-1 bg-trem-gold rounded-full" />
                @mercadaolagoasanta
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-8 text-center text-[10px] uppercase tracking-[0.2em] text-foreground/30">
          &copy; {new Date().getFullYear()} Trem Bar Gastronomia. Sabores que viajam no tempo.
        </div>
      </div>
    </footer>
  );
}
