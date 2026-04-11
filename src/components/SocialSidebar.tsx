"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SOCIALS = [
  { 
    name: "GitHub", 
    icon: FaGithub, 
    href: "https://github.com", // Placeholder
  },
  { 
    name: "LinkedIn", 
    icon: FaLinkedin, 
    href: "https://www.linkedin.com/in/aaradhya-gole-csm%C2%AE-80aa84245/",
  },
  { 
    name: "Email", 
    icon: SiGmail, 
    href: "mailto:aaradhyagole@gmail.com",
  },
  { 
    name: "Instagram", 
    icon: FaInstagram, 
    href: "https://www.instagram.com/aaradhyagole1411",
  },
];

export default function SocialSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-12 left-8 z-[100] hidden md:block"
    >
      <div className="flex flex-col items-center gap-6 py-4">
        {SOCIALS.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ color: "rgba(255, 255, 255, 0.5)" }}
              whileHover={{ scale: 1.2, color: "#60a5fa" }} // blue-400
              className="transition-colors duration-300"
              title={social.name}
            >
              <Icon size={22} />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
