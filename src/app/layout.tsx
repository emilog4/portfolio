import type { Metadata, Viewport } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Dot-matrix face for the ticket route codes and the email address.
const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

const siteUrl = "https://emilo.se";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emil Lögdberg — Computer Science & Engineering Student",
  description:
    "Portfolio of Emil Lögdberg, a computer science & engineering student at Linköping University. Free for a summer internship in June to August 2027. Based in Linköping, Sweden.",
  keywords: [
    "Emil Lögdberg",
    "Computer Science and Engineering",
    "Software Engineer",
    "Internship",
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
      "Computer science & engineering student at Linköping University, free for a summer internship in 2027. Projects, experience and how to get in touch.",
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
      "Computer science & engineering student at Linköping University, free for a summer internship in 2027. Projects, experience and how to get in touch.",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${doto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
