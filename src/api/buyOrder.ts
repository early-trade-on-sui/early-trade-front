import { buyOrderData } from "@/type/buyOrder";
import axiosInstance from "./request";

export const createBuyOrder = async (orderData: buyOrderData) => {
  try {
    const response = await axiosInstance.post("/buyOrder/add", orderData);
    return response.data; // 返回响应数据
  } catch (error) {
    throw error; // 抛出错误以便后续处理
  }
};
