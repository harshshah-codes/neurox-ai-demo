import { motion } from "framer-motion";
import { Globe, Server, Signal, Activity } from "lucide-react";

const nodes = [
  { name: "Orbital Hub", location: "London", latency: "12ms", status: "Optimal", load: 78 },
  { name: "Pacific Link", location: "Tokyo", latency: "8ms", status: "Optimal", load: 64 },
  { name: "Neo-Berlin", location: "Berlin", latency: "15ms", status: "Active", load: 82 },
  { name: "East Coast", location: "New York", latency: "22ms", status: "Active", load: 71 },
  { name: "Nordic Node", location: "Stockholm", latency: "18ms", status: "Standby", load: 45 },
  { name: "Asia-Pacific", location: "Singapore", latency: "11ms", status: "Optimal", load: 89 },
];

export function Network() {
  return (
    <div className="min-h-screen bg-bg-base p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="font-display text-[36px] leading-[1] mb-2 text-text">
            Network
          </h1>
          <p className="font-body text-[14px] text-muted">
            Global neural network topology and node status.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Nodes", value: "128.4K", icon: Globe },
            { label: "Total Bandwidth", value: "4.8 Pb/s", icon: Signal },
            { label: "Avg Latency", value: "12.4ms", icon: Activity },
            { label: "Server Uptime", value: "99.99%", icon: Server },
          ].map((stat, i) => (
            <div key={i} className="border border-border bg-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className="w-4 h-4 text-orange" />
                <span className="font-mono text-[10px] text-muted uppercase">{stat.label}</span>
              </div>
              <span className="font-display text-[28px] text-text">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Node Map / List */}
        <div className="border border-border bg-card p-6">
          <h3 className="font-display text-[20px] mb-6">Node Status</h3>
          <div className="space-y-4">
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-4 py-3 border-b border-border last:border-0"
              >
                <div className="w-3 h-3 rounded-full bg-orange" />
                <div className="flex-1">
                  <span className="font-body text-[14px] text-text">{node.name}</span>
                  <span className="font-mono text-[10px] text-muted ml-2">[{node.location}]</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[11px] text-muted">{node.latency}</span>
                </div>
                <div className="w-24">
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${node.load}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                      className="h-full bg-orange rounded-full"
                    />
                  </div>
                </div>
                <span className={`font-mono text-[10px] w-16 text-right ${node.load > 80 ? 'text-orange' : 'text-green'}`}>
                  {node.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
