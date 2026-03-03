"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ProjectData } from "@/lib/project-data";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

const categories = ["All", "Fintech", "Health", "Social", "Brand"];

const SplitText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap">
      {text.split("").map((char, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 + (i * 0.02) }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default function WorkIndexClient({ projects }: { projects: ProjectData[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<ProjectData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(p => 
    activeCategory === "All" || p.category.toLowerCase().includes(activeCategory.toLowerCase())
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main ref={containerRef} className="bg-[#111] text-[#f0ebe3] min-h-screen selection:bg-[#00ffff] selection:text-[#111]">
      <Navbar onMenuToggle={() => {}} />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#00ffff] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero */}
      <section className="pt-[20vh] pb-[10vh] px-[5vw]">
        <div className="max-w-[1600px] mx-auto">
          <h1 className="text-[clamp(4rem,18vw,16rem)] leading-[0.8] font-medium tracking-tighter uppercase mb-20 italic">
            <SplitText text="Index" />
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full border text-xs font-bold tracking-widest uppercase transition-all duration-500 ${
                  activeCategory === cat 
                    ? "bg-[#00ffff] border-[#00ffff] text-[#111]" 
                    : "border-white/10 text-white/40 hover:border-white/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project List */}
      <section className="px-[5vw] pb-[20vh]">
        <div className="max-w-[1600px] mx-auto">
          <div className="border-t border-white/10">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project.id}
                href={`/work/${project.slug}`}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative flex items-center justify-between p-6 bg-white/2 hover:bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-center gap-12">
                    <span className="text-xs font-bold text-[#00ffff] opacity-40 group-hover:opacity-100 transition-opacity">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-none font-medium uppercase tracking-tight transition-all duration-700 group-hover:italic group-hover:translate-x-4">
                      {project.title}
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                      {project.category}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#00ffff] group-hover:border-[#00ffff]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:text-[#111] transition-colors">
                        <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Slide */}
                <div className="absolute inset-0 bg-white/2 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hover Preview Media (Floating Cursor Follow) */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: mousePos.x,
              y: mousePos.y
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ 
              type: "spring", 
              stiffness: 150, 
              damping: 20, 
              mass: 0.5,
              opacity: { duration: 0.3 }
            }}
            className="fixed top-0 left-0 w-[600px] h-[400px] pointer-events-none z-40 overflow-hidden rounded-2xl shadow-2xl hidden md:block" // Increased size
            style={{ 
              translateX: "-50%", 
              translateY: "-50%",
              marginLeft: "40px", 
              marginTop: "-40px"
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={hoveredProject.heroImage}
                alt={hoveredProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#111]/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CTA SECTION --- */}
      <section className="py-[20vh] px-[5vw] bg-white text-[#111] rounded-t-[4rem]">
        <div className="max-w-[1600px] mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-medium uppercase mb-16 tracking-tighter"
          >
            Let's work <br /> together
          </motion.h2>

          <MagneticButton>
            <Link 
              href="/contact"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#111] text-white flex items-center justify-center text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:bg-[#00ffff] hover:text-[#111] group"
            >
              <div className="relative overflow-hidden">
                <span className="block group-hover:-translate-y-full transition-transform duration-500">Get in touch</span>
                <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500">Drop a line</span>
              </div>
            </Link>
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Magnetic Button Component
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};
