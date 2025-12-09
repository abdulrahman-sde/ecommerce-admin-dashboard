import { useState } from "react";
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
import { SlidersHorizontal, Search } from "lucide-react";
import type { TransactionHistory } from "@/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  transactions: TransactionHistory[];
};

export default function TransactionHistoryTable({ transactions }: Props) {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All order", count: 240 },
    { id: "completed", label: "Completed", count: 0 },
    { id: "pending", label: "Pending", count: 0 },
    { id: "canceled", label: "Canceled", count: 0 },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "text-[#21C45D]";
      case "canceled":
        return "text-[#EF4343]";
      case "pending":
        return "text-[#FBBD23]";
    }
  };
  return (
    <div className="bg-white rounded-lg border border-[#E5E7EB]">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Transaction History</h2>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-[#E5E7EB] mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-[#4EA674]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label} ({tab.count})
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4EA674]" />
              )}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search product name"
              className="pl-10 border-[#E5E7EB]"
            />
          </div>
          <Button variant="outline" className="border-[#E5E7EB]">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-[#E5E7EB]">
            More
          </Button>
        </div>

        {/* Table */}
        <Table>
          <TableHeader className="[&_tr]:border-0 ">
            <TableRow className="bg-fade-green ">
              <TableHead className="font-semibold rounded-l-xl px-6 text-gray-700">
                Customer Id
              </TableHead>
              <TableHead className="font-semibold py-4 text-gray-700">
                Name
              </TableHead>
              <TableHead className="font-semibold py-4 text-gray-700">
                Date
              </TableHead>
              <TableHead className="font-semibold py-4 text-gray-700">
                Total
              </TableHead>
              <TableHead className="font-semibold py-4 text-gray-700">
                Method
              </TableHead>
              <TableHead className="font-semibold py-4 text-gray-700">
                Status
              </TableHead>
              <TableHead className="font-semibold py-4 text-gray-700 rounded-r-xl">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr]:h-14 [&_tr]:border-b">
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="border-[#E5E7EB]">
                <TableCell className="text-gray-600">
                  {transaction.customerId}
                </TableCell>
                <TableCell className="font-medium">
                  {transaction.name}
                </TableCell>
                <TableCell className="text-gray-600">
                  {transaction.date}
                </TableCell>
                <TableCell className="font-medium">
                  {transaction.total}
                </TableCell>
                <TableCell className="text-gray-600">
                  {transaction.method}
                </TableCell>
                <TableCell
                  className={
                    getStatusColor(transaction.status) +
                    " text-sm flex flex-row items-center mt-1 gap-1"
                  }
                >
                  <p className="text-4xl -mt-1.5"> ·</p>
                  {transaction.status}
                </TableCell>
                <TableCell>
                  <button className="text-tertiary hover:underline text-sm font-medium">
                    View Details
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">9</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
