import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionIntro } from "./Section";

export function ResearchInterests() {
  const { interests } = site;

  return (
    <Section id="research">
      <Reveal>
        <SectionIntro title={interests.title} titleId="research-title">
          {interests.lead}
        </SectionIntro>
      </Reveal>
      <ol className="mt-12 grid sm:grid-cols-3" aria-labelledby="research-title">
        {interests.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.index}
            delay={i * 80}
            className="group relative flex flex-col border-t border-line py-8 last:border-b sm:border-l sm:px-7 sm:py-9 sm:first:border-l-0 sm:first:pl-0 sm:last:border-b-0 sm:last:pr-0"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
            />
            <p className="font-serif text-2xl text-accent transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:transition-none">
              {item.index}
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-pretty sm:min-h-[3.75rem]">
              {item.title}
            </h3>
            <p className="mt-5 leading-relaxed text-pretty text-muted">{item.body}</p>
            <p className="mt-auto pt-5 text-sm text-ink">{item.tags.join(" · ")}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
