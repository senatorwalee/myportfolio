import { useEffect, useRef, useState } from 'react'

import profileFull from './assets/profilepicture-full.webp'
import oneClassroomLanding from './assets/oneclassroompics/oneclassroom-landing.png'
import oneClassroomFeatures from './assets/oneclassroompics/oneclassroom-features.png'
import oneClassroomHowItWorks from './assets/oneclassroompics/oneclassroom-how-it-works.png'
import oneClassroomAppStore from './assets/oneclassroompics/oneclassroom-app-store.png'
import oneClassroomGooglePlay from './assets/oneclassroompics/oneclassroom-google-play.png'
import joblyticsProviders from './assets/joblyticspics/joblytics-providers.png'
import joblyticsSchedule from './assets/joblyticspics/joblytics-schedule.png'
import joblyticsProviderDetail from './assets/joblyticspics/joblytics-provider-detail.png'
import driveTruOrdering from './assets/drivetruagentpics/drivetruagent-ordering.png'
import { ThemeToggle } from './components/ThemeToggle'
import { AIFitnessArchitecture } from './components/ProjectArchitecture'
import { DriveTruArchitecture } from './components/DriveTruArchitecture'
import { portfolioContent } from './content'
import { useTheme } from './hooks/useTheme'
import { getTechIconId } from './techIcons'
import './App.css'

