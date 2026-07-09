// ============================================================
// PERSONAL INFO — used by Hero, Footer, Recruiter section, meta tags
// ============================================================
export const personalInfo = {
  name: "Rahul Kumar",
  title: "Full Stack Developer",
  tagline: "Full Stack Developer, specializing in modern web & mobile apps.",
  email: "rk2655415@gmail.com",
  phone: "+91 9015709221",
  location: "Gurgaon (Gurugram), Haryana, India",
  locationShort: "Gurgaon, India",
  linkedIn: "https://www.linkedin.com/in/rahul-kumar-821109187/",
  github: "https://github.com/eccecntric-Rahul",
  portfolio: "https://krrahul.netlify.app",
  resumePdf: "/FullStackDev.pdf",
  profileImage: "/profile.PNG",
  availability: "Open to opportunities",
  workMode: "Remote / Hybrid / On-site",
  noticePeriod: "Negotiable",
  yearsOfExperience: "5+",
  currentCompany: "Planify Capital Limited",
  currentRole: "Sr. Software Developer (SDE-2)",
  summary:
    "Full Stack Developer with 5+ years of experience building and scaling web and mobile platforms across FinTech, EdTech, SaaS, and enterprise domains, using MERN, Next.js, and React Native. Strong track record leading React Native architecture and version upgrades, building shared UI component libraries, and owning end-to-end mobile release cycles. Skilled at improving application performance, standardizing engineering practices, and mentoring developers.",
} as const;

// ============================================================
// STATS — used by Stats Bar
// ============================================================
export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50K+", label: "Users Served" },
  { value: "20+", label: "Projects Delivered" },
  { value: "99.9%", label: "Crash-Free Sessions" },
] as const;

// ============================================================
// SKILLS — used by SkillsSection (static) and Resume Skills tab
// ============================================================
export const skillCategories = {
  "Frontend Architecture": [
    "React Native", "React.js", "Next.js", "TypeScript",
    "Redux Toolkit", "React Query", "GraphQL", "Tailwind CSS", "styled-components",
  ],
  "Mobile Development": [
    "Android (Java/Kotlin)", "iOS (Swift)", "CodePush",
    "App/Play Store Deployment", "Hermes", "FlashList", "Proguard",
  ],
  "Backend & Data": [
    "Node.js", "Express.js", "REST API Design", "GraphQL",
    "WebSockets", "MongoDB", "Mongoose", "Supabase", "PostgreSQL",
  ],
  "Cloud, DevOps & Tools": [
    "AWS (S3, Lambda, RDS)", "Docker", "Jenkins CI/CD", "Fastlane",
    "Firebase (FCM, Analytics, Crashlytics)", "Git", "Jest",
    "Sentry", "New Relic", "Storybook",
  ],
  "AI Tools": [
    "Claude", "Cursor IDE", "GitHub Copilot", "ChatGPT", "Prompt Engineering",
  ],
} as const;

// Skills with proficiency levels — used by Resume Skills Matrix tab
export const skillsWithLevels = {
  Frontend: [
    { name: "React.js", level: "Expert" },
    { name: "Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Redux Toolkit", level: "Expert" },
    { name: "React Query", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "styled-components", level: "Advanced" },
  ],
  Mobile: [
    { name: "React Native (New Arch)", level: "Expert" },
    { name: "Android (Java/Kotlin)", level: "Advanced" },
    { name: "iOS (Swift)", level: "Intermediate" },
    { name: "CodePush", level: "Expert" },
    { name: "Hermes & FlashList", level: "Expert" },
  ],
  "Backend & Database": [
    { name: "Node.js", level: "Expert" },
    { name: "Express.js", level: "Expert" },
    { name: "REST API Design", level: "Expert" },
    { name: "GraphQL", level: "Advanced" },
    { name: "WebSockets", level: "Expert" },
    { name: "MongoDB & Mongoose", level: "Expert" },
    { name: "PostgreSQL & Supabase", level: "Advanced" },
  ],
  "DevOps & Tools": [
    { name: "AWS (S3, Lambda, RDS)", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "Jenkins CI/CD", level: "Advanced" },
    { name: "Fastlane & Store Releases", level: "Expert" },
    { name: "Jest", level: "Advanced" },
    { name: "Firebase (FCM, Analytics)", level: "Expert" },
    { name: "AI Tools (Claude, Cursor)", level: "Expert" },
  ],
} as const;

