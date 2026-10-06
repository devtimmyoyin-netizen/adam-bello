import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { ExecutableResults, ScrollLargeText, ScrollNavigationDots, ScrollServiceCard, ScrollTestimonial } from "@/components/homepage-scroll-motion";

type Testimonial = {
  name: string;
  role: string;
  source: string;
  tone: string;
  pullQuote: string;
  fullRecommendation: string;
  initials: string;
  portrait?: string;
  proof?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Habeeb Abubakar",
    role: "Lead, Unilorin Fetuils Tech Hub · FrontEnd Developer · IoT & Embedded Systems Engineer",
    source: "LinkedIn recommendation · July 23, 2025",
    tone: "peach",
    pullQuote: "Adam combines strong leadership, clear communication and genuine community building with the ability to turn ideas into meaningful action.",
    fullRecommendation: "Adam consistently stands out for his leadership, community building and ability to turn ideas into meaningful action. Having worked with him across multiple organisations, I have seen his ability to bring teams together, lead volunteer initiatives and drive projects forward. He communicates complex ideas with clarity, inspires people to contribute, and combines strong execution with a genuine commitment to the communities he serves.",
    initials: "HA",
  },
  {
    name: "Aminat Afolabi",
    role: "Product Manager @ Conclase",
    source: "LinkedIn recommendation",
    tone: "sage",
    pullQuote: "Adam is exceptionally resourceful. He approaches challenges with practical solutions, brings valuable ideas to the table and consistently helps teams move toward their goals.",
    fullRecommendation: "I’ve had the opportunity to work alongside Adam on several projects, and I’ve consistently been impressed by his professionalism and resourcefulness. No matter the challenge, Adam finds practical solutions and brings valuable ideas to the table. He is dependable, collaborative and consistently goes the extra mile to ensure goals are achieved. He not only delivers on his responsibilities but also supports others in achieving theirs.",
    initials: "AA",
  },
  {
    name: "Ayokunle Abiola",
    role: "NSBE Golden Torch Awardee — Chicago · Oil & Gas · Field Engineer",
    source: "LinkedIn recommendation",
    tone: "plum",
    pullQuote: "Adam combines sharp thinking, proactive leadership and an exceptional ability to connect with people, align teams and communicate with clarity.",
    fullRecommendation: "I worked with Adam Bello for over two years at Google Developer Groups, and it has been nothing short of inspiring. We collaborated across multiple teams, most notably on a large-scale event that drew over 1,000 students. Adam consistently stood out for his sharp intellect, proactive approach and natural leadership. He balances confidence with genuine attentiveness, connects easily with people, inspires teams and communicates ideas clearly both in private discussions and on stage.",
    initials: "AA",
  },
  {
    name: "Google for Developers",
    role: "DevFest Students Edition",
    source: "External testimonial",
    tone: "peach",
    pullQuote: "You're exceeding all expectations, Adam—including ours!",
    fullRecommendation: "Thank you for putting in the work to make this #DevFest Students Edition a success.",
    initials: "G",
    proof: "/Testimonials/Testimonials.jpg",
  },
];

export default function Home() {
  return (
    <main className="reference-home">
      <HeroSection />
      <ScrollNavigationDots />

      <section id="what-i-do" className="what-i-do section-shell" aria-labelledby="what-i-do-title">
        <div className="what-i-do__intro">
          <ScrollLargeText id="what-i-do-title" as="h2" className="scroll-large-text">I help technology companies and developer platforms translate user ecosystems into active product adoption.</ScrollLargeText>
        </div>
        <div className="what-i-do__body">
          <div className="what-i-do__label"><p>What I do</p><ArrowDownRight aria-hidden="true" /></div>
          <ul>
            <ScrollServiceCard index={0} title="Product & Programs Management" description="Creating the programs, processes, and operating rhythms that move products from strategy into consistent delivery." />
            <ScrollServiceCard index={1} title="Strategy & Operations" description="Turning complex priorities into focused plans, clear workflows, and measurable outcomes for the team." />
            <ScrollServiceCard index={2} title="Community Building and Ecosystem Growth" description="Designing pathways that help communities discover, understand, and adopt technology with confidence." />
            <ScrollServiceCard index={3} title="Cross-Functional Team Leadership" description="Aligning people, partners, and teams around shared goals so execution stays connected from start to finish." />
          </ul>
        </div>
      </section>

      <HighlightsSection />

      <ExecutableResults />

      <section id="testimonials" className="reference-testimonials section-shell">
        <div className="reference-section-title"><h2>TESTIMONIALS</h2><p>What people I&apos;ve worked<br />with say about me</p></div>
        <div className="testimonial-lead"><p>Third-party perspectives on Adam&apos;s leadership, resourcefulness, communication and ability to turn ideas into meaningful action.</p></div>
        <div className="testimonial-stack">
          {testimonials.map((item, index) => (
            <ScrollTestimonial key={item.name} index={index} className={`card-${index + 1} ${item.tone}`}>
              <div className="testimonial-person">
                {item.portrait ? <span className="testimonial-avatar"><Image src={item.portrait} alt={`Portrait of ${item.name}`} fill sizes="45px" /></span> : <span className="avatar-placeholder" aria-hidden="true">{item.initials}</span>}
                <div><strong>{item.name}</strong><small>{item.role}</small><small className="testimonial-source">{item.source}</small></div><b>&ldquo;</b>
              </div>
              <p>{item.pullQuote}</p>
              <details className="testimonial-full"><summary>Read full recommendation</summary><p>{item.fullRecommendation}</p></details>
              {item.proof && <div className="testimonial-proof"><Image src={item.proof} alt="Google for Developers praising Adam Bello's work on DevFest Students Edition" fill sizes="(max-width: 760px) 90vw, 46vw" /></div>}
            </ScrollTestimonial>
          ))}
        </div>
      </section>

      <section className="future-programs section-shell">
        <p className="kicker">Ready to execute?</p>
        <ScrollLargeText as="h3" className="scroll-large-text">Planning a technology program, product launch, or ecosystem activation? Let&apos;s talk strategy and operations.</ScrollLargeText>
        <div className="future-programs__links">
          <a href="https://calendly.com/adamoluwatomi555/30min" target="_blank" rel="noreferrer">Book a 30-minute call</a>
          <a href="mailto:adamoluwatomi555@gmail.com">adamoluwatomi555@gmail.com</a>
          <a href="https://linkedin.com/in/adam-bello-b80b60238" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
