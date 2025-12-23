"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { OrdersTableSkeleton } from "@/components/shared/skeletons";
import type { OrderListItem, OrderStatus } from "@/types/orders.types";

interface OrdersTableProps {
  data: OrderListItem[];
  currentPage: number;
  totalPages: number;
  totalOrders: number;
  pages: (number | string)[];
  onPageChange: (page: number) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  isLoading?: boolean;
  statusCounts?: {
    all: number;
    completed: number;
    pending: number;
    cancelled: number;
  };
}

export function OrdersTable({
  data,
  currentPage,
  totalPages,
  totalOrders,
  pages,
  onPageChange,
  activeTab,
  onTabChange,
  search,
  onSearchChange,
  isLoading,
  statusCounts,
}: OrdersTableProps) {
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case "DELIVERED":
        return (
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        );
      case "PENDING":
        return (
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "SHIPPED":
      case "PROCESSING":
        return (
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-6m4 6v-6m10 6a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-6m4 6v-6" />
          </svg>
        );
      case "CANCELED":
        return (
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "DELIVERED":
        return "text-[#4EA674]";
      case "PENDING":
        return "text-orange-500";
      case "SHIPPED":
      case "PROCESSING":
        return "text-muted-foreground";
      case "CANCELED":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const formatStatus = (status: OrderStatus) => {
    if (!status) return "N/A";
    return status.charAt(0) + status.slice(1).toLowerCase();
  };

  return (
    <Card className="p-0 border-[#D1D5DB]">
      {/* Tabs */}
      <Tabs defaultValue="all" value={activeTab} onValueChange={onTabChange}>
        <div className="p-4 pb-3 border-b border-[#D1D5DB]">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Standard Radix Tabs */}
            <TabsList className="h-auto p-1 bg-fade-green rounded-lg border-none">
              <TabsTrigger
                value="all"
                className="px-4 py-1.5 text-sm z-30 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
              >
                All order
                <span className="text-primary ml-1">
                  ({statusCounts?.all ?? totalOrders})
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="px-4 py-1.5 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
              >
                Completed{" "}
                <span className="text-primary ml-1">
                  ({statusCounts?.completed ?? 0})
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="px-4 py-1.5 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
              >
                Pending{" "}
                <span className="text-primary ml-1">
                  ({statusCounts?.pending ?? 0})
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="canceled"
                className="px-4 py-1.5 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
              >
                Canceled{" "}
                <span className="text-primary ml-1">
                  ({statusCounts?.cancelled ?? 0})
                </span>
              </TabsTrigger>
            </TabsList>

            {/* Search and Filter */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search order report"
                  className="pl-9 w-60"
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="border-neutral-300"
                size="icon"
              >
                <SlidersHorizontal className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="border-neutral-300"
                size="icon"
              >
                <ArrowUpDown className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="border-neutral-300"
                size="icon"
              >
                <MoreVertical className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        <TabsContent value={activeTab} className="m-0">
          <div className="overflow-x-auto px-6">
            <Table className="min-w-[1000px] table-fixed">
              <TableHeader className="[&_tr]:border-0 text-table-header bg-[#EAF8E7]">
                <TableRow>
                  <TableHead className="w-[5%] py-4 rounded-l-xl px-6">
                    No.
                  </TableHead>
                  <TableHead className="w-[15%]">Order Id</TableHead>
                  <TableHead className="w-[25%] ps-8">Product</TableHead>
                  <TableHead className="w-[15%] text-center">Date</TableHead>
                  <TableHead className="w-[10%] text-center">Price</TableHead>
                  <TableHead className="w-[15%] text-center">Payment</TableHead>
                  <TableHead className="w-[15%] rounded-r-xl text-center">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="[&_tr]:h-16 [&_tr]:border-b text-[#131523]">
                {isLoading ? (
                  <OrdersTableSkeleton rows={8} />
                ) : data.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8">
                      No orders found
                    </TableCell>
                  </TableRow>
                ) : (
                  data.map((order, index) => (
                    <TableRow
                      key={order.id}
                      className="h-16 hover:bg-gray-50/50"
                    >
                      <TableCell className="px-8 w-[5%] text-muted-foreground">
                        {(currentPage - 1) * 10 + index + 1}
                      </TableCell>
                      <TableCell className="px-4 font-medium w-[15%] truncate">
                        {order.orderNumber}
                      </TableCell>
                      <TableCell className="w-[25%]">
                        <div className="ps-5 flex items-center gap-2">
                          {order.items && order.items.length > 0 ? (
                            <>
                              <span className="shrink-0">
                                <img
                                  src={
                                    order.items[0].productImage ||
                                    "https://via.placeholder.com/48?text=No+Img"
                                  }
                                  alt=""
                                  className="w-12 h-12 object-cover rounded-lg"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                      "https://via.placeholder.com/48?text=No+Img";
                                  }}
                                />
                              </span>
                              <div className="overflow-hidden">
                                <p className="font-medium line-clamp-1">
                                  {order.items[0].productName}
                                </p>
                                {order.items.length > 1 && (
                                  <p className="text-xs text-muted-foreground">
                                    + {order.items.length - 1} more items
                                  </p>
                                )}
                              </div>
                            </>
                          ) : (
                            <p className="text-muted-foreground italic">
                              No items
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground w-[15%]">
                        {order.createdAt
                          ? new Date(order.createdAt).toLocaleDateString()
                          : "N/A"}
                      </TableCell>
                      <TableCell className="px-4 font-medium text-center w-[10%]">
                        ${order.totalAmount?.toFixed(2) ?? "0.00"}
                      </TableCell>
                      <TableCell className="w-[15%]">
                        <div className="flex items-center justify-center gap-2">
                          <div
                            className={`size-2 rounded-full ${
                              order.paymentStatus === "PAID"
                                ? "bg-[#4EA674]"
                                : order.paymentStatus === "REFUNDED"
                                ? "bg-orange-500"
                                : "bg-destructive"
                            }`}
                          />
                          <span>
                            {order.paymentStatus === "PAID"
                              ? "Paid"
                              : order.paymentStatus === "REFUNDED"
                              ? "Refunded"
                              : order.paymentStatus === "PENDING"
                              ? "Pending"
                              : "Unpaid"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="w-[15%]">
                        <div
                          className={`flex items-center justify-center gap-2 text-[13px] ${getStatusColor(
                            order.fulfillmentStatus
                          )}`}
                        >
                          {getStatusIcon(order.fulfillmentStatus)}
                          <span>{formatStatus(order.fulfillmentStatus)}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
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
                  if (currentPage > 1) {
                    onPageChange(currentPage - 1);
                  }
                }}
              />
            </PaginationItem>
            {pages.map((page, index) =>
              page === "..." ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(page as number);
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) {
                    onPageChange(currentPage + 1);
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Card>
  );
}
