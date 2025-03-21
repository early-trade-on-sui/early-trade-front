import { CoinList } from "@/components/coinList";
import { HeadComp } from "@/components/head";
import { ProjectNum } from "@/components/projectNum";
import { CoinListProps } from "@/type/coin";

export default function Detail() {
  const coinListProps: CoinListProps = {
    availableCoins: [
      {
        id: 1,
        symbol: "BTC",
        name: "Bitcoin",
        fullName: "Bitcoin",
        volume: "1.2M",
        price: 65000,
        priceChange: 2.5,
        icon: "/btc.png",
      },
      {
        id: 2,
        symbol: "ETH",
        name: "Ethereum",
        fullName: "Ethereum",
        volume: "890K",
        price: 3200,
        priceChange: -1.2,
        icon: "/eth.png",
      },
    ],
    pastCoins: [
      {
        id: 3,
        symbol: "DOGE",
        name: "Dogecoin",
        fullName: "Dogecoin",
        volume: "500K",
        price: 0.12,
        priceChange: 5.8,
        icon: "/doge.png",
      },
    ],
  };

  return (
    <main>
      <HeadComp />
      <ProjectNum projects={7} participation={291327} volume={89989802} />
      <CoinList {...coinListProps} />
    </main>
  );
}
