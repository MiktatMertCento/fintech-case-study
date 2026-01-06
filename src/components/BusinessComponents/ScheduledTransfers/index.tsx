import { useGetScheduledTransfers } from "core/Queries/FinancialQueries";
import { formatCurrency, formatDate } from "lib/utils";

function ScheduledTransfers() {
  const { data: response, isLoading } = useGetScheduledTransfers();
  const transfers = response?.transfers || [];

  if (isLoading) {
    return (
      <div className="order-last flex h-full flex-col rounded-xl border border-gray4Background bg-white px-6 py-5 md:col-span-1 xl:order-0 xl:col-span-3">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-7 w-40 animate-pulse rounded-md bg-gray-200" />
          <div className="h-5 w-16 animate-pulse rounded-md bg-gray-200" />
        </div>
        <div className="flex flex-col gap-5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                  <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
              <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="order-last flex h-full flex-col rounded-xl border border-gray4Background bg-white px-6 py-5 md:col-span-1 xl:order-0 xl:col-span-3">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-text1Color">
          Scheduled Transfers
        </h2>
        <button className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-secondaryColor transition-opacity hover:opacity-80">
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

      <div className="flex flex-col">
        {transfers.map((transfer: any, index: number) => (
          <div
            key={transfer.id || index}
            className={`flex items-center justify-between py-4 ${
              index !== 0 ? "border-t border-gray4Background" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-100 bg-gray-50">
                {transfer.avatar || transfer.image ? (
                  <img
                    src={transfer.avatar || transfer.image}
                    alt={transfer.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="text-lg font-bold text-gray-400">
                    {transfer.name?.charAt(0)}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div className="text-base font-bold text-text1Color">
                  {transfer.name}
                </div>
                <div className="text-xs text-text2Color">
                  {formatDate(transfer.date)}
                </div>
              </div>
            </div>

            {/* TODO: currency yanlış formatta geldiği için hard coded olarak yazıldı. */}
            <div className="text-base font-bold text-text1Color">
              - {formatCurrency(Math.abs(transfer.amount), "USD")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduledTransfers;
