import type { PortfolioContent } from './types'

export const portfolioContent: PortfolioContent = {
  profile: {
    name: 'Olawale Tijani',
    title: 'Full-Stack Engineer With a Heavy Backend Focus',
    summary:
      'I build scalable backend systems with Java, Spring Boot, microservices, event-driven workflows, and cloud deployment. My work centers on reliable APIs, secure service communication, and production-minded delivery, with practical LLM integration experience that is growing into a stronger AI engineering specialization.',
    location: 'Ontario, Canada',
    availability: 'Open to backend and full-stack engineering opportunities',
    primaryCta: {
      label: 'Explore Projects',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Start a Conversation',
      href: '#contact',
    },
  },
  proofPoints: [
    {
      value: '>90%',
      label: 'Reduction in backend fetches on critical paths',
    },
    {
      value: '~75%',
      label: 'Smaller API payloads through DTO-driven responses',
    },
    {
      value: '<100ms',
      label: 'Low-latency real-time messaging target',
    },
  ],
  strengths: [
    {
      title: 'Backend architecture that scales with product growth',
      description:
        'I design service boundaries, API contracts, and supporting infrastructure for systems that need to stay fast, secure, and maintainable as features compound.',
    },
    {
      title: 'Operational delivery, not just local development',
      description:
        'My projects include Dockerized services, CI/CD pipelines, VPS and AWS deployment, reverse proxy setup, and production runtime management.',
    },
    {
      title: 'Event-driven and real-time systems thinking',
      description:
        'I use RabbitMQ, Socket.IO, caching, and asynchronous workflows to move work off the request path and improve throughput and responsiveness.',
    },
    {
      title: 'Practical AI integration into backend services',
      description:
        'I already integrate LLM-powered features into application flows and I am building deeper depth in AI engineering before the public launch of this portfolio.',
    },
  ],
  projects: [
    {
      title: 'OneClassroom',
      timeframe: 'June 2025 - Ongoing',
      role: 'Founder & Full-Stack Engineer',
      status: 'Live Product',
      summary:
        'A student social platform with a live React Native application and an evolving web experience, backed by a hybrid architecture for messaging, groups, posts, and notifications.',
      bullets: [
        'Built a hybrid backend with Spring Boot, Node.js, Socket.IO, and MongoDB to support real-time social features.',
        'Implemented in-memory and HTTP caching that reduced backend fetches by more than 90 percent on critical paths.',
        'Introduced DTO-based API responses that cut payload sizes by about 75 percent across search, messaging, and group endpoints.',
        'Built cross-service authentication with JWT, RSA signing, and a JWKS endpoint so Spring Boot and Node services can verify tokens consistently.',
        'Deployed and maintained production services on a VPS using Nginx, PM2, and systemd.',
      ],
      stack: [
        'Java',
        'Spring Boot',
        'Node.js',
        'Socket.IO',
        'MongoDB',
        'JWT',
        'Nginx',
      ],
      metrics: ['>90% fewer backend fetches', '~75% smaller API payloads', '<100ms real-time messaging'],
      links: [
        {
          label: 'Visit website',
          href: 'https://oneclassroom.co/',
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
        'A recommendation platform built on microservices and asynchronous processing, combining secure gateway patterns with LLM-backed recommendation generation.',
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
      ],
      metrics: ['Event-driven recommendation workflow', 'Polyglot persistence', 'CI/CD with Docker Compose'],
    },
    {
      title: 'AI Engineering Track',
      timeframe: 'Current Focus',
      role: 'Growing Specialization',
      status: 'In Progress',
      summary:
        'This slot is intentionally reserved for the deeper AI engineering work I am building now, so the launch version of the site stays honest about current depth while signaling direction clearly.',
      bullets: [
        'Expanding from LLM integration toward stronger evaluation, orchestration, and production AI backend patterns.',
        'Preparing additional AI-forward case studies that will replace placeholders before the public launch.',
        'Keeping AI positioning grounded in shipped integration work rather than overstated claims.',
      ],
      stack: ['LLM Integration', 'Prompt Workflows', 'Backend APIs', 'Python', 'Node.js', 'Evaluation Thinking'],
      note: 'Replace this card with a shipped AI project before launch if possible.',
    },
  ],
  skillGroups: [
    {
      label: 'Backend',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'Microservices', 'REST APIs'],
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
      skills: ['LLM Integration', 'Gemini API', 'Recommendation Flows', 'Prompt Design', 'API Orchestration'],
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
  focusAreas: [
    {
      title: 'Backend-first AI systems',
      detail:
        'The next layer of work is centered on production-ready AI features that fit inside reliable backend architecture, not isolated demos.',
    },
    {
      title: 'Evaluation and reliability',
      detail:
        'I am focusing on how AI-assisted flows are measured, validated, and protected from low-confidence outputs before they reach users.',
    },
    {
      title: 'Clear technical positioning',
      detail:
        'This site presents AI work as a real and growing specialization built on existing LLM integration experience, not inflated expertise.',
    },
  ],
  contactLinks: [
    {
      label: 'Email',
      value: 'hello@yourdomain.com',
      href: 'mailto:hello@yourdomain.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/yourhandle',
      href: 'https://github.com/yourhandle',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourhandle',
      href: 'https://linkedin.com/in/yourhandle',
    },
  ],
  contactNote:
    'Replace the placeholder contact details, social links, portrait, and any remaining project URLs before public launch.',
}
