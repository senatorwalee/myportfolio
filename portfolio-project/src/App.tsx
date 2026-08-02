import { useEffect, useState, type CSSProperties } from 'react'

import heroGraphic from './assets/hero.png'
import profilePicture from './assets/profilepicture.png'
import oneClassroomLanding from './assets/oneclassroompics/oneclassroom-landing.png'
import oneClassroomFeatures from './assets/oneclassroompics/oneclassroom-features.png'
import oneClassroomHowItWorks from './assets/oneclassroompics/oneclassroom-how-it-works.png'
import oneClassroomAppStore from './assets/oneclassroompics/oneclassroom-app-store.png'
import oneClassroomGooglePlay from './assets/oneclassroompics/oneclassroom-google-play.png'
import joblyticsProviders from './assets/joblyticspics/joblytics-providers.png'
import joblyticsSchedule from './assets/joblyticspics/joblytics-schedule.png'
import joblyticsProviderDetail from './assets/joblyticspics/joblytics-provider-detail.png'
import { ThemeToggle } from './components/ThemeToggle'
import { AIFitnessArchitecture } from './components/ProjectArchitecture'
import { portfolioContent } from './content'
import { useTheme } from './hooks/useTheme'
import { getTechIconId } from './techIcons'
import './App.css'

const navigation = [
  { label: 'Strengths', href: '#strengths' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const revealStyle = (delay: number): CSSProperties =>
  ({ '--delay': delay } as CSSProperties)

const oneClassroomGallery = [
  { src: oneClassroomLanding, alt: 'OneClassroom landing page with the campus messaging app previewed on a phone' },
  { src: oneClassroomFeatures, alt: 'OneClassroom feature highlights for the campus feed, belonging, and group chat' },
  { src: oneClassroomHowItWorks, alt: 'OneClassroom onboarding steps showing how a campus rolls out the platform' },
  { src: oneClassroomAppStore, alt: 'OneClassroom iOS App Store screenshots showing posts, groups, and profiles' },
  { src: oneClassroomGooglePlay, alt: 'OneClassroom Google Play Store listing page' },
]

const joblyticsGallery = [
  { src: joblyticsProviders, alt: 'Joblytics providers dashboard with active service providers and a coverage map' },
  { src: joblyticsSchedule, alt: 'Joblytics service schedule with upcoming visits and recurring service patterns' },
  { src: joblyticsProviderDetail, alt: 'Joblytics provider detail page showing visit history and service compliance score' },
]

const projectGalleries: Record<string, GalleryImage[]> = {
  OneClassroom: oneClassroomGallery,
  Joblytics: joblyticsGallery,
}

const fullWidthProjects = new Set(['OneClassroom', 'Joblytics', 'AI-Fitness Recommendation'])

const Icon = ({ id }: { id: string }) => (
  <svg className="contact-link__icon" aria-hidden="true" focusable="false">
    <use href={`/icons.svg#${id}`} />
  </svg>
)

const TechChip = ({ label }: { label: string }) => {
  const iconId = getTechIconId(label)

  return (
    <li>
      {iconId ? (
        <svg className="chip-icon" aria-hidden="true" focusable="false">
          <use href={`/icons.svg#${iconId}`} />
        </svg>
      ) : null}
      <span>{label}</span>
    </li>
  )
}

type GalleryImage = { src: string; alt: string }

const ProjectGallery = ({ images }: { images: GalleryImage[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || images.length <= 1) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches || isPaused) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [isPaused, images.length])

  const goToOffset = (offset: number) => {
    setActiveIndex((current) => (current + offset + images.length) % images.length)
  }

  return (
    <div
      className="project-media"
      role="region"
      aria-label="Product screenshots"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="project-media__frame">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={index === activeIndex ? image.alt : ''}
            aria-hidden={index === activeIndex ? undefined : true}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`project-media__slide${index === activeIndex ? ' is-active' : ''}`}
          />
        ))}

        {images.length > 1 ? (
          <>
            <button
              type="button"
              className="project-media__nav project-media__nav--prev"
              aria-label="Previous screenshot"
              onClick={() => goToOffset(-1)}
            >
              &#8249;
            </button>
            <button
              type="button"
              className="project-media__nav project-media__nav--next"
              aria-label="Next screenshot"
              onClick={() => goToOffset(1)}
            >
              &#8250;
            </button>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="project-media__dots" role="group" aria-label="Screenshot navigation">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show screenshot ${index + 1} of ${images.length}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={`project-media__dot${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

const TypewriterText = ({ text }: { text: string }) => {
  const [visibleLength, setVisibleLength] = useState(0)
  const [useMotion, setUseMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      setVisibleLength(text.length)
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const shouldAnimate = !mediaQuery.matches
    setUseMotion(shouldAnimate)

    if (!shouldAnimate) {
      setVisibleLength(text.length)
      return undefined
    }

    setVisibleLength(0)
    let currentLength = 0
    let intervalId: number | undefined
    const startDelay = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        currentLength += 1
        setVisibleLength(currentLength)

        if (currentLength >= text.length) {
          window.clearInterval(intervalId)
        }
      }, 34)
    }, 650)

    return () => {
      window.clearTimeout(startDelay)
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
      }
    }
  }, [text])

  const visibleText = useMotion ? text.slice(0, visibleLength) : text
  const isWriting = useMotion && visibleLength < text.length

  return (
    <p className={`hero-summary${isWriting ? ' is-writing' : ''}`} aria-label={text}>
      <span className="typewriter-reserve" aria-hidden="true">
        {text}
      </span>
      <span className="typewriter-live" aria-hidden="true">
        {visibleText}
        {useMotion ? <span className="typewriter-cursor" aria-hidden="true" /> : null}
      </span>
    </p>
  )
}

function App() {
  const { themeMode, setThemeMode } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {
    profile,
    proofPoints,
    strengths,
    projects,
    skillGroups,
    education,
    certifications,
    focusAreas,
    contactLinks,
    contactNote,
  } = portfolioContent

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="page-shell">
        <header className={`site-header reveal${isMenuOpen ? ' is-menu-open' : ''}`} style={revealStyle(0)}>
          <a className="brand" href="#hero" aria-label={`${profile.name} home`}>
            <span className="brand-mark" aria-hidden="true">
              <img src={profilePicture} alt="" />
            </span>
            <span className="brand-copy">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-role">Backend-first full-stack engineer</span>
            </span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="nav-toggle__label">Menu</span>
          </button>

          <nav id="primary-navigation" className="site-nav" aria-label="Primary navigation">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions" aria-label="Theme controls">
            <ThemeToggle value={themeMode} onChange={setThemeMode} />
          </div>
        </header>

        <main id="main-content">
          <section className="section hero" id="hero" aria-labelledby="hero-title">
            <div className="hero-copy reveal" style={revealStyle(1)}>
              <p className="availability-banner">
                <span aria-hidden="true" />
                {profile.availability}
              </p>
              <p className="eyebrow">Backend systems, cloud delivery, and LLM-backed product features</p>
              <h1 id="hero-title">
                Scalable software, with the <span>backend</span> doing the heavy lifting.
              </h1>
              <TypewriterText text={profile.summary} />

              <div className="hero-actions">
                <a className="button button-primary" href={profile.primaryCta.href}>
                  {profile.primaryCta.label}
                </a>
                <a className="button button-secondary" href={profile.secondaryCta.href}>
                  {profile.secondaryCta.label}
                </a>
              </div>

              <div className="hero-meta" aria-label="Profile details">
                <span className="meta-pill">{profile.title}</span>
                <span className="meta-pill">{profile.location}</span>
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
              <div className="visual-panel systems-panel">
                <div className="systems-panel__topline">
                  <span>Service stack</span>
                  <strong>{profile.location}</strong>
                </div>
                <div className="systems-panel__media">
                  <img src={heroGraphic} alt="" />
                </div>
                <div className="systems-panel__caption">
                  <strong>{profile.name}</strong>
                  <span>Backend services / cloud delivery / AI integrations</span>
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
                  className={
                    fullWidthProjects.has(project.title)
                      ? 'project-card project-card-featured reveal'
                      : 'project-card reveal'
                  }
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

                  {projectGalleries[project.title] ? (
                    <ProjectGallery images={projectGalleries[project.title]} />
                  ) : project.title === 'AI-Fitness Recommendation' ? (
                    <AIFitnessArchitecture />
                  ) : null}

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
                        <TechChip key={item} label={item} />
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
                            <span>{link.label}</span>
                            <span className="project-link__arrow" aria-hidden="true">
                              →
                            </span>
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
                      <TechChip key={skill} label={skill} />
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

          <section className="section" id="certifications" aria-labelledby="certifications-title">
            <div className="section-heading reveal" style={revealStyle(1)}>
              <p className="eyebrow">Certifications</p>
              <h2 id="certifications-title">Credentials backing the cloud and backend focus.</h2>
              <p>
                Verified learning paths that reinforce the Azure and cloud-delivery experience already shipped in
                production work.
              </p>
            </div>

            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <article key={cert.title} className="cert-card reveal" style={revealStyle(index + 2)}>
                  <svg className="cert-card__icon" aria-hidden="true" focusable="false">
                    <use href={`/icons.svg#${cert.iconId}`} />
                  </svg>
                  <div className="cert-card__body">
                    <h3>{cert.title}</h3>
                    <p className="cert-card__issuer">
                      <svg className="cert-card__issuer-icon" aria-hidden="true" focusable="false">
                        <use href={`/icons.svg#${cert.issuerIconId}`} />
                      </svg>
                      {cert.issuer}
                    </p>
                  </div>
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
                  Reach me through LinkedIn, GitHub, or the custom email address that will be connected for launch.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="mailto:contact@olawaletijani.com">
                    Email Me
                  </a>
                  <a className="button button-secondary" href="#hero">
                    Back to top
                  </a>
                </div>
              </div>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a key={link.label} className="contact-link" href={link.href} target="_blank" rel="noreferrer">
                    <Icon id={link.iconId} />
                    <span className="contact-link__copy">
                      <span>{link.label}</span>
                      <strong>{link.value}</strong>
                    </span>
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
