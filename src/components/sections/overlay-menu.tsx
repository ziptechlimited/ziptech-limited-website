"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Play, ArrowRight } from "lucide-react";

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OverlayMenu({ isOpen, onClose }: OverlayMenuProps) {
  const [time, setTime] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Johannesburg", // GMT+2
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex flex-col bg-black text-white transition-all duration-500 ease-in-out overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]" />

      {/* Top Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full border-b border-white/10 px-[5vw] py-6 items-center z-10">
        <div className="hidden md:block w-full h-full"></div>

        {/* Center: Close Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="group relative flex items-center justify-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Close menu"
          >
            <div className="grid grid-cols-3 gap-1 p-2 group-hover:hidden scale-75">
               {[...Array(9)].map((_, i) => (
                 <span key={i} className="w-1 h-1 bg-white rounded-full" />
               ))}
            </div>
            <X className="hidden group-hover:block w-5 h-5" />
          </button>
        </div>

        {/* Right: Contact CTA */}
        <div className="hidden md:flex justify-end h-full items-center">
          <a
            href="/contact"
            className="group relative px-8 py-3 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-accent"
          >
            <span className="relative z-10 text-[11px] font-medium tracking-widest uppercase flex items-center gap-2 group-hover:text-black transition-colors duration-300">
              Contact Us <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </div>
      </div>

      {/* Main Content: Navigation & Studio Info */}
      <div className="grow flex flex-col md:flex-row px-[5vw] py-12 md:py-20 z-10 h-full overflow-y-auto">
        {/* Navigation Links */}
        <nav className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8 justify-center">
          {[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="group flex items-center gap-4 text-[clamp(3rem,8vw,5.5rem)] font-medium leading-[1.1] tracking-tighter hover:text-accent transition-colors duration-300"
            >
              <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 w-4 h-4 rounded-full bg-accent" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Secondary Info Rows */}
        <div className="w-full md:w-1/2 flex flex-col justify-end items-start md:items-end gap-16 mt-12 md:mt-0">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-4 text-left md:text-right">
             <div className="flex items-center gap-4 group cursor-pointer md:flex-row-reverse">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                <a href="tel:+27780548476" className="text-xl font-light hover:text-accent transition-colors">
                  +27 (0) 78 054 8476
                </a>
             </div>
             <div className="flex items-center gap-4 group cursor-pointer md:flex-row-reverse">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                <a href="mailto:accounts@ziptech.com" className="text-xl font-light hover:text-accent transition-colors">
                  Write Us
                </a>
             </div>
          </div>

          {/* Social Links & Clock */}
          <div className="flex flex-col md:items-end gap-12 w-full">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 block font-medium">Social</span>
              <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
                {["Instagram", "Facebook", "LinkedIn", "Awwwards", "Behance"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm font-medium hover:text-accent transition-colors border-b border-transparent hover:border-accent"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Live Clock Section */}
            <div className="flex flex-col gap-2 border-t border-white/10 pt-6 w-full max-w-xs md:items-end">
              <p className="text-xs font-medium text-white/50 flex items-center gap-2">
                <span className="text-white tabular-nums">{time}</span> (GMT+2)
              </p>
              <div className="md:text-right">
                <p className="text-[10px] uppercase tracking-widest text-white/30">
                  Ziptech Limited © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Newsletter Snippet (Tablet/Desktop Only) */}
      <div className="hidden lg:block absolute bottom-12 left-[5vw] max-w-[300px] border-t border-white/10 pt-6">
        <p className="text-[13px] leading-relaxed text-white/60 mb-4">
          Join our newsletter for fresh updates and exclusive studio insights.
        </p>
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-[11px] uppercase tracking-widest font-semibold border-b border-white group-hover:text-accent group-hover:border-accent transition-all">
            Newsletter Signup
          </span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes menuIn {
          from { clip-path: inset(0 0 100% 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        .menu-animation {
          animation: menuIn 0.8s cubic-bezier(0.85, 0, 0.15, 1);
        }
      `}</style>
    </div>
  );
}