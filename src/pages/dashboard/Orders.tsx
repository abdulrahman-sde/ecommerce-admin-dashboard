import { StatCard } from "@/components/shared/StatCard";
import { OrdersTable } from "@/components/dashboard/orders/OrdersTable";
import { ordersStatsData, ordersTableData } from "@/constants/constants";

export default function Orders() {
  return (
    <div className="space-y-6">
      {/* Orders Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {ordersStatsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            subtitle={stat.subtitle}
          />
        ))}
      </div>

      {/* Orders Table */}
      <OrdersTable data={ordersTableData} />
    </div>
  );
}
