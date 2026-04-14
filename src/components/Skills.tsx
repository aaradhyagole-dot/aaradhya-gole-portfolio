"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Marquee from "react-fast-marquee";
import { 
  SiSap, 
  SiPython, 
  SiJira, 
  SiPostgresql, 
  SiQlik, 
  SiMicrostrategy,
  SiDatacamp
} from "react-icons/si";

const FUNCTIONS = [
  "Sourcing",
  "Demand Planning",
  "Order Execution",
  "Inventory Management",
  "Fulfillment",
  "Logistics",
  "New Product Introduction (NPI)",
  "Components Assurance"
];

const TOOLS = [
  { name: "Power BI", image: "/logos/PowerBi.png", color: "#F2C811" },
  { name: "SAP ERP", image: "/logos/SAPERP.pNG", color: "#008FD3" },
  { name: "Oracle ERP", image: "/logos/Oracle.png", color: "#FF8C00" },
  { name: "SQL", image: "/logos/SQL.png", color: "#336791" },
  { name: "Python", image: "/logos/python.png", color: "#FFE873" },
  { name: "SAP Ariba", image: "/logos/SAPARIBA.png", color: "#008FD3" },
  { name: "Qlik", image: "/logos/Qlik.png", color: "#458C27" },
  { name: "MicroStrategy", image: "/logos/Microstrategy-Data-Analytics-Visualization-Technique-PNG-thumb.png", color: "#D12127" },
  { name: "Excel", image: "/logos/Excel.png", color: "#217346" },
  { name: "JIRA", image: "/logos/jira.png", color: "#0052CC" },
  { name: "Tableau", image: "/logos/Tableau-Logo-PNG-HD.png", color: "#0064D2" }
];

const SkillPill = ({ name, className = "" }: { name: string; className?: string }) => (
  <div className={`px-6 py-3 rounded-full bg-white/5 border border-blue-500/20 backdrop-blur-md text-white whitespace-nowrap ${className}`}>
    {name}
  </div>
);

const ToolLogo = ({ icon: Icon, image, name, color }: { icon?: React.ElementType; image?: string; name: string; color: string }) => (
  <div className="flex flex-col items-center justify-center gap-4 px-16 group cursor-pointer transition-all duration-500">
    <div className="relative">
      <div 
        className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"
        style={{ backgroundColor: color }}
      />
      <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : Icon ? (
          <Icon 
            className="text-6xl md:text-7xl text-white/30 group-hover:text-white transition-all duration-500" 
          />
        ) : (
          <div className="text-4xl md:text-5xl font-bold text-white/20 group-hover:text-white transition-all duration-500">
            {name.charAt(0)}
          </div>
        )}
      </div>
    </div>
    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors duration-500">
      {name}
    </span>
  </div>
);

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="relative w-full bg-[#121212] pt-12 pb-32 px-8 lg:px-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight uppercase">
          MY SKILL SET
        </motion.h3>

        {/* Part 1: Supply Chain Functions */}
        <motion.div variants={itemVariants} className="mb-24">
          <h4 className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-10">
            Supply Chain Functions
          </h4>
          <div className="flex flex-wrap gap-4">
            {FUNCTIONS.map((skill) => (
              <SkillPill key={skill} name={skill} />
            ))}
          </div>
        </motion.div>

        {/* Part 2: Tools & Technology */}
        <motion.div variants={itemVariants}>
          <h4 className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-12">
            Tools & Technology
          </h4>
          
          <div className="py-20 border-y border-white/5 bg-white/[0.01] backdrop-blur-3xl">
            <Marquee 
              gradient={true} 
              gradientColor="rgb(18, 18, 18)" 
              speed={60} 
              pauseOnHover={true}
            >
              <div className="flex items-center">
                {TOOLS.map((tool, i) => (
                  <ToolLogo key={i} {...tool} />
                ))}
              </div>
            </Marquee>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
