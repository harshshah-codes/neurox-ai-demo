"use client";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", value: 2100 },
  { time: "01:00", value: 1850 },
  { time: "02:00", value: 1700 },
  { time: "03:00", value: 1650 },
  { time: "04:00", value: 1800 },
  { time: "05:00", value: 2100 },
  { time: "06:00", value: 2800 },
  { time: "07:00", value: 3600 },
  { time: "08:00", value: 4800 },
  { time: "09:00", value: 5200 },
  { time: "10:00", value: 5800 },
  { time: "11:00", value: 5600 },
  { time: "12:00", value: 5400 },
  { time: "13:00", value: 5200 },
  { time: "14:00", value: 4800 },
  { time: "15:00", value: 4200 },
  { time: "16:00", value: 3800 },
  { time: "17:00", value: 4200 },
  { time: "18:00", value: 4800 },
  { time: "19:00", value: 5200 },
  { time: "20:00", value: 5000 },
  { time: "21:00", value: 4600 },
  { time: "22:00", value: 3800 },
  { time: "23:59", value: 2800 },
];

export function NeuralActivityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-bg-card border-border p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="font-display text-[20px] text-text">Neural Activity (24h)</h3>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-display text-[28px] text-text">98.2k</span>
            <div className="flex items-center gap-1 text-green font-mono text-[11px]">
              <TrendingUp className="w-3 h-3" />
              +5.4% VS PREV.
            </div>
          </div>
        </div>

        <p className="font-body text-[12px] text-muted mb-6">
          Visualizing cognitive spike cycles and resting states
        </p>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="neuralGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF4D00" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FF4D00" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2420" vertical={false} />
            <XAxis
              dataKey="time"
              tick={{ fill: "#6B6158", fontSize: 10, fontFamily: "IBM Plex Mono" }}
              tickLine={false}
              axisLine={false}
              ticks={["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"]}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                background: "#16130E",
                border: "1px solid #2A2420",
                borderRadius: 0,
                fontFamily: "IBM Plex Mono",
                fontSize: 11,
              }}
              cursor={{ stroke: "#FF4D00", strokeWidth: 1, strokeDasharray: "4 4" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#FF4D00"
              strokeWidth={2}
              fill="url(#neuralGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#FF4D00", strokeWidth: 0 }}
              isAnimationActive={true}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </motion.div>
  );
}
