import { CoinInfo } from "@/components/coinInfo";
import { CoinTabs } from "@/components/coinTabs";
import { HeadComp } from "@/components/head";
import PostButton from "@/components/postButton";

export default function Detail() {
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
      <CoinTabs />
      <PostButton />
    </main>
  );
}
