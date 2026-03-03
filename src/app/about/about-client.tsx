"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Team from "@/components/sections/team";
import Image from "next/image";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

const SplitText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap">
      {text.split(" ").map((word, i) => (
        <div key={i} className="overflow-hidden mr-[0.2em] py-[0.1em]">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default function AboutClient() {
  const visionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: visionProgress } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"]
  });

  const visionScale = useTransform(visionProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const visionOpacity = useTransform(visionProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <main className="bg-[#f0ebe3] text-[#111] selection:bg-[#00ffff] selection:text-[#111]">
      <Navbar onMenuToggle={() => {}} />

      {/* --- HERO SECTION (Kinetic Text) --- */}
      <section className="h-[120vh] flex items-center justify-center px-[5vw] pt-20">
        <div className="max-w-[1600px] w-full text-center">
          <h1 className="text-[clamp(4rem,15vw,14rem)] leading-[0.85] font-medium uppercase tracking-tighter mb-12 italic">
            <SplitText text="We Build" />
            <span className="text-[#00ffff] block relative">
               <SplitText text="Precision" />
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1 }}
                 className="absolute bottom-4 left-0 h-2 bg-[#00ffff] rounded-full hidden md:block"
               />
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#111]/60 font-light leading-relaxed mt-12">
            Antigravity is a boutique digital studio where design meets cinematic storytelling and high-precision engineering.
          </p>
        </div>
      </section>

      {/* --- VISION SECTION (Scale-In) --- */}
      <section ref={visionRef} className="h-screen flex items-center justify-center relative overflow-hidden bg-[#111] text-white rounded-[4rem]">
        <motion.div 
          style={{ scale: visionScale, opacity: visionOpacity }}
          className="max-w-[1200px] text-center px-[5vw] z-10"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-none font-medium uppercase tracking-tighter mb-12">
            Our vision is to defy <br /> 
            <span className="text-[#00ffff]">the standard digital gravity.</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/50 leading-relaxed max-w-3xl mx-auto">
            We don't just build websites; we craft immersive journeys that linger in the mind long after the tab is closed.
          </p>
        </motion.div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-white/5 pointer-events-none" />
      </section>

      {/* --- STORY SECTION (Editorial) --- */}
      <section className="py-[180px] px-[5vw]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          <div className="lg:col-span-5">
            <FadeUp>
               <div className="relative aspect-[3/4] w-full rounded-[3rem] overflow-hidden group">
                  <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    alt="Our Studio"
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
               </div>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#111]/40 mb-8 block">The Origin</span>
              <h3 className="text-4xl md:text-6xl font-medium uppercase tracking-tight mb-12 leading-none">
                Born in the <br /> <span className="italic">Intersection</span> of Soul & Code.
              </h3>
              <div className="space-y-8 text-xl text-[#111]/70 font-light leading-relaxed">
                <p>
                  Founded by a group of designers and engineers who grew tired of the "cookie-cutter" web, Antigravity was built to prove that functional can also be beautiful.
                </p>
                <p>
                  We treat every project as a piece of art, ensuring that the technology is invisible while the experience remains unforgettable.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY (Horizontal List) --- */}
      <section className="py-[150px] px-[5vw] bg-white rounded-t-[4rem]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
            <FadeUp>
              <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter">
                Method to <br /> our magic
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="max-w-md text-lg text-[#111]/60 font-light leading-relaxed">
                Our philosophy is simple: cut the noise, amplify the substance, and obsess over the details.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Subtract", text: "Removing everything unnecessary until only the core essence remains. Simplicity is the ultimate sophistication." },
              { title: "Elevate", text: "Pushing standard components beyond their limits with custom motion and cinematic transitions." },
              { title: "Connect", text: "Designing for human emotion first. We create digital interfaces that breathe and respond." }
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="aspect-3/4 bg-zinc-900 border border-white/10 p-6 flex flex-col justify-end relative overflow-hidden group">
                  <div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#111]/30 group-hover:text-[#00ffff] mb-12 block">0{i+1}</span>
                    <h4 className="text-4xl font-medium uppercase mb-6 group-hover:italic transition-all">{item.title}</h4>
                  </div>
                  <p className="text-inherit opacity-60 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-[150px] relative">
        <div className="max-w-[1600px] mx-auto px-[5vw] mb-16">
          <FadeUp>
            <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter">
              The <br /> Collective
            </h2>
          </FadeUp>
        </div>
        <Team />
      </section>

      <Footer />
    </main>
  );
}
