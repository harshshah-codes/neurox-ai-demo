"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const distributions = [
  { label: "ALPHA", value: 40, color: "#FF4D00" },
  { label: "BETA", value: 30, color: "#FF6B2B" },
  { label: "GAMMA", value: 15, color: "#FF8C42" },
  { label: "THETA", value: 15, color: "rgba(255, 77, 0, 0.4)" },
];

function AnimatedPercent({ value, delay }: { value: number; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const smoothCount = useSpring(motionValue, { stiffness: 50, damping: 15, mass: 0.8 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      motionValue.set(value);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [value, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = smoothCount.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + "%";
      }
    });
    return unsubscribe;
  }, [smoothCount]);

  return <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.5, duration: 0.3 }}>0%</motion.span>;
}

export function ProcessingDistribution() {
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col bg-bg-card border-border p-6">
        <motion.span
          className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase mb-5 block"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        >
          Processing Distribution
        </motion.span>

        <div className="flex flex-col gap-4">
          {distributions.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-[10px] tracking-[0.1em] w-12 flex-shrink-0 text-text">
                {item.label}
              </span>
              <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%", opacity: 0.6 }}
                  whileInView={{ width: `${item.value}%`, opacity: 1 }}
                  transition={{
                    width: {
                      duration: 1.2,
                      delay: 0.2 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1]
                    },
                    opacity: { duration: 0.3, delay: 0.2 + i * 0.12 }
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full relative overflow-hidden"
                  style={{ backgroundColor: item.color }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{ backgroundPositionX: ['200%', '-200%'] }}
                    transition={{
                      duration: 1.5,
                      delay: 1.5 + i * 0.12,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
              <span className="font-mono text-[11px] text-text w-9 text-right flex-shrink-0">
                <AnimatedPercent value={item.value} delay={2.8 + i * 0.12} />
              </span>
            </motion.div>
          ))}
        </div>
        <div className="flex-1" />
      </Card>
    </motion.div>
  );
}
