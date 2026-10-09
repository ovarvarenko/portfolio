import type { SiteContent } from "./types";
import { en } from "./en";

export const ua: SiteContent = {
  lang: "ua",
  meta: {
    title: "Олександра Варваренко — Product Design & Growth",
    description:
      "Senior продакт-дизайнерка, яка фокусується на Growth — дискавері, 0→1 продукти та метрики, що мають значення.",
  },
  nav: {
    home: "Головна",
    langToggle: "EN",
  },
  sidebar: {
    name: "Олександра Варваренко",
    tagline: "Будуй те, що варто будувати",
  },
  header: {
    discuss: "Обговорити проєкт:",
    email: "Email",
    emailCopied: "Скопійовано!",
    linkedin: "LinkedIn ↗",
  },
  hero: {
    tags: ["0→1", "Strategy", "Growth"],
    title: "Продакт-дизайнерка — для фаундерів на старті та команд, що ростуть",
    segments: [
      {
        label: "Ідея → MVP:",
        description: "дискавері, скоуп, продуктові рішення до коду.",
      },
      {
        label: "Фандовані продукти:",
        description:
          "онбординг для активації, механіки retention, монетизація, прив'язана до реальних метрик.",
      },
    ],
  },
  aboutPage: {
    comingSoon: "Скоро",
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
          "Підвищила конверсію в trial для PDF Expert від Readdle, замінивши онбординг за професією на JTBD-сегментацію. Персоналізований показ фіч, контекстні paywall'и та флоу сканування файлів, що рекомендує інструменти на основі реальних документів користувача. Кожна гіпотеза прив'язана до CR-to-trial з trial-to-paid як guardrail-метрикою.",
        tag: "Growth Design · Онбординг · Paywall",
        images: [
          "/images/cases/pdfexpert-home.webp",
          "/images/cases/pdfexpert-paywall1.webp",
          "/images/cases/pdfexpert-paywall2.webp",
        ],
        pills: ["JTBD-онбординг", "Персоналізований paywall", "Рекомендації на основі файлів"],
        problem:
          "Онбординг питав користувачів про професію — а потім ігнорував відповідь. Користувачі потрапляли на загальний Home-екран, наштовхувались на paywall до того, як побачили цінність, і відпадали.",
        approach:
          "Замінила сегментацію за професією на JTBD. Персоналізований показ фіч, Home та paywall на основі того, що користувачі справді хотіли. Побудувала флоу, що рекомендує інструменти на основі реального контенту.",
      },
      {
        slug: "syncsanity",
        title: "SyncSanity",
        summary:
          "Домашній застосунок для пар 25–40, які гублять побутові справи між чатами й нотатками. Валідовано на 50+ інтерв'ю: 84% несуть нерівне психологічне навантаження, 90% згадали недавню суперечку через хатні справи. Спроєктувала адаптивний рушій завдань, синхронізацію з партнером, тижневі streak'и та управління домом за зонами. North Star метрика: обидва партнери активно користуються застосунком.",
        tag: "Ідея → MVP · CustDev · Механіки retention",
        images: [
          "/images/cases/syncsanity-home.webp",
          "/images/cases/syncsanity-insights.webp",
          "/images/cases/syncsanity-lists.webp",
        ],
        pills: ["Ідея → MVP", "CustDev", "Механіки retention"],
        problem:
          "Пари 25–40 гублять побутові справи між чатами й нотатками. 84% несуть нерівне психологічне навантаження, 90% згадали недавню суперечку через хатні справи, 70% губили завдання в месенджерах. Існуючі інструменти трекають завдання — але ігнорують, хто несе невидиму роботу.",
        approach:
          "Зони мапують реальні частини дому замість абстрактних списків справ. Адаптивний рушій вивчає рутини й підлаштовує частоту завдань. Синхронізація з партнером робить внесок кожного видимим. North Star: обидва партнери виконують щонайменше 3 завдання за один тиждень.",
      },
      {
        slug: "diploai",
        title: "DiploAI",
        summary:
          "Automotive teams track regulatory changes manually — up to 1,000 updates a day, across dozens of global sources. Solo-designed the MVP from discovery to delivery.",
        tag: "0→1 MVP · Solo design · Regulatory intelligence",
        images: ["/images/cases/diploai/home.webp"],
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
        tag: "UX-консультантка",
        title: "Talk Studio",
        problem: "LMS, якою студенти не хотіли користуватись",
        result: "Підняла показник юзабіліті з 20% до 87%",
        context:
          "Перебудувала LMS мовної школи, що втрачала користувачів, навколо мобільної навігації, трекінгу прогресу та доступності.",
      },
      {
        slug: "hero-bike",
        tag: "UX-консультантка",
        title: "Hero Bike",
        problem: "Ідея без жодного підтвердження попиту",
        result: "Довела ідею фаундера до інвестиційного прототипу",
        context:
          "Валідувала двосторонній маркетплейс оренди велосипедів через дослідження та визначила MVP на 26 екранів, менторячи молодшого дизайнера з UI.",
      },
    ],
    splitProjects: en.projects.splitProjects,
    moreProjects: [
      {
        slug: "eleviate",
        hidden: true,
        image: "/work/more/eleviate-image.jpg",
        title: "Eleviate",
        description:
          "Повний редизайн та ребрендинг застосунку для wellbeing на основі AI — фітнес, медитації, харчування — створений для щоденного залучення та довгострокового retention.",
        results: [
          "Повністю ребрендований застосунок випущено в продакшн — retention покращено за рахунок зрозуміліших флоу та кращого онбордингу",
          "Позитивний фідбек користувачів, що підтримав зростання застосунку в App Store",
        ],
        tags: ["B2C", "Wellbeing", "Ребрендинг"],
      },
      {
        slug: "bo-cocktails",
        hidden: true,
        image: "/work/more/bo-cocktails-image.jpg",
        title: "BO Cocktails",
        description:
          "Продакт-дизайнерка мобільного застосунку для пошуку коктейлів — IA для великої бази напоїв, компонентна система, візуальний дизайн, готовий для App Store.",
        results: [
          "MVP випущено з генерацією «From What I Have» та підбором коктейлів за інгредієнтами серед сотень варіантів",
          "Дизайн-основа готова для релізу в App Store, з візуалами, готовими для маркетингу",
        ],
        tags: ["B2C", "Мобільний застосунок", "Споживчий продукт"],
      },
    ],
  },
  contactCta: {
    heading: "Збудуймо те, що варто будувати",
    subtext: "Шукаєте продакт-дизайнера, який мислить рішеннями, а не просто здає макети? Напишіть.",
    emailLabel: "Email",
    emailCopiedLabel: "Скопійовано!",
    linkedinLabel: "LinkedIn",
  },
  casePdfExpert: {
    hero: {
      label: "Growth-дизайн",
      title: "Запуск серії A/B тестів для збільшення конверсії в trial",
      oneLiner:
        "Paywall втрачав майже 70% користувачів, і водночас генерував найбільшу частку підписок у застосунку — тож розрив між потенціалом і реальними показниками був очевидним. Я заглибилась у воронку онбордингу, змапувала, де і чому користувачі відпадають, і сформулювала набір гіпотез, щоб закрити цей розрив.",
      placeholder: "МАКЕТ ТЕЛЕФОНУ: персоналізований Home-екран PDF Expert або екран JTBD-селектора",
      meta: [
        { label: "Роль", value: "Growth-дизайнерка" },
        { label: "Команда", value: "3 учасники команди" },
        { label: "Ключова метрика", value: "CR у trial" },
      ],
    },
    problemCards: [
      {
        number: "1",
        text: "Користувачі не до кінця розуміють цінність продукту після встановлення",
      },
      {
        number: "2",
        text: "Частина користувачів ніколи не доходить до paywall і не конвертується в підписку",
      },
      {
        number: "3",
        text: "Інші не можуть знайти потрібні інструменти і теж не конвертуються",
      },
    ],
    research: {
      label: "Результати дослідження",
      insights: [
        {
          title: "Професія ≠ сценарій використання",
          text: "Застосунок питає користувачів про роботу, але архітектор може використовувати його для навчання, а не проєктування. Професія не передбачає, що людині насправді потрібно від PDF-інструменту.",
        },
        {
          title: "Користувачі приходять з однією конкретною задачею",
          text: "Підписати контракт, анотувати конспект лекції, конвертувати файл. Їм не потрібні 50+ інструментів — потрібен лише той, за яким вони прийшли.",
        },
        {
          title: "Paywall не пояснює цінність",
          text: "Paywall загальний — однаковий заголовок, однаковий список фіч для всіх. Він розповідає, що застосунок вміє загалом, але ніколи не пов'язує це з тим, що потрібно саме цьому користувачу.",
        },
      ],
    },
    experiment: {
      label: "Експеримент 1: A/B/C",
      variants: [
        {
          label: "A — Контроль",
          text: "Поточний флоу онбордингу. Без змін. База для порівняння.",
        },
        {
          label: "B — Лише питання про намір",
          text: "Замінити питання про професію на питання про намір. Перевірити, що нове питання не збільшує показник відмов порівняно з поточним. Перевірити відповідність JTBD → інструмент. Виявити неочікувані патерни.",
        },
        {
          label: "C — Повна кастомізація",
          text: "Питання про намір + персоналізований показ фіч, Home-екран і paywall. Повний JTBD-досвід.",
        },
      ],
      hypotheses: [
        {
          title: "Гіпотеза 1",
          text: "Якщо рекомендувати фічу на Home-екрані на основі мети користувача, CR у Trial зросте, відтік на екранах онбордингу зменшиться, а відсоток користувачів, що завершують обрану дію, збільшиться.",
        },
        {
          title: "Гіпотеза 2",
          text: "Якщо персоналізувати контент під обрану мету користувача до paywall, користувачі побачать, як продукт вирішує їхню конкретну потребу — це збільшить CR у trial порівняно з контрольним варіантом.",
        },
        {
          title: "Гіпотеза 3",
          text: "Якщо персоналізувати контент Home-екрана під обрану мету користувача, користувачі в сегменті без trial почнуть використовувати потрібний інструмент — це збільшить CR у trial порівняно з контролем. Для сегменту з trial зростуть кліки по підібраних інструментах.",
        },
      ],
      image: "/images/cases/pdfexpert-hypothesis-before-after.webp",
      screens: [
        { label: "JTBD", image: "/images/cases/pdfexpert-jtbd.webp" },
        { label: "Home", image: "/images/cases/pdfexpert-experiment-home.webp" },
        { label: "Paywall", image: "/images/cases/pdfexpert-paywall-experiment.webp" },
      ],
    },
    metricsFramework: {
      primary: {
        label: "Основна метрика",
        value: "CR у trial ↑",
        tags: ["B", "C"],
      },
      guardrail: {
        label: "Guardrail-метрика",
        value: "Trial-to-paid",
        valueSuffix: "— не має зменшуватись",
        valueTags: ["C"],
        note: "Показник відмов",
        noteSuffix: "на екрані вибору мети",
        noteTags: ["B"],
      },
      diagnostic: {
        label: "Діагностичні метрики",
        items: [
          {
            tag: "B",
            text: "Топ-4 інструменти, які кожен JTBD-сегмент відкриває першими в перших сесіях",
          },
          {
            tag: "C",
            text: "% користувачів, які відкрили виділену фічу першою, порівняно з контролем",
          },
          {
            tag: "C",
            text: "% користувачів «просто оглядаюсь», які завантажили документ через банер",
          },
          {
            tag: "C",
            text: "Показник відмов між вибором мети та paywall",
          },
          {
            tag: "B+C",
            text: "CR у trial по кожному JTBD-сегменту",
          },
        ],
      },
    },
    secondExperiment: en.casePdfExpert.secondExperiment,
    footer: {
      nextCaseLabel: "Наступний кейс: SyncSanity →",
      nextCaseSlug: "syncsanity",
    },
  },
  caseSyncsanity: en.caseSyncsanity,
  caseDiploai: en.caseDiploai,
  caseHeroBike: en.caseHeroBike,
  caseTalkStudio: en.caseTalkStudio,
};
