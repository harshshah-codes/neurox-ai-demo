"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { DashboardTopbar } from "@/components/layout/DashboardTopbar";
import { KPICards } from "@/components/dashboard/KPICards";
import { NeuralActivityChart } from "@/components/dashboard/NeuralActivityChart";
import { ProcessingDistribution } from "@/components/dashboard/ProcessingDistribution";
import { SyncDonut } from "@/components/dashboard/SyncDonut";
import { ActionFeed } from "@/components/dashboard/ActionFeed";

export function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const content = children || <DashboardContent />;

  return (
    <div className="h-screen overflow-hidden bg-bg-base">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 bg-bg-surface border border-border flex items-center justify-center"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 z-50 lg:hidden"
            >
              <DashboardSidebar />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop layout */}
      <div className="hidden lg:grid h-full" style={{ gridTemplateColumns: "240px 1fr", gridTemplateRows: "64px 1fr" }}>
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
        
        <main className="overflow-y-auto p-4 md:p-6 lg:p-8" style={{ gridColumn: "2" }}>
          {content}
        </main>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden h-full flex flex-col">
        <DashboardTopbar />
        <main className="flex-1 overflow-y-auto p-4">
          {content}
        </main>
      </div>
    </div>
  );
}

function DashboardContent() {
  return (
    <>
      {/* Page Header */}
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div>
          <h1 className="font-display text-[28px] md:text-[36px] leading-[1] mb-2 text-text">
            Neural Command
          </h1>
          <p className="font-body text-[14px] text-muted">
            Real-time precision metrics and cognitive load monitoring.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
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
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <ProcessingDistribution />
        <SyncDonut />
        <ActionFeed />
      </motion.div>
    </>
  );
}
