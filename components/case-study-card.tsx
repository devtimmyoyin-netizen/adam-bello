"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { CaseStudy } from "@/lib/content";
import { homepageAnimationConfig } from "@/lib/homepage-animation-config";

const MotionLink = motion.create(Link);

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...homepageAnimationConfig.scrollRanges.reveal] });
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <MotionLink ref={ref} className="work-row" href={`/work/${study.slug}`} style={reduceMotion ? undefined : { y, opacity }}>
      <div className="work-copy">
        <div className="work-heading">
          <span className="work-index">0{index + 1}</span>
          <h3>{study.title}</h3>
        </div>
        <div className="work-summary">
          <p>{study.positioning}</p>
          <div className="work-tags">
            <span>{study.eyebrow}</span>
            <span>{study.metric} · {study.metricLabel}</span>
          </div>
        </div>
      </div>
      <div className="work-image">
        <Image src={study.image} alt={`${study.title} program`} fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 34vw, 70vw" />
        <span className="work-image-arrow" aria-hidden="true"><ArrowUpRight /></span>
      </div>
    </MotionLink>
  );
}
