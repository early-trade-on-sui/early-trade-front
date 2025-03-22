import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CoinSelect } from "./coinSelect";
import ActiveList from "./activeList";
import PositionList from "./positionList";
import HistoryList from "./historyList";
import { HistoryItem } from "@/type/historyList";

// interface OrderTabProps {
//   // 定义组件的属性
// }
const historyData: HistoryItem[] = [
  { type: "Buy", status: "Default", price: 0.1, amount: 100, pnl: 10 },
  { type: "Sell", status: "Default", price: 0.1, amount: 100, pnl: -10 },
  {
    type: "Buy",
    status: "Success",
    price: 0.1,
    amount: 100,
    pnl: 0,
    settlement: "10 USCD → 100 WAL",
  },
  {
    type: "Sell",
    status: "Success",
    price: 0.1,
    amount: 100,
    pnl: 0,
    settlement: "100 WAL → 10 USDC",
  },
];

export default function OrderTab({}) {
  return (
    <div className="w-full p-6 flex flex-col  justify-center ">
      <h2 className="text-2xl font-semibold mb-5 pl-1.5">My Order</h2>
      <Tabs defaultValue="active" className="w-full space-y-5">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="position">Position</TabsTrigger>
          <TabsTrigger value="positionHistory">Position history</TabsTrigger>
        </TabsList>
        <CoinSelect />
        <TabsContent value="active">
          <ActiveList />
        </TabsContent>
        <TabsContent value="position">
          <PositionList />
        </TabsContent>
        <TabsContent value="positionHistory">
          <HistoryList historyData={historyData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
