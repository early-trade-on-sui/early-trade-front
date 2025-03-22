import { HistoryItem } from "@/type/historyList";
import React from "react";

interface HistoryListProps {
  historyData: HistoryItem[];
}

const HistoryList: React.FC<HistoryListProps> = ({ historyData }) => {
  return (
    <div className="space-y-4">
      {historyData.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                W
              </div>
              <span
                className={`ml-2 ${
                  item.type === "Buy" ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.type}
              </span>
            </div>
            <span>{item.status}</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <div>Price</div>
              <div>{item.price}</div>
            </div>
            <div>
              <div>Amount</div>
              <div>{item.amount}</div>
            </div>
            <div>
              <div>PnL</div>
              <div
                className={item.pnl >= 0 ? "text-green-500" : "text-red-500"}
              >
                {item.pnl > 0 ? `+${item.pnl} USDC` : `${item.pnl} USDC`}
              </div>
            </div>
          </div>
          {item.status === "Success" && item.settlement && (
            <div className="mt-2">
              <div>Settlement</div>
              <div>{item.settlement}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
