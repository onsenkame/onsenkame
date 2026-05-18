import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Warren Au — full-stack developer in Los Angeles. Background, interests, and how to reach me.",
};

export default function AboutPage() {
  return (
    <article className={styles.article}>
      <h1 className={styles.h1}>About</h1>
      <p>
        I'm Warren, a full-stack developer based in Los Angeles. I'm good at
        building and leading small teams under pressure, comfortable working
        across cultures and languages, and most at home translating real-world
        observations into functional, honest design.
      </p>
      <p>
        I lean React/Next.js on the frontend, Node and PostgreSQL on the back,
        and I've shipped React Native on mobile. Lately I've been pulled toward
        ecommerce, internal tooling, and small interactive games.
      </p>
      <h2 className={styles.h2}>Outside of code</h2>
      <p>
        Rock climbing, archery, and Japan — usually in that order, sometimes in
        reverse.
      </p>
      <h2 className={styles.h2}>Contact</h2>
      <ul className={styles.contact}>
        <li>
          Email:{" "}
          <a href="mailto:aukwarren@gmail.com">aukwarren@gmail.com</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/warren-au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            warren-au
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/onsenkame"
            target="_blank"
            rel="noopener noreferrer"
          >
            onsenkame
          </a>
        </li>
      </ul>
    </article>
  );
}
