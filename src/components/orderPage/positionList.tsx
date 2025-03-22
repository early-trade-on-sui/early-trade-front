interface PositionCardProps {
  type: string;
  deliveryTime: string;
  price: number;
  amount: string;
  collateral: string;
}
const PositionCard = ({
  type,
  deliveryTime,
  price,
  amount,
  collateral,
}: PositionCardProps) => (
  <div className="p-4 border-b">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
          W
        </div>
        <span className="ml-2 text-green-500 font-semibold">{type}</span>
      </div>
    </div>
    <div className="mt-2 text-gray-600">
      <div>Delivery time(UTC+8)</div>
      <div>{deliveryTime}</div>
    </div>
    <div className="mt-4 flex justify-between text-gray-700">
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
    <button
      className="mt-4 w-full bg-gray-300 text-gray-500 py-2 rounded"
      disabled
    >
      Settle
    </button>
  </div>
);

// 使用 OrderCard 组件
export default function PositionList() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <PositionCard
        type="Buy"
        deliveryTime="2025-08-08 02:00:00 ~ 2025-08-08 08:00:00"
        price={0.01}
        amount="100"
        collateral="10 USDC"
      />
      <PositionCard
        type="Buy"
        deliveryTime="Pending"
        price={0.01}
        amount="100"
        collateral="10 USDC"
      />
    </div>
  );
}
