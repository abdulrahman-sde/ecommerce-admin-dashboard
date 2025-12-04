"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Plus } from "lucide-react";
import type { AddNewProductProps } from "@/types";

export default function AddNewProduct({ data }: AddNewProductProps) {
  return (
    <Card className="shadow-sm border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <h3 className="font-semibold">Add New Product</h3>
        <button className="text-primary text-sm hover:underline flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add New
        </button>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Categories Section */}
        <div>
          <p className="text-[13px] text-muted-foreground mb-3">Categories</p>
          <div className="space-y-2">
            {data.categories.map((category, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    {category.icon ? (
                      <img
                        src={category.icon}
                        alt={category.name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-muted/50 rounded" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            ))}
          </div>
          <button className="text-primary text-sm hover:underline mt-3">
            See more
          </button>
        </div>

        {/* Products Section */}
        <div>
          <p className="text-[13px] text-muted-foreground mb-3">Product</p>
          <div className="space-y-3">
            {data.products.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
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
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-[13px] text-muted-foreground">
                      {product.price}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/90 rounded-full h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <button className="text-primary text-sm hover:underline mt-3">
            See more
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
