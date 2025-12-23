import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal, Search, ArrowUp, ArrowDown } from "lucide-react";
import type { TransactionStatus } from "@/types/transaction.types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTransactions } from "@/hooks/transactions/useTransactions";
import { TransactionsTableSkeleton } from "@/components/shared/skeletons";

type Props = {};

export default function TransactionHistoryTable({}: Props) {
  const {
    transactions,
    isFetching: isLoading,
    currentPage,
    setCurrentPage,
    totalTransactions,
    pages,
    handleTabChange: onTabChange,
    activeTab,
    search,
    setSearch: onSearchChange,
    pagination,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  } = useTransactions();

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case "COMPLETED":
        return "text-[#21C45D]";
      case "FAILED":
        return "text-[#EF4343]";
      case "PENDING":
        return "text-[#FBBD23]";
      case "REFUNDED":
        return "text-orange-400";
      default:
        return "text-gray-500";
    }
  };

  const formatMethod = (method: string) => {
    return method
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div className="bg-white rounded-lg border border-[#E5E7EB]">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Transaction History</h2>

        {/* Tabs */}
        <div className="mb-6">
          <Tabs value={activeTab} onValueChange={onTabChange}>
            <TabsList className="h-auto p-0 bg-transparent border-b border-[#E5E7EB] w-full justify-start rounded-none gap-6">
              <TabsTrigger
                value="all"
                className="pb-3 px-1 font-medium bg-transparent data-[state=active]:text-[#4EA674] data-[state=active]:border-b-2 data-[state=active]:border-[#4EA674] text-gray-500 rounded-none shadow-none"
              >
                All Transactions ({totalTransactions})
              </TabsTrigger>
              <TabsTrigger
                value="paid"
                className="pb-3 px-1 font-medium bg-transparent data-[state=active]:text-[#4EA674] data-[state=active]:border-b-2 data-[state=active]:border-[#4EA674] text-gray-500 rounded-none shadow-none"
              >
                Paid
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="pb-3 px-1 font-medium bg-transparent data-[state=active]:text-[#4EA674] data-[state=active]:border-b-2 data-[state=active]:border-[#4EA674] text-gray-500 rounded-none shadow-none"
              >
                Pending
              </TabsTrigger>
              <TabsTrigger
                value="failed"
                className="pb-3 px-1 font-medium bg-transparent data-[state=active]:text-[#4EA674] data-[state=active]:border-b-2 data-[state=active]:border-[#4EA674] text-gray-500 rounded-none shadow-none"
              >
                Failed
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by transaction # or customer"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 border-[#E5E7EB]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`h-10 w-10 border-[#E5E7EB] rounded-lg focus:ring-0 shadow-none text-gray-500 hover:text-primary transition-all ${
                  sortBy && sortBy !== "createdAt"
                    ? "border-primary bg-primary/5 text-primary"
                    : ""
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 border-[#E5E7EB] shadow-xl"
            >
              <DropdownMenuItem
                onClick={() => handleSort("amount")}
                className="flex items-center justify-between"
              >
                Amount
                {sortBy === "amount" &&
                  (sortOrder === "asc" ? (
                    <ArrowUp className="size-3" />
                  ) : (
                    <ArrowDown className="size-3" />
                  ))}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSort("createdAt")}
                className="flex items-center justify-between"
              >
                Date
                {sortBy === "createdAt" &&
                  (sortOrder === "asc" ? (
                    <ArrowUp className="size-3" />
                  ) : (
                    <ArrowDown className="size-3" />
                  ))}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto">
          <Table className="min-w-[1000px] table-fixed">
            <TableHeader className="[&_tr]:border-0 ">
              <TableRow className="bg-fade-green hover:bg-fade-green h-14">
                <TableHead className="w-[20%] rounded-l-xl px-6 text-table-header">
                  Customer Id
                </TableHead>
                <TableHead className="w-[15%] py-4 ">Customer</TableHead>
                <TableHead className="w-[15%] py-4  text-center ">
                  Date
                </TableHead>
                <TableHead className="w-[15%] py-4  text-center">
                  Amount
                </TableHead>
                <TableHead className="w-[15%] py-4  text-center">
                  Method
                </TableHead>
                <TableHead className="w-[10%] py-4  text-center">
                  Status
                </TableHead>
                <TableHead className="w-[10%] py-4  rounded-r-xl text-right pr-6">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="[&_tr]:h-16 [&_tr]:border-b text-[14.5px] text-[#000000]">
              {isLoading ? (
                <TransactionsTableSkeleton />
              ) : transactions.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-8 text-gray-500 italic"
                  >
                    No transactions found
                  </TableCell>
                </TableRow>
              ) : (
                transactions.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    className="h-16 border-b border-[#E5E7EB] hover:bg-gray-50/50"
                  >
                    <TableCell className="w-[20%] px-8 truncate text-muted-foreground">
                      {transaction.customerId}
                    </TableCell>
                    <TableCell className="w-[15%] font-medium truncate">
                      {transaction.customer.firstName}{" "}
                      {transaction.customer.lastName}
                    </TableCell>
                    <TableCell className="w-[15%] text-center">
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="w-[15%] text-center font-medium">
                      ${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell className="w-[15%] text-center">
                      {formatMethod(transaction.paymentMethod)}
                    </TableCell>
                    <TableCell
                      className={
                        "w-[10%] " +
                        getStatusColor(transaction.paymentStatus) +
                        " text-[13px]"
                      }
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <div
                          className={`size-2 rounded-full ${
                            transaction.paymentStatus === "COMPLETED"
                              ? "bg-rise"
                              : transaction.paymentStatus === "FAILED"
                              ? "bg-destructive"
                              : "bg-warning"
                          }`}
                        />
                        {transaction.paymentStatus.charAt(0) +
                          transaction.paymentStatus.slice(1).toLowerCase()}
                      </div>
                    </TableCell>
                    <TableCell className="w-[10%] text-right pr-8">
                      <button className="text-tertiary hover:underline text-sm font-medium">
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent className="w-full flex justify-between px-4">
            <PaginationItem>
              <PaginationPrevious
                className={`${
                  !pagination?.hasPrevPage
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
                shadow-[0_1px_3px_0_rgba(0,0,0,0.2)]`}
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>
            <div className="flex items-center gap-2">
              {pages.map((page, idx) => (
                <PaginationItem key={idx}>
                  {page === "..." ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page as number)}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
            </div>
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`${
                  !pagination?.hasNextPage
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
                shadow-[0_1px_3px_0_rgba(0,0,0,0.2)]`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
