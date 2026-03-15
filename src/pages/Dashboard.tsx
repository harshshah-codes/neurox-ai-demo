import { CalendarDays, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { DashboardTopbar } from "@/components/layout/DashboardTopbar";
import { KPICards } from "@/components/dashboard/KPICards";
import { NeuralActivityChart } from "@/components/dashboard/NeuralActivityChart";
import { ProcessingDistribution } from "@/components/dashboard/ProcessingDistribution";
import { SyncDonut } from "@/components/dashboard/SyncDonut";
import { ActionFeed } from "@/components/dashboard/ActionFeed";

export function Dashboard() {
  return (
    <div className="h-screen overflow-hidden bg-bg-base" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gridTemplateRows: "64px 1fr" }}>
      <DashboardSidebar />
      <DashboardTopbar />
      
      <main className="overflow-y-auto p-8" style={{ gridColumn: "2" }}>
        {/* Page Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-display text-[36px] leading-[1] mb-2 text-text">
              Neural Command
            </h1>
            <p className="font-body text-[14px] text-muted">
              Real-time precision metrics and cognitive load monitoring.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="font-mono text-[11px] tracking-[0.05em] border-border hover:border-orange/40">
              <CalendarDays className="w-4 h-4 mr-2" />
              Last 24 Hours
            </Button>
            <Button className="bg-orange hover:bg-orange/90 text-white font-mono text-[11px] tracking-[0.05em]">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <KPICards />

        {/* Neural Activity Chart */}
        <NeuralActivityChart />

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <ProcessingDistribution />
          <SyncDonut />
          <ActionFeed />
        </div>
      </main>
    </div>
  );
}
