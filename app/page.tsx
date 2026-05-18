import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiVite,
  SiFramer,
  SiNodedotjs,
  SiTypescript,
  SiGraphql,
  SiSass,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { FaGithub, FaGlobe, FaAws } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import styles from "./page.module.css";

const stack = [
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { Icon: SiVite, name: "Vite", color: "#646CFF" },
  { Icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#8cc84b" },
];

const learning = [
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { Icon: SiSass, name: "Sass", color: "#CC6699" },
  { Icon: SiDocker, name: "Docker", color: "#0db7ed" },
  { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { Icon: FaAws, name: "AWS", color: "#FF9900" },
];

type Project = {
  tags: string[];
  title: string;
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    tags: ["React", "Next.js", "CSS", "MongoDB"],
    title: "HuaXuan Web portfolio and store",
    github: "https://github.com/onsenkame/huaxuan",
    live: "https://huaxuann.com",
  },
  {
    tags: ["React", "JavaScript", "Socket.io"],
    title: "Scribble Me This game",
    github: "https://github.com/Scribble-Me-This/2022-Scribble-Me-This",
    live: "https://www.youtube.com/watch?v=eNn01r9uogw",
  },
  {
    tags: ["React", "JavaScript", "Next.js", "TailwindCSS"],
    title: "Portfolio site",
    github: "https://github.com/onsenkame/design_warren",
    live: "https://www.warrenau.dev",
  },
];

const process = [
  {
    title: "Meeting",
    body: "The first step is to hold a meeting to discuss expectations, objectives and project requirements. We will determine the scope of the project, the resources required, and the project delivery schedule.",
  },
  {
    title: "Prototyping",
    body: "With the action plan solidified, we shift our focus to wireframes. Through Excalidraw, we will go through mockups to get an image of what your website will look like with chosen colors and fonts. We will also prepare styling adapted for all devices while prioritizing usability.",
  },
  {
    title: "SEO and content",
    body: "The next step is to implement an SEO and content strategy to help improve a website's visibility in search engine results, which can generate more traffic and improve the quality of visitors. A well-structured content strategy contributes to healthier and longer site growth.",
  },
  {
    title: "Development phase",
    body: "Once the design has been approved, the layout will be designed in the test environment and all the functionalities will be implemented so that the website takes shape. In the case that a website with SEO and content has been contracted, they will also be applied in this phase.",
  },
  {
    title: "Test phase",
    body: "You want a beautiful website, but you also want it to work perfectly, so in this phase we do all kinds of tests to make sure it's fast, accessible, intuitive, secure, with a good responsive design, etc.",
  },
  {
    title: "Migration",
    body: "You are done! Congratulations, you have a website created by me. You will also have the option to hire my web maintenance service, so that it is always updated and ready.",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroText}>
          <h1 id="hero-title" className={styles.name}>
            Warren Au
          </h1>
          <p className={styles.role}>Fullstack Developer</p>
        </div>
        <div className={styles.portraitWrap}>
          <Image
            src="/portrait.png"
            alt="Warren Au"
            width={378}
            height={504}
            priority
            className={styles.portrait}
          />
        </div>
      </section>

      <section className={styles.stackSection} aria-labelledby="stack-heading">
        <h2 id="stack-heading" className={styles.label}>
          Current favorite tech stack/tools:
        </h2>
        <ul className={styles.iconRow}>
          {stack.map(({ Icon, name, color }) => (
            <li key={name} title={name}>
              <Icon
                className={styles.icon}
                style={{ color }}
                aria-label={name}
              />
            </li>
          ))}
        </ul>
        <h2 id="learning-heading" className={`${styles.label} ${styles.labelTight}`}>
          I am currently learning or interested in learning:
        </h2>
        <ul className={styles.iconRow}>
          {learning.map(({ Icon, name, color }) => (
            <li key={name} title={name}>
              <Icon
                className={styles.icon}
                style={{ color }}
                aria-label={name}
              />
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className={styles.section} aria-labelledby="about-heading">
        <h2 id="about-heading" className={styles.h2}>
          About me
        </h2>
        <p className={styles.prose}>
          I started web development in 2022 after returning from an extended
          teaching experience in Japan as the COVID-19 pandemic started to
          normalize. Witnessing the importance of web usability and
          accessibility in the face of a global pandemic, I decided to pursue a
          career in web development.
        </p>
        <p className={styles.prose}>
          <a href="#contact" className={styles.inlineLink}>
            Contact me
          </a>{" "}
          if you are interested in working with me on a project or if you have
          any general questions about me :)
        </p>
      </section>

      <section id="projects" className={styles.section} aria-labelledby="projects-heading">
        <h2 id="projects-heading" className={styles.h2}>
          Top projects
        </h2>
        <p className={styles.prose}>
          These are my favorite projects! They had fun complex problems and I'm
          quite proud of them. If you want to see all my projects go to my{" "}
          <a
            href="https://github.com/onsenkame"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            GitHub
          </a>
          .
        </p>
        <ul className={styles.projectGrid}>
          {projects.map((p) => (
            <li key={p.title} className={styles.projectCard}>
              <div className={styles.projectThumb} aria-hidden="true" />
              <div className={styles.projectBody}>
                <p className={styles.projectTags}>{p.tags.join(" - ")}</p>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <div className={styles.projectLinks}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live`}
                    >
                      <FaGlobe />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="process" className={styles.section} aria-labelledby="process-heading">
        <h2 id="process-heading" className={styles.h2}>
          My work process
        </h2>
        <ol className={styles.processList}>
          {process.map((step, i) => (
            <li key={step.title} className={styles.processItem}>
              <h3 className={styles.processTitle}>
                <span className={styles.processNum}>{i + 1}</span> - {step.title}
              </h3>
              <p className={styles.processBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className={styles.section} aria-labelledby="contact-heading">
        <h2 id="contact-heading" className={styles.h2}>
          Contact me
        </h2>
        <div className={styles.contactCards}>
          <a href="mailto:aukwarren@gmail.com" className={styles.contactCard}>
            <h3 className={styles.contactCardTitle}>Email</h3>
            <p className={styles.contactCardBody}>aukwarren@gmail.com</p>
          </a>
          <a href="mailto:aukwarren@gmail.com" className={styles.contactCard}>
            <h3 className={styles.contactCardTitle}>Phone</h3>
            <p className={styles.contactCardBody}>Email preferred :)</p>
          </a>
        </div>
        <form
          className={styles.form}
          action="mailto:aukwarren@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label className={styles.visuallyHidden} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className={`${styles.input} ${styles.full}`}
            required
          />
          <label className={styles.visuallyHidden} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <label className={styles.visuallyHidden} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone (optional)"
            className={styles.input}
          />
          <label className={styles.visuallyHidden} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className={`${styles.textarea} ${styles.full}`}
            rows={5}
            required
          />
          <button type="submit" className={styles.send}>
            Send <HiArrowRight aria-hidden />
          </button>
        </form>
      </section>
    </>
  );
}
