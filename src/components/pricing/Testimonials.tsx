"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";

const testimonials = [
  {
    name: "Dr. Aris Thorne",
    role: "NEURO-SURGEON",
    quote:
      "The precision is unmatched. In the operating room, Prograde provides the cognitive clarity required for microscopic accuracy.",
  },
  {
    name: "Sarah Jenkins",
    role: "SYSTEMS ARCHITECT",
    quote:
      "Architecting 10M+ concurrent systems used to drain my focus. Now, I stay in a high-fidelity flow state for the entire sprint.",
  },
  {
    name: "Marcus Velt",
    role: "QUANT ANALYST",
    quote:
      "A quantum leap for performance. Pattern recognition speeds have increased by nearly 40% since my first sync.",
  },
];

export function Testimonials() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-[40px] mb-12 text-text border-l-4 border-orange pl-4"
      >
        VERIFIED OPERATIVES
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="bg-bg-surface border-border p-8 h-full">
              {/* User Row */}
              <div className="flex items-center gap-4 mb-5">
                <AnimatedTooltip
                  items={[
                    { id: 1, name: item.name, role: item.role, image: "" },
                  ]}
                />
                <div>
                  <p className="font-body text-[15px] font-semibold mb-0.5 text-text">
                    {item.name}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-orange uppercase">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="font-body text-[14px] leading-[1.8] text-muted italic">
                "{item.quote}"
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
