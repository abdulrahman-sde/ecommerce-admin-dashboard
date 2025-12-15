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
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(350px,500px)] gap-4">
        {/* Stats Grid - Takes flexible space on left */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
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

        {/* Payment Card - Fixed width on large screens */}
        <div className="xl:row-span-1">
          <PaymentMethodCard card={paymentCardData} />
        </div>
      </div>

      {/* Transaction History Table */}
      <TransactionHistoryTable transactions={transactionHistoryData} />
    </div>
  );
}
