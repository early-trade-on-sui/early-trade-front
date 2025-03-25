import React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  // DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { createBuyOrder } from "@/api/buyOrder";
import { buyOrderData } from "@/type/buyOrder";
import Typography from "@mui/material/Typography/Typography";
import TextField from "@mui/material/TextField/TextField";

interface PostButtonProps {
  disabled?: boolean;
  color?: string;
  tabTwoIndex?: number;
}

export default function PostButton({
  disabled = false,
  tabTwoIndex = 0,
}: PostButtonProps) {
  const buttonBgColor = tabTwoIndex === 0 ? "bg-green-400/90" : "bg-red-400/90";

  const handleButtonClick = async () => {
    try {
      const orderData: buyOrderData = {
        price: 11,
        amount: 12,
      };
      const result = await createBuyOrder(orderData);

      // 处理成功的结果
      return result;
    } catch (error) {
      // 处理错误
      console.error("Error placing order:", error);
    }
  };
  return (
    <>
      <Drawer>
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
          <DrawerTrigger asChild>
            <Button
              className={`w-full text-white h-12 ${buttonBgColor}`}
              disabled={disabled}
            >
              {tabTwoIndex === 0 ? "post sell order" : "post buy order"}
            </Button>
          </DrawerTrigger>
        </div>

        <DrawerContent className="h-4/5">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle />
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            {/* 
            <div className="pb-0">
              <div className="p-2 max-w-md mx-auto">
                <div className="mb-2">
                  <Typography variant="body1" className="font-medium">
                    Price
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Highest buy price 0.2909"
                    InputProps={{
                      endAdornment: <Typography>USD</Typography>,
                    }}
                  />
                </div>
                <div className="mb-2">
                  <Typography variant="body1" className="font-medium">
                    Amount
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter Amount"
                    InputProps={{
                      endAdornment: (
                        <Typography color="primary">WAL</Typography>
                      ),
                    }}
                  />
                </div>
                <div className="text-gray-500 mb-2">
                  <Typography>Balance: 12232 USDC</Typography>
                  <Typography>Margin: 0 USDC</Typography>
                  <Typography>Transaction Fee: 0 USDC</Typography>
                </div>
              </div>
            </div> */}
            <div className="pb-0">
              <div className="p-2 max-w-md mx-auto">
                <div className="mb-2">
                  <Typography variant="body1" className="font-medium">
                    Price
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Highest buy price 0.2909"
                    InputProps={{
                      endAdornment: <Typography>USD</Typography>,
                    }}
                  />
                </div>
                <div className="mb-2">
                  <Typography variant="body1" className="font-medium">
                    Amount
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter Amount"
                    InputProps={{
                      endAdornment: (
                        <Typography color="primary">WAL</Typography>
                      ),
                    }}
                  />
                </div>
                <div className="text-gray-500 mb-2">
                  <Typography>Balance: 12232 USDC</Typography>
                  <Typography>Margin: 0 USDC</Typography>
                  <Typography>Transaction Fee: 0 USDC</Typography>
                </div>
              </div>
            </div>

            <DrawerFooter className="p-2">
              {/* <DrawerClose asChild> */}
              <Button
                className={`w-full  text-white h-12 ${buttonBgColor}`}
                onClick={handleButtonClick} // 使用 handleButtonClick
              >
                {tabTwoIndex === 0 ? "post sell order" : "post buy order"}
              </Button>
              {/* </DrawerClose> */}
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
