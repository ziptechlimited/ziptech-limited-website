"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const services = [
  {
    title: "Product Strategy",
    description: "We define the roadmap for your digital success, blending market insights with technical feasibility.",
    tags: ["Market Analysis", "User Research", "MVP Definition"],
    color: "#00ffff"
  },
  {
    title: "UX/UI Design",
    description: "Cinematic interfaces that prioritize clarity and user engagement across every touchpoint.",
    tags: ["Visual Systems", "Prototyping", "Motion Design"],
    color: "#7000ff"
  },
  {
    title: "Full-Stack Dev",
    description: "High-performance applications built with scalable architectures and modern tech stacks.",
    tags: ["Next.js", "Cloud Infra", "Performance Architecture"],
    color: "#ff0070"
  },
  {
    title: "Branding & Identity",
    description: "Crafting memorable brand stories that resonate with your audience and stand the test of time.",
    tags: ["Logo Design", "Typography", "Brand Strategy"],
    color: "#ffaa00"
  }
];

const processes = [
  { step: "01", title: "Discovery", text: "Deep dive into your goals, audience, and functional requirements." },
  { step: "02", title: "Design", text: "Iterative design sprints focusing on high-fidelity UX and visual systems." },
  { step: "03", title: "Develop", text: "Clean, efficient coding with continuous integration and quality testing." },
  { step: "04", title: "Deliver", text: "Smooth deployment and post-launch support to ensure long-term growth." }
];

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default function ServicesClient() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <main className="bg-[#0a0a0a] text-[#f0ebe3] selection:bg-[#00ffff] selection:text-[#111]">
      <Navbar onMenuToggle={() => {}} />

      {/* --- HERO SECTION (Pinned Scale) --- */}
      <section className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-[5vw]"
          >
            <h1 className="text-[clamp(3rem,12vw,10rem)] leading-[0.85] font-medium uppercase tracking-tighter mb-8 italic">
              Our <br /> Capabilities
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed">
              We bridge the gap between complex technology and human-centric design, creating digital experiences that move the needle.
            </p>
          </motion.div>

          {/* Decorative Backdrops */}
          <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#00ffff]/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-[#7000ff]/5 blur-[100px] pointer-events-none" />
        </div>
      </section>

      {/* --- HORIZONTAL SCROLL SERVICES --- */}
      <section ref={horizontalRef} className="relative h-[400vh] bg-[#0a0a0a]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-[5vw] px-[5vw]">
            {services.map((service, i) => (
              <div 
                key={service.title} 
                className="relative w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-4/5 md:aspect-square bg-white/3 border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-between group overflow-hidden"
              >
                {/* Hover Background Accent */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-full opacity-20 pointer-events-none"
                  style={{ backgroundColor: service.color }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-12 transition-transform duration-500 group-hover:scale-110 group-hover:border-white">
                    <span className="text-xs font-bold text-white/40 group-hover:text-white">0{i+1}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-medium uppercase tracking-tight mb-6 leading-none group-hover:italic transition-all">
                    {service.title}
                  </h3>
                  <p className="text-white/50 group-hover:text-white/80 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-3 text-xs font-black tracking-[0.2em] uppercase text-[#00ffff] group/btn">
                    Explore Service 
                    <FiArrowRight className="transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS SECTION (Scale Reveals) --- */}
      <section className="py-[180px] px-[5vw] bg-white text-[#111] rounded-t-[4rem]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-32">
            <div className="lg:col-span-8">
              <FadeUp>
                <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter">
                  Our <br /> Process
                </h2>
              </FadeUp>
            </div>
            <div className="lg:col-span-4">
              <FadeUp delay={0.2}>
                <p className="text-lg text-[#111]/60 font-light leading-relaxed">
                  Execution is everything. We follow a battle-tested methodology to ensure quality and speed.
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.1}>
                <div className="p-10 border border-[#111]/10 rounded-4xl hover:bg-[#00ffff]/5 transition-colors group">
                  <span className="block text-xs font-black tracking-widest text-[#111]/30 mb-12 group-hover:text-[#00ffff] transition-colors">
                    {p.step}
                  </span>
                  <h4 className="text-3xl font-medium uppercase mb-4">{p.title}</h4>
                  <p className="text-[#111]/60 leading-relaxed font-light">
                    {p.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-[150px] px-[5vw] bg-[#0a0a0a] text-center rounded-t-[4rem]">
          <FadeUp>
            <h3 className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight mb-12 flex flex-col">
              Ready to redefine 
              <span className="text-[#00ffff] font-medium uppercase italic scale-110 mt-4">your digital edge?</span>
            </h3>
            <button className="group relative bg-white text-[#111] px-12 py-6 rounded-full text-xs font-black tracking-[0.3em] uppercase overflow-hidden transition-all hover:pr-16">
               <span className="relative z-10 transition-colors group-hover:text-white">Start a Project</span>
               <div className="absolute inset-0 bg-[#00ffff] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100" />
               <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiArrowRight size={18} className="text-white" />
               </div>
            </button>
          </FadeUp>
      </section>

      <Footer />
    </main>
  );
}
