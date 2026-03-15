"use client";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Info, Bell, XCircle, History } from "lucide-react";
import { Card } from "@/components/ui/card";

const feedItems = [
  {
    icon: CheckCircle2,
    iconBg: "bg-green/10",
    iconColor: "text-green",
    title: "Sync Completed",
    desc: "Device 042 fully integrated.",
    time: "2m ago",
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
    title: "Load Threshold Spike",
    desc: "Gamma burst detected in Sector 7.",
    time: "14m ago",
  },
  {
    icon: Info,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    title: "Patch Deployed",
    desc: "v2.4.1 runtime optimization.",
    time: "45m ago",
  },
  {
    icon: Bell,
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
    title: "Auto-Calibration",
    desc: "Focus levels adjusted for focus-lock.",
    time: "1h ago",
  },
  {
    icon: XCircle,
    iconBg: "bg-red/10",
    iconColor: "text-red",
    title: "Packet Loss",
    desc: "Network fluctuation in sub-link 4.",
    time: "3h ago",
  },
];

export function ActionFeed() {
  return (
    <Card className="bg-bg-card border-border p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
          Action Feed
        </span>
        <History className="w-4 h-4 text-muted cursor-pointer hover:text-text" />
      </div>

      {/* Feed Items */}
      <div className="flex flex-col">
        {feedItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="flex items-start gap-3 py-3 border-b border-border last:border-b-0"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
              <item.icon className={`w-4 h-4 ${item.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-[13px] font-medium mb-0.5 text-text">
                {item.title}
              </p>
              <p className="font-body text-[11px] text-muted leading-[1.5] mb-1">
                {item.desc}
              </p>
              <span className="font-mono text-[10px] text-muted">
                {item.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Link */}
      <a href="#" className="mt-4 block text-right">
        <span className="font-mono text-[10px] tracking-[0.1em] text-orange uppercase hover:text-orange/70 transition-colors">
          VIEW COMPLETE AUDIT LOG →
        </span>
      </a>
    </Card>
  );
}
