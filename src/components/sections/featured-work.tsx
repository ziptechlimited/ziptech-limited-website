"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData as projects } from "@/lib/project-data";

const FULL_H = "clamp(480px, 65vh, 720px)";
const REST_H = "72%";

export default function FeaturedWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  // Magnetic button state
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const tick = useCallback(() => {
    currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.1);
    currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.1);
    setCursorPos({ x: currentRef.current.x, y: currentRef.current.y });
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  const handleMouseMove = (e: React.MouseEvent) => {
    targetRef.current = { x: e.clientX, y: e.clientY };

    // Magnetic pull on button
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const bx = rect.left + rect.width / 2;
      const by = rect.top + rect.height / 2;
      const dist = Math.sqrt((e.clientX - bx) ** 2 + (e.clientY - by) ** 2);
      const radius = 100;
      if (dist < radius) {
        const pull = (1 - dist / radius) * 0.45;
        setBtnOffset({ x: (e.clientX - bx) * pull, y: (e.clientY - by) * pull });
      } else {
        setBtnOffset({ x: 0, y: 0 });
      }
    }
  };

  const handleMouseLeaveSection = () => {
    setHoveredIndex(null);
    setCursorVisible(false);
    setBtnOffset({ x: 0, y: 0 });
  };

  return (
    <>
      {/* Custom cursor badge */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          transform: `translate(${cursorPos.x + 20}px, ${cursorPos.y - 20}px)`,
          opacity: cursorVisible && hoveredIndex !== null ? 1 : 0,
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 3,
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 13L13 3M13 3H6M13 3V10"
              stroke="#111"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: "8.5px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#111",
              lineHeight: 1,
            }}
          >
            View Project
          </span>
        </div>
      </div>

      <section style={{ background: "#f0ebe3", padding: "80px 0" }}>
        <div
          onMouseLeave={handleMouseLeaveSection}
          onMouseMove={handleMouseMove}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            paddingLeft: "clamp(20px, 4vw, 60px)",
            paddingRight: "clamp(20px, 4vw, 60px)",
            height: FULL_H,
          }}
        >
          {/* ── Info card ── */}
          <div
            style={{
              flexShrink: 0,
              flexGrow: 0,
              width:
                hoveredIndex !== null
                  ? "clamp(200px, 18vw, 280px)"
                  : "clamp(260px, 24vw, 360px)",
              height: FULL_H,
              transition: "width 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
              background: "#111",
              borderRadius: "16px",
              padding: "clamp(24px, 3vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: "clamp(22px, 2.6vw, 42px)",
                  fontWeight: 500,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: "16px",
                }}
              >
                Featured Work
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "clamp(11px, 0.9vw, 14px)",
                  lineHeight: 1.65,
                }}
              >
                Design without compromise. Explore our blend of digital product
                design, website design, and branding.
              </p>
            </div>

            {/* Magnetic "All Work" button */}
            <Link
              ref={btnRef}
              href="/work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#fff",
                color: "#111",
                borderRadius: "999px",
                padding: "10px 22px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.02em",
                alignSelf: "flex-start",
                transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
                transition: btnOffset.x === 0 && btnOffset.y === 0
                  ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
                  : "transform 0.1s linear",
                willChange: "transform",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#111",
                  display: "inline-block",
                }}
              />
              All Work
            </Link>
          </div>

          {/* ── Project cards ── */}
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const anyHovered = hoveredIndex !== null;

            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setCursorVisible(true);
                }}
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  flexGrow: isHovered ? 1.8 : anyHovered ? 0.7 : 1,
                  flexShrink: 1,
                  flexBasis: 0,
                  height: isHovered ? FULL_H : REST_H,
                    transition:
                      "flex-grow 0.75s cubic-bezier(0.76, 0, 0.24, 1), height 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
                    textDecoration: "none",
                    display: "block",
                  }}

              >
                {/* Image */}
                <div style={{ position: "absolute", inset: 0 }}>
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: "cover",
                      transform: isHovered ? "scale(1.04)" : "scale(1.12)",
                      transition: "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                    sizes="(max-width: 768px) 90vw, 30vw"
                    priority={index === 0}
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isHovered
                      ? "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.48) 0%, transparent 65%)",
                    transition: "background 0.6s ease",
                  }}
                />

                {/* Bottom info */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "clamp(14px, 2vw, 26px)",
                    transform: isHovered ? "translateY(0)" : "translateY(8px)",
                    opacity: isHovered ? 1 : 0.75,
                    transition:
                      "transform 0.6s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.5s ease",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "10px" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(255,255,255,0.35)",
                          borderRadius: "999px",
                          padding: "3px 9px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "clamp(13px, 1.1vw, 16px)",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "clamp(11px, 0.8vw, 13px)",
                      margin: "4px 0 0",
                      lineHeight: 1.45,
                      opacity: isHovered ? 1 : 0,
                      transition: "opacity 0.4s ease 0.1s",
                    }}
                  >
                    {project.category}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
