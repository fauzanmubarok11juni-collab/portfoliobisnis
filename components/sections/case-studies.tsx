"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Lightbulb, Rocket, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { caseStudies, categories, type CaseStudy } from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = "All" | (typeof categories)[number];
const filters: Filter[] = ["All", ...categories];

export function CaseStudies() {
  const [active, setActive] = useState<Filter>("All");
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const [open, setOpen] = useState(false);

  const visible = useMemo(
    () => (active === "All" ? caseStudies : caseStudies.filter((c) => c.category === active)),
    [active],
  );

  const openCase = (cs: CaseStudy) => {
    setSelected(cs);
    setOpen(true);
  };

  return (
    <section id="case-studies" className="section border-t bg-card/30">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Case Studies"
          title={
            <>
              Hasil nyata, <span className="italic text-primary">terukur</span>
            </>
          }
          description="Klik kartu untuk melihat masalah, strategi, dan dampak bisnis dari tiap proyek."
        />

        {/* Filter */}
        <Reveal className="mb-10">
          <div role="tablist" aria-label="Filter kategori proyek" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:border-primary/60 hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((cs) => (
              <motion.button
                layout
                key={cs.slug}
                type="button"
                onClick={() => openCase(cs)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bento-card group flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Lihat detail: ${cs.title}`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-[0.2em] text-primary">{cs.category}</span>
                  <span className="text-muted-foreground">{cs.year}</span>
                </div>

                <h3 className="mt-5 text-2xl leading-snug md:text-3xl">{cs.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cs.client}</p>
                <p className="mt-4 text-muted-foreground">{cs.summary}</p>

                <div className="mt-8 flex items-end justify-between gap-4 border-t pt-6">
                  <div>
                    <p className="font-serif text-3xl text-primary">{cs.results[0].value}</p>
                    <p className="text-xs text-muted-foreground">{cs.results[0].label}</p>
                  </div>
                  <span className="flex items-center gap-1 text-sm transition-transform duration-300 group-hover:translate-x-1">
                    Lihat detail
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {selected && (
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 pr-12 text-xs uppercase tracking-[0.2em] text-primary">
                <span>{selected.category}</span>
                <span className="text-muted-foreground">
                  {selected.client} · {selected.year}
                </span>
              </div>
              <DialogTitle>{selected.title}</DialogTitle>
              <DialogDescription className="mt-3">
                Peran: {selected.role}. {selected.summary}
              </DialogDescription>

              <div className="mt-10 space-y-8">
                <DetailBlock icon={<Lightbulb className="h-5 w-5" />} label="The Problem">
                  <p className="leading-relaxed text-muted-foreground">{selected.problem}</p>
                </DetailBlock>

                <DetailBlock icon={<Rocket className="h-5 w-5" />} label="The Strategy">
                  <ol className="space-y-3">
                    {selected.strategy.map((s, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="mt-0.5 font-serif text-primary">0{i + 1}</span>
                        <span className="leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ol>
                </DetailBlock>

                <DetailBlock icon={<Target className="h-5 w-5" />} label="The Result (ROI / Metrics)">
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {selected.results.map((r) => (
                      <div key={r.label} className="rounded-2xl border bg-secondary/40 p-4">
                        <p className="font-serif text-2xl leading-tight text-primary">{r.value}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{selected.resultNote}</p>
                </DetailBlock>

                <div className="flex flex-wrap gap-2 border-t pt-6">
                  {selected.tools.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function DetailBlock({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-primary">
        {icon}
        <h4 className="text-xs font-medium uppercase tracking-[0.2em]">{label}</h4>
      </div>
      {children}
    </div>
  );
}
