# Olawale Tijani — Portfolio

A responsive React and TypeScript portfolio featuring OneClassroom, Joblytics, AI-Fitness Recommendation, and DriveTruAgent. Project cards open into detailed engineering case studies with screenshot galleries or architecture diagrams.

## Local development

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run build
```

`npm run preview` serves the production build locally.

## Updating the portfolio

- `src/content.ts` contains profile information, project descriptions, technology stacks, education, and contact links.
- `src/App.tsx` defines sections, project galleries, and portfolio interactions.
- `src/index.css` contains theme tokens and shared typography; `src/App.css` contains layouts and component styles.
- `src/components/ProjectArchitecture.tsx` and `src/components/DriveTruArchitecture.tsx` contain the case-study diagrams.
- `src/assets/` holds the existing portrait and project screenshots.

DriveTruAgent is presented as a proposed real-time voice solution. Its project note distinguishes the implemented text-based milestone from the planned voice integration.

The repository's GitHub Actions workflow builds the portfolio and deploys the static `dist/` output to Azure on pushes to `main`.

See `design-qa.md` for the latest visual review and browser verification.
