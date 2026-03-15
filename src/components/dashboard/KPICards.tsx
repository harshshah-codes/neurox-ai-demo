"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

function AnimatedNumber({ value, decimals = 1, delay = 0 }: { value: number; decimals?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const smoothCount = useSpring(motionValue, { stiffness: 50, damping: 15, mass: 0.8 });
  const display = useTransform(smoothCount, (v) => v.toFixed(decimals));

  useEffect(() => {
    const timeout = setTimeout(() => {
      motionValue.set(value);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [value, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
    return unsubscribe;
  }, [display]);

  return <motion.span ref={ref} initial={{ opacity: 0, filter: "blur(8px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ delay: delay + 0.2, duration: 0.6 }}>0</motion.span>;
}

export function KPICards() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {kpis.map((kpi, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(255, 77, 0, 0.1)", borderColor: "rgba(255, 77, 0, 0.3)" }}
          transition={{ delay: 0.7 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="bg-bg-card border-border p-6 relative overflow-hidden h-full">
            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className="w-10 h-10 rounded-sm bg-orange/10 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255,77,0,0)",
                    "0 0 16px rgba(255,77,0,0.3)",
                    "0 0 0px rgba(255,77,0,0)",
                  ]
                }}
                transition={{
                  duration: 2,
                  delay: 1.2 + i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              >
                <kpi.icon className="w-5 h-5 text-orange" />
              </motion.div>
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
                <AnimatedNumber value={kpi.value} decimals={kpi.unit === "MB/s" ? 0 : 1} delay={0.7 + i * 0.1} />
              </span>
              <span className="font-display text-[20px] text-muted">{kpi.unit}</span>
            </div>

            {/* Bottom Accent */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-orange"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{
                delay: 1.0 + i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
