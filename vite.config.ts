import { copyFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, type Plugin, type PreviewServer, type ViteDevServer } from "vite";
// @ts-expect-error JS plugin alongside the TS vite config
import { grokPwaPlugin } from "./scripts/grok-pwa-plugin.mjs";
// @ts-expect-error JS plugin alongside the TS vite config
import { appEnvPlugin } from "./scripts/app-env-plugin.mjs";

export const PAGES_BASE = "/raj-basavaraju/";

function rewriteToBase(server: ViteDevServer | PreviewServer) {
  server.middlewares.use((req, _res, next) => {
    const raw = req.url ?? "/";
    const [path, query] = raw.split("?");
    const qs = query ? `?${query}` : "";
    if (path === "/" || path === "/index.html") {
      req.url = `${PAGES_BASE}${qs}`;
    }
    next();
  });
}

function pagesPreviewCompat(): Plugin {
  return {
    name: "pages-preview-compat",
    configureServer(server) {
      rewriteToBase(server);
    },
    configurePreviewServer(server) {
      rewriteToBase(server);
    },
    closeBundle() {
      const grok = join("docs", "__grok");
      if (existsSync(grok)) {
        rmSync(grok, { recursive: true, force: true });
      }
      const index = join("docs", "index.html");
      if (existsSync(index)) {
        copyFileSync(index, join("docs", "404.html"));
      }
    },
  };
}

export default defineConfig(({ command }) => ({
  base: PAGES_BASE,
  publicDir: "public",
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  build: {
    outDir: "docs",
    emptyOutDir: true,
    assetsDir: "assets",
  },
  plugins: [
    pagesPreviewCompat(),
    appEnvPlugin(),
    ...(command === "serve" ? [grokPwaPlugin()] : []),
    tailwindcss(),
    viteReact(),
  ],
}));
