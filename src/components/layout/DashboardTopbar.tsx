"use client";
import { Search, Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardTopbar() {
  return (
    <header className="h-16 bg-bg-surface border-b border-border px-8 flex items-center justify-between" style={{ gridColumn: "2" }}>
      {/* Search */}
      <div className="relative flex items-center w-80">
        <Search className="absolute left-3 w-3.5 h-3.5 text-muted" />
        <input
          type="text"
          placeholder="Search neural patterns..."
          className="w-full h-9 bg-bg-base border border-border pl-9 pr-4 font-mono text-[12px] text-muted placeholder:text-muted focus:border-orange/40 focus:outline-none transition-colors"
        />
      </div>

      {/* Right Group */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="relative w-8 h-8 flex items-center justify-center text-muted hover:text-text transition-colors cursor-pointer">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange rounded-full" />
        </button>

        {/* Settings */}
        <button className="w-8 h-8 flex items-center justify-center text-muted hover:text-text transition-colors cursor-pointer">
          <Settings className="w-4 h-4" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-border" />

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex flex-col items-end">
            <span className="font-body text-[14px] font-semibold text-text">Dr. Aris Thorne</span>
            <span className="font-mono text-[10px] text-muted">HEAD OF RESEARCH</span>
          </div>
          <Avatar className="w-9 h-9 rounded-sm border border-border">
            <AvatarFallback className="bg-orange/20 text-orange font-mono text-[12px]">AT</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
