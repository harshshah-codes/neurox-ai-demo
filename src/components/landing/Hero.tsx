"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SparklesCore } from "@/components/ui/SparklesCore";
import { Spotlight } from "@/components/ui/Spotlight";
import { MovingBorder } from "@/components/ui/MovingBorder";

export function Hero() {
  const subtitleText = "Harness the power of synchronized cognitive workflows with millisecond latency. The world's first decentralized neural processing layer.";

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{
        background: `radial-gradient(ellipse 100% 60% at 50% 0%, rgba(255,77,0,0.04) 0%, transparent 70%)`
      }}
    >
      {/* Layer 1 - SparklesCore */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <SparklesCore
          background="transparent"
          particleColor="#FF4D00"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={120}
          speed={1.2}
          className="absolute inset-0 w-full h-full"
        />
      </motion.div>

      {/* Layer 2 - Spotlight */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-[0.07] z-0 pointer-events-none">
        <Spotlight
          fill="#FF4D00"
          className="w-full h-full"
        />
      </div>

      {/* Layer 3 - Radial Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,77,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[720px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="mb-6 inline-flex items-center gap-2 border border-border px-3 py-1.5 rounded-full"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green"
          />
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted">
            SYSTEM STATUS: OPTIMAL SYNC
          </span>
        </motion.div>

        {/* H1 - PRECISION INTELLIGENCE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display text-[80px] md:text-[96px] leading-[0.92] text-text tracking-[-0.01em] mb-0"
        >
          PRECISION INTELLIGENCE
        </motion.h1>

        {/* H2 - FOR THE NEURAL AGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex gap-4 justify-center flex-wrap mb-6"
        >
          {["FOR", "THE", "NEURAL", "AGE"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.08 }}
              className="font-display text-[80px] md:text-[96px] leading-[0.92] text-orange tracking-[-0.01em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-body text-[15px] leading-[1.7] text-[#6B6158] text-center max-w-[480px] mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {subtitleText}
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-0 flex-wrap"
        >
          <MovingBorder
            duration={3000}
            borderRadius="0"
            borderClassName="bg-[radial-gradient(#FF4D00_40%,transparent_60%)]"
          >
            <Link
              to="/dashboard"
              className="bg-orange hover:bg-orange/90 text-white font-mono text-[11px] uppercase tracking-[0.15em] px-7 py-3.5 inline-flex items-center transition-colors duration-200"
            >
              INITIALIZE NEURAL LINK
            </Link>
          </MovingBorder>

          <Link
            to="#"
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-text hover:text-orange transition-colors duration-200"
          >
            TECHNICAL WHITEPAPER
            <motion.span whileHover={{ x: 3 }}>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted">
            DECRYPTING LAYER
          </span>
          <motion.div
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-border to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
