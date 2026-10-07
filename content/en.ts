import type { SiteContent } from "./types";

export const en: SiteContent = {
  lang: "en",
  meta: {
    title: "Oleksandra Varvarenko — Product Design & Growth",
    description:
      "Senior Product Designer focused on Growth — discovery, 0→1 product work, and moving the metrics that matter.",
  },
  nav: {
    home: "Home",
    langToggle: "UA",
  },
  sidebar: {
    name: "Oleksandra Varvarenko",
    tagline: "Build what's worth building",
  },
  header: {
    discuss: "Discuss a project",
    email: "Email",
    emailCopied: "Copied!",
    linkedin: "LinkedIn ↗",
  },
  hero: {
    tags: ["End-to-end", "Strategy", "Growth"],
    title: "AI-native Product Designer with a Computer Science degree",
    segments: [
      {
        label: "Complex products:",
        description: "multi-role platforms, dashboards and design systems that scale.",
      },
      {
        label: "Growth:",
        description: "onboarding, paywalls and experiments tied to real metrics.",
      },
    ],
  },
  aboutPage: {
    comingSoon: "Coming soon",
  },
  contact: {
    email: "olexavarvar@gmail.com",
  },
  projects: {
    largeCards: [
      {
        slug: "pdf-expert",
        title: "PDF Expert",
        summary:
          "Increased trial conversion for Readdle's PDF Expert by replacing profession-based onboarding with JTBD segmentation. Personalized feature showcase, context-aware paywalls, and a file-scanning flow that recommends tools based on user's actual documents. Every hypothesis tied to CR-to-trial with trial-to-paid as guardrail.",
        tag: "Growth Design · Onboarding · Paywall",
        images: [
          "/images/cases/pdfexpert-home.png",
          "/images/cases/pdfexpert-paywall1.png",
          "/images/cases/pdfexpert-paywall2.png",
        ],
        pills: ["JTBD onboarding", "Personalized paywall", "File-based recommendations"],
        problem:
          "Onboarding asked users about their profession — then ignored the answer. Users landed on a generic Home screen, hit paywalls before seeing value, and dropped off.",
        approach:
          "Replaced profession-based segmentation with JTBD. Personalized feature showcase, Home, and paywall based on what users actually wanted. Built a flow that recommends tools based on real content.",
      },
      {
        slug: "syncsanity",
        title: "SyncSanity",
        summary:
          "Household app for couples 25–40 who lose track of chores across chat apps and mental lists. Validated with 50+ interviews: 84% carry unequal mental load, 90% recall a recent chore argument. Designed adaptive task engine, partner-aware sync, weekly streaks, and area-based home management. North Star metric: both partners actively using the app.",
        tag: "Raw idea → MVP · CustDev · Retention mechanics",
        images: [
          "/images/cases/syncsanity-home.png",
          "/images/cases/syncsanity-insights.png",
          "/images/cases/syncsanity-lists.png",
        ],
        pills: ["Raw idea → MVP", "CustDev", "Retention mechanics"],
        problem:
          "Couples 25–40 lose track of household work across chat apps and mental lists. 84% carry unequal mental load, 90% recall a recent chore argument, 70% lose tasks in messaging apps. Existing tools track tasks — but ignore who carries the invisible work.",
        approach:
          "Areas map real home zones instead of abstract to-do lists. Adaptive engine learns routines and adjusts task frequency. Partner-aware sync keeps both contributions visible. North Star: both partners completing at least 3 tasks in the same week.",
      },
      {
        slug: "diploai",
        title: "DiploAI",
        summary:
          "Automotive teams track regulatory changes manually — up to 1,000 updates a day, across dozens of global sources. Solo-designed the MVP from discovery to delivery.",
        tag: "0→1 MVP · Solo design · Regulatory intelligence",
        images: ["/images/cases/diploai/home.png"],
        pills: ["0→1 MVP", "AI + human review", "B2B SaaS"],
        problem:
          "Automotive teams track regulatory changes manually — up to 1,000 updates a day, across dozens of global sources. No prior technical expertise assumed, but the data is dense, and slow analysis means missed compliance windows.",
        approach:
          "Solo-designed the MVP from discovery to delivery. Simplified input to a single vehicle/component form, let AI surface relevant regulations, and built a scalable design system for the reports and workflows that follow.",
      },
    ],
    consultCards: [
      {
        slug: "talk-studio",
        tag: "UX Consultant",
        title: "Talk Studio",
        problem: "An LMS students didn't want to use",
        result: "Lifted reported usability from 20% to 87%",
        context:
          "Rebuilt a struggling English-school LMS around mobile-first navigation, progress tracking, and accessibility.",
      },
      {
        slug: "hero-bike",
        tag: "UX Consultant",
        title: "Hero Bike",
        problem: "An idea with no proof of demand",
        result: "Took a founder's concept to an investable prototype",
        context:
          "Validated a two-sided bike-rental marketplace through research and defined a 26-screen MVP, mentoring a junior designer through UI.",
      },
    ],
    moreProjects: [
      {
        slug: "logistics",
        image: "/work/more/logistics-image.jpg",
        title: "Logistics Platform",
        description:
          "Web platform for cargo tracking, route planning and delivery monitoring for an international manufacturing company.",
        results: [
          "New flows shipped into a live product — zero disruption to dispatchers' daily operations",
          "Usability improved through structure alone, keeping the existing design system intact",
        ],
        tags: ["B2B SaaS", "Logistics", "Under NDA"],
      },
      {
        slug: "eleviate",
        image: "/work/more/eleviate-image.jpg",
        title: "Eleviate",
        description:
          "End-to-end redesign and rebrand of an AI-powered wellbeing app — fitness, mindfulness, nutrition — built for daily engagement and long-term retention.",
        results: [
          "Fully rebranded app shipped to production — improved retention through clearer flows and better onboarding",
          "Positive user feedback, supported the app's App Store growth",
        ],
        tags: ["B2C", "Wellbeing", "Rebrand"],
      },
      {
        slug: "ehs-platform",
        image: "/work/more/ehs-image.jpg",
        title: "EHS Platform",
        description:
          "Solo designer rebuilding a fragmented enterprise EHS platform — unified design system, microinteractions and UI states across complex compliance workflows.",
        results: [
          "One unified design system replaced years of inconsistent iterations — typography, components, interaction logic",
          "Every UI state and microinteraction defined — dynamic content stopped breaking",
        ],
        tags: ["Enterprise", "Design System", "Under NDA"],
      },
      {
        slug: "bo-cocktails",
        image: "/work/more/bo-cocktails-image.jpg",
        title: "BO Cocktails",
        description:
          "Product designer on a cocktail-discovery mobile app — IA for a large drinks database, component system, App Store-ready visual design.",
        results: [
          "MVP delivered with \"From What I Have\" generation and ingredient-matching across hundreds of cocktails",
          "Design foundation ready for App Store release, with marketing-ready visuals",
        ],
        tags: ["B2C", "Mobile", "Consumer"],
      },
    ],
  },
  contactCta: {
    heading: "Let's build something worth building",
    subtext: "Looking for a product designer who leads with decisions? Let's talk.",
    emailLabel: "Email",
    emailCopiedLabel: "Copied!",
    linkedinLabel: "LinkedIn",
  },
  casePdfExpert: {
    hero: {
      label: "Growth Design",
      title: "Launching a series of A/B tests to increase trial conversion",
      oneLiner:
        "The paywall was losing nearly 70% of users, while generating the highest share of subscriptions in the app, so clearly there was a gap between potential and performance. I dug into the onboarding funnel, mapped where and why users dropped off, and designed a set of hypotheses to close that gap.",
      placeholder: "PHONE MOCKUP: PDF Expert personalized Home screen or JTBD selector screen",
      meta: [
        { label: "Role", value: "Growth Designer" },
        { label: "Team", value: "3 team members" },
        { label: "Key metric", value: "CR to trial" },
      ],
    },
    problemCards: [
      {
        number: "1",
        text: "Users don't fully understand the product's value after installation",
      },
      {
        number: "2",
        text: "Some users never reach the paywall and don't convert to a subscription",
      },
      {
        number: "3",
        text: "Others can't find relevant tools and also don't convert",
      },
    ],
    research: {
      label: "Research findings",
      insights: [
        {
          title: "Profession ≠ use case",
          text: "The app asks users about their job, but an architect might use it for studying, not design work. Profession doesn't predict what someone actually needs from a PDF tool.",
        },
        {
          title: "Users arrive with one specific job",
          text: "Sign a contract, annotate lecture notes, convert a file. They don't need 50+ tools — they need the one they came for.",
        },
        {
          title: "Paywall doesn't explain value",
          text: "The paywall is generic — same headline, same feature list for everyone. It tells users what the app can do in general, but never connects to what this specific user actually needs.",
        },
      ],
    },
    experiment: {
      label: "Experiment 1: A/B/C",
      variants: [
        {
          label: "A — Control",
          text: "Current onboarding flow. No changes. Baseline for comparison.",
        },
        {
          label: "B — Intent question only",
          text: "Replace the profession question with an intent question. Validate that the new question doesn't increase drop rate compared to current. Validate JTBD → tool mapping. Discover unexpected patterns.",
        },
        {
          label: "C — Full customization",
          text: "Intent question + personalized feature showcase, Home screen, and paywall. Full JTBD-driven experience.",
        },
      ],
      hypotheses: [
        {
          title: "Hypothesis 1",
          text: "If we recommend a feature on the Home screen based on the user's goal, CR to Trial will increase, drop-off on onboarding screens will decrease, and the percentage of users completing their chosen action will grow.",
        },
        {
          title: "Hypothesis 2",
          text: "If we personalize content for the user's selected goal before the paywall, users will see how the product solves their specific need — increasing CR to trial compared to the control variant.",
        },
        {
          title: "Hypothesis 3",
          text: "If we personalize Home screen content for the user's selected goal, users in the non-trial segment will start using the right tool — increasing CR to trial vs control. For the trial segment, clicks on matched tools will increase.",
        },
      ],
      image: "/images/cases/pdfexpert-hypothesis-before-after.png",
      screens: [
        { label: "JTBD", image: "/images/cases/pdfexpert-jtbd.png" },
        { label: "Paywall", image: "/images/cases/pdfexpert-paywall-experiment.png" },
        { label: "Home", image: "/images/cases/pdfexpert-experiment-home.png" },
      ],
    },
    metricsFramework: {
      primary: {
        label: "Primary metric",
        value: "CR to trial ↑",
        tags: ["B", "C"],
      },
      guardrail: {
        label: "Guardrail metric",
        value: "Trial-to-paid",
        valueSuffix: "— must not decrease",
        valueTags: ["C"],
        note: "Drop rate",
        noteSuffix: "on goal selection screen",
        noteTags: ["B"],
      },
      diagnostic: {
        label: "Diagnostic metrics",
        items: [
          {
            tag: "B",
            text: "Top 4 tools each JTBD segment opens first in initial sessions",
          },
          {
            tag: "C",
            text: "% users who opened highlighted feature first vs control",
          },
          {
            tag: "C",
            text: "% 'Just exploring' users who downloaded a doc via banner",
          },
          {
            tag: "C",
            text: "Drop rate between goal selection and paywall",
          },
          {
            tag: "B+C",
            text: "CR to trial per JTBD segment",
          },
        ],
      },
    },
    secondExperiment: {
      label: "Experiment 2: A/B",
      variants: [
        {
          label: "A — Control",
          text: "Current onboarding flow. No changes. Baseline for comparison.",
        },
        {
          label: "B — Document scan",
          text: "User picks where their documents live — on device, cloud storage, photos, or scans one directly. The app analyzes what it finds and recommends tools based on what it actually finds in the files.",
        },
      ],
      hypothesis: {
        title: "Hypothesis",
        text: "If a user uploads a document during onboarding and we recommend tools based on file content, they'll see the product's value against their real need before the paywall — increasing CR to trial relative to the current flow.",
      },
      image: "/images/cases/pdfexpert-hypothesis2-before-after.png",
      screens: [
        { label: "Scanning", image: "/images/cases/pdfexpert-scanning.png" },
        { label: "Paywall", image: "/images/cases/pdfexpert-paywall-after-scan.png" },
        { label: "Home", image: "/images/cases/pdfexpert-home-after-scan.png" },
      ],
      metrics: {
        primaryLabel: "Primary metric",
        primaryValue: "CR to trial ↑",
        guardrailLabel: "Guardrail metric",
        guardrailValue: "Trial-to-paid",
        diagnosticLabel: "Diagnostic metrics",
        diagnosticItems: [
          "% of users who granted file access vs closed the screen",
          "% of users who reached the paywall after scanning vs current flow",
          "CR to trial by file source — on device vs cloud storage vs scan",
        ],
      },
    },
    footer: {
      nextCaseLabel: "Next case: SyncSanity →",
      nextCaseSlug: "syncsanity",
    },
  },
  caseSyncsanity: {
    hero: {
      title: "From vague idea to fundable MVP in 12 weeks",
      description:
        "A founder had a vision for a household management app — but the space already had 50+ competitors. I led product strategy and UX research to find the gap, validate demand, and scope an MVP that a solo developer could actually build.",
      meta: [
        { label: "Role", value: "Founding Designer & Consultant" },
        { label: "Team", value: "Founder + Designer" },
        { label: "Timeline", value: "12 weeks" },
      ],
    },
    problemCards: [
      {
        number: "Challenge 1",
        text: "A $10B+ market with 63M+ active users — and every app claims the same thing",
      },
      {
        number: "Challenge 2",
        text: "Solo developer. Every feature had to be feasible to build alone",
      },
      {
        number: "Challenge 3",
        text: "Limited budget. No months for full development — only what truly matters",
      },
    ],
    decisions: {
      decisionLabel: "The decision",
      items: [
        {
          kicker: "User research",
          question: "Who is this actually for?",
          research:
            "The strongest pain — invisible labor and fairness — only exists when two people share responsibility. Every competitor targets broad \"families.\" Couples 25–40 who share a household are underserved and highly motivated.",
          pullQuote:
            "When my partner and I are both exhausted after work and one of us has to remember, assign, and follow up on every household task, I want the mental load to be shared and visible, so I can stop feeling like the manager of our relationship.",
          decision:
            "Own the couples segment. Smaller addressable market at launch, but a sharper value prop than competing for everyone. Every product decision downstream — tone, features, onboarding — is shaped by this choice.",
          right: { type: "image", src: "/images/cases/syncsanity-research.png" },
        },
        {
          kicker: "Scope",
          question: "What gets built and what gets cut?",
          research:
            "Together, we brainstormed 15+ potential features. Building all of them meant 6+ months for a solo developer with no validated demand.",
          decision:
            "Ran each feature through three filters: does research say users need it, can one developer build it in the MVP timeline, does it support the North Star metric. Three survived.",
          right: {
            type: "features",
            items: [
              "Smart household tasks with areas",
              "Partner-aware contribution tracking",
              "Weekly streak mechanics",
            ],
            note: "12 features moved to post-MVP backlog",
          },
        },
        {
          kicker: "Onboarding",
          question: "How do we get users to their first win?",
          research:
            "Get someone past the first screen, to something useful — that's the whole goal of onboarding. Every household is different, and a handful of onboarding questions doesn't tell you what feels like a meaningful first win to any given person.",
          decisionSubItems: [
            {
              lead: "Setup, personalized",
              text: "5 questions. We ask for a partner's name early — with a nickname option — so we can use it to personalize the rest of onboarding.",
            },
            {
              lead: "What to lead with",
              text: "We looked at detecting more about the household upfront — pets, routines — and leading with tasks tailored to that, but that's too much for a first version. So we simplified: pick which area needs attention first, and the home screen pulls tasks from there, one at a time, until something gets assigned.",
            },
          ],
          right: {
            type: "image",
            src: "/images/cases/syncsanity-onboarding.png",
          },
          background: "#EDFDF9",
        },
        {
          kicker: "Mechanics",
          question: "How do chores work in the app?",
          research:
            "Users already know what \"clean the kitchen\" means — they don't need step-by-step instructions. But they do need realistic defaults. Each area (Kitchen, Bathroom, Laundry) comes pre-loaded with a starter task pack — sensible frequency, duration, and effort estimates based on what users told us they actually forget.",
          decision:
            "Instead of asking users to configure everything from scratch (setup fatigue was the #1 drop-off point in research), the app ships with defaults — then adapts. Skip a task repeatedly, and it backs off. Always hand it to your partner, and the system notices. Every task stays fully editable — change the frequency, reassign it, or turn it off — but the starting point removes the blank-page problem entirely.",
          right: {
            type: "image",
            src: "/images/cases/syncsanity-mechanics.png",
          },
          background: "#F5F1FF",
        },
        {
          kicker: "Direct request",
          question: "Was there anything users just asked for directly?",
          research:
            "Not every feature came from reading between the lines of an interview. Groceries was different — people said it outright, unprompted, in nearly every conversation: \"we're always out of something and nobody notices until it's too late.\" It wasn't a subtle pattern to extract, it was the most repeated sentence in the whole research set.",
          decision:
            "When a request shows up that consistently, explicitly, across nearly every interview, it earns a place in the MVP even without deeper interpretation — the signal is already as strong as it gets. Groceries connects into the shared Lists system: items get added the moment either partner notices something running low, and the app flags when a household is close to running out of a basic.",
          right: {
            type: "image",
            src: "/images/cases/syncsanity-groceries.png",
          },
          background: "#FDF6ED",
        },
        {
          kicker: "Fairness",
          question: "How is fairness tracked?",
          research:
            "One person does everything, but there's no way to see it. 84% of interviewed couples showed a clear \"manager vs. executor\" split, this was the single strongest emotional pain point across all interviews.",
          decision:
            "Built an adaptive task distribution engine. Every task has a built-in difficulty weight (e.g. cleaning the bathroom scores higher than wiping a counter). The app distributes tasks evenly between partners based on these weights. Partners can adjust difficulty levels and reassign tasks to fit their household. The system tracks who picks up what first, balancing the load over time so neither partner becomes the permanent \"manager.\"",
          right: {
            type: "image",
            src: "/images/cases/syncsanity-fairness.png",
          },
          background: "#EDF8FD",
        },
        {
          kicker: "Habit & retention",
          question: "What keeps people coming back?",
          research:
            "Household apps have a retention problem — people download, use for a few days, and abandon. Very few competitors have built-in mechanics for returning users. Chores happen daily — dishes, cooking, tidying. Groceries 1–2 times a week. The natural rhythm is daily, but daily tracking punishes missed days and kills motivation.",
          decision:
            "Weekly streaks: complete all home areas by Sunday and the streak continues. Miss a day? No problem — the cycle is weekly, matching how real households run. Tasks are daily, but the measurement is weekly — giving flexibility without guilt. Retention metric for each user: at least 3 tasks completed per week. For groceries: items added to the shared list that week. 9 launch achievements reward streak milestones, new areas, and consistency.",
          right: {
            type: "image",
            src: "/images/cases/syncsanity-retention.png",
          },
          background: "#FDF0ED",
        },
        {
          kicker: "Monetization",
          question: "Where does the paywall go?",
          research:
            "First job was simple — get people using it. Charge too hard upfront and you're left with no one to learn from.",
          decision:
            "Since this was the first MVP, the priority was gathering users first — so we'd have people to test the offer on. Three calls shaped it:",
          decisionSubItems: [
            {
              lead: "Reverse trial over a hard paywall",
              text: "Wider pool of users, even if conversion is lower. More people to learn from.",
            },
            {
              lead: "Two weeks instead of one",
              text: "Two weekly cycles gives enough time for a habit to actually start forming.",
            },
            {
              lead: "Paywall on partner features",
              text: "Solo stays free forever as the entry point. Partner features are the paid layer — and watching whether solo users stick around tells us if the model needs adjusting.",
            },
          ],
          right: { type: "image", src: "/images/cases/syncsanity-paywall.png" },
          background: "#F3FDED",
        },
        {
          kicker: "Branding",
          hidden: true,
          question: "Why does this feel the way it feels?",
          research:
            "Fairness and chore-splitting can turn into a management topic fast — someone grading someone else. Research told us that's exactly what makes couples abandon these apps. The visual direction pushed against it on purpose.",
          decisionSubItems: [
            {
              lead: "Color-coded categories, not a to-do list",
              text: "Kitchen tasks are purple, bathroom is blue, cleaning is pink. It's not decoration — it's how the app avoids looking like a flat checklist. A glance at the color tells you the area before you read a word.",
            },
            {
              lead: "Warm tone, careful edges",
              text: "The copy does the work here — language that feels like a person talking, not a system logging your chores. Splitting tasks fairly is a sensitive subject in a lot of relationships, and the tone had to stay light without turning cute.",
            },
            {
              lead: "Careful not to tip into childish",
              text: "Rounded, but not too soft — corners stayed sharper than a typical \"fun app\" would use. Background neutral, not pastel. The primary color ended up a muted green instead of the expected soft pastel — closer to calm than playful.",
            },
          ],
          right: { type: "empty" },
        },
      ],
    },
    metrics: {
      primaryLabel: "North Star metric",
      primaryValue: "Both partners completing 3+ tasks in the same week",
      secondaryCards: [
        {
          label: "Activation metric",
          value: "% of invited partners who accept and complete onboarding",
        },
        {
          label: "Guardrail metric",
          value: "Reverse trial → paid conversion",
        },
      ],
      diagnosticLabel: "Diagnostic metrics",
      diagnosticItems: [
        "Manager–executor split — fairness distribution across partners",
        "Streak completion rate, week over week",
        "Achievement unlock rate across the 9 achievements",
        "Feature/area usage — which areas partners actually used",
      ],
    },
    keyLearnings: {
      heading: "Key Learnings",
      items: [
        {
          title: "Focus Under Uncertainty",
          text: "Setting clear criteria for what's important enough right now — that's what got us through, more than any speed-vs-quality tradeoff.",
        },
        {
          title: "Ship the Hooks Early, Even Imperfect",
          text: "Retention and engagement mechanics went in from day one, not fully solved — just solid enough to be a starting point for real experiments.",
        },
        {
          title: "Feedback Loops Beat Guesswork",
          text: "Fast validation and iteration told us more in a week than any internal debate could.",
        },
      ],
    },
    footer: {
      nextCaseLabel: "Next case: DiploAI →",
      nextCaseSlug: "diploai",
    },
  },
  caseDiploai: {
    hero: {
      title: "Designing trust into an AI that flags regulations",
      description:
        "Regulatory compliance for automotive manufacturers is a moving target — up to 1,000 updates a day, across dozens of global sources. DiploAI turns that into a daily review a compliance team can actually keep up with.",
      meta: [
        { label: "Role", value: "Solo Product Designer" },
        { label: "Team", value: "Founder + Designer" },
        { label: "Timeline", value: "3 months" },
      ],
    },
    problemCards: [
      {
        number: "01",
        text: "Every alert gets auto-categorized. Users won't act on a category they don't understand — the system had to explain every label it produced.",
      },
      {
        number: "02",
        text: "Regulatory text is long, technical, and cross-referenced. The interface needed to make relevance obvious before anyone reads a word of the source document.",
      },
      {
        number: "03",
        text: "Discovery, IA, hi-fi, and dev handoff — one person, one timeline.",
      },
    ],
    decisions: {
      decisionLabel: "THE DECISION",
      items: [
        {
          kicker: "Scope & input",
          question: "How do we tell the system what to look for?",
          decision:
            "Two inputs define scope before any alert gets processed — a product list (what the company makes, categorized by system) and per-agency keyword lists (include and exclude terms). Alerts get matched against both before a human ever sees them.",
          right: {
            type: "stack",
            images: [
              "/images/cases/diploai/product-list.png",
              "/images/cases/diploai/keyword-lists.png",
            ],
          },
        },
        {
          kicker: "Trust & transparency",
          question: "How does a user trust an AI categorization?",
          decision:
            "Every categorized alert shows its reasoning inline — which keyword matched, which list it came from, and why that led to Include, Exclude, or a \"Recommend\" state when confidence isn't full. The category is never just a label; it's a claim with evidence attached.",
          right: { type: "image", src: "/images/cases/diploai/report-exclude.png" },
        },
        {
          kicker: "Daily workflow",
          question: "How does daily review actually work?",
          decision:
            "Alerts arrive pre-sorted — Include, Exclude, Recommend Include, Recommend Exclude — so the team's attention goes straight to the \"Recommend\" and \"Not defined\" cases instead of the full alert feed. \"Start review\" moves through them one at a time, Previous/Next, until the queue's clear.",
          right: { type: "image", src: "/images/cases/diploai/reports-default-all.png" },
        },
        {
          kicker: "Progress & metrics",
          question: "What does progress look like?",
          decision:
            "The dashboard leads with four numbers — alerts analyzed, relevant, irrelevant, and validation required — plus a running history by date. Validation required is the number that mattered most: fewer of those, at the same accuracy, meant the categorization was earning trust.",
          right: { type: "image", src: "/images/cases/diploai/reports-dashboard.png" },
        },
      ],
    },
    results: {
      heading: "Results",
      items: [
        "Delivered a functional MVP for automotive regulatory analysis",
        "Platform in use at a top-10 automotive OEM",
        "Established a scalable design system for future modules",
      ],
    },
    keyLearnings: {
      heading: "Key Learnings",
      items: [
        {
          title: "Trust Needs Evidence",
          text: "Users won't act on an AI decision they can't see the reasoning behind — showing which keyword matched mattered more than the categorization itself.",
        },
        {
          title: "Automation Routes Attention",
          text: "Human review stayed in the loop — the win was routing attention to the cases that actually needed it, so validation dropped without losing accuracy.",
        },
        {
          title: "Dense Data Needs Fast Scanning",
          text: "Regulatory text is long and technical; the interface had to make relevance obvious before anyone read the source.",
        },
      ],
    },
    footer: {
      nextCaseLabel: "Next case: Hero Bike →",
      nextCaseSlug: "hero-bike",
    },
  },
  caseHeroBike: {
    hero: {
      title: "Took a founder's concept to an investable prototype",
      meta: [
        { label: "Role", value: "UX Consultant" },
        { label: "Timeline", value: "2 months" },
        { label: "Team", value: "Solo, mentoring a junior designer" },
      ],
      intro:
        "Hero Bike was a startup concept for a global, two-sided bike-rental marketplace — \"Airbnb for bikes.\" Travelers would discover and book bikes from local shops in any city; shops would gain access to international demand; the platform would take a cut of every booking.",
    },
    challenge: {
      cards: [
        { number: "Challenge 01", text: "Is there real demand beyond existing local bike-rental services?" },
        { number: "Challenge 02", text: "Which features are essential for an MVP versus nice-to-have?" },
        { number: "Challenge 03", text: "How do you build trust with travelers who've never used the service before?" },
        { number: "Challenge 04", text: "What's the simplest viable product that can actually test the concept?" },
      ],
    },
    research: {
      heading: "What the research showed",
      stats: [
        { value: "66%", caption: "of surveyed renters use bikes for both cross-country exploration and quick A-to-B trips — the same people, both jobs" },
        { value: "SMS broke abroad", caption: "verification failed the exact users the product targeted — travelers on foreign SIMs" },
        { value: "Trust > price", caption: "the biggest barrier was fear the bike wouldn't be real — cost came second" },
      ],
      chart: {
        label: "Survey · 6 respondents · Nov 2021",
        title: "Why did you rent a bike last time?",
        maxScale: 6,
        bars: [
          { label: "Exploring a city abroad", value: 4 },
          { label: "Quick A-to-B transport", value: 4 },
          { label: "Rides in home city", value: 2 },
          { label: "Sport / hobby", value: 0 },
        ],
      },
      quotes: {
        label: "From the interviews",
        items: [
          "We couldn't end the rental — we were too close to a restricted zone and had to walk further just to finish it.",
          "SMS verification isn't always convenient abroad — some foreign SIMs have no texts, only data.",
          "It's great that you can take two bikes on one account.",
        ],
      },
    },
    jtbd: {
      heading: "The job to be done",
      role: "tourist",
      task: "rent a bicycle",
      context: "I go on a trip",
      goal: "explore the city easily and with pleasure",
    },
    behaviorLoop: {
      heading: "The Behavior Loop",
      phases: [
        { name: "Browse", caption: "compare bikes, save favorites to come back to" },
        { name: "Verify trust", caption: "check reviews, pricing, and how the service actually works" },
        { name: "Commit", caption: "book with confidence the bike is real" },
      ],
    },
    problemsToIdeas: {
      heading: "From problems to ideas",
      rows: [
        {
          problem: "Renters hit trip-ending confusion near return zones — geofencing was never explained, so completing a rental sometimes meant an unplanned detour.",
          idea: "Show return zones clearly on the map, with in-app navigation to the nearest valid drop-off point.",
        },
        {
          problem: "An English-only interface excluded much of the platform's own target audience.",
          idea: "Localize into German, French, Italian, Spanish, Ukrainian, and Polish from day one.",
        },
        {
          problem: "SMS verification failed for travelers on foreign SIMs with data-only plans.",
          idea: "Offer email verification as a fallback to phone-based OTP.",
        },
        {
          problem: "Nothing signaled the service was trustworthy — no reviews, no visible guarantees, a bare interface.",
          idea: "Add renter and shop reviews, a calmer visual design, and clear guarantee messaging up front.",
        },
      ],
    },
    scope: {
      heading: "What I scoped",
      body:
        "26 screens across web and mobile — home, browse and filter, bicycle detail, a 4-step booking flow, saved bikes, bookings, and profile. Enough to prove the core loop — browse, verify trust, commit — without over-building for a first-time founder's budget and timeline.",
      diagramSrc: "/images/cases/hero-bike/ia-diagram.png",
    },
    delivered: {
      heading: "What was delivered",
      items: [
        "In-depth research — competitor analysis, surveys, and user interviews",
        "Defined information architecture, flow maps, and key user scenarios",
        "Wireframes through to high-fidelity UI, executed by a junior designer under my guidance",
        "Consulting and feedback on usability, accessibility, and design-system consistency",
      ],
    },
    keyLearnings: {
      heading: "Key Learnings",
      items: [
        {
          title: "Trust Converts",
          text: "For a marketplace with no track record, reviews, guarantees, and a considered visual language did more to convert skeptical travelers than any single feature.",
        },
        {
          title: "Scope Discipline Protects Founders",
          text: "The real risk for a first-time founder is runway. Cutting to 26 screens kept the prototype investable without inflating cost or timeline.",
        },
        {
          title: "Mentoring Is Part of the Deliverable",
          text: "Guiding a junior designer through UI execution meant the founder left with both a working prototype and a stronger design process.",
        },
      ],
    },
    footer: {
      nextCaseLabel: "Next case: Talk Studio →",
      nextCaseSlug: "talk-studio",
    },
  },
  caseTalkStudio: {
    hero: {
      title: "Turned the school's biggest pain point into a competitive advantage",
      support: "UX strategy and redesign of the LMS behind a creative English school.",
      meta: [
        { label: "Role", value: "Product Consultant" },
        { label: "Duration", value: "4 months" },
        { label: "Team", value: "School owner, designer, front-end developer" },
      ],
    },
    challenge: {
      cards: [
        { number: "Challenge 01", text: "Negative reviews hurt the school's reputation. Students called the platform \"confusing\", \"hard to navigate\", \"old-fashioned\"" },
        { number: "Challenge 02", text: "83% of students used mobile. The platform wasn't built for it" },
        { number: "Challenge 03", text: "Teachers struggled with unclear workflows too" },
      ],
    },
    stats: {
      cards: [
        { value: "Retention up", caption: "fewer complaints, fewer drop-offs — the school went back to growing enrollment" },
        { value: "87%", caption: "of students reported improved usability — up from 20% satisfaction before" },
        { value: "−50%", caption: "lesson search time after the redesign" },
      ],
    },
    research: {
      heading: "Research",
      intro:
        "The school owner already had a theory about what was broken. I started there — one interview to collect her wishes and constraints, and one agreement: raise usability, keep the functionality.",
      blocks: [
        {
          title: "Survey — 16 students",
          text: "Three things came out of it: 83% used the platform on mobile, course progress was unclear to everyone who mentioned it, and students actually liked that the platform wasn't overloaded. That last one became a constraint — improve navigation without adding weight.",
        },
        {
          title: "Depth interviews — 7 students",
          text: "I picked the people who reported concrete problems and dug in. The lists split cleanly by platform. Desktop: unclear progress page, small fonts, confusing headers, buttons in odd places. Mobile: lessons that wouldn't open with no error shown, no way to jump to the next lesson without going back through the course, no back button, broken word playback.",
        },
        {
          title: "Feature requests",
          text: "Interviews also surfaced ideas students asked for directly: a personal vocabulary that collects unknown words from lessons, favorite lessons, tap-to-translate inside texts, and a way to browse and buy courses.",
        },
      ],
    },
    problemsToSolutions: {
      heading: "From problems to solutions",
      rows: [
        {
          problem: "Navigation was a maze. No back button, no way to reach the next lesson without going back through the whole course, headers that didn't help.",
          idea: "New information architecture and a reworked header: search, clear backtracking, lesson-to-lesson flow.",
        },
        {
          problem: "The platform ignored its main device. 83% of students were on mobile; lessons wouldn't open, the word-search task didn't work, no error messages explained anything.",
          idea: "Mobile-first redesign: functional headers, seamless transitions, flows rebuilt for the phone.",
        },
        {
          problem: "Progress was invisible. Students couldn't tell how far they'd come or what was next.",
          idea: "Progress tracking at both course and lesson level.",
        },
        {
          problem: "Reading was hard work. Small fonts, weak contrast, unclear headings — on a platform for reading lessons.",
          idea: "Accessibility pass: larger type, stronger contrast, structured headings, alt text, captions for media.",
        },
        {
          problem: "Students wanted the platform to work for them.",
          idea: "Student-requested features shipped: personal vocabulary, favorite lessons, tap-to-translate inside texts.",
        },
      ],
    },
    keyLearnings: {
      heading: "Key Learnings",
      items: [
        {
          title: "Don't add weight to fix weight",
          text: "Students' favorite thing about the broken platform was that it felt light. Every fix had to pass that filter — better navigation, same simplicity. The constraint came from research, and it saved us from redesigning into bloat.",
        },
        {
          title: "Mobile-first was arithmetic",
          text: "83% on mobile ends the desktop-first debate before it starts. The surprising part was how many mobile failures were invisible from a desktop — broken playback, dead ends after lessons. You only find them where the users actually are.",
        },
        {
          title: "Consulting means staying until it ships",
          text: "Daily work with the front-end developer was as much a part of the job as the research. Recommendations don't move metrics; implemented ones do.",
        },
      ],
    },
  },
};
