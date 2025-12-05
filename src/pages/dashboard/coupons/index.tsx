"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, PenSquare, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface Coupon {
  id: string;
  name: string;
  code: string;
  icon: "tag" | "truck";
  iconBg: string;
  usage: string;
  status: "Active" | "Expired";
  dateRange: string;
}

const couponsData: Coupon[] = [
  {
    id: "1",
    name: "Summer discount 10% off",
    code: "Summer2020",
    icon: "tag",
    iconBg: "bg-[#4EA674]",
    usage: "15 times",
    status: "Active",
    dateRange: "May 5, 2020 - May 15, 2020",
  },
  {
    id: "2",
    name: "Free shipping on all items",
    code: "Shipfreetomee15",
    icon: "truck",
    iconBg: "bg-[#6C7898]",
    usage: "42 times",
    status: "Active",
    dateRange: "May 5, 2020 - May 15, 2020",
  },
  {
    id: "3",
    name: "Discount for women clothes 5%",
    code: "Womenclothing5",
    icon: "tag",
    iconBg: "bg-[#4EA674]",
    usage: "12 times",
    status: "Active",
    dateRange: "April 12, 2020 - April 20, 2020",
  },
  {
    id: "4",
    name: "Summer discount 10% off",
    code: "Summer2020",
    icon: "tag",
    iconBg: "bg-[#4EA674]",
    usage: "8 times",
    status: "Active",
    dateRange: "April 12, 2020 - April 20, 2020",
  },
  {
    id: "5",
    name: "Free shipping on all items",
    code: "Shipfreetomee15",
    icon: "truck",
    iconBg: "bg-[#6C7898]",
    usage: "18 times",
    status: "Active",
    dateRange: "April 12, 2020 - April 20, 2020",
  },
  {
    id: "6",
    name: "Discount for women clothes 10%",
    code: "Womenclothing5",
    icon: "tag",
    iconBg: "bg-[#4EA674]",
    usage: "57 times",
    status: "Active",
    dateRange: "Feb 14, 2020 - Feb 20, 2020",
  },
  {
    id: "7",
    name: "Summer discount 15% off",
    code: "Summer2020",
    icon: "tag",
    iconBg: "bg-[#4EA674]",
    usage: "16 times",
    status: "Active",
    dateRange: "Feb 14, 2020 - Feb 20, 2020",
  },
  {
    id: "8",
    name: "Free shipping on all items",
    code: "Shipfreetomee15",
    icon: "truck",
    iconBg: "bg-[#6C7898]",
    usage: "15 times",
    status: "Expired",
    dateRange: "Feb 14, 2020 - Feb 20, 2020",
  },
  {
    id: "9",
    name: "Discount for women clothes 10%",
    code: "Womenclothing5",
    icon: "tag",
    iconBg: "bg-[#4EA674]",
    usage: "12 times",
    status: "Expired",
    dateRange: "Feb 14, 2020 - Feb 20, 2020",
  },
  {
    id: "10",
    name: "Discount for women clothes 5%",
    code: "Womenclothing5",
    icon: "tag",
    iconBg: "bg-[#4EA674]",
    usage: "76 times",
    status: "Expired",
    dateRange: "Feb 14, 2020 - Feb 20, 2020",
  },
];

