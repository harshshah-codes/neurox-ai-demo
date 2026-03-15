"use client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MovingBorder } from "@/components/ui/MovingBorder";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-16 bg-bg-base/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 h-full flex items-center justify-between">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange flex items-center justify-center">
            <span className="text-white font-display text-lg">N</span>
          </div>
          <span className="font-display text-xl text-text tracking-[0.05em]">NEUROX</span>
        </Link>

        {/* Center - Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {["TECHNOLOGY", "SOLUTIONS", "HARDWARE", "ENTERPRISE"].map((link) => (
            <Link
              key={link}
              to="#"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted hover:text-text transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="font-mono text-[11px] uppercase tracking-[0.15em]">
            LOGIN
          </Button>
          <MovingBorder
            duration={2500}
            borderRadius="0px"
            borderClassName="bg-[radial-gradient(#FF4D00_40%,transparent_60%)]"
          >
            <Link
              to="/dashboard"
              className="bg-orange hover:bg-orange/90 text-white font-mono text-[11px] uppercase tracking-[0.15em] px-5 py-2.5 inline-flex items-center transition-colors duration-200"
            >
              INITIATE LINK
            </Link>
          </MovingBorder>
        </div>
      </div>
    </nav>
  );
}
