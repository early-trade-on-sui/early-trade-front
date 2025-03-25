"use client";
import {
  Menu as MenuIcon,
  ChartCandlestick,
  WalletMinimal,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, MenuItem } from "@mui/material";

export function MenubarComp() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();

  return (
    <div>
      <button onClick={handleClick} className="p-2" aria-label="Menu">
        <MenuIcon size={24} />
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            // 修改 Menu 的根Paper组件样式
            width: "100%", // 设置宽度为100%
            maxWidth: "100vw", // 最大宽度为视窗宽度
            left: "0 !important", // 确保左对齐
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/preMarket");
          }}
        >
          <ChartCandlestick size={20} />
          <span>Pre-Market</span>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/order");
          }}
          className="items-center gap-2"
        >
          <WalletMinimal size={20} />
          <span>Order</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
