import { useGetTransactions } from "core/Queries/FinancialQueries";
import { formatCurrency, formatDate } from "lib/utils";

function RecentTransactions() {
  const { data: response, isLoading } = useGetTransactions(3);
  const transactions = response?.transactions || [];

  if (isLoading) {
    return (
      <div className="flex h-full flex-col rounded-xl border border-gray4Background bg-white px-6 py-5 md:col-span-2 lg:col-span-3 xl:col-span-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-7 w-48 animate-pulse rounded-md bg-gray-200" />
          <div className="h-5 w-20 animate-pulse rounded-md bg-gray-200" />
        </div>
        <div className="flex flex-col gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-200" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                  <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
              <div className="hidden h-4 w-24 animate-pulse rounded bg-gray-200 md:block" />
              <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
              <div className="hidden h-4 w-24 animate-pulse rounded bg-gray-200 sm:block" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-xl border border-gray4Background bg-white px-6 py-5 md:col-span-2 lg:col-span-3 xl:col-span-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-text1Color">
          Recent Transaction
        </h2>
        <button className="flex items-center gap-1 text-sm font-semibold text-secondaryColor transition-opacity hover:opacity-80 cursor-pointer">
          View All
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-150 border-collapse">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase text-gray-400">
              <th className="pb-4 font-medium">NAME/BUSINESS</th>
              <th className="pb-4 font-medium">TYPE</th>
              <th className="pb-4 font-medium">AMOUNT</th>
              <th className="pb-4 text-right font-medium">DATE</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((trx) => (
              <tr
                key={trx.id}
                className="group border-t border-gray4Background"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src={trx.image}
                        alt={trx.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-text1Color">
                        {trx.name}
                      </div>
                      <div className="text-xs text-text2Color">
                        {trx.business}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="py-4 text-sm font-medium text-text2Color">
                  {trx.type}
                </td>

                <td className="py-4 text-sm font-semibold text-text1Color">
                  {formatCurrency(Math.abs(trx.amount), trx.currency)}
                </td>

                <td className="py-4 text-right text-sm font-medium text-gray-400">
                  {formatDate(trx.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTransactions;
