export interface ProjectPopupContent {
  title: string;
  overview: string;
  challenges: string[];
  role: string[];
  impact: string[];
}

export const projectPopups: Record<string, ProjectPopupContent> = {
  logistics: {
    title: "Logistics Platform",
    overview:
      "Web platform for a large international manufacturer: cargo tracking, route planning and real-time delivery monitoring for dispatchers, coordinators and clients.",
    challenges: [
      "Growing a complex live system without breaking workflows people rely on every day",
      "Two very different kinds of tasks: open problems that needed discovery from scratch, and features with clear requirements from the client",
      "Fixing usability through structure alone, inside a locked design system",
      "One interface for roles with very different needs",
    ],
    role: [
      "Product designer on a live multi-role platform, one of several designers on the team, owning features from research to delivery",
      "Ran discovery and research: role mapping, user interviews and their synthesis, contextual inquiry (watching people work in the real tool), workshops with stakeholders, quantitative data analysis, competitor review",
      "Turned findings into problem briefs: root cause, affected role, goal, constraints, hypothesis and how to validate it",
      "Prioritized problems together with the client's business analyst, weighing user value against business and technical limits",
      "Designed interactions for complex flows: tables, filters, statuses, permissions and edge cases, inside Material Design with zero visual disruption for users",
      "Tested solutions in usability sessions with real users before handoff",
      "Worked closely with developers from early feasibility checks to QA, maintained the shared design system and delivered semantic handoff",
    ],
    impact: [
      "New flows stayed consistent with the rest of the platform, and users described them as fast and easy to understand",
      "Set up a clear process for rolling out new features: the order of work, plus success criteria and metrics for each launch",
      "New screens were built from existing components and patterns, so tables, charts and forms looked and worked the same for every role",
      "Developers built straight from Figma: semantic tokens and components mapped one to one to code, with every state and edge case specified upfront",
    ],
  },
  "ehs-platform": {
    title: "EHS Platform",
    overview:
      "Enterprise SaaS for environmental, health and safety compliance: inspections, real-time alerts, deficiency tracking and risk analytics.",
    challenges: [
      "A product shaped by several designers with no shared vision",
      "No design system, undefined UI states, no system feedback on loading or errors",
      "Flows that didn't match how people actually work",
    ],
    role: [
      "Solo product designer, owning research, design system, flows and delivery",
      "Led research: role mapping, user interviews and contextual inquiry, data analysis, competitor review",
      "Built the design system from scratch",
      "Redesigned key flows around real compliance scenarios",
      "Delivered semantic handoff and owned design QA until features shipped",
    ],
    impact: [
      "Turned a fragmented product into one coherent, component-based design system with every state and edge case defined, so the whole platform now looks and behaves predictably",
      "Created page templates for recurring layouts (lists, detail views, dashboards, forms), which cut the time needed to design new screens",
      "Documented the system and its usage rules, giving future designers a ready foundation to onboard quickly",
      "New features now come together from ready components and templates, shortening the path from design to release",
    ],
  },
};
