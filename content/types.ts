export interface Metric {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  body: string;
}

export interface CaseLink {
  label: string;
  url: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  role: string;
  tags: string[];
  cover: string;
  images: string[];
  eyebrow: string;
  metricsLabel?: string;
  problem: string;
  processLabel?: string;
  process: ProcessStep[];
  result: string[];
  metrics: Metric[];
  links?: CaseLink[];
  isLead?: boolean;
  compareImages?: {
    before: string;
    after: string;
    beforeLabel: string;
    afterLabel: string;
  };
}

export interface ProjectModal {
  role: string;
  body: string;
  myRole: string;
  challenge: string;
  delivered: string;
  figmaUrl: string;
}

export interface ProjectPreview {
  slug: string;
  image: string;
  title: string;
  description: string;
  role: string;
  tags: string[];
  modal: ProjectModal;
}

export interface HowIWorkStep {
  number: string;
  title: string;
  body: string;
}

export interface SiteContent {
  lang: "en" | "ua";
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    howIWork: string;
    about: string;
    contact: string;
    langToggle: string;
  };
  sidebar: {
    name: string;
    tagline: string;
  };
  hero: {
    titleSolid: string[];
    titleOutline: string[];
    scrollCue: string;
  };
  introStatement: {
    lead: string;
    body: string[];
  };
  work: {
    eyebrow: string;
    heading: string;
    intro: string;
    figmaCta: string;
    figmaUrl: string;
    cases: CaseStudy[];
    more: {
      eyebrow: string;
      items: ProjectPreview[];
    };
  };
  howIWork: {
    eyebrow: string;
    heading: string;
    steps: HowIWorkStep[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subhead: string;
    emailLabel: string;
    email: string;
    linkedinLabel: string;
    linkedinUrl: string;
    cvLabel: string;
    cvUrl: string;
  };
  footer: {
    note: string;
  };
}
