"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pointer } from "@/components/magicui/pointer";

export function HomePointer() {
  return (
    <div className="flex justify-center">
      <Card className="w-1/2 h-1/2 border-none bg-gradient-to-br from-green-50 to-green-100 shadow-lg transition-all hover:shadow-xl dark:from-green-900 dark:to-green-800">
        <CardHeader className="relative pb-2">
          <CardTitle className="text-xl font-bold">Emoji Pointer</CardTitle>
          <CardDescription className="text-sm text-green-700 dark:text-green-300">
            Using an emoji as a custom pointer
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex h-40 items-center justify-center p-6">
          <span className="pointer-events-none text-center text-xl font-medium text-green-800 dark:text-green-200">
            Check this out
          </span>
        </CardContent>
        <Pointer>
          <div
            className={`bg-white text-black text-2xl p-4 rounded-md shadow-md`}
          >
            play
          </div>
        </Pointer>
      </Card>
    </div>
  );
}
