import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
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
  Plus,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react";
import type { ProductListItem } from "@/types";

const ITEMS_PER_PAGE = 10;

type ProductsTableProps = {
  products: ProductListItem[];
};

export default function ProductsTable({ products }: ProductsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const tabs = [
    { id: "all", label: "All Product", count: 145 },
    { id: "featured", label: "Featured Products", count: 0 },
    { id: "sale", label: "On Sale", count: 0 },
    { id: "out-of-stock", label: "Out of Stock", count: 0 },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-[#E5E7EB]">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-[#4EA674]"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              {tab.label}{" "}
              <span
                className={
                  activeTab === tab.id ? "text-[#4EA674]" : "text-[#9CA3AF]"
                }
              >
                ({tab.count})
              </span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4EA674]" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
            <Input
              placeholder="Search your product"
              className="pl-10 w-64 border-[#E5E7EB] text-sm"
            />
          </div>
          <Button variant="outline" size="icon" className="border-[#E5E7EB]">
            <SlidersHorizontal className="h-4 w-4 text-[#6B7280]" />
          </Button>
          <Button size="icon" className="bg-[#4EA674] hover:bg-[#3d8a5e]">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="border-[#E5E7EB]">
            <MoreVertical className="h-4 w-4 text-[#6B7280]" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-[#E5E7EB] rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#D5F6E3] hover:bg-[#D5F6E3] border-b border-[#E5E7EB]">
              <TableHead className="text-[#111827] font-medium w-16">
                No.
              </TableHead>
              <TableHead className="text-[#111827] font-medium">
                Product
              </TableHead>
              <TableHead className="text-[#111827] font-medium">
                Created Date
              </TableHead>
              <TableHead className="text-[#111827] font-medium">
                Order
              </TableHead>
              <TableHead className="text-[#111827] font-medium text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProducts.map((product) => (
              <TableRow
                key={product.id}
                className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB]"
              >
                <TableCell className="text-[#6B7280] text-sm font-normal">
                  1
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center text-xl shrink-0">
                      {product.icon}
                    </div>
                    <span className="text-sm text-[#111827] font-normal">
                      {product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-[#6B7280] text-sm font-normal">
                  {product.createdDate}
                </TableCell>
                <TableCell className="text-[#6B7280] text-sm font-normal">
                  {product.order}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors">
                      <Edit className="h-4 w-4 text-[#6B7280]" />
                    </button>
                    <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors">
                      <Trash2 className="h-4 w-4 text-[#6B7280]" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
          {[...Array(Math.min(5, totalPages))].map((_, i) => {
            const pageNum = i + 1;
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  onClick={() => setCurrentPage(pageNum)}
                  isActive={currentPage === pageNum}
                  className={
                    currentPage === pageNum
                      ? "bg-[#4EA674] text-white hover:bg-[#4EA674] hover:text-white"
                      : "cursor-pointer"
                  }
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          {totalPages > 5 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(totalPages)}
                  className="cursor-pointer"
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
