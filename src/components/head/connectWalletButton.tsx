"use client";
import { ConnectButton } from "@mysten/dapp-kit";

export function ConnectWalletButton() {
  return (
    <ConnectButton
      connectText="Connect"
      style={{
        backgroundColor: "#f2f2f2",
        color: "#000000",
        borderRadius: "8px",
        padding: "10px 16px",
        fontWeight: "bold",
      }}
    />
  );
}
