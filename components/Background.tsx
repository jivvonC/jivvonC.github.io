import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionIntro } from "./Section";

export function Background() {
  const { background } = site;

  return (
    <Section id="about" className="border-t border-line">
      <Reveal>
        <SectionIntro title={background.title} titleId="about-title">
          {background.lead}
        </SectionIntro>
      </Reveal>
      <div className="mt-12 border-t border-line">
        {background.items.map((item, i) => (
          <Reveal
            as="article"
            key={item.label}
            delay={i * 80}
            className="grid gap-3 border-b border-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:py-9"
          >
            <h3 className="text-[0.72rem] font-medium tracking-[0.16em] text-accent uppercase">
              {item.label}
            </h3>
            <div className="space-y-8">
              {item.entries.map((entry) => (
                <div key={entry.title} className="flex items-start gap-3.5">
                  <Image
                    src={entry.logo}
                    alt=""
                    width={48}
                    height={48}
                    className={`mt-1 size-12 shrink-0${
                      entry.logo.endsWith("wollongong.png") ? " rounded-[3px]" : ""
                    }`}
                  />
                  <div>
                    <p className="font-serif text-2xl tracking-tight">{entry.title}</p>
                    <p className="mt-2 text-sm text-muted">{entry.meta}</p>
                    <p className="mt-3 max-w-2xl leading-relaxed text-pretty text-muted">
                      {entry.body}
                    </p>
                    {"note" in entry && entry.note ? (
                      <p className="mt-3 text-sm font-medium">{entry.note}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <ul className="mt-12 grid gap-8 sm:grid-cols-3">
        {background.skills.map((group) => (
          <li key={group.label}>
            <h3 className="text-[0.72rem] font-medium tracking-[0.16em] text-faint uppercase">
              {group.label}
            </h3>
            <p className="mt-3 text-sm leading-relaxed">{group.items.join(" · ")}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">
        <span className="text-ink">Languages</span>
        <span className="px-2 text-faint" aria-hidden="true">
          /
        </span>
        {background.languages}
      </p>
    </Section>
  );
}
