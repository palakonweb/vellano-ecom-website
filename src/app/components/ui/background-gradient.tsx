import React from "react";
import { cn } from "tailwind-variants/utils";

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BackgroundGradient({
  children,
  className,
}: BackgroundGradientProps) {
  return (
 <div
  className={`relative p-[2px] rounded-xl overflow-hidden ${className || ""}`}
>

      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-75 animate-gradient" />
      <div className="relative bg-black rounded-xl p-6">{children}</div>
    </div>
  );
}
