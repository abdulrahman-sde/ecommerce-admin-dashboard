import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowDown, ArrowUp, MoreVertical } from "lucide-react";
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
    <Card className={cn("relative", className)}>
      <CardHeader className="flex flex-row items-center justify-between -mb-2 ">
        <div className="flex flex-col gap-1">
          <h3 className="">{title}</h3>
          <p className="text-[14px] text-neutral-500">{subtitle}</p>
        </div>
      </CardHeader>
      <CardContent className="">
        <div className="flex items-center flex-row gap-4">
          <h1>{value}</h1>
          <div className="flex">
            {label && <span className="text-[17px]">{label}</span>}
            {change && (
              <div
                className={cn(
                  "ml-2 flex flex-row items-center",
                  change.isPositive ? "text-rise" : "text-destructive"
                )}
              >
                {change.isPositive ? (
                  <ArrowUp size={18} />
                ) : (
                  <ArrowDown size={18} />
                )}
                {change.value}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          {previousValue && (
            <p className="text-[15px] mt-0.5 text-muted-foreground">
              Previous 7days
              <span className="text-tertiary font-bold ms-2">
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
            className="text-tertiary justify-self-end h-[32px] w-[96px] py-4 px-4  border-[1.5px] text-[16px] border-tertiary hover:bg-tertiary/10 rounded-full  bg-transparent mt-4 "
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
