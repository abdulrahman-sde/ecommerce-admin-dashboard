import { StatCard } from "@/components/shared/StatCard";
import CustomerOverview from "@/components/dashboard/customers/CustomerOverview";
import { CustomerTable } from "@/components/dashboard/customers/CustomerTable";
import { customerStatsData, customerOverviewData } from "@/constants/constants";

export default function Users() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Customer Stat Cards */}
        <div className="lg:col-span-1 grid grid-cols-1 gap-4">
          {customerStatsData.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              subtitle={stat.subtitle}
            />
          ))}
        </div>

        {/* Customer Overview Chart */}
        <div className="lg:col-span-3">
          <CustomerOverview data={customerOverviewData} />
        </div>
      </div>

      {/* Customer Table */}
      <CustomerTable />
    </div>
  );
}
