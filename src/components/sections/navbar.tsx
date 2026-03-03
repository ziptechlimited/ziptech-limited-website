"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onMenuToggle?: () => void;
}

const Navbar = ({ onMenuToggle }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-center py-6 pointer-events-none mix-blend-difference text-white"
      data-theme="dark"
    >
      <div 
        className={`flex w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'max-w-[280px] md:max-w-[320px] justify-center gap-2 md:gap-3' : 'px-[5vw] justify-between'
        }`}
      >
        {/* Logo Container */}
        <motion.a 
          layout
          href="/" 
          aria-label="Home"
          className={`pointer-events-auto relative flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled 
              ? 'h-[46px] px-5 md:px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20' 
              : 'h-[53px] px-4 md:px-8 bg-transparent'
          }`}
          style={isScrolled ? { boxShadow: '0 4px 30px rgba(0,0,0,0.1)' } : {}}
        >
          <AnimatePresence mode="popLayout">
            {isScrolled ? (
              <motion.span 
                key="text-scrolled"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white text-[1rem] md:text-[1.1rem] font-medium tracking-tight whitespace-nowrap flex items-start"
              >
                Ziptech Limited<span className="text-[0.6rem] ml-[2px] mt-[2px] text-white/50">™</span>
              </motion.span>
            ) : (
              <motion.span 
                key="text-unscrolled"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="text-white text-[1.1rem] md:text-[1.25rem] font-semibold tracking-tight whitespace-nowrap flex items-start"
              >
                Ziptech Limited<span className="text-[0.7rem] ml-[2px] mt-[2px] text-white/50">™</span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>

        {/* Navigation Links Container */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto relative items-center h-[53px] bg-transparent px-10 transition-all duration-300 hidden md:flex"
            >
              <div className="flex gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group relative overflow-hidden h-6 flex flex-col justify-start"
                    aria-label={link.name}
                  >
                    <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                      <span className="block text-[0.875rem] font-medium tracking-wider uppercase leading-6 text-white whitespace-nowrap">
                        {link.name}
                      </span>
                      <span className="block text-[0.875rem] font-medium tracking-wider uppercase leading-6 text-white whitespace-nowrap">
                        {link.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Toggle Container */}
        <motion.button 
          layout
          onClick={onMenuToggle}
          className={`group pointer-events-auto relative flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled 
              ? 'h-[46px] w-[54px] md:w-[60px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20' 
              : 'h-[53px] w-[64px] md:w-[84px] bg-transparent'
          }`}
          style={isScrolled ? { boxShadow: '0 4px 30px rgba(0,0,0,0.1)' } : {}}
          aria-label="Open Menu"
        >
          <AnimatePresence mode="popLayout">
            {isScrolled ? (
              <motion.div 
                key="dots-horizontal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1.5"
              >
                <span className="w-[4px] h-[4px] bg-white rounded-full transition-all duration-300 group-hover:scale-125" />
                <span className="w-[4px] h-[4px] bg-white rounded-full transition-all duration-300 group-hover:scale-125 delay-75" />
                <span className="w-[4px] h-[4px] bg-white rounded-full transition-all duration-300 group-hover:scale-125 delay-150" />
              </motion.div>
            ) : (
              <motion.div 
                key="dots-grid"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 gap-1.5 p-1 relative w-[24px]"
              >
                {[...Array(9)].map((_, i) => (
                  <span 
                    key={i} 
                    className="w-[3px] h-[3px] bg-white rounded-full transition-all duration-300 group-hover:scale-125"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <style jsx>{`
        .line-normal {
          display: block;
        }
        .line-hover {
          display: block;
        }
        .split-hover:hover .line-normal {
          transform: translateY(-100%);
        }
        .split-hover:hover .line-hover {
          transform: translateY(-100%);
        }
        .split-hover .line {
          transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;