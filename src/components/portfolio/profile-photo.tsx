import { useState } from "react";
import { PROFILE } from "@/lib/portfolio";

export function ProfilePhoto() {
  const [index, setIndex] = useState(0);
  const src = PROFILE.photoCandidates[index];
  const exhausted = index >= PROFILE.photoCandidates.length;

  if (exhausted || !src) {
    return <Initials />;
  }

  return (
    <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-ink sm:size-[4.25rem]">
      <img
        src={src}
        alt=""
        className="size-full object-cover outline outline-1 -outline-offset-1 outline-ink/20"
        onError={() => setIndex((current) => current + 1)}
      />
    </div>
  );
}

function Initials() {
  return (
    <div
      className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink text-ink-fg sm:size-[4.25rem]"
      aria-hidden="true"
    >
      <span className="font-display text-xl font-semibold tracking-tight">{PROFILE.initials}</span>
    </div>
  );
}
