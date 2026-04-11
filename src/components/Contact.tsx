"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Instagram, Linkedin } from "lucide-react";

export default function Contact() {


  return (
    <section id="contact" className="relative w-full bg-[#121212] pt-24 pb-12 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight uppercase"
        >
          CONTACT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-12">
          {/* Column 1: Connect & Education */}
          <div className="md:col-span-5 space-y-12">
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">Connect</p>
              <a 
                href="https://www.linkedin.com/in/aaradhya-gole-csm%C2%AE-80aa84245/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-blue-400 transition-colors text-lg font-light"
              >
                LinkedIn — Aaradhya Gole
              </a>
            </div>

            <div className="space-y-8">
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">Education</p>
              <div className="space-y-6">
                <div>
                  <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                    MS IN IMSE - SUPPLY CHAIN & ANALYTICS CONCENTRATION
                  </p>
                  <p className="text-white/50 text-xs mt-1">NC STATE UNIVERSITY — 2024 - PRESENT</p>
                </div>
                <div>
                  <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                    BS IN MECHANICAL ENGINEERING - ROBOTICS AND AUTOMATION CONCENTRATION
                  </p>
                  <p className="text-white/50 text-xs mt-1">MIT WPU, INDIA — 2021 - 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Social Links */}
          <div className="md:col-span-3">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-6">Social</p>
            <div className="flex flex-col space-y-2">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/in/aaradhya-gole-csm%C2%AE-80aa84245/", icon: Linkedin },
                { name: "Gmail", href: "mailto:aaradhyagole@gmail.com", icon: Mail },
                { name: "Instagram", href: "https://instagram.com/aaradhyagole", icon: Instagram },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 border-b border-white/5 text-lg text-white/80 hover:text-blue-400 transition-all"
                >
                  <span className="font-light">{item.name}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Credits */}
          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end text-left md:text-right space-y-12 md:space-y-0">
            <div className="space-y-1">
              <p className="text-white/60 text-sm md:text-base font-light">Designed and Developed</p>
              <p className="text-white/60 text-sm md:text-base font-light">
                by <span className="text-blue-400 font-medium">Aaradhya Gole</span>
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <span className="text-xl">©</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
