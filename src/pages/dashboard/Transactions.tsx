import { StatCard } from "@/components/shared/StatCard";
import PaymentMethodCard from "@/components/dashboard/transactions/PaymentMethodCard";
import TransactionHistoryTable from "@/components/dashboard/transactions/TransactionHistoryTable";
import {
  transactionStatsData,
  paymentCardData,
  transactionHistoryData,
} from "@/constants/constants";

export default function Transactions() {
  return (
    <div className="space-y-6">
      <div className="grid grid-col-1 md:grid-cols-2 gap-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {transactionStatsData.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
              change={stat.change}
            />
          ))}
        </div>
        <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <PaymentMethodCard card={paymentCardData} />
        </div>
      </div>

      {/* Transaction History Table */}
      <TransactionHistoryTable transactions={transactionHistoryData} />
    </div>
  );
}
