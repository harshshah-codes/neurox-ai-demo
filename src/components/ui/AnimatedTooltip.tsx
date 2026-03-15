"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTooltipProps {
  items: {
    id: number;
    name: string;
    role: string;
    image: string;
  }[];
}

export function AnimatedTooltip({ items }: AnimatedTooltipProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: hoveredIndex === i ? 1.1 : 1 }}
            className="w-12 h-12 rounded-sm border border-border bg-gradient-to-br from-orange/20 to-orange/5"
          >
            <div className="w-full h-full flex items-center justify-center text-orange font-mono text-xs">
              {item.name.split(" ").map(n => n[0]).join("")}
            </div>
          </motion.div>
          {hoveredIndex === i && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: -50 }}
              animate={{ opacity: 1, y: 0, x: -50 }}
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border px-3 py-2 z-50"
            >
              <p className="font-body text-[13px] text-text">{item.name}</p>
              <p className="font-mono text-[10px] text-orange uppercase tracking-[0.1em]">{item.role}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
