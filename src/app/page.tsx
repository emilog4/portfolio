import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { profile, siteUrl } from "@/lib/i18n/profile";

// Structured data so search engines can tell this Emil Lögdberg apart from
// others with the same name. `sameAs` is the field that ties the site to the
// LinkedIn and GitHub profiles as one identity.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/emil-portrait-450.webp`,
  description:
    "Computer Science and Engineering student at Linköping University and strategy consultant at Gozinto Studentkonsulter, working in software, AI, and business analysis.",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Linköping University",
    url: "https://liu.se",
  },
  worksFor: {
    "@type": "Organization",
    name: "Gozinto Studentkonsulter",
    url: "https://gozinto.se",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Linköping",
    addressCountry: "SE",
  },
  knowsLanguage: ["sv", "en"],
  sameAs: [profile.linkedin, profile.github],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
