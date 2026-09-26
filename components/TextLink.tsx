import type { ReactNode } from "react";

export function TextLink({
  href,
  children,
  external = false,
  noopener = true,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  noopener?: boolean;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-baseline gap-1 text-sm text-ink transition-colors hover:text-accent"
      {...(external ? { target: "_blank" } : {})}
      {...(external && noopener ? { rel: "noopener noreferrer" } : {})}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-[5px] h-px bg-line"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-[5px] h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
        />
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 ease-out group-hover:translate-x-px group-hover:-translate-y-px motion-reduce:transition-none"
      >
        ↗
      </span>
    </a>
  );
}
