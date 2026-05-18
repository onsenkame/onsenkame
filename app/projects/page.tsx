import type { Metadata } from "next";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work and side projects by Warren Au — full-stack web and mobile.",
};

type Project = {
  name: string;
  blurb: string;
  href: string;
  stack: string[];
};

const projects: Project[] = [
  {
    name: "HuaXuan",
    blurb: "Storefront project exploring Next.js for ecommerce.",
    href: "https://github.com/onsenkame/huaxuan",
    stack: ["Next.js", "TypeScript"],
  },
  {
    name: "Next War Ecomm",
    blurb: "Test run of Next.js 14 ecommerce with admin and client surfaces.",
    href: "https://github.com/onsenkame/next-war-ecomm-store",
    stack: ["Next.js 14", "Stripe", "Prisma"],
  },
  {
    name: "Alignment Game",
    blurb: "Small interactive game project.",
    href: "https://github.com/onsenkame/AlignmentGame",
    stack: ["JavaScript"],
  },
  {
    name: "To What Ends",
    blurb: "Narrative game prototype — how would you fare in another world?",
    href: "https://github.com/onsenkame/ToWhatEnds",
    stack: ["JavaScript", "Game design"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <h1 className={styles.h1}>Projects</h1>
      <p className={styles.intro}>
        A handful of things I've built or am building. More on{" "}
        <a
          href="https://github.com/onsenkame"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
      <ul className={styles.list}>
        {projects.map((p) => (
          <li key={p.name} className={styles.item}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <h2 className={styles.name}>{p.name}</h2>
              <p className={styles.blurb}>{p.blurb}</p>
              <ul className={styles.stack} aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
