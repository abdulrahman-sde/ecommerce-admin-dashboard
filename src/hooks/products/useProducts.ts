import { useGetProductsQuery } from "@/lib/store/services/products/productsApi";
import { generatePagination } from "@/lib/utils";
import type { ProductsQueryParams } from "@/types/products.types";
import { useState } from "react";
import type { Meta } from "@/types/products.types";

const tabs: { id: keyof Meta; label: string }[] = [
  { id: "all", label: "All Product" },
  { id: "featured", label: "Featured Products" },
  { id: "onSale", label: "On Sale" },
  { id: "outOfStock", label: "Out of Stock" },
];
export function useProducts(params: ProductsQueryParams = {}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<keyof Meta>("all");

  // Build query params based on active tab BEFORE the API call
  const queryParams: ProductsQueryParams = {
    ...params,
    page: currentPage,
    isFeatured: activeTab === "featured" ? true : undefined,
    hasDiscount: activeTab === "onSale" ? true : undefined,
    stockStatus:
      activeTab === "outOfStock" ? ("OUT_OF_STOCK" as const) : undefined,
  };

  const { data, isFetching, isError, error, refetch } =
    useGetProductsQuery(queryParams); // ✅ Now using the filtered query params

  const totalPages = data?.pagination?.totalPages || 1;
  const pages = generatePagination(currentPage, totalPages);
  return {
    data,
    isFetching,
    isError,
    error,
    refetch,
    currentPage,
    setCurrentPage,
    pages,
    tabs,
    activeTab,
    setActiveTab,
    queryParams,
  };
}
