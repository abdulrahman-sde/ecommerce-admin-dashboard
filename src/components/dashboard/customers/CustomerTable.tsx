"use client";

import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
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
import { MessageSquare, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CustomerTableProps } from "@/types";

export function CustomerTable({ data }: CustomerTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleRowClick = (customerId: string) => {
    // Remove # from customer ID or encode it
    const encodedId = encodeURIComponent(customerId);
    navigate(`/dashboard/customers/${encodedId}`);
  };

  return (
    <Card className="p-0 border-[#D1D5DB]">
      <div className="overflow-x-auto">
        <Table className="px-10">
          <TableHeader className="h-14">
            <TableRow className="bg-[#EAF8E7] hover:bg-[#EAF8E7]">
              <TableHead className="bg-[#EAF8E7] px-8">Customer Id</TableHead>
              <TableHead className="bg-[#EAF8E7] px-4">Name</TableHead>
              <TableHead className="bg-[#EAF8E7] px-4">Phone</TableHead>
              <TableHead className="bg-[#EAF8E7] px-4">Order Count</TableHead>
              <TableHead className="bg-[#EAF8E7] px-4">Total Spend</TableHead>
              <TableHead className="bg-[#EAF8E7] px-4">Status</TableHead>
              <TableHead className="bg-[#EAF8E7] px-4">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr]:h-14">
            {data.map((customer, index) => (
              <TableRow
                key={index}
                className="cursor-pointer"
                onClick={() => handleRowClick(customer.id)}
              >
                <TableCell className="font-medium px-8">
                  {customer.id}
                </TableCell>
                <TableCell className="px-4">{customer.name}</TableCell>
                <TableCell className="text-muted-foreground px-4">
                  {customer.phone}
                </TableCell>
                <TableCell className="text-center px-4">
                  {customer.orderCount}
                </TableCell>
                <TableCell className="font-medium px-4">
                  {customer.totalSpend.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-2 rounded-full ${
                        customer.status === "Active"
                          ? "bg-[#4EA674]"
                          : customer.status === "VIP"
                          ? "bg-yellow-500"
                          : "bg-destructive"
                      }`}
                    />
                    <span>{customer.status}</span>
                  </div>
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-4 border-t border-[#D1D5DB]">
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
