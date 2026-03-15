"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";

const donutData = [
  { name: "Signal Integrity", value: 90, color: "#FF4D00" },
  { name: "Interference", value: 10, color: "#2A2420" },
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

  return <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.3, duration: 0.4 }}>0%</motion.span>;
}

export function SyncDonut() {
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col bg-bg-card border-border p-6 overflow-hidden">
        <div className="relative flex items-center justify-center my-4">
          {/* Rotating glow ring */}
          <motion.div
            style={{
              position: 'absolute',
              inset: -4,
              borderRadius: '50%',
              background: 'conic-gradient(rgba(255,77,0,0.15) 0deg, transparent 60deg, transparent 360deg)',
              pointerEvents: 'none',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="relative w-[180px] h-[180px]">
            <PieChart width={180} height={180}>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                startAngle={90}
                endAngle={-270}
                paddingAngle={0}
                dataKey="value"
                strokeWidth={0}
                isAnimationActive={true}
                animationBegin={200}
                animationDuration={1400}
                animationEasing="ease-out"
              >
                <Cell fill="#FF4D00" />
                <Cell fill="#2A2420" />
              </Pie>
            </PieChart>
            
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="font-display text-[24px] leading-[1] text-text">
                <AnimatedPercent value={90} delay={3.0} />
              </span>
              <span className="font-mono text-[10px] tracking-[0.15em] text-muted mt-1">SYNC</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 w-full flex flex-col gap-2">
          {donutData.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 font-body text-[12px]"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span 
                className={`w-2 h-2 rounded-full flex-shrink-0 ${i === 1 ? 'border border-[#6B6158]' : ''}`}
                style={{ backgroundColor: item.color }}
              />
              <span className="text-text">{item.name}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-3 text-center font-body text-[12px] text-muted">
          Neural bridge is stable. Optimal bandwidth.
        </p>
      </Card>
    </motion.div>
  );
}
