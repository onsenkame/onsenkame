import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://warrenau.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Warren Au — Full-Stack Developer",
    template: "%s · Warren Au",
  },
  description:
    "Warren Au is a full-stack developer in Los Angeles building thoughtful web products. Rock climbing, archery, and Japan on the side.",
  keywords: [
    "Warren Au",
    "full-stack developer",
    "Los Angeles",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Warren Au", url: siteUrl }],
  creator: "Warren Au",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Warren Au — Full-Stack Developer",
    description:
      "Full-stack developer in Los Angeles. Web products, side projects, and notes.",
    siteName: "Warren Au",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warren Au — Full-Stack Developer",
    description:
      "Full-stack developer in Los Angeles. Web products, side projects, and notes.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a href="#main" className={styles.skip}>
          Skip to content
        </a>
        <header className={styles.header}>
          <Link href="/" className={styles.brand} aria-label="Warren Au — home">
            Warren Au
          </Link>
          <nav aria-label="Primary">
            <ul className={styles.nav}>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="mailto:aukwarren@gmail.com">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main id="main" className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Warren Au</p>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://www.linkedin.com/in/warren-au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/onsenkame"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
