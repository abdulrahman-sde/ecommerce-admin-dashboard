import { api } from "../api";
import type { CouponsQuery, GetCouponsResponse } from "@/types/coupons.types";

export const couponsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoupons: builder.query<GetCouponsResponse, CouponsQuery>({
      query: ({ page = 1, limit = 10, status }) => ({
        url: "/coupons",
        method: "GET",
        params: {
          page,
          limit,
          status,
        },
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map((coupon) => ({
                type: "Coupon" as const,
                id: coupon.id,
              })),
            ]
          : [{ type: "Coupon" as const, id: "LIST" }],
    }),
  }),
});
