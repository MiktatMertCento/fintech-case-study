import { useGetCards } from "core/Queries/FinancialQueries";

function WalletsCard() {
  const { data: response } = useGetCards();

  return (
    <div className="order-last h-full rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-4 md:col-span-1 xl:order-0 xl:col-span-3">
      <h3 className="mb-4 font-bold text-gray-700">Wallet</h3>
      {(response?.cards ?? []).map((card) => (
        <div key={card.cardNumber}>{card.cardNumber}</div>
      ))}
    </div>
  );
}

export default WalletsCard;
