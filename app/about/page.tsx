import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollLargeText, ScrollRevealBlock } from "@/components/homepage-scroll-motion";

export const metadata: Metadata = { title: "About", description: "About Adam Bello, a community builder working across partnerships and programs." };

export default function AboutPage() {
  return <main className="about-page section-shell"><header><p className="kicker">About Adam</p><ScrollLargeText as="h1">Strategy, translated<br />into real-world action.</ScrollLargeText></header><div className="about-layout"><ScrollRevealBlock className="about-portrait"><Image src="/Personal pictures_/Adam Bello pictures .jpg" alt="Portrait of Adam Bello" fill priority sizes="(max-width: 800px) 100vw, 45vw" /></ScrollRevealBlock><ScrollRevealBlock className="about-prose" index={1}><p className="lead">Adam Bello builds communities, partnerships and programs across technology, developer education and events.</p><p>His experience began in student technology communities and expanded into developer ecosystems, AI programs, career initiatives, decentralized technology communities and broader program operations.</p><p>He works best where strategy meets execution: understanding the problem, finding the people who matter, designing the experience, coordinating the moving parts and getting the work into the real world.</p><h2>How I work</h2><ol>{["Understand the problem", "Map the ecosystem", "Identify the people who matter", "Design the intervention", "Build the operating structure", "Activate the community", "Measure and improve"].map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol><Link className="text-link" href="/work-with-me">See how we can work together <ArrowUpRight /></Link></ScrollRevealBlock></div></main>;
}
