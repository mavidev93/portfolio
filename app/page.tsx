"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "sheet-01", label: "01 PROFILE" },
  { id: "sheet-02", label: "02 EXPERIENCE" },
  { id: "sheet-03", label: "03 SYSTEMS" },
  { id: "sheet-04", label: "04 PROJECTS" },
];

const JOBS = [
  {
    date: "APR 2025 — JUL 2026",
    title: "Front Lead",
    co: "Tabibi-no",
    desc: "Built the core front-end architecture for a health platform: middleware-driven routing, a unified API layer bridging cookie and localStorage token management, and a Turborepo micro-frontend setup sharing one design system across the main site, user dashboard, and doctor dashboard. Drove SEO and Core Web Vitals gains through SSR metadata, JSON-LD, eliminated waterfall requests, and React 19 concurrent APIs. Led code reviews.",
    tags: ["Next.js", "React Query", "Turborepo", "TypeScript"],
  },
  {
    date: "SEP 2023 — MAR 2025",
    title: "Senior Full-Stack Developer",
    co: "Darik Holding",
    desc: "Built the Trasafar CRM dashboard for airline ticketing (up to 30,000 ticket sales in a strong month) with ApexCharts, role management, and TanStack Table. Built the Tractor FC ticketing platform (50,000+ weekly ticket sales) with dynamic forms and a stadium-map seat selector, tuned for performance under high-traffic sale windows — driving the club's ticket page to the #1 Google result. Reviewed PRs across projects.",
    tags: ["Next.js 15", "ApexCharts", "React Hook Form", "TanStack Table"],
  },
  {
    date: "APR 2023 — SEP 2023",
    title: "Senior Front-End Developer",
    co: "Seraj Samaneh",
    desc: "Built an ERP website and dashboard, including a custom component library on MUI and Sass.",
    tags: ["React", "MUI", "Formik", "Sass"],
  },
  {
    date: "JUN 2022 — APR 2023",
    title: "Full-Stack Developer",
    co: "Bonti",
    desc: "Built the product site on Next.js, Redux, and Tailwind. Deployed the Bonti token smart contract with Hardhat and Ether.js, and built a Node.js blockchain microservice for HD wallets, tested with Jest and RTL.",
    tags: ["Solidity", "Hardhat", "Ether.js", "Next.js"],
  },
  {
    date: "MAY 2020 — APR 2022",
    title: "Front-End Developer",
    co: "Media-Soft",
    desc: "Built a social platform for Iranian stock market users with React, Redux, and Socket.io, including real-time data visualization with Highcharts.",
    tags: ["React", "Redux", "Socket.io", "Highcharts"],
  },
];

const SKILL_GROUPS = [
  {
    title: "Core",
    skills: ["JavaScript", "TypeScript", "Solidity", "React", "Next.js", "Redux", "Zustand"],
  },
  {
    title: "Full-stack",
    skills: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "Docker"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "shadcn", "MUI", "Styled Components"],
  },
  {
    title: "Data & Forms",
    skills: ["React Query", "TanStack Table", "React Hook Form", "Formik", "Zod", "Yup"],
  },
  {
    title: "Visualization & Maps",
    skills: ["ApexCharts", "Highcharts", "Leaflet", "Neshan", "TradingView"],
  },
  {
    title: "Testing & Tooling",
    skills: ["Jest", "Playwright", "Mocha", "Chai", "React Testing Library", "Husky", "ESLint", "Figma", "Adobe XD"],
  },
];

const PROJECTS = [
  {
    marker: "A",
    title: "Trasafar CRM Dashboard",
    desc: "Operations dashboard for an airline ticketing business — role management, ApexCharts reporting, and TanStack Table handling up to 30,000 ticket sales a month.",
  },
  {
    marker: "B",
    title: "Tractor FC Ticketing Platform",
    desc: "Stadium-map seat selection and dynamic checkout forms built to hold up under 50,000+ weekly ticket sales, with the club's ticket page ranking #1 on Google.",
  },
  {
    marker: "C",
    title: "Poultry Diet Web Software",
    desc: "A feed-formulation web app for calculating balanced poultry diets.",
  },
  {
    marker: "D",
    title: "Rikas",
    desc: "An AI-driven marketing campaign platform, built on Next.js.",
  },
  {
    marker: "E",
    title: "Vega Link",
    desc: "Landing site for an AI services company.",
  },
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("sheet-01");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div id="progress" style={{ width: `${progress}%` }} />
      <div className="crop tl" />
      <div className="crop tr" />
      <div className="crop bl" />
      <div className="crop br" />

      <nav className="ruler" aria-label="Section navigation">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={activeSection === s.id ? "active" : ""}
            onClick={() => scrollToSection(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <nav className="contact-icons" aria-label="Contact">
        <a href="mailto:you@example.com" aria-label="Email" title="Email">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
          </svg>
        </a>
        <a href="#" aria-label="GitHub" title="GitHub">
          <svg viewBox="0 0 16 16" fill="currentColor" stroke="none">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a href="#" aria-label="LinkedIn" title="LinkedIn">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="7" y1="10" x2="7" y2="16" />
            <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
            <path d="M11 16v-4a2 2 0 0 1 4 0v4" />
            <line x1="11" y1="10" x2="11" y2="16" />
          </svg>
        </a>
      </nav>

      <main>
        <div className="content">
          <section
            className="sheet"
            id="sheet-01"
            ref={(el) => {
              sectionRefs.current["sheet-01"] = el;
            }}
          >
            <div className="sheet-label">
              SHEET 01 <span className="rule" /> PROFILE
            </div>
            <h1>Abdolreza Aqasi</h1>
            <p className="role">SENIOR FRONT-END ENGINEER — REACT / NEXT.JS</p>
            <p className="lede">
              Six-plus years building front-end architecture for high-traffic products — from
              micro-frontend platforms and design systems to data-heavy dashboards and
              blockchain-backed applications. Equally comfortable owning the full stack when a
              project calls for it.
            </p>
            <div className="status-line">
              <span>
                <b>Status</b> — Open to work
              </span>
              <span>
                <b>Languages</b> — English, Azerbaijani Turkish, Farsi
              </span>
              <span>
                <b>Education</b> — Mechanical Engineering, Tabriz University
              </span>
              <span>
                <b>Rev</b> — 2026.09
              </span>
            </div>
          </section>

          <section
            className="sheet"
            id="sheet-02"
            ref={(el) => {
              sectionRefs.current["sheet-02"] = el;
            }}
          >
            <div className="sheet-label">
              SHEET 02 <span className="rule" /> EXPERIENCE
            </div>

            {JOBS.map((job) => (
              <div className="job" key={job.co}>
                <div className="job-head">
                  <span className="job-date">{job.date}</span>
                </div>
                <h3 className="job-title">
                  {job.title} <span className="co">· {job.co}</span>
                </h3>
                <p className="job-desc">{job.desc}</p>
                <div className="tags">
                  {job.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section
            className="sheet"
            id="sheet-03"
            ref={(el) => {
              sectionRefs.current["sheet-03"] = el;
            }}
          >
            <div className="sheet-label">
              SHEET 03 <span className="rule" /> SYSTEMS
            </div>

            {SKILL_GROUPS.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section
            className="sheet"
            id="sheet-04"
            ref={(el) => {
              sectionRefs.current["sheet-04"] = el;
            }}
          >
            <div className="sheet-label">
              SHEET 04 <span className="rule" /> PROJECTS
            </div>

            {PROJECTS.map((project) => (
              <div className="project" key={project.marker}>
                <div className="marker">{project.marker}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
