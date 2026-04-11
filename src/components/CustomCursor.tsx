"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for the mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for smooth "delayed" follow effect
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
    };
    
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the width of the cursor (approx 16px center)
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);

      // Detect if hover over interactive elements
      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest('a') || 
        !!target.closest('button') || 
        target.tagName.toLowerCase() === 'button'
      );
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        pointerEvents: "none",
      }}
      className="fixed top-0 left-0 w-8 h-8 z-[9999] pointer-events-none"
    >
      {/* Intense Center Core */}
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(96, 165, 250, 0.9)" : "rgba(96, 165, 250, 0.4)",
        }}
        className="absolute inset-0 rounded-full bg-blue-400/40 border border-blue-400/20 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
      />

      {/* Large Soft Outer Glow */}
      <motion.div
        animate={{
          scale: isHovering ? 2.5 : 1.8,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        className="absolute inset-[-20px] rounded-full bg-blue-500/10 blur-xl px-12 py-12"
      />
    </motion.div>
  );
}
