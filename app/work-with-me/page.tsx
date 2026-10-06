import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollLargeText, ScrollRevealBlock } from "@/components/homepage-scroll-motion";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Work with me", description: "Work with Adam Bello on ecosystem strategy, community programs, partnerships and events." };

export default function WorkWithMePage() {
  return <main className="page-main section-shell"><header className="page-hero"><p className="kicker">Work with me</p><ScrollLargeText as="h1">Bring the strategy.<br />Build the system.</ScrollLargeText><ScrollRevealBlock index={1}><p>For organizations entering an ecosystem, activating a community or turning an idea into a program people can actually use.</p></ScrollRevealBlock></header><div className="services-grid large-services">{services.map((service, index) => <ScrollRevealBlock className="service-item" key={service} index={index}><span>0{index + 1}</span><h3>{service}</h3><p>Scope, operating model and outcomes are shaped around the problem—not a one-size-fits-all package.</p></ScrollRevealBlock>)}</div><section className="contact-band"><p className="kicker light-kicker">Start a conversation</p><ScrollLargeText as="h2">Tell me what needs to change.</ScrollLargeText><ScrollRevealBlock index={1}><Link className="text-link light" href="/contact">Get in touch <ArrowUpRight /></Link></ScrollRevealBlock></section></main>;
}
