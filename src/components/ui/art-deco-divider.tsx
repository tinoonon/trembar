
import { cn } from "@/lib/utils";

export function ArtDecoDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4 py-8", className)}>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-primary/60 to-transparent" />
      <div className="flex gap-1 rotate-45">
        <div className="w-2 h-2 bg-primary border border-white/20" />
        <div className="w-2 h-2 bg-primary border border-white/20" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
    </div>
  );
}
