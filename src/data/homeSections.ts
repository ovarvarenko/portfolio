export type HomeSectionCard =
  | { kind: "large"; slug: string }
  | { kind: "result"; slug: string }
  | { kind: "split"; slug: string };

export interface HomeSection {
  id: string;
  title: string;
  cards: HomeSectionCard[];
}

export const homeSections: HomeSection[] = [
  {
    id: "b2c",
    title: "B2C & Growth",
    cards: [
      { kind: "large", slug: "pdf-expert" },
      { kind: "large", slug: "syncsanity" },
    ],
  },
  {
    id: "b2b",
    title: "B2B & Complex Products",
    cards: [
      { kind: "large", slug: "diploai" },
      { kind: "split", slug: "logistics" },
      { kind: "split", slug: "ehs-platform" },
    ],
  },
  {
    id: "research",
    title: "Research & Strategy",
    cards: [
      { kind: "result", slug: "talk-studio" },
      { kind: "result", slug: "hero-bike" },
    ],
  },
];

/** Header anchor links, in display order. */
export const homeNavLinks = [
  ...homeSections.map(({ id, title }) => ({ id, label: title })),
  { id: "contact", label: "Contact" },
];
