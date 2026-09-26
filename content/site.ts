/**
 * Copy and links for the academic site.
 * To replace a schematic with a capture, put the file in /public/research
 * and set `src`, for example `src: "/research/hero.jpg"`.
 * Also update `alt` and `caption` so they describe the real image.
 */

export type SchematicVariant =
  | "overview"
  | "wide"
  | "branching"
  | "context"
  | "comparison";

export type Artifact = {
  src?: string;
  alt: string;
  caption: string;
  variant: SchematicVariant;
};

/** Add `image` once a capture of the project exists in /public/work. */
export type WorkItem = {
  index: string;
  kicker: string;
  title: string;
  meta: string;
  metaNote?: string;
  question?: string;
  body: string;
  tags: string[];
  note?: string;
  image?: { src: string; alt: string };
};

export const site = {
  name: "Jiwon Chon",
  email: "jiwonchon07@gmail.com",
  linkedin: {
    href: "https://www.linkedin.com/in/jiwonchon07",
    label: "LinkedIn",
  },
  location: "Seoul, South Korea",
  cv: { href: "/cv.pdf", label: "CV" },
  github: { href: "https://github.com/jivvonC", label: "GitHub" },
  designPortfolio: {
    href: "https://jiwonchon.framer.website/",
    label: "More design work",
  },
  nav: [
    { href: "#research", id: "research", label: "Research" },
    { href: "#work", id: "work", label: "Work" },
    { href: "#about", id: "about", label: "About" },
    { href: "#contact", id: "contact", label: "Contact" },
  ],
  hero: {
    status: "Undergraduate Researcher · Seoul · 2026",
    statement: "Designing AI interactions that complement human thinking.",
    fields: "Human-AI Interaction · HCI · Interactive Systems",
    summary:
      "I am an undergraduate researcher interested in Human-AI Interaction and HCI. My work explores how interactive AI systems can support people in exploring ideas, reasoning through alternatives, and making decisions.",
    affiliation: "Kyung Hee University",
    degree: "B.M. Media Studies · B.E. Computer Science & Engineering",
    timeline: "Expected February 2027",
    lab: "Immersive Computing & Interaction Lab",
    artifact: {
      src: "/research/context-branching.jpg",
      alt: "A person wearing a VR headset stands in a virtual room, facing conversation panels linked into spatial branches.",
      caption: "VR prototype of context branching for LLM conversations.",
      variant: "overview",
    } satisfies Artifact,
  },
  interests: {
    title: "Research interests",
    lead: "These interests form one line of work: how people think with AI, how AI can work alongside them, and the interfaces that make both possible.",
    items: [
      {
        index: "01",
        title: "Human-AI Interaction",
        body: "Designing AI systems that support human reasoning, exploration, and decision-making while preserving user agency and control.",
        tags: ["LLM Interaction", "AI-assisted Decision Making", "Human-Centered AI"],
      },
      {
        index: "02",
        title: "Human-AI Collaboration",
        body: "Exploring how AI can act as a collaborative partner that supports human thinking, exploration, and creation while preserving human agency.",
        tags: ["AI as a Collaborative Partner", "Human in the Loop", "Human Agency"],
      },
      {
        index: "03",
        title: "Interactive & Immersive Systems",
        body: "Exploring how spatial and multimodal interfaces can support new ways of interacting and collaborating with AI.",
        tags: ["VR/XR", "Multimodal Interaction", "Immersive Computing"],
      },
    ],
  },
  selectedWork: {
    title: "Selected work",
    lead: "A VR research system I study and build, a user research study, and software I shipped with a team.",
    items: [
      {
        index: "01",
        kicker: "Current Research · Human-AI Interaction",
        title:
          "A VR-Based Context Branching for Non-linear Exploration of LLM Conversations",
        meta: "Jiwon Chon* · Sungwon In · Immersive Computing & Interaction Lab · 2026–Present",
        metaNote: "* First author",
        question:
          "How can spatial interaction support people in exploring and organizing multiple lines of conversation with an LLM?",
        body: "I research interaction techniques for non-linear LLM conversations in virtual reality, with a focus on branching, context management, and exploration of alternative conversational paths. The prototype runs on Unity and Meta Quest 3.",
        tags: ["Human-AI Interaction", "LLM", "VR/XR", "Unity · Meta Quest 3"],
        note: "Chon, J., & In, S. (2026). Proceedings of the 2026 Korean Computer Congress (KCC), 1757–1759. Scientific poster presentation, Honorable Mention, Undergraduate/Junior Paper Competition.",
        image: {
          src: "/research/context-branching.jpg",
          alt: "A person wearing a VR headset stands in a virtual room, facing conversation panels linked into spatial branches.",
        },
      },
      {
        index: "02",
        kicker: "UX Research · AI Feature Design",
        title: "AI-Assisted Mobility Experience",
        meta: "KakaoT · Team Leader, KHUX · March–May 2026",
        body: "Led UX research for the mobility service KakaoT through a survey (n=102) and interviews (n=9), to find where AI could support mobility decisions. I then redesigned key flows and built high-fidelity prototypes of the AI features.",
        tags: ["Survey n=102", "Interviews n=9", "UX Research", "Prototyping"],
      },
      {
        index: "03",
        kicker: "Software Engineering · Frontend",
        title: "Event Service Booking Platform",
        meta: "University of Wollongong · February–June 2025",
        body: "Built an event booking platform in a software design course. I implemented real-time chat with WebSocket/STOMP, user authentication, a review system, and the interface, and integrated REST APIs with the backend team.",
        tags: ["WebSocket/STOMP", "Authentication", "Review System", "REST API"],
      },
    ] as WorkItem[],
    more: {
      title: "More design work",
      body: "Interface projects such as Riido and Ditto are on the design portfolio.",
    },
  },
  background: {
    title: "Background",
    lead: "Media studies and computer science, then research, an exchange semester, and a student HCI community.",
    items: [
      {
        label: "Education",
        entries: [
          {
            title: "Kyung Hee University",
            logo: "/logos/kyung-hee.png",
            meta: "Seoul, South Korea · March 2022 – February 2027 (expected)",
            body: "B.M. in Media Studies and B.E. in Computer Science and Engineering, double major.",
            note: "GPA 3.89 / 4.3",
          },
          {
            title: "University of Wollongong",
            logo: "/logos/wollongong.png",
            meta: "Wollongong, Australia · February 2025 – June 2025",
            body: "Exchange program, School of Computing and Information Technology.",
          },
        ],
      },
      {
        label: "Research",
        entries: [
          {
            title: "Immersive Computing & Interaction Lab",
            logo: "/logos/ici-lab.png",
            meta: "Undergraduate Researcher · March 2026 – Present",
            body: "I study interaction techniques for LLMs in virtual reality, and join English research meetings with Ph.D. students and faculty from several institutions.",
          },
        ],
      },
      {
        label: "Community",
        entries: [
          {
            title: "KHUX — UX/HCI Student Association",
            logo: "/logos/khux.png",
            meta: "Director, Education Team Leader · September 2025 – Present",
            body: "I direct and mentor junior members, create UX/HCI learning materials, and publish UX articles. I also collaborate on industry-sponsored projects, MVP development, and AI feature proposals.",
          },
        ],
      },
    ],
    skills: [
      {
        label: "Research",
        items: ["User Interviews", "Surveys", "Usability Testing", "A/B Testing"],
      },
      {
        label: "Design",
        items: ["Interaction Design", "Figma", "Prototyping"],
      },
      {
        label: "Development",
        items: ["Unity", "C#", "React", "TypeScript"],
      },
    ],
    languages: "Korean (native) · English (proficient)",
  },
  recognition: {
    title: "Recognition",
    items: [
      {
        title: "Honorable Mention",
        detail:
          "Undergraduate/Junior Paper Competition · Korean Computer Congress 2026",
      },
      {
        title: "DACKEP Scholarship",
        detail:
          "Destination Australia Cheung Kong Exchange Program · University of Wollongong",
      },
      {
        title: "Superiority Scholarship",
        detail: "Academic Excellence Scholarship · Kyung Hee University",
      },
    ],
  },
  contact: {
    title: "Let's Connect!",
    lines: [
      "Interested in Human-AI Interaction, HCI, and interactive systems?",
      "I would be glad to talk.",
    ],
    button: "Get in touch",
    via: "Contact me via",
    on: "or get in touch on",
  },
} as const;
