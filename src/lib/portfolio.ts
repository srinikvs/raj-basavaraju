export const TODO = "Resume content pending / FROM RESUME";

export const TABS = [
  { id: "overview", label: "Overview" },
  { id: "impact", label: "Identity Impact" },
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
  role: "Senior IAM / SailPoint Engineer",
  location: "Atlanta, GA",
  positioning:
    "Senior IAM with 18+ years IT spanning identity provisioning, access governance, auth security, risk/compliance, and IGA.",
  summary:
    "Senior IAM with 18+ years IT spanning identity provisioning, access governance, auth security, risk/compliance, and IGA. Hands-on SailPoint at GDIT/CDC: IIQ 2021–2022 and ISC 2023–present. AD, Entra ID, source/app onboarding, JML, access profiles, entitlements, RBAC/ABAC, certifications, SoD, access requests, provisioning, workflows, transforms, rules, REST, SCIM, JDBC, SQL, testing/RCA.",
  email: "cy.rs@yahoo.com",
  phone: "+1-716-471-7777",
  linkedin: "https://www.linkedin.com/in/raj-iam-etl-dwh",
  photoCandidates: [`${import.meta.env.BASE_URL}assets/profile.svg`],
  tags: ["SailPoint ISC", "SailPoint IIQ", "IGA", "18+ years IT"],
} as const;

export const EXPLORE = [
  {
    tab: "impact" as TabId,
    tone: "join" as LaneTone,
    title: "Identity Impact",
    copy: "Hands-on SailPoint at GDIT/CDC: IIQ 2021–2022 and ISC 2023–present.",
    cta: "View impact",
    target: "impact-title",
  },
  {
    tab: "experience" as TabId,
    tone: "review" as LaneTone,
    title: "Experience",
    copy: "GDIT – CDC.gov, BBVA Compass, M&T Bank, Fifth Third, JP Morgan.",
    cta: "View roles",
    target: "roles-title",
  },
  {
    tab: "learning" as TabId,
    tone: "accent" as LaneTone,
    title: "Learning",
    copy: "SailPoint ISC (hands-on). Cybersecurity Specialist GRC/PCI-DSS (Baxter Clewis). SAFe POPM. B.Sc. Computer Science, University of Mysore, 2004.",
    cta: "View credentials",
    target: "learning-title",
  },
  {
    tab: "practice" as TabId,
    tone: "join" as LaneTone,
    title: "Practice",
    copy: "SailPoint IIQ/ISC and resume-listed IAM capabilities.",
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
    lede: "Hands-on SailPoint at GDIT/CDC: ISC 2023–present.",
    body: "Hands-on SailPoint at GDIT/CDC: IIQ 2021–2022 and ISC 2023–present.",
    points: [
      "ISC identity lifecycle, governance, and provisioning",
      "Onboard AD, Entra, Workday, Salesforce, SCIM, JDBC, REST",
      "Identity profiles, correlation, JML",
      "Workflows, transforms, rules, APIs, JSONPath, event triggers, webhooks",
    ],
    ctaTab: "practice" as TabId,
    ctaTarget: "skill-sailpoint",
    cta: "View skills",
  },
  {
    id: "story-iiq",
    tone: "join" as LaneTone,
    title: "SailPoint IIQ",
    lede: "Hands-on SailPoint at GDIT/CDC: IIQ 2021–2022.",
    body: "Hands-on SailPoint at GDIT/CDC: IIQ 2021–2022 and ISC 2023–present.",
    points: ["provisioning", "certifications", "SoD", "access requests", "RBAC/ABAC"],
    ctaTab: "experience" as TabId,
    ctaTarget: "role-gdit",
    cta: "View GDIT – CDC.gov",
  },
  {
    id: "story-iga",
    tone: "move" as LaneTone,
    title: "18+ years IT",
    lede: "Senior IAM with 18+ years IT spanning identity provisioning, access governance, auth security, risk/compliance, and IGA.",
    body: "Senior IAM with 18+ years IT spanning identity provisioning, access governance, auth security, risk/compliance, and IGA.",
    points: [
      "identity provisioning",
      "access governance",
      "auth security",
      "risk/compliance",
      "IGA",
    ],
    ctaTab: "practice" as TabId,
    ctaTarget: "skill-lifecycle",
    cta: "View capabilities",
  },
] as const;

