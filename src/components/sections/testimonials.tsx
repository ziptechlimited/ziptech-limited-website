"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const testimonials = [
  {
    quote: "The team at Ziptech Limited have been amazing and critical to our UI/UX journey, they challenge our thoughts for the better and have allowed us to become a leading Buy Now Pay Later platform. I cannot recommend them enough.",
    author: "Craig Newborn",
    role: "Former CEO, PayJustNow",
    position: { top: "15%", left: "8%" },
    speed: 0.12,
    zIndex: 10,
  },
  {
    quote: "Working with Ziptech Limited has been a genuinely outstanding experience. Their team brings a rare combination of creativity, technical expertise, and collaborative spirit. Ziptech Limited met us exactly where we were – they listened closely, understood the strategic goals and translated that direction into clear, compelling visual design.",
    author: "Donna Blackwell-Kopotic",
    role: "Sims Lifecycle Service (US)",
    position: { top: "22%", left: "52%" },
    speed: -0.18,
    zIndex: 20,
  },
  {
    quote: "The Ziptech Limited team have a grasp of branding and product design like I've never seen before. We searched the globe for a tech-focused CI design agency and found that the top talent was right here.",
    author: "Colleen Harrison",
    role: "Former Head of Marketing, Payfast",
    position: { top: "42%", left: "12%" },
    speed: 0.25,
    zIndex: 15,
  },
  {
    quote: "Working with Natalia and the Ziptech Limited team is like working with a bomb squad. They know exactly which wires to cut to get exactly the results we were looking for. They are the only agency we have on speed dial.",
    author: "Jason Bagley",
    role: "Founder and CEO, Growth Experts (US)",
    position: { top: "52%", left: "58%" },
    speed: -0.22,
    zIndex: 25,
  },
  {
    quote: "Working with Natalia and the Ziptech Limited team on the HelpGuide rebrand has been a true pleasure. Their design approach is strategic, thoughtful, and truly user-centric, and we couldn't be more pleased with the results.",
    author: "Melinda Smith",
    role: "Executive Director & Editor in Chief, HelpGuide (US)",
    position: { top: "68%", left: "14%" },
    speed: 0.15,
    zIndex: 30,
  },
  {
    quote: "Smart, dedicated and always tackling each new brief with diligence and enthusiasm. Highly recommended without hesitation.",
    author: "Mark McChlery",
    role: "Chief Data and Analytics Officer, PayJustNow",
    position: { top: "8%", left: "70%" },
    speed: 0.35,
    zIndex: 5,
  },
  {
    quote: "Leigh and Kristen invested themselves in our journey, capturing the essence of our brand and going the extra mile at every step. Their creativity, care, and dedication shine through in a site that feels world-class and truly ours.",
    author: "Keith Hesketh",
    role: "Marketing & eCommerce Manager, Yucca Packaging",
    position: { top: "78%", left: "48%" },
    speed: -0.28,
    zIndex: 12,
  },
];

const TestimonialCard = ({ testimonial, scrollYProgress }: { testimonial: typeof testimonials[0], scrollYProgress: any }) => {
  // Enhanced y movement for better parallax feel
  const y = useTransform(scrollYProgress, [0, 1], [0, testimonial.speed * 1200]);
  
  // Hash the author name for a stable unique rotation
  const hash = testimonial.author.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const baseRotation = (hash % 10) - 5; // -5 to 5 deg
  const rotate = useTransform(scrollYProgress, [0, 1], [baseRotation, baseRotation + (testimonial.speed * 40)]);

  return (
    <motion.div
      style={{
        top: testimonial.position.top,
        left: testimonial.position.left,
        y,
        rotate,
        zIndex: testimonial.zIndex,
      }}
      className="absolute w-[340px] md:w-[420px] p-8 rounded-2xl backdrop-blur-2xl bg-white/4 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default select-none"
    >
      <div className="flex flex-col gap-5">
        <p className="text-foreground/80 text-[1.15rem] leading-[1.6] font-sans font-light tracking-tight">
          "{testimonial.quote}"
        </p>
        <div className="flex flex-col pt-2">
          <span className="text-foreground font-medium uppercase tracking-[0.15em] text-[11px]">
            {testimonial.author}
          </span>
          <span className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] mt-1.5 opacity-60">
            {testimonial.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for high-end scroll feeling
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.001
  });

  const bgTextY = useTransform(springScroll, [0, 1], ["25%", "-25%"]);

  return (
    <section 
      ref={containerRef}
      className="testimonials relative h-[500vh] bg-sidebar overflow-visible" 
      data-theme="dark"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Screenshot Side Labels */}
        <div className="absolute top-12 left-12 z-100 pointer-events-none hidden md:block">
          <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/40 mb-3">
            ZIPTECH LIMITED
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-foreground/20" />
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-foreground/70">
              TESTIMONIALS
            </div>
          </div>
        </div>

        {/* Large Background Floating Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <motion.div style={{ y: bgTextY }} className="flex flex-col items-center">
             <h2 className="text-[18vw] font-display font-bold text-foreground/3 leading-[0.85] whitespace-nowrap uppercase tracking-tighter">
              What people say
            </h2>
             <h2 className="text-[18vw] font-display font-bold text-foreground/3 leading-[0.85] whitespace-nowrap uppercase tracking-tighter ml-[15vw]">
              about me
            </h2>
          </motion.div>
        </div>

        {/* Floating Cards Container */}
        <div className="relative w-full h-full max-w-[1440px] mx-auto z-10">
          {testimonials.map((item, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={item} 
              scrollYProgress={springScroll} 
            />
          ))}
        </div>

        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-sidebar via-transparent to-sidebar z-20" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)] z-20" />
      </div>
    </section>
  );
};

export default Testimonials;
