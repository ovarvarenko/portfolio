export interface HeroSegment {
  label: string;
  description: string;
}

export interface ProjectCard {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  images: string[];
  pills?: string[];
  problem?: string;
  approach?: string;
}

export interface ConsultCard {
  slug: string;
  tag: string;
  title: string;
  problem: string;
  result: string;
  context: string;
}

export interface MoreProject {
  slug: string;
  image: string;
  title: string;
  description: string;
  results: string[];
  tags: string[];
  /** Hide the card from the More Work grid without deleting its data. */
  hidden?: boolean;
}

export interface SplitProjectSection {
  label: string;
  text?: string;
  items?: string[];
}

export interface SplitProject {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  /** Single highlighted result line. */
  result?: string;
  /** Optional labelled sections (role, what I did, …). */
  sections?: SplitProjectSection[];
  image: string;
  /** Text on the right, image on the left. */
  reverse?: boolean;
  hidden?: boolean;
}

export interface CaseHeroMetaItem {
  label: string;
  value: string;
}

export interface CaseProblemCard {
  number: string;
  text: string;
}

export interface CaseResearchInsight {
  title: string;
  text: string;
}

export interface CaseExperimentVariant {
  label: string;
  text: string;
}

export interface CaseExperimentHypothesis {
  title: string;
  text: string;
}

export interface CaseExperimentScreen {
  label: string;
  image: string;
}

export interface CaseExperiment {
  label: string;
  variants: CaseExperimentVariant[];
  hypotheses: CaseExperimentHypothesis[];
  image: string;
  screens: CaseExperimentScreen[];
}

export interface CaseMetricTagged {
  tag: string;
  text: string;
}

export interface CaseMetricsFramework {
  primary: {
    label: string;
    value: string;
    tags: string[];
  };
  guardrail: {
    label: string;
    value: string;
    valueSuffix: string;
    valueTags: string[];
    note: string;
    noteSuffix: string;
    noteTags: string[];
  };
  diagnostic: {
    label: string;
    items: CaseMetricTagged[];
  };
}

export interface CaseSecondExperimentVariant {
  label: string;
  text: string;
}

export interface CaseSecondExperiment {
  label: string;
  variants: CaseSecondExperimentVariant[];
  hypothesis: {
    title: string;
    text: string;
  };
  image: string;
  screens: CaseExperimentScreen[];
  metrics: {
    primaryLabel: string;
    primaryValue: string;
    guardrailLabel: string;
    guardrailValue: string;
    diagnosticLabel: string;
    diagnosticItems: string[];
  };
}

export interface CasePdfExpertContent {
  hero: {
    label: string;
    title: string;
    oneLiner: string;
    placeholder: string;
    meta: CaseHeroMetaItem[];
  };
  problemCards: CaseProblemCard[];
  research: {
    label: string;
    insights: CaseResearchInsight[];
  };
  experiment: CaseExperiment;
  metricsFramework: CaseMetricsFramework;
  secondExperiment: CaseSecondExperiment;
  myPart?: {
    label: string;
    text: string;
  };
  keyLearnings?: {
    heading: string;
    items: CaseLearningBlock[];
  };
  footer: {
    nextCaseLabel: string;
    nextCaseSlug: string;
  };
}

export interface CaseLearningBlock {
  title: string;
  text: string;
}

export type CaseDecisionRight =
  | { type: "empty" }
  | { type: "placeholder"; text: string }
  | { type: "features"; items: string[]; note: string }
  | { type: "image"; src: string; fit?: "cover" | "contain" }
  | { type: "stack"; images: string[] };

export interface CaseDecisionSubItem {
  lead: string;
  text: string;
}

export interface CaseDecisionBlock {
  kicker: string;
  question: string;
  research: string;
  pullQuote?: string;
  decision?: string;
  decisionSubItems?: CaseDecisionSubItem[];
  right: CaseDecisionRight;
  background?: string;
  hidden?: boolean;
}

export interface CaseMetricCard {
  label: string;
  value: string;
}

export interface CaseMetricsBlock {
  primaryLabel: string;
  primaryValue: string;
  secondaryCards: CaseMetricCard[];
  diagnosticLabel: string;
  diagnosticItems: string[];
}

