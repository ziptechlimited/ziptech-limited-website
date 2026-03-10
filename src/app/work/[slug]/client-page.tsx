"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { ProjectData } from "@/lib/project-data";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Script from "next/script";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const SplitText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap">
      {text.split(" ").map((word, i) => (
        <div key={i} className="overflow-hidden mr-[0.2em] py-[0.1em]">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (i * 0.05) }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

export default function ClientProjectDetails({ project }: { project: ProjectData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);

  // Next Project Parallax
  const nextTargetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: nextScroll } = useScroll({
    target: nextTargetRef,
    offset: ["start end", "end end"]
  });
  const nextY = useTransform(nextScroll, [0, 1], ["-30%", "0%"]);
  const nextScale = useTransform(nextScroll, [0, 1], [1.2, 1]);

  return (
    <main ref={containerRef} className="bg-[#f0ebe3] text-[#111] min-h-screen selection:bg-[#00ffff] selection:text-[#111] relative">
      <Navbar onMenuToggle={() => {}} />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#00ffff] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-[#111]">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111]/20 to-[#111]/90" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end p-[5vw] z-10 text-white">
          <div className="max-w-[1600px] w-full mx-auto">
            <h1 className="text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tighter font-medium uppercase mb-8">
              <SplitText text={project.title} />
            </h1>
            
            <div className="flex flex-wrap gap-3 overflow-hidden">
              {project.tags.map((tag, i) => (
                <motion.span 
                  key={tag}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 + (i * 0.1) }}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-[#00ffff] hover:text-[#00ffff] transition-colors rounded-full px-5 py-2.5 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Script id="breadcrumb-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com") + "/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Work",
              item: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com") + "/work",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: project.title,
              item: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com") + `/work/${project.slug}`,
            },
          ],
        })}
      </Script>

      {/* --- OVERVIEW DETAILS (Asymmetrical) --- */}
      <section className="py-[180px] px-[5vw] relative overflow-hidden">
        {/* Background Text Accent */}
        <div className="absolute top-[10%] left-[-5%] text-[20vw] font-bold text-[#111]/2 select-none pointer-events-none uppercase leading-none">
          Overview
        </div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Metadata Sidebar (Floating) */}
          <div className="lg:col-span-3 lg:sticky lg:top-[150px] space-y-16">
            <div className="space-y-12">
              <FadeUp delay={0.1}>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#111]/40 mb-3 group-hover:text-[#00ffff] transition-colors">Client</p>
                  <p className="text-2xl font-medium leading-tight">{project.client}</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#111]/40 mb-3 group-hover:text-[#00ffff] transition-colors">Role</p>
                  <p className="text-2xl font-medium leading-tight">{project.role}</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#111]/40 mb-3 group-hover:text-[#00ffff] transition-colors">Timeline</p>
                  <p className="text-2xl font-medium leading-tight">{project.timeline}</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#111]/40 mb-3 group-hover:text-[#00ffff] transition-colors">Category</p>
                  <p className="text-2xl font-medium leading-tight">{project.category}</p>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Main Description (Editorial) */}
          <div className="lg:col-span-8 lg:col-start-5 mt-8 lg:mt-0">
            <FadeUp delay={0.2}>
              <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.15] font-light mb-12 tracking-tight">
                {project.overview}
              </h2>
            </FadeUp>
            
            {project.liveUrl && (
              <FadeUp delay={0.4}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 bg-[#111] text-white rounded-full px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:pr-14"
                >
                  <span className="relative z-10">Launch Project</span>
                  <div className="relative z-10 w-5 h-5 flex items-center justify-center overflow-hidden">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-[#00ffff] transform scale-x-0 origin-right transition-transform duration-700 group-hover:scale-x-100" />
                  <style jsx>{`
                    .group:hover { color: #111; }
                  `}</style>
                </a>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* --- IMMERSIVE MEDIA (Dual Parallax) --- */}
      {project.detailImages[0] && (
        <section className="w-full px-[5vw] mb-[180px]">
          <FadeUp>
            <div className="relative w-full aspect-video md:aspect-21/9 rounded-4xl overflow-hidden shadow-2xl group">
              <motion.div 
                className="absolute inset-[-10%] w-[120%] h-[120%]"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image 
                  src={project.detailImages[0]} 
                  alt="Project Detail" 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
                />
              </motion.div>
              <div className="absolute inset-0 border border-white/10 rounded-4xl pointer-events-none" />
            </div>
          </FadeUp>
        </section>
      )}

      {/* --- CASE STUDY (Dark Mode) --- */}
      <section className="bg-[#111] text-[#f0ebe3] py-[220px] px-[5vw] rounded-t-[4rem] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
          <div className="space-y-12">
            <FadeUp>
              <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ffff] animate-pulse"></span>
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-white/60">Challenge</span>
              </div>
              <p className="text-2xl md:text-3xl leading-[1.4] font-light text-white/90">
                {project.challenge}
              </p>
            </FadeUp>
          </div>
          
          <div className="space-y-12 lg:mt-48">
            <FadeUp delay={0.2}>
              <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ffff] animate-pulse"></span>
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-white/60">Solution</span>
              </div>
              <p className="text-2xl md:text-3xl leading-[1.4] font-light text-white/90">
                {project.solution}
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Impact Quote */}
        <div className="max-w-[1400px] mx-auto mt-[180px] relative z-10">
          <FadeUp>
            <div className="h-px w-full bg-linear-to-r from-[#00ffff]/50 to-transparent mb-16" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <span className="uppercase tracking-[0.4em] text-[10px] font-black text-white/30">Transformation</span>
              </div>
              <div className="lg:col-span-9">
                <h4 className="text-[clamp(1.8rem,6vw,5rem)] leading-none font-medium text-[#00ffff] italic flex flex-col uppercase">
                   <span className="mb-4">"{project.impact.split(" and ")[0]}"</span>
                   {project.impact.includes("and") && (
                     <span className="text-white/40 text-[0.5em] tracking-tighter not-italic font-light">
                       & {project.impact.split(" and ")[1]}
                     </span>
                   )}
                </h4>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full border border-white/3 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-[#00ffff]/2 blur-[100px] pointer-events-none" />
      </section>

      {/* --- NEXT PROJECT (Cinematic) --- */}
      {project.nextProjectSlug && project.nextProjectTitle && (
        <section ref={nextTargetRef} className="relative h-screen w-full bg-[#020202] overflow-hidden flex items-center justify-center group">
          <motion.div 
            style={{ y: nextY, scale: nextScale }} 
            className="absolute inset-0 opacity-60 transition-opacity duration-1000 group-hover:opacity-80"
          >
             <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black z-10" />
             <div className="w-full h-full bg-[#111] bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-[2s]" />
          </motion.div>
          
          <Link href={`/work/${project.nextProjectSlug}`} className="relative z-20 flex flex-col items-center max-w-[90vw]">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-[10px] uppercase tracking-[0.6em] text-white/40 mb-12 transition-all group-hover:tracking-[1em] group-hover:text-[#00ffff]"
             >
               Next Masterpiece
             </motion.span>
             <div className="overflow-hidden py-4 text-center">
               <h2 className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] font-medium text-white transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] group-hover:scale-[1.05] uppercase italic">
                 {project.nextProjectTitle}
               </h2>
             </div>
             <div className="mt-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-[#00ffff] group-hover:border-[#00ffff]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white group-hover:text-[#111] group-hover:rotate-45 transition-all">
                   <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
          </Link>
        </section>
      )}

      <Footer />
    </main>
  );
}
