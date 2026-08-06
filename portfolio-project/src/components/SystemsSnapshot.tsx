import { ArchNode, ArchConnector } from './DiagramPrimitives'

export const SystemsSnapshot = () => (
  <div className="systems-snapshot">
    <ArchNode iconId="react-icon" title="Client Apps" meta="Web · Mobile · Real-time" />
    <ArchConnector label="JWT · OAuth2" />
    <ArchNode iconId="springboot-icon" title="Gateway + Services" meta="Spring Boot · Auth · Routing" />
    <ArchConnector label="Persist · Publish" />
    <ArchNode iconId="mongodb-icon" title="Data + Events" meta="MongoDB · PostgreSQL · RabbitMQ" />
  </div>
)
