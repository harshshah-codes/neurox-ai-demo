"use client";
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
  return (
    <section className="pt-32 pb-32 w-full">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div
          className="mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#6B6158] uppercase mb-3">
            INFRASTRUCTURE
          </p>
          <h2 className="font-display text-[48px] leading-[1] text-[#F5F0E8] pl-4 border-l-4 border-[#FF4D00] mb-4">
            CORE INFRASTRUCTURE
          </h2>
          <p className="font-body text-[14px] leading-[1.7] text-[#6B6158] max-w-[480px]">
            Deep integration between bio-synthetic interfaces and quantum-scaled compute clusters.
          </p>
        </div>

        {/* Feature Cards */}
        <CardHoverEffect items={features} />
      </div>
    </section>
  );
}
