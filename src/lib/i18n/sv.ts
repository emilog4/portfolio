import type { Dictionary } from "./types";

export const sv: Dictionary = {
  meta: {
    title: "Emil Lögdberg — Civilingenjörsstudent i Datateknik",
    description:
      "Portfolio för Emil Lögdberg, civilingenjörsstudent i Datateknik vid Linköpings universitet med intresse för mjukvara, AI och affärsutveckling. Baserad i Linköping.",
  },
  role: "Civilingenjörsstudent i Datateknik",
  location: "Linköping, Sverige",
  nav: [
    { href: "#work", label: "Arbete" },
    { href: "#about", label: "Om mig" },
    { href: "#experience", label: "Erfarenhet" },
    { href: "#contact", label: "Kontakt" },
  ],
  hero: {
    statement:
      "Civilingenjörsstudent med intresse för mjukvara, AI och affärsutveckling.",
    description:
      "Studerar vid Linköpings universitet och arbetar med autonoma system, webbapplikationer och kundprojekt.",
    availability: "Öppen för praktik & sommarjobb",
    ctaPrimary: "Se mitt arbete",
    ctaSecondary: "Kontakta mig",
    scroll: "Scrolla",
  },
  sectionLabels: {
    about: "01 — Om mig",
    strengths: "Styrkor",
    work: "02 — Utvalda projekt",
    experience: "03 — Erfarenhet",
    skills: "04 — Kompetenser",
    now: "Nu",
    contact: "05 — Kontakt",
  },
  about: {
    paragraphs: [
      "Jag är 22 år, ursprungligen från Stockholm, och går mitt tredje år på civilingenjörsprogrammet i Datateknik vid Linköpings universitet. Jag tycker om att förstå hur saker fungerar genom att undersöka dem på djupet.",
      "Vid sidan av studierna arbetar jag som strategikonsult på Gozinto Studentkonsulter, en studentdriven konsultbyrå vid universitetet. Mitt arbete har bland annat omfattat utveckling av en onboardingportal för en klientorganisation med fler än 500 medlemmar och marknadsundersökningar som underlag för tillväxtbeslut. Tidigare arbetade jag inom apoteksbranschen och på McDonald's. Det har gett mig praktisk erfarenhet av kundkontakt och av att kommunicera med både tekniska och icke-tekniska målgrupper.",
      "När jag inte studerar lagar jag oftast mat, spelar tennis eller åker skidor. I matlagningen uppskattar jag både processen och resultatet när en rätt faller på plats.",
      "På längre sikt är jag intresserad av roller i gränslandet mellan konsulting, AI och fintech. Jag värdesätter praktiskt arbete som löser tydliga problem och kommer till användning.",
    ],
  },
  strengths: [
    {
      title: "Flexibel och gillar utmaningar",
      detail: "Van vid att anpassa prioriteringar när ett projekt utvecklas.",
    },
    {
      title: "Strävar efter ny kunskap",
      detail: "Jag tror starkt på att kunskap är en av de viktigt. Därför söker jag  nya verktyg, tekniker och utmaningar.",
    },
    {
      title: "Kundnära av erfarenhet",
      detail:
        "Erfarenhet från både apoteksrådgivning och strategikonsulting. Van vid att kommunicera med tekniska och icke-tekniska målgrupper.",
    },
    {
      title: "Betrodd med verkligt ansvar",
      detail:
        "Skötte bokföring åt Gozintos. Representerar min klass i fakultetens kursutvärderingsmöten.",
    },
  ],
  work: {
    heading: "Utvalda projekt och kursarbeten.",
    roleLabel: "Roll",
    outcomeLabel: "Resultat",
  },
  projects: [
    {
      id: "taxi-robot",
      name: "RoboCab",
      year: "2026",
      status: "Pågående",
      description:
        "En autonom taxirobot som kör mellan upphämtningsområden och planerar rutter för att hämta passagerare. Utvecklad som ett universitetsprojekt tillsammans med sex andra studenter.",
      role: "Bildigenkänning & maskininlärning",
      tech: ["Datorseende", "Maskininlärning", "Robotik"],
      outcome: "Under utveckling i ett projektteam med sju personer.",
    },
    {
      id: "vacation-optimizer",
      name: "Semesteroptimering",
      year: "2026",
      status: "Utvalt",
      description:
        "Ett enkelsidigt verktyg som räknar ut Sveriges röda dagar och klämdagar för valfritt år och rangordnar semesterkombinationer efter hur många sammanhängande lediga dagar de ger.",
      role: "Idé & utveckling",
      tech: ["JavaScript", "HTML & CSS"],
      outcome: "En fungerande planerare baserad på Sveriges faktiska helgdagskalender.",
      link: "/tools/semesteroptimering.html",
      linkLabel: "Öppna planeraren",
    },
    {
      id: "budapest-spots",
      name: "Budapest Spots",
      year: "2026",
      description:
        "En resesida för en gruppresa till Budapest, med en livekarta över restauranger och aktiviteter samt ett poängbaserat utmaningssystem.",
      role: "Produktledare & utvecklare",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      outcome: "Användes av gruppen för att samordna planer och aktiviteter.",
      link: "http://emilo.se",
      linkLabel: "emilo.se",
    },
    {
      id: "tetris",
      name: "Tetris",
      year: "2024",
      description:
        "En Tetris-implementation utvecklad för en kurs i objektorienterad programmering. Innehåller bland annat förflyttning och rotation av block, kollisionshantering, radrensning och tidsstyrda fall. Bräde, block, spellogik och gränssnitt är separerade i egna klasser.",
      role: "Utvecklare",
      tech: ["Java", "Objektorienterad design"],
      outcome: "Ett fullt spelbart spel med en modulär struktur.",
    },
  ],
  experience: [
    {
      org: "Gozinto Studentkonsulter",
      role: "Strategikonsult",
      dates: "sep 2024 – nu",
      description:
        "Genomför marknads- och affärsanalyser samt utvecklar webblösningar åt klientföretag. Arbetet omfattar bland annat en onboardingportal för en klientorganisation med fler än 500 medlemmar. Ansvarar även för intern bokföring och IT-verktyg samt leder onboarding av nya medlemmar.",
    },
    {
      org: "Apoteket AB, Mörby Centrum",
      role: "Rådgivare",
      dates: "dec 2022 – aug 2024, sommaren 2025",
      description:
        "Rådgav kunder om egenvård och receptfria läkemedel, arbetade i kassan och hanterade leveranser och varupåfyllning.",
    },
  ],
  skillCategories: [
    {
      label: "Teknik",
      skills: ["Python", "Java", "C++ & C", "TypeScript & React", "VHDL & Assembler"],
    },
    {
      label: "AI & Data",
      skills: ["Maskininlärning", "Datorseende", "SQL"],
    },
    {
      label: "Affär & Konsulting",
      skills: ["Marknads- och affärsanalys", "Kundkonsulting", "Excel & PowerPoint"],
    },
  ],
  now: {
    text: "Går mitt tredje år på Linköpings universitet, arbetar med en autonom taxirobot tillsammans med sex andra studenter och är strategikonsult på Gozinto. Jag söker praktik inom konsulting, AI eller fintech.",
    updatedLabel: "Senast uppdaterad",
    updated: "september 2026",
  },
  contact: {
    heading1: "Har du ett intressant projekt?",
    heading2: "Hör av dig.",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
};
