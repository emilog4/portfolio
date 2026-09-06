import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Emil Lögdberg — Computer Science & Engineering Student",
    description:
      "Portfolio of Emil Lögdberg, a Computer Science and Engineering student at Linköping University with interests in software, AI, and business. Based in Linköping, Sweden.",
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
      "Computer Science and Engineering student with an interest in software, AI, and business.",
    description:
      "Currently studying at Linköping University and working on autonomous systems, web applications, and client projects.",
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
      "I'm 22, originally from Stockholm, and now in my third year of a Master of Science in Engineering, Computer Science at Linköping University. I like taking things apart to understand how they work.",
      "Alongside my studies, I work as a strategy consultant at Gozinto Studentkonsulter, LiU's student consultancy. My work has included developing an onboarding portal for a client organisation with more than 500 members and conducting market research to support growth decisions. Before that, I worked in pharmacy retail and at McDonald's. These roles have given me practical experience of working with customers and communicating across technical and non-technical contexts.",
      "When I'm not at a keyboard I'm usually cooking, on a tennis court, or on skis. What I like about cooking is the result and the feeling that comes when a dish really succeeds.",
      "Long-term, I'm aiming for consulting, AI, or fintech — ideally some mix of the three. I care about building things that's actually used and changes society.",
    ],
  },
  strengths: [
    {
      title: "Agile & open to challenges",
      detail: "Comfortable adapting priorities as a project develops.",
    },
    {
      title: "Striving to learn",
      detail: "I'm a strong believer in the power of continuous learning. I'm always looking for ways to improve and expand my knowledge. I'm also always looking for new challenges to push myself.",
    },
    {
      title: "Client-facing by experience",
      detail:
        "From advising pharmacy customers to strategy consulting at Gozinto. I'm comfortable translating between technical and non-technical audiences.",
    },
    {
      title: "Trusted with real responsibility",
      detail:
        "Responsible for internal bookkeeping at Gozinto and represent my class in faculty course-evaluation meetings.",
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
      name: "RoboCab",
      year: "2026",
      status: "In progress",
      description:
        "RoboCab drives autonomously between pickup areas, choosing the shortest route to collect passengers along the way. Built as a university project with a team of seven.",
      role: "Image recognition & machine learning",
      tech: ["Computer Vision", "Machine Learning", "Robotics"],
      outcome: "In development as part of a seven-person project team.",
    },
    {
      id: "vacation-optimizer",
      name: "Vacation Day Optimizer",
      year: "2026",
      status: "Featured",
      description:
        "A single-page tool that calculates Swedish public holidays and “klämdagar” (bridge days) for any year, then ranks vacation-day combinations by the amount of consecutive time off they provide.",
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
      link: "/budapest",
      linkLabel: "emilo.se/budapest",
    },
    {
      id: "tetris",
      name: "Tetris",
      year: "2024",
      description:
        "A Tetris implementation developed for an object-oriented programming course, including piece movement and rotation, collision detection, row clearing, and timed drops. The board, pieces, game logic, and UI are separated into distinct classes.",
      role: "Developer",
      tech: ["Java", "Object-Oriented Design"],
      outcome: "A fully playable game with a modular structure.",
    },
  ],
  experience: [
    {
      org: "Gozinto Studentkonsulter",
      role: "Strategy Consultant",
      dates: "Sep 2024 – Present",
      description:
        "Conduct market and business analysis and develop web solutions for client companies. Recent work includes an onboarding portal for a client organisation with more than 500 members. I also manage internal bookkeeping and IT tooling and lead onboarding for new members.",
    },
    {
      org: "Apoteket AB, Mörby Centrum",
      role: "Advisor",
      dates: "Dec 2022 – Aug 2024, Summer 2025",
      description:
        "Advised customers on self-care and prescription-free products, operated the register, and handled deliveries and stock replenishment.",
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
    text: "Currently in my third year at Linköping University, working on an autonomous taxi robot with a team of seven and as a strategy consultant at Gozinto. I am looking for internship opportunities in consulting, AI, or fintech.",
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
