
"use client";

import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function WhatsappFloat() {
  const WHATSAPP_NUMBER = "5531988887777"; // Substituir pelo número real do Instagram @trembaroficial

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de falar com o Trem Bar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
            >
              <MessageCircle size={32} />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-trem-brown border-trem-gold text-white font-bold">
            Fale conosco!
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
