// hooks/useBuyOrder.js
import { createBuyOrder } from "@/api/buyOrder";
import { buyOrderData } from "@/type/buyOrder";

export function useBuyOrder() {
  const res = async (orderData: buyOrderData) => {
    try {
      const result = await createBuyOrder(orderData);
      // 处理成功的结果
      return result;
    } catch (error) {
      // 处理错误
      console.error("Error placing order:", error);
    }
  };

  return res;
}

export default useBuyOrder;
