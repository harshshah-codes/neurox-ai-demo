"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, GitBranch, Cpu, Activity, Timer, Code2 } from "lucide-react";
import { CardHoverEffect } from "@/components/ui/CardHoverEffect";

const features = [
  {
    icon: <Lock className="w-5 h-5 text-orange" />,
    title: "QUANTUM ENCRYPTION",
    description: "End-to-end military-grade encryption using lattice-based cryptography for every neural packet transmitted.",
  },
  {
    icon: <GitBranch className="w-5 h-5 text-orange" />,
    title: "SYNAPTIC MAPPING",
    description: "High-fidelity visualization of cognitive data streams in real-time with sub-micron architectural resolution.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-orange" />,
    title: "EDGE ORCHESTRATION",
    description: "Distributed computing at the edge for low-lag interactions. Move the compute to where the thought happens.",
  },
  {
    icon: <Activity className="w-5 h-5 text-orange" />,
    title: "NEURAL FEEDBACK",
    description: "Bi-directional data flow allowing for seamless integration of artificial sensory input directly into the visual cortex.",
  },
  {
    icon: <Timer className="w-5 h-5 text-orange" />,
    title: "LATENCY PREDICTION",
    description: "Predictive AI modeling of packet collisions to ensure consistent 0.8ms average response times across all nodes.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-orange" />,
    title: "UNIFIED API",
    description: "Developer-first interface for building neural-native applications using standard GraphQL or REST protocols.",
  },
];

export function CoreInfrastructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-32 pb-32 w-full">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="font-mono text-[10px] tracking-[0.2em] text-muted mb-3 block"
          >
            INFRASTRUCTURE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[48px] leading-[1] text-text pl-4 border-l-4 border-orange"
          >
            CORE INFRASTRUCTURE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="max-w-[480px] font-body text-[14px] leading-[1.7] text-muted mt-4"
          >
            Deep integration between bio-synthetic interfaces and quantum-scaled compute clusters.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <CardHoverEffect items={features} />
      </div>
    </section>
  );
}
