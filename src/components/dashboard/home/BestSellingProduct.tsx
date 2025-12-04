"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import type { BestSellingProductProps } from "@/types";

export default function BestSellingProduct({ data }: BestSellingProductProps) {
  return (
    <Card className="shadow-sm border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="font-semibold">Best selling product</CardTitle>
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
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 pb-3 bg-muted/50 px-4 py-2 rounded-t-lg">
          <div className="text-[13px] font-normal text-muted-foreground uppercase">
            Product
          </div>
          <div className="text-[13px] font-normal text-muted-foreground uppercase text-center">
            Total Order
          </div>
          <div className="text-[13px] font-normal text-muted-foreground uppercase text-center">
            Status
          </div>
          <div className="text-[13px] font-normal text-muted-foreground uppercase text-right">
            Price
          </div>
        </div>

        {/* Table Body */}
        <div className="space-y-4 mt-4">
          {data.products.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 items-center px-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted" />
                  )}
                </div>
                <span className="text-sm font-medium">{product.name}</span>
              </div>
              <div className="text-sm text-center">{product.totalOrder}</div>
              <div className="flex items-center justify-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    product.status === "Stock"
                      ? "bg-[#4EA674]"
                      : "bg-destructive"
                  }`}
                />
                <span className="text-sm">{product.status}</span>
              </div>
              <div className="text-sm font-semibold text-right">
                {product.price}
              </div>
            </div>
          ))}
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
