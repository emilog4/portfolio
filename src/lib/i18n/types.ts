export type Project = {
  id: string;
  name: string;
  year: string;
  status?: string;
  description: string;
  role: string;
  tech: string[];
  outcome: string;
  link?: string;
  linkLabel?: string;
};

export type TimelineEntry = {
  org: string;
  role: string;
  dates: string;
  description: string;
};

export type SkillCategory = {
  label: string;
  skills: string[];
};

export type Strength = {
  title: string;
  detail: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  role: string;
  location: string;
  nav: NavItem[];
  hero: {
    statement: string;
    description: string;
    availability: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  sectionLabels: {
    about: string;
    strengths: string;
    work: string;
    experience: string;
    skills: string;
    now: string;
    contact: string;
  };
  about: {
    paragraphs: string[];
  };
  strengths: Strength[];
  work: {
    heading: string;
    roleLabel: string;
    outcomeLabel: string;
  };
  projects: Project[];
  experience: TimelineEntry[];
  skillCategories: SkillCategory[];
  now: {
    text: string;
    updatedLabel: string;
    updated: string;
  };
  contact: {
    heading1: string;
    heading2: string;
    linkedinLabel: string;
    githubLabel: string;
  };
};
