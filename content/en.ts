import type { SiteContent } from "./types";

export const en: SiteContent = {
  lang: "en",
  meta: {
    title: "Oleksandra Varvarenko — Product Design & Growth",
    description:
      "Senior Product Designer focused on Growth — discovery, 0→1 product work, and moving the metrics that matter.",
  },
  nav: {
    work: "Work",
    howIWork: "How I work",
    about: "About",
    contact: "Contact",
    langToggle: "UA",
  },
  sidebar: {
    name: "Oleksandra Varvarenko",
    tagline: "Build what's worth building",
  },
  hero: {
    titleSolid: ["Product", "Designer"],
    titleOutline: ["w/ growth-focused", "approach"],
    scrollCue: "Scroll",
  },
  introStatement: {
    lead: "I help teams validate, scope, and grow products — designing for conversion, not decoration.",
    body: [
      "I work the whole funnel, from first session to long-term retention — finding where it leaks and closing the gaps between what the product does and what marketing promises.",
      "7+ years across B2B and B2C — SaaS, telehealth, EdTech, enterprise, mobility and consumer apps. A Computer Science degree means I speak engineering and scope for what can actually be built. I like unfamiliar problems — this site, for one, I designed and built myself with Claude Code.",
    ],
  },
  work: {
    eyebrow: "Selected work",
    heading: "A few problems, each solved on its own terms",
    intro:
      "I don't reuse a playbook. Each case below shows a different approach, shaped by what the product and the business actually needed.",
    figmaCta: "More work in Figma",
    figmaUrl: "https://www.figma.com/design/4jN1TvEN8MfUARqSBnwHsD/Portfolio",
    cases: [
      {
        slug: "syncsanity",
        client: "SyncSanity",
        role: "Solo Product Designer & Strategy",
        tags: ["0→1", "UX research", "Design systems"],
        cover: "/work/syncsanity/final-ui.png",
        images: [
          "/work/syncsanity/wireframe.png",
          "/work/syncsanity/final-ui.png",
          "/work/syncsanity/kitchen-final.png",
          "/work/syncsanity/kitchen-darkmode.png",
        ],
        isLead: true,
        compareImages: {
          before: "/work/syncsanity/syncsanity-light.png",
          after: "/work/syncsanity/syncsanity-dark.png",
          beforeLabel: "Light",
          afterLabel: "Dark",
        },
        eyebrow: "Household app for couples",
        metricsLabel: "From CustDev interviews + survey",
        problem:
          "A solo founder wanted to build a household app couples would pay for — in a market with 50+ near-identical players, one developer, and a tight budget. With no room for expensive mistakes, the question wasn't how to design it. It was what was even worth building.",
        processLabel: "What I did",
        process: [
          {
            title: "Validated the problem first —",
            body: "a 12-app teardown, a 49-response survey, and CustDev interviews run on The Mom Test (asking about real past behaviour, not 'would you use this'). All three core hypotheses — problem, solution, value — confirmed. The killer insight: people quit these apps because the app itself feels like another chore.",
          },
          {
            title: "Repositioned to a niche —",
            body: "narrowed 'app for families' to couples (25–40), an underserved segment nobody owns. Clearer value prop, scope a solo dev could ship. The free-solo / paid-couples split became the monetization model.",
          },
          {
            title: "Designed for retention —",
            body: "weekly streaks instead of guilt-inducing daily ones, 'areas' instead of overwhelming task lists, partner-aware sync by default, and a smart engine that auto-generates tasks to kill setup fatigue.",
          },
          {
            title: "Success metrics & North Star —",
            body: "instead of vanity metrics like downloads, I set the North Star as 'both partners active,' then defined what the MVP would track: partner co-registration (activation), Week-1 couple retention, task completion, and activity balance.",
          },
          {
            title: "Cut cost without cutting value —",
            body: "adaptive logic instead of real AI (~80% of the benefit, ~20% of the cost) and a component system so a solo dev ships without waiting on design.",
          },
        ],
        result: [
          "A vague concept became a validated, build-ready product strategy",
          "A measurable growth model defined before build — not vanity downloads",
          "Monetization mapped: freemium with paid family-sharing as the conversion trigger, toward a $10K MRR goal",
        ],
        metrics: [
          { value: "84%", label: "of couples carry an unequal 'mental load'" },
          { value: "90%", label: "recalled a chore-related argument in the past week" },
          { value: "70%", label: "were losing their lists inside chat apps" },
        ],
        links: [
          {
            label: "Full validation report ↗",
            url: "https://docs.google.com/document/d/1It22AOYv6A21wCjsR3gW8QJi3lgDworA_RLJqaXW2Ps/edit",
          },
          {
            label: "Final designs in Figma ↗",
            url: "https://www.figma.com/design/4jN1TvEN8MfUARqSBnwHsD/Portfolio",
          },
        ],
      },
      {
        slug: "talk-studio",
        client: "Talk Studio",
        role: "Product Designer (UX & Strategy)",
        tags: ["UX research", "LMS redesign", "Accessibility"],
        cover: "/work/talkstudio/talk-studio-image.jpg",
        images: [],
        eyebrow: "Learning platform redesign",
        problem:
          "Talk Studio's proprietary LMS — the core of the school's business model — was losing students to poor usability. Reviews called it confusing and old-fashioned. 83% of students were on mobile, but the platform wasn't built for it.",
        process: [
          {
            title: "Research.",
            body: "Online survey plus in-depth interviews to find the specific friction points behind the complaints, layered against LMS UX best practice on navigation, orientation, and progress tracking.",
          },
          {
            title: "Solution.",
            body: "New information architecture, mobile-first navigation, course- and lesson-level progress tracking, a reworked header with real search and backtracking, plus student-focused additions — favorites, personal vocabulary, in-text translation pop-ups.",
          },
          {
            title: "Accessibility.",
            body: "Larger font sizes, stronger contrast, alt text, structured headings, and captions — improvements that helped every student, not just the ones who complained.",
          },
        ],
        result: [
          "Usability satisfaction jumped from 20% to 87% of students reporting improvement",
          "Lesson search time cut in half through simplified navigation",
          "Mobile experience rebuilt around how students actually use the platform",
          "The LMS went from the school's biggest complaint to a competitive advantage",
        ],
        metrics: [
          { value: "87%", label: "reported improved usability" },
          { value: "50%", label: "faster lesson search" },
          { value: "83%", label: "of students on mobile" },
        ],
        links: [
          {
            label: "Read full case study ↗",
            url: "https://cheddar-frost-f6a.notion.site/Talk-Studio-403b962d8e9d824299298109c6f1cf86",
          },
        ],
      },
      {
        slug: "hero-bike",
        client: "Hero Bike",
        role: "Product Strategy Consultant",
        tags: ["0→1", "Marketplace", "Research"],
        cover: "/work/herobike/bike-rent-image.jpg",
        images: [
          "/work/herobike/research-findings.png",
          "/work/herobike/screens-overview.png",
        ],
        eyebrow: "Global bike rental marketplace",
        problem:
          "A first-time founder wanted to build a two-sided, global bike-rental marketplace — like Airbnb for bikes, connecting travelers with local rentals worldwide. Before building anything, three questions needed answers: is there real demand, what's essential for an MVP, and how do you build trust with travelers renting from a stranger abroad?",
        process: [
          {
            title: "Research.",
            body: "Competitive analysis across existing bike-rental services, an original survey, and review-mining to understand where current options fail travelers — broken language support, awkward return zones, SMS verification that doesn't work abroad.",
          },
          {
            title: "Architecture & flows.",
            body: "Defined information architecture and key user flows for both web and mobile, scoped to what a real MVP needed to prove the concept rather than what would be nice to have eventually.",
          },
          {
            title: "Prototype & mentoring.",
            body: "Built wireframes and oversaw the transition to a 26-screen high-fidelity prototype, mentoring a junior designer through UI execution along the way.",
          },
        ],
        result: [
          "Validated the concept through structured competitor and user research",
          "Delivered a 26-screen prototype ready for investor pitch and user testing",
          "Gave the founder a strategic framework for evaluating development partners",
          "Reduced uncertainty going into the next funding conversation",
        ],
        metrics: [
          { value: "26", label: "screens to investor-ready prototype" },
          { value: "12+", label: "competitors analyzed" },
        ],
        links: [
          {
            label: "Read full case study ↗",
            url: "https://cheddar-frost-f6a.notion.site/Hero-Bike-2a6b962d8e9d832a97ef01051e39da1e",
          },
        ],
      },
    ],
    more: {
      eyebrow: "More work",
      items: [
        {
          slug: "logistics",
          image: "/work/more/logistics-image.jpg",
          title: "Logistics Platform",
          description:
            "Web platform for cargo tracking, route planning and delivery monitoring for an international manufacturing company.",
          role: "Product Designer",
          tags: ["B2B SaaS", "Logistics", "Under NDA"],
        },
        {
          slug: "eleviate",
          image: "/work/more/eleviate-image.jpg",
          title: "Eleviate",
          description:
            "End-to-end redesign and rebrand of an AI-powered wellbeing app — fitness, mindfulness, nutrition — built for daily engagement and long-term retention.",
          role: "Product Designer",
          tags: ["B2C", "Wellbeing", "Rebrand"],
        },
        {
          slug: "diploai",
          image: "/work/more/diploai-image.jpg",
          title: "DiploAI",
          description:
            "Solo product designer on an MVP for a regulatory-compliance platform — designed the IA, flows and a scalable design system for early adopters.",
          role: "Solo Product Designer",
          tags: ["B2B SaaS", "Compliance", "Design System"],
        },
        {
          slug: "ehs-platform",
          image: "/work/more/ehs-image.jpg",
          title: "EHS Platform",
          description:
            "Sole designer rebuilding a fragmented enterprise EHS platform — unified design system, microinteractions and UI states across complex compliance workflows.",
          role: "Sole Product Designer",
          tags: ["Enterprise", "Design System", "Under NDA"],
        },
        {
          slug: "bo-cocktails",
          image: "/work/more/bo-cocktails-image.jpg",
          title: "BO Cocktails",
          description:
            "Product designer on a cocktail-discovery mobile app — IA for a large drinks database, component system, App Store-ready visual design.",
          role: "Product Designer",
          tags: ["B2C", "Mobile", "Consumer"],
        },
      ],
    },
  },
  howIWork: {
    eyebrow: "How I work",
    heading: "Three things I don't skip",
    steps: [
      {
        number: "01",
        title: "Discovery before pixels",
        body: "I don't design from a brief — I design from what users actually say, do, and quit over. Interviews, surveys, competitive teardown. If the strategy is wrong, the prettiest UI just fails more elegantly.",
      },
      {
        number: "02",
        title: "Designing for the metric",
        body: "Every screen ties back to a number someone in the business cares about — activation, retention, conversion, development cost. If a design decision can't point to the metric it's supposed to move, it's a guess, not a decision.",
      },
      {
        number: "03",
        title: "Shipping at scale",
        body: "Design systems, Auto Layout, documented handoff. Good design that can't be built fast or maintained cheaply isn't good design — it's a liability with nice typography.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's build something worth building",
    subhead:
      "Open to senior product design and growth roles, and select consulting work.",
    emailLabel: "Email",
    email: "olexavarvar@gmail.com",
    linkedinLabel: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/oleksandra-varvarenko",
    cvLabel: "Download CV",
    cvUrl: "/cv.pdf",
  },
  footer: {
    note: "Designed and built by Oleksandra Varvarenko.",
  },
};
