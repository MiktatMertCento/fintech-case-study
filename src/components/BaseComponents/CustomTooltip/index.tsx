import { formatCurrency } from "lib/utils";

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-gray-800 p-3 shadow-xl ring-1 ring-gray-700">
        <p className="mb-1 text-xs font-semibold text-gray-400">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm font-medium text-white"
          >
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <div>
              {entry.name === "income" ? "Gelir" : "Gider"}:{" "}
              {formatCurrency(entry.value)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
