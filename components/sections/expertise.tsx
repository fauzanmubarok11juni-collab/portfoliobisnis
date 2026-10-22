"use client";

import { motion } from "framer-motion";
import { BarChart3, Compass, LineChart, Search, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { expertise } from "@/lib/data";

const bars = [38, 62, 48, 84, 56, 92, 70];

export function Expertise() {
  const { marketResearch, brandStrategy, dataAnalytics, tools, philosophy } = expertise;

  return (
    <section id="expertise" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Expertise"
          title={
            <>
              Tiga disiplin, <span className="italic text-primary">satu tujuan</span>
            </>
          }
          description="Riset memberi arah, strategi memberi keunggulan, analitik memberi bukti. Ketiganya saling menguatkan."
        />

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {/* Market Research */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <article className="bento-card flex h-full flex-col">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Search className="h-6 w-6" />
              </span>
              <h3 className="text-3xl">{marketResearch.title}</h3>
              <p className="mt-3 max-w-md text-muted-foreground">{marketResearch.description}</p>

              <div
                aria-hidden
                className="mt-8 flex h-32 items-end gap-2 rounded-2xl border bg-background/50 p-4"
              >
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-primary/30 to-primary"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {marketResearch.methods.map((m) => (
                  <Badge key={m}>{m}</Badge>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Brand Strategy */}
          <Reveal delay={0.1} className="md:col-span-2">
            <article className="bento-card h-full">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Compass className="h-6 w-6" />
              </span>
              <h3 className="text-2xl md:text-3xl">{brandStrategy.title}</h3>
              <p className="mt-3 text-muted-foreground">{brandStrategy.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {brandStrategy.points.map((p) => (
                  <li key={p}>
                    <Badge>{p}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Data Analytics */}
          <Reveal delay={0.15} className="md:col-span-1">
            <article className="bento-card h-full">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <BarChart3 className="h-6 w-6" />
              </span>
              <h3 className="text-2xl">{dataAnalytics.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{dataAnalytics.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {dataAnalytics.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Toolkit */}
          <Reveal delay={0.2} className="md:col-span-1">
            <article className="bento-card h-full">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" />
              </span>
              <h3 className="text-2xl">{tools.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {tools.items.map((t) => (
                  <li key={t}>
                    <Badge className="px-2.5 py-0.5 text-[11px]">{t}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Philosophy */}
          <Reveal delay={0.1} className="md:col-span-4">
            <article className="bento-card flex flex-col items-start gap-4 bg-gradient-to-r from-primary/10 via-card/70 to-card/70 md:flex-row md:items-center md:justify-between">
              <LineChart className="h-8 w-8 shrink-0 text-primary" />
              <p className="font-serif text-2xl italic leading-snug md:text-3xl">
                &ldquo;{philosophy.quote}&rdquo;
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
