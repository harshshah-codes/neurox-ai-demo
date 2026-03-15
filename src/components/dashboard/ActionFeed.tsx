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
    pulse: "green",
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
    pulse: "red",
  },
];

export function ActionFeed() {
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
    >
      <Card className="h-full flex flex-col bg-bg-card border-border p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
            Action Feed
          </span>
          <History className="w-4 h-4 text-muted cursor-pointer hover:text-text" />
        </div>

        {/* Feed Items */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {feedItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 3.2 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 3, backgroundColor: "rgba(255,77,0,0.03)" }}
              className="flex items-start gap-3 py-3 border-b border-border last:border-b-0"
            >
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.iconBg}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 3.5 + i * 0.08 }}
              >
                {item.pulse === "green" ? (
                  <motion.span
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(61,255,143,0)",
                        "0 0 10px rgba(61,255,143,0.4)",
                        "0 0 0px rgba(61,255,143,0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 4.5 }}
                  >
                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  </motion.span>
                ) : item.pulse === "red" ? (
                  <motion.span
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(255,51,51,0)",
                        "0 0 10px rgba(255,51,51,0.5)",
                        "0 0 0px rgba(255,51,51,0)",
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 5 }}
                  >
                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  </motion.span>
                ) : (
                  <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                )}
              </motion.div>
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
        <motion.a
          href="#"
          className="mt-auto pt-4 block text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.4 }}
        >
          <span className="font-mono text-[10px] tracking-[0.1em] text-orange uppercase hover:text-orange/70 transition-colors flex items-center justify-end gap-2">
            VIEW COMPLETE AUDIT LOG
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </span>
        </motion.a>
      </Card>
    </motion.div>
  );
}