export interface CaseSyncsanityContent {
  hero: {
    title: string;
    description: string;
    meta: CaseHeroMetaItem[];
  };
  problemCards: CaseProblemCard[];
  decisions: {
    decisionLabel: string;
    items: CaseDecisionBlock[];
  };
  metrics: CaseMetricsBlock;
  outcome: {
    heading: string;
    items: string[];
  };
  keyLearnings: {
    heading: string;
    items: CaseLearningBlock[];
  };
  footer: {
    nextCaseLabel: string;
    nextCaseSlug: string;
  };
}

export interface CaseDiploaiDecisionBlock {
  kicker: string;
  question: string;
  decision: string;
  right: CaseDecisionRight;
}

export interface CaseDiploaiContent {
  hero: {
    title: string;
    description: string;
    meta: CaseHeroMetaItem[];
  };
  problemCards: CaseProblemCard[];
  decisions: {
    decisionLabel: string;
    items: CaseDiploaiDecisionBlock[];
  };
  results: {
    heading: string;
    items: string[];
  };
  keyLearnings: {
    heading: string;
    items: CaseLearningBlock[];
  };
  footer: {
    nextCaseLabel: string;
    nextCaseSlug: string;
  };
}

export interface CaseStatCell {
  value: string;
  caption: string;
}

export interface CaseProblemIdeaRow {
  problem: string;
  idea: string;
}

export interface CaseBehaviorPhase {
  name: string;
  caption: string;
}

export interface CaseHeroBikeContent {
  hero: {
    title: string;
    meta: CaseHeroMetaItem[];
    intro: string;
  };
  challenge: {
    cards: CaseProblemCard[];
  };
  research: {
    heading: string;
    stats: CaseStatCell[];
    chart: {
      label: string;
      title: string;
      maxScale: number;
      bars: { label: string; value: number }[];
    };
    quotes: {
      label: string;
      items: string[];
    };
  };
  jtbd: {
    heading: string;
    role: string;
    task: string;
    context: string;
    goal: string;
  };
  behaviorLoop: {
    heading: string;
    phases: CaseBehaviorPhase[];
  };
  problemsToIdeas: {
    heading: string;
    rows: CaseProblemIdeaRow[];
  };
  scope: {
    heading: string;
    body: string;
    diagramSrc: string;
  };
  delivered: {
    heading: string;
    items: string[];
  };
  keyLearnings: {
    heading: string;
    items: CaseLearningBlock[];
  };
  footer: {
    nextCaseLabel: string;
    nextCaseSlug: string;
  };
}

export interface CaseTalkStudioContent {
  hero: {
    title: string;
    support: string;
    meta: CaseHeroMetaItem[];
  };
  challenge: {
    cards: CaseProblemCard[];
  };
  stats: {
    cards: CaseStatCell[];
  };
  research: {
    heading: string;
    intro: string;
    blocks: CaseResearchInsight[];
  };
  problemsToSolutions: {
    heading: string;
    rows: CaseProblemIdeaRow[];
  };
  keyLearnings: {
    heading: string;
    items: CaseLearningBlock[];
  };
}

export interface SiteContent {
  lang: "en" | "ua";
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    langToggle: string;
  };
  sidebar: {
    name: string;
    tagline: string;
  };
  header: {
    discuss: string;
    email: string;
    emailCopied: string;
    linkedin: string;
  };
  hero: {
    tags: string[];
    title: string;
    segments: HeroSegment[];
  };
  aboutPage: {
    comingSoon: string;
  };
  contact: {
    email: string;
  };
  projects: {
    largeCards: ProjectCard[];
    consultCards: ConsultCard[];
    splitProjects: SplitProject[];
    moreProjects: MoreProject[];
  };
  contactCta: {
    heading: string;
    subtext: string;
    emailLabel: string;
    emailCopiedLabel: string;
    linkedinLabel: string;
  };
  casePdfExpert: CasePdfExpertContent;
  caseSyncsanity: CaseSyncsanityContent;
  caseDiploai: CaseDiploaiContent;
  caseHeroBike: CaseHeroBikeContent;
  caseTalkStudio: CaseTalkStudioContent;
}
