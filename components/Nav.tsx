"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = site.nav
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = sections.find((section) => visible.has(section.id));
        if (current) setActive(current.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[70rem] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="text-sm tracking-[0.16em] uppercase">
          Jiwon Chon
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Page">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
              className={`text-sm transition-colors ${
                active === item.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href={site.cv.href} target="_blank" className="text-sm text-ink">
            CV <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <button
          type="button"
          className="text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 py-3 md:hidden"
          aria-label="Page"
        >
          <ul className="flex flex-col">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block py-3 text-base"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.cv.href}
                target="_blank"
                className="block py-3 text-base"
                onClick={() => setOpen(false)}
              >
                CV ↗
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
