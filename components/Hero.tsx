import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { TextLink } from "./TextLink";

export function Hero() {
  const { hero, cv, email, github } = site;

  return (
    <div>
      <div className="mx-auto w-full max-w-[70rem] px-5 py-16 sm:px-8 sm:py-24">
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
          className="rise mt-5 max-w-xl font-serif text-2xl leading-snug text-pretty text-[#124375] italic sm:text-[1.85rem]"
          style={{ "--i": 2 } as CSSProperties}
        >
          {hero.statement}
        </p>
        <p
          className="rise mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted"
          style={{ "--i": 4 } as CSSProperties}
        >
          {hero.summary}
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
    </div>
  );
}
