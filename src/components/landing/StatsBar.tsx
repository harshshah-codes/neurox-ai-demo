"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

const stats = [
  { label: "LATENCY", value: "< 1.2", unit: "ms", trend: "▲ OPTIMAL", color: "green" },
  { label: "THROUGHPUT", value: "4.8", unit: "Pb/s", trend: "▲ +12% NODES", color: "green" },
  { label: "ACTIVE NODES", value: "128.4", unit: "K", trend: "▲ GLOBAL GRID", color: "green" },
  { label: "SYNC INTEGRITY", value: "99.999", unit: "%", trend: "● MIL-SPEC", color: "orange" },
];

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        if (value.includes("99.999")) {
          ref.current.textContent = latest.toFixed(3);
        } else if (value.includes("<")) {
          ref.current.textContent = value;
        } else {
          ref.current.textContent = latest.toFixed(1);
        }
      }
    });
    return unsubscribe;
  }, [spring, value]);

  if (value.includes("<")) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>0</span>;
}

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full border-t border-b border-border">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="px-10 py-6 border-r border-border last:border-r-0 flex flex-col justify-center gap-1"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase mb-1">
              {stat.label}
            </span>
            <div className="flex items-baseline gap-1">
              <span className={`font-display text-[42px] leading-[1] text-${stat.color === "green" ? "text" : "text"}`}>
                <AnimatedCounter value={stat.value} inView={isInView} />
              </span>
              <span className="font-display text-[18px] leading-[1] text-muted">
                {stat.unit}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUp className={`w-3 h-3 ${stat.color === "green" ? "text-green" : "text-orange"}`} />
              <span className={`font-mono text-[10px] ${stat.color === "green" ? "text-green" : "text-orange"}`}>
                {stat.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
