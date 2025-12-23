"use client";

import { useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MessageSquare, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomersTableSkeleton } from "@/components/shared/skeletons";
import { useCustomers } from "@/hooks/customers";

export function CustomerTable() {
  const navigate = useNavigate();

  const { data, isFetching, currentPage, setCurrentPage, pages } =
    useCustomers();
  const handleRowClick = (customerId: string) => {
    const encodedId = encodeURIComponent(customerId);
    navigate(`/dashboard/customers/${encodedId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "text-rise ";
      case "INACTIVE":
        return "text-destructive ";
      case "VIP":
        return "text-warning ";
      default:
        return "text-destructive";
    }
  };

  return (
    <Card className="p-0 border-0 pb-8">
      <div className="overflow-x-auto">
        <Table className="pt-10 min-w-[1000px] table-fixed">
          <TableHeader className="h-14 border-0 text-table-header ">
            <TableRow className="bg-[#EAF8E7] hover:bg-[#EAF8E7] [&_th]:px-8 border-0">
              <TableHead className="w-[15%] rounded-l-xl">
                Customer Id
              </TableHead>
              <TableHead className="w-[20%]">Name</TableHead>
              <TableHead className="w-[15%] text-center px-4">Phone</TableHead>
              <TableHead className="w-[15%] text-center px-4">
                Order Count
              </TableHead>
              <TableHead className="w-[15%] text-center px-4">
                Total Spent
              </TableHead>
              <TableHead className="w-[10%] text-center px-8">Status</TableHead>
              <TableHead className="w-[10%] rounded-r-xl text-right pr-8">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr]:h-16 [&_tr]:border-b text-[#131523] text-[14.5px]">
            {isFetching ? (
              <CustomersTableSkeleton rows={8} />
            ) : data?.data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  No customers found
                </TableCell>
              </TableRow>
            ) : (
              data?.data.map((customer) => (
                <TableRow
                  key={customer.id}
                  className="h-16 cursor-pointer hover:bg-gray-50/50"
                  onClick={() => handleRowClick(customer.id)}
                >
                  <TableCell className="w-[15%] px-8 truncate text-muted-foreground">
                    {customer.id}
                  </TableCell>
                  <TableCell className="w-[20%] px-8 truncate font-medium">
                    {customer.firstName} {customer.lastName}
                  </TableCell>

                  <TableCell className="w-[15%] text-center px-8">
                    {customer.phone}
                  </TableCell>
                  <TableCell className="w-[15%] text-center px-8">
                    {customer.totalOrders}
                  </TableCell>
                  <TableCell className="w-[15%] text-center px-8 font-medium">
                    {customer.totalSpent.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </TableCell>
                  <TableCell
                    className={
                      "w-[10%] " +
                      getStatusColor(customer.status) +
                      " text-[13px]"
                    }
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <div
                        className={`size-2 rounded-full ${
                          customer.status === "ACTIVE"
                            ? "bg-rise"
                            : customer.status === "INACTIVE"
                            ? "bg-destructive"
                            : "bg-warning"
                        }`}
                      />
                      {customer.status.charAt(0) +
                        customer.status.slice(1).toLowerCase()}
                    </div>
                  </TableCell>
                  <TableCell className="w-[10%] text-right pr-4">
                    <div className="flex items-center justify-end">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between ">
        <Pagination>
          <PaginationContent className="w-full flex justify-between px-4">
            <PaginationItem>
              <PaginationPrevious
                className={`${
                  !data?.pagination.hasPrevPage
                    ? "pointer-events-none opacity-50 "
                    : "cursor-pointer"
                } shadow-[0_1px_3px_0_rgba(0,0,0,0.2)]`}
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
                className={`
                  ${
                    !data?.pagination.hasNextPage
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                  shadow-[0_1px_3px_0_rgba(0,0,0,0.2)]
                `}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        {/* <div className="text-sm text-[#6B7280] flex items-center">
          {data?.pagination?.total} Results
        </div> */}
      </div>
    </Card>
  );
}
