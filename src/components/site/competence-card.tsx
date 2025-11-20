import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Layers } from "lucide-react";

interface CompetenceCardProps {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

export function CompetenceCard({ title, items, icon }: CompetenceCardProps) {
  return (
    <Card className="layer-card group border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                {icon}
              </div>
            )}
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          {/* Layer toggle indicator */}
          <div className="layer-toggle text-primary/40 transition-colors group-hover:text-primary">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className="space-y-2.5">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/70" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        {/* Subtle layer count badge */}
        <div className="mt-4 pt-3 border-t border-border/30">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Layers className="h-3.5 w-3.5" />
            <span>{items.length} capabilities</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
