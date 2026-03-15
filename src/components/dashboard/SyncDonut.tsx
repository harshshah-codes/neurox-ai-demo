"use client";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function SyncDonut() {
  const data = [
    { value: 90 },
    { value: 10 },
  ];

  return (
    <Card className="bg-bg-card border-border p-6 flex flex-col items-center">
      <div className="relative">
        <ResponsiveContainer width={160} height={160}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              strokeWidth={0}
              isAnimationActive={true}
              animationBegin={300}
              animationDuration={1200}
            >
              <Cell fill="#FF4D00" />
              <Cell fill="#2A2420" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-[24px] text-text">90%</span>
          <span className="font-mono text-[10px] text-muted">SYNC</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 w-full flex flex-col gap-2">
        <div className="flex items-center gap-2 font-body text-[12px]">
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-text">Active Sync</span>
        </div>
        <div className="flex items-center gap-2 font-body text-[12px]">
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="text-muted">Standby</span>
        </div>
      </div>

      <p className="mt-3 text-center font-body text-[12px] text-muted">
        Neural bridge is stable. Optimal bandwidth.
      </p>
    </Card>
  );
}
