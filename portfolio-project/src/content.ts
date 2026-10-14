import type { PortfolioContent } from './types'

export const portfolioContent: PortfolioContent = {
  profile: {
    name: 'Olawale Tijani',
    title: 'Backend-focused Full-Stack Engineer',
    summary:
      'I’m Olawale, a full-stack engineer in Ontario. I build secure APIs, real-time platforms, and practical AI features with Java, Python, and TypeScript—from the data model to deployment.',
    location: 'Ontario, Canada',
    availability: 'Open to engineering opportunities',
    primaryCta: {
      label: 'View selected work',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Get in touch',
      href: '#contact',
    },
  },
  proofPoints: [
    {
      value: '>90%',
      label: 'Fewer backend fetches',
    },
    {
      value: '~75%',
      label: 'Smaller API payloads',
    },
    {
      value: '45+',
      label: 'Mobile screens delivered',
    },
  ],
  strengths: [
    {
      title: 'Clear service boundaries',
      description:
        'I design APIs, data models, and service boundaries that stay maintainable as a product grows.',
    },
    {
      title: 'Delivery beyond localhost',
      description:
        'Docker, CI/CD, cloud and VPS deployment, and runtime management are part of how I ship software.',
    },
    {
      title: 'Responsive by design',
      description:
        'I use caching, messaging, and asynchronous workflows to keep slow work off the request path.',
    },
    {
      title: 'AI with guardrails',
      description:
        'Models handle language; backend code owns business rules, validation, and an auditable record of decisions.',
    },
  ],
  projects: [
    {
      title: 'OneClassroom',
      timeframe: 'June 2025 - Ongoing',
      role: 'Founder & Full-Stack Engineer',
      status: 'Live Product',
      summary:
        'A live campus community for student feeds, groups, and real-time chat. Built across React Native and web, with a hybrid Spring Boot and Node.js backend.',
      bullets: [
        'Built a hybrid backend with Spring Boot, Node.js, Socket.IO, and MongoDB to support real-time social features.',
        'Built the production React Native (Expo) app with 45+ screens across stack, tab, and drawer navigators, covering onboarding, feeds, groups, and chat.',
        'Used Zustand and TanStack Query with persisted offline caching, plus a custom Socket.IO hook, to keep chat, presence, and feed state fast and in sync on the client.',
        'Implemented in-memory and HTTP caching that reduced backend fetches by more than 90 percent on critical paths.',
        'Introduced DTO-based API responses that cut payload sizes by about 75 percent across search, messaging, and group endpoints.',
        'Built cross-service authentication with JWT, RSA signing, and a JWKS endpoint so Spring Boot and Node services can verify tokens consistently.',
        'Deployed and maintained production services on a VPS using Nginx, PM2, and systemd.',
      ],
      stack: [
        'Java',
        'Spring Boot',
        'Node.js',
        'React',
        'React Native',
        'Socket.IO',
        'MongoDB',
        'JWT',
        'Nginx',
      ],
      metrics: ['>90% fewer backend fetches', '~75% smaller payloads', '45+ mobile screens'],
      links: [
        {
          label: 'Visit website',
          href: 'https://oneclassroom.co/',
          external: true,
        },
      ],
    },
    {
      title: 'Joblytics',
      timeframe: 'July 2026 - Ongoing',
      role: 'Co-Founder & Full-Stack Engineer',
      status: 'In Progress',
      summary:
        'A field-service platform for scheduling teams and tracking visits, with dedicated admin, employee, and client portals on a serverless Cloudflare backend.',
      bullets: [
        'Built a role-based multi-portal platform (admin, employee, client) on Cloudflare Workers with Hono, D1, and R2 for a serverless, edge-deployed backend.',
        'Designed Zod-validated DTOs and JWT auth in HttpOnly cookies, with per-provider tenancy enforced through a dedicated request header.',
        'Built core domain services for jobs, employees, providers, and geocoded service locations, plus a notification outbox for reliable async messaging.',
        'Built the React 19 frontend with React Router 7, TypeScript, and Tailwind CSS v4 across the admin, employee, and client portals.',
      ],
      stack: [
        'Cloudflare Workers',
        'Hono',
        'TypeScript',
        'D1',
        'R2',
        'Zod',
        'React',
        'React Router',
        'Tailwind CSS',
        'JWT',
      ],
      links: [
        {
          label: 'View development preview',
          href: 'http://dev.frontend.joblytics.ca/login',
          external: true,
        },
      ],
    },
    {
      title: 'AI-Fitness Recommendation',
      timeframe: 'January 2026 - March 2026',
      role: 'Full-Stack Web Developer',
      status: 'Completed Build',
      summary:
        'Personalized fitness recommendations generated from workout activity. A Java microservices backend connects secure APIs, RabbitMQ events, and Google Gemini.',
      bullets: [
        'Engineered a Java 17 microservices backend with Spring Boot, Spring Cloud Gateway, Eureka, and Config Server.',
        'Secured APIs with Keycloak, OAuth2, and JWT while synchronizing users at the gateway layer.',
        'Designed a RabbitMQ-based event pipeline to publish workout activity and trigger recommendation generation asynchronously.',
        'Integrated the Google Gemini API to generate personalized recommendations with duplicate-check logic.',
        'Added unit tests with JUnit 5 and Mockito around recommendation workflows and containerized the stack with Docker Compose and GitHub Actions.',
      ],
      stack: [
        'Java 17',
        'Spring Boot',
        'RabbitMQ',
        'Keycloak',
        'OAuth2',
        'PostgreSQL',
        'MongoDB',
        'Gemini API',
        'JUnit 5',
        'Mockito',
      ],
      metrics: ['Event-driven recommendation workflow', 'Polyglot persistence', 'CI/CD with Docker Compose'],
    },
    {
      title: 'DriveTruAgent',
      timeframe: 'Ongoing',
      role: 'Full-Stack & AI Engineer',
      status: 'In Progress',
      summary:
        'A proposed real-time voice ordering agent for drive-throughs. Natural conversation meets backend-enforced pricing, stock reservations, order confirmation, and human handoff.',
      bullets: [
        'Built a Python and FastAPI backend with async SQLAlchemy, PostgreSQL, and Alembic migrations for menus, sessions, carts, and immutable order records.',
        'Integrated the OpenAI Responses API through strict tool schemas and a policy engine that allows, rejects, confirms, or escalates proposed actions before data changes.',
        'Protected stock with expiring reservations and database row locks, and used transactional idempotency keys to prevent repeated requests from duplicating work.',
        'Kept pricing, combo discounts, daily specials, and session timers in backend code, with English and Canadian French menu support.',
        'Built React and TypeScript session and staff screens with TanStack Query and API-generated types, exposing the conversation, cart, event log, and handoff context.',
        'Added pytest integration tests against real PostgreSQL, concurrency checks, scripted agent tests, and conversation evaluation scenarios, with backend and frontend checks in GitHub Actions.',
      ],
      stack: [
        'Python',
        'FastAPI',
        'Pydantic',
        'PostgreSQL',
        'SQLAlchemy',
        'Alembic',
        'OpenAI Responses API',
        'React',
        'TypeScript',
        'TanStack Query',
        'pytest',
        'GitHub Actions',
      ],
      links: [
        {
          label: 'View on GitHub',
          href: 'https://github.com/senatorwalee/drivetruagent',
          external: true,
        },
      ],
      note: 'Built: text-based agent, ordering backend, and staff desk. Proposed final solution: live voice conversations with OpenAI Realtime. Voice integration and real-model evaluations are pending.',
    },
  ],
  skillGroups: [
    {
      label: 'Backend',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'Python', 'FastAPI', 'Microservices', 'REST APIs'],
    },
    {
      label: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Polyglot Persistence', 'Caching'],
    },
    {
      label: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'PM2', 'CI/CD'],
    },
    {
      label: 'Architecture',
      skills: ['RabbitMQ', 'Event-Driven Architecture', 'JWT', 'OAuth2', 'System Design', 'Testing'],
    },
    {
      label: 'Frontend & Product',
      skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'Responsive UI', 'Accessibility'],
    },
    {
      label: 'AI Integration',
      skills: ['LLM Integration', 'Gemini API', 'OpenAI Responses API', 'Tool Calling', 'Policy Enforcement', 'Prompt Design', 'API Orchestration'],
    },
  ],
  education: [
    {
      institution: 'Humber Polytechnic',
      credential: 'Computer Programming and Analysis',
      honors: 'Dean’s Honours',
      timeframe: 'September 2023 - December 2025',
      location: 'Etobicoke, ON',
    },
    {
      institution: 'Humber College',
      credential: 'Business Management',
      honors: 'Dean’s Honours',
      timeframe: 'September 2018 - April 2020',
      location: 'Etobicoke, ON',
    },
  ],
  certifications: [
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'LinkedIn Learning',
      iconId: 'microsoftazure-icon',
      issuerIconId: 'linkedin-icon',
    },
    {
      title: 'Developing Solutions for Microsoft Azure',
      issuer: 'LinkedIn Learning',
      iconId: 'microsoftazure-icon',
      issuerIconId: 'linkedin-icon',
    },
  ],
  focusAreas: [
    {
      title: 'Backend-first AI systems',
      detail:
        'DriveTruAgent connects a conversational model to an ordering backend that owns pricing, stock, confirmation, and submission.',
    },
    {
      title: 'Evaluation and reliability',
      detail:
        'Scripted agent tests, real-database concurrency checks, and conversation evaluation scenarios support the ordering workflow. Real-model evaluations are the next validation step.',
    },
    {
      title: 'Real-time voice ordering',
      detail:
        'The proposed final DriveTruAgent experience is a live voice conversation powered by OpenAI Realtime, connected to the existing ordering rules and staff handoff workflow. Knowledge search and tracing are also planned.',
    },
  ],
  contactLinks: [
    {
      label: 'Email',
      value: 'contact@olawaletijani.com',
      href: 'mailto:contact@olawaletijani.com',
      iconId: 'mail-icon',
    },
    {
      label: 'GitHub',
      value: 'github.com/senatorwalee',
      href: 'https://github.com/senatorwalee',
      iconId: 'github-icon',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/olawaletijani',
      href: 'https://www.linkedin.com/in/olawaletijani/',
      iconId: 'linkedin-icon',
    },
  ],
  contactNote:
    'Connect with me through any of the channels below.',
}
