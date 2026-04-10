"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="bg-zinc-950 w-full py-32 px-6 flex flex-col items-center border-t border-zinc-900 border-b overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-32">

        {/* 1. The Opening (The Vibe) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              The Ritual,<br />Redefined.
            </h2>
            <p className="text-zinc-400 text-lg md:text-2xl font-medium tracking-tight leading-relaxed">
              We believe the best part of the day shouldn't be rushed. It’s that quiet moment when the ice clinks against the glass and the world slows down for a second. Cold Brew Bliss was born from a simple obsession: creating the smoothest, most refreshing cup of coffee you’ve ever held.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <Image
                src="/images/cafe_interior_dark_1775801045991.png"
                alt="Premium Cafe Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* 2. Our Story (The Heart) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative aspect-[3/4] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <Image
                src="/images/signature_craft_latte_1775799798620.png"
                alt="Craft Coffee Pouring"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </motion.div>

          <motion.div
            className="flex-[1.5] space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              From a Kitchen Experiment to Your Hands.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl tracking-tight leading-relaxed">
              It started with a simple question: Why does cold coffee always taste like an afterthought? We spent months testing beans, water temperatures, and steep times, not because we’re scientists, but because we’re lovers of a damn good cup.
            </p>
            <p className="text-zinc-400 text-lg md:text-xl tracking-tight leading-relaxed">
              We discovered that when you treat coffee with patience—steeping it slowly in the dark—it rewards you with a sweetness and clarity that heat can never find.
            </p>
          </motion.div>
        </div>

        {/* 3. The "Bliss" Difference (The Craft) */}
        <motion.div
          className="space-y-12 bg-black border border-zinc-800 rounded-3xl p-8 md:p-16 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="text-center relative z-10 block mb-4">
            <motion.h3 variants={fadeUpVariant} className="text-3xl font-bold text-white tracking-tight uppercase">The Bliss Difference</motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

            <motion.div variants={fadeUpVariant} className="space-y-4 group">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
              </div>
              <div className="text-white font-bold text-xl tracking-tight border-b border-zinc-800 pb-2 transition-colors group-hover:border-zinc-500">Hand-Picked & Heart-Roasted</div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                We source our beans from small-batch farmers who love the land as much as we love the brew. Every batch is roasted to bring out notes of caramel and cocoa—never bitter, always bold.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="space-y-4 group">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div className="text-white font-bold text-xl tracking-tight border-b border-zinc-800 pb-2 transition-colors group-hover:border-zinc-500">The 18-Hour "Nap"</div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Our coffee doesn't "brew"—it matures. We let our grounds rest in cold, filtered water for 18 hours. It’s a slow process, but for that silky-smooth finish? It’s worth every minute.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="space-y-4 group">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" /></svg>
              </div>
              <div className="text-white font-bold text-xl tracking-tight border-b border-zinc-800 pb-2 transition-colors group-hover:border-zinc-500">The Perfect Pour</div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                We serve our brew in a premium, chilled cup designed to keep your coffee ice-cold from the first sip to the very last drop. No lids to block the aroma, no straws to get in the way—just you and the coffee.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* 4. Our Invitation (The Connection) */}
        <motion.div
          className="text-center space-y-8 max-w-3xl mx-auto pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
        >
          <div className="w-16 h-1 bg-white mx-auto mb-8 rounded-full opacity-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Come Catch a Chill.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight">
            We aren't just serving caffeine; we’re serving a break from the noise. Whether you’re stopping by for a quick pick-me-up or staying to find your focus, our space (and our brew) is yours.
          </p>

          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block mt-4 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors tracking-tight"
          >
            Visit Our Menu
          </button>
        </motion.div>

      </div>
    </section>
  );
}
