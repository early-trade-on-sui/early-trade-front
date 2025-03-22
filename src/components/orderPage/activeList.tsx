import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

interface OrderCardProps {
  symbol: string;
  action: string;
  price: number;
  amount: string;
  collateral: string;
}

const OrderCard: React.FC<OrderCardProps> = ({
  symbol,
  action,
  price,
  amount,
  collateral,
}) => {
  return (
    <div className=" p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="pr-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
        <span className="font-bold">{symbol}</span>
        <Separator orientation="vertical" />
        <span className="ml-2 text-green-600">{action}</span>
      </div>
      <div className="flex justify-between mb-2">
        <div>
          <div>Price</div>
          <div>{price}</div>
        </div>
        <div>
          <div>Amount</div>
          <div>{amount}</div>
        </div>
        <div>
          <div>Collateral</div>
          <div>{collateral}</div>
        </div>
      </div>
      <button className="w-full border-2  rounded-2xl py-2">Cancel</button>
    </div>
  );
};

export default function ActiveList() {
  return (
    <div>
      <OrderCard
        symbol="WAV"
        action="Buy"
        price={0.01}
        amount="0/100"
        collateral="0/10 USDC"
      />
      <Separator />
      <OrderCard
        symbol="WAV"
        action="Buy"
        price={0.01}
        amount="50/100"
        collateral="5/10 USDC"
      />
    </div>
  );
}
