"use client";
import {
  Menu as MenuIcon,
  ChartCandlestick,
  WalletMinimal,
} from "lucide-react";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";

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
      >
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/preMarket");
          }}
          className=" max-w-[200px] items-center gap-2"
        >
          <ChartCandlestick size={20} />
          <span>Pre-Market</span>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/order");
          }}
          className=" max-w-[200px] items-center gap-2"
        >
          <WalletMinimal size={20} />
          <span>Order</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
