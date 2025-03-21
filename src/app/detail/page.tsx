"use client";
import { CoinInfo } from "@/components/coinInfo";
import { CoinTabs } from "@/components/coinTabs";
import { HeadComp } from "@/components/head";
import PostButton from "@/components/postButton";
import { useState } from "react";

export default function Detail() {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabTwoIndex, setTabTwoIndex] = useState(0);

  return (
    <main>
      <HeadComp />
      <CoinInfo
        symbol="WAL"
        name="Walrus"
        status="In Progress"
        price={0.1888}
        priceChange={27.9}
      />
      <CoinTabs setIndex={setTabIndex} setTabTwoIndex={setTabTwoIndex} />
      {tabIndex === 0 && (tabTwoIndex === 0 || tabTwoIndex === 1) && (
        <PostButton tabTwoIndex={tabTwoIndex} />
      )}
    </main>
  );
}
