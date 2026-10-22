import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { timeline, type TimelineItem } from "@/lib/data";

function Column({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: TimelineItem[];
}) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </span>
        <h3 className="text-2xl">{title}</h3>
      </div>

      <ol className="relative ml-5 space-y-10 border-l">
        {items.map((item, i) => (
          <li key={item.title + item.period} className="relative pl-8">
            <span
              aria-hidden
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
            />
            <Reveal delay={i * 0.08}>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{item.period}</p>
              <h4 className="mt-2 font-serif text-xl">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.org}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  const work = timeline.filter((t) => t.type === "work");
  const edu = timeline.filter((t) => t.type === "education");

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience & Education"
          title={
            <>
              Perjalanan <span className="italic text-primary">profesional</span>
            </>
          }
        />
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Column title="Experience" icon={<Briefcase className="h-5 w-5" />} items={work} />
          <Column title="Education" icon={<GraduationCap className="h-5 w-5" />} items={edu} />
        </div>
      </div>
    </section>
  );
}
