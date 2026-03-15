"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const technicalLinks = ["Architecture", "Safety Protocols", "API Reference", "SDKs"];
const legalLinks = ["Privacy Shield", "Ethics Policy", "Data Sovereignty", "Terms of Service"];

export function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 - Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange flex items-center justify-center">
                <span className="text-white font-display text-lg">N</span>
              </div>
              <span className="font-display text-xl text-text tracking-[0.05em]">NEUROX</span>
            </Link>
            <p className="font-body text-[13px] leading-[1.7] text-muted max-w-[240px]">
              Advancing the frontier of human-machine integration through decentralized neural processing networks.
            </p>
            <div className="flex gap-4 mt-6">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-border flex items-center justify-center text-muted hover:border-orange hover:text-orange transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Technical */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase mb-5 block">
              Technical
            </span>
            <div className="flex flex-col gap-3">
              {technicalLinks.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="font-body text-[13px] text-muted hover:text-text transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 - Legal */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase mb-5 block">
              Legal
            </span>
            <div className="flex flex-col gap-3">
              {legalLinks.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="font-body text-[13px] text-muted hover:text-text transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <span className="font-mono text-[11px] text-muted">
            © 2024 NEUROX TECHNOLOGIES
          </span>
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green"
            />
            <span className="font-mono text-[11px] text-green">SYSTEM STATUS: 100% OPERATIONAL</span>
            <span className="w-px h-3 bg-border mx-2" />
            <span className="font-mono text-[11px] text-muted">LATENCY: 0.9MS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
