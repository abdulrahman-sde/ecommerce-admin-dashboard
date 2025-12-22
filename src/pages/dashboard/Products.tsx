import { useNavigate } from "react-router";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Save, Plus, AlertCircle } from "lucide-react";
import { ProductTableSkeleton } from "@/components/shared/ProductTableSkeleton";
import { useProducts } from "@/hooks/products/useProducts";

export default function Products() {
  const navigate = useNavigate();

  const {
    data,
    isFetching,
    isError,
    error,
    currentPage,
    pages,
    setCurrentPage,
  } = useProducts();

  return (
    <div className="space-y-6 px-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-[#111827]">Product List</h1>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
            <Input
              placeholder="Search products"
              className="pl-10 w-full sm:w-64 border-[#E5E7EB] text-sm"
            />
          </div>
          <Button
            className="bg-[#4EA674] hover:bg-[#3d8a5e] text-white"
            onClick={() => navigate("/dashboard/products/add")}
          >
            <Plus className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Add Product</span>
          </Button>
          <Button variant="outline" className="border-[#E5E7EB] hidden md:flex">
            <Save className="h-4 w-4 mr-2" />
            Save to draft
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-[#E5E7EB] hidden md:flex"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg overflow-hidden">
        <Table>
          <TableHeader className=" bg-white ">
            <TableRow className="[&_th]:pt-8 [&_th]:pb-3 text-[15px] font-medium text-muted-foreground">
              <TableHead className="w-12 ps-8">
                <Checkbox className="w-4.5 h-4.5 bg-white mr-2" />
              </TableHead>
              <TableHead className="">Product</TableHead>
              <TableHead className="">Inventory</TableHead>
              <TableHead className="">Color</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isFetching ? (
              <ProductTableSkeleton rows={10} />
            ) : isError ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  <div className="flex flex-col items-center justify-center text-red-500 gap-2">
                    <AlertCircle className="h-8 w-8" />
                    <p className="font-medium">Failed to load products</p>
                    <p className="text-sm text-muted-foreground">
                      {(error as any)?.data?.message || "Internal Server Error"}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              data?.data.map((product) => (
                <TableRow
                  key={product.id}
                  className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB] [&_td]:py-3 text-table-text-color"
                >
                  <TableCell className="ps-8">
                    <Checkbox className="w-4.5 h-4.5 bg-white mr-2" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-lg bg-[#F3F4F6] flex items-center justify-center overflow-hidden text-2xl shrink-0">
                        <img
                          src={product.images[0]}
                          alt=""
                          className="object-cover w-full h-full cursor-pointer "
                        />
                      </div>
                      <div>
                        <div className="text-[15px] font-medium ">
                          {product.name}
                        </div>
                        <div className="text-[12px] text-muted-foreground ">
                          {product.category.name}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {product.stockQuantity > 0 ? (
                      <span>{product.stockQuantity} in stock</span>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-[#F3F4F6] text-[#6B7280] hover:bg-[#F3F4F6]"
                      >
                        Out of Stock
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-sm">{product.colors[0]}</TableCell>
                  <TableCell className="text-sm text-[#111827] font-medium">
                    {product.price}
                  </TableCell>
                  <TableCell className="text-sm">5</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
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
        <div className="text-sm text-[#6B7280]">{data?.meta?.all} Results</div>
      </div>
    </div>
  );
}
