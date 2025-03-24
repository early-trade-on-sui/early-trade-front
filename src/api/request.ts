import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "sonner";

// 创建 Axios 实例，设置基础 URL 和 JSON 头等配置
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "/api", // 基础路径，可从环境变量中读取
  timeout: 10000, // 请求超时时间(ms)
  headers: { "Content-Type": "application/json" }, // 默认以 JSON 形式发送
});

// 请求拦截器：在请求发送前执行
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 从本地存储或上下文中获取 token（此处假设 token 存在 localStorage）
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // 在请求头添加 Authorization 字段
    }
    return config;
  },
  (error: AxiosError) => {
    // 请求发送失败的统一处理
    return Promise.reject(error);
  }
);

// 响应拦截器：在响应返回后、进入 then/catch 前执行
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response; // 直接返回响应数据，在具体请求中自行处理 .data
  },
  (error: AxiosError) => {
    // 统一错误处理
    const { response } = error;
    let messageText = "请求失败，请稍后重试";
    if (response) {
      // 根据不同响应状态码设置错误提示信息
      switch (response.status) {
        case 401:
          messageText = "未授权，请登录";
          // 可在此处执行如登出逻辑或跳转登录页
          break;
        case 403:
          messageText = "拒绝访问";
          break;
        case 404:
          messageText = "接口不存在";
          break;
        case 500:
          messageText = "服务器错误";
          break;
        default:
          // 如果后端有返回错误消息，则使用后端的消息，否则使用状态文本
          messageText = `请求错误，状态码 ${response.status}`;
      }
    } else {
      // response 未定义，可能是网络错误或超时
      messageText = error.message || "网络连接错误";
    }
    // 使用全局消息组件提示错误
    toast.error(messageText);

    return Promise.reject(error); // 将错误继续抛出，方便后续按需捕获
  }
);

export default axiosInstance; // services/http.ts
