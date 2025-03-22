export interface HistoryItem {
  type: "Buy" | "Sell";
  status: "Default" | "Success";
  price: number;
  amount: number;
  pnl: number;
  settlement?: string;
}
