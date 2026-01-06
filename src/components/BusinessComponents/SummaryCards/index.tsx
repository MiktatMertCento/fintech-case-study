import {SummaryCard} from "components";

import {TotalBalanceIcon, TotalSavedIcon} from "assets/icons";
import {useGetSummary} from "core/Queries/FinancialQueries";

function SummaryCards() {
    const summaryQuery = useGetSummary();
    const response = summaryQuery.data;

    return (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            <SummaryCard
                label="Total balance"
                price={response?.totalBalance.amount}
                currency={response?.totalBalance.currency}
                isLoading={summaryQuery.isLoading}
                Icon={TotalBalanceIcon}
            />

            <SummaryCard
                label="Total spending"
                price={response?.totalExpense.amount}
                currency={response?.totalExpense.currency}
                isLoading={summaryQuery.isLoading}
                Icon={TotalBalanceIcon}
            />

            <SummaryCard
                label="Total saved"
                price={response?.totalSavings.amount}
                currency={response?.totalSavings.currency}
                isLoading={summaryQuery.isLoading}
                Icon={TotalSavedIcon}
            />
        </div>
    );
}

export default SummaryCards;
