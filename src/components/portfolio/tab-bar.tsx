import { TABS, type TabId } from "@/lib/portfolio";
import { cn } from "@/lib/cn";

export function TabBar({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <div className="no-print sticky top-0 z-20 -mx-4 mb-4.5 bg-page/90 px-4 py-2.5 backdrop-blur-md sm:-mx-0 sm:px-0">
      <div
        role="tablist"
        aria-label="Portfolio sections"
        className="tab-scroller flex flex-wrap gap-2 pb-0.5 sm:flex-nowrap sm:overflow-x-auto"
      >
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => onChange(tab.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-full px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap ring-1 transition-[background-color,color,box-shadow] duration-150",
                isActive
                  ? "bg-ink text-ink-fg ring-ink"
                  : "bg-card text-muted ring-border hover:text-ink hover:ring-muted-2",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
