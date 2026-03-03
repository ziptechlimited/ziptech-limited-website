"use client";

import React, { useState } from 'react';
import ContactModal from './contact-modal';

const CtaSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#020202] text-[#FBFBF4] pt-[100px] px-[5vw] font-sans selection:bg-[#00ffff] selection:text-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-20 border-b border-white/10">
          <div className="max-w-2xl mb-12 md:mb-0">
            <h2 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-[-0.04em] font-medium mb-12 text-balance">
              Tell us about <br /> your project.
            </h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-4 py-4 px-8 border border-white/15 rounded-full overflow-hidden transition-colors hover:border-white"
            >
              <span className="relative z-10 text-sm font-medium uppercase tracking-wider">Let&apos;s collaborate.</span>
              <div className="absolute inset-0 bg-[#00ffff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full z-0"></div>
              <div className="w-2 h-2 bg-[#00ffff] group-hover:bg-black rounded-full transition-colors duration-500 ease-in-out relative z-10"></div>
            </button>
          </div>
          
          <div className="w-full md:w-[400px] flex md:justify-end">
             <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center -rotate-45 text-white/50 group hover:border-[#00ffff] hover:text-[#00ffff] transition-colors duration-500 cursor-pointer" onClick={() => setIsModalOpen(true)}>
               <span className="text-2xl font-light group-hover:scale-125 transition-transform duration-500">→</span>
             </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CtaSection;
