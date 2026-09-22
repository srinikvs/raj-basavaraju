const ROLES = {
  "role-mt": {
    kicker: "Buffalo",
    title: "Security Lead Identity & Access / RSA Adaptive Auth",
    place: "M&T Bank",
    dates: "May 2013\u2013Feb 2014",
    pills: ["RSA Adaptive Auth"],
    highlights: [
      "Supported RSA Adaptive Auth as extra security layer for customer banking apps.",
      "Validated auth/access workflows across online/mobile/desktop channels.",
      "Security-control docs/evidence for compliance/audit.",
    ],
  },
  "role-fifth": {
    kicker: "Bangalore",
    title: "Lead System Risk & Compliance Specialist",
    place: "Fifth Third",
    dates: "Oct 2010\u2013Apr 2013",
    pills: ["Risk & Compliance"],
    highlights: [
      "Led system risk/compliance on authentication and access-control across banking apps.",
      "Assessed app behavior vs security/business controls; identified gaps.",
      "Worked with tech/business/security on coverage, failures, and corrective actions.",
      "Maintained security/compliance documentation and audit evidence.",
      "Structured testing to confirm authz/authn controls.",
    ],
  },
  "role-jpm": {
    kicker: "Bangalore",
    title: "IAM Security Access Controller",
    place: "JPMorgan",
    dates: "May 2005\u2013Sept 2010",
    pills: ["IAM", "AACT", "IBM/Lotus", "JML", "RBAC"],
    highlights: [
      "Enterprise identity provisioning / birthright access.",
      "Processed access requests via AACT; validated and provisioned.",
      "Managed access across IBM/Lotus-connected apps.",
      "Supported JML (create/modify/remove).",
      "Access reconciliation; RBAC baseline permissions; investigated discrepancies.",
    ],
  },
};

function fillArticle(id, role) {
  const el = document.getElementById(id);
  if (!el || el.dataset.resumeFilled === "1") return;
  el.dataset.resumeFilled = "1";

  let kicker = el.querySelector("[data-resume-kicker]");
  if (!kicker) {
    kicker = document.createElement("p");
    kicker.dataset.resumeKicker = "1";
    kicker.className = "mb-1 text-[11px] font-semibold tracking-[0.14em] text-accent uppercase";
    el.prepend(kicker);
  }
  kicker.textContent = role.kicker;

  const title = el.querySelector("h3");
  if (title) title.textContent = role.title;

  const lines = el.querySelectorAll("p");
  const place = [...lines].find((p) => !p.dataset.resumeKicker);
  if (place) place.textContent = role.place;
  const dates = [...lines].find((p) => p !== place && !p.dataset.resumeKicker);
  if (dates) dates.textContent = role.dates;

  let pillRow = el.querySelector("[data-resume-pills]");
  if (!pillRow) {
    pillRow = document.createElement("div");
    pillRow.dataset.resumePills = "1";
    pillRow.className = "mt-3 flex flex-wrap gap-1.5";
    const ul = el.querySelector("ul");
    el.insertBefore(pillRow, ul);
  }
  pillRow.replaceChildren();
  for (const pill of role.pills) {
    const span = document.createElement("span");
    span.className =
      "inline-flex items-center rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent ring-1 ring-accent-ring";
    span.textContent = pill;
    pillRow.append(span);
  }

  const list = el.querySelector("ul");
  if (list) {
    list.replaceChildren();
    for (const item of role.highlights) {
      const li = document.createElement("li");
      li.className = "text-[13.5px] leading-relaxed";
      const span = document.createElement("span");
      span.className = "text-muted";
      span.textContent = item;
      li.append(span);
      list.append(li);
    }
  }
}

function fillAll() {
  for (const [id, role] of Object.entries(ROLES)) fillArticle(id, role);
}

fillAll();
new MutationObserver(fillAll).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
