import { useState } from "react";
import { customersApi } from "@/lib/store/services/customers/customersApi";
import type { CustomerStatus, CustomerRole } from "@/types/customers.types";
import { generatePagination } from "@/lib/utils";

export const useCustomers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<CustomerStatus | undefined>(undefined);
  const [role, setRole] = useState<CustomerRole | undefined>(undefined);
  const [search, setSearch] = useState("");

  const { data, isFetching, isError, error } =
    customersApi.useGetAllCustomersQuery({
      page: currentPage,
      limit: 10,
      status,
      role,
      search: search || undefined,
    });

  const totalPages = data?.pagination?.totalPages || 1;

  const pages = generatePagination(currentPage, totalPages);

  return {
    data,
    isFetching,
    isError,
    error,
    currentPage,
    setCurrentPage,
    totalPages,
    status,
    setStatus,
    role,
    setRole,
    search,
    setSearch,
    pages,
  };
};
