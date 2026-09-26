import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionIntro } from "./Section";

export function Recognition() {
  const { recognition } = site;

  return (
    <Section className="border-t border-line py-16 sm:py-20">
      <Reveal>
        <SectionIntro title={recognition.title} titleId="recognition-title" />
      </Reveal>
      <ul className="mt-10 border-t border-line" aria-labelledby="recognition-title">
        {recognition.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 70}
            className="grid gap-1 border-b border-line py-5 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-8"
          >
            <p className="font-medium">{item.title}</p>
            <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
