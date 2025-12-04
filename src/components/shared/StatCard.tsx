import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUp, ArrowDown, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: {
    value: string;
    isPositive: boolean;
  };
  showMenu?: boolean;
  className?: string;
}

export function StatCard({
  title,
  value,
  subtitle = "Last 7 days",
  change,
  showMenu = true,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("shadow-sm border-0", className)}>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div className="space-y-1">
          <h3 className="text-sm font-normal">{title}</h3>
          {change && (
            <div className="flex items-center gap-1">
              <h2 className="text-2xl font-semibold">{value}</h2>
              <div
                className={cn(
                  "flex items-center gap-0.5 text-sm",
                  change.isPositive ? "text-[#4EA674]" : "text-destructive"
                )}
              >
                {change.isPositive ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                <span>{change.value}</span>
              </div>
            </div>
          )}
          {!change && <h2 className="text-2xl font-semibold">{value}</h2>}
        </div>
        {showMenu && (
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-[13px] text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
