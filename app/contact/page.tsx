import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/contact";
import { ScrollLargeText, ScrollRevealBlock } from "@/components/homepage-scroll-motion";

export const metadata: Metadata = { title: "Contact", description: "Contact Adam Bello about ecosystem, community, partnerships and program work." };

export default function ContactPage() {
  return <main className="contact-page section-shell"><p className="kicker">Contact</p><ScrollLargeText as="h1">Let&apos;s make the<br />idea operational.</ScrollLargeText><ScrollRevealBlock index={1}><p>Share the problem, audience, location and outcome you are working toward.</p><a className="email-link" href={`mailto:${contact.email}`}>{contact.email} <ArrowUpRight /></a></ScrollRevealBlock><div className="contact-links" aria-label="Contact and social links"><ScrollRevealBlock className="contact-link-reveal" index={0}><a href={contact.phoneHref}><span>Phone</span>{contact.phone}</a></ScrollRevealBlock><ScrollRevealBlock className="contact-link-reveal" index={1}><a href={contact.linkedin} target="_blank" rel="noreferrer"><span>Social</span>LinkedIn <ArrowUpRight /></a></ScrollRevealBlock><ScrollRevealBlock className="contact-link-reveal" index={2}><a href={contact.twitter} target="_blank" rel="noreferrer"><span>Social</span>X / Twitter <ArrowUpRight /></a></ScrollRevealBlock></div></main>;
}
