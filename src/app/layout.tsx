
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WhatsappFloat } from "@/components/ui/whatsapp-float";
import { BackToTop } from "@/components/ui/back-to-top";

export const metadata: Metadata = {
  title: 'Trem Bar Gastronomia | Cozinha Artesanal Mineira — Lagoa Santa',
  description: 'Chopes gelados, drinks autorais e a alma de Minas em cada prato no Mercadão de Lagoa Santa. Experiência rústica e elegante inspirada nas antigas estações ferroviárias.',
  openGraph: {
    title: 'Trem Bar Gastronomia',
    description: 'Cozinha Artesanal Mineira no coração de Lagoa Santa.',
    images: ['https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=1200'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <div id="scroll-progress"></div>
        {children}
        <WhatsappFloat />
        <BackToTop />
        <Toaster />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.onscroll = function() {
              var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
              var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              var scrolled = (winScroll / height) * 100;
              document.getElementById("scroll-progress").style.width = scrolled + "%";
            };
          `
        }} />
      </body>
    </html>
  );
}
