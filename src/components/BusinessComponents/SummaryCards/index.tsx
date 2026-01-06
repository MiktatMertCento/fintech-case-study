import { SummaryCard } from "components";

import { DashboardIcon } from "assets/icons";
import { useGetSummary } from "core/Queries/FinancialQueries";

function SummaryCards() {
  const summaryQuery = useGetSummary();
  const response = summaryQuery.data;

  return (
    <>
      <div className="xl:col-span-2">
        <SummaryCard
          label="Total balance"
          price={response?.totalBalance.amount}
          currency={response?.totalBalance.currency}
          isLoading={summaryQuery.isLoading}
          Icon={DashboardIcon}
        />
      </div>

      <div className="xl:col-span-2">
        <SummaryCard
          label="Total spending"
          price={response?.totalExpense.amount}
          currency={response?.totalExpense.currency}
          isLoading={summaryQuery.isLoading}
          Icon={DashboardIcon}
        />
      </div>

      <div className="md:col-span-2 lg:col-span-1 xl:col-span-2">
        <SummaryCard
          label="Total saved"
          price={response?.totalSavings.amount}
          currency={response?.totalSavings.currency}
          isLoading={summaryQuery.isLoading}
          Icon={DashboardIcon}
        />
      </div>
    </>
  );
}

export default SummaryCards;
