"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

const FRAME_COUNT = 120;

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load all images cleanly
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const formattedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${formattedIndex}_delay-0.066s.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setLoaded(true);
        }
      }

      loadedImages.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const currentIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawFrame = useCallback((index: number) => {
    if (!loaded || images.length === 0) return;
    
    const frameIndex = Math.min(Math.max(Math.floor(index), 0), FRAME_COUNT - 1);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameIndex];
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    // Ensure CSS size matches logical screen size
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.scale(dpr, dpr);

    const hRatio = window.innerWidth / img.width;
    const vRatio = window.innerHeight / img.height;
    // Scale by 1.08 to effectively crop 4% off each edge, erasing watermark
    const ratio = Math.max(hRatio, vRatio) * 1.08;
    const centerShift_x = (window.innerWidth - img.width * ratio) / 2;
    const centerShift_y = (window.innerHeight - img.height * ratio) / 2;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  }, [images, loaded]);

  useMotionValueEvent(currentIndex, "change", (latestVal) => {
    drawFrame(latestVal);
  });

  // Handle re-draw on resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentIndex.get());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, currentIndex]);

  // Initial draw
  useEffect(() => {
    if (loaded && images.length > 0) {
      drawFrame(currentIndex.get());
    }
  }, [loaded, images, drawFrame, currentIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        {children}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-4 border-t-white border-white/20 rounded-full animate-spin" />
              <p className="text-white/80 font-medium tracking-wide">Loading Experience...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
