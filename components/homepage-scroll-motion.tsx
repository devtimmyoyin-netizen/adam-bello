"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { homepageAnimationConfig } from "@/lib/homepage-animation-config";

const MotionLink = motion.create(Link);

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const update = () => setIsMobile(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return isMobile;
}

export function ScrollServiceCard({ title, description, index }: { title: string; description: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...homepageAnimationConfig.scrollRanges.reveal] });
  const staggerStart = Math.min((index + 0.05) * homepageAnimationConfig.service.stagger, 0.55);
  // Directly mapping scroll progress to transform/opacity makes scrolling up reverse naturally.
  const y = useTransform(scrollYProgress, [0, staggerStart, 1], [homepageAnimationConfig.service.y, homepageAnimationConfig.service.y, 0]);
  const opacity = useTransform(scrollYProgress, [0, staggerStart, 1], [0, 0, 1]);
  return <motion.li ref={ref} style={reduceMotion ? undefined : { y, opacity }}><h3>{title}</h3><p>{description}</p></motion.li>;
}

export function ScrollLargeText({ children, className, id, as }: { children: ReactNode; className?: string; id?: string; as: "h1" | "h2" | "h3" }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...homepageAnimationConfig.scrollRanges.reveal] });
  const y = useTransform(scrollYProgress, [0, 1], [homepageAnimationConfig.heading.y, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const props = { ref, className, id, style: reduceMotion ? undefined : { y, opacity } };

  // MotionValues are derived from scroll position, so both headings reverse on upward scroll.
  if (as === "h1") return <motion.h1 {...props}>{children}</motion.h1>;
  return as === "h2" ? <motion.h2 {...props}>{children}</motion.h2> : <motion.h3 {...props}>{children}</motion.h3>;
}

export function ScrollRevealBlock({ children, className, index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...homepageAnimationConfig.scrollRanges.reveal] });
  const start = Math.min(index * 0.12, 0.45);
  const y = useTransform(scrollYProgress, [0, start, 1], [28, 28, 0]);
  const opacity = useTransform(scrollYProgress, [0, start, 1], [0, 0, 1]);
  return <motion.div ref={ref} className={className} style={reduceMotion ? undefined : { y, opacity }}>{children}</motion.div>;
}

export function ScrollTestimonial({ children, className, index }: { children: ReactNode; className: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...homepageAnimationConfig.scrollRanges.testimonial] });
  const y = useTransform(scrollYProgress, [0, 1], [homepageAnimationConfig.testimonial.y, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = index % 2 === 0 ? -1.5 : 1.5;
  return <motion.div ref={ref} className={`testimonial-scroll-frame ${className}`} style={reduceMotion ? { rotate } : { y, opacity, rotate }}><motion.article className="reference-testimonial" whileHover={reduceMotion ? undefined : { y: homepageAnimationConfig.testimonial.hoverY, boxShadow: "14px 18px 28px rgba(0,0,0,.16)" }} transition={{ duration: homepageAnimationConfig.button.duration, ease: "easeOut" }}>{children}</motion.article></motion.div>;
}

export function ExecutableResults() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...homepageAnimationConfig.scrollRanges.executable] });
  const parallax = isMobile ? homepageAnimationConfig.executable.mobileParallax : homepageAnimationConfig.executable.desktopParallax;
  const imageY = useTransform(scrollYProgress, [0, 1], [0, parallax]);
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.45, 1], [20, 0, 0]);
  return <section id="results" ref={ref} className="reference-programs"><div className="programs-feature"><motion.div className="programs-feature__media" style={reduceMotion ? undefined : { y: imageY }}><Image className="programs-feature__background" src="/Personal pictures_/ADB.jpg" alt="Adam Bello at a community program" fill sizes="100vw" /></motion.div><motion.div className="programs-feature__content section-shell" style={reduceMotion ? undefined : { opacity, y }}><div className="reference-section-title"><h2>EXECUTABLE<br />RESULTS</h2><p>Program management for<br />technology adoption.</p></div><div className="programs-grid"><div className="programs-copy"><p>Translating strategy into measurable technology adoption and ecosystem growth.</p><p>I build the operational structure that helps teams move from a clear vision to useful, measurable execution.</p></div><MotionLink className="programs-cta motion-button" href="/work-with-me" whileHover={reduceMotion ? undefined : { scale: homepageAnimationConfig.button.scale, backgroundColor: "#ffffff", color: "#11110f" }} transition={{ duration: homepageAnimationConfig.button.duration }}>Build a program<br />that delivers<span /><ArrowUpRight /></MotionLink></div></motion.div></div></section>;
}

const sections = [{ id: "home", label: "Home" }, { id: "what-i-do", label: "What I do" }, { id: "work", label: "Selected work" }, { id: "results", label: "Executable results" }, { id: "testimonials", label: "Testimonials" }];

export function ScrollNavigationDots() {
  const { scrollY } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollY, "change", () => {
    const marker = window.innerHeight * 0.45;
    const index = sections.reduce((active, section, next) => {
      const element = document.getElementById(section.id);
      return element && element.getBoundingClientRect().top <= marker ? next : active;
    }, 0);
    setActiveIndex(previous => previous === index ? previous : index);
  });
  return <nav className="scroll-navigation-dots" aria-label="Homepage sections">{sections.map((section, index) => <motion.a key={section.id} href={`#${section.id}`} aria-label={section.label} aria-current={index === activeIndex ? "location" : undefined} animate={{ backgroundColor: index === activeIndex ? "#11110f" : "rgba(17,17,15,.24)", scale: index === activeIndex ? 1.2 : 1 }} transition={{ duration: 0.3 }} />)}</nav>;
}
