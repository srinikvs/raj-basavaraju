export const TODO = "Resume content pending / FROM RESUME";

export const TABS = [
  { id: "overview", label: "Overview" },
  { id: "impact", label: "Identity Impact" },
  { id: "metrics", label: "Metrics" },
  { id: "experience", label: "Experience" },
  { id: "learning", label: "Learning" },
  { id: "practice", label: "Practice" },
  { id: "contact", label: "Contact" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

export type LaneTone = "join" | "move" | "review" | "leave" | "accent";

export const PROFILE = {
  name: "Rajashekara Basavaraju",
  shortName: "Raj",
  initials: "RB",
  eyebrow: "Identity portfolio",
  role: "IAM / SailPoint ISC specialist",
  location: "Atlanta, GA",
  positioning:
    "IAM / SailPoint ISC specialist. SailPoint ISC work, including 8+ source integrations.",
  summary:
    "Experience spans GDIT / CDC, BBVA, M&T, Fifth Third, and JP Morgan. SailPoint ISC work includes 8+ source integrations.",
  email: "cy.rs@yahoo.com",
  phone: "+1-716-471-7777",
  linkedin: "https://www.linkedin.com/in/raj-iam-etl-dwh",
  photoCandidates: [`${import.meta.env.BASE_URL}assets/profile.svg`],
  tags: ["SailPoint ISC", "IdentityNow certification", "8+ source integrations", "SAFe POPM"],
} as const;

export const EXPLORE = [
  {
    tab: "impact" as TabId,
    tone: "join" as LaneTone,
    title: "Identity Impact",
    copy: "SailPoint ISC work, 8+ source integrations, and the two resume-verified outcomes.",
    cta: "View impact",
    target: "impact-title",
  },
  {
    tab: "metrics" as TabId,
    tone: "move" as LaneTone,
    title: "Metrics",
    copy: "BBVA 30% reduction. JP Morgan 40% reduction.",
    cta: "View metrics",
    target: "metrics-title",
  },
  {
    tab: "experience" as TabId,
    tone: "review" as LaneTone,
    title: "Experience",
    copy: "GDIT / CDC, BBVA, M&T, Fifth Third, JP Morgan.",
    cta: "View roles",
    target: "roles-title",
  },
  {
    tab: "learning" as TabId,
    tone: "accent" as LaneTone,
    title: "Learning",
    copy: "IdentityNow certification. GRC/PCI certification from Baxter Clewis. SAFe POPM. B.Sc., Mysore, 2004.",
    cta: "View credentials",
    target: "learning-title",
  },
  {
    tab: "practice" as TabId,
    tone: "join" as LaneTone,
    title: "Practice",
    copy: "SailPoint ISC and resume-listed capabilities and integrations.",
    cta: "View skills",
    target: "practice-title",
  },
  {
    tab: "contact" as TabId,
    tone: "leave" as LaneTone,
    title: "Contact",
    copy: "Atlanta, GA. Email, phone, LinkedIn.",
    cta: "Contact",
    target: "contact-title",
  },
] as const;

export const STORIES = [
  {
    id: "story-isc",
    tone: "accent" as LaneTone,
    title: "SailPoint ISC",
    lede: "Resume-listed SailPoint ISC work.",
    body: TODO,
    points: [TODO],
    ctaTab: "practice" as TabId,
    ctaTarget: "practice-title",
    cta: "View skills",
  },
  {
    id: "story-sources",
    tone: "join" as LaneTone,
    title: "8+ source integrations",
    lede: "Resume-listed SailPoint ISC work includes 8+ source integrations.",
    body: TODO,
    points: [TODO],
    ctaTab: "practice" as TabId,
    ctaTarget: "skill-integrations",
    cta: "View integrations",
  },
  {
    id: "story-bbva",
    tone: "move" as LaneTone,
    title: "BBVA — 30% reduction",
    lede: "Verified resume outcome: BBVA 30% reduction.",
    body: TODO,
    points: [TODO],
    ctaTab: "metrics" as TabId,
    ctaTarget: "metric-bbva",
    cta: "View metric",
  },
  {
    id: "story-jpm",
    tone: "review" as LaneTone,
    title: "JP Morgan — 40% reduction",
    lede: "Verified resume outcome: JP Morgan 40% reduction.",
    body: TODO,
    points: [TODO],
    ctaTab: "metrics" as TabId,
    ctaTarget: "metric-jpm",
    cta: "View metric",
  },
] as const;

export const METRICS = [
  {
    id: "metric-bbva",
    label: "BBVA",
    value: "30%",
    note: "reduction",
    context: TODO,
    story: "story-bbva",
  },
  {
    id: "metric-jpm",
    label: "JP Morgan",
    value: "40%",
    note: "reduction",
    context: TODO,
    story: "story-jpm",
  },
] as const;

export const ROLES = [
  {
    id: "role-gdit",
    kicker: TODO,
    title: TODO,
    place: "GDIT / CDC",
    dates: TODO,
    pills: ["SailPoint ISC"] as const,
    highlights: [TODO],
  },
  {
    id: "role-bbva",
    kicker: TODO,
    title: TODO,
    place: "BBVA",
    dates: TODO,
    pills: ["30% reduction"] as const,
    highlights: ["30% reduction", TODO],
  },
  {
    id: "role-mt",
    kicker: TODO,
    title: TODO,
    place: "M&T",
    dates: TODO,
    pills: [] as const,
    highlights: [TODO],
  },
  {
    id: "role-fifth",
    kicker: TODO,
    title: TODO,
    place: "Fifth Third",
    dates: TODO,
    pills: [] as const,
    highlights: [TODO],
  },
  {
    id: "role-jpm",
    kicker: TODO,
    title: TODO,
    place: "JP Morgan",
    dates: TODO,
    pills: ["40% reduction"] as const,
    highlights: ["40% reduction", TODO],
  },
] as const;

export const CERTIFICATIONS = [
  "IdentityNow certification",
  "GRC/PCI certification from Baxter Clewis",
  "SAFe POPM",
] as const;

export const EDUCATION = ["B.Sc., Mysore, 2004"] as const;

export const SKILLS = [
  {
    id: "skill-sailpoint",
    title: "SailPoint ISC",
    items: ["SailPoint ISC", "IdentityNow certification"],
  },
  {
    id: "skill-integrations",
    title: "Integrations",
    items: ["8+ source integrations", TODO],
  },
] as const;

export function isTodo(value: string): boolean {
  return value.includes("FROM RESUME") || value.includes("Resume content pending");
}

export function isTabId(value: string): value is TabId {
  return TABS.some((tab) => tab.id === value);
}

export function tabForTarget(targetId: string): TabId | null {
  if (STORIES.some((story) => story.id === targetId)) return "impact";
  if (METRICS.some((metric) => metric.id === targetId)) return "metrics";
  if (ROLES.some((role) => role.id === targetId)) return "experience";
  if (targetId === "skill-integrations" || targetId === "skill-sailpoint") return "practice";
  if (targetId === "impact-title") return "impact";
  if (targetId === "metrics-title") return "metrics";
  if (targetId === "roles-title") return "experience";
  if (targetId === "learning-title") return "learning";
  if (targetId === "practice-title") return "practice";
  if (targetId === "contact-title") return "contact";
  if (targetId === "top") return "overview";
  return null;
}
