export interface FinancialChange {
  percentage: number;
  trend: "up" | "down";
}

export interface FinancialDetail {
  amount: number;
  currency: string;
  change: FinancialChange;
}

export interface SummaryReponse {
  totalBalance: FinancialDetail;
  totalExpense: FinancialDetail;
  totalSavings: FinancialDetail;
  lastUpdated: string;
}
