import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionIntro } from "./Section";
import { TextLink } from "./TextLink";

export function SelectedWork() {
  const { selectedWork, designPortfolio } = site;

  return (
    <Section id="work" className="border-t border-line">
      <Reveal>
        <SectionIntro title={selectedWork.title} titleId="work-title">
          {selectedWork.lead}
        </SectionIntro>
      </Reveal>
      <div className="mt-12 border-b border-line">
        {selectedWork.items.map((item, i) => (
          <Reveal
            as="article"
            key={item.index}
            delay={i * 80}
            className={`group relative grid gap-3 sm:gap-8 ${
              item.featured
                ? "mb-10 rounded-xl bg-tint px-6 py-10 sm:px-10"
                : "border-t border-line py-10"
            } ${
              item.image
                ? "sm:grid-cols-[5.5rem_1fr] lg:grid-cols-[5.5rem_minmax(0,1fr)_20rem]"
                : "sm:grid-cols-[5.5rem_1fr]"
            }`}
          >
            {item.featured ? null : (
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 -left-5 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-y-100 sm:-left-8 motion-reduce:transition-none"
              />
            )}
            <p className="font-serif text-2xl text-accent transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:transition-none">
              {item.index}
            </p>
            <div>
              <p
                className={`text-[0.72rem] font-medium tracking-[0.16em] uppercase ${
                  item.featured ? "text-accent" : "text-faint"
                }`}
              >
                {item.kicker}
              </p>
              <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-pretty">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.meta}</p>
              {item.metaNote ? (
                <p
                  className={`mt-1 text-xs ${item.featured ? "text-muted" : "text-faint"}`}
                >
                  {item.metaNote}
                </p>
              ) : null}
              {item.question ? (
                <p className="mt-4 max-w-2xl font-serif text-xl leading-snug text-pretty text-[#124375] italic">
                  {item.question}
                </p>
              ) : null}
              <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-muted">
                {item.body}
              </p>
              <p className="mt-4 text-sm">{item.tags.join(" · ")}</p>
            </div>
            {item.image ? (
              <div
                className={`relative aspect-[1024/557] overflow-hidden bg-card ${
                  item.featured ? "rounded-lg" : "border border-line"
                }`}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
            ) : null}
          </Reveal>
        ))}
        <div className="flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-serif text-2xl tracking-tight">
              {selectedWork.more.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {selectedWork.more.body}
            </p>
          </div>
          <TextLink href={designPortfolio.href} external>
            {designPortfolio.label}
          </TextLink>
        </div>
      </div>
    </Section>
  );
}
