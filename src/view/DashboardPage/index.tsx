import { Helmet } from "react-helmet-async";

import {
  Layout,
  RecentTransactions,
  SummaryCards,
  WalletsCard,
  WorkingCapital,
} from "components";

function DashboardPage() {
  return (
    <Layout>
      <Helmet title="Fintech - Dashboard" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9 xl:grid-rows-[auto_auto_auto]">
        <SummaryCards />

        <WalletsCard />

        <WorkingCapital />

        <RecentTransactions />
      </div>
    </Layout>
  );
}

export default DashboardPage;
