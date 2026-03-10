"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const [time, setTime] = useState("");
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // GMT+1 calculation (West Africa Time - WAT)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const gmtPlus1 = new Date(utc + 3600000 * 1);
      const hours = gmtPlus1.getHours().toString().padStart(2, "0");
      const minutes = gmtPlus1.getMinutes().toString().padStart(2, "0");
      const seconds = gmtPlus1.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = ["Home", "Work", "About", "Services", "Contact"];
  const socialLinks = [
    "Instagram",
    "Facebook",
    "LinkedIn",
    "Awwwards",
    "Behance",
  ];

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-[#020202] text-[#FBFBF4] pt-20 pb-8 px-[5vw] font-sans selection:bg-[#00ffff] selection:text-black overflow-hidden z-10"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-[1440px] mx-auto flex flex-col justify-between h-full min-h-[60vh]"
      >
        {/* Top Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20 md:mb-0">
          {/* Site Index */}
          <div className="space-y-6">
            <h6 className="text-xs uppercase tracking-[0.2em] text-[#808080] font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00ffff] rounded-full inline-block"></span>
              Site index
            </h6>
            <nav className="flex flex-col gap-4">
              {navLinks.map((item, i) => (
                <div key={item} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                      className="group relative text-2xl md:text-3xl font-light hover:text-[#00ffff] transition-colors w-fit block"
                    >
                      <span className="relative z-10">{item}</span>
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-[#00ffff] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h6 className="text-xs uppercase tracking-[0.2em] text-[#808080] font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00ffff] rounded-full inline-block"></span>
              Social
            </h6>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((social, i) => (
                <div key={social} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-lg hover:text-[#00ffff] transition-colors w-fit"
                    >
                      <span>{social}</span>
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        ↗
                      </span>
                    </a>
                  </motion.div>
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h6 className="text-xs uppercase tracking-[0.2em] text-[#808080] font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00ffff] rounded-full inline-block"></span>
              Say Hello
            </h6>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <a
                  href="mailto:info@ziptechlimited.com"
                  className="relative text-xl md:text-2xl font-light hover:text-[#00ffff] transition-colors w-fit group"
                >
                  info@ziptechlimited.com
                  <span className="absolute left-0 -bottom-1 w-full h-px bg-white/20 transition-all duration-300 group-hover:bg-[#00ffff]"></span>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a
                  href="tel:+2348061938780"
                  className="text-lg text-white/70 hover:text-white transition-colors w-fit"
                >
                  +234 806 1938 780
                </a>
              </motion.div>
            </div>
          </div>

          {/* Location & Clock */}
          <div className="space-y-6 md:text-right flex flex-col items-start md:items-end md:ml-auto">
            <h6 className="text-xs uppercase tracking-[0.2em] text-[#808080] font-medium flex items-center gap-2 md:flex-row-reverse">
              <span className="w-1.5 h-1.5 bg-[#00ffff] rounded-full inline-block animate-pulse"></span>
              Local Time
            </h6>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl font-light tracking-wide flex items-center gap-3"
            >
              <span className="tabular-nums">{time}</span>
              <span className="text-sm text-[#808080]">WAT</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Big Typography & Credits */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative flex justify-center items-center py-8 md:py-16 overflow-hidden"
          >
            <h1 className="text-[15vw] leading-none font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 select-none">
              ZIPTECH
            </h1>
          </motion.div>

          <div className="w-full flex-col md:flex-row flex justify-between items-center text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[#808080] gap-4">
            <div>
              &copy; {new Date().getFullYear()} Ziptech Limited. All rights
              reserved.
            </div>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
