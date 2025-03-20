import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    amount: "16.72K",
    unitPrice: "0.0061",
    time: "2025-03-18 20:56:06",
  },
  {
    unitPrice: "0.3909",
    amount: "100.80K",
    orderMaker: "0x69.483a",
    operation: "Buy",
  },
  {
    unitPrice: "0.4909",
    amount: "100.80K",
    orderMaker: "0x69.483a",
    operation: "Buy",
  },
  {
    unitPrice: "0.6909",
    amount: "100.80K",
    orderMaker: "0x69.483a",
    operation: "Buy",
  },
  {
    unitPrice: "0.8909",
    amount: "100.80K",
    orderMaker: "0x69.483a",
    operation: "Buy",
  },
  {
    unitPrice: "0.9909",
    amount: "100.80K",
    orderMaker: "0x69.483a",
    operation: "Buy",
  },
  {
    unitPrice: "1.2909",
    amount: "100.80K",
    orderMaker: "0x69.483a",
    operation: "Buy",
  },
];

export function CoinTxHistoryTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Amount</TableHead>
          <TableHead>Unit Price</TableHead>
          <TableHead>Time(UTC+8)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index}>
            <TableCell>{order.amount}</TableCell>
            <TableCell>{order.unitPrice}</TableCell>
            <TableCell>{order.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
