import { ArchNode, ArchConnector } from './DiagramPrimitives'

const orderingSteps = [
  'The customer speaks naturally to the agent in a live, two-way voice conversation.',
  'OpenAI Realtime handles the voice interaction and proposes ordering actions through typed tool calls relayed by the backend.',
  'The policy engine allows, rejects, requests confirmation, or hands the session to staff.',
  'Allowed actions run against the ordering backend, which prices the cart and reserves available stock.',
  'After order read-back and customer confirmation, submission freezes prices and consumes the reserved stock.',
  'Staff receive a handoff package with the cart, stock holds, conversation, and backend decisions when a person needs to take over.',
]

export const DriveTruArchitecture = () => (
  <div className="project-media" role="region" aria-label="DriveTruAgent proposed real-time voice architecture and ordering flow">
    <div className="diagram-slides">
      <div className="drivetru-architecture">
        <div className="architecture-diagram">
          <p className="arch-label">Proposed final solution · Real-time voice</p>
          <ArchNode iconId="sparkle-icon" title="Customer Voice Conversation" meta="Live, two-way speech" />
          <ArchConnector label="Real-time audio · Backend relay" />
          <ArchNode iconId="sparkle-icon" title="OpenAI Realtime" meta="Voice interaction · Tool calling · Planned" variant="external" />
          <ArchConnector label="Proposed action · FastAPI backend" />
          <ArchNode iconId="lock-icon" title="Policy Engine" meta="Allow · Reject · Confirm · Escalate" variant="auth" />
          <ArchConnector label="Validate before changing data" />
          <ArchNode iconId="gear-icon" title="Ordering Backend + Staff Desk" meta="Pricing · Stock · Timers · Human handoff" />
          <ArchConnector label="Transactions · Row locks · Idempotency" />
          <ArchNode iconId="postgresql-icon" title="PostgreSQL" meta="Sessions · Orders · Reservations · Event log" />
        </div>

        <div className="flow-diagram">
          <p className="arch-label">Proposed voice & handoff flow</p>
          <ol className="flow-steps">
            {orderingSteps.map((step, index) => (
              <li key={step} className="flow-step">
                <span className="flow-step__index">{index + 1}</span>
                <div className="flow-step__body">
                  <p>{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </div>
)
