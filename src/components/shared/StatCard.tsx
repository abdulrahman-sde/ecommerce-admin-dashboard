import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  subtitle = "Last 7 days",
  change,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("shadow-sm border-0 px-2 py-4", className)}>
      <CardHeader className="flex flex-row items-start justify-between px-4 pb-2">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-[15.5px] font-semibold">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <h1 className="text-[27.5px] font-bold leading-tight">{value}</h1>
            {change && (
              <div
                className={cn(
                  "flex items-center gap-0.5 text-[13.5px] font-medium self-end mb-1",
                  change.isPositive ? "text-rise" : "text-destructive"
                )}
              >
                {change.isPositive ? (
                  <ArrowUp className="h-4 w-4" />
                ) : (
                  <ArrowDown className="h-4 w-4" />
                )}
                <span>{change.value}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-0">
        <p className="text-[13.5px] text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
