import { useGetCards } from "core/Queries/FinancialQueries";

function WalletsCard() {
  const { data: response } = useGetCards();

  return (
    <div className="order-last min-h-75 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 md:col-span-2 lg:col-span-3 xl:order-0 xl:col-span-3 xl:row-span-3">
      {(response?.cards ?? []).map((card) => (
        <div key={card.cardNumber}>{card.cardNumber}</div>
      ))}
    </div>
  );
}

export default WalletsCard;
