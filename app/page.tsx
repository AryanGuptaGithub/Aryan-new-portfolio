"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (blob) {
        blob.style.transform = `translate(${e.clientX - 175}px, ${e.clientY - 175}px)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const clientProjects = [
    {
      num: "001",
      type: "E-Commerce / Full Stack",
      title: "E-Commerce Suite",
      subtitle: "3 Live Stores",
      desc: "InstaPeels, Nezal Herbocare & LinkN Smile — multi-brand skincare platforms, Ayurvedic e-commerce, and a B2B/B2C Indian marketplace. All SEO-optimised, serving real paying customers.",
      tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "Firebase", "Razorpay"],
      year: "2024—Now",
      link: "#",
      featured: true,
    },
    {
      num: "002",
      type: "Mobile / React Native",
      title: "LinkN Smile",
      subtitle: "Cross-Platform App",
      desc: "Companion mobile app for the LinkN Smile marketplace. Product browsing, seller listings, cart, order tracking, and push notifications on iOS & Android.",
      tech: ["React Native", "Node.js", "MongoDB", "REST APIs", "FCM"],
      year: "2024—Now",
      link: "#",
    },
    {
      num: "003",
      type: "CRM / International",
      title: "Cambodia Field CRM",
      subtitle: "Web & Mobile",
      desc: "Full CRM platform and mobile app for a Cambodian healthcare client. Field MRs log GPS-tagged doctor visits, submit call reports, and sync data offline-capable.",
      tech: ["React.js", "React Native", "Node.js", "MongoDB", "REST APIs"],
      year: "2024—Now",
      link: "#",
    },
    {
      num: "004",
      type: "Internal Platform",
      title: "DataCloud CRM",
      subtitle: "Internal Platform",
      desc: "Centralised CRM and data management platform for Zap Solutions. Role-based access, data visualisation dashboards, and scalable project pipeline tracking.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      year: "2024—Now",
      link: "#",
    },
  ];

  const personalProjects = [
    {
      num: "005",
      type: "Mobile / Security",
      title: "Crypkey",
      subtitle: "Password Manager",
      desc: "Secure mobile password manager with AES-encrypted vault, biometric authentication, and password generator. Built with production security standards.",
      tech: ["React Native", "AES Encryption", "Biometric Auth", "AsyncStorage"],
      year: "2024",
      link: "#",
    },
    {
      num: "006",
      type: "Full Stack / MERN",
      title: "Job Portal",
      subtitle: "Full Stack App",
      desc: "Role-based dashboards for Job Seekers, Recruiters, and Admins. Job posting, application tracking, resume upload, and integrated Resume Maker.",
      tech: ["MERN Stack", "Tailwind CSS", "Passport.js", "JWT"],
      year: "2024",
      link: "https://full-stack-job-protal-web-applicati.vercel.app/jobs",
    },
  ];

  const skills = [
    {
      cat: "Frontend",
      items: ["React.js", "Next.js", "React Native", "HTML5 / CSS3", "Tailwind CSS", "Framer Motion", "Bootstrap"],
    },
    {
      cat: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "Passport.js", "JWT / OAuth", "Firebase"],
    },
    {
      cat: "Database & Tools",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Prisma", "Redis", "Docker"],
    },
    {
      cat: "Languages & Other",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Kotlin", "Git / GitHub", "AWS / Vercel", "Figma"],
    },
  ];

  return (
    <>
      <div className="cursor-blob" ref={blobRef} />

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">Aryan Gupta ©26</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg-text">AG</div>

        <div className="hero-content">
          <p className="hero-tag">Full Stack Developer · Mumbai, India</p>
          <h1 className="hero-name">
            Aryan<br />
            <span className="outline">Gupta</span>
          </h1>
          <div className="hero-sub">
            <p className="hero-desc">
              Shipping production-grade web and mobile applications for real clients across India and Southeast Asia. MERN stack · Next.js · React Native.
            </p>
            <a href="mailto:aryangupta.forwork@gmail.com" className="hero-cta">
              Hire Me →
            </a>
          </div>
        </div>

        <Image
          src="/103.jpg"
          alt="Aryan Gupta"
          width={380}
          height={500}
          className="hero-photo "
          priority
        />

        <div className="hero-scroll">Scroll</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-inner">
          {[...Array(6)].map((_, i) => (
            <span key={i}>
              Full Stack Development <em>✦</em> &nbsp; React Native <em>✦</em> &nbsp; Next.js <em>✦</em> &nbsp; MERN Stack <em>✦</em> &nbsp; E-Commerce <em>✦</em> &nbsp; CRM Systems <em>✦</em> &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div>
          <p className="about-label reveal">Who I Am</p>
          <h2 className="about-headline reveal">Building Digital Products That Scale.</h2>
        </div>
        <div className="about-right">
          <p className="about-body reveal">
            I&apos;m a <strong>Full Stack Developer</strong> with 1.5+ years of professional experience at <strong>Zap Solutions</strong>, delivering production-grade web and mobile applications for clients across India and Southeast Asia.
            <br /><br />
            I work across the full product lifecycle — from requirements and UI/UX all the way through backend architecture, deployment, and post-launch support. I&apos;m passionate about <strong>clean code, scalable systems</strong>, and integrating modern AI tooling into real products.
          </p>
          <div className="stats-row reveal">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Client Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1.5</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-header">
          <div>
            <p className="section-label">Work History</p>
            <h2 className="section-title">Experience</h2>
          </div>
          <span className="section-count">02 Roles</span>
        </div>

        <div className="exp-list">
          <div className="exp-item reveal">
            <div className="exp-date">Jan 2024<br />— Present</div>
            <div>
              <div className="exp-title">Full Stack Developer</div>
              <div className="exp-company">Zap Solutions · Mumbai</div>
              <ul className="exp-points">
                <li>Delivered 5+ client-facing production projects — e-commerce, CRM, and cross-platform mobile apps — serving users across India and Southeast Asia.</li>
                <li>Worked across the full product lifecycle: requirements, UI/UX, backend API, deployment, and post-launch support.</li>
                <li>Built and maintained the company&apos;s own agency website (zapsolutions.vercel.app).</li>
              </ul>
            </div>
            <div className="exp-stack">
              {["Next.js", "React Native", "Node.js", "MongoDB", "Firebase", "Tailwind"].map(t => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="exp-item reveal">
            <div className="exp-date">Apr 2022<br />— Feb 2023</div>
            <div>
              <div className="exp-title">Faculty — Electrical & Electronics</div>
              <div className="exp-company">Skill Mumbai · Mumbai</div>
              <ul className="exp-points">
                <li>Designed and delivered curriculum for Electrical & Electronics courses — online and offline.</li>
                <li>Led the department; strong student feedback contributed to significant growth during tenure.</li>
                <li>Launched course in Basic Electrical and Electronics on the E-learning portal.</li>
              </ul>
            </div>
            <div className="exp-stack">
              {["Curriculum Design", "EdTech", "Instructional Design"].map(t => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-header">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <span className="section-count">06 Projects</span>
        </div>

        <div className="projects-grid">
          {/* Featured */}
          <a
            href={clientProjects[0].link}
            className="project-card featured reveal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <div className="project-num">{clientProjects[0].num}</div>
              <div className="project-type">{clientProjects[0].type}</div>
              <div className="project-title">{clientProjects[0].title}</div>
              <div className="project-desc">{clientProjects[0].desc}</div>
              <div className="project-footer">
                <span className="project-year">{clientProjects[0].year}</span>
              </div>
            </div>
            <div>
              <div className="featured-tech">
                {clientProjects[0].tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 30, fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.8 }}>
                <strong style={{ color: "var(--fg)", display: "block", marginBottom: 8 }}>Stores shipped:</strong>
                InstaPeels · Nezal Herbocare · LinkN Smile
              </div>
            </div>
          </a>

          {/* Other client projects */}
          {clientProjects.slice(1).map((p) => (
            <a
              key={p.num}
              href={p.link}
              className="project-card reveal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-num">{p.num}</div>
              <div className="project-type">{p.type}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-footer">
                <span className="project-year">{p.year}</span>
                <div className="project-arrow">→</div>
              </div>
            </a>
          ))}

          {/* Personal projects */}
          {personalProjects.map((p) => (
            <a
              key={p.num}
              href={p.link}
              className="project-card reveal"
              target={p.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <div className="project-num">{p.num} — Personal</div>
              <div className="project-type">{p.type}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-footer">
                <span className="project-year">{p.year}</span>
                <div className="project-arrow">→</div>
              </div>
            </a>
          ))}

          {/* More coming */}
          <div className="project-card" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300, borderTop: "none" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--syne)", fontSize: "4rem", fontWeight: 800, color: "var(--gray-light)", lineHeight: 1 }}>+</div>
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 3, color: "var(--muted)", marginTop: 16 }}>More Projects Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-header">
          <div>
            <p className="section-label">Tech Stack</p>
            <h2 className="section-title">Skills</h2>
          </div>
          <span className="section-count">15+ Technologies</span>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.cat} className="skill-category reveal">
              <div className="skill-cat-label">{s.cat}</div>
              <ul className="skill-list">
                {s.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-header">
          <div>
            <p className="section-label">Background</p>
            <h2 className="section-title">Education</h2>
          </div>
        </div>
        <div className="edu-list">
          {[
            { year: "2022—25", degree: "Bachelor of Computer Application", school: "Yashwantrao Chavan Open University, Nasik", badge: "BCA" },
            { year: "2021", degree: "Diploma in Electrical Engineering", school: "Rustomjee Academy For Global Careers, Thane", badge: "Diploma" },
            { year: "2025", degree: "Full Stack Web Dev + Gen AI", school: "Coding Ninjas", badge: "Cert." },
            { year: "2025", degree: "System Design & DBMS", school: "Coding Ninjas", badge: "Cert." },
            { year: "2022", degree: "Diploma in Digital Electronics Security", school: "Skill Mumbai", badge: "Cert." },
          ].map((e, i) => (
            <div key={i} className="edu-item reveal">
              <div className="edu-year">{e.year}</div>
              <div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
              </div>
              <div className="edu-badge">{e.badge}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact">
        <div className="contact-cta reveal">
          <a href="mailto:aryangupta.forwork@gmail.com">
            Let&apos;s<br />Work
            <span className="cta-sub">aryangupta.forwork@gmail.com</span>
          </a>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Aryan Gupta</div>
          <ul className="footer-links">
            <li><a href="https://github.com/AryanGuptaGithub" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="tel:+919372996855">+91 93729 96855</a></li>
          </ul>
          <div>Mumbai, India</div>
        </div>
      </footer>
    </>
  );
}
