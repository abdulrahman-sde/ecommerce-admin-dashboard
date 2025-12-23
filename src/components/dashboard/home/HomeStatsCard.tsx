import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  subtitle?: string;
  value: string | number;
  label?: string;
  change?: {
    value: string;
    isPositive: boolean;
  };
  previousValue?: string;
  showDetailsButton?: boolean;
  onDetailsClick?: () => void;
  className?: string;
}

export function StatsCard({
  title,
  subtitle = "Last 7 days",
  value,
  label,
  change,
  previousValue,
  onDetailsClick,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn("relative px-2 py-5 gap-1", className)}>
      <CardHeader className="flex flex-row items-center justify-between px-4 pb-5 -mb-2">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-[15.5px] font-semibold">{title}</h3>
          <p className="text-[13.5px] text-neutral-500">{subtitle}</p>
        </div>
      </CardHeader>
      <CardContent className="px-4 ">
        <div className="flex items-center flex-row gap-3">
          <h1 className="text-[27.5px] font-bold leading-tight">{value}</h1>
          <div className="flex items-baseline">
            {label && <span className="text-[16.5px]">{label}</span>}
            {change && (
              <div
                className={cn(
                  "ml-1.5 flex flex-col xl:flex-row items-center text-[13.5px]",
                  change.isPositive ? "text-rise" : "text-destructive"
                )}
              >
                {change.isPositive ? (
                  <ArrowUp size={15} className="hidden xl:block" />
                ) : (
                  <ArrowDown size={15} className="hidden xl:block" />
                )}
                {change.value}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          {previousValue && (
            <p className="text-[14.5px] mt-1 text-muted-foreground">
              Previous 7days
              <span className="text-tertiary font-bold ms-1.5">
                ({previousValue})
              </span>
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={onDetailsClick}
            className="text-tertiary justify-self-end h-[30px] w-[88px] border-[1.5px] text-[15.5px] border-tertiary hover:bg-tertiary/10 rounded-full bg-transparent mt-5"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
