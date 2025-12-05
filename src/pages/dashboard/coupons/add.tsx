"use client";

import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddCoupon() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("fixed");
  const [dontSetDuration, setDontSetDuration] = useState(false);
  const [dontLimitUses, setDontLimitUses] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/dashboard/coupons");
  };

  const couponTypes = [
    {
      id: "fixed",
      label: "Fixed Discount",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#4EA674]"
        >
          <path
            d="M12 2C12.5523 2 13 2.44772 13 3V4H15C16.1046 4 17 4.89543 17 6V8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H17V14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H17V18C17 19.1046 16.1046 20 15 20H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20H9C7.89543 20 7 19.1046 7 18V16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14H7V10H5C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H7V6C7 4.89543 7.89543 4 9 4H11V3C11 2.44772 11.4477 2 12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "percentage",
      label: "Percentage Discount",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8B909A]"
        >
          <path
            d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 10H21M7 14H7.01M11 14H11.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: "shipping",
      label: "Free Shipping",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8B909A]"
        >
          <path
            d="M1 3H15V13H1V3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6H18L21 9V13H15V6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 17C6.88071 17 8 15.8807 8 14.5C8 13.1193 6.88071 12 5.5 12C4.11929 12 3 13.1193 3 14.5C3 15.8807 4.11929 17 5.5 17Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M18.5 17C19.8807 17 21 15.8807 21 14.5C21 13.1193 19.8807 12 18.5 12C17.1193 12 16 13.1193 16 14.5C16 15.8807 17.1193 17 18.5 17Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: "price",
      label: "Price Discount",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8B909A]"
        >
          <path
            d="M21 12L12 3L3 12L12 21L21 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 9.5C15.3284 9.5 16 8.82843 16 8C16 7.17157 15.3284 6.5 14.5 6.5C13.6716 6.5 13 7.17157 13 8C13 8.82843 13.6716 9.5 14.5 9.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => navigate("/dashboard/coupons")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-2xl font-semibold">Add Coupon</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard/coupons")}
            className="border-[#D1D5DB]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-[#4EA674] hover:bg-[#4EA674]/90"
          >
            Save
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid ">
          {/* Left Column - Coupon Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-[#D1D5DB]">
              <CardHeader>
                <div>
                  <h3 className="font-semibold">Coupon Information</h3>
                  <p className="text-sm text-[#4EA674] mt-1">
                    Code will be used by users in checkout
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="couponCode">Coupon Code</Label>
                    <Input
                      className="placeholder:text-[14px] placeholder:text-[#A1A7C4]"
                      id="couponCode"
                      placeholder="Shipfree20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="couponName">Coupon Name</Label>
                    <Input
                      className="placeholder:text-[14px] placeholder:text-[#A1A7C4]"
                      id="couponName"
                      placeholder="Free Shipping"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coupon Type */}
            <Card className="border-[#D1D5DB]">
              <CardHeader>
                <div>
                  <h3 className="font-semibold">Coupon Type</h3>
                  <p className="text-sm text-[#8B909A] mt-1">
                    Type of coupon you want to create
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Type Selection */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {couponTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`flex flex-col items-center gap-3 rounded border-2 p-6 transition-colors ${
                        selectedType === type.id
                          ? "border-[#4EA674] bg-[#4EA674]/5"
                          : "border-[#D1D5DB] hover:border-[#4EA674]/50"
                      }`}
                    >
                      <div
                        className={
                          selectedType === type.id ? "text-[#4EA674]" : ""
                        }
                      >
                        {type.icon}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          selectedType === type.id
                            ? "text-[#4EA674]"
                            : "text-[#023337]"
                        }`}
                      >
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Discount Value and Applies to */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="discountValue">Discount Value</Label>
                    <Input id="discountValue" placeholder="Amount" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appliesTo">Applies to</Label>
                    <Select defaultValue="">
                      <SelectTrigger id="appliesTo">
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Products</SelectItem>
                        <SelectItem value="specific">
                          Specific Products
                        </SelectItem>
                        <SelectItem value="category">
                          Specific Category
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Duration and Usage Limits */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <div className="relative">
                      <Input
                        id="duration"
                        type="date"
                        placeholder="Set Duration"
                        disabled={dontSetDuration}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="noDuration"
                        checked={dontSetDuration}
                        onCheckedChange={(checked) =>
                          setDontSetDuration(checked as boolean)
                        }
                        className="data-[state=checked]:bg-[#4EA674] data-[state=checked]:border-[#4EA674]"
                      />
                      <label
                        htmlFor="noDuration"
                        className="text-sm text-[#5A607F] cursor-pointer"
                      >
                        Don't set duration
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="usageLimits">Usage Limits</Label>
                    <Input
                      id="usageLimits"
                      placeholder="Amount of uses"
                      disabled={dontLimitUses}
                    />
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="noLimit"
                        checked={dontLimitUses}
                        onCheckedChange={(checked) =>
                          setDontLimitUses(checked as boolean)
                        }
                        className="data-[state=checked]:bg-[#4EA674] data-[state=checked]:border-[#4EA674]"
                      />
                      <label
                        htmlFor="noLimit"
                        className="text-sm text-[#5A607F] cursor-pointer"
                      >
                        Don't limit amount of uses
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Placeholder for future content */}
          <div className="space-y-6">
            {/* Add additional cards here if needed */}
          </div>
        </div>
      </form>
    </div>
  );
}
