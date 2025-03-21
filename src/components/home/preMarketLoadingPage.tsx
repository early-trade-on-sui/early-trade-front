"use client";
// PreMarketLoadingPage.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const loadingTips = [
  "同步盘前行情数据中...",
  "连接交易所 API...",
  "分析市场波动趋势...",
  "准备进入交易界面...",
];

export default function PreMarketLoadingPage() {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % loadingTips.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center px-4">
      {/* Enhanced Loading Spinner */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full mb-8"
      />

      {/* Animated Text */}
      <motion.div
        key={tipIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg mb-10 text-cyan-300 tracking-wide"
      >
        {loadingTips[tipIndex]}
      </motion.div>

      {/* Skeleton Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-4 animate-pulse shadow-md"
          >
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-3" />
            <div className="h-4 bg-gray-700 rounded w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}
