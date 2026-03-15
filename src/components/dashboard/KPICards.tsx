"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Brain, Zap, Waves, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const kpis = [
  { icon: Brain, label: "COGNITIVE LOAD", value: 42.8, unit: "%", badge: "+2.4%", badgeType: "success" },
  { icon: Zap, label: "NEURAL LATENCY", value: 12.4, unit: "ms", badge: "-0.5%", badgeType: "destructive" },
  { icon: Waves, label: "SYNAPTIC FLOW", value: 892, unit: "MB/s", badge: "+12.0%", badgeType: "success" },
  { icon: Target, label: "FOCUS SCORE", value: 94.1, unit: "%", badge: "Stable", badgeType: "secondary" },
];

function AnimatedNumber({ value, decimals = 1 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals);
      }
    });
    return unsubscribe;
  }, [spring, decimals]);

  return <span ref={ref}>0</span>;
}

export function KPICards() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {kpis.map((kpi, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <Card className="bg-bg-card border-border p-6 relative overflow-hidden">
            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-sm bg-orange/10 flex items-center justify-center">
                <kpi.icon className="w-5 h-5 text-orange" />
              </div>
              <Badge
                variant={kpi.badgeType === "success" ? "success" : kpi.badgeType === "destructive" ? "destructive" : "secondary"}
                className="text-[10px] font-mono"
              >
                {kpi.badge}
              </Badge>
            </div>

            {/* Label */}
            <div className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase mb-2">
              {kpi.label}
            </div>

            {/* Value */}
            <div className="flex items-baseline gap-1">
              <span className="font-display text-[44px] leading-[1] text-text">
                <AnimatedNumber value={kpi.value} decimals={kpi.unit === "MB/s" ? 0 : 1} />
              </span>
              <span className="font-display text-[20px] text-muted">{kpi.unit}</span>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-0.5 w-10 bg-orange" />
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
