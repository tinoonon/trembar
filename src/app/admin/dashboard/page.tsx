
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, Utensils, MessageSquare, Users } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { name: "Reservas Pendentes", value: "12", icon: Train, color: "text-amber-500" },
    { name: "Itens no Cardápio", value: "48", icon: Utensils, color: "text-primary" },
    { name: "Novas Mensagens", value: "5", icon: MessageSquare, color: "text-blue-500" },
    { name: "Total Clientes", value: "842", icon: Users, color: "text-green-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold mb-2">Seja bem-vindo, Admin!</h1>
        <p className="text-slate-400">Gerencie a estação Trem Bar Gastronomia.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                {stat.name}
              </CardTitle>
              <stat.icon size={18} className={stat.color} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="font-display">Reservas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-slate-800 rounded-lg">
                  <div>
                    <div className="font-bold">João Silva</div>
                    <div className="text-xs text-slate-400">4 Pessoas • 12/05 às 20h</div>
                  </div>
                  <div className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase rounded-full">Pendente</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="font-display">Últimos Eventos</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-slate-800 rounded-lg">
                  <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center font-bold text-primary">
                    1{i}
                  </div>
                  <div>
                    <div className="font-bold">Noite do Jazz Mineiro</div>
                    <div className="text-xs text-slate-400">Próximo Sábado • 21h</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
