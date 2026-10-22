"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** Angka beranimasi: mulai berjalan saat elemen masuk viewport (sekali saja). */
export function CountUp({
  to,
  decimals = 0,
  duration = 2.2,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;

    const render = (v: number) => {
      node.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
    };

    if (reduceMotion) {
      render(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: render,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, to, decimals, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}
