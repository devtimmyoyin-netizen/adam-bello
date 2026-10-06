"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (reduced()) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    const update = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
  return children;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!ref.current || reduced()) return;
    gsap.fromTo(ref.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.85, delay, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } });
  }, { scope: ref });
  return <div ref={ref} className={className}>{children}</div>;
}

export function RevealText({ children, className = "" }: { children: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    if (!ref.current || reduced()) return;
    const split = new SplitType(ref.current, { types: "lines" });
    split.lines?.forEach((line) => {
      const wrapper = document.createElement("span");
      wrapper.className = "line-mask";
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });
    gsap.fromTo(split.lines, { yPercent: 112 }, { yPercent: 0, duration: 1, stagger: 0.08, delay: 0.15, ease: "power4.out" });
    return () => split.revert();
  }, { scope: ref });
  return <h1 ref={ref} className={className}>{children}</h1>;
}

export function ScrollFocusTitle({ lines, className = "" }: { lines: string[]; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const titleLines = gsap.utils.toArray<HTMLElement>(".reference-title-line", ref.current);

    if (reduced()) {
      gsap.set(titleLines, { color: "#30302d" });
      return;
    }

    const tweens = titleLines.slice(1).map((line) => gsap.to(line, {
      color: "#30302d",
      duration: 0.55,
      ease: "power2.out",
      scrollTrigger: {
        trigger: line,
        start: "top 8%",
        once: true,
      },
    }));

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, { scope: ref });

  return <h1 ref={ref} className={className}>{lines.map((line) => <span className="reference-title-line" key={line}>{line}</span>)}</h1>;
}

export function FooterNameReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const letters = gsap.utils.toArray<HTMLElement>(".footer-name-letter", ref.current);

    if (reduced()) {
      gsap.set(letters, { color: "#fff" });
      return;
    }

    const tween = gsap.to(letters, {
      color: "#fff",
      duration: 0.28,
      stagger: 0.16,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 84%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, { scope: ref });

  const word = (value: string) => value.split("").map((letter, index) => <i className="footer-name-letter" aria-hidden="true" key={`${letter}-${index}`}>{letter}</i>);
  const movePortrait = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 56;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 30;
    ref.current?.style.setProperty("--footer-portrait-x", `${x}px`);
    ref.current?.style.setProperty("--footer-portrait-y", `${y}px`);
  };
  const resetPortrait = () => {
    ref.current?.style.setProperty("--footer-portrait-x", "0px");
    ref.current?.style.setProperty("--footer-portrait-y", "0px");
  };

  return <div ref={ref} className="footer-name" aria-label="The Adam Bello" onPointerMove={movePortrait} onPointerLeave={resetPortrait}><span className="footer-name-words"><span>{word("THE")}</span><span>{word("ADAM")}</span><span>{word("BELLO")}</span></span><span className="footer-name-portrait" aria-hidden="true"><Image src="/icon.png" alt="" fill sizes="270px" /></span></div>;
}

export function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    if (!ref.current || reduced()) {
      if (ref.current) ref.current.textContent = `${to.toLocaleString()}${suffix}`;
      return;
    }
    const value = { current: 0 };
    gsap.to(value, { current: to, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 88%", once: true }, onUpdate: () => { if (ref.current) ref.current.textContent = `${Math.round(value.current).toLocaleString()}${suffix}`; } });
  }, { dependencies: [to, suffix] });
  return <span ref={ref}>0{suffix}</span>;
}
