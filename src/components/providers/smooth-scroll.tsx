"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.05, // Lower value = slower, smoother scroll (default is ~0.1)
        duration: 1.5, // Increase duration for a more luxurious feel
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
