"use client";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/TracingBeam";

const steps = [
  { num: "01", title: "AUTH SYNC", desc: "Secure hardware handshake via biometric identity and cryptographic keys." },
  { num: "02", title: "CALIBRATION", desc: "Environmental noise cancellation and synaptic baseline alignment across 12 channels." },
  { num: "03", title: "TRANSMISSION", desc: "Compressed neural packet delivery via the global NeuroX mesh network." },
  { num: "04", title: "EXECUTION", desc: "Real-time processing of cognitive logic in isolated secure containers." },
];

export function ProtocolSequence() {
  return (
    <section className="pt-32 pb-32 w-full">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <TracingBeam>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-display text-[48px] text-text mb-20"
          >
            PROTOCOL SEQUENCE
          </motion.h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector Line (desktop only) */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-border z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 border border-[#2A2420] bg-[#0A0806] p-8 flex flex-col"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 border border-orange mb-6 flex items-center justify-center">
                  <span className="font-mono text-[12px] text-orange">{step.num}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[18px] tracking-[0.1em] mb-3 uppercase text-text">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[13px] leading-[1.7] text-muted">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
