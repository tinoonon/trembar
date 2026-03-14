
"use client";

import { useEffect, useState } from "react";
import { ArrowUp, TrainFront } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-trem-brown border border-trem-gold text-trem-gold shadow-lg transition-all duration-300 hover:bg-trem-gold hover:text-white",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      <div className="relative">
        <TrainFront size={20} className="mb-1" />
        <ArrowUp size={12} className="absolute -top-1 -right-1" />
      </div>
    </button>
  );
}
