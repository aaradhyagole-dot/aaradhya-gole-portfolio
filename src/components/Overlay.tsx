"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: Keeps full opacity, but scales down by 20% by the time Section 2 appears
  const opacity1 = useTransform(scrollYProgress, [0, 0.9], [1, 1]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);

  // Section 2: Gap from 8% to 15%. Fades in starting at 15%, peaks at 25%, fades out by 40%
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.40], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.40], [100, -100]);

  // Section 3: Fades in around 50%, peaks at 60%, fades out by 75%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <motion.div
        style={{ opacity: opacity1, scale: scale1, originX: 1, originY: 0.5 }}
        className="absolute top-[55%] right-8 md:right-16 lg:right-24 flex items-center -translate-y-1/2"
      >
        <div className="text-right">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl mb-4 whitespace-pre-wrap">
            Aaradhya Gole
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
            Supply chain specialist
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-8 lg:px-16"
      >
        <div className="text-left w-full max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg leading-tight">
            Engineer by training <br className="hidden md:block" /><span className="text-blue-400 drop-shadow-md">Analyst by instinct.</span>
          </h2>
          <p className="text-xl text-white/80 font-light leading-relaxed drop-shadow">
            Supply chain specialist who speaks the language of machines, data, and procurement fluently.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-[55%] left-0 w-full flex justify-start max-w-7xl mx-auto px-8 lg:px-16 -translate-y-1/2"
      >
        <div className="text-left w-full max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            Procurement is <br className="hidden md:block" /><span className="text-blue-400 drop-shadow-md">my language.</span>
          </h2>
          <p className="text-xl text-white/80 font-light leading-relaxed drop-shadow">
            Supply chain strategy, supplier management, and sourcing executed with precision.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
