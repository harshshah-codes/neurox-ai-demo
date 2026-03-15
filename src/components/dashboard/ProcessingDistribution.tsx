"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const distributions = [
  { label: "ALPHA", value: 40, color: "#FF4D00" },
  { label: "BETA", value: 30, color: "#FF6B2B" },
  { label: "GAMMA", value: 15, color: "#FF8C42" },
  { label: "THETA", value: 15, color: "rgba(255, 77, 0, 0.4)" },
];

export function ProcessingDistribution() {
  return (
    <div className="h-full flex flex-col">
      <Card className="h-full flex flex-col bg-bg-card border-border p-6">
        <span className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase mb-5 block">
          Processing Distribution
        </span>

        <div className="flex flex-col gap-4">
          {distributions.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.1em] w-12 flex-shrink-0 text-text">
                {item.label}
              </span>
              <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <span className="font-mono text-[11px] text-text w-9 text-right flex-shrink-0">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
        <div className="flex-1" />
      </Card>
    </div>
  );
}
