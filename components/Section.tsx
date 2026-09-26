import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-[70rem] px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  titleId,
  children,
}: {
  eyebrow?: string;
  title: string;
  titleId: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-serif text-4xl tracking-tight text-balance sm:text-5xl"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}
