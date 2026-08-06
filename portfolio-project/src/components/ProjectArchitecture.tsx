import { useEffect, useState, type ReactNode } from 'react'

import { Icon, ArchNode, ArchConnector } from './DiagramPrimitives'

const flowSteps = [
  {
    code: 'POST /api/activities',
    detail: 'Activity Service saves the workout to MongoDB (fitnessactivity).',
  },
  {
    detail: 'Activity Service publishes the event to RabbitMQ (fitness.exchange → activity.queue).',
  },
  {
    detail: 'AI Service consumes the event and checks for an existing recommendation to avoid duplicates.',
  },
  {
    detail: 'If none exists, AI Service calls Google Gemini for a personalized recommendation and saves it to MongoDB (fitnessrecommendations).',
  },
  {
    code: 'GET /api/ai/recommendations/activity/:id',
    detail: 'Returns the stored recommendation to the client.',
  },
]

const SystemArchitectureSlide = () => (
  <div className="architecture-slide">
    <div className="architecture-diagram">
      <p className="arch-label">System architecture</p>

      <ArchNode iconId="react-icon" title="React Frontend" meta=":5173 · Vite + MUI" />
      <ArchConnector label="HTTP · Bearer JWT" />

      <div className="arch-row arch-row--gateway">
        <ArchNode iconId="api-icon" title="API Gateway" meta=":8085 · Spring Cloud Gateway" />
        <ArchNode iconId="keycloak-icon" title="Keycloak" meta="OAuth2 · PKCE" variant="auth" />
      </div>
      <ArchConnector label="/api/users · /api/activities · /api/ai" />

      <div className="arch-services">
        <ArchNode iconId="springboot-icon" title="User Service" meta=":8082" />
        <ArchNode iconId="springboot-icon" title="Activity Service" meta=":8083" db="activities" />
        <ArchNode iconId="springboot-icon" title="AI Service" meta=":8084" db="recommendations" />

        <div className="arch-event-connector">
          <Icon id="rabbitmq-icon" />
          fitness.exchange &rarr; activity.queue
        </div>

        <div className="arch-gemini-slot">
          <ArchNode
            iconId="googlegemini-icon"
            title="Google Gemini API"
            meta="Recommendation generation"
            variant="external"
          />
        </div>
      </div>

      <div className="arch-infra-strip">
        <span>
          <Icon id="layers-icon" />
          Eureka Server · :8761 · Service discovery
        </span>
        <span>
          <Icon id="gear-icon" />
          Config Server · :8888 · Centralized config
        </span>
      </div>
    </div>

    <div className="flow-diagram">
      <p className="arch-label">Recommendation flow</p>
      <ol className="flow-steps">
        {flowSteps.map((step, index) => (
          <li key={step.detail} className="flow-step">
            <span className="flow-step__index">{index + 1}</span>
            <div className="flow-step__body">
              {step.code ? <code className="flow-step__code">{step.code}</code> : null}
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
)

type DataflowNodeProps = {
  iconId: string
  title: string
  meta?: string
}

const DataflowNode = ({ iconId, title, meta }: DataflowNodeProps) => (
  <div className="dataflow-node">
    <Icon id={iconId} />
    <div className="dataflow-node__copy">
      <strong>{title}</strong>
      {meta ? <span>{meta}</span> : null}
    </div>
  </div>
)

const DataFlowSlide = () => (
  <div className="dataflow-slide">
    <p className="arch-label">Data flow — synchronous request</p>
    <div className="dataflow-lane">
      <span className="dataflow-packet" aria-hidden="true" />
      <DataflowNode iconId="react-icon" title="Frontend" meta="Bearer JWT" />
      <DataflowNode iconId="api-icon" title="API Gateway" meta="Validates" />
      <DataflowNode iconId="springboot-icon" title="Service" meta="User/Activity/AI" />
      <DataflowNode iconId="layers-icon" title="Database" meta="Mongo/Postgres" />
    </div>

    <p className="arch-label">Data flow — async recommendation event</p>
    <div className="dataflow-lane dataflow-lane--async">
      <span className="dataflow-packet" aria-hidden="true" />
      <DataflowNode iconId="springboot-icon" title="Activity Service" meta="Publishes" />
      <DataflowNode iconId="rabbitmq-icon" title="RabbitMQ" meta="activity.queue" />
      <DataflowNode iconId="springboot-icon" title="AI Service" meta="Consumes" />
      <DataflowNode iconId="googlegemini-icon" title="Gemini API" meta="Generates" />
      <DataflowNode iconId="mongodb-icon" title="Database" meta="recommendations" />
    </div>
  </div>
)

const diagramSlides: { label: string; content: ReactNode }[] = [
  { label: 'System architecture', content: <SystemArchitectureSlide /> },
  { label: 'Data flow', content: <DataFlowSlide /> },
]

const DiagramSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || diagramSlides.length <= 1) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches || isPaused) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % diagramSlides.length)
    }, 7000)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  return (
    <div
      className="project-media"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="diagram-slides">
        {diagramSlides.map((slide, index) => (
          <div
            key={slide.label}
            className={`diagram-slide${index === activeIndex ? ' is-active' : ''}`}
            aria-hidden={index === activeIndex ? undefined : true}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className="project-media__dots" role="group" aria-label="Diagram selector">
        {diagramSlides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            aria-label={`Show ${slide.label} diagram`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`project-media__dot${index === activeIndex ? ' is-active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export const AIFitnessArchitecture = () => <DiagramSlider />
