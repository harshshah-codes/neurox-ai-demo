"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardHoverEffectProps {
  items: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
}

export function CardHoverEffect({ items }: CardHoverEffectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group relative border border-border bg-bg-card p-8 transition-all duration-300 hover:border-orange/50 hover:bg-orange/5"
        >
          <div className="absolute inset-0 bg-orange/0 transition-colors duration-300 group-hover:bg-orange/5" />
          <div className="relative z-10">
            <div className="w-10 h-10 mb-5 flex items-center justify-center bg-orange/10 border border-orange/20">
              {item.icon}
            </div>
            <h3 className="font-display text-[20px] tracking-[0.03em] mb-3 text-text">
              {item.title}
            </h3>
            <p className="font-body text-[13px] leading-[1.7] text-muted">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