const navigation = [
  { label: 'Work', href: '#projects' },
  { label: 'Approach', href: '#strengths' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const projectCategories: Record<string, string> = {
  OneClassroom: 'Social platform · Web & mobile',
  Joblytics: 'Operations platform · SaaS',
  'AI-Fitness Recommendation': 'Applied AI · Microservices',
  DriveTruAgent: 'Conversational AI · Real-time voice',
}

const projectId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

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
  DriveTruAgent: [
    { src: driveTruOrdering, alt: 'DriveTruAgent ordering screen showing a conversation about large fries, a priced order receipt, and allowed and rejected backend actions' },
  ],
}

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

  const goToOffset = (offset: number) => {
    setActiveIndex((current) => (current + offset + images.length) % images.length)
  }

  return (
    <div
      className="project-media"
      role="region"
      aria-label="Product screenshots"
    >
      <div className="project-media__frame">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={index === activeIndex ? image.alt : ''}
            aria-hidden={index === activeIndex ? undefined : true}
            loading="lazy"
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

function App() {
  const { themeMode, setThemeMode } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const {
    profile, proofPoints, strengths, projects, skillGroups,
    education, certifications, focusAreas, contactLinks,
  } = portfolioContent

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length) setActiveSection(visible[0].target.id)
    }, { rootMargin: '-15% 0px -65% 0px' })
    for (const section of document.querySelectorAll('main > section[id]')) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-shell">
        <header className={`site-header${isMenuOpen ? ' is-menu-open' : ''}`}>
          <a className="brand" href="#hero" onClick={closeMenu} aria-label="Olawale Tijani, home">
            <img className="brand-avatar" src={profileFull} alt="" width="40" height="40" />
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <span>Software &amp; Applied AI engineer</span>
            </span>
          </a>
          <button ref={menuButtonRef} className="nav-toggle" type="button"
            aria-controls="primary-navigation" aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <nav id="primary-navigation" className="site-nav" aria-label="Primary navigation">
            <ul>{navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}
                  aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}</ul>
          </nav>
          <div className="header-actions"><ThemeToggle value={themeMode} onChange={setThemeMode} /></div>
        </header>

        <main id="main-content" tabIndex={-1}>
          <section className="section hero" id="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="availability-banner"><span aria-hidden="true" />{profile.availability}</p>
              <p className="eyebrow">Full-stack engineer · Backend focus</p>
              <h1 id="hero-title">Reliable systems.<br /><span>Real-world products.</span></h1>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={profile.primaryCta.href}>{profile.primaryCta.label}<span aria-hidden="true">↗</span></a>
                <a className="button button-secondary" href={profile.secondaryCta.href}>{profile.secondaryCta.label}</a>
              </div>
              <div className="hero-meta"><span>{profile.location}</span><span>Java / Python / TypeScript</span></div>
            </div>
            <aside className="engineering-panel" aria-labelledby="engineering-panel-title">
              <div className="engineering-panel__intro">
                <p className="eyebrow">Engineering focus</p>
                <h2 id="engineering-panel-title">From APIs to<br />AI workflows.</h2>
              </div>
              <ul className="engineering-focus">
                <li><Icon id="springboot-icon" /><div><h3>Backend systems</h3><p>Secure services and reliable data.</p></div></li>
                <li><Icon id="socketdotio-icon" /><div><h3>Real-time products</h3><p>Event-driven flows and messaging.</p></div></li>
                <li><Icon id="sparkle-icon" /><div><h3>AI engineering</h3><p>Tool calling with backend guardrails.</p></div></li>
              </ul>
              <a className="current-project" href="#drivetruagent"><span>Currently building</span><strong>DriveTruAgent <span aria-hidden="true">↗</span></strong></a>
            </aside>
            <div className="proof-strip">
              <p className="proof-context">From OneClassroom<br /><span>A live product I built.</span></p>
              <ul className="proof-grid" aria-label="Selected OneClassroom outcomes">
                {proofPoints.map((point) => (<li key={point.label}><strong>{point.value}</strong><span>{point.label}</span></li>))}
              </ul>
            </div>
          </section>

          <section className="section" id="projects" aria-labelledby="projects-title">
            <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="projects-title">Built with purpose.</h2></div>
              <p>From a live campus community to reliable AI workflows. A selection of the products and systems I’m building.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article key={project.title} id={projectId(project.title)} className="project-card">
                  <div className="project-topline"><p>{projectCategories[project.title]}</p><span className={`status-pill${project.status === 'Live Product' ? ' status-pill--live' : ''}`}>{project.status}</span></div>
                  {projectGalleries[project.title] ? (
                    <div className="project-cover"><img src={projectGalleries[project.title][0].src} alt={projectGalleries[project.title][0].alt} loading="lazy" width="2976" height="1646" /></div>
                  ) : null}
                  <div className="project-copy">
                    <div className="project-heading"><span className="project-index">0{index + 1}</span><h3>{project.title}</h3></div>
                    <p className="project-role">{project.role} <span>· {project.timeframe}</span></p>
                    <p className="project-summary">{project.summary}</p>
                    {project.metrics ? <ul className="metric-list" aria-label={`${project.title} outcomes`}>{project.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul> : null}
                    <ul className="chip-list project-stack" aria-label={`${project.title} primary technologies`}>{project.stack.slice(0, 4).map((item) => <TechChip key={item} label={item} />)}</ul>
                    {project.note ? <p className="project-note">{project.note}</p> : null}
                    <div className="project-actions">{project.links?.map((link) => (
                      <a key={link.href} className="text-link" href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>{link.label}<span aria-hidden="true">↗</span></a>
                    ))}</div>
                    <details className="case-study">
                      <summary>Explore {project.title} case study<span className="details-indicator" aria-hidden="true">+</span></summary>
                      <div className="case-study__body">
                        <h4>Engineering highlights</h4>
                        <ul className="project-bullets">{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                        <h4>Technology stack</h4>
                        <ul className="chip-list" aria-label={`${project.title} full technology stack`}>{project.stack.map((item) => <TechChip key={item} label={item} />)}</ul>
                        {projectGalleries[project.title] ? <ProjectGallery images={projectGalleries[project.title]} />
                          : project.title === 'AI-Fitness Recommendation' ? <AIFitnessArchitecture /> : null}
                        {project.title === 'DriveTruAgent' ? <DriveTruArchitecture /> : null}
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="strengths" aria-labelledby="strengths-title">
            <div className="section-heading"><div><p className="eyebrow">02 / Engineering approach</p><h2 id="strengths-title">Built to hold up.</h2></div><p>I care about what happens after the first release: performance, reliability, and systems other engineers can work with.</p></div>
            <div className="strength-grid">{strengths.map((item, index) => (
              <article key={item.title} className="strength-card"><span className="item-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}</div>
          </section>

          <section className="section" id="skills" aria-labelledby="skills-title">
            <div className="section-heading"><div><p className="eyebrow">03 / Technical toolkit</p><h2 id="skills-title">The tools behind the work.</h2></div><p>Backend architecture at the core, with the frontend, cloud, and AI tools to deliver a complete product.</p></div>
            <div className="skill-grid">{skillGroups.map((group) => (
              <article key={group.label} className="skill-card"><h3>{group.label}</h3><ul className="chip-list" aria-label={group.label}>{group.skills.map((skill) => <TechChip key={skill} label={skill} />)}</ul></article>
            ))}</div>
          </section>

          <section className="section background-section" id="education" aria-labelledby="education-title">
            <div className="section-heading"><div><p className="eyebrow">04 / Background</p><h2 id="education-title">Technical depth.<br />Business perspective.</h2></div><p>A foundation in programming and business, supported by ongoing learning in cloud engineering.</p></div>
            <div className="background-grid">
              <div><h3 className="column-label">Education</h3><div className="education-list">{education.map((item) => (
                <article key={item.credential} className="timeline-card"><p className="project-timeframe">{item.timeframe}</p><h3>{item.credential}</h3><p>{item.institution} · {item.location}</p><span className="honors">{item.honors}</span></article>
              ))}</div></div>
              <div id="certifications"><h3 className="column-label">Professional development</h3><div className="cert-list">{certifications.map((cert) => (
                <article key={cert.title} className="cert-card"><Icon id={cert.iconId} /><div><h3>{cert.title}</h3><p>{cert.issuer}</p></div></article>
              ))}</div><p className="learning-note">Course certificates from LinkedIn Learning.</p></div>
            </div>
          </section>

          <section className="section focus-section" aria-labelledby="focus-title">
            <div className="section-heading"><div><p className="eyebrow">05 / What’s next</p><h2 id="focus-title">Practical AI. Reliable foundations.</h2></div><p>Building toward real-time voice ordering, with clear boundaries between what the model suggests and what the backend allows.</p></div>
            <div className="focus-grid">{focusAreas.map((area) => <article key={area.title} className="focus-card"><h3>{area.title}</h3><p>{area.detail}</p></article>)}</div>
          </section>

          <section className="section contact-section" id="contact" aria-labelledby="contact-title">
            <div className="contact-panel"><div className="contact-intro"><p className="eyebrow">Let’s connect</p><h2 id="contact-title">Have something<br /><span>worth building?</span></h2><p className="contact-copy">I’m open to backend and full-stack engineering roles, and conversations about thoughtful products.</p><a className="button button-primary" href="mailto:contact@olawaletijani.com">Start a conversation<span aria-hidden="true">↗</span></a></div>
              <div className="contact-links">{contactLinks.map((link) => (
                <a key={link.label} className="contact-link" href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noreferrer'}><Icon id={link.iconId} /><span className="contact-link__copy"><span>{link.label}</span><strong>{link.value}</strong></span><span aria-hidden="true">↗</span></a>
              ))}</div>
            </div>
          </section>
        </main>
        <footer className="site-footer"><p>© {new Date().getFullYear()} {profile.name}</p><span>{profile.location}</span><a href="#hero">Back to top ↑</a></footer>
      </div>
    </>
  )
}

export default App
