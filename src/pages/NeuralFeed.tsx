import { motion } from "framer-motion";
import { Zap, Activity, Brain, Gauge } from "lucide-react";

const feedItems = [
  { icon: Brain, title: "Cognitive Sync", desc: "Neural pathway alignment complete", time: "2m ago", type: "success" },
  { icon: Zap, title: "Burst Detected", desc: "Gamma wave spike in Sector 7", time: "5m ago", type: "warning" },
  { icon: Activity, title: "Pattern Match", desc: "Known cognitive signature identified", time: "12m ago", type: "info" },
  { icon: Gauge, title: "Flow State", desc: "Deep focus achieved", time: "28m ago", type: "success" },
  { icon: Zap, title: "Latency Spike", desc: "Edge node re-routing", time: "34m ago", type: "warning" },
  { icon: Brain, title: "Memory Consolidation", desc: "Neural backup completed", time: "1h ago", type: "info" },
];

export function NeuralFeed() {
  return (
    <div className="min-h-screen bg-bg-base p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="font-display text-[36px] leading-[1] mb-2 text-text">
            Neural Feed
          </h1>
          <p className="font-body text-[14px] text-muted">
            Real-time cognitive events and neural activity stream.
          </p>
        </div>

        <div className="border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
              Live Stream
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="font-mono text-[10px] text-green">LIVE</span>
            </span>
          </div>

          <div className="space-y-4">
            {feedItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 py-4 border-b border-border last:border-0"
              >
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                  item.type === 'success' ? 'bg-green/10' : item.type === 'warning' ? 'bg-orange/10' : 'bg-blue-500/10'
                }`}>
                  <item.icon className={`w-5 h-5 ${
                    item.type === 'success' ? 'text-green' : item.type === 'warning' ? 'text-orange' : 'text-blue-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="font-body text-[14px] text-text">{item.title}</p>
                  <p className="font-mono text-[11px] text-muted">{item.desc}</p>
                </div>
                <span className="font-mono text-[10px] text-muted">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
