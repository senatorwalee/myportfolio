export type ThemeMode = 'light' | 'dark' | 'system'

export interface CtaLink {
  label: string
  href: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
  iconId: string
}

export interface ProjectLink {
  label: string
  href: string
  external?: boolean
}

export interface Profile {
  name: string
  title: string
  summary: string
  location: string
  availability: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
}

export interface ProofPoint {
  value: string
  label: string
}

export interface StrengthItem {
  title: string
  description: string
}

export interface Project {
  title: string
  timeframe: string
  role: string
  status: string
  summary: string
  bullets: string[]
  stack: string[]
  metrics?: string[]
  links?: ProjectLink[]
  note?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface EducationItem {
  institution: string
  credential: string
  honors: string
  timeframe: string
  location: string
}

export interface CertificationItem {
  title: string
  issuer: string
  iconId: string
  issuerIconId: string
}

export interface FocusArea {
  title: string
  detail: string
}

export interface PortfolioContent {
  profile: Profile
  proofPoints: ProofPoint[]
  strengths: StrengthItem[]
  projects: Project[]
  skillGroups: SkillGroup[]
  education: EducationItem[]
  certifications: CertificationItem[]
  focusAreas: FocusArea[]
  contactLinks: ContactLink[]
  contactNote: string
}
