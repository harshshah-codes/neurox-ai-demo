import { motion } from "framer-motion";
import { CalendarDays, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Analytics() {
  return (
    <div className="min-h-screen bg-bg-base p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-display text-[36px] leading-[1] mb-2 text-text">
              Analytics
            </h1>
            <p className="font-body text-[14px] text-muted">
              Deep dive into neural performance metrics and trends.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="font-mono text-[11px] tracking-[0.05em] border-border hover:border-orange/40">
              <CalendarDays className="w-4 h-4 mr-2" />
              Last 30 Days
            </Button>
            <Button className="bg-orange hover:bg-orange/90 text-white font-mono text-[11px] tracking-[0.05em]">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 border border-border bg-card p-6">
            <h3 className="font-display text-[20px] mb-4">Performance Over Time</h3>
            <div className="h-64 flex items-center justify-center text-muted">
              Analytics chart placeholder
            </div>
          </div>
          <div className="border border-border bg-card p-6">
            <h3 className="font-display text-[20px] mb-4">Top Metrics</h3>
            <div className="space-y-4">
              {["Neural Latency", "Sync Accuracy", "Cognitive Load", "Packet Loss"].map((metric) => (
                <div key={metric} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="font-mono text-[12px] text-muted">{metric}</span>
                  <span className="font-display text-[18px] text-text">98.2%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
