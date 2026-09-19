import {
  CERTIFICATIONS,
  EDUCATION,
  EXPLORE,
  METRICS,
  PROFILE,
  ROLES,
  SKILLS,
  STORIES,
  isTodo,
  type TabId,
} from "@/lib/portfolio";
import {
  Callout,
  EvidenceButton,
  LaneCard,
  Pill,
  SectionIntro,
  SectionTitle,
  SocialChip,
  Surface,
} from "./primitives";
import { MaybeTodo, TodoFlag } from "./todo-flag";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

type Nav = (tab: TabId, target?: string) => void;

export function OverviewPanel({ onNavigate }: { onNavigate: Nav }) {
  return (
    <div className="tab-enter">
      <Surface>
        <SectionTitle>How to read this</SectionTitle>
        <SectionIntro>{PROFILE.summary}</SectionIntro>
        <div className="mb-4">
          <TodoFlag detail="titles, dates, bullets, and source list" />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE.map((lane) => (
            <LaneCard
              key={lane.tab}
              tone={lane.tone}
              onClick={() => onNavigate(lane.tab, lane.target)}
            >
              <div className="text-[15px] font-semibold tracking-tight">{lane.title}</div>
              <p className="mt-1 flex-1 text-[13px] leading-relaxed text-muted">{lane.copy}</p>
              <span className="mt-3 text-xs font-semibold text-accent">
                {lane.cta} <span aria-hidden="true">→</span>
              </span>
            </LaneCard>
          ))}
        </div>
      </Surface>
    </div>
  );
}

