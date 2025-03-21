"use client";

import { Box, Tab, Tabs as MTabs } from "@mui/material";
import { useState } from "react";
import { X } from "lucide-react";
// import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BuyTable } from "../buyTable";
import { SellTable } from "../sellTable";
import { MarketsTable } from "../marketsTable";
import { CoinInfoValue } from "../coinInfoValue";

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

export function CoinTabs({
  setIndex,
  setTabTwoIndex,
}: {
  setIndex: (index: number) => void;
  setTabTwoIndex: (index: number) => void;
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setIndex(newValue);
    setTabTwoIndex(newValue);
  };

  const handleTabTwoIndexChange = (index: number) => {
    setTabTwoIndex(index);
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
        <CoinInfoValue />
        {/* <Separator className="my-2" /> */}
        <Tabs defaultValue="buy" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="buy" onClick={() => handleTabTwoIndexChange(0)}>
              Buy
            </TabsTrigger>
            <TabsTrigger
              value="sell"
              onClick={() => handleTabTwoIndexChange(1)}
            >
              Sell
            </TabsTrigger>
            <TabsTrigger
              value="markets"
              onClick={() => handleTabTwoIndexChange(2)}
            >
              Markets
            </TabsTrigger>
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
        <CoinInfoValue />
        <div className="space-y-6">
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
