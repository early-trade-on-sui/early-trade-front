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
    unitPrice: "0.2909",
    amount: "100.80K",
    orderMaker: "0x69.483a",
    operation: "Buy",
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

export function BuyTable() {
  return (
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
              <button className="bg-green-100 px-3 py-1 rounded-full text-green-800">
                {order.operation}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
