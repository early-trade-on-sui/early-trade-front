"use client";
import {
  createNetworkConfig,
  lightTheme,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
interface SuiProviderProps {
  children: ReactNode;
}
const { networkConfig } = createNetworkConfig({
  localnet: {
    url: process.env.NEXT_PUBLIC_SUI_NODE_URL || getFullnodeUrl("mainnet"),
  },
  mainnet: { url: getFullnodeUrl("mainnet") },
});
const queryClient = new QueryClient();
const SuiProvider: FC<SuiProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
        <WalletProvider theme={lightTheme}>{children}</WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default SuiProvider;
