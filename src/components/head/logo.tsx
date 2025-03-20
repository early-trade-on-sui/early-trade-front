"use client";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Logo() {
  return (
    <div
      className={`${dancingScript.className} w-[102px] h-[24px] text-center flex items-center justify-center text-[24px] leading-[24px] text-black font-normal`}
    >
      Early Trade
    </div>
  );
}
