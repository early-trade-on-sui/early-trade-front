import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

interface Coin {
  symbol: string;
  name: string;
  fullName: string;
  volume: string;
  price: number;
  priceChange: number;
  icon: string;
}

interface CoinListProps {
  availableCoins: Coin[];
  pastCoins: Coin[];
}

export const CoinList: React.FC<CoinListProps> = ({
  availableCoins,
  pastCoins,
}) => {
  const renderCoinItem = (coin: Coin) => (
    <div
      className="flex justify-between items-center p-4 border-b border-gray-200"
      key={coin.symbol}
    >
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">{coin.symbol}</span>
            <span className="text-gray-500">({coin.fullName})</span>
          </div>
          <div className="text-sm text-gray-500">Vol {coin.volume}</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm text-gray-500 mb-1">Last price (USDC)</div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{coin.price}</span>
          <span
            className={`${
              coin.priceChange > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {coin.priceChange > 0 ? "+" : ""}
            {coin.priceChange}%
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-5">Available Coins</h2>
      <div className="flex flex-col gap-4 mb-8">
        {availableCoins.map(renderCoinItem)}
      </div>

      <h2 className="text-2xl font-semibold mb-5">Past Coins</h2>
      <div className="flex flex-col gap-4">{pastCoins.map(renderCoinItem)}</div>
    </div>
  );
};
