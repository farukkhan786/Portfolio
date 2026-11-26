
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Mail,
  Download,
  CheckCircle2,
  Bug,
  Code2,
  Smartphone,
  Workflow,
  Menu
} from 'lucide-react';
import './style.css';

const skills = [
  ['Manual Testing', 'Functional · Regression · Smoke · Sanity · UAT'],
  ['Automation', 'Selenium WebDriver · Playwright · Appium'],
  ['Languages', 'Java · JavaScript'],
  ['API Testing', 'Postman · REST API validation'],
  ['Frameworks', 'TestNG · Page Object Model'],
  ['Tools', 'JIRA · Git · GitHub · Jenkins · Maven'],
  ['Mobile QA', 'Android · UI & compatibility testing'],
  ['Database', 'MySQL · data validation'],
];

const projects = [
  {
    name: 'Nikah.com',
    type: 'Web & Mobile Application · Matrimony',
    desc: 'Quality assurance for web and Android experiences, covering core user journeys, functional behavior, regression checks, and mobile app validation.',
    tags: ['Manual QA', 'Selenium', 'Appium', 'Postman'],
    icon: Smartphone
  },
  {
    name: '1RupeeMatrimony.com',
    type: 'Web Application · Matrimony',
    desc: 'Tested web workflows, UI behavior, forms, navigation, and business functionality. Supported defect reporting, retesting, and release regression.',
    tags: ['Manual QA', 'Playwright', 'JavaScript', 'API Testing'],
    icon: Bug
  },
];

function App()  {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home">FarukKhan<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact">
            Contact <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" /> OPEN TO QA OPPORTUNITIES
            </div>

            <h1>
              Hi, I'm FarukKhan.<br />
              <span>I test. I automate.<br />I improve quality.</span>
            </h1>

            <p className="lead">
              QA Engineer with 4 years of experience in Manual & Automation Testing of web and mobile applications.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="btn secondary" href="#contact">
                Let's connect <Mail size={17} />
              </a>
            </div>

            <div className="socials">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <ArrowUpRight size={17} /> LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Code2 size={17} /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit1"></div>
            <div className="orbit orbit2"></div>

            <div className="quality-card">
              <div className="card-top">
                <span className="mini-label">QUALITY STATUS</span>
                <span className="status">● LIVE</span>
              </div>

              <div className="check-icon">
                <CheckCircle2 size={45} />
              </div>

              <h3>Quality first.</h3>
              <p>Reliable software starts with thoughtful testing.</p>

              <div className="card-footer">
                <span>QA mindset</span>
                <span>✦</span>
                <span>Automation</span>
                <span>✦</span>
                <span>Detail</span>
              </div>
            </div>

            <div className="float-chip chip-a">
              <Bug size={16} /> Bug detective
            </div>
            <div className="float-chip chip-b">
              <Code2 size={16} /> Test automation
            </div>
          </div>
        </section>

        <section className="stats">
          <div><strong>4<span>+</span></strong><small>Years in QA</small></div>
          <div><strong>2</strong><small>Featured projects</small></div>
          <div><strong>Web <span>&</span> Mobile</strong><small>Testing experience</small></div>
          <div><strong>QA <span>+</span> Automation</strong><small>Quality approach</small></div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Quality is not just<br />a checkbox.</h2>
          </div>

          <div className="about-text">
            <p>
              I’m a QA Engineer focused on delivering dependable user experiences through careful testing, clear communication, and practical automation. I enjoy exploring how applications behave, finding edge cases, and helping teams ship with confidence.
            </p>
            <p>
              My experience spans web and mobile testing, test design, defect lifecycle management, API validation, and automation tools. I work closely with developers and product teams through Agile workflows.
            </p>

            <div className="about-pills">
              <span>Curious mindset</span>
              <span>Detail-oriented</span>
              <span>Continuous learner</span>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / SKILLS</p>
            <h2>Tools in my<br />QA toolbox.</h2>
            <p className="muted">A mix of hands-on testing, automation, and collaboration tools.</p>
          </div>

          <div className="skills-grid">
            {skills.map(([title, detail]) => (
              <article className="skill" key={title}>
                <Workflow size={19} />
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED PROJECTS</p>
            <h2>Work that I<br />helped quality-check.</h2>
          </div>

          <div className="project-grid">
            {projects.map(({ name, type, desc, tags, icon: Icon }, i) => (
              <article className="project-card" key={name}>
                <div className="project-number">PROJECT 0{i + 1}</div>
                <div className="project-icon"><Icon size={25} /></div>
                <h3>{name}</h3>
                <p className="project-type">{type}</p>
                <p className="project-desc">{desc}</p>

                <div className="tags">
                  {tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>My QA journey.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-dot"></div>
            <div>
              <p className="eyebrow">CURRENT ROLE · CHENNAI, INDIA</p>
              <h3>QA Engineer / Senior QA Automation Engineer</h3>
              <h4>Sahal Webads Private Limited</h4>
              <p className="muted">
                Manual & automation testing of web and mobile products, test design and execution, defect tracking, API checks, and collaboration in development cycles.
              </p>
              <div className="tags">
                <span>Manual QA</span>
                <span>Automation</span>
                <span>Agile</span>
                <span>Web & Mobile</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Let's make software<br /><span>better together.</span></h2>
          <p>
            Open to Software Tester, QA Engineer, QA Automation, and Test Analyst opportunities.
          </p>

          <div className="contact-actions">
            <a className="btn primary" href="mailto:YOUR_EMAIL@example.com">
              Email me <ArrowUpRight size={17} />
            </a>
            <a className="btn secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-note">
            Replace the email and profile links with your actual contact details.
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Faruk Khan</span>
        <span>Built with React · Designed for quality</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
