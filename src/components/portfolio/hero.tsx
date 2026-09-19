import { FileText, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE } from "@/lib/portfolio";
import { ProfilePhoto } from "./profile-photo";
import { Pill, SocialChip, Surface } from "./primitives";

export function Hero({
  onResume,
}: {
  onResume: () => void;
  onContact: () => void;
}) {
  return (
    <Surface as="header" id="top" className="px-6 py-7 sm:px-8">
      <p className="mb-1.5 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
        {PROFILE.eyebrow}
      </p>
      <div className="flex items-end gap-3.5">
        <ProfilePhoto />
        <p className="pb-1 font-display text-lg font-semibold tracking-tight text-muted sm:text-xl">
          {PROFILE.shortName}
        </p>
      </div>
      <h1 className="mt-4 font-display text-[clamp(1.9rem,4.8vw,2.7rem)] leading-[1.12] font-semibold tracking-[-0.03em] text-ink">
        <span className="whitespace-nowrap">Rajashekara</span>{" "}
        <span className="whitespace-nowrap">Basavaraju</span>
      </h1>

      <p className="mt-3 font-display text-[clamp(1.15rem,2.2vw,1.45rem)] leading-snug font-semibold tracking-[-0.02em] text-ink">
        {PROFILE.role}
      </p>
      <p className="mt-2 max-w-[740px] text-[15px] leading-relaxed text-muted">{PROFILE.positioning}</p>

      <div className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-muted">
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-accent-soft text-accent ring-1 ring-accent-ring">
          <MapPin className="size-3.5" strokeWidth={2.25} />
        </span>
        {PROFILE.location}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {PROFILE.tags.map((tag) => (
          <Pill key={tag} tone="accent">
            {tag}
          </Pill>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <SocialChip variant="primary" href={`mailto:${PROFILE.email}`} icon={<Mail className="size-4" />}>
          {PROFILE.email}
        </SocialChip>
        <SocialChip variant="accent" href={`tel:${PROFILE.phone}`} icon={<Phone className="size-4" />}>
          {PROFILE.phone}
        </SocialChip>
        <SocialChip variant="default" href={PROFILE.linkedin} icon={<Linkedin className="size-4" />}>
          LinkedIn
        </SocialChip>
        <SocialChip variant="default" onClick={onResume} icon={<FileText className="size-4" />}>
          Résumé
        </SocialChip>
      </div>
    </Surface>
  );
}
