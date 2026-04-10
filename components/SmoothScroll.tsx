"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    lenis: any;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing
    });

    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
