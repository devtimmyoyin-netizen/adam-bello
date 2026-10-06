import type { Metadata } from "next";
import { Roboto_Flex, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SmoothScroll } from "@/components/motion";
import "./globals.css";

const sans = Roboto_Flex({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adam-bello.vercel.app"),
  title: { default: "Adam Bello | Community Builder & Partnerships Lead", template: "%s | Adam Bello" },
  description: "Adam Bello builds the systems that turn communities, events and partnerships into real opportunities.",
  keywords: ["Adam Bello", "community operations", "developer programs", "ecosystem strategy", "partnerships", "events"],
  openGraph: {
    title: "Adam Bello | Community Builder & Partnerships Lead",
    description: "Adam Bello builds the systems that turn communities, events and partnerships into real opportunities.",
    url: "/",
    siteName: "Adam Bello",
    locale: "en_US",
    images: [
      {
        url: "/placeholders/og-hero.PNG?v=2",
        alt: "Adam Bello portfolio",
        width: 1900,
        height: 774,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Bello | Community Builder & Partnerships Lead",
    description: "Adam Bello builds the systems that turn communities, events and partnerships into real opportunities.",
    images: [{ url: "/placeholders/og-hero.PNG?v=2", alt: "Adam Bello portfolio" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body><SmoothScroll><SiteNav />{children}<SiteFooter /></SmoothScroll></body></html>;
}
