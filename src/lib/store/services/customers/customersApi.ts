import { api } from "../api";
import type {
  CustomersQuery,
  GetCustomersResponse,
  GetCustomerResponse,
} from "@/types/customers.types";

export const customersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomers: builder.query<GetCustomersResponse, CustomersQuery>({
      query: ({
        page = 1,
        limit = 10,
        status,
        role,
        search,
        sortBy,
        sortOrder,
      }) => ({
        url: "/customers",
        method: "GET",
        params: {
          page,
          limit,
          status,
          role,
          search,
          sortBy,
          sortOrder,
        },
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map((customer) => ({
                type: "Customer" as const,
                id: customer.id,
              })),
              { type: "Customer" as const, id: "LIST" },
            ]
          : [{ type: "Customer" as const, id: "LIST" }],
    }),
    getCustomerById: builder.query<GetCustomerResponse, string>({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Customer", id }],
    }),
  }),
});

export const { useGetAllCustomersQuery, useGetCustomerByIdQuery } =
  customersApi;
