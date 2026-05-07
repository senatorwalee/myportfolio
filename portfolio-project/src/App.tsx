import type { CSSProperties } from 'react'

import { ThemeToggle } from './components/ThemeToggle'
import { portfolioContent } from './content'
import { useTheme } from './hooks/useTheme'
import './App.css'

const navigation = [
  { label: 'Strengths', href: '#strengths' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const revealStyle = (delay: number): CSSProperties =>
  ({ '--delay': delay } as CSSProperties)

function App() {
  const { themeMode, resolvedTheme, setThemeMode } = useTheme()
  const {
    profile,
    proofPoints,
    strengths,
    projects,
    skillGroups,
    education,
    focusAreas,
    contactLinks,
    contactNote,
  } = portfolioContent

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="page-shell">
        <header className="site-header reveal" style={revealStyle(0)}>
          <a className="brand" href="#hero" aria-label={`${profile.name} home`}>
            <span className="brand-mark" aria-hidden="true">
              OT
            </span>
            <span className="brand-copy">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-role">Backend-first full-stack engineer</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <span className="theme-indicator" aria-live="polite">
              {resolvedTheme} mode
            </span>
            <ThemeToggle value={themeMode} onChange={setThemeMode} />
          </div>
        </header>

        <main id="main-content">
          <section className="section hero" id="hero" aria-labelledby="hero-title">
            <div className="hero-copy reveal" style={revealStyle(1)}>
              <p className="eyebrow">Backend systems, cloud delivery, and LLM-backed product features</p>
              <h1 id="hero-title">Scalable software, with the backend doing the heavy lifting.</h1>
              <p className="hero-summary">{profile.summary}</p>

              <div className="hero-meta" aria-label="Profile details">
                <span className="meta-pill">{profile.title}</span>
                <span className="meta-pill">{profile.location}</span>
                <span className="meta-pill">{profile.availability}</span>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href={profile.primaryCta.href}>
                  {profile.primaryCta.label}
                </a>
                <a className="button button-secondary" href={profile.secondaryCta.href}>
                  {profile.secondaryCta.label}
                </a>
              </div>

              <ul className="proof-grid" aria-label="Selected project outcomes">
                {proofPoints.map((point, index) => (
                  <li key={point.label} className="proof-card reveal" style={revealStyle(index + 2)}>
                    <strong>{point.value}</strong>
                    <span>{point.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-visual reveal" style={revealStyle(2)} aria-hidden="true">
              <div className="visual-panel portrait-panel">
                <div className="portrait-placeholder">
                  <span>Portrait</span>
                  <p>Add your professional photo before launch.</p>
                </div>
              </div>

              <div className="visual-panel architecture-panel">
                <p className="card-kicker">Core operating lane</p>
                <h2>Java services, secure APIs, event-driven processing.</h2>
                <ul>
                  <li>Spring Boot microservices</li>
                  <li>JWT, OAuth2, RSA, JWKS</li>
                  <li>RabbitMQ and Socket.IO flows</li>
                  <li>AWS and VPS deployment</li>
                </ul>
              </div>

              <div className="floating-tags">
                <span>Spring Boot</span>
                <span>Microservices</span>
                <span>RabbitMQ</span>
                <span>Gemini API</span>
                <span>Docker</span>
                <span>AWS</span>
              </div>
            </div>
          </section>

          <section className="section" id="strengths" aria-labelledby="strengths-title">
            <div className="section-heading reveal" style={revealStyle(1)}>
              <p className="eyebrow">What I bring</p>
              <h2 id="strengths-title">Backend depth that still ships product.</h2>
              <p>
                The portfolio is intentionally positioned around system reliability, clean API design,
                deployment maturity, and measured AI adoption.
              </p>
            </div>

            <div className="strength-grid">
              {strengths.map((item, index) => (
                <article key={item.title} className="info-card reveal" style={revealStyle(index + 2)}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section section-band" id="projects" aria-labelledby="projects-title">
            <div className="section-heading reveal" style={revealStyle(1)}>
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-title">Projects with clear backend and systems impact.</h2>
              <p>
                The first two case studies are grounded in shipped work. The AI-focused card stays explicit
                about what is already real versus what is still being developed.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={index === 0 ? 'project-card project-card-featured reveal' : 'project-card reveal'}
                  style={revealStyle(index + 2)}
                >
                  <div className="project-header">
                    <div>
                      <p className="project-timeframe">{project.timeframe}</p>
                      <h3>{project.title}</h3>
                      <p className="project-role">{project.role}</p>
                    </div>
                    <span className="status-pill">{project.status}</span>
                  </div>

                  <p className="project-summary">{project.summary}</p>

                  {project.metrics ? (
                    <ul className="metric-list" aria-label={`${project.title} metrics`}>
                      {project.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  ) : null}

                  <ul className="project-bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="project-footer">
                    <ul className="chip-list" aria-label={`${project.title} tech stack`}>
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {project.links?.length ? (
                      <div className="project-actions" aria-label={`${project.title} links`}>
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            className="project-link"
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noreferrer' : undefined}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}

                    {project.note ? <p className="project-note">{project.note}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="skills" aria-labelledby="skills-title">
            <div className="section-heading reveal" style={revealStyle(1)}>
              <p className="eyebrow">Technical toolkit</p>
              <h2 id="skills-title">Capabilities organized around the work I want to do more of.</h2>
              <p>
                Backend tools come first, with frontend and AI integration included as supporting and growing
                strengths rather than filler.
              </p>
            </div>

            <div className="skill-grid">
              {skillGroups.map((group, index) => (
                <article key={group.label} className="info-card reveal" style={revealStyle(index + 2)}>
                  <h3>{group.label}</h3>
                  <ul className="chip-list" aria-label={group.label}>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="education" aria-labelledby="education-title">
            <div className="section-heading reveal" style={revealStyle(1)}>
              <p className="eyebrow">Education</p>
              <h2 id="education-title">Technical training backed by business grounding.</h2>
              <p>
                The combination is useful in product environments where architecture quality, delivery, and
                communication all matter.
              </p>
            </div>

            <div className="education-grid">
              {education.map((item, index) => (
                <article key={item.credential} className="timeline-card reveal" style={revealStyle(index + 2)}>
                  <p className="project-timeframe">{item.timeframe}</p>
                  <h3>{item.institution}</h3>
                  <p className="project-role">{item.location}</p>
                  <p>{item.credential}</p>
                  <p className="honors">{item.honors}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section focus-section" aria-labelledby="focus-title">
            <div className="section-heading reveal" style={revealStyle(1)}>
              <p className="eyebrow">Current AI direction</p>
              <h2 id="focus-title">Growing AI engineering depth without overstating it.</h2>
              <p>
                The site frames AI as a serious direction anchored in existing LLM integration work and current
                system-building effort.
              </p>
            </div>

            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <article key={area.title} className="focus-card reveal" style={revealStyle(index + 2)}>
                  <h3>{area.title}</h3>
                  <p>{area.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section contact-section" id="contact" aria-labelledby="contact-title">
            <div className="contact-panel reveal" style={revealStyle(1)}>
              <div>
                <p className="eyebrow">Get in touch</p>
                <h2 id="contact-title">Ready for backend-heavy product work and thoughtful engineering teams.</h2>
                <p className="contact-copy">
                  This version ships with placeholder contact information so the structure is ready before the
                  final identity assets and links are published.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="mailto:hello@yourdomain.com">
                    Email Placeholder
                  </a>
                  <a className="button button-secondary" href="#hero">
                    Back to top
                  </a>
                </div>
              </div>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a key={link.label} className="contact-link" href={link.href} target="_blank" rel="noreferrer">
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </a>
                ))}
                <p className="contact-note">{contactNote}</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <p>{profile.name} • React, Vite, TypeScript • Built for responsiveness, accessibility, and theme flexibility.</p>
        </footer>
      </div>
    </>
  )
}

export default App
