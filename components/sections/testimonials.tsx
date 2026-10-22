import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonials" className="section border-t bg-card/30">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Kata mereka yang <span className="italic text-primary">pernah bekerja sama</span>
            </>
          }
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className={cn(i === 0 && "md:col-span-3 lg:col-span-2 lg:row-span-1")}
            >
              <figure className="bento-card flex h-full flex-col justify-between">
                <Quote className="mb-6 h-8 w-8 text-primary/60" />
                <blockquote
                  className={cn(
                    "font-serif leading-snug",
                    i === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl",
                  )}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-serif text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
