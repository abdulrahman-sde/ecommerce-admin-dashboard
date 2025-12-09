import { CustomerGrowth } from "@/components/dashboard/reports/CustomerGrowth";
import { VisitorStats } from "@/components/dashboard/reports/VisitorStats";
import { customerGrowthData, visitorStatsData } from "@/constants/constants";

export default function Reports() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Reports</h2>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-emerald-600/90 h-10 px-4 py-2 bg-[#42a36e] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Export
          </button>
        </div>
      </div>

      <div className="w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <CustomerGrowth data={customerGrowthData} />
      </div>
      <VisitorStats data={visitorStatsData} />
    </div>
  );
}
