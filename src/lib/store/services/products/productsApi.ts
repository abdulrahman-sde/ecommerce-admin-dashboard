import { api } from "../api";
import type { ProductsQueryParams } from "@/types/products.types";
import type { GetProductsResponse, Product } from "@/types/products.types";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get all products with filters

    getProducts: builder.query<GetProductsResponse, ProductsQueryParams>({
      query: ({
        page = 1,
        limit = 10,
        search,
        categoryId,
        isFeatured,
        hasDiscount,
        stockStatus,
      }) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });
        if (search) params.append("search", search);
        if (categoryId) params.append("categoryId", categoryId);
        if (isFeatured) params.append("isFeatured", isFeatured.toString());
        if (hasDiscount) params.append("hasDiscount", hasDiscount.toString());
        if (stockStatus) params.append("stockStatus", stockStatus.toString());

        return `/products?${params.toString()}`;
      },
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({
                type: "Product" as const,
                id,
              })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),

    // Get single product

    getProduct: builder.query<Product, string>({
      query: (id) => `/product/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    // Add product

    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => ({
        url: "/product",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),

    // getProductsStats: builder.query({
    //   query: () => "/",
    // }),

    // Update product

    updateProduct: builder.mutation<Product, { id: string } & Partial<Product>>(
      {
        query: ({ id, ...body }) => ({
          url: `/product/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
      }
    ),

    // Delete product
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Product", id },
        { type: "Products", id: "LIST" },
      ],
    }),

    // Bulk delete products
    bulkDeleteProducts: builder.mutation<void, string[]>({
      query: (ids) => ({
        url: "/product/bulk-delete",
        method: "POST",
        body: { ids },
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),

    // Update product stock
    updateProductStock: builder.mutation<
      Product,
      { id: string; stock: number }
    >({
      query: ({ id, stock }) => ({
        url: `/product/${id}/stock`,
        method: "PATCH",
        body: { stock },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useBulkDeleteProductsMutation,
  useUpdateProductStockMutation,
} = productsApi;
