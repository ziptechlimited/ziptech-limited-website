"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

const MagneticLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.4, y: y * 0.4 });
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
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {children}
      </a>
    </motion.div>
  );
};

export default function ContactClient() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="bg-[#111] text-[#f0ebe3] min-h-screen selection:bg-[#00ffff] selection:text-[#111]">
      <Navbar onMenuToggle={() => {}} />

      {/* --- HERO SECTION --- */}
      <section className="pt-[25vh] pb-[10vh] px-[5vw]">
        <div className="max-w-[1600px] mx-auto">
          <FadeUp>
            <h1 className="text-[clamp(4rem,15vw,13rem)] leading-[0.8] font-medium uppercase tracking-tighter mb-12 italic">
              Let's build <br /> <span className="text-[#00ffff] not-italic">Something.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="px-[5vw] pb-[20vh]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-24">
            <FadeUp delay={0.1}>
              <div className="space-y-12">
                <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-4 group-hover:text-[#00ffff] transition-colors">Business Inquiry</p>
                  <p className="text-2xl md:text-3xl font-light underline decoration-[#00ffff]/30 underline-offset-8 transition-all hover:decoration-[#00ffff]">hello@antigravity.studio</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-4 group-hover:text-[#00ffff] transition-colors">General Support</p>
                  <p className="text-2xl md:text-3xl font-light underline decoration-[#00ffff]/30 underline-offset-8 transition-all hover:decoration-[#00ffff]">+1 800 ANTI GRAV</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="pt-12 border-t border-white/10">
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-8">Follow Us</p>
                <div className="flex flex-wrap gap-6">
                  {["Instagram", "LinkedIn", "Twitter", "Behance"].map(social => (
                    <MagneticLink key={social} href="#">
                      <span className="text-xs font-bold tracking-widest uppercase hover:text-[#00ffff] transition-colors border border-white/10 px-6 py-3 rounded-full hover:border-[#00ffff]">
                        {social}
                      </span>
                    </MagneticLink>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md">
                 <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-6 italic">Current Location</p>
                 <h4 className="text-xl leading-relaxed mb-6">42 Nebula Way, Suite 101, <br />San Francisco, CA 94103</h4>
                 <div className="flex items-center gap-2 text-[#00ffff] text-sm font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse"></span>
                    Open for partnerships
                 </div>
              </div>
            </FadeUp>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="relative group">
                  <input 
                    type="text" 
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b-2 border-white/10 py-8 text-3xl md:text-5xl font-light focus:outline-none focus:border-[#00ffff] transition-colors peer" 
                  />
                  <label className="absolute top-8 left-0 text-3xl md:text-5xl font-light text-white/20 pointer-events-none transition-all duration-500 peer-focus:-top-8 peer-focus:text-xs peer-focus:font-black peer-focus:tracking-[0.4em] peer-focus:uppercase peer-focus:text-[#00ffff] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:tracking-[0.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#00ffff]">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b-2 border-white/10 py-8 text-3xl md:text-5xl font-light focus:outline-none focus:border-[#00ffff] transition-colors peer" 
                  />
                  <label className="absolute top-8 left-0 text-3xl md:text-5xl font-light text-white/20 pointer-events-none transition-all duration-500 peer-focus:-top-8 peer-focus:text-xs peer-focus:font-black peer-focus:tracking-[0.4em] peer-focus:uppercase peer-focus:text-[#00ffff] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:tracking-[0.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#00ffff]">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <textarea 
                    required
                    placeholder=" "
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white/10 py-8 text-3xl md:text-5xl font-light focus:outline-none focus:border-[#00ffff] transition-colors peer resize-none" 
                  />
                  <label className="absolute top-8 left-0 text-3xl md:text-5xl font-light text-white/20 pointer-events-none transition-all duration-500 peer-focus:-top-8 peer-focus:text-xs peer-focus:font-black peer-focus:tracking-[0.4em] peer-focus:uppercase peer-focus:text-[#00ffff] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:tracking-[0.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#00ffff]">
                    Tell us about your project
                  </label>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    className="group relative flex items-center justify-between w-full md:w-auto md:min-w-[300px] border-2 border-white/20 rounded-full px-12 py-8 transition-all hover:border-[#00ffff] overflow-hidden"
                  >
                    <span className="relative z-10 text-xs font-black tracking-[0.3em] uppercase transition-colors group-hover:text-[#111]">
                      {isSubmitted ? "Sending Mastery..." : "Initiate Launch"}
                    </span>
                    <div className="relative z-10 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:rotate-45 group-hover:bg-white/10">
                       <FiArrowUpRight size={20} className="text-[#00ffff]" />
                    </div>
                    <div className="absolute inset-0 bg-[#00ffff] scale-x-0 origin-right transition-transform duration-700 group-hover:scale-x-100" />
                  </button>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
