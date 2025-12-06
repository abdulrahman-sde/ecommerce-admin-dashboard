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
import { Search } from "lucide-react";
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
    iconBg: "bg-[#7E84A3]",
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
    iconBg: "bg-[#7E84A3]",
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
    iconBg: "bg-[#7E84A3]",
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
    <div className="space-y-[26px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold">Coupons</h2>
        <Button className="w-[138px] h-[40px] bg-[#4EA674] hover:bg-[#4EA674]/90 rounded-[4px] text-white gap-2">
          <span className="text-xl">+</span>
          Create
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
        <TabsList
          className="
          flex w-max items-center gap-8 
          bg-transparent p-0 
          border-b border-[#E5E7EB]
          rounded-none
        "
        >
          <TabsTrigger
            value="all"
            className="
            px-4  py-3 
            text-[16px] font-medium text-[#9CA3AF]

            border-b-2 border-transparent

            data-[state=active]:text-[#4EA674]
            data-[state=active]:border-[#4EA674]
            data-[state=active]:bg-transparent
            data-[state=active]:shadow-none

            focus-visible:ring-0 focus-visible:ring-offset-0
          "
          >
            All Coupons
          </TabsTrigger>

          <TabsTrigger
            value="active"
            className="
            px-4  py-3 
            text-[16px] font-medium text-[#9CA3AF]

            border-b-2 border-transparent

            data-[state=active]:text-[#4EA674]
            data-[state=active]:border-[#4EA674]
            data-[state=active]:bg-transparent
            data-[state=active]:shadow-none

            focus-visible:ring-0 focus-visible:ring-offset-0
          "
          >
            Active Coupons
          </TabsTrigger>

          <TabsTrigger
            value="expired"
            className="
            px-4  py-3 
            text-[16px] font-medium text-[#9CA3AF]

            border-b-2 border-transparent

            data-[state=active]:text-[#4EA674]
            data-[state=active]:border-[#4EA674]
            data-[state=active]:bg-transparent
            data-[state=active]:shadow-none

            focus-visible:ring-0 focus-visible:ring-offset-0
          "
          >
            Expired Coupons
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <Select defaultValue="filter">
          <SelectTrigger className="w-[120px] h-[40px] border-[#D9E1EC]">
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
            className="h-[40px] border-[#D9E1EC] pl-9"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg ">
        <Table>
          <TableHeader className=" [&_tr]:border-b [&_tr]:border-[#D7DBEC]">
            <TableRow className="">
              <TableHead className="w-12">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all"
                  className="h-5 w-5 border-[#D7DBEC] data-[state=checked]:bg-[#4EA674] data-[state=checked]:border-[#4EA674]"
                />
              </TableHead>
              <TableHead className="text-[#5A607F] py-4 text-[16px]">
                Coupon Name
              </TableHead>
              <TableHead className="text-[#5A607F] py-4 text-[16px]">
                Usage
              </TableHead>
              <TableHead className="text-[#5A607F] py-4 text-[16px]">
                Status
              </TableHead>
              <TableHead className="text-[#5A607F] py-4 text-[16px]">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr]:h-[72px]">
            {filteredCoupons.map((coupon) => (
              <TableRow
                key={coupon.id}
                className="cursor-pointer border-b border-[#D7DBEC]"
              >
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={selectedCoupons.includes(coupon.id)}
                    onCheckedChange={(checked) =>
                      handleSelectCoupon(coupon.id, checked as boolean)
                    }
                    aria-label={`Select ${coupon.name}`}
                    className="h-5 w-5 border-[#D7DBEC] data-[state=checked]:bg-[#4EA674] data-[state=checked]:border-[#4EA674]"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${coupon.iconBg}`}
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
                      <div className="text-[14px] font-medium text-[#023337]">
                        {coupon.name}
                      </div>
                      <div className="text-[14px] text-[#8B909A]">
                        {coupon.code}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-[14px] text-[#023337]">
                  {coupon.usage}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      coupon.status === "Active"
                        ? "bg-[#C4F8E2] text-[#06A561] rounded-[5px] px-2 py-1 hover:bg-[#C4F8E2] font-normal"
                        : "bg-[#5A607F] text-white rounded-[5px] px-2 py-1 hover:bg-[#5A607F] font-normal"
                    }
                  >
                    {coupon.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-[14px] text-[#023337]">
                  {coupon.dateRange}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-[28px]">
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
        <div className="text-[16px] text-[#5A607F]">120 Results</div>
      </div>
    </div>
  );
}
