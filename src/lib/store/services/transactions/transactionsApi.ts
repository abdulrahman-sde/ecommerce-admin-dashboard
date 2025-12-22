import { api } from "../api";

export const transactionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTransactions: builder.query<GetAllTransactionsResponse, void>({
      query: () => ({
        url: "/transactions",
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({
                type: "Transaction" as const,
                id,
              })),
              { type: "Transactions", id: "LIST" },
            ]
          : [{ type: "Transactions", id: "LIST" }],
    }),
  }),
});
