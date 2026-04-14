"use client";

import { useState } from "react";
import { motion, AnimatePresence, Transition, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    id: 1,
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuedBy: "Microsoft",
    description: "Validates expertise in designing and building scalable data models, cleaning and transforming data, and enabling advanced analytics through Power BI.",
    tags: ["Power BI", "Data Modeling", "DAX", "Data Visualization", "Microsoft"],
    image: "/sequence/power-bi-cert.png",
    link: "https://drive.google.com/file/d/1XyefPnOU0eFtV76QKqBmIAkoTEK_FJyV/view?usp=sharing"
  },
  {
    id: 2,
    name: "Lean Six Sigma Green Belt",
    issuedBy: "AIGPE",
    description: "Demonstrates proficiency in process improvement methodologies, waste elimination, and data-driven decision making using DMAIC frameworks.",
    tags: ["DMAIC", "Process Improvement", "Lean Six Sigma", "Waste Elimination"],
    status: "in-progress"
  },
  {
    id: 3,
    name: "Certified ScrumMaster®",
    issuedBy: "Scrum Alliance",
    description: "Certifies ability to lead agile teams, facilitate sprints, remove blockers, and drive cross-functional collaboration in iterative project environments.",
    tags: ["Agile", "Scrum", "Sprint Planning", "Cross-functional", "Scrum Alliance"],
    image: "/sequence/scrum-cert.png",
    link: "https://drive.google.com/file/d/16W_XfpOGXwaeeMRws7PBu3QesVRWMH5a/view?usp=sharing"
  }
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  return (
    <section className="relative w-full bg-[#121212] py-24 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight uppercase"
        >
          CERTIFICATIONS
        </motion.h3>

        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-[800px] min-h-[400px] flex items-center justify-center">
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-20">
              <button 
                onClick={() => paginate(-1)}
                className="p-3 rounded-full bg-white/5 border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 transition-all group pointer-events-auto"
              >
                <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-20">
              <button 
                onClick={() => paginate(1)}                className="p-3 rounded-full bg-white/5 border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 transition-all group pointer-events-auto"
              >
                <ChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Certification Card Display */}
            <div className="w-full relative overflow-visible flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  } as Transition}
                  className="w-full max-w-[650px] min-h-[580px] rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col overflow-hidden shadow-2xl"
                >
                  {/* Poster Image or Placeholder */}
                  <div className="w-full aspect-[16/9] overflow-hidden border-b border-white/10 flex items-center justify-center bg-blue-500/5 relative">
                    {CERTIFICATIONS[currentIndex].image ? (
                      <img 
                        src={CERTIFICATIONS[currentIndex].image} 
                        alt={CERTIFICATIONS[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                       <Award className="w-16 h-16 text-blue-400/20" />
                    )}

                    {/* In Progress Badge */}
                    {CERTIFICATIONS[currentIndex].status === "in-progress" && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
                          <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase">In Progress</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <div className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 opacity-70">
                        {CERTIFICATIONS[currentIndex].issuedBy}
                      </div>

                      <h4 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight tracking-tight">
                        {CERTIFICATIONS[currentIndex].name}
                      </h4>
                      
                      <p className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-6">
                        {CERTIFICATIONS[currentIndex].description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {CERTIFICATIONS[currentIndex].tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400/60 text-[10px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {CERTIFICATIONS[currentIndex].link && (
                        <a 
                          href={CERTIFICATIONS[currentIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-[#121212] transition-all duration-300 group inline-flex"
                        >
                          <span className="text-sm font-semibold">Visit</span>
                          <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex gap-4 mt-12">
            {CERTIFICATIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === currentIndex ? "w-8 bg-blue-400" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
