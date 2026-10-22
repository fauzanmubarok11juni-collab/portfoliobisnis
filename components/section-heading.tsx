import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl leading-[1.1] md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
