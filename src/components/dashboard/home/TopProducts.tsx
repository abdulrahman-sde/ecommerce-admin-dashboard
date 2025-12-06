"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { TopProductsProps } from "@/types";

export default function TopProducts({ data }: TopProductsProps) {
  return (
    <Card className="shadow-sm border-0 pb-3">
      <CardHeader className="flex flex-row items-center justify-between ">
        <h3 className="font-semibold">Top Products</h3>
        <button className="text-primary text-sm hover:underline">
          All product
        </button>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 bg-background"
          />
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {data.products.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-4 border-b border-[#D1D1D1] "
            >
              <div className="flex items-center gap-3">
                {/* Product Image */}
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
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
                {/* Product Info */}
                <div>
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-[13px] text-muted-foreground">
                    Item: {product.itemCode}
                  </p>
                </div>
              </div>
              {/* Price */}
              <p className="text-sm font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
