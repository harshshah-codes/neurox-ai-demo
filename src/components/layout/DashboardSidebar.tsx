"use client";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BarChart2,
  Zap,
  Monitor,
  Network,
  ScrollText,
  RefreshCw,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BarChart2, label: "Analytics", path: "/analytics" },
  { icon: Zap, label: "Neural Feed", path: "/neural-feed" },
  { icon: Monitor, label: "Devices", path: "/devices" },
  { icon: Network, label: "Network", path: "/network" },
  { icon: ScrollText, label: "Logs", path: "/logs" },
];

export function DashboardSidebar() {
  return (
    <aside className="w-60 h-full bg-bg-surface border-r border-border flex flex-col overflow-y-auto" style={{ gridRow: "1 / -1" }}>
      {/* Logo */}
      <motion.div
        className="px-5 py-5 border-b border-border mb-2"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange flex items-center justify-center">
            <span className="text-white font-display text-lg">N</span>
          </div>
          <span className="font-display text-xl">NEUROX</span>
        </NavLink>
        <div className="font-mono text-[9px] tracking-[0.15em] text-orange mt-1">
          NEON PRECISION V2.4
        </div>
      </motion.div>

      {/* Nav Label */}
      <motion.div
        className="px-5 pt-4 pb-2"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase">
          Navigation
        </span>
      </motion.div>

      {/* Nav Items */}
      <div className="px-3 flex flex-col gap-1">
        {navItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all duration-150 ${
                  isActive
                    ? "bg-orange text-white"
                    : "text-muted hover:bg-bg-card hover:text-text"
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              <span className="font-body text-[14px]">{item.label}</span>
            </NavLink>
          </motion.div>
        ))}
      </div>

      {/* System Health - push to bottom */}
      <div className="mt-auto px-5 py-4 border-t border-border">
        <motion.div
          className="flex justify-between items-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <motion.span
            className="font-mono text-[9px] tracking-[0.15em] text-muted uppercase flex items-center gap-2"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-orange"
            />
            System Health
          </motion.span>
        </motion.div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-[10px] text-muted">CORE SYNC</span>
          <motion.span
            className="font-mono text-[10px] text-orange"
            animate={{ color: ["#FF4D00", "#F5F0E8", "#FF4D00"] }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            98%
          </motion.span>
        </div>
        <Progress value={98} className="h-1">
          <motion.div
            className="h-full bg-orange rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "98%" }}
            transition={{
              duration: 1.4,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </Progress>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mx-auto mt-3 mb-4 flex items-center justify-center gap-2 w-full border border-orange/40 hover:border-orange py-3 font-mono text-[11px] tracking-[0.1em] text-orange uppercase transition-colors duration-200"
        >
          <motion.span
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </motion.span>
          Sync Device
        </motion.button>
      </div>
    </aside>
  );
}
