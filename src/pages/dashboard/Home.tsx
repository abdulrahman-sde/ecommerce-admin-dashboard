import { StatsCard } from "@/components/dashboard/home/HomeStatsCard";
import WeeklyReport from "@/components/dashboard/home/WeeklyReport";
import CountryWiseSales from "@/components/dashboard/home/CountryWiseSales";
import RecentTransactions from "@/components/dashboard/home/RecentTransactions";
import TopProducts from "@/components/dashboard/home/TopProducts";
import BestSellingProduct from "@/components/dashboard/home/BestSellingProduct";
import AddNewProduct from "@/components/dashboard/home/AddNewProduct";
import {
  dashboardStats,
  weeklyReportData,
  countrySalesData,
  recentTransactionsData,
  topProductsData,
  bestSellingProductData,
  addNewProductData,
} from "@/constants/constants";

export default function DashboardHome() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {dashboardStats.map((stat, index) => (
          <StatsCard key={index} {...stat} className="shadow-sm border-0 " />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="col-span-3 xl:col-span-2 ">
          <WeeklyReport data={weeklyReportData} />
        </div>
        <div className="col-span-3  xl:col-span-1">
          <CountryWiseSales data={countrySalesData} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-7 gap-4 mt-5">
        <div className="col-span-1 xl:col-span-5">
          <RecentTransactions data={recentTransactionsData} />
        </div>
        <div className="col-span-1 xl:col-span-2">
          <TopProducts data={topProductsData} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="col-span-3 xl:col-span-2">
          <BestSellingProduct data={bestSellingProductData} />
        </div>
        <div className="col-span-3 xl:col-span-1">
          <AddNewProduct data={addNewProductData} />
        </div>
      </div>
    </div>
  );
}
