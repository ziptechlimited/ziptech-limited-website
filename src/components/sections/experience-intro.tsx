"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion";

interface ExperienceIntroProps {}

const ExperienceIntro: React.FC<ExperienceIntroProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smoother movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Scroll tracking for the entire 400vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- THEME TRANSITIONS ---
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45, 0.85, 0.95, 1],
    ["#f5f5f5", "#f5f5f5", "#0a0a0a", "#0a0a0a", "#f5f5f5", "#f5f5f5"]
  );
  
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45, 0.85, 0.95, 1],
    ["#000000", "#000000", "#ffffff", "#ffffff", "#000000", "#000000"]
  );

  // --- PHASE 1: TITLE REVEAL (0 to 0.4) ---
  const p1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);
  const p1Y = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4], [100, 0, 0, -100]);
  const p1Blur = useTransform(scrollYProgress, [0, 0.1], [20, 0]);
  const p1PointerEvents = useTransform(scrollYProgress, (v) => v > 0.35 ? "none" : "auto");

  //  // Phase 2: the dark background description section
  const p2EntryProgress = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]); // p2 fades in
  const p2Opacity = useTransform(p2EntryProgress, [0, 1], [0, 1]);
  const p2Y = useTransform(p2EntryProgress, [0, 1], [40, 0]);
  const p2PointerEvents = useTransform(p2EntryProgress, (v) => v > 0.5 ? "auto" : "none");

  // Fill Progress for ticks and boxed text (from right after entry to very end of scroll)
  const fillProgress = useTransform(scrollYProgress, [0.55, 1.0], [0, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      // We only want to track mouse relative to the viewport for the sticky container
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Floating images data
  const images = [
    {
      url: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=600&auto=format&fit=crop",
      top: "12%", left: "8%", width: 320, height: 480, rotation: -5, parallax: 40,
    },
    {
      url: "https://images.unsplash.com/photo-1605608027727-4a1622f98126?q=80&w=600&auto=format&fit=crop",
      top: "18%", left: "72%", width: 340, height: 460, rotation: 3, parallax: 60,
    },
    {
      url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
      top: "42%", left: "14%", width: 300, height: 450, rotation: 8, parallax: 30,
    },
    {
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
      top: "32%", left: "84%", width: 360, height: 520, rotation: -2, parallax: 50,
    },
    {
      url: "https://images.unsplash.com/photo-1542744094-24638ea0b46c?q=80&w=600&auto=format&fit=crop",
      top: "58%", left: "68%", width: 320, height: 480, rotation: -4, parallax: 45,
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      top: "72%", left: "10%", width: 340, height: 460, rotation: 6, parallax: 55,
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
      top: "82%", left: "58%", width: 310, height: 440, rotation: -3, parallax: 35,
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      top: "88%", left: "80%", width: 330, height: 490, rotation: 4, parallax: 65,
    },
  ];

  const word = "experiences";

  // Data for Phase 2 text - Entire paragraph now uses the box fill animation
  // Exact words and line breaks from the user's screenshot
  const allPhase2Boxes = [
    [
      { text: "Creative", fillAt: 0.1 },
      { text: "websites", fillAt: 0.13 },
      { text: "are", fillAt: 0.16 },
      { text: "the", fillAt: 0.19 }
    ],
    [
      { text: "intersection", fillAt: 0.28 },
      { text: "of", fillAt: 0.31 },
      { text: "creativity", fillAt: 0.34 }
    ],
    [
      { text: "and", fillAt: 0.43 },
      { text: "technicality", fillAt: 0.46 },
      { text: "to", fillAt: 0.49 },
      { text: "form", fillAt: 0.52 }
    ],
    [
      { text: "bespoke", fillAt: 0.61 },
      { text: "digital", fillAt: 0.64 },
      // spelling from screenshot matched or corrected? I'll use experiences as correct spelling is preferred, 
      // but user reference image had a minor typo.
      { text: "experiences", fillAt: 0.67 } 
    ],
    [
      { text: "that", fillAt: 0.76 },
      { text: "spark", fillAt: 0.79 },
      { text: "emotion.", fillAt: 0.82 }
    ]
  ];

  return (
    <motion.section 
      ref={containerRef}
      style={{ backgroundColor, color: textColor }}
      // Reduced from 400vh to 300vh to remove dead scrolling space at the end
      className="exp relative h-[300vh] overflow-clip transition-colors duration-0" 
      data-theme="dynamic"
    >
      {/* Cinematic Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-50 opacity-[0.035]"
        style={{
          position: "fixed", // keep noise fixed during scroll
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Sticky Container holds all the centered action */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* ========================================== */}
        {/* PHASE 1: TITLE REVEAL & IMAGES             */}
        {/* ========================================== */}
        <motion.div 
          style={{ opacity: p1Opacity, y: p1Y, pointerEvents: p1PointerEvents as any }}
          className="absolute inset-0 flex flex-col items-center justify-center px-[5vw] z-10"
        >
          {/* Background Images Reveal */}
          <div className="exp-images hidden lg:block absolute inset-0 pointer-events-none z-0">
            {images.map((img, idx) => {
              const isHovered = hoveredIndex !== null && (hoveredIndex % images.length) === idx;
              const px = useTransform(springX, (v) => v * img.parallax);
              const py = useTransform(springY, (v) => v * img.parallax);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, rotate: img.rotation - 5 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0, 
                    scale: isHovered ? 1 : 0.9,
                    rotate: isHovered ? img.rotation : img.rotation - 5,
                    y: isHovered ? 0 : 20
                  }}
                  style={{ 
                    top: img.top, 
                    left: img.left, 
                    width: `${(img.width / 1440) * 100}vw`,
                    maxWidth: '280px',
                    x: px,
                    y: py,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20, 
                    mass: 0.5 
                  }}
                  className="aspect-3/4 relative overflow-hidden bg-zinc-900"
                >
                  <div className="media-wrapper overflow-hidden rounded-sm shadow-2xl">
                    <Image 
                      src={img.url} 
                      alt="" 
                      width={img.width} 
                      height={img.height} 
                      className="media image w-full h-full object-cover scale-110"
                      priority
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="exp-content text-center max-w-[1440px] w-full z-10">
            <motion.div 
              style={{ filter: useTransform(p1Blur, (b) => `blur(${b}px)`) }}
              className="mb-6"
            >
              <span className="exp-subtitle uppercase text-[10px] sm:text-[12px] tracking-[0.4em] font-semibold opacity-30 block mb-2">
                Inside Ziptech Limited
              </span>
              <div className="w-12 h-px bg-current opacity-10 mx-auto" />
            </motion.div>

            <h2 className="exp-title text-[clamp(2.5rem,10vw,7.5rem)] leading-[0.95] tracking-[-0.04em] font-serif mb-[6vh] flex flex-col items-center justify-center cursor-default">
              <div className="w-full">
                <motion.span 
                  style={{ filter: useTransform(p1Blur, (b) => `blur(${b}px)`) }}
                  className="inline-block"
                >
                  Crafting competitive
                </motion.span>
              </div>
              <div className="w-full flex justify-center flex-wrap">
                <motion.span 
                  style={{ filter: useTransform(p1Blur, (b) => `blur(${b}px)`) }}
                  className="inline-block whitespace-pre"
                >
                  digital{" "}
                </motion.span>
                <motion.span 
                  style={{ filter: useTransform(p1Blur, (b) => `blur(${b}px)`) }}
                  className="inline-flex italic relative transition-all duration-700 text-accent"
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {word.split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block transition-colors duration-300 hover:opacity-50 cursor-none select-none"
                      onMouseEnter={() => setHoveredIndex(i)}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </div>
            </h2>
          </div>
        </motion.div>


        {/* ========================================== */}
        {/* PHASE 2: WORD FILL & TICK DIAL              */}
        {/* ========================================== */}
        <motion.div 
          style={{ opacity: p2Opacity, y: p2Y, pointerEvents: p2PointerEvents as any }}
          className="absolute inset-0 flex flex-col items-center justify-center px-[5vw] z-20"
        >
          {/* Circular Tick Dial Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
             <svg width="800" height="800" viewBox="-400 -400 800 800" className="w-[80vmin] h-[80vmin] max-w-[800px] max-h-[800px]">
                {Array.from({ length: 60 }).map((_, i) => {
                  const angle = (i * 6) * (Math.PI / 180);
                  const isMajor = i % 5 === 0;
                  // Increased radii slightly more for extra inner padding
                  const innerR = isMajor ? 380 : 400;
                  const outerR = 420;
                  
                  // Calculate opacity based on scroll progress mapping to angle
                  // Starts from top (index 0) and lights up clockwise
                  const tickProgressThreshold = i / 60;
                  // We map fillProgress [0,1] to opacity [0.1, 1] for each tick
                  const tickOpacity = useTransform(
                    fillProgress, 
                    [tickProgressThreshold - 0.1, tickProgressThreshold + 0.1], 
                    [0.2, 1]
                  );
                  
                  // The last tick in the sequence (index 59) gets the accent color
                  const isLastTick = i === 59;

                  return (
                    <motion.line
                      key={i}
                      x1={Math.sin(angle) * innerR}
                      y1={-Math.cos(angle) * innerR}
                      x2={Math.sin(angle) * outerR}
                      y2={-Math.cos(angle) * outerR}
                      stroke={isLastTick ? "var(--accent, #f97316)" : "currentColor"}
                      strokeWidth={isMajor ? 2 : 1}
                      style={{ opacity: tickOpacity }}
                    />
                  );
                })}
             </svg>
          </div>

          <div className="relative z-10 text-center w-full max-w-[90vw] flex flex-col gap-[0.1em] font-medium text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.15] tracking-[-0.02em]">
            
            {/* Boxed Text Fill Reveal for entire paragraph */}
            {allPhase2Boxes.map((row, rowIdx) => (
              <div key={rowIdx} className="flex justify-center flex-wrap gap-[0.25em]">
                {row.map((box, boxIdx) => {
                  // Box background goes from dark grey to transparent
                  const boxBg = useTransform(
                    fillProgress,
                    [box.fillAt - 0.05, box.fillAt + 0.05],
                    ["#1a1a1a", "rgba(26,26,26,0)"]
                  );
                  // Text goes from transparent to white
                  const boxTextOp = useTransform(
                    fillProgress,
                    [box.fillAt - 0.05, box.fillAt + 0.05],
                    [0, 1]
                  );
                  
                  // Target "emotion." for the accent color, matching the reference screenshot
                  const isAccentWord = box.text.includes("emotion");

                  return (
                    <motion.div 
                      key={boxIdx}
                      style={{ backgroundColor: boxBg }}
                      className="relative px-[0.15em] rounded-sm border border-transparent overflow-hidden"
                    >
                        {/* Hidden ghost text to maintain box sizing */}
                        <span className="opacity-0 select-none block">{box.text}</span>
                        
                        {/* Actual revealing text */}
                        <motion.span 
                        style={{ 
                          opacity: boxTextOp,
                          color: isAccentWord ? "var(--accent, #f97316)" : "inherit"  
                        }}
                        className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                        >
                          {box.text}
                        </motion.span>
                    </motion.div>
                  );
                })}
              </div>
            ))}
            
          </div>
        </motion.div>

      </div>
      
      {/* Decorative vertical line tied to P1 */}
      <motion.div 
        style={{ opacity: p1Opacity }}
        className="absolute left-1/2 bottom-0 w-px h-[10vh] bg-current opacity-10 -translate-x-1/2 z-10" 
      />
    </motion.section>
  );
};

export default ExperienceIntro;