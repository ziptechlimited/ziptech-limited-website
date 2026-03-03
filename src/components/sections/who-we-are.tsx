"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const captions = [
  { text: "WE ENVISION", highlight: "BOLD FUTURES.", color: "white" },
  { text: "WE BUILD WITH ABSOLUTE", highlight: "PRECISION.", color: "#00ffff" },
  { text: "WE OPTIMISE FOR MAXIMUM", highlight: "IMPACT.", color: "#00ffff" },
  { text: "WE SCALE IDEAS INTO", highlight: "REALITY.", color: "white" },
  { text: "WE ARE", highlight: "ZIPTECH LIMITED.", color: "#00ffff" },
];

const TextSlide = ({ caption, progress, index, total }: { caption: any, progress: any, index: number, total: number }) => {
  const start = index / total;
  const end = (index + 1) / total;
  
  // Animation mapping for each slide
  const isLast = index === total - 1;
  const opacity = useTransform(
    progress, 
    [start, start + 0.1, end - 0.1, end], 
    [0, 1, 1, isLast ? 1 : 0]
  );
  const scale = useTransform(
    progress, 
    [start, start + 0.1, end - 0.1, end], 
    [0.8, 1, 1, isLast ? 1 : 1.2]
  );
  const y = useTransform(
    progress, 
    [start, start + 0.1, end - 0.1, end], 
    [50, 0, 0, isLast ? 0 : -50]
  );
  
  // Smooth the animations
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <motion.div 
      style={{ 
        opacity: smoothOpacity, 
        scale: smoothScale, 
        y: smoothY,
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 5vw',
        zIndex: 100 - index
      }}
    >
      <h2 className="text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] tracking-[-0.04em] font-bold text-white uppercase select-none">
        {caption.text} <br />
        <span style={{ color: caption.color }} className="italic font-light">
          {caption.highlight}
        </span>
      </h2>
    </motion.div>
  );
};

const WhoWeAre = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[500vh] bg-[#020202] rounded-[4rem]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Cinematic Background Image with Parallax */}
        <motion.div 
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        >
          <img 
            src="/developers-workspace.png" 
            alt="Developers Workspace" 
            className="w-full h-[120%] object-cover object-center opacity-40 grayscale-[0.5] brightness-50"
          />
          {/* Heavy gradient vignette for typographic focus */}
          <div className="absolute inset-0 bg-black/60 bg-linear-to-b from-black/80 via-transparent to-black/80 z-10" />
          {/* Subtle Cyan Ambient Glow */}
          <div className="absolute inset-0 bg-[#00ffff]/2 mix-blend-overlay z-15" />
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen border border-white/10 rounded-full" />
        </div>

        {/* Cinematic Slides */}
        {captions.map((caption, i) => (
          <TextSlide 
            key={i} 
            caption={caption} 
            progress={scrollYProgress} 
            index={i} 
            total={captions.length} 
          />
        ))}

        {/* Progress Indicator Side Text */}
        <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 flex flex-col items-end gap-2 text-[10px] tracking-[0.4em] text-white/30 uppercase vertical-text">
          <span className="mb-4">Who We Are</span>
          {captions.map((_, i) => {
            const opacity = useTransform(
              scrollYProgress, 
              [i / captions.length, (i + 0.5) / captions.length, (i + 1) / captions.length], 
              [0.2, 1, 0.2]
            );
            return (
              <motion.div 
                key={i} 
                style={{ opacity }}
                className="w-1 h-8 bg-white/40 rounded-full"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;