// ============================================================
// EXPERIENCE — used by ExperienceSection (static) and Resume Experience tab
// ============================================================
export const experiences = [
  {
    role: "Sr. Software Developer (SDE-2)",
    company: "Planify Capital Limited",
    location: "Gurgaon, India",
    period: "June 2023 – Present",
    isCurrent: true,
    points: [
      "Architected the core Buy-Sell Dashboard for a high-traffic trading platform serving 50K+ daily traders; integrated WebSockets for real-time bid updates, contributing to a 20% increase in user conversion.",
      "Led a React Native version migration (0.75 to 0.85) across three production apps, resolving breaking changes in native dependencies and adopting the New Architecture; integrated CodePush for OTA hot-patching.",
      "Built and standardized a shared React Native UI package library on React Native Paper, reducing UI inconsistency and new-hire ramp-up time.",
      "Reduced overall app size by 25% (35MB to 26MB) through asset optimization and code-splitting, and improved render times by 35% using FlashList and memoization, sustaining 60fps on low-end devices.",
      "Built and maintained REST APIs powering the buy-side dashboard, ticketing, traffic view, and homepage modules.",
      "Own end-to-end mobile release cycles across Google Play Store and Apple App Store, maintaining 99.9% crash-free sessions.",
      "Mentor 4+ junior developers through structured PR reviews and codebase walkthroughs, reducing review cycle time by 30%.",
    ],
    highlights: ["MERN & React Native Stack", "WebSocket Integration", "App Performance (60fps)"],
  },
  {
    role: "Software Developer",
    company: "Salescode.ai",
    location: "Gurgaon, India",
    period: "July 2021 – June 2023",
    isCurrent: false,
    points: [
      "Engineered scalable mobile enterprise solutions for clients across SaaS, e-commerce, and healthcare; built reusable component libraries adopted across 50+ projects, accelerating feature delivery by 30%.",
      "Architected a custom React.js App Designer tool that automated internal deployment workflows, reducing manual developer overhead by 70% and enabling non-technical users to assemble app modules.",
      "Migrated 30K+ lines of legacy code to TypeScript and introduced unit testing with Jest (85% coverage), reducing runtime errors by 35%.",
      "Wrote and maintained Jenkins CI/CD pipelines for build and deployment automation.",
      "Collaborated with cross-functional teams (design, QA, product) to ship features from concept to production.",
    ],
    highlights: ["React.js App Designer", "TypeScript Migration", "Jenkins CI/CD Automation"],
  },
  {
    role: "MERN Stack Intern",
    company: "Check-in Pvt Ltd & Draggital IT Solutions",
    location: "New Delhi, India",
    period: "Feb 2021 – July 2021",
    isCurrent: false,
    points: [
      "Engineered MERN stack modules for MVP products, reducing API response latencies by 25% through indexing and query optimization.",
      "Identified, debugged, and fixed 15+ critical production bugs affecting 5K+ active users.",
    ],
    highlights: ["API Latency Optimization", "Production Bug Fixing", "MVP Development"],
  },
] as const;

// ============================================================
// PROJECTS — used by ProjectsSection (static) and Resume Projects tab
// ============================================================
export const projects = [
  {
    name: "Planify Ecosystem",
    subtitle: "Next.js & React Native Platform",
    tech: "Next.js, React Native, Supabase, WebSockets, AWS",
    link: "https://www.planify.in/",
    period: "2023 – Present",
    points: [
      "Developed the corporate web platform using Next.js for SSR and SEO optimization, achieving a 90+ Lighthouse score; built the UI with a styled-components design system.",
      "Built a real-time trading engine handling 10K+ concurrent WebSocket connections, using Supabase and AWS (RDS, S3, Lambda) for scalable infrastructure.",
      "Built and maintained the app's notification system (Firebase Cloud Messaging) and implemented universal and deep linking for marketing campaigns, streamlining onboarding and reducing signup friction by 25%.",
      "Implemented multi-method authentication (JWT, email/password with cookie-based sessions, biometric login, OTP verification) across web and mobile.",
    ],
  },
  {
    name: "Alpha AMC",
    subtitle: "AIF Fintech Ecosystem",
    tech: "Next.js, React Native, Firebase Cloud Messaging, KYC integrations",
    link: "https://www.alphaamc.com/",
    period: "2022 – 2023",
    points: [
      "Led full-stack development of the Alpha AMC web platform (Next.js) and mobile app for 2,000+ Alternative Investment Fund (AIF) managers and 50K+ retail investors.",
      "Built the notification system from scratch (Firebase Cloud Messaging) covering 4–5 categories including KYC status, sign-up/login events, and new research report alerts.",
      "Implemented high-security onboarding flows with KYC/AML integrations, enabling 100+ funds to launch within Q1.",
    ],
  },
  {
    name: "Channel Kart Multibrand",
    subtitle: "B2B Mobile Application",
    tech: "React Native, Play Store Release Pipeline",
    link: "https://play.google.com/store/apps/details?id=com.applicate.ckegtm.app&hl=en",
    period: "2021 – 2022",
    points: [
      "Engineered a scalable B2B multi-brand mobile application supporting 500+ channel partners and 200K+ monthly orders, optimizing complex ordering and distribution workflows.",
      "Managed the end-to-end release pipeline for Google Play Store, maintaining a 4.5+ star rating and zero critical crashes through automated testing and staged rollouts.",
    ],
  },
  {
    name: "Netflix-Inspired Technical Portfolio",
    subtitle: "Interactive Web Experience",
    tech: "React 18, Framer Motion, Lazy Loading, CSS Animations",
    link: "https://krrahul.netlify.app",
    period: "2024",
    points: [
      "Developed a high-performance interactive web experience leveraging React 18, Framer Motion, and lazy-loading, achieving sub-2s page load times and a 98+ Lighthouse score.",
      "Showcased advanced CSS animations and performance optimization techniques, driving 50+ recruiter inquiries and contract offers.",
    ],
  },
] as const;

// ============================================================
// EDUCATION & ACHIEVEMENTS — used by AchievementsEducationSection and Resume Overview tab
// ============================================================
export const education = {
  degree: "B.Tech in Electronics & Communication Engineering",
  institution: "Mahavir Swami Institute of Technology (GGSIPU)",
  period: "2016 – 2020",
} as const;

export const achievements = [
  {
    title: "Employee of the Month",
    date: "April 2024, March 2024",
    description: "Recognized for exceptional delivery and ownership of high-impact trading modules and revamping the app UI.",
  },
  {
    title: "Certificate of Appreciation",
    date: "Feb 2023, Sep 2022",
    description: "Recognized for automating internal deployment workflows, saving 100+ engineering hours quarterly.",
  },
] as const;
