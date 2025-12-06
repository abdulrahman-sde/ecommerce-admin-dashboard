import { useState } from "react";
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
import { productsListData } from "@/constants/constants";
import { Search, Save, Plus } from "lucide-react";

const ITEMS_PER_PAGE = 10;

export default function Products() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const totalPages = Math.ceil(productsListData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = productsListData.slice(startIndex, endIndex);

  const toggleProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedProducts.length === currentProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(currentProducts.map((p) => p.id));
    }
  };

  return (
    <div className="space-y-6">
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
      <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedProducts.length === currentProducts.length}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium text-sm">
                Product
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium text-sm">
                Inventory
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium text-sm">
                Color
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium text-sm">
                Price
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium text-sm">
                Rating
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProducts.map((product) => (
              <TableRow
                key={product.id}
                className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB]"
              >
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => toggleProduct(product.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#F3F4F6] flex items-center justify-center text-2xl shrink-0">
                      {product.image}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#111827]">
                        {product.name}
                      </div>
                      <div className="text-xs text-[#6B7280]">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-[#6B7280]">
                  {product.inStock ? (
                    <span>{product.inventory}</span>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="bg-[#F3F4F6] text-[#6B7280] hover:bg-[#F3F4F6]"
                    >
                      Out of Stock
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-sm text-[#6B7280]">
                  {product.color}
                </TableCell>
                <TableCell className="text-sm text-[#111827] font-medium">
                  {product.price}
                </TableCell>
                <TableCell className="text-sm text-[#6B7280]">
                  {product.rating}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
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
            {[1, 2, 3, 4, 5, 6].map((pageNum) => (
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
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage(24)}
                className="cursor-pointer"
              >
                24
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <div className="text-sm text-[#6B7280]">146 Results</div>
      </div>
    </div>
  );
}
