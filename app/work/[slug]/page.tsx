import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { EvidenceGallery } from "@/components/evidence-gallery";
import { ScrollLargeText, ScrollRevealBlock } from "@/components/homepage-scroll-motion";
import { caseStudies } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  return study ? { title: study.title, description: study.positioning } : {};
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <main className="case-main">
      <section
        className="case-hero case-hero--image section-shell"
        style={{ "--case-accent": study.accent } as CSSProperties}
      >
        <Image
          className="case-hero-background"
          src={study.image}
          alt={`${study.title} project`}
          fill
          priority
          sizes="100vw"
        />

        <Link className="back-link" href="/work"><ArrowLeft /> All work</Link>

        <div className="case-hero-bottom">
          <div className="case-title">
            <p className="kicker">{study.eyebrow}</p>
            <ScrollLargeText as="h1">{study.title}</ScrollLargeText>
            <ScrollRevealBlock index={1}><p>{study.positioning}</p></ScrollRevealBlock>
          </div>

          <div className="case-facts">
            <div><span>Role</span><strong>{study.role}</strong></div>
            <div><span>Timeframe</span><strong>{study.timeframe}</strong></div>
            <div><span>Headline measure</span><strong>{study.metric}</strong><small>{study.metricLabel}</small></div>
          </div>
        </div>
      </section>

      <article className="case-body section-shell">
        <ScrollRevealBlock className="case-lead"><p className="kicker">The overview</p><ScrollLargeText as="h2">{study.summary}</ScrollLargeText></ScrollRevealBlock>
        {study.ownershipNote && <ScrollRevealBlock className="ownership-note" index={1}><span>Role clarity</span><p>{study.ownershipNote}</p></ScrollRevealBlock>}
        <div className="case-columns">
          <ScrollRevealBlock index={0}><section><p className="kicker">The challenge</p><h3>What needed to change</h3><p>{study.challenge}</p></section></ScrollRevealBlock>
          <ScrollRevealBlock index={1}><section><p className="kicker">The approach</p><h3>How the work moved</h3><ul>{study.approach.map((item) => <li key={item}>{item}</li>)}</ul></section></ScrollRevealBlock>
          <ScrollRevealBlock index={2}><section><p className="kicker">The outcome</p><h3>What changed</h3><p>{study.outcome}</p></section></ScrollRevealBlock>
        </div>
        <section className="gallery-section">
          <div className="section-head split-head"><div><p className="kicker">Evidence gallery</p><h2>The work, in the field.</h2></div><p>Selected program photography and supporting evidence.</p></div>
          <EvidenceGallery images={study.gallery} title={study.title} />
        </section>
        <section className="case-lesson"><p className="kicker">Strategic lesson</p><blockquote>{study.lesson}</blockquote></section>
        <Link className="next-link" href="/work">Explore another case study <ArrowUpRight /></Link>
      </article>
    </main>
  );
}
