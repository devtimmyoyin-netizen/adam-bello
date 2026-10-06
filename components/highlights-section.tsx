"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { caseStudies } from "@/lib/content";

export function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 761px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      const updateSectionHeight = () => {
        section.style.setProperty("--highlight-scroll-distance", `${distance()}px`);
      };
      updateSectionHeight();
      gsap.set(track, { x: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onRefreshInit: updateSectionHeight,
        },
      });
      timeline.to(track, { x: () => -distance(), ease: "none" });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
        section.style.removeProperty("--highlight-scroll-distance");
      };
    });

    media.add("(max-width: 760px)", () => {
      section.style.removeProperty("--highlight-scroll-distance");
      gsap.set(track, { clearProps: "transform" });

      return () => section.style.removeProperty("--highlight-scroll-distance");
    });

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section id="work" ref={sectionRef} className="horizontal-highlights">
      <div className="horizontal-highlights__sticky">
        <header className="horizontal-highlights__header">
          <p>Selected case studies</p>
          <h2>HIGHLIGHTS</h2>
          <span>Scroll to explore</span>
        </header>

        <div ref={viewportRef} className="horizontal-highlights__viewport">
          <div ref={trackRef} className="horizontal-highlights__track">
            {caseStudies.slice(0, 6).map((study, index) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="highlight-card"
                style={{ "--card-accent": study.accent } as CSSProperties}
              >
                <div className="highlight-card__top">
                  <span>0{index + 1}</span>
                  <span>Case study</span>
                  <ArrowUpRight />
                </div>
                <div className="highlight-card__media">
                  <Image src={study.image} alt={`${study.title} case study`} fill sizes="(max-width: 760px) 84vw, 46vw" />
                </div>
                <div className="highlight-card__body">
                  <p>{study.eyebrow}</p><h3>{study.title}</h3><p>{study.summary}</p>
                </div>
                <div className="highlight-card__metric">
                  <strong>{study.metric}</strong><span>{study.metricLabel}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
