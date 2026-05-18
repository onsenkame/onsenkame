import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Hi, I'm Warren 👋</p>
        <h1 className={styles.title}>
          Full-stack developer building thoughtful web products from Los Angeles.
        </h1>
        <p className={styles.lede}>
          I work across React, Next.js, Node, and PostgreSQL. Outside of code,
          I'm usually rock climbing, shooting a bow, or planning the next trip
          to Japan.
        </p>
        <div className={styles.ctas}>
          <Link href="/projects" className={styles.primary}>
            See projects
          </Link>
          <a href="mailto:aukwarren@gmail.com" className={styles.secondary}>
            Get in touch
          </a>
        </div>
      </section>

      <section aria-labelledby="stack-heading" className={styles.section}>
        <h2 id="stack-heading" className={styles.h2}>
          Stack
        </h2>
        <ul className={styles.stack}>
          <li>TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>PostgreSQL</li>
          <li>React Native</li>
          <li>AWS / Vercel</li>
        </ul>
      </section>
    </>
  );
}
