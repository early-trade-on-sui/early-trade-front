export interface Coin {
  id: number;
  symbol: string;
  name: string;
  fullName: string;
  volume: string;
  price: number;
  priceChange: number;
  icon: string;
}

export interface CoinListProps {
  availableCoins: Coin[];
  pastCoins: Coin[];
}
