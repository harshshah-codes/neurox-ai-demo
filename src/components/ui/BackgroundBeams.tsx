"use client";
import { motion } from "framer-motion";

interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className = "" }: BackgroundBeamsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,77,0,0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
