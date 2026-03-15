"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MovingBorder } from "@/components/ui/MovingBorder";

const baseFeatures = [
  { text: "Standard Neural Sync (10Hz)", included: true },
  { text: "Biometric Dashboard", included: true },
  { text: "8h Daily Operational Window", included: true },
  { text: "Real-time Precision Tuning", included: false },
];

const proFeatures = [
  { text: "Ultra-Low Latency Sync (120Hz)", included: true },
  { text: "Real-time Precision Tuning", included: true },
  { text: "24/7 Deep-Flow Access", included: true },
  { text: "API Interface & Neural Export", included: true },
  { text: "Priority AI Co-processor", included: true },
];

function PricingCard({
  name,
  subtitle,
  price,
  features,
  isPro = false,
  delay = 0,
}: {
  name: string;
  subtitle: string;
  price: string;
  features: { text: string; included: boolean }[];
  isPro?: boolean;
  delay?: number;
}) {
  const CardContent = (
    <Card
      className={`bg-bg-surface border-border p-10 ${
        isPro ? "border-orange" : ""
      }`}
    >
      {/* Elite Badge */}
      {isPro && (
        <div className="absolute top-[-13px] left-1/2 -translate-x-1/2 bg-orange px-4 py-1">
          <span className="font-mono text-[10px] tracking-[0.15em] text-white uppercase whitespace-nowrap">
            ELITE STANDARD
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="font-display text-[28px] tracking-[0.05em] mb-1 text-text">
            {name}
          </h3>
          <p className="font-body text-[13px] text-muted">{subtitle}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className={`font-display text-[56px] leading-[1] ${isPro ? "text-orange" : "text-text"}`}>
            {price}
          </span>
          <span className="font-mono text-[12px] text-muted">/month</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border mb-8" />

      {/* Features */}
      <div className="flex flex-col gap-4 mb-10">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                feature.included
                  ? "bg-orange/10 border border-orange/30"
                  : "bg-border border-border"
              }`}
            >
              {feature.included ? (
                <Check className="w-3 h-3 text-orange" />
              ) : (
                <X className="w-3 h-3 text-muted" />
              )}
            </div>
            <span
              className={`font-body text-[14px] ${
                feature.included ? "text-text" : "text-muted line-through"
              }`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      {isPro ? (
        <MovingBorder
          duration={3000}
          borderRadius="0"
          borderClassName="bg-[radial-gradient(#FF4D00_40%,transparent_60%)]"
        >
          <Button className="w-full py-4 h-auto bg-orange hover:bg-orange/90 text-white font-mono text-[12px] tracking-[0.15em] uppercase">
            UPGRADE TO PROGRADE
          </Button>
        </MovingBorder>
      ) : (
        <Button
          variant="outline"
          className="w-full py-4 h-auto border-border hover:border-orange/40 hover:bg-orange/5 font-mono text-[12px] tracking-[0.15em] uppercase transition-all duration-200"
        >
          INITIATE BASE
        </Button>
      )}
    </Card>
  );

  if (isPro) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
        className="relative"
      >
        {CardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {CardContent}
    </motion.div>
  );
}

export function PricingCards() {
  return (
    <div className="max-w-[960px] mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-6 align-items-start">
      <PricingCard
        name="BASE SYNC"
        subtitle="Foundation level enhancement"
        price="$49"
        features={baseFeatures}
        delay={0}
      />
      <PricingCard
        name="PROGRADE"
        subtitle="Full spectrum cognitive control"
        price="$149"
        features={proFeatures}
        isPro={true}
        delay={0.1}
      />
    </div>
  );
}
