import { useCallback, useEffect, useState } from "react";
import { isTabId, tabForTarget, type TabId } from "@/lib/portfolio";
import { Hero } from "./hero";
import {
  ContactPanel,
  ExperiencePanel,
  ImpactPanel,
  LearningPanel,
  MetricsPanel,
  OverviewPanel,
  PracticePanel,
} from "./panels";
import { ResumeOverlay } from "./resume";
import { TabBar } from "./tab-bar";

function readHash(): { tab: TabId; target?: string } {
  if (typeof window === "undefined") return { tab: "overview" };
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return { tab: "overview" };
  if (raw.startsWith("tab-")) {
    const id = raw.slice(4);
    if (isTabId(id)) return { tab: id };
  }
  if (isTabId(raw)) return { tab: raw };
  const fromTarget = tabForTarget(raw);
  if (fromTarget) return { tab: fromTarget, target: raw };
  return { tab: "overview" };
}

export function PortfolioApp() {
  const initial = readHash();
  const [tab, setTab] = useState<TabId>(initial.tab);
  const [resumeOpen, setResumeOpen] = useState(false);

  const activate = useCallback((next: TabId, target?: string, writeHash = true) => {
    setTab(next);
    if (writeHash) {
      const hash = target ? `#${target}` : `#tab-${next}`;
      try {
        history.replaceState(null, "", hash);
      } catch {
        window.location.hash = hash;
      }
    }
    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    const shell = document.getElementById("tabs-shell");
    if (shell && shell.getBoundingClientRect().top < 0) {
      shell.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    function onHash() {
      const parsed = readHash();
      activate(parsed.tab, parsed.target, false);
    }
    window.addEventListener("hashchange", onHash);
    const parsed = readHash();
    if (parsed.target) {
      requestAnimationFrame(() => {
        document.getElementById(parsed.target ?? "")?.scrollIntoView({ block: "start" });
      });
    }
    return () => window.removeEventListener("hashchange", onHash);
  }, [activate]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setResumeOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-page text-ink">
      <main className="mx-auto w-full max-w-page px-4 py-8 sm:px-5">
        {tab === "overview" ? <Hero onResume={() => setResumeOpen(true)} /> : null}

        <div id="tabs-shell">
          <TabBar active={tab} onChange={(id) => activate(id)} />
        </div>

        <div
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
        >
          {tab === "overview" ? <OverviewPanel onNavigate={activate} /> : null}
          {tab === "impact" ? <ImpactPanel onNavigate={activate} /> : null}
          {tab === "metrics" ? <MetricsPanel onNavigate={activate} /> : null}
          {tab === "experience" ? <ExperiencePanel /> : null}
          {tab === "learning" ? <LearningPanel /> : null}
          {tab === "practice" ? <PracticePanel /> : null}
          {tab === "contact" ? <ContactPanel /> : null}
        </div>
      </main>
      <ResumeOverlay open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
