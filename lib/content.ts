export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  positioning: string;
  metric: string;
  metricLabel: string;
  role: string;
  timeframe: string;
  image: string;
  accent: string;
  ownershipNote?: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  lesson: string;
  gallery: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "gdg-on-campus",
    title: "GDG on Campus",
    eyebrow: "Developer ecosystem growth",
    positioning: "Turning a campus community into a repeatable developer-learning ecosystem.",
    metric: "7,000+",
    metricLabel: "community members, grown from approximately 1,000",
    role: "Community and program lead",
    timeframe: "University of Ilorin",
    image: "/Gdgoc_/Gdgoc.JPEG",
    accent: "#d9f45c",
    summary: "A community-growth case study spanning developer education, AI programming, partnerships and organizer support.",
    challenge: "Create reasons for students and emerging builders to participate repeatedly, not just attend a single event.",
    approach: ["Designed useful learning and builder-oriented programming.", "Coordinated speakers, partners and community communications.", "Supported organizers and continuity beyond individual events."],
    outcome: "The community grew from approximately 1,000 to 7,000+ members, with 15+ referenced technology and community programs.",
    lesson: "Sustained growth follows when people can repeatedly learn, build, connect and access opportunity.",
    gallery: ["/Gdgoc_/Gdgoc .jpg", "/Gdgoc_/Gdgoc.JPEG", "/Testimonials/Testimonials .jpg"],
  },
  {
    slug: "build-with-ai",
    title: "Build with AI",
    eyebrow: "AI developer activation",
    positioning: "Moving a technology audience from curiosity to hands-on building.",
    metric: "AI",
    metricLabel: "builder-focused learning and activation",
    role: "Program and community support",
    timeframe: "Metrics pending verification",
    image: "/Build with AI_/BwAI 1.jpg",
    accent: "#ffb86b",
    summary: "Practical AI programming designed around a clear path from interest to action.",
    challenge: "Make an emerging technology feel practical and accessible to a mixed-experience community.",
    approach: ["Framed the program around doing rather than watching.", "Mobilized the community through trusted channels.", "Supported hands-on sessions and builder communication."],
    outcome: "The reusable program structure is ready; exact registration and participation metrics will be added after evidence review.",
    lesson: "Technology programs become more valuable when participants leave having made something.",
    gallery: ["/Build with AI_/BwAI.jpg", "/Build with AI_/BwAI2.jpg", "/Build with AI_/IMG_7250.JPEG"],
  },
  {
    slug: "careerfest",
    title: "CareerFest",
    eyebrow: "Career ecosystem operations",
    positioning: "Four editions connecting students, employers, partners and opportunity.",
    metric: "6,000+",
    metricLabel: "cumulative attendance across four editions",
    role: "Team member from inception",
    timeframe: "Four editions",
    image: "/Careerfest/CF3 .jpg",
    accent: "#90d7ff",
    ownershipNote: "Adam is not the founder of CareerFest. This template describes his involvement across four editions; his final role wording will be verified before launch.",
    summary: "A long-running physical career ecosystem bringing multiple stakeholder groups into one coordinated experience.",
    challenge: "Coordinate growing audiences, partners, speakers and opportunity pathways across recurring editions.",
    approach: ["Worked with the initiative from its inception.", "Supported campaign, partner and event operations across editions.", "Helped connect physical participation to career opportunity."],
    outcome: "Working attendance figures total 6,000+ across four editions: 1,000+, 1,000+, 2,600+ and 1,300+.",
    lesson: "Continuity compounds: recurring programs become ecosystems when participants and partners have a reason to return.",
    gallery: ["/Careerfest/CF 1.jpg", "/Careerfest/Cf5.jpg", "/Careerfest/IMG_8323.jpg"],
  },
  {
    slug: "epex",
    title: "EPEX",
    eyebrow: "Multi-stakeholder physical program",
    positioning: "Operating an engineering-project exhibition across people, projects and partners.",
    metric: "Live",
    metricLabel: "physical program execution",
    role: "Role pending verification",
    timeframe: "Scale pending verification",
    image: "/Epex/Epex3.jpg",
    accent: "#efb3ff",
    summary: "An operational case study in coordinating a complex physical engineering program.",
    challenge: "Keep participants, projects, stakeholders and the physical experience moving toward the same objective.",
    approach: ["Mapped responsibilities and program dependencies.", "Coordinated operational details across stakeholders.", "Troubleshot constraints during delivery."],
    outcome: "The final role, scale and partnership outcomes will replace this placeholder after evidence review.",
    lesson: "Good program operations make complex coordination feel simple to participants.",
    gallery: ["/Epex/Epex1.jpg", "/Epex/Epex 2.jpg", "/Epex/Epex4.jpg"],
  },
  {
    slug: "aiesec-brand-week",
    title: "AIESEC Brand Week",
    eyebrow: "Multi-program campaign",
    positioning: "Connecting several programs and audiences through one operating structure.",
    metric: "6",
    metricLabel: "distinct program formats within one campaign",
    role: "Program execution and coordination",
    timeframe: "AIESEC in Ilorin",
    image: "/AIESEC/AIESEC 2.jpg",
    accent: "#d9f45c",
    summary: "A cross-audience campaign spanning education, careers, sport and community outreach.",
    challenge: "Deliver multiple programs for different audiences without fragmenting the campaign.",
    approach: ["Coordinated activities across different participant groups.", "Aligned partners and stakeholders around shared outcomes.", "Built a connective operating rhythm across the campaign."],
    outcome: "Brand Week brought several distinct community programs into one coordinated campaign.",
    lesson: "A strong operating structure allows one campaign to serve multiple audiences without losing coherence.",
    gallery: ["/AIESEC/AIESEC.jpg", "/AIESEC/AIESEC 4.jpg", "/AIESEC/AIESEC_Gallery.jpg"],
  },
  {
    slug: "devcenter",
    title: "Devcenter",
    eyebrow: "Developer ecosystem operations",
    positioning: "Scaling campus-community experience into a broader developer network.",
    metric: "23,000+",
    metricLabel: "developer network associated with the experience",
    role: "Community and Partnerships",
    timeframe: "Developer ecosystem",
    image: "/placeholders/workshop.svg",
    accent: "#ffb86b",
    summary: "The bridge from local campus activation to wider developer-community operations.",
    challenge: "Translate local organizer insight into useful partnership and program work at a broader scale.",
    approach: ["Worked across community and partnerships.", "Maintained connection to campus organizers and local ecosystems.", "Supported developer-program operations and network growth."],
    outcome: "Experience expanded from campus activation into a wider developer ecosystem associated with a 23,000+ network.",
    lesson: "Local community knowledge becomes strategic when it can inform larger ecosystem operations.",
    gallery: ["/placeholders/workshop.svg", "/placeholders/community.svg", "/placeholders/proof.svg"],
  },
  {
    slug: "logos-circle",
    title: "Logos Circle",
    eyebrow: "Grassroots decentralized-tech community",
    positioning: "Supporting recurring, privacy-first technology meetups at local level.",
    metric: "7 mo.",
    metricLabel: "approximately seven months of recurring circles",
    role: "Local organizer support",
    timeframe: "Monthly meetups",
    image: "/placeholders/event.svg",
    accent: "#90d7ff",
    ownershipNote: "The local organizer is Laniyan Qawi. Adam supported local setup and organization and does not claim ownership of Logos Circle or the Logos Movement.",
    summary: "Credible grassroots exposure to privacy-first and decentralized technology communities.",
    challenge: "Support a recurring physical meetup while respecting community and organizer ownership.",
    approach: ["Supported local setup and organization.", "Helped coordinate recurring physical gatherings.", "Contributed to a grassroots community rhythm."],
    outcome: "Monthly circles continued for approximately seven months based on the current account.",
    lesson: "Community credibility begins with contribution, consistency and accurate attribution.",
    gallery: ["/placeholders/event.svg", "/placeholders/community.svg", "/placeholders/proof.svg"],
  },
];

export const problems = [
  ["01", "Reaching the right people", "Build trusted distribution systems connecting organizations with students, developers, creators and emerging technology communities."],
  ["02", "Weak program participation", "Design the value proposition, partnerships and experience so people have a real reason to participate."],
  ["03", "Entering a new ecosystem", "Identify local connectors and build the relationships that make regional activation practical."],
  ["04", "Disconnected partners", "Coordinate people, organizations and communities around a shared objective."],
  ["05", "Events with no continuity", "Create pathways for people to return, contribute, lead, build and stay connected."],
  ["06", "Ideas that need execution", "Move between strategy and delivery to get the work into the real world."],
];

export const framework = ["Problem", "Community", "Program", "Activation", "Opportunity", "Continuity"];

export const metrics = [
  [7000, "+", "GDG on Campus community members"],
  [23000, "+", "Developer network associated with Devcenter"],
  [6000, "+", "CareerFest attendance across four editions"],
  [15, "+", "Technology and community programs"],
];

export const services = [
  "Ecosystem and community strategy",
  "Developer and community programs",
  "Field marketing and market activation",
  "Events and experiences",
  "Partnership development",
  "Community and program operations",
];
