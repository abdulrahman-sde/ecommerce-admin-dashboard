import { useState } from "react";
import { ordersApi } from "@/lib/store/services/orders/ordersApi";
import type { OrderStatus, PaymentStatus } from "@/types/orders.types";

export const useOrders = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<OrderStatus | undefined>(undefined);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | undefined>(
    undefined
  );
  const [search, setSearch] = useState("");

  const { data, isFetching, isError, error } = ordersApi.useGetAllOrdersQuery({
    page,
    limit: 10,
    fulfillmentStatus: status,
    paymentStatus,
    search: search || undefined,
  });

  const totalPages = data?.pagination?.totalPages || 1;
  const totalOrders = data?.pagination?.total || 0;

  // Generate page numbers for pagination with ellipses
  const getPages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 4) {
        for (let i = 1; i <= 6; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (page > totalPages - 4) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 5; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = page - 1; i <= page + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  // Get counts by status for tabs
  const getStatusCounts = () => {
    if (data?.meta) {
      return {
        all: data.meta.all,
        completed: data.meta.completed,
        pending: data.meta.pending,
        cancelled: data.meta.canceled,
      };
    }
    return {
      all: totalOrders,
      completed: 0,
      pending: 0,
      cancelled: 0,
    };
  };

  const handleTabChange = (tab: string) => {
    setPage(1);
    if (tab === "all") {
      setStatus(undefined);
    } else if (tab === "completed") {
      setStatus("DELIVERED");
    } else if (tab === "pending") {
      setStatus("PENDING");
    } else if (tab === "canceled") {
      setStatus("CANCELED");
    }
  };

  const activeTab = !status
    ? "all"
    : status === "COMPLETED" || status === "DELIVERED"
    ? "completed"
    : status === "PENDING"
    ? "pending"
    : status === "CANCELED"
    ? "canceled"
    : "all";

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  // Get dynamic stats for the top cards
  const getDynamicStats = () => {
    const stats = getStatusCounts();
    return [
      {
        title: "Total Orders",
        value: stats.all.toLocaleString(),
        change: { value: "12.5%", isPositive: true }, // Ideally from API too
        subtitle: "Last 30 days",
      },
      {
        title: "Pending Orders",
        value: stats.pending.toLocaleString(),
        change: { value: "8.2%", isPositive: true },
        subtitle: "Last 30 days",
      },
      {
        title: "Completed Orders",
        value: stats.completed.toLocaleString(),
        change: { value: "15.4%", isPositive: true },
        subtitle: "Last 30 days",
      },
      {
        title: "Canceled Orders",
        value: stats.cancelled.toLocaleString(),
        change: { value: "2.1%", isPositive: false },
        subtitle: "Last 30 days",
      },
    ];
  };

  return {
    data,
    orders: data?.data || [],
    isFetching,
    isError,
    error,
    currentPage: page,
    setCurrentPage: setPage,
    totalPages,
    totalOrders,
    status,
    setStatus,
    paymentStatus,
    setPaymentStatus,
    search,
    setSearch: handleSearchChange,
    pages: getPages(),
    statusCounts: getStatusCounts(),
    handleTabChange,
    activeTab,
    dynamicStats: getDynamicStats(),
  };
};
