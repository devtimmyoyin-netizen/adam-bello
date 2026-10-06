"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { homepageAnimationConfig } from "@/lib/homepage-animation-config";

const MotionLink = motion.create(Link);

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const headline = ["Turning high-level vision", "into executable results."];

  return (
    <section id="home" className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero__portrait">
        <Image
          src="/Personal pictures_/Close out .jpg"
          alt="Adam Bello"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 48vw"
        />
      </div>

      <div className="editorial-hero__content">
        <p className="editorial-hero__eyebrow">Product &amp; Programs Management</p>
        <h1 id="hero-title">{headline.map((line, index) => <motion.span className="hero-headline-line" key={line} initial={reduceMotion ? false : homepageAnimationConfig.hero.headlineLine.initial} animate={homepageAnimationConfig.hero.headlineLine.animate} transition={{ ...homepageAnimationConfig.hero.headlineLine.transition, delay: index * homepageAnimationConfig.hero.headlineLine.stagger }}>{line}</motion.span>)}</h1>
        <p>
          I&apos;m  <strong style={{fontSize: "20px"}}> ADAM BELLO, </strong> I turn big-picture <strong>WHAT IFs </strong> into 
          <strong> WHAT&apos;s NEXT.  </strong> I work at the intersection of technology,
          strategy, and operations, building the systems that help teams scale,
          align cross-functionally, and turn users into long-term advocates.
        </p>
        <MotionLink className="editorial-hero__cta motion-button" href="#work" whileHover={reduceMotion ? undefined : { scale: homepageAnimationConfig.button.scale, color: "#11110f" }} transition={{ duration: homepageAnimationConfig.button.duration }}>
          Explore case studies <ArrowUpRight aria-hidden="true" />
        </MotionLink>
      </div>
    </section>
  );
}
