import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Emil Lögdberg — Computer Science & Engineering Student",
    description:
      "Portfolio of Emil Lögdberg, a computer science & engineering student at Linköping University building in AI, software, and product. Based in Linköping, Sweden.",
  },
  role: "Computer Science & Engineering Student",
  location: "Linköping, Sweden",
  nav: [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    statement:
      "I build things at the intersection of software, AI, and business. Combining my interest in economics, technology, and innovation.",
    description:
      "Third-year Computer Science & Engineering student at Linköping University, currently building autonomous systems, web products, and everything in between.",
    availability: "Open to internships & freelance projects",
    ctaPrimary: "View my work",
    ctaSecondary: "Get in touch",
    scroll: "Scroll",
  },
  sectionLabels: {
    about: "01 — About",
    strengths: "Strengths",
    work: "02 — Selected Work",
    experience: "03 — Experience",
    skills: "04 — Skills",
    now: "Now",
    contact: "05 — Contact",
  },
  about: {
    paragraphs: [
      "I'm 22, originally from Stockholm, and now in my third year of a Master of Science in Engineering, Computer Science at Linköping University. I like taking things apart to understand how they work — whether that's a robot, a website, or a plan for a trip.",
      "Outside of school I work as a strategy consultant at Gozinto Studentkonsulter, LiU's student consultancy — building things like a custom onboarding portal for a 500+ member client organisation and doing market research to help clients make the case for their own growth. Before that I spent a couple of years advising customers at a pharmacy, and a summer behind a McDonald's counter — I've been client-facing for longer than I've been writing code.",
      "When I'm not at a keyboard I'm usually cooking, on a tennis court, or on skis — I like things that reward patience and repetition as much as writing code does. An Erasmus exchange to Portugal in gymnasium is still one of my better decisions.",
      "Long-term, I'm aiming for consulting, AI, or fintech — ideally some mix of the three. I care about building software that's actually used, not just demoed.",
    ],
  },
  strengths: [
    {
      title: "Agile & open to challenges",
      detail: "Comfortable changing direction when a project demands it.",
    },
    {
      title: "Motivated to learn",
      detail: "Consistently seeking out new tools, domains, and problems.",
    },
    {
      title: "Client-facing by experience",
      detail:
        "From advising pharmacy customers to strategy consulting at Gozinto — comfortable translating between technical and non-technical audiences.",
    },
    {
      title: "Trusted with real responsibility",
      detail:
        "Handled bookkeeping and IT tooling for Gozinto's leadership and represent my class in faculty course-evaluation meetings.",
    },
  ],
  work: {
    heading: "A few things I've built and am building.",
    roleLabel: "Role",
    outcomeLabel: "Outcome",
  },
  projects: [
    {
      id: "taxi-robot",
      name: "Autonomous Taxi Robot",
      year: "2026",
      status: "In progress",
      description:
        "A robot that drives autonomously between pickup areas, choosing the shortest route to collect passengers along the way. Built as a university project with a team of seven.",
      role: "Image recognition & machine learning",
      tech: ["Computer Vision", "Machine Learning", "Robotics"],
      outcome: "Currently in development with six other students.",
    },
    {
      id: "vacation-optimizer",
      name: "Vacation Day Optimizer",
      year: "2026",
      status: "Featured",
      description:
        "A single-page tool that calculates Sweden's public holidays and “klämdagar” (bridge days) for any year, then ranks the most efficient vacation days to book — the combinations that turn the fewest vacation days into the longest stretches of time off.",
      role: "Concept & development",
      tech: ["JavaScript", "HTML & CSS"],
      outcome: "A working planner that turns a handful of vacation days into full weeks off, using Sweden's actual holiday calendar.",
      link: "/tools/semesteroptimering.html",
      linkLabel: "Open the planner",
    },
    {
      id: "budapest-spots",
      name: "Budapest Spots",
      year: "2026",
      description:
        "A travel site built for a friend group's trip to Budapest: a live map of every restaurant and activity on the list, plus a points competition where friends assign each other challenges to complete on the trip.",
      role: "Product lead & developer",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      outcome: "Used by the whole group to plan and gamify the trip.",
      link: "http://emilo.se",
      linkLabel: "emilo.se",
    },
    {
      id: "tetris",
      name: "Tetris",
      year: "2024",
      description:
        "A complete Tetris implementation built from scratch for an object-oriented programming course — piece movement and rotation, collision detection, row clearing, and timed drops, split across cleanly separated classes for the board, pieces, game logic, and UI.",
      role: "Developer",
      tech: ["Java", "Object-Oriented Design"],
      outcome: "A fully playable game with a modular, extensible architecture.",
    },
  ],
  experience: [
    {
      org: "Gozinto Studentkonsulter",
      role: "Strategy Consultant",
      dates: "Sep 2024 – Present",
      description:
        "Deliver market analysis, business analysis, and web development for client companies — including a custom onboarding portal for a 500+ member client organisation and market research to help clients make the case for their own growth. Also handle internal bookkeeping and IT tooling, and lead onboarding for new members.",
    },
    {
      org: "Apoteket AB, Mörby Centrum",
      role: "Advisor",
      dates: "Dec 2022 – Aug 2024, Summer 2025",
      description:
        "Advised customers on self-care and prescription-free products, ran the register, and handled deliveries and shelving — a few years of daily practice in reading what people actually need.",
    },
  ],
  skillCategories: [
    {
      label: "Engineering",
      skills: ["Python", "Java", "C++ & C", "TypeScript & React", "VHDL & Assembler"],
    },
    {
      label: "AI & Data",
      skills: ["Machine Learning", "Computer Vision", "SQL"],
    },
    {
      label: "Business & Consulting",
      skills: ["Market & business analysis", "Client consulting", "Excel & PowerPoint"],
    },
  ],
  now: {
    text: "Finishing up year three at Linköping University, building an autonomous taxi robot with a team of seven, and working as a strategy consultant at Gozinto. Looking ahead to internships in consulting, AI, or fintech.",
    updatedLabel: "Last updated",
    updated: "September 2026",
  },
  contact: {
    heading1: "Have an interesting project?",
    heading2: "Let's talk.",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
};
