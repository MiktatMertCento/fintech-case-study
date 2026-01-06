import { CreditCardItem } from "components/index";

import { ThreePointIcon } from "assets/icons";
import { useGetCards } from "core/Queries/FinancialQueries";

function WalletsCard() {
  const { data: response, isLoading } = useGetCards();
  const cards = response?.cards || [];

  if (isLoading) {
    return (
      <div className="flex flex-col rounded-xl border border-gray4Background bg-white px-6 py-5 animate-pulse min-h-100"></div>
    );
  }

  return (
    <div className="flex flex-col rounded-xl border border-gray4Background bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-text1Color">Wallet</h3>
        <button className="cursor-pointer text-text3Color transition-opacity hover:opacity-80">
          <ThreePointIcon />
        </button>
      </div>

      <div className="relative w-full h-90">
        {cards.map((card, index) => (
          <CreditCardItem key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}

export default WalletsCard;
