"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  MoreVertical,
} from "lucide-react";
import type { OrdersTableProps } from "@/types";

export function OrdersTable({ data }: OrdersTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");

  // Filter data based on active tab
  const getFilteredData = () => {
    if (activeTab === "all") return data;
    if (activeTab === "completed")
      return data.filter((item) => item.status === "Delivered");
    if (activeTab === "pending")
      return data.filter((item) => item.status === "Pending");
    if (activeTab === "canceled")
      return data.filter((item) => item.status === "Cancelled");
    return data;
  };

  const filteredData = getFilteredData();

  return (
    <Card className="p-0 border-[#D1D5DB]">
      {/* Tabs */}
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <div className="p-4 pb-3 border-b border-[#D1D5DB]">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Custom Tabs - Similar to WeeklyReport */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                  activeTab === "all"
                    ? "bg-white shadow-sm "
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All order <span className="text-muted-foreground">(240)</span>
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                  activeTab === "completed"
                    ? "bg-white shadow-sm "
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveTab("pending")}
                className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                  activeTab === "pending"
                    ? "bg-white shadow-sm "
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveTab("canceled")}
                className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                  activeTab === "canceled"
                    ? "bg-white shadow-sm "
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Canceled
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search order report"
                  className="pl-9 w-60"
                />
              </div>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="size-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ArrowUpDown className="size-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MoreVertical className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        <TabsContent value={activeTab} className="m-0">
          <div className="overflow-x-auto px-6">
            <Table>
              <TableHeader className="[&_tr]:border-0 bg-[#EAF8E7] ">
                <TableRow>
                  <TableHead className="w-16 py-4 rounded-l-xl px-4">
                    No.
                  </TableHead>
                  <TableHead className="w-20 py-4 ">Order Id</TableHead>
                  <TableHead className="ps-8">Product</TableHead>
                  <TableHead className="w-32 py-4 ">Date</TableHead>
                  <TableHead className="w-24 py-4 ">Price</TableHead>
                  <TableHead className="w-32 py-4 ">Payment</TableHead>
                  <TableHead className="w-28 py-4 ">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="[&_tr]:h-16 [&_tr]:border-b  ">
                {filteredData.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-4">{index + 1}</TableCell>
                    <TableCell className="px-4">{order.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3 ps-5">
                        <div className="size-8 flex items-center justify-center text-xl">
                          {order.product.icon}
                        </div>
                        <span>{order.product.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {order.date}
                    </TableCell>
                    <TableCell className="px-4">{order.price}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`size-2 rounded-full ${
                            order.payment.isPaid
                              ? "bg-[#4EA674]"
                              : "bg-destructive"
                          }`}
                        />
                        <span>{order.payment.status}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div
                        className={`flex items-center gap-2 text-[13px] ${
                          order.status === "Delivered"
                            ? "text-[#4EA674]"
                            : order.status === "Pending"
                            ? "text-orange-500"
                            : order.status === "Shipped"
                            ? "text-muted-foreground"
                            : "text-destructive"
                        }`}
                      >
                        {order.status === "Delivered" && (
                          <svg
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        )}
                        {order.status === "Pending" && (
                          <svg
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {order.status === "Shipped" && (
                          <svg
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-6m4 6v-6m10 6a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-6m4 6v-6" />
                          </svg>
                        )}
                        {order.status === "Cancelled" && (
                          <svg
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span>{order.status}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-4 border-t">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.max(1, prev - 1));
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 2}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(2);
                }}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 3}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(3);
                }}
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 4}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(4);
                }}
              >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 5}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(5);
                }}
              >
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 24}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(24);
                }}
              >
                24
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.min(24, prev + 1));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Card>
  );
}
