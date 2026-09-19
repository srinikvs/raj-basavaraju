import { TODO, isTodo } from "@/lib/portfolio";

export function TodoFlag({ detail }: { detail?: string }) {
  return (
    <span className="inline-flex max-w-full items-center rounded-full bg-lane-review-soft px-2.5 py-1 text-xs font-semibold text-lane-review ring-1 ring-lane-review-ring">
      {detail ? `${TODO} — ${detail}` : TODO}
    </span>
  );
}

export function MaybeTodo({ value }: { value: string }) {
  if (isTodo(value)) {
    return <TodoFlag />;
  }
  return <>{value}</>;
}
