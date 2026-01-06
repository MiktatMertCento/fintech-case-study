export interface FinancialChange {
  percentage: number;
  trend: "up" | "down";
}

export interface FinancialDetail {
  amount: number;
  currency: string;
  change: FinancialChange;
}

export interface SummaryResponse {
  totalBalance: FinancialDetail;
  totalExpense: FinancialDetail;
  totalSavings: FinancialDetail;
  lastUpdated: string;
}

export interface MonthlyData {
  month: string;
  income: number;
  expense: number;
  net: number;
}

export interface PeriodSummary {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
}

export interface WorkingCapitalResponse {
  period: string;
  currency: string;
  data: MonthlyData[];
  summary: PeriodSummary;
}
