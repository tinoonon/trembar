
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Cardápio", href: "/cardapio" },
    { name: "Eventos", href: "/eventos" },
    { name: "Galeria", href: "/galeria" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-primary/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Desktop Nav Left */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end mr-12">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wider uppercase gold-glow"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group">
          <div className="relative">
            <UtensilsCrossed className="h-10 w-10 text-white mb-1 group-hover:scale-110 transition-transform" />
            <div className="absolute -bottom-1 -left-4 -right-4 h-[2px] bg-primary/50 rounded-full" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter text-white">TREM BAR</span>
          <span className="font-script text-primary text-sm -mt-1">Gastronomia</span>
        </Link>

        {/* Desktop Nav Right */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-start ml-12">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wider uppercase gold-glow"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-none border-b-2 border-r-2 border-primary-foreground/20">
            <Link href="/reservas">RESERVAR</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-display text-white hover:text-primary"
          >
            {link.name}
          </Link>
        ))}
        <Button asChild className="mt-4" onClick={() => setMobileMenuOpen(false)}>
          <Link href="/reservas">Fazer Reserva</Link>
        </Button>
      </div>
    </header>
  );
}
