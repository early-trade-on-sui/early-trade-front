"use client";

import { Box, Tab, Tabs as MTabs } from "@mui/material";
import { useState } from "react";
import { CoinPrice } from "../coinPrice";
import { CoinTxHistoryTable } from "../coinTxHistoryTable";

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

export function MarketsTable() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MTabs value={value} onChange={handleChange}>
          <Tab
            label="Price"
            sx={{
              color: value === 0 ? "text.primary" : "text.secondary",
              fontWeight: value === 0 ? "bold" : "normal",
              fontSize: "12px",
            }}
          />
          <Tab
            label="Transaction history"
            sx={{
              color: value === 1 ? "text.primary" : "text.secondary",
              fontWeight: value === 1 ? "bold" : "normal",
              fontSize: "12px",
            }}
          />
        </MTabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CoinPrice />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <CoinTxHistoryTable />
      </CustomTabPanel>
    </Box>
  );
}
