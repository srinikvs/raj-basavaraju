import type { ReactNode, ComponentProps } from "react";
import { cn } from "@/lib/cn";
import type { LaneTone } from "@/lib/portfolio";

export function Surface({
  as: Tag = "section",
  className,
  id,
  children,
}: {
  as?: "section" | "header" | "article" | "div";
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <Tag id={id} className={cn("surface-card mb-4.5", className)}>
      {children}
    </Tag>
  );
}

export function SectionTitle({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mb-4 scroll-mt-24 border-b border-border pb-2.5 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase"
    >
      {children}
    </h2>
  );
}

export function SectionIntro({ children }: { children: ReactNode }) {
  return <p className="-mt-1 mb-4 max-w-[760px] text-sm leading-relaxed text-muted">{children}</p>;
}

export function Pill({
  tone = "muted",
  children,
}: {
  tone?: LaneTone | "muted";
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    join: "bg-lane-join-soft text-lane-join ring-1 ring-lane-join-ring",
    move: "bg-lane-move-soft text-lane-move ring-1 ring-lane-move-ring",
    review: "bg-lane-review-soft text-lane-review ring-1 ring-lane-review-ring",
    leave: "bg-lane-leave-soft text-lane-leave ring-1 ring-lane-leave-ring",
    accent: "bg-accent-soft text-accent ring-1 ring-accent-ring",
    muted: "bg-inset text-muted ring-1 ring-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function LaneCard({
  tone = "accent",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { tone?: LaneTone }) {
  return (
    <button
      type="button"
      className={cn(
        "lane flex min-h-0 flex-col rounded-md bg-card px-4.5 py-4 text-left elevated transition-[box-shadow,transform] duration-150 ease-out",
        "hover:-translate-y-px active:scale-[0.99]",
        `lane-${tone}`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Callout({
  id,
  tone = "accent",
  children,
}: {
  id?: string;
  tone?: LaneTone;
  children: ReactNode;
}) {
  return (
    <article
      id={id}
      className={cn("lane scroll-mt-24 rounded-md bg-card px-4.5 py-4 elevated", `lane-${tone}`)}
    >
      {children}
    </article>
  );
}

export function EvidenceButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-3 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent ring-1 ring-accent-ring transition-colors duration-150 hover:bg-accent hover:text-ink-fg"
    >
      {children}
      <span aria-hidden="true">→</span>
    </button>
  );
}

export function SocialChip({
  href,
  onClick,
  variant = "default",
  icon,
  children,
}: {
  href?: string;
  onClick?: () => void;
  variant?: "default" | "primary" | "accent";
  icon: ReactNode;
  children: ReactNode;
}) {
  const styles = {
    default: "bg-card text-ink ring-border hover:ring-muted-2",
    primary: "bg-ink text-ink-fg ring-ink hover:opacity-90",
    accent: "bg-accent-soft text-accent ring-accent-ring hover:bg-accent hover:text-ink-fg",
  }[variant];

  const className = cn(
    "inline-flex min-h-11 items-center gap-2 rounded-full px-3 py-1.5 text-[13px] font-semibold ring-1 transition-[background-color,color,opacity] duration-150",
    styles,
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {icon}
      {children}
    </button>
  );
}

export function Mark({
  tone = "accent",
  children,
}: {
  tone?: LaneTone;
  children: ReactNode;
}) {
  const tones: Record<LaneTone, string> = {
    join: "bg-lane-join text-ink-fg",
    move: "bg-lane-move text-ink-fg",
    review: "bg-lane-review text-ink-fg",
    leave: "bg-lane-leave text-ink-fg",
    accent: "bg-accent text-ink-fg",
  };
  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-sm font-display text-sm font-semibold tracking-tight",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
