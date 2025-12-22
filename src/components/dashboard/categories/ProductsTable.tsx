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
  Search,
  SlidersHorizontal,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ProductTableSkeleton } from "@/components/shared/ProductTableSkeleton";
import { useProducts } from "@/hooks/products/useProducts";

export default function ProductsTable() {
  const {
    data,
    isFetching,
    currentPage,
    pages,
    tabs,
    activeTab,
    setActiveTab,
    setCurrentPage,
  } = useProducts();
  console.log(data);

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 bg-fade-green rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentPage(1);
              }}
              className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                activeTab === tab.id
                  ? "bg-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              <span className="text-muted-foreground">
                ({data?.meta[tab.id]})
              </span>
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
          <TableHeader className="[&_tr]:border-0 bg-[#EAF8E7] min-w-screen">
            <TableRow>
              <TableHead className="w-16 py-4 rounded-l-xl ps-8">No.</TableHead>
              <TableHead className="ps-8">Product</TableHead>
              <TableHead className="w-32 py-4">Inventory</TableHead>
              <TableHead className="w-24 py-4">Price</TableHead>
              <TableHead className="w-28 py-4 text-right rounded-r-xl px-4 pr-8">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr]:h-16 [&_tr]:border-b">
            {isFetching ? (
              <ProductTableSkeleton />
            ) : (
              <>
                {data?.data.map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell className="px-8">{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3 ps-5">
                        <div className="size-8 flex items-center justify-center text-xl">
                          <img src={product.images[0]} alt="" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            {product.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {product.category.name}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {product.stockQuantity}
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
              </>
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                !data?.pagination.hasPrevPage
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
              onClick={() => setCurrentPage(currentPage - 1)}
            />
          </PaginationItem>
          {pages.map((page, idx) => (
            <PaginationItem key={idx}>
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={currentPage === page}
                  onClick={() => setCurrentPage(page as number)}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage(currentPage + 1)}
              className={
                !data?.pagination.hasNextPage
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
