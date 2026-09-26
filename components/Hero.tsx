import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { Artifact } from "./Artifact";
import { TextLink } from "./TextLink";

export function Hero() {
  const { hero, cv, email, github } = site;

  return (
    <div className="border-b border-line">
      <div className="mx-auto grid w-full max-w-[70rem] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p
            className="rise text-[0.72rem] font-medium tracking-[0.18em] text-accent uppercase"
            style={{ "--i": 0 } as CSSProperties}
          >
            {hero.status}
          </p>
          <h1
            className="rise mt-4 font-serif text-5xl tracking-tight sm:text-6xl"
            style={{ "--i": 1 } as CSSProperties}
          >
            {site.name}
          </h1>
          <p
            className="rise mt-5 max-w-xl font-serif text-2xl leading-snug text-pretty italic sm:text-[1.85rem]"
            style={{ "--i": 2 } as CSSProperties}
          >
            {hero.statement}
          </p>
          <p
            className="rise mt-4 text-sm tracking-wide text-muted"
            style={{ "--i": 3 } as CSSProperties}
          >
            {hero.fields}
          </p>
          <p
            className="rise mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted"
            style={{ "--i": 4 } as CSSProperties}
          >
            {hero.summary}
          </p>
          <div
            className="rise mt-8 border-l border-accent pl-4"
            style={{ "--i": 5 } as CSSProperties}
          >
            <p className="text-sm font-medium">{hero.affiliation}</p>
            <p className="mt-1 text-sm text-muted">{hero.degree}</p>
            <p className="mt-1 text-sm text-muted">{hero.timeline}</p>
          </div>
          <p className="rise mt-5 text-sm text-muted" style={{ "--i": 6 } as CSSProperties}>
            {hero.lab}
          </p>
          <ul
            className="rise mt-8 flex flex-wrap gap-x-6 gap-y-3"
            style={{ "--i": 7 } as CSSProperties}
          >
            <li>
              <TextLink href={cv.href} external noopener={false}>
                {cv.label}
              </TextLink>
            </li>
            <li>
              <TextLink href={`mailto:${email}`}>Email</TextLink>
            </li>
            <li>
              <TextLink href={github.href} external>
                {github.label}
              </TextLink>
            </li>
          </ul>
        </div>
        <div className="rise" style={{ "--i": 3 } as CSSProperties}>
          <Artifact
            artifact={hero.artifact}
            priority
            aspect="aspect-[1024/557]"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
