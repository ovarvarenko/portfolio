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
      "Growing a complex system without breaking workflows people rely on",
      "Fixing usability through structure alone, inside a locked design system",
      "One interface for roles with very different needs",
    ],
    role: [
      "Product designer on a live, multi-role platform, one of several designers on the team",
      "Led research: role mapping, user interviews and contextual inquiry, quantitative and qualitative data analysis, competitor review",
      "Turned findings into problem briefs: root cause, affected role, goal, constraints, hypothesis, validation method",
      "Designed new flows and redesigned existing ones inside Material Design, with zero visual disruption for users",
      "Maintained the design system for the whole design team: shared components and documented patterns for tables, charts and filters",
      "Delivered semantic handoff to developers",
    ],
    impact: [
      "New flows stayed consistent with the rest of the platform, and users described them as fast and easy to understand",
      "Set up a clear process for rolling out new features: defined the order of work and success criteria with metrics to measure each launch",
      "New screens were assembled from existing components and patterns, keeping tables, charts and forms consistent across every role",
      "Developers built straight from Figma: semantic tokens and components mapped one to one to code, every state and edge case specified upfront",
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
