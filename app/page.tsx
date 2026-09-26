import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Recognition } from "@/components/Recognition";
import { ResearchInterests } from "@/components/ResearchInterests";
import { SelectedWork } from "@/components/SelectedWork";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main id="content">
        <Hero />
        <ResearchInterests />
        <SelectedWork />
        <Background />
        <Recognition />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[70rem] flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.location}</p>
        </div>
      </footer>
    </div>
  );
}
