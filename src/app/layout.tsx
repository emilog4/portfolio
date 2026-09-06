import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://emilo.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emil Lögdberg — Computer Science & Engineering Student",
  description:
    "Portfolio of Emil Lögdberg, a computer science & engineering student at Linköping University building in AI, software, and product. Based in Linköping, Sweden.",
  keywords: [
    "Emil Lögdberg",
    "Computer Science",
    "Software Engineer",
    "Machine Learning",
    "Linköping University",
    "Portfolio",
  ],
  authors: [{ name: "Emil Lögdberg" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Emil Lögdberg — Computer Science & Engineering Student",
    description:
      "Building at the intersection of software, AI, and product. Selected work, experience, and how to get in touch.",
    url: siteUrl,
    siteName: "Emil Lögdberg",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emil Lögdberg — Computer Science & Engineering Student",
    description:
      "Building at the intersection of software, AI, and product. Selected work, experience, and how to get in touch.",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
