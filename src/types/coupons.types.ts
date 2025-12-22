import type { PaginatedApiResponse } from "./shared.types";

export type CouponType = "FREE_SHIPPING" | "FIXED" | "PERCENTAGE";
export type CouponStatus = "ACTIVE" | "INACTIVE" | "EXPIRED";

export interface CouponAppliesTo {
  minOrderValue?: number;
}

export interface Coupon {
  id: string;
  code: string;
  name: string;
  type: CouponType;
  value: number;
  startDate: string;
  endDate: string | null;
  usageLimit: number | null;
  usageCount: number;
  status: CouponStatus;
  appliesTo: CouponAppliesTo | null;
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export type GetCouponsResponse = PaginatedApiResponse<Coupon[]>;

export interface CouponsQuery {
  page?: number;
  limit?: number;
  status?: CouponStatus;
  type?: CouponType;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
