"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import type { RecentTransactionsProps } from "@/types";

export default function RecentTransactions({ data }: RecentTransactionsProps) {
  return (
    <Card className="shadow-sm border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <h3 className="font-semibold">Transaction</h3>
        <Button
          variant="default"
          size="sm"
          className="bg-primary text-white hover:bg-primary/90 gap-2"
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </CardHeader>

      <CardContent>
        {/* Table */}
        <div className="w-full">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 pb-3 border-b">
            <div className="text-[13px] font-normal text-muted-foreground">
              No
            </div>
            <div className="text-[13px] font-normal text-muted-foreground">
              Id Customer
            </div>
            <div className="text-[13px] font-normal text-muted-foreground">
              Order Date
            </div>
            <div className="text-[13px] font-normal text-muted-foreground">
              Status
            </div>
            <div className="text-[13px] font-normal text-muted-foreground text-right">
              Amount
            </div>
          </div>

          {/* Table Body */}
          <div className="space-y-4 mt-4">
            {data.transactions.map((transaction, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 items-center">
                <div className="text-sm">{transaction.no}.</div>
                <div className="text-sm font-medium">
                  {transaction.customerId}
                </div>
                <div className="text-sm text-muted-foreground">
                  {transaction.orderDate}
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      transaction.status === "Paid"
                        ? "bg-[#4EA674]"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span className="text-sm">{transaction.status}</span>
                </div>
                <div className="text-sm font-medium text-right">
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Button */}
        <div className="flex justify-end mt-6">
          <Button variant="outline" className="text-primary border-primary">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
