"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

const stats = [
  { label: "LATENCY", value: "< 1.2", unit: "ms", trend: "▲ OPTIMAL", trendColor: "#3DFF8F", isString: true },
  { label: "THROUGHPUT", value: 4.8, unit: "Pb/s", trend: "▲ +12% NODES", trendColor: "#3DFF8F", isString: false },
  { label: "ACTIVE NODES", value: 128.4, unit: "K", trend: "▲ GLOBAL GRID", trendColor: "#3DFF8F", isString: false },
  { label: "SYNC INTEGRITY", value: 99.999, unit: "%", trend: "● MIL-SPEC", trendColor: "#FF4D00", isString: false },
];

function AnimatedCounter({ value, inView, isString }: { value: number | string; inView: boolean; isString?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, "")) : value;
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
        if (String(value).includes("99.999")) {
          ref.current.textContent = latest.toFixed(3);
        } else if (String(value).includes("<")) {
          ref.current.textContent = String(value);
        } else {
          ref.current.textContent = latest.toFixed(1);
        }
      }
    });
    return unsubscribe;
  }, [spring, value]);

  if (isString || String(value).includes("<")) {
    return <span ref={ref}>{String(value)}</span>;
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
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 lg:px-10 py-4 lg:py-6 border-r border-border last:border-r-0 flex flex-col justify-center gap-1"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase mb-1">
              {stat.label}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-[42px] leading-[1] text-text">
                <AnimatedCounter value={stat.value} inView={isInView} isString={stat.isString} />
              </span>
              <span className="font-display text-[18px] leading-[1] text-muted">
                {stat.unit}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUp className="w-3 h-3" style={{ color: stat.trendColor }} />
              <span className="font-mono text-[10px]" style={{ color: stat.trendColor }}>
                {stat.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
