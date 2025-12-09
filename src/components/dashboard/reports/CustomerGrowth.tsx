import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CustomerGrowthProps } from "@/types";

export function CustomerGrowth({ data }: CustomerGrowthProps) {
  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-base font-bold -mt-6">
            Customer Growth
          </CardTitle>
          <div className="flex items-center gap-4 text-[14px]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-xs bg-[#E2E8F0]"></span>
              <span className="text-gray-500">Returning customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-xs bg-[#22c55e]"></span>
              <span className="text-gray-500">New customers</span>
            </div>
          </div>
        </div>
        <Select defaultValue="12months">
          <SelectTrigger className="w-[140px] border-none shadow-none text-gray-500 hover:text-gray-900 bg-transparent focus:ring-0">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12months">Last 12 Months</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 0,
                right: 30,
                left: 0,
                bottom: 5,
              }}
              barGap={8}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="4 4"
                stroke="#eaeaea"
              />
              <XAxis
                dataKey="month"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickMargin={15}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                ticks={[0, 100, 200, 300, 400, 500]}
                tickFormatter={(value) => `${value}`}
                domain={[0, 500]}
              />

              <Bar
                dataKey="returningCustomers"
                fill="#D7DBEC"
                radius={[4, 4, 4, 4]}
                barSize={8}
              />
              <Bar
                dataKey="newCustomers"
                fill="#4EA674"
                radius={[4, 4, 4, 4]}
                barSize={8}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
