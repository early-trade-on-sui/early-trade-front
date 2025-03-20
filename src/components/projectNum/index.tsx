"use client";

import { NumberTicker } from "../magicui/number-ticker";

interface StatisticsProps {
  projects: number;
  participation: number;
  volume: number;
}

export function ProjectNum({
  projects,
  participation,
  volume,
}: StatisticsProps) {
  const statistics = [
    { title: "Total Projects", value: projects },
    { title: "Total Participation", value: participation },
    { title: "Total Volume(USDC)", value: volume },
  ];

  return (
    <div className="flex w-full justify-between items-start p-8 gap-8">
      {statistics.map((item) => (
        <div key={item.title} className="flex flex-col gap-1">
          <div className="text-gray-500 text-xs whitespace-nowrap">
            {item.title}
          </div>
          <NumberTicker
            className="whitespace-pre-wrap items-center justify-center text-1xl font-medium tracking-tighter text-black dark:text-white flex"
            value={item.value}
            delay={0.05}
          />
        </div>
      ))}
    </div>
  );
}
