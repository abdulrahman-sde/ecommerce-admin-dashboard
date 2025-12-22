import type { ApiResponse } from "./shared.types";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  _count: {
    products: number;
  };
}

export type CategoriesResponse = ApiResponse<Category[]>;
export type CategoryResponse = ApiResponse<Category>;

export type UpdateCategoryResponse = ApiResponse<Category>;
