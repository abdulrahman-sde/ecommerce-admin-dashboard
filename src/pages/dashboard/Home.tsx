import { StatsCard } from "@/components/dashboard/home/HomeStatsCard";
import WeeklyReport from "@/components/dashboard/home/WeeklyReport";
import CountryWiseSales from "@/components/dashboard/home/CountryWiseSales";
import {
  dashboardStats,
  weeklyReportData,
  countrySalesData,
} from "@/constants/constants";

export default function DashboardHome() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardStats.map((stat, index) => (
          <StatsCard key={index} {...stat} className="shadow-sm border-0 " />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="col-span-3 lg:col-span-2 ">
          <WeeklyReport data={weeklyReportData} />
        </div>
        <div className="col-span-3 sm:col-span-2 lg:col-span-1">
          <CountryWiseSales data={countrySalesData} />
        </div>
      </div>
    </>
  );
}
