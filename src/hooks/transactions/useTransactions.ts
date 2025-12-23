import { useState, useEffect } from "react";
import { useGetAllTransactionsQuery } from "@/lib/store/services/transactions/transactionsApi";
import type { TransactionStatus } from "@/types/transaction.types";
import { generatePagination } from "@/lib/utils";

export const useTransactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<TransactionStatus | undefined>(
    undefined
  );
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortBy, setSortBy] = useState<string | undefined>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(
    "desc"
  );

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isFetching, isError, error } = useGetAllTransactionsQuery({
    page: currentPage,
    limit: 10,
    paymentStatus: status,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });

  const totalPages = data?.pagination?.totalPages || 1;
  const totalTransactions = data?.pagination?.total || 0;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleTabChange = (tab: string) => {
    setCurrentPage(1);
    if (tab === "all") {
      setStatus(undefined);
    } else if (tab === "paid") {
      setStatus("COMPLETED");
    } else if (tab === "pending") {
      setStatus("PENDING");
    } else if (tab === "failed") {
      setStatus("FAILED");
    }
  };

  const activeTab = !status
    ? "all"
    : status === "COMPLETED"
    ? "paid"
    : status === "PENDING"
    ? "pending"
    : status === "FAILED"
    ? "failed"
    : "all";

  const pages = generatePagination(currentPage, totalPages);

  // Get dynamic stats for the top cards (mocked for now as they're not in the list response)
  const getDynamicStats = () => {
    return [
      {
        title: "Total Transactions",
        value: totalTransactions.toLocaleString(),
        change: { value: "12.5%", isPositive: true },
        subtitle: "Last 30 days",
      },
      {
        title: "Pending Amount",
        value: "$12,450", // This would ideally come from another endpoint or aggregation
        change: { value: "8.2%", isPositive: true },
        subtitle: "Last 30 days",
      },
      {
        title: "Total Paid",
        value: "$84,230",
        change: { value: "15.4%", isPositive: true },
        subtitle: "Last 30 days",
      },
      {
        title: "Failed Transactions",
        value: "23",
        change: { value: "2.1%", isPositive: false },
        subtitle: "Last 30 days",
      },
    ];
  };

  return {
    transactions: data?.data || [],
    isFetching,
    isError,
    pagination: data?.pagination,
    error,
    currentPage,
    setCurrentPage: handlePageChange,
    totalPages,
    totalTransactions,
    search,
    setSearch: handleSearchChange,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    pages,
    handleTabChange,
    activeTab,
    dynamicStats: getDynamicStats(),
  };
};
