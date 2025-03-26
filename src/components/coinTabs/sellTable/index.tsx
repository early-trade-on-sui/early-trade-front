import BuyAndSell from "@/components/coinTabs/buyAndSell";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const orders = [
  {
    unitPrice: "0.2809",
    amount: "100.80K",
    orderMaker: "0x69..483a",
    operation: "Sell",
  },
  {
    unitPrice: "0.1909",
    amount: "100.80K",
    orderMaker: "0x69..483a",
    operation: "Sell",
  },
  {
    unitPrice: "0.0909",
    amount: "100.80K",
    orderMaker: "0x69..483a",
    operation: "Sell",
  },
  {
    unitPrice: "0.0809",
    amount: "100.80K",
    orderMaker: "0x69..483a",
    operation: "Sell",
  },
  {
    unitPrice: "0.0709",
    amount: "100.80K",
    orderMaker: "0x69..483a",
    operation: "Sell",
  },
];

export function SellTable() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Unit Price</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Order Maker</TableHead>
            <TableHead className="text-right">Operation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{order.unitPrice}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.orderMaker}</TableCell>
              <TableCell className="text-right">
                <button
                  className="bg-red-100 px-3 py-1 rounded-full text-red-800"
                  onClick={() => setOpen(true)}
                >
                  {order.operation}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <BuyAndSell type={false} open={open} onOpenChange={setOpen} />
    </>
  );
}
