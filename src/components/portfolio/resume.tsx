import { Linkedin, Mail, Phone, X } from "lucide-react";
import { CERTIFICATIONS, EDUCATION, PROFILE, ROLES, SKILLS, isTodo } from "@/lib/portfolio";
import { MaybeTodo, TodoFlag } from "./todo-flag";

export function ResumeOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-ink/40 p-3 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-[720px] overflow-y-auto rounded-lg bg-card p-6 elevated sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Résumé</p>
            <h2 id="resume-title" className="font-display text-2xl font-semibold tracking-tight">
              {PROFILE.name}
            </h2>
            <p className="text-sm text-muted">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-border hover:bg-inset"
            aria-label="Close résumé"
          >
            <X className="size-4" />
          </button>
        </div>

        <p className="mb-3 max-w-[60ch] text-sm leading-relaxed text-muted">{PROFILE.positioning}</p>
        <div className="mb-5">
          <TodoFlag detail="full resume text" />
        </div>

        <p className="mb-5 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-muted">
          <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 font-semibold text-ink">
            <Mail className="size-3.5" />
            {PROFILE.email}
          </a>
          <a href={`tel:${PROFILE.phone}`} className="inline-flex items-center gap-1.5 font-semibold text-ink">
            <Phone className="size-3.5" />
            {PROFILE.phone}
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-ink"
          >
            <Linkedin className="size-3.5" />
            LinkedIn
          </a>
        </p>

        <h3 className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">Roles</h3>
        <div className="mb-5 space-y-4">
          {ROLES.map((role) => (
            <div key={role.id}>
              <div className="font-semibold">
                <MaybeTodo value={role.title} />
              </div>
              <div className="text-[13px] text-muted">
                {role.place} · <MaybeTodo value={role.dates} />
              </div>
              <ul className="mt-1.5 space-y-1 text-[13.5px] text-muted">
                {role.highlights.map((item, index) => (
                  <li key={`${role.id}-h-${index}`}>
                    {isTodo(item) ? <TodoFlag detail="bullet" /> : item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
          Certifications
        </h3>
        <p className="mb-5 text-[13.5px] leading-relaxed text-muted">{CERTIFICATIONS.join(" · ")}</p>

        <h3 className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">Education</h3>
        <p className="mb-5 text-[13.5px] leading-relaxed text-muted">{EDUCATION.join(" · ")}</p>

        <h3 className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">Skills</h3>
        <p className="mb-6 text-[13.5px] leading-relaxed text-muted">
          {SKILLS.flatMap((group) => group.items.filter((item) => !isTodo(item))).join(" · ")}
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-ink-fg"
          >
            {PROFILE.email}
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-11 items-center rounded-full bg-accent-soft px-4 text-sm font-semibold text-accent ring-1 ring-accent-ring"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
