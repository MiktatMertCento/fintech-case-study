import { Helmet } from "react-helmet-async";

import { Layout, SummaryCards } from "components";

function DashboardPage() {
  return (
    <Layout>
      <Helmet title="Fintech - Dashboard" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9 xl:grid-rows-[auto_auto_auto]">
        <SummaryCards />

        <div className="order-last min-h-75 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 md:col-span-2 lg:col-span-3 xl:order-0 xl:col-span-3 xl:row-span-3">
          Sağ Panel (Wallet)
        </div>

        <div className="h-64 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 md:col-span-2 lg:col-span-3 xl:col-span-6">
          Grafik 1
        </div>

        <div className="h-64 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 md:col-span-2 lg:col-span-3 xl:col-span-6">
          Tablo / Grafik 2
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
