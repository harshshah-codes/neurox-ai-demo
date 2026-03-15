"use client";
import type { ReactNode } from "react";

interface MovingBorderProps {
  children: ReactNode;
  duration?: number;
  borderRadius?: string;
  borderClassName?: string;
  className?: string;
}

export function MovingBorder({
  children,
  duration = 2500,
  borderRadius = "0px",
  borderClassName = "bg-[radial-gradient(#FF4D00_40%,transparent_60%)]",
  className = "",
}: MovingBorderProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        borderRadius,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-2px",
          borderRadius,
          background: borderClassName,
          animation: `movingBorder ${duration}ms linear infinite`,
        }}
      />
      <div style={{ position: "relative", borderRadius, background: "#0A0806" }}>
        {children}
      </div>
      <style>{`
        @keyframes movingBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
