import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MoreVertical, Plus } from "lucide-react";
import type { PaymentCard } from "@/types";

type PaymentMethodCardProps = {
  card: PaymentCard;
};

export default function PaymentMethodCard({ card }: PaymentMethodCardProps) {
  return (
    <Card className="border-[#E5E7EB]">
      <CardHeader className="flex flex-row items-center justify-between ">
        <CardTitle className="text-base font-semibold text-[#111827]">
          Payment Method
        </CardTitle>
        <button className="text-[#6B7280] hover:text-[#111827]">
          <MoreVertical className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Credit Card */}
        <div className="flex gap-8 flex-col sm:flex-row sm:items-center ">
          <div
            className="relative w-[280px] h-[172px]  rounded-2xl p-6 text-white overflow-hidden"
            style={{
              backgroundImage: "url('/src/assets/images/card.svg')",
              backgroundSize: "cover",
            }}
          >
            {/* Card overlay for better text visibility */}
            <div className="absolute inset-0 bg-linear-to-br from-[#4EA674]/20 to-transparent" />

            {/* Card Content */}
            <div className="relative h-full flex flex-col justify-between">
              {/* Top Section - Logo and Switch */}
              <div className="flex items-start justify-between">
                <div className="text-sm font-bold">Finacil</div>
                <Switch
                  defaultChecked
                  className="data-[state=checked]:bg-white"
                />
              </div>

              {/* Middle Section - Card Number */}
              <div className="text-sm  tracking-wider">
                •••• •••• •••• {card.cardNumber}
              </div>

              {/* Bottom Section - Card Details */}
              <div className="flex items-end justify-between text-sm">
                <div>
                  <div className="text-[10px] opacity-80 mb-1">
                    Card Holder Name
                  </div>
                  <div className="font-medium">{card.cardHolder}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-80 mb-1">Expiry Date</div>
                  <div className="font-medium">{card.expiryDate}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Info */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6B7280]">Status:</span>
              <span className="font-medium text-[#4EA674]">{card.status}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6B7280]">Transactions:</span>
              <span className="font-medium text-[#111827]">
                {card.transactions.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6B7280]">Revenue:</span>
              <span className="font-medium text-[#111827]">{card.revenue}</span>
            </div>
            <button className="text-sm text-[#4EA674] hover:underline">
              View Transactions
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <Button
            variant="outline"
            className="flex-1 border-[#E5E7EB] text-[#374151]"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Card
          </Button>
          <Button
            variant="outline"
            className="border-red-200 text-red-500 hover:bg-red-50"
          >
            Deactivate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
