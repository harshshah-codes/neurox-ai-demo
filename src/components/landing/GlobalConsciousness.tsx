"use client";
import { motion } from "framer-motion";

const nodes = [
  { name: "ORBITAL HUB", id: "[LDN-01]", status: "ACTIVE", dotColor: "green", delay: 0 },
  { name: "SUB-PACIFIC NODE", id: "[TYO-04]", status: "ACTIVE", dotColor: "green", delay: 0.6 },
  { name: "NEO-BERLIN LINK", id: "[BER-09]", status: "SYNC ON", dotColor: "orange", delay: 1.2 },
];

function NeuralNetworkVisualization() {
  const nodePositions = [
    { x: 20, y: 30 },
    { x: 50, y: 20 },
    { x: 80, y: 35 },
    { x: 30, y: 60 },
    { x: 70, y: 70 },
    { x: 50, y: 50 },
  ];

  return (
    <div className="border border-border bg-bg-surface aspect-[4/3] relative overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Lines */}
        <g stroke="#2A2420" strokeWidth={0.3}>
          {nodePositions.map((node, i) =>
            nodePositions.slice(i + 1).map((other, j) => (
              <motion.line
                key={`line-${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={other.x}
                y2={other.y}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: Math.random() * 2 }}
              />
            ))
          )}
        </g>

        {/* Nodes */}
        {nodePositions.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={3}
            fill="#FF4D00"
            filter="url(#glow)"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function GlobalConsciousness() {
  return (
    <section className="pt-32 pb-32 w-full">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green"
              />
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                Live Network Visualizer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-[48px] leading-[1.0] text-text mb-6"
            >
              INTERFACE WITH THE<br />GLOBAL CONSCIOUSNESS
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="max-w-[400px] font-body text-[14px] leading-[1.7] text-muted mb-10"
            >
              Our dashboard provides real-time oversight of all connected nodes. Monitor bandwidth, latency, and topographical distribution of neural throughput across 12 major hubs.
            </motion.p>

            {/* Node Rows */}
            <div className="border-t border-border">
              {nodes.map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  whileHover={{ backgroundColor: "#111009", paddingLeft: "8px" }}
                  className="flex items-center justify-between py-4 border-b border-border transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[11px] tracking-[0.1em] text-text uppercase">
                      {node.name}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {node.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
                      className={`w-1.5 h-1.5 rounded-full bg-${node.dotColor}`}
                      style={{ backgroundColor: node.dotColor === "green" ? "#3DFF8F" : "#FF8C42" }}
                    />
                    <span className="font-mono text-[10px] tracking-[0.1em]" style={{ color: node.dotColor === "green" ? "#3DFF8F" : "#FF8C42" }}>
                      {node.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Neural Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NeuralNetworkVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
