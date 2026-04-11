"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { name: "WORK", href: "#work" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Background opacity animation based on scroll
  const navBg = useTransform(scrollY, [0, 50], ["rgba(0,0,0,0)", "rgba(18, 18, 18, 0.8)"]);
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      style={{ 
        backgroundColor: navBg as any,
        backdropFilter: navBlur as any
      }}
      className={`fixed top-0 left-0 w-full z-50 px-8 lg:px-16 transition-all duration-300 ${
        isScrolled ? "py-4 border-b border-white/5" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Branding */}
        <div className="flex-1 flex justify-start">
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold text-white tracking-widest hover:text-blue-400 transition-colors"
          >
            AG
          </button>
        </div>

        {/* Center: LinkedIn (Hidden on mobile or very small screens) */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <a 
            href="https://www.linkedin.com/in/aaradhya-gole-csm%C2%AE-80aa84245/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase whitespace-nowrap"
          >
            linkedin.com/in/aaradhya-gole-csm®-80aa84245/
          </a>
        </div>

        {/* Right: Navigation */}
        <div className="flex-1 flex justify-end items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold tracking-[0.3em] text-white/60 hover:text-white hover:text-blue-400 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
