"use client";

import Box from "@mui/material/Box";

export function CoinInfoValue() {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <div className="space-y-4 p-5">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">24h total(USDC)</span>
          <span className="font-medium">238.77K</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Vol(USDC)</span>
          <span className="font-medium">1.05M</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Delivery time(UTC+8)</span>
          <span className="font-medium">Pending</span>
        </div>
      </div>
    </Box>
  );
}
