import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { ScrollLargeText, ScrollRevealBlock } from "@/components/homepage-scroll-motion";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = { title: "Selected work", description: "Community, ecosystem, partnerships and program case studies from Adam Bello." };

export default function WorkPage() {
  return <main className="page-main section-shell"><header className="page-hero"><p className="kicker">Selected work</p><ScrollLargeText as="h1">Evidence of<br />problems solved.</ScrollLargeText><ScrollRevealBlock index={1}><p>Community growth, developer activation, career ecosystems, partnerships and physical program delivery.</p></ScrollRevealBlock></header><div className="work-list">{caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} />)}</div></main>;
}
