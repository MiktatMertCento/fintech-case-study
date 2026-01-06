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

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-9">
            <div className="flex flex-col gap-6 xl:col-span-6">
                <SummaryCards />
                <WorkingCapital />
                <RecentTransactions />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:col-span-3 xl:flex xl:flex-col">
                <WalletsCard />
                <ScheduledTransfers />
            </div>
        </div>
    </Layout>
  );
}

export default DashboardPage;
