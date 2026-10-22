import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { metrics } from "@/lib/data";

export function Metrics() {
  return (
    <section id="metrics" aria-label="Impact metrics" className="border-y bg-card/40 py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <div className="lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                <p className="font-serif text-5xl text-primary md:text-6xl">
                  <CountUp
                    to={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    decimals={m.decimals}
                  />
                </p>
                <p className="mt-3 text-sm font-medium">{m.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
