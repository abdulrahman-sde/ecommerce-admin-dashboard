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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 bg-fade-green rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                activeTab === tab.id
                  ? "bg-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}{" "}
              <span className="text-muted-foreground">({tab.count})</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input placeholder="Search your product" className="pl-9 w-60" />
          </div>
          <Button className="border-neutral-300" variant="outline" size="icon">
            <SlidersHorizontal className="size-4" />
          </Button>
          <Button size="icon" className="bg-[#4EA674] hover:bg-[#3d8a5e]">
            <Plus className="size-4" />
          </Button>
          <Button className="border-neutral-300" variant="outline" size="icon">
            <MoreVertical className="size-4" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="[&_tr]:border-0 bg-[#EAF8E7]">
            <TableRow>
              <TableHead className="w-16 py-4 rounded-l-xl px-4">No.</TableHead>
              <TableHead className="ps-8">Product</TableHead>
              <TableHead className="w-32 py-4">Inventory</TableHead>
              <TableHead className="w-24 py-4">Price</TableHead>
              <TableHead className="w-28 py-4 text-right rounded-r-xl px-4">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr]:h-16 [&_tr]:border-b">
            {currentProducts.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell className="px-4">{startIndex + index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 ps-5">
                    <div className="size-8 flex items-center justify-center text-xl">
                      {product.image}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{product.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {product.inventory}
                </TableCell>
                <TableCell className="px-4">{product.price}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2 px-4">
                    <button className="p-1.5 hover:bg-muted rounded transition-colors">
                      <Edit className="size-4 text-muted-foreground" />
                    </button>
                    <button className="p-1.5 hover:bg-muted rounded transition-colors">
                      <Trash2 className="size-4 text-muted-foreground" />
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
