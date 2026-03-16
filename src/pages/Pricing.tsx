"use client";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { PricingCards } from "@/components/pricing/PricingCards";
import { Testimonials } from "@/components/pricing/Testimonials";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export function Pricing() {
  return (
    <>
      <Helmet>
        <title>Neon Precision Pricing — NEUROX</title>
        <meta name="description" content="Select your synchronization tier and unlock the hardware-level neural interface." />
        <meta property="og:url" content="https://neurox-demo.vercel.app/pricing" />
      </Helmet>
      <div className="min-h-screen bg-bg-base relative overflow-hidden">
      {/* Background */}
      <BackgroundBeams className="opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,77,0,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-32 pb-24 px-6 lg:px-20 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-baseline gap-4 mb-6 flex-wrap"
          >
            {["NEON", "PRECISION"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-display text-[72px] md:text-[88px] leading-[0.92] ${
                  i === 1 ? "text-orange italic" : "text-text italic"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-[520px] mx-auto font-body text-[16px] leading-[1.7] text-muted text-center"
          >
            Select the neural processing tier that aligns with your cognitive requirements. Each tier is engineered for specific operational demands.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <PricingCards />

        {/* Testimonials */}
        <Testimonials />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-border max-w-[1280px] mx-auto px-6 lg:px-20 relative flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-mono text-[11px] text-muted">
            <span className="text-orange">◈</span> © 2024 NEUROX SYSTEMS
          </span>

          <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase absolute left-1/2 -translate-x-1/2 hidden md:block">
            SECURE 256-BIT ENCRYPTED NEURAL LINK ESTABLISHED.
          </span>

          <div className="flex gap-8">
            {["PRIVACY PROTOCOL", "NEURAL RIGHTS", "SUPPORT TERMINAL"].map(
              (link, i) => (
                <a
                  key={i}
                  href="#"
                  className="font-mono text-[11px] text-muted hover:text-text transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
