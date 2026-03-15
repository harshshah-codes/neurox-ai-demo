"use client";
import { motion } from "framer-motion";

interface SpotlightProps {
  className?: string;
  fill?: string;
  width?: number;
  height?: number;
  opacity?: number;
}

export function Spotlight({
  className = "",
  fill = "#FF4D00",
  width = 200,
  height = 200,
}: SpotlightProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill={fill}
        filter="url(#spotlight)"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <defs>
        <filter id="spotlight" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="20" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
