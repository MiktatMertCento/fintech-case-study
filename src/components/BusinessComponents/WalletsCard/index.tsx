import {ThreePointIcon} from "assets/icons";
import {useGetCards} from "core/Queries/FinancialQueries";

function WalletsCard() {
    const {data: response, isLoading} = useGetCards();

    if (isLoading || !response?.cards) {
        return <div className="flex flex-col rounded-xl border border-gray4Background bg-white px-6 py-5"></div>;
    }

    return (
        <div className="flex flex-col rounded-xl border border-gray4Background bg-white px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-text1Color">Wallet</h3>
                <button className="cursor-pointer text-secondaryColor transition-opacity hover:opacity-80">
                    <ThreePointIcon/>
                </button>
            </div>

            {
                response.cards.map(card => <div key={card.cardNumber}>{card.cardNumber}</div>)
            }
        </div>
    );
}

export default WalletsCard;