"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, siteConfig } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="glow-gold absolute -right-40 -top-40 h-[640px] w-[640px]" />
        <div className="glow-gold absolute -bottom-60 -left-40 h-[520px] w-[520px] opacity-60" />
      </div>

      <div className="container relative grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.div
            {...fadeUp(0.05)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {hero.badge}
          </motion.div>

          <motion.p {...fadeUp(0.15)} className="eyebrow mb-5">
            {siteConfig.name} · {siteConfig.role}
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {hero.headingTop}{" "}
            <span className="italic text-primary">{hero.headingAccent}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#case-studies">
                View Case Studies
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Let&apos;s Talk</a>
            </Button>
          </motion.div>
        </div>

        {/* Monogram card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border bg-gradient-to-br from-card to-secondary p-8">
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="eyebrow">Portfolio · {new Date().getFullYear()}</span>
              <div>
                <p className="font-serif text-[9rem] italic leading-none text-primary/90">
                  {siteConfig.initials}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {siteConfig.location}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-10 bottom-16 animate-float rounded-2xl border bg-popover/90 p-4 shadow-xl backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-xl leading-none">4.8x ROAS</p>
                <p className="mt-1 text-xs text-muted-foreground">Rata-rata campaign</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#metrics"
        aria-label="Scroll ke bawah"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
