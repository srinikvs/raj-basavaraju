import { useEffect } from "react";
import { installPreviewHostBridge } from "@/lib/preview-host-bridge";

export function PreviewHostBridge() {
  useEffect(() => {
    return installPreviewHostBridge({
      navigate: (path) => {
        const hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          window.location.hash = path.slice(hashIndex + 1);
          return;
        }
        const trimmed = path.replace(/\/+$/, "");
        if (trimmed === "" || trimmed === "/" || trimmed.endsWith("/raj-basavaraju")) {
          window.location.hash = "tab-overview";
          return;
        }
        window.location.hash = path.replace(/^#/, "");
      },
      getRoutePaths: () => ["/", "/raj-basavaraju/"],
    });
  }, []);

  return null;
}
