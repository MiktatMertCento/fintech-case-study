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

export interface Card {
  id: string;
  name: string;
  type: string;
  cardNumber: string;
  bank: string;
  network: string;
  expiryMonth: number;
  expiryYear: number;
  color: string;
  isDefault: boolean;
}

export interface CardsResponse {
  cards: Card[];
}

export interface Transaction {
  id: string;
  name: string;
  business: string;
  image: string;
  type: string;
  amount: number;
  currency: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

export interface TransactionSummary {
  totalIncome: number;
  totalExpense: number;
  count: number;
}

export interface TransactionsResponse {
  transactions: Transaction[];
  summary: TransactionSummary;
}