export default function Coupons() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoupons, setSelectedCoupons] = useState<string[]>([]);

  const filteredCoupons = couponsData.filter((coupon) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" && coupon.status === "Active") ||
      (activeTab === "expired" && coupon.status === "Expired");

    const matchesSearch =
      coupon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.code.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCoupons(filteredCoupons.map((coupon) => coupon.id));
    } else {
      setSelectedCoupons([]);
    }
  };

  const handleSelectCoupon = (couponId: string, checked: boolean) => {
    if (checked) {
      setSelectedCoupons([...selectedCoupons, couponId]);
    } else {
      setSelectedCoupons(selectedCoupons.filter((id) => id !== couponId));
    }
  };

  const isAllSelected =
    filteredCoupons.length > 0 &&
    selectedCoupons.length === filteredCoupons.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Coupons</h2>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 border-[#D1D5DB]"
          >
            <PenSquare className="h-4 w-4 text-[#4EA674]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 border-[#D1D5DB]"
          >
            <Trash2 className="h-4 w-4 text-[#4EA674]" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="inline-flex h-auto w-auto rounded-none border-b border-[#D1D5DB] bg-transparent p-0">
          <TabsTrigger
            value="all"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2.5 text-sm font-medium text-[#8B909A] data-[state=active]:border-[#4EA674] data-[state=active]:bg-transparent data-[state=active]:text-[#023337] data-[state=active]:shadow-none"
          >
            All Coupons
          </TabsTrigger>
          <TabsTrigger
            value="active"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2.5 text-sm font-medium text-[#8B909A] data-[state=active]:border-[#4EA674] data-[state=active]:bg-transparent data-[state=active]:text-[#023337] data-[state=active]:shadow-none"
          >
            Active Coupons
          </TabsTrigger>
          <TabsTrigger
            value="expired"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2.5 text-sm font-medium text-[#8B909A] data-[state=active]:border-[#4EA674] data-[state=active]:bg-transparent data-[state=active]:text-[#023337] data-[state=active]:shadow-none"
          >
            Expired Coupons
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <Select defaultValue="filter">
          <SelectTrigger className="w-[120px] h-10 border-[#D1D5DB]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="filter">Filter</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="code">Code</SelectItem>
            <SelectItem value="status">Status</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B909A]" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-[#D1D5DB]">
        <Table>
          <TableHeader className="bg-[#EAF8E7]">
            <TableRow className="hover:bg-[#EAF8E7]">
              <TableHead className="w-12">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all"
                  className="data-[state=checked]:bg-[#4EA674] data-[state=checked]:border-[#4EA674]"
                />
              </TableHead>
              <TableHead className="text-[#023337] font-semibold">
                Coupon Name
              </TableHead>
              <TableHead className="text-[#023337] font-semibold">
                Usage
              </TableHead>
              <TableHead className="text-[#023337] font-semibold">
                Status
              </TableHead>
              <TableHead className="text-[#023337] font-semibold">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr]:h-16">
            {filteredCoupons.map((coupon) => (
              <TableRow key={coupon.id} className="cursor-pointer">
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={selectedCoupons.includes(coupon.id)}
                    onCheckedChange={(checked) =>
                      handleSelectCoupon(coupon.id, checked as boolean)
                    }
                    aria-label={`Select ${coupon.name}`}
                    className="data-[state=checked]:bg-[#4EA674] data-[state=checked]:border-[#4EA674]"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded ${coupon.iconBg}`}
                    >
                      {coupon.icon === "tag" ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 8.75L11.25 2.5L2.5 11.25L8.75 17.5L17.5 8.75Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.5 7.5C13.1904 7.5 13.75 6.94036 13.75 6.25C13.75 5.55964 13.1904 5 12.5 5C11.8096 5 11.25 5.55964 11.25 6.25C11.25 6.94036 11.8096 7.5 12.5 7.5Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 6.25H17.5M2.5 10H17.5M2.5 13.75H17.5M6.25 2.5V17.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#023337]">
                        {coupon.name}
                      </div>
                      <div className="text-xs text-[#8B909A]">
                        {coupon.code}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-[#023337]">
                  {coupon.usage}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      coupon.status === "Active"
                        ? "bg-[#C6F6D5] text-[#22543D] hover:bg-[#C6F6D5]"
                        : "bg-[#E2E8F0] text-[#4A5568] hover:bg-[#E2E8F0]"
                    }
                  >
                    {coupon.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-[#023337]">
                  {coupon.dateRange}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive={false}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">6</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">24</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <div className="text-sm text-[#8B909A]">120 Results</div>
      </div>
    </div>
  );
}
