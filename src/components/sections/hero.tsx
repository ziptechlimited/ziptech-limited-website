import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

/**
 * Custom Hero component featuring physics-driven typography,
 * sophisticated noise overlay, ambient background gradient,
 * and seamless scroll-parallax.
 */
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up scroll tracking for the parallax push effect
  // Trigger offset starts tracking when top hits top, ends tracking entirely when top leaves screen (-100vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Words for stagger animation
  const title1 = "TECHNOLOGY";
  const title2 = "VENTURES";
  const title3 = "GROWTH";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const, // Custom easeOutExpo
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[150vh] bg-sidebar"
      data-theme="dark"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* CSS Noise Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* High-End Architectural Background Image with Independent Parallax */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        >
          <img
            src="/developers-workspace.png"
            alt="Hero Background"
            className="w-full h-[120%] object-cover object-center scale-110"
          />
          {/* Enhanced gradient vignette/overlay for cinematic depth */}
          <div className="absolute inset-0 z-10 bg-linear-to-b from-sidebar/0 via-sidebar/20 to-sidebar/90 pointer-events-none" />
        </motion.div>

        {/* Content Container */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-30 container flex flex-col items-center text-center px-4"
        >
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-[#ffffff] font-display select-none uppercase w-full"
          >
            <span className="block overflow-hidden pb-4 md:pb-6">
              <motion.span
                variants={itemVariants}
                className="block text-[clamp(1.5rem,3.5vw,3.5rem)] font-medium tracking-[-0.02em] leading-none opacity-80 mix-blend-difference"
              >
                {title1}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={itemVariants}
                className="block text-[clamp(3.5rem,10vw,14rem)] font-semibold tracking-[-0.04em] leading-[0.8] mix-blend-difference text-transparent bg-clip-text bg-linear-to-b from-white to-white/70"
              >
                {title2}
              </motion.span>
            </span>
            <span className="block overflow-hidden pt-2">
              <motion.span
                variants={itemVariants}
                className="block text-[clamp(3rem,11vw,14rem)] font-semibold tracking-[-0.04em] leading-[0.8] mix-blend-difference text-transparent bg-clip-text bg-linear-to-b from-white/90 to-white/30"
              >
                {title3}
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-[8vh] flex flex-col items-center gap-6"
          >
            <span className="text-[0.65rem] md:text-[0.75rem] font-mono uppercase tracking-[0.3em] text-white/50">
              Scroll to discover
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <ArrowDown className="text-white/60 w-4 h-4" strokeWidth={2} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
