"use client";
import type { ReactNode } from "react";

interface TracingBeamProps {
  children: ReactNode;
  className?: string;
}

export function TracingBeam({ children, className = "" }: TracingBeamProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />
      <div className="relative">{children}</div>
    </div>
  );
}
