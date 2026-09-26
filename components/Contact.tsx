import { site } from "@/content/site";
import { seoulDate } from "@/lib/date";
import { LocalDate } from "./LocalDate";
import { Reveal } from "./Reveal";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.7 3.4a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0zM.8 8.2h3.7V24H.8V8.2zM8.6 8.2h3.5v2.1h.1c.5-1 1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.8V24h-3.7v-7.3c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.9V24H8.6V8.2z"
      />
    </svg>
  );
}

export function Contact() {
  const { contact, email, linkedin, cv, github, name } = site;

  return (
    <section id="contact" className="px-5 pt-4 pb-16 sm:px-8 sm:pb-20">
      <Reveal className="@container relative mx-auto w-full max-w-[70rem] overflow-hidden rounded-xl bg-accent text-white">
        <div className="px-6 pt-10 pb-[calc(12.6cqw+2rem)] sm:px-10 sm:pt-14 lg:px-14 lg:pt-16 lg:pb-[calc(13.7cqw+2rem)]">
        <h2
          id="contact-title"
          className="font-serif text-4xl tracking-tight text-balance sm:text-5xl"
        >
          {contact.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-white/90 sm:text-lg">
          {contact.lines.join(" ")}
        </p>
        <a
          href={`mailto:${email}`}
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-5 text-sm font-medium text-ink"
        >
          {contact.button}
          <span className="grid size-7 place-items-center rounded-full border border-ink/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none">
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true">
              <path
                d="M3.5 8h9M8.5 4.5 12.5 8l-4 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/25 pt-6 text-sm text-white/75 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span>{contact.via}</span>
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="grid size-6 place-items-center rounded-md border border-white/30 text-white transition-colors duration-300 ease-out hover:border-white hover:bg-white/10 motion-reduce:transition-none"
            >
              <MailIcon />
            </a>
            <span className="ml-2">{contact.on}</span>
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedin.label}
              className="grid size-6 place-items-center rounded-md border border-white/30 text-white transition-colors duration-300 ease-out hover:border-white hover:bg-white/10 motion-reduce:transition-none"
            >
              <LinkedInIcon />
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${email}`}
              className="text-white decoration-white/40 underline-offset-4 transition-colors duration-300 ease-out hover:underline motion-reduce:transition-none"
            >
              {email}
            </a>
            <a
              href={cv.href}
              target="_blank"
              className="text-white decoration-white/40 underline-offset-4 transition-colors duration-300 ease-out hover:underline motion-reduce:transition-none"
            >
              {cv.label}
            </a>
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white decoration-white/40 underline-offset-4 transition-colors duration-300 ease-out hover:underline motion-reduce:transition-none"
            >
              {github.label}
            </a>
            <LocalDate initial={seoulDate()} />
          </p>
        </div>
        </div>
        <p
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[30%] text-center font-sans text-[18cqw] leading-none font-medium tracking-[-0.075em] whitespace-nowrap text-white/25 select-none lg:text-[19.5cqw]"
        >
          {name}
        </p>
      </Reveal>
    </section>
  );
}
