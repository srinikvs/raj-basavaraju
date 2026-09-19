import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioApp } from "@/components/portfolio/app";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import "./styles.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Missing #root");
}

createRoot(root).render(
  <StrictMode>
    <PreviewHostBridge />
    <PortfolioApp />
  </StrictMode>,
);
