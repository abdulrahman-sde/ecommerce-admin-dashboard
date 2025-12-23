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
    <Card className={cn("shadow-sm border-0", className)}>
      <CardHeader className="flex flex-row items-start justify-between ">
        <div className="space-y-2">
          <h3>{title}</h3>
          {change && (
            <div className="flex flex-wrap items-center gap-2">
              <h1>{value}</h1>
              <div
                className={cn(
                  "flex items-center gap-0.5 text-[14px] font-medium",
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
            </div>
          )}
          {/* {!change && <h2 className="text-2xl font-semibold">{value}</h2>} */}
        </div>
        {/* {showMenu && (
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>
        )} */}
      </CardHeader>
      <CardContent className="-mt-5">
        <p className="text-[14px] text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
