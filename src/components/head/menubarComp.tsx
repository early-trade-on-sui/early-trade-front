import {
  Menu as MenuIcon,
  ChartCandlestick,
  WalletMinimal,
} from "lucide-react";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { MenuItem } from "@mui/material";

export function MenubarComp() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          className="flex w-full items-center gap-2"
        >
          <ChartCandlestick size={20} />
          <span>Pre-Market</span>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className="flex w-full items-center gap-2"
        >
          <WalletMinimal size={20} />
          <span>Dashboard</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
