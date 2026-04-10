"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Obinna David Okeke",
    role: "Chief Executive Officer",
    bio: "A seasoned software engineer with 5+ years of experience leading technical teams and driving product vision.",
    image: "/David.jpeg",
    socials: [
      {
        name: "LinkedIn",
        icon: <FaLinkedinIn className="w-4 h-4" />,
        href: "https://www.linkedin.com/in/obinna-okeke-8ba588377/",
      },
      {
        name: "Twitter",
        icon: <FaTwitter className="w-4 h-4" />,
        href: "https://x.com/S0me0ne_u_love",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="w-4 h-4" />,
        href: "https://github.com/o-david",
      },
    ],
  },
  {
    name: "Samuel Swift",
    role: "Chief Technology Officer",
    bio: "An AI engineer with over 4 years of experience specializing in intelligent automated systems.",
    image: "/samuel.JPG",
    socials: [
      {
        name: "LinkedIn",
        icon: <FaLinkedinIn className="w-4 h-4" />,
        href: "https://www.linkedin.com/in/samuel-swift-okeke/",
      },
      {
        name: "Twitter",
        icon: <FaTwitter className="w-4 h-4" />,
        href: "https://twitter.com/SamuelSwiftOkeke",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="w-4 h-4" />,
        href: "https://github.com/SamuelSwiftOkeke",
      },
    ],
  },
  {
    name: "Chigozie Okeke",
    role: "Lead Data Analyst",
    bio: "A data analyst with 5+ years of experience in analyzing and interpreting data to drive business decisions.",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/q_auto/f_auto/v1775751219/Chigozie.jpg", // generic cyber sec image
    socials: [
      {
        name: "LinkedIn",
        icon: <FaLinkedinIn className="w-4 h-4" />,
        href: "https://www.linkedin.com/in/chigozieokeoke/",
      },
      {
        name: "Twitter",
        icon: <FaTwitter className="w-4 h-4" />,
        href: "https://twitter.com/ChigozieOkeke",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="w-4 h-4" />,
        href: "https://github.com/ChigozieOkeke",
      },
    ],
  },
  {
    name: "Hosea Agbo",
    role: "Software Engineer",
    bio: "A software engineer with years of experience in developing and maintaining software applications.",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/q_auto/f_auto/v1775751219/Hosea.jpg", // generic cyber sec image
    socials: [
      {
        name: "LinkedIn",
        icon: <FaLinkedinIn className="w-4 h-4" />,
        href: "https://www.linkedin.com/in/hosea-agbo/",
      },
      {
        name: "Twitter",
        icon: <FaTwitter className="w-4 h-4" />,
        href: "https://twitter.com/HoseaAgbo",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="w-4 h-4" />,
        href: "https://github.com/HoseaAgbo",
      },
    ],
  },
];

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth orbital rotation loop
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      if (hoveredIndex === null) {
        setRotation((prev) => (prev + 0.15) % 360);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredIndex]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95],
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#020202] text-white py-32 md:py-48 overflow-hidden selection:bg-[#00ffff] selection:text-black"
    >
      <motion.div
        style={{ scale: sectionScale }}
        className="max-w-[1440px] mx-auto px-[5vw]"
      >
        {/* Cinematic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 relative z-20">
          <div className="overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30 mb-6 block"
            >
              The Collective
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter"
            >
              United by <br />{" "}
              <span className="italic text-[#00ffff]">The Orbit.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-lg text-white/40 font-light leading-relaxed"
          >
            A triumvirate of design, code, and strategy. We operate as a single
            orbital unit pushing digital boundaries.
          </motion.p>
        </div>

        {/* Orbit Visualization */}
        <div className="relative aspect-square w-full max-w-[800px] mx-auto flex items-center justify-center">
          {/* Center Info Reveal */}
          <div className="absolute inset-0 flex items-center justify-center z-20 p-8 pointer-events-none">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null ? (
                <motion.div
                  key={hoveredIndex}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    filter: "blur(10px)",
                    y: 20,
                  }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    filter: "blur(20px)",
                    y: -20,
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center max-w-sm"
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase tracking-tight mb-2 italic">
                    {teamMembers[hoveredIndex].name}
                  </h3>
                  <p className="text-[#00ffff] font-black tracking-[0.4em] uppercase text-[9px] mb-8">
                    {teamMembers[hoveredIndex].role}
                  </p>
                  <p className="text-white/50 text-base leading-relaxed mb-10 font-light">
                    {teamMembers[hoveredIndex].bio}
                  </p>
                  <div className="flex justify-center gap-6 pointer-events-auto">
                    {teamMembers[hoveredIndex].socials.map((s) => (
                      <a
                        key={s.name}
                        href="#"
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00ffff] hover:text-[#020202] transition-all duration-700 hover:scale-110"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                      transition={{
                        scale: { duration: 4, repeat: Infinity },
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                      className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center"
                    >
                      <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/10">
                        Discovery
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Orbit Core (Static Container, Dynamic Positioning) */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* This ring represents the spinning "orbit" */}
            <div
              className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"
              style={{ transform: `rotate(${rotation}deg)` }}
            />

            {teamMembers.map((member, i) => {
              const baseAngle = (i / teamMembers.length) * 360;
              // We add the global rotation to the card's position angle,
              // but the card itself is NOT rotated.
              const currentAngle = (baseAngle + rotation) * (Math.PI / 180);
              const radiusX = 22; // Radius in 'vw'
              const radiusY = 22;

              return (
                <motion.div
                  key={member.name}
                  className="absolute w-[20vw] md:w-[150px] lg:w-[180px] aspect-square cursor-pointer group"
                  style={{
                    left: "50%",
                    top: "50%",
                    x: `calc(${Number((Math.cos(currentAngle) * radiusX).toFixed(3))}vw - 50%)`,
                    y: `calc(${Number((Math.sin(currentAngle) * radiusY).toFixed(3))}vw - 50%)`,
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    scale: hoveredIndex === i ? 1.15 : 1,
                    opacity:
                      hoveredIndex === null || hoveredIndex === i ? 1 : 0.4,
                    filter:
                      hoveredIndex !== null && hoveredIndex !== i
                        ? "blur(10px)"
                        : "blur(0px)",
                  }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-[#00ffff] group-hover:shadow-[0_0_60px_rgba(0,255,255,0.15)] bg-[#111]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Decorative Background Rings (Static) */}
          <div className="absolute inset-[-5%] rounded-full border border-white/2 pointer-events-none" />
          <div className="absolute inset-[10%] rounded-full border border-white/2 pointer-events-none" />
          <div className="absolute inset-[20%] rounded-full border border-white/1 pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
