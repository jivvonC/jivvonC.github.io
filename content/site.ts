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
  /** Renders the entry as a tinted card instead of a list row. */
  featured?: boolean;
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
    summary:
      "I am an undergraduate researcher at Kyung Hee University, Korea, exploring Human-AI Interaction and HCI. With a background in interaction design and software development, I study how people interact with, understand, and collaborate with AI.",
  },
  interests: {
    title: "Research interests",
    lead: "These interests form one line of work: how people think with AI, how AI can work alongside them, and the interfaces that make both possible.",
    items: [
      {
        index: "01",
        title: "Human-AI Interaction",
        body: "Designing AI systems that support human reasoning, exploration, and decision-making while preserving user agency and control.",
        tags: [
          "LLM Interaction",
          "AI-assisted Decision Making",
          "Human-Centered AI",
        ],
      },
      {
        index: "02",
        title: "Human-AI Collaboration",
        body: "Exploring how AI can act as a collaborative partner that supports human thinking, exploration, and creation while preserving human agency.",
        tags: [
          "AI as a Collaborative Partner",
          "Human in the Loop",
          "Human Agency",
        ],
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
    lead: "My work spans research, interaction design, and software development, reflecting my interest in how people interact with technology.",
    items: [
      {
        index: "01",
        featured: true,
        kicker: "Current Research · Human-AI Interaction",
        title:
          "A VR-Based Context Branching for Non-linear Exploration of LLM Conversations",
        meta: "Jiwon Chon* · Sungwon In · Immersive Computing & Interaction Lab · 2026–Present",
        metaNote: "* First author",
        question:
          "How can spatial interaction support people in exploring and organizing multiple lines of conversation with an LLM?",
        body: "I investigate interaction techniques for non-linear LLM conversations in VR, focusing on branching, context management, and conversational exploration.",
        tags: ["Human-AI Interaction", "LLM", "VR/XR", "Unity · Meta Quest 3"],
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
        body: "Conducted UX research to explore how AI could support mobility decisions, then redesigned key flows and prototyped AI-assisted features.",
        tags: ["Survey n=102", "Interviews n=9", "UX Research", "Prototyping"],
      },
      {
        index: "03",
        kicker: "Software Engineering · Frontend",
        title: "Event Service Booking Platform",
        meta: "University of Wollongong · February–June 2025",
        body: "Built an event booking platform with a focus on frontend development, real-time interaction, and API integration.",
        tags: [
          "WebSocket/STOMP",
          "Authentication",
          "Review System",
          "REST API",
        ],
      },
    ] as WorkItem[],
    more: {
      title: "More design work",
      body: "More UX/UI Design projects can be found on the design portfolio.",
    },
  },
  background: {
    title: "Background",
    lead: "My background spans Media Studies and Computer Science, giving me complementary perspectives on people and technology. Through UX research, interaction design, and software development, I became interested in the space between them: how people interact with computational systems. This led me from designing interfaces to researching Human-AI Interaction.",
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
            body: "Researching interaction techniques for exploring LLM conversations in virtual reality, from system development and interaction design to research study design and evaluation.",
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
            body: "Led and collaborated on UX/HCI projects involving user research, interaction design, and prototyping across multidisciplinary teams.",
          },
        ],
      },
    ],
    skills: [
      {
        label: "Research",
        items: [
          "User Interviews",
          "Surveys",
          "Usability Testing",
          "A/B Testing",
        ],
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
