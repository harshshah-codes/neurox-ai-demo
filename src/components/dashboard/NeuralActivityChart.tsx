"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
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

const neuralData = [
  { time: "00:00", value: 1200 },
  { time: "01:00", value: 980  },
  { time: "02:00", value: 850  },
  { time: "03:00", value: 790  },
  { time: "04:00", value: 820  },
  { time: "05:00", value: 1100 },
  { time: "06:00", value: 1800 },
  { time: "07:00", value: 2900 },
  { time: "08:00", value: 4200 },
  { time: "09:00", value: 5100 },
  { time: "10:00", value: 5800 },
  { time: "11:00", value: 6200 },
  { time: "12:00", value: 6500 },
  { time: "13:00", value: 6100 },
  { time: "14:00", value: 5400 },
  { time: "15:00", value: 4200 },
  { time: "16:00", value: 3800 },
  { time: "17:00", value: 4100 },
  { time: "18:00", value: 4600 },
  { time: "19:00", value: 5200 },
  { time: "20:00", value: 5600 },
  { time: "21:00", value: 4800 },
  { time: "22:00", value: 3200 },
  { time: "23:59", value: 2100 },
];

export function NeuralActivityChart() {
  const chartRef = useRef(null);

  return (
    <motion.div
      ref={chartRef}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
    >
      <Card className="bg-bg-card border-border p-6 relative overflow-hidden">
        {/* Scanning glow line */}
        <motion.div
          style={{
            position: 'absolute',
            left: 0, right: 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #FF4D00/30, transparent)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          initial={{ top: '0%', opacity: 0 }}
          animate={{ top: '100%', opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeIn" }}
        />

        {/* Scanning dot */}
        <motion.div
          style={{
            position: 'absolute',
            top: '38%',
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#FF4D00',
            boxShadow: '0 0 8px #FF4D00, 0 0 16px #FF4D00',
            zIndex: 2,
            left: '10%',
          }}
          initial={{ left: '2%', opacity: 0 }}
          animate={{ left: '95%', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: "easeInOut",
            opacity: { times: [0, 0.05, 0.95, 1] }
          }}
        />

        {/* Header */}
        <div className="flex justify-between items-start mb-1 relative z-10">
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

        <p className="font-body text-[12px] text-muted mb-6 relative z-10">
          Visualizing cognitive spike cycles and resting states
        </p>

        {/* Chart */}
        <div className="relative">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={neuralData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="neuralGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF4D00" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FF4D00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2420" vertical={false} />
              <XAxis
                dataKey="time"
                tick={{ fill: '#6B6158', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                tickLine={false}
                axisLine={false}
                ticks={["00:00","04:00","08:00","12:00","16:00","20:00","23:59"]}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: '#16130E',
                  border: '1px solid #2A2420',
                  borderRadius: 0,
                  fontFamily: 'IBM Plex Mono',
                  fontSize: 11
                }}
                cursor={{ stroke: '#FF4D00', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#FF4D00"
                strokeWidth={2}
                fill="url(#neuralGrad)"
                dot={false}
                activeDot={{ r: 4, fill: '#FF4D00', strokeWidth: 0 }}
                isAnimationActive={true}
                animationBegin={300}
                animationDuration={2000}
                animationEasing="ease-out"
              />
            </AreaChart>
          </ResponsiveContainer>
          
          {/* Live pulse dot at endpoint */}
          <motion.div
            style={{
              position: 'absolute',
              right: 16,
              top: '35%',
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#FF4D00',
              zIndex: 5,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [1, 0.3, 1],
              boxShadow: [
                '0 0 0px #FF4D00',
                '0 0 12px #FF4D00',
                '0 0 0px #FF4D00',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.3,
            }}
          />
        </div>
      </Card>
    </motion.div>
  );
}
