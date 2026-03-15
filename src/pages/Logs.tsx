import { motion } from "framer-motion";
import { Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const logs = [
  { time: "14:32:01", level: "INFO", message: "Neural sync initiated for device NEU-042" },
  { time: "14:31:58", level: "DEBUG", message: "Quantum encryption handshake completed" },
  { time: "14:31:45", level: "WARN", message: "Latency spike detected in sector 7" },
  { time: "14:31:22", level: "INFO", message: "Focus state transition: Active → Flow" },
  { time: "14:30:55", level: "INFO", message: "Cognitive baseline recalibration complete" },
  { time: "14:30:12", level: "DEBUG", message: "Packet routing: node LDN-01 → TYO-04" },
  { time: "14:29:48", level: "ERROR", message: "Transient packet loss detected in sub-link 4" },
  { time: "14:29:30", level: "INFO", message: "Auto-calibration cycle started" },
  { time: "14:28:15", level: "INFO", message: "Neural pathway mapping updated" },
  { time: "14:27:02", level: "DEBUG", message: "Memory consolidation checkpoint saved" },
];

const levelColors: Record<string, string> = {
  INFO: "text-green",
  WARN: "text-warning",
  ERROR: "text-red",
  DEBUG: "text-muted",
};

export function Logs() {
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
              Logs
            </h1>
            <p className="font-body text-[14px] text-muted">
              System audit trail and event history.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="font-mono text-[11px] tracking-[0.05em] border-border hover:border-orange/40">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="font-mono text-[11px] tracking-[0.05em] border-border hover:border-orange/40">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search logs..."
            className="w-full h-10 bg-card border border-border pl-10 pr-4 font-mono text-[12px] text-muted placeholder:text-muted focus:border-orange/40 focus:outline-none"
          />
        </div>

        {/* Logs Table */}
        <div className="border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-[140px_80px_1fr] gap-4 px-4 py-3 bg-bg-surface border-b border-border">
            <span className="font-mono text-[10px] text-muted uppercase">Timestamp</span>
            <span className="font-mono text-[10px] text-muted uppercase">Level</span>
            <span className="font-mono text-[10px] text-muted uppercase">Message</span>
          </div>
          
          <div className="max-h-[60vh] overflow-y-auto">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="grid grid-cols-[140px_80px_1fr] gap-4 px-4 py-3 border-b border-border last:border-0 hover:bg-bg-surface transition-colors"
              >
                <span className="font-mono text-[11px] text-muted">{log.time}</span>
                <span className={`font-mono text-[11px] ${levelColors[log.level]}`}>{log.level}</span>
                <span className="font-body text-[13px] text-text">{log.message}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