export const ROLES = [
  {
    id: "role-gdit",
    kicker: "Atlanta",
    title: "Senior IAM / SailPoint Engineer",
    place: "GDIT – CDC.gov",
    dates: "Sept 2015–Present",
    pills: ["IIQ 2021–22", "ISC 2023–present"] as const,
    highlights: [
      "ISC identity lifecycle, governance, and provisioning (IIQ 2021–22 · ISC 2023–present).",
      "Onboard AD, Entra, Workday, Salesforce, SCIM, JDBC, and REST.",
      "Identity profiles, correlation, and JML; entitlements, access profiles, and roles (RBAC/ABAC).",
      "Certifications, SoD, and governance groups; access request and approval.",
      "Workflows, transforms, rules, APIs, JSONPath, event triggers, and webhooks.",
      "SQL RCA and end-to-end IAM validation; partner with app owners and security.",
    ],
  },
  {
    id: "role-bbva",
    kicker: "Birmingham",
    title: "IAM Governance & Compliance Lead / Salesforce CRM & Siebel",
    place: "BBVA Compass",
    dates: "Mar 2014–Sept 2015",
    pills: ["Salesforce CRM", "Siebel"] as const,
    highlights: [
      "Access-governance reviews and remediation of inappropriate access.",
      "Certification tracking and audit evidence for IAM controls.",
    ],
  },
  {
    id: "role-mt",
    kicker: "Buffalo",
    title: "Security Lead Identity & Access / RSA Adaptive Auth",
    place: "M&T Bank",
    dates: "May 2013–Feb 2014",
    pills: ["RSA Adaptive Auth"] as const,
    highlights: [
      "Supported RSA Adaptive Auth as extra security layer for customer banking apps.",
      "Validated auth/access workflows across online/mobile/desktop channels.",
      "Security-control docs/evidence for compliance/audit.",
    ],
  },
  {
    id: "role-fifth",
    kicker: "Bangalore",
    title: "Lead System Risk & Compliance Specialist",
    place: "Fifth Third",
    dates: "Oct 2010–Apr 2013",
    pills: ["Risk & Compliance"] as const,
    highlights: [
      "Led system risk/compliance on authentication and access-control across banking apps.",
      "Assessed app behavior vs security/business controls; identified gaps.",
      "Worked with tech/business/security on coverage, failures, and corrective actions.",
      "Maintained security/compliance documentation and audit evidence.",
      "Structured testing to confirm authz/authn controls.",
    ],
  },
  {
    id: "role-jpm",
    kicker: TODO,
    title: TODO,
    place: "JP Morgan",
    dates: TODO,
    pills: [] as const,
    highlights: [TODO],
  },
] as const;

export const CERTIFICATIONS = [
  "SailPoint ISC (hands-on)",
  "Cybersecurity Specialist GRC/PCI-DSS (Baxter Clewis)",
  "SAFe POPM",
] as const;

export const EDUCATION = ["B.Sc. Computer Science, University of Mysore, 2004"] as const;

export const SKILLS = [
  {
    id: "skill-sailpoint",
    title: "SailPoint",
    items: ["ISC", "IIQ", "certifications", "SoD"],
  },
  {
    id: "skill-lifecycle",
    title: "Identity Lifecycle",
    items: ["JML", "profiles", "birthright", "provisioning", "access requests"],
  },
  {
    id: "skill-access-model",
    title: "Access Model",
    items: ["entitlements", "access profiles", "roles", "RBAC", "ABAC"],
  },
  {
    id: "skill-directories",
    title: "Directories & Connectors",
    items: ["AD", "Entra ID", "Workday", "Salesforce", "Siebel", "SCIM 2.0", "JDBC", "REST"],
  },
  {
    id: "skill-engineering",
    title: "Engineering",
    items: ["REST APIs", "JSON/JSONPath", "workflows", "transforms", "rules", "event triggers", "webhooks"],
  },
  {
    id: "skill-auth",
    title: "Auth & Security",
    items: ["RSA Adaptive Auth", "MFA", "federation", "privileged access monitoring"],
  },
  {
    id: "skill-data",
    title: "Data/Validation",
    items: ["SQL", "IAM testing", "reconciliation", "RCA"],
  },
  {
    id: "skill-governance",
    title: "Governance",
    items: ["access reviews", "PCI DSS", "NIST", "audit evidence"],
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
  if (ROLES.some((role) => role.id === targetId)) return "experience";
  if (targetId.startsWith("skill-")) return "practice";
  if (targetId === "impact-title") return "impact";
  if (targetId === "roles-title") return "experience";
  if (targetId === "learning-title") return "learning";
  if (targetId === "practice-title") return "practice";
  if (targetId === "contact-title") return "contact";
  if (targetId === "top") return "overview";
  return null;
}
