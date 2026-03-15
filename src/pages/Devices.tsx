import { motion } from "framer-motion";
import { Monitor, Cpu, Wifi, Battery, ChevronRight } from "lucide-react";

const devices = [
  { name: "Neural Interface v3", status: "Connected", icon: Cpu, lastSeen: "Just now" },
  { name: "Cognitive Bridge", status: "Active", icon: Wifi, lastSeen: "2m ago" },
  { name: "Synaptic Display", status: "Standby", icon: Monitor, lastSeen: "15m ago" },
  { name: "Power Unit Alpha", status: "Charging", icon: Battery, lastSeen: "Just now" },
];

export function Devices() {
  return (
    <div className="min-h-screen bg-bg-base p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="font-display text-[36px] leading-[1] mb-2 text-text">
            Devices
          </h1>
          <p className="font-body text-[14px] text-muted">
            Manage and monitor connected neural hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {devices.map((device, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="border border-border bg-card p-6 flex items-center gap-4 hover:border-orange/30 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 bg-orange/10 rounded-sm flex items-center justify-center">
                <device.icon className="w-6 h-6 text-orange" />
              </div>
              <div className="flex-1">
                <p className="font-body text-[14px] text-text">{device.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${device.status === 'Connected' || device.status === 'Active' ? 'bg-green' : device.status === 'Charging' ? 'bg-orange' : 'bg-muted'}`} />
                  <span className="font-mono text-[10px] text-muted">{device.status}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted group-hover:text-orange transition-colors" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
