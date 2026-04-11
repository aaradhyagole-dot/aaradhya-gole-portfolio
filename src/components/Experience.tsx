"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    id: 5,
    role: "IMSE Department Ambassador",
    company: "NC State University",
    period: "2026 – Present",
    description: "Drive industry outreach for the IMSE program, represent the department at career fairs and employer events, and connect applicant interests with industry outcomes."
  },
  {
    id: 4,
    role: "Supply Chain Co-Op · Sourcing",
    company: "Doosan Bobcat North America",
    period: "Sep – Dec 2025",
    description: "Managed $70K in monthly tariff spend across 200 electrical harness parts and 10+ global suppliers. Ran full RFQ cycles, owned weekly EFI reporting, and operated across SAP ERP, SAP Ariba, Oracle, and Qlik."
  },
  {
    id: 3,
    role: "Category Management Intern",
    company: "Food Lion Corporate",
    period: "May – Aug 2025",
    description: "Built a centralized Power BI dashboard for Fresh category across 1,100+ stores, cutting reporting cycle time by 25%. Supported daily sales, shrink, and supply chain huddles across 7 distribution centers."
  },
  {
    id: 2,
    role: "Business Strategy & Analysis Intern",
    company: "3D Ortho biologic Solutions (Remote)",
    period: "Jan – Apr 2025",
    description: "Mapped NPI requirements and process flows, reducing go-to-market lead time by 20%. Optimized supplier and compliance workflows to improve order accuracy by 15%. Facilitated stakeholder reviews to mitigate early-stage supply chain risk."
  },
  {
    id: 1,
    role: "Process Optimization Intern",
    company: "Asahi India Glass (AIS) - India",
    period: "Jan – Apr 2024",
    description: "Led Agile-based improvement sprints to reduce defect rates by 15%. Implemented semi-automated inspection protocols that cut manual errors by 20% and enhanced quality control. Delivered executive reports to accelerate process improvement timelines."
  }
];

export default function Experience() {
  return (
    <section id="about" className="relative w-full bg-[#121212] pt-16 pb-48 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-24 tracking-tight">
          MY CAREER & EXPERIENCE
        </h3>

        <div className="relative">
          {/* Thin Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-blue-500/20 -translate-x-1/2" />

          <div className="flex flex-col gap-16 md:gap-24">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col md:flex-row items-start justify-between w-full group"
              >
                {/* Left Column: Role & Company */}
                <div className="w-full md:w-[40%] text-left md:text-right md:pr-12 lg:pr-16 mb-2 md:mb-0 mt-1 md:mt-0">
                  <h4 className="text-xl lg:text-2xl font-semibold text-white tracking-tight mb-2">
                    {exp.role}
                  </h4>
                  <div className="text-blue-400 font-medium tracking-wider uppercase text-sm">
                    {exp.company}
                  </div>
                </div>

                {/* Center Column: Period */}
                <div className="w-full md:w-[20%] flex flex-col items-center justify-start relative my-3 md:my-0">
                  <div className="text-white/40 font-bold text-xl md:text-2xl md:leading-none tracking-widest text-left md:text-center w-full bg-[#121212] py-2 z-20">
                    {exp.period}
                  </div>
                  <div className="hidden md:block w-3 h-3 rounded-full bg-[#121212] border-2 border-blue-500/50 z-10 group-hover:scale-150 group-hover:bg-blue-500 transition-all duration-300 mt-2" />
                </div>

                {/* Right Column: Description */}
                <div className="w-full md:w-[40%] text-left md:pl-12 lg:pl-16 mt-2 md:mt-0">
                  <p className="text-white/60 font-light leading-relaxed text-[15px] lg:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
