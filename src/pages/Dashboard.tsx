"use client";
import { motion } from "framer-motion";
import { CalendarDays, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { DashboardTopbar } from "@/components/layout/DashboardTopbar";
import { KPICards } from "@/components/dashboard/KPICards";
import { NeuralActivityChart } from "@/components/dashboard/NeuralActivityChart";
import { ProcessingDistribution } from "@/components/dashboard/ProcessingDistribution";
import { SyncDonut } from "@/components/dashboard/SyncDonut";
import { ActionFeed } from "@/components/dashboard/ActionFeed";

export function Dashboard() {
  return (
    <div className="h-screen overflow-hidden bg-bg-base" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gridTemplateRows: "64px 1fr" }}>
      <motion.aside
        className="h-full"
        initial={{ x: -240, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ gridRow: "1 / -1" }}
      >
        <DashboardSidebar />
      </motion.aside>
      
      <motion.div
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <DashboardTopbar />
      </motion.div>
      
      <main className="overflow-y-auto p-8" style={{ gridColumn: "2" }}>
        {/* Page Header */}
        <motion.div
          className="flex items-start justify-between mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div>
            <h1 className="font-display text-[36px] leading-[1] mb-2 text-text">
              Neural Command
            </h1>
            <p className="font-body text-[14px] text-muted">
              Real-time precision metrics and cognitive load monitoring.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }}>
              <Button variant="outline" className="font-mono text-[11px] tracking-[0.05em] border-border hover:border-orange/40">
                <CalendarDays className="w-4 h-4 mr-2" />
                Last 24 Hours
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }}>
              <Button className="bg-orange hover:bg-orange/90 text-white font-mono text-[11px] tracking-[0.05em]">
                <motion.span
                  whileHover={{ y: 2 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                >
                  <Download className="w-4 h-4 mr-2" />
                </motion.span>
                Export Report
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <KPICards />

        {/* Neural Activity Chart */}
        <NeuralActivityChart />

        {/* Bottom Row */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <ProcessingDistribution />
          <SyncDonut />
          <ActionFeed />
        </motion.div>
      </main>
    </div>
  );
}
