"use client";
import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import XIcon from "@mui/icons-material/X";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HeadBar() {
  return (
    <>
      <header
        className="fixed z-50 top-0 left-0 right-0 backdrop-blur-[2px] 
       bg-gradient-to-b from-zinc-500/40 to-black/20 w-full justify-between 
       items-center shadow-none border-b border-gray-50/50 bg-transparent"
      >
        <Toolbar className="max-w-screen-xl mx-auto w-full flex justify-between items-center ">
          <Box
            className={`${dancingScript.className} w-[102px] h-[24px] text-center flex items-center justify-center text-[24px] leading-[24px] text-white font-normal`}
          >
            Early Trade
          </Box>
          <Box>
            <IconButton color="inherit" aria-label="LinkedIn" component="a">
              <XIcon className="text-white" />
            </IconButton>
          </Box>
        </Toolbar>
      </header>
    </>
  );
}
