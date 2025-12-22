import type {
  PaginatedApiResponse,
  PaginatedApiResponseWithMeta,
} from "./shared.types";

export interface Category {
  name: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  price: number;
  costPrice: number;
  discountPrice: number;
  stockQuantity: number;
  lowStockThreshold: number;
  isUnlimitedStock: boolean;
  images: string[];
  thumbnail: string;
  categoryId: string;
  tags: string[];
  colors: string[];
  totalSales: number;
  totalRevenue: number;
  viewCount: number;
  status: "DRAFT" | "PUBLISHED" | string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  category: Category;
}

export interface Meta {
  all: number;
  featured: number;
  onSale: number;
  outOfStock: number;
}

export interface ProductsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
  isFeatured?: boolean;
  hasDiscount?: boolean;
  stockStatus?: "IN_STOCK" | "OUT_OF_STOCK" | undefined;
}
export type GetProductsResponse = PaginatedApiResponseWithMeta<Product[], Meta>;
