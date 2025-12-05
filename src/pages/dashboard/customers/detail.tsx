"use client";

import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, X, ArrowLeft } from "lucide-react";
import { customerDetailData } from "@/constants/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CustomerDetail() {
  const navigate = useNavigate();

  // In a real app, you would fetch customer data based on the ID from useParams
  const customer = customerDetailData;

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate("/dashboard/customers")}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Customers
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Customer Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Information Card */}
          <Card className="border-[#D1D5DB]">
            <CardHeader>
              <h3 className="font-semibold">Customer Information</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Section */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 bg-muted">
                    <AvatarFallback className="text-2xl">
                      {customer.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{customer.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {customer.country}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {customer.orderCount} Orders
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Customer for {customer.customerSince}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(customer.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Customer Notes */}
              <div>
                <h4 className="font-semibold mb-4">Customer Notes</h4>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Notes</label>
                  <Textarea
                    placeholder="Add notes about customer"
                    className="min-h-[100px]"
                    defaultValue={customer.notes}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Orders Card */}
          <Card className="border-[#D1D5DB]">
            <CardHeader>
              <h3 className="font-semibold">Customer Orders</h3>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Order</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Order Status</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="[&_tr]:h-12">
                    {customer.orders.map((order, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {order.id}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {order.date}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              order.status === "Completed"
                                ? "bg-[#4EA674]/10 text-[#4EA674] hover:bg-[#4EA674]/20"
                                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">
                          ${order.price.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Overview and Tags */}
        <div className="space-y-6">
          {/* Overview Card */}
          <Card className="border-[#D1D5DB]">
            <CardHeader className="flex flex-row items-center justify-between">
              <h3 className="font-semibold">Overview</h3>
              <Button variant="link" className="text-[#4EA674] h-auto p-0">
                Edit
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <p className="text-sm">{customer.address.street}</p>
                <p className="text-sm">{customer.address.city}</p>
                <p className="text-sm">{customer.address.postalCode}</p>
                <p className="text-sm">{customer.address.country}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Email Address
                </p>
                <p className="text-sm">{customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-sm">{customer.phone}</p>
              </div>
              <Button
                variant="link"
                className="text-destructive h-auto p-0 w-full justify-start"
              >
                Delete Customer
              </Button>
            </CardContent>
          </Card>

          {/* Tags Card */}
          <Card className="border-[#D1D5DB]">
            <CardHeader>
              <h3 className="font-semibold">Tags</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Add Tags
                </label>
                <Input placeholder="Enter tag name" />
              </div>
              <div className="flex flex-wrap gap-2">
                {customer.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-muted/50 text-foreground hover:bg-muted flex items-center gap-1"
                  >
                    {tag}
                    <X className="h-3 w-3 cursor-pointer" />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
