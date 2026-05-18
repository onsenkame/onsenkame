import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaintBrush,
  FaBook,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
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
    default: "Warren Au — Fullstack Developer",
    template: "%s · Warren Au",
  },
  description:
    "Warren Au is a fullstack developer in Los Angeles building thoughtful web products. Rock climbing, archery, and Japan on the side.",
  authors: [{ name: "Warren Au", url: siteUrl }],
  creator: "Warren Au",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Warren Au — Fullstack Developer",
    description:
      "Fullstack developer in Los Angeles. Web products, side projects, and notes.",
    siteName: "Warren Au",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warren Au — Fullstack Developer",
    description:
      "Fullstack developer in Los Angeles. Web products, side projects, and notes.",
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <a href="#main" className={styles.skip}>
          Skip to content
        </a>
        <div className={styles.copperRing} aria-hidden="true" />
        <header className={styles.header}>
          <Link href="/" className={styles.brand} aria-label="Warren Au — home">
            Warren Au
          </Link>
          <nav aria-label="Primary" className={styles.navWrap}>
            <ul className={styles.nav}>
              <li>
                <Link href="/" className={`${styles.pill} ${styles.pillActive}`}>
                  home
                </Link>
              </li>
              <li>
                <a href="#about" className={styles.pill}>
                  about
                </a>
              </li>
              <li>
                <a href="#projects" className={styles.pill}>
                  projects
                </a>
              </li>
              <li>
                <a href="#process" className={styles.pill}>
                  design
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.pill}>
                  blog
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main id="main" className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <ul className={styles.footerCol}>
            <li>
              <Link href="/">
                <FaHome aria-hidden /> Home
              </Link>
            </li>
            <li>
              <a href="#about">
                <FaUser aria-hidden /> About
              </a>
            </li>
            <li>
              <a href="#projects">
                <FaBriefcase aria-hidden /> Projects
              </a>
            </li>
          </ul>
          <ul className={styles.footerCol}>
            <li>
              <a
                href="https://github.com/onsenkame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/warren-au"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin aria-hidden /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/onyumesen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter aria-hidden /> Twitter
              </a>
            </li>
          </ul>
          <ul className={styles.footerCol}>
            <li>
              <a href="#contact">
                <FaBook aria-hidden /> Blog
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaEnvelope aria-hidden /> Contact
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaFileAlt aria-hidden /> My CV
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
