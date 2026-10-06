/** Shared variants and scroll thresholds for the homepage. */
export const homepageAnimationConfig = {
  hero: {
    image: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: "easeOut" } },
    headlineLine: { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: "easeOut" }, stagger: 0.1 },
  },
  scrollRanges: {
    // The target moves from 80% to 55% of the viewport: a short, snappy reveal window.
    reveal: ["start 0.8", "start 0.55"] as const,
    testimonial: ["start 0.82", "start 0.58"] as const,
    executable: ["start 0.8", "start 0.35"] as const,
  },
  service: { y: 60, stagger: 0.2 },
  heading: { y: 42 },
  testimonial: { y: 20, hoverY: -5 },
  executable: { desktopParallax: 30, mobileParallax: 8 },
  button: { scale: 1.05, duration: 0.3 },
} as const;
