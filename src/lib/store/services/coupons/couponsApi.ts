import { api } from "../api";
import type {
  CouponsQuery,
  GetCouponsResponse,
  CreateCouponInput,
  Coupon,
} from "@/types/coupons.types";

export const couponsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoupons: builder.query<GetCouponsResponse, CouponsQuery>({
      query: (params) => ({
        url: "/coupons",
        method: "GET",
        params,
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
    createCoupon: builder.mutation<{ data: Coupon }, CreateCouponInput>({
      query: (body) => ({
        url: "/coupons",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Coupon", id: "LIST" }],
    }),
  }),
});

export const { useCreateCouponMutation } = couponsApi;
