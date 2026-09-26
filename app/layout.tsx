import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const description =
  "Jiwon Chon is an undergraduate researcher at Kyung Hee University exploring how interactive AI systems can support human thinking through HCI, immersive interfaces, and empirical user research.";

export const metadata: Metadata = {
  title: "Jiwon Chon — Human-AI Interaction",
  description,
  authors: [{ name: "Jiwon Chon" }],
  openGraph: {
    title: "Jiwon Chon — Human-AI Interaction",
    description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute("data-js","")`,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
