
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { LayoutDashboard, Utensils, Calendar, Image as ImageIcon, MessageSquare, LogOut, Train } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { name: "Cardápio", icon: Utensils, href: "/admin/cardapio" },
    { name: "Eventos", icon: Calendar, href: "/admin/eventos" },
    { name: "Reservas", icon: Train, href: "/admin/reservas" },
    { name: "Galeria", icon: ImageIcon, href: "/admin/galeria" },
    { name: "Mensagens", icon: MessageSquare, href: "/admin/mensagens" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-slate-950 text-slate-50 w-full">
        <Sidebar className="border-r border-slate-800 bg-slate-950">
          <SidebarHeader className="p-6 border-b border-slate-800">
            <div className="flex items-center gap-2 font-display text-xl font-bold text-primary">
              <Train size={24} />
              TREM BAR <span className="text-xs font-body font-normal text-slate-400">ADMIN</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                    <Link href={item.href} className="flex items-center gap-3 py-6">
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="mt-auto">
                <SidebarMenuButton asChild className="text-red-400 hover:bg-red-950/30">
                  <Link href="/" className="flex items-center gap-3 py-6">
                    <LogOut size={18} />
                    <span>Sair</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="bg-slate-950">
          <header className="h-16 border-b border-slate-800 flex items-center px-6 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-40">
            <SidebarTrigger className="text-slate-400" />
            <div className="ml-4 font-bold text-sm tracking-widest text-slate-500 uppercase">Painel de Controle</div>
          </header>
          <main className="p-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
