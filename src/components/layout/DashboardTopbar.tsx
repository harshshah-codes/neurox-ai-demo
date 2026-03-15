"use client";
import { motion } from "framer-motion";
import { Search, Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardTopbar() {
  return (
    <header className="h-16 bg-bg-surface border-b border-border px-8 flex items-center justify-between" style={{ gridColumn: "2" }}>
      {/* Search */}
      <motion.div
        className="relative flex items-center w-80"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Search className="absolute left-3 w-3.5 h-3.5 text-muted" />
        <motion.input
          type="text"
          placeholder="Search neural patterns..."
          className="w-full h-9 bg-bg-base border border-border pl-9 pr-4 font-mono text-[12px] text-muted placeholder:text-muted focus:border-orange/40 focus:outline-none transition-colors"
          whileFocus={{ borderColor: "rgba(255,77,0,0.4)" }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Right Group */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <motion.button
          className="relative w-8 h-8 flex items-center justify-center text-muted hover:text-text transition-colors cursor-pointer"
          animate={{ rotate: [0, -15, 15, -10, 10, -5, 5, 0] }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <Bell className="w-4 h-4" />
          <motion.span
            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 2.5 }}
          />
        </motion.button>

        {/* Settings */}
        <motion.button
          className="w-8 h-8 flex items-center justify-center text-muted hover:text-text transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <Settings className="w-4 h-4" />
        </motion.button>

        {/* Divider */}
        <div className="w-px h-6 bg-border" />

        {/* User */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4, type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="flex flex-col items-end">
            <span className="font-body text-[14px] font-semibold text-text">Dr. Aris Thorne</span>
            <span className="font-mono text-[10px] text-muted">HEAD OF RESEARCH</span>
          </div>
          <Avatar className="w-9 h-9 rounded-sm border border-border">
            <AvatarFallback className="bg-orange/20 text-orange font-mono text-[12px]">AT</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </header>
  );
}
