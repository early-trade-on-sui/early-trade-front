"use client";

import { ConnectWalletButton } from "./connectWalletButton";
import { Logo } from "./logo";
import { MenubarComp } from "./menubarComp";

export function HeadComp() {
  return (
    <>
      <div className="w-full p-5 h-16 flex items-center justify-between bg-white">
        <div className="w-full">
          <Logo />
        </div>
        <div className="flex justify-end">
          <div className="flex items-center  gap-2 ml-auto">
            <ConnectWalletButton />
            {/* <button className="p-2" aria-label="Menu">
              <Menu size={24} />
            </button> */}
            <MenubarComp />
          </div>
        </div>
      </div>
    </>
  );
}
