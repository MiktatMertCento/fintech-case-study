import { Helmet } from "react-helmet-async";

import {
  Layout,
  RecentTransactions,
  ScheduledTransfers,
  SummaryCards,
  WalletsCard,
  WorkingCapital,
} from "components";

function DashboardPage() {
  return (
      <Layout>
        <Helmet title="Fintech - Dashboard" />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-9 xl:gap-6">
          <div className="flex flex-col gap-4 xl:col-span-6 3xl:col-span-7 xl:gap-6">
            <SummaryCards />
            <WorkingCapital />
            <RecentTransactions />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:col-span-3 3xl:col-span-2 xl:flex xl:flex-col xl:gap-6">
            <WalletsCard />
            <ScheduledTransfers />
          </div>
        </div>
      </Layout>
  );
}

export default DashboardPage;