export function ImpactPanel({ onNavigate }: { onNavigate: Nav }) {
  return (
    <div className="tab-enter">
      <Surface>
        <SectionTitle id="impact-title">Identity Impact</SectionTitle>
        <SectionIntro>
          SailPoint ISC work, including 8+ source integrations. Outcomes are limited to figures
          stated on the resume.
        </SectionIntro>
        <div className="grid gap-3">
          {STORIES.map((story) => (
            <Callout key={story.id} id={story.id} tone={story.tone}>
              <h3 className="mb-1 text-[16px] font-semibold tracking-tight">{story.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-muted">{story.lede}</p>
              {isTodo(story.body) ? (
                <div className="mt-3">
                  <TodoFlag detail="story body" />
                </div>
              ) : (
                <p className="mt-2.5 mb-0 text-sm leading-relaxed text-ink/90">{story.body}</p>
              )}
              <ul className="mt-3 space-y-1.5">
                {story.points.map((point, index) => (
                  <li key={`${story.id}-p-${index}`} className="text-[13.5px] leading-relaxed">
                    {isTodo(point) ? <TodoFlag detail="bullet" /> : <span className="text-muted">{point}</span>}
                  </li>
                ))}
              </ul>
              <EvidenceButton onClick={() => onNavigate(story.ctaTab, story.ctaTarget)}>
                {story.cta}
              </EvidenceButton>
            </Callout>
          ))}
        </div>
      </Surface>
    </div>
  );
}

export function MetricsPanel({ onNavigate }: { onNavigate: Nav }) {
  return (
    <div className="tab-enter">
      <Surface>
        <SectionTitle id="metrics-title">Program metrics</SectionTitle>
        <SectionIntro>
          The only numeric outcomes taken from the resume. Context and wording for each reduction
          are marked until the resume line is available.
        </SectionIntro>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {METRICS.map((metric) => (
            <article
              key={metric.id}
              id={metric.id}
              className="flex min-h-[150px] scroll-mt-24 flex-col rounded-md bg-inset px-4 py-4 ring-1 ring-border"
            >
              <div className="mb-2 text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
                {metric.label}
              </div>
              <div className="mb-1 font-display text-[clamp(1.7rem,3.5vw,2.2rem)] leading-none font-semibold tracking-[-0.04em] text-ink tabular-nums">
                {metric.value}
              </div>
              <p className="m-0 text-sm font-medium text-ink">{metric.note}</p>
              <div className="mt-3">
                {isTodo(metric.context) ? (
                  <TodoFlag detail="context / wording" />
                ) : (
                  <p className="m-0 text-xs leading-relaxed text-muted">{metric.context}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => onNavigate("impact", metric.story)}
                className="mt-auto self-start pt-3 text-xs font-semibold text-accent hover:underline"
              >
                View source story →
              </button>
            </article>
          ))}
        </div>
      </Surface>
    </div>
  );
}

export function ExperiencePanel() {
  return (
    <div className="tab-enter">
      <Surface>
        <SectionTitle id="roles-title">Experience</SectionTitle>
        <SectionIntro>
          GDIT / CDC through BBVA, M&T, Fifth Third, and JP Morgan. Titles, dates, and bullets that
          are not on the resume source are marked.
        </SectionIntro>
        <div className="grid gap-3">
          {ROLES.map((role) => (
            <article
              key={role.id}
              id={role.id}
              className="scroll-mt-24 rounded-md bg-inset px-4.5 py-5 ring-1 ring-border"
            >
              {isTodo(role.kicker) ? null : (
                <p className="mb-1 text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
                  {role.kicker}
                </p>
              )}
              <h3 className="font-display text-[1.15rem] leading-snug font-semibold tracking-[-0.02em]">
                <MaybeTodo value={role.title} />
              </h3>
              <p className="mt-0.5 text-sm font-medium text-ink">{role.place}</p>
              <p className="text-[13px] text-muted">
                <MaybeTodo value={role.dates} />
              </p>
              {role.pills.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {role.pills.map((pill) => (
                    <Pill key={pill} tone="accent">
                      {pill}
                    </Pill>
                  ))}
                </div>
              ) : null}
              <ul className="mt-4 space-y-2">
                {role.highlights.map((item, index) => (
                  <li key={`${role.id}-h-${index}`} className="text-[13.5px] leading-relaxed">
                    {isTodo(item) ? <TodoFlag detail="bullet" /> : <span className="text-muted">{item}</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Surface>
    </div>
  );
}

export function LearningPanel() {
  return (
    <div className="tab-enter space-y-4.5">
      <Surface>
        <SectionTitle id="learning-title">Learning</SectionTitle>
        <SectionIntro>Credentials and education as named on the resume.</SectionIntro>
        <h3 className="mb-2 text-[13px] font-semibold tracking-tight">Certifications</h3>
        <ul className="mb-5 flex flex-wrap gap-2">
          {CERTIFICATIONS.map((item) => (
            <li key={item}>
              <Pill tone="accent">{item}</Pill>
            </li>
          ))}
        </ul>
        <h3 className="mb-2 text-[13px] font-semibold tracking-tight">Education</h3>
        <ul className="flex flex-wrap gap-2">
          {EDUCATION.map((item) => (
            <li key={item}>
              <Pill>{item}</Pill>
            </li>
          ))}
        </ul>
      </Surface>
    </div>
  );
}

export function PracticePanel() {
  return (
    <div className="tab-enter">
      <Surface>
        <SectionTitle id="practice-title">Practice</SectionTitle>
        <SectionIntro>
          SailPoint ISC first, then resume-listed capabilities and integrations only.
        </SectionIntro>
        <div className="grid gap-3 sm:grid-cols-2">
          {SKILLS.map((group) => (
            <article
              key={group.id}
              id={group.id}
              className="scroll-mt-24 rounded-md bg-inset px-4.5 py-4 ring-1 ring-border"
            >
              <h3 className="mb-3 font-semibold tracking-tight">{group.title}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    {isTodo(item) ? <TodoFlag detail="source list" /> : <Pill tone="accent">{item}</Pill>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Surface>
    </div>
  );
}

export function ContactPanel() {
  return (
    <div className="tab-enter">
      <Surface>
        <SectionTitle id="contact-title">Contact</SectionTitle>
        <SectionIntro>{PROFILE.location}</SectionIntro>
        <ul className="grid gap-3">
          <li className="flex items-center gap-3 text-sm font-medium text-ink">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent-soft text-accent ring-1 ring-accent-ring">
              <MapPin className="size-4" />
            </span>
            {PROFILE.location}
          </li>
          <li>
            <SocialChip variant="primary" href={`mailto:${PROFILE.email}`} icon={<Mail className="size-4" />}>
              {PROFILE.email}
            </SocialChip>
          </li>
          <li>
            <SocialChip variant="accent" href={`tel:${PROFILE.phone}`} icon={<Phone className="size-4" />}>
              {PROFILE.phone}
            </SocialChip>
          </li>
          <li>
            <SocialChip variant="default" href={PROFILE.linkedin} icon={<Linkedin className="size-4" />}>
              {PROFILE.linkedin.replace("https://www.", "")}
            </SocialChip>
          </li>
        </ul>
      </Surface>
    </div>
  );
}
