"use client";

interface CoinInfoProps {
  symbol: string;
  name: string;
  status?: "In Progress" | "Completed";
  price: number;
  priceChange: number;
}

export function CoinInfo({
  symbol,
  name,
  status = "In Progress",
  price,
  priceChange,
}: CoinInfoProps) {
  return (
    <div className="flex p-5 items-center gap-4">
      {/* 代币图标 */}
      <div className="w-12 h-12 bg-[#BDFFF3] rounded-full flex items-center justify-center">
        <span className="text-xl font-bold">{symbol[0]}</span>
      </div>

      <div className="flex flex-col gap-1">
        {/* 代币符号和状态 */}
        <div className="flex items-center gap-2">
          <span className="font-bold">{symbol}</span>
          <span className="px-2 py-0.5 text-sm text-green-700 bg-green-100 rounded-full">
            {status}
          </span>
        </div>

        {/* 代币名称 */}
        <span className="text-gray-500">{name}</span>
      </div>

      {/* 价格信息 */}
      <div className="ml-auto flex items-center gap-2">
        <span className="font-bold">{price.toFixed(4)}</span>
        <span
          className={`${priceChange >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {priceChange >= 0 ? "+" : ""}
          {priceChange.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}
