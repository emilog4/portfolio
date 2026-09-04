import type { Dictionary } from "./types";

export const sv: Dictionary = {
  meta: {
    title: "Emil Lögdberg — Civilingenjörsstudent i Datateknik",
    description:
      "Portfolio för Emil Lögdberg, civilingenjörsstudent i Datateknik vid Linköpings universitet som bygger inom AI, mjukvara och produkt. Baserad i Linköping.",
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
      "Jag bygger saker i skärningspunkten mellan mjukvara, AI och affär. Jag kombinerar mitt intresse för ekonomi, teknik och innovation.",
    description:
      "Tredjeårsstudent på civilingenjörsprogrammet i Datateknik vid Linköpings universitet, som just nu bygger autonoma system, webbprodukter och allt däremellan.",
    availability: "Öppen för praktik & frilansuppdrag",
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
      "Jag är 22, ursprungligen från Stockholm, och går nu mitt tredje år på civilingenjörsprogrammet i Datateknik vid Linköpings universitet. Jag gillar att plocka isär saker för att förstå hur de fungerar — oavsett om det är en robot, en webbsida eller en plan för en resa.",
      "Vid sidan av studierna jobbar jag som strategikonsult på Gozinto Studentkonsulter, LiU:s studentdrivna konsultbyrå — där jag bland annat byggt en skräddarsydd onboardingportal åt en klientorganisation med 500+ medlemmar och gjort marknadsundersökningar för att hjälpa kunder argumentera för sin egen tillväxt. Innan dess jobbade jag några år som kundrådgivare på ett apotek, och en sommar bakom disken på McDonald's — jag har mött kunder längre än jag har skrivit kod.",
      "När jag inte sitter vid tangentbordet lagar jag oftast mat, spelar tennis eller åker skidor — jag gillar saker som belönar tålamod och upprepning precis lika mycket som kod gör. Ett utbyte till Portugal genom Erasmus under gymnasiet är fortfarande ett av mina bättre beslut.",
      "På sikt siktar jag mot konsulting, AI eller fintech — helst någon blandning av alla tre. Jag bryr mig om att bygga mjukvara som faktiskt används, inte bara demas.",
    ],
  },
  strengths: [
    {
      title: "Flexibel och gillar utmaningar",
      detail: "Bekväm med att byta riktning när ett projekt kräver det.",
    },
    {
      title: "Motiverad att lära",
      detail: "Söker ständigt nya verktyg, domäner och problem.",
    },
    {
      title: "Kundnära av erfarenhet",
      detail:
        "Från apoteksrådgivning till strategikonsulting på Gozinto — bekväm med att översätta mellan tekniska och icke-tekniska målgrupper.",
    },
    {
      title: "Betrodd med verkligt ansvar",
      detail:
        "Skötte bokföring och IT-verktyg åt Gozintos ledning och representerar min klass i fakultetens kursutvärderingsmöten.",
    },
  ],
  work: {
    heading: "Några saker jag har byggt och bygger just nu.",
    roleLabel: "Roll",
    outcomeLabel: "Resultat",
  },
  projects: [
    {
      id: "taxi-robot",
      name: "Autonom Taxirobot",
      year: "2026",
      status: "Pågående",
      description:
        "En robot som kör autonomt mellan upphämtningsområden och väljer den kortaste vägen för att plocka upp passagerare på vägen. Byggd som ett universitetsprojekt tillsammans med sex andra studenter.",
      role: "Bildigenkänning & maskininlärning",
      tech: ["Datorseende", "Maskininlärning", "Robotik"],
      outcome: "Under utveckling tillsammans med sex andra studenter.",
    },
    {
      id: "vacation-optimizer",
      name: "Semesteroptimering",
      year: "2026",
      status: "Utvalt",
      description:
        "Ett enkelsidigt verktyg som räknar ut Sveriges röda dagar och klämdagar för valfritt år, och sedan rankar de mest effektiva semesterdagarna att ta ut — de kombinationer som ger flest lediga dagar för minsta möjliga antal semesterdagar.",
      role: "Idé & utveckling",
      tech: ["JavaScript", "HTML & CSS"],
      outcome: "En fungerande planerare som gör om ett fåtal semesterdagar till hela veckor ledigt, baserat på Sveriges faktiska helgdagskalender.",
      link: "/tools/semesteroptimering.html",
      linkLabel: "Öppna planeraren",
    },
    {
      id: "budapest-spots",
      name: "Budapest Spots",
      year: "2026",
      description:
        "En resesida byggd för en vänskapskrets resa till Budapest: en livekarta över alla restauranger och aktiviteter på listan, plus en poängtävling där vänner tilldelar varandra utmaningar att slutföra på resan.",
      role: "Produktledare & utvecklare",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      outcome: "Användes av hela gruppen för att planera och gamifiera resan.",
      link: "http://emilo.se",
      linkLabel: "emilo.se",
    },
    {
      id: "tetris",
      name: "Tetris",
      year: "2024",
      description:
        "En komplett Tetris-implementation byggd från grunden för en kurs i objektorienterad programmering — förflyttning och rotation av block, kollisionsdetektering, radrensning och tidsstyrda fall, uppdelat i tydligt separerade klasser för bräde, block, spellogik och gränssnitt.",
      role: "Utvecklare",
      tech: ["Java", "Objektorienterad design"],
      outcome: "Ett fullt spelbart spel med modulär, utbyggbar arkitektur.",
    },
  ],
  experience: [
    {
      org: "Gozinto Studentkonsulter",
      role: "Strategikonsult",
      dates: "sep 2024 – nu",
      description:
        "Levererar marknadsanalys, affärsanalys och webbutveckling åt klientföretag — bland annat en skräddarsydd onboardingportal åt en klientorganisation med 500+ medlemmar och marknadsundersökningar som hjälper kunder argumentera för sin egen tillväxt. Ansvarar även för intern bokföring och IT-verktyg, samt leder onboarding av nya medlemmar.",
    },
    {
      org: "Apoteket AB, Mörby Centrum",
      role: "Rådgivare",
      dates: "dec 2022 – aug 2024, sommaren 2025",
      description:
        "Rådgav kunder om egenvård och receptfria läkemedel, jobbade i kassan och hanterade leveranser och påfyllning — några års daglig träning i att förstå vad folk faktiskt behöver.",
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
    text: "Avslutar mitt tredje år på Linköpings universitet, bygger en autonom taxirobot tillsammans med sex andra studenter, och jobbar som strategikonsult på Gozinto. Blickar framåt mot praktik inom konsulting, AI eller fintech.",
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
