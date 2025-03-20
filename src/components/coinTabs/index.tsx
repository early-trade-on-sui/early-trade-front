"use client";

import { Box, Tab, Tabs as MTabs } from "@mui/material";
import { useState } from "react";
import { X } from "lucide-react";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BuyTable } from "../buyTable";
import { SellTable } from "../sellTable";
import { MarketsTable } from "../marketsTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
      className="p-4"
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export function CoinTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MTabs value={value} onChange={handleChange}>
          <Tab
            label="Pre-market"
            sx={{
              color: value === 0 ? "text.primary" : "text.secondary",
              fontWeight: value === 0 ? "bold" : "normal",
            }}
          />
          <Tab
            label="Coin overview"
            sx={{
              color: value === 1 ? "text.primary" : "text.secondary",
              fontWeight: value === 1 ? "bold" : "normal",
            }}
          />
        </MTabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <div className="space-y-4">
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
        <Separator className="my-2" />
        <Tabs defaultValue="buy" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
            <TabsTrigger value="markets">Markets</TabsTrigger>
          </TabsList>
          <TabsContent value="buy">
            <BuyTable />
          </TabsContent>
          <TabsContent value="sell">
            <SellTable />
          </TabsContent>
          <TabsContent value="markets">
            <MarketsTable />
          </TabsContent>
        </Tabs>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Total supply</span>
              <span className="font-medium">100.00B</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Coin Type</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">0x356a...4f59</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Community</h3>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full">
                <X size={16} />
                <span>Twitter</span>
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full">
                {/* <Discord size={16} /> */}
                <span>Discord</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Resources</h3>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Website</span>
            </button>
          </div>

          <div>
            <h3 className="font-medium mb-2">Introduction</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Walrus is a novel approach to decentralized blob storage, built to
              operate on top of the Sui blockchain. Its designed to provide
              robust, efficient, and scalable storage for decentralized
              applications (dApps) that require high levels of integrity,
              availability, and authenticity for their data. Unlike traditional
              decentralized storage systems that rely on full replication,
              Walrus optimizes data storage with a new encoding protocol that
              reduces replication costs while ensuring data reliability even
              under byzantine fault conditions.
            </p>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
