import { motion } from "framer-motion";
import { CalendarDays, Download, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const performanceData = [
  { day: "Mon", value: 4200 },
  { day: "Tue", value: 3800 },
  { day: "Wed", value: 5100 },
  { day: "Thu", value: 4600 },
  { day: "Fri", value: 5800 },
  { day: "Sat", value: 3200 },
  { day: "Sun", value: 2900 },
];

const distributionData = [
  { name: "Alpha", value: 40, color: "#FF4D00" },
  { name: "Beta", value: 30, color: "#FF6B2B" },
  { name: "Gamma", value: 20, color: "#FF8C42" },
  { name: "Theta", value: 10, color: "#FFB800" },
];

const metrics = [
  { label: "Neural Latency", value: "12.4ms", change: "-8%", trend: "down" },
  { label: "Sync Accuracy", value: "99.8%", change: "+0.2%", trend: "up" },
  { label: "Cognitive Load", value: "42.8%", change: "+2.4%", trend: "up" },
  { label: "Packet Loss", value: "0.01%", change: "-0.02%", trend: "down" },
];

const weeklyData = [
  { day: "Week 1", sync: 85, latency: 15 },
  { day: "Week 2", sync: 88, latency: 12 },
  { day: "Week 3", sync: 92, latency: 10 },
  { day: "Week 4", sync: 94, latency: 8 },
];

export function Analytics() {
  return (
    <div className="min-h-screen bg-bg-base p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-[28px] md:text-[36px] leading-[1] mb-2 text-text">
              Analytics
            </h1>
            <p className="font-body text-[14px] text-muted">
              Deep dive into neural performance metrics and trends.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
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

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card className="bg-card border-border p-4">
                <span className="font-mono text-[10px] text-muted uppercase tracking-[0.15em]">{metric.label}</span>
                <div className="flex items-end justify-between mt-2">
                  <span className="font-display text-[28px] text-text">{metric.value}</span>
                  <span className={`font-mono text-[11px] flex items-center gap-1 ${
                    metric.trend === "up" ? "text-green" : metric.trend === "down" ? "text-red" : "text-muted"
                  }`}>
                    {metric.trend === "up" ? <TrendingUp className="w-3 h-3" /> : metric.trend === "down" ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                    {metric.change}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border p-6">
              <h3 className="font-display text-[20px] mb-4">Neural Activity Trend</h3>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF4D00" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#FF4D00" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A2420" vertical={false} />
                  <XAxis dataKey="day" tick={{ fill: '#6B6158', fontSize: 11 }} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: '#16130E', border: '1px solid #2A2420', borderRadius: 0, fontSize: 11 }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#FF4D00" strokeWidth={2} fill="url(#colorPerf)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="bg-card border-border p-6 h-full">
              <h3 className="font-display text-[20px] mb-4">Processing Distribution</h3>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {distributionData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-muted">{item.name}</span>
                    <span className="font-display text-[14px]" style={{ color: item.color }}>{item.value}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Weekly Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6"
        >
          <Card className="bg-card border-border p-6">
            <h3 className="font-display text-[20px] mb-4">Weekly Sync vs Latency</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2420" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: '#6B6158', fontSize: 11 }} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ background: '#16130E', border: '1px solid #2A2420', borderRadius: 0, fontSize: 11 }} />
                <Bar dataKey="sync" fill="#FF4D00" radius={[2, 2, 0, 0]} />
                <Bar dataKey="latency" fill="#3DFF8F" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
