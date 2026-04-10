"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md py-4 shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold tracking-tighter">
          CBB.
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-tight">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
            Experience
          </Link>
          <Link href="/#products" className="text-zinc-400 hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <Link href="/order" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold tracking-tight hover:bg-zinc-200 transition-colors inline-block text-center">
          Order Now
        </Link>
      </div>
    </motion.nav>
  );
}
