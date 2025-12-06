"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter } from "lucide-react";
import type { BestSellingProductProps } from "@/types";

export default function BestSellingProduct({ data }: BestSellingProductProps) {
  return (
    <Card className="shadow-sm border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-4 ">
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
        <div className="overflow-x-auto">
          <Table className="border-separate border-spacing-y-2">
            <TableHeader className="[&_tr]:border-0 bg-[#EAF8E7] rounded-lg  ">
              <TableRow className="hover:bg-transparent">
                <TableHead className="rounded-tl-lg rounded-bl-lg py-4 px-4">
                  Product
                </TableHead>
                <TableHead className="text-center py-4">Total Order</TableHead>
                <TableHead className="text-center py-4">Status</TableHead>
                <TableHead className="text-right rounded-tr-lg  px-4 rounded-br-lg py-4">
                  Price
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {data.products.map((product, index) => (
                <TableRow
                  key={index}
                  className={
                    index === data.products.length - 1
                      ? "[&>td:first-child]:rounded-bl-lg [&>td:last-child]:rounded-br-lg"
                      : ""
                  }
                >
                  <TableCell>
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
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {product.totalOrder}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          product.status === "Stock"
                            ? "bg-[#4EA674]"
                            : "bg-destructive"
                        }`}
                      />
                      <span>{product.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold text-right">
                    {product.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
