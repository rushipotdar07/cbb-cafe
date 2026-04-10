"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import Link from "next/link";

const FRAME_COUNT = 120;

export default function CoffeeExperience() {
  const [loadedPercentage, setLoadedPercentage] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${i}.jpg`;
      img.onload = () => {
        loadedCount++;
        setLoadedPercentage(Math.round((loadedCount / FRAME_COUNT) * 100));
        
        // Ensure array stays in correct order by assigning via index
        loadedImages[i] = img;
        
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      // Fallback order management in case some frames fail or load later
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setImages(loadedImages);
      };
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (images.length !== FRAME_COUNT) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set initial canvas size based on first frame
    const firstImg = images[0];
    if (firstImg && firstImg.width > 0) {
      canvas.width = firstImg.width;
      canvas.height = firstImg.height;
    }

    let lastRenderedFrame = -1;
    let rafId: number | null = null;

    const unsubscribe = frameIndex.on("change", (latestVal) => {
      const currentFrame = Math.round(latestVal);
      
      // Only draw if the actual integer frame has changed
      if (currentFrame !== lastRenderedFrame) {
        lastRenderedFrame = currentFrame;
        
        if (rafId) cancelAnimationFrame(rafId);
        
        rafId = requestAnimationFrame(() => {
          const img = images[currentFrame];
          if (img && img.width > 0) {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             ctx.drawImage(img, 0, 0);
          }
        });
      }
    });

    // Draw frame 0 immediately once ready
    if (firstImg && firstImg.width > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(firstImg, 0, 0);
    }

    return () => unsubscribe();
  }, [images, frameIndex]);

  // Scrollytelling Beat Opacity Mappings
  const beatAOpacity = useTransform(smoothProgress, [0, 0.05, 0.45, 0.50], [0, 1, 1, 0]);
  const beatAY = useTransform(smoothProgress, [0, 0.05, 0.45, 0.50], [20, 0, 0, -20]);

  const beatBOpacity = useTransform(smoothProgress, [0.25, 0.30, 0.45, 0.50], [0, 1, 1, 0]);
  const beatBY = useTransform(smoothProgress, [0.25, 0.30, 0.45, 0.50], [20, 0, 0, -20]);

  const beatCOpacity = useTransform(smoothProgress, [0.50, 0.55, 0.75, 0.80], [0, 1, 1, 0]);
  const beatCY = useTransform(smoothProgress, [0.50, 0.55, 0.75, 0.80], [20, 0, 0, -20]);

  const beatDOpacity = useTransform(smoothProgress, [0.80, 0.85, 1, 1], [0, 1, 1, 1]);
  const beatDY = useTransform(smoothProgress, [0.80, 0.85, 1, 1], [20, 0, 0, 0]);

  const isLoaded = images.length === FRAME_COUNT;

  return (
    <div 
      ref={containerRef} 
      className={`relative bg-black transition-all ${isLoaded ? "h-[400vh]" : "h-screen overflow-hidden"}`}
      style={{ position: "relative" }}
    >
      {!isLoaded ? (
        <div className="h-full w-full flex flex-col items-center justify-center text-white font-bold tracking-tighter">
          <div className="text-zinc-400 text-sm mb-4 uppercase tracking-widest">Crafting Perfection</div>
          <div className="text-4xl">{loadedPercentage}%</div>
          <div className="w-64 h-1 bg-zinc-800 mt-6 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-out" 
              style={{ width: `${loadedPercentage}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Canvas Background Sequence */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
          />

          {/* Narrative Overlay */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pointer-events-none">
            
            {/* Beat A */}
            <motion.div 
              style={{ opacity: beatAOpacity, y: beatAY }}
              className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-24 max-w-lg"
            >
              <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight drop-shadow-lg">
                CAFE BREW BLISS
              </h1>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 text-2xl md:text-3xl font-bold tracking-tight drop-shadow-lg mt-2">
                Your Daily Hug in a Mug.
              </p>
            </motion.div>

            {/* Beat B */}
            <motion.div 
              style={{ opacity: beatBOpacity, y: beatBY }}
              className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 lg:right-24 max-w-lg text-right flex flex-col items-end"
            >
              <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-tight drop-shadow-lg">
                THE IMPACT
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight drop-shadow-md max-w-sm">
                Gravity-defying ice meets artisan-roasted brew.
              </p>
            </motion.div>

            {/* Beat C */}
            <motion.div 
              style={{ opacity: beatCOpacity, y: beatCY }}
              className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-24 max-w-xl"
            >
              <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight drop-shadow-lg">
                UNTAMED FLAVOR
              </h2>
              <p className="text-zinc-400 text-xl md:text-2xl font-medium tracking-tight drop-shadow-md">
                Explosive fluid dynamics captured in high definition.
              </p>
            </motion.div>

            {/* Beat D */}
            <motion.div 
              style={{ opacity: beatDOpacity, y: beatDY }}
              className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 lg:right-24 max-w-md flex flex-col items-start md:items-end md:text-right"
            >
              <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight drop-shadow-lg">
                REFRESHMENT REIMAGINED.
              </h2>
              <Link href="/locations" className="pointer-events-auto bg-white inline-block text-black px-8 py-4 rounded-full font-bold tracking-tight hover:bg-zinc-200 transition-colors shadow-xl text-center">
                Find a Location
              </Link>
            </motion.div>

          </div>
        </div>
      )}
    </div>
  );
}
