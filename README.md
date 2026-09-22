# Rajashekara Basavaraju — identity portfolio

Static GitHub Pages site for Raj (Senior IAM / SailPoint Engineer, Atlanta, GA).

Live URL: [https://srinikvs.github.io/raj-basavaraju/](https://srinikvs.github.io/raj-basavaraju/)

Repo: [srinikvs/raj-basavaraju](https://github.com/srinikvs/raj-basavaraju)

This is a client-only Vite + React build. There is no server, Vercel preset, or SSR. Built files live in `docs/` and are the GitHub Pages site.

## Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/docs`
3. Save. The site publishes at `https://srinikvs.github.io/raj-basavaraju/`.

Vite `base` is `/raj-basavaraju/` so asset URLs match that project Pages path.

Later this can move to Raj’s own user site (`username.github.io`) by changing `base` to `/` and deploying from that repo’s root (or `/docs`).

## Resume content (follow-up input)

Claims are limited to resume-verified facts. Missing titles, dates, bullets, story bodies, metric context, and the source list render as **Resume content pending / FROM RESUME**.

A later resume paste replaces **only** those placeholders. Do not invent titles, dates, bullets, skills, or metrics. Numeric outcomes such as BBVA 30% reduction and JP Morgan 40% reduction are **not** in the resume and must not appear.

## Contact

Only these details are shown (no contact form):

- Email: `cy.rs@yahoo.com`
- Phone: `+1-716-471-7777`
- LinkedIn: <https://www.linkedin.com/in/raj-iam-etl-dwh>
- Location: Atlanta, GA

## Replace the profile photo

Until a photo is added, the hero uses initials **RB** from `public/assets/profile.svg`.

**Drop-in replacement:** overwrite `public/assets/profile.svg` with the photo exported as SVG, or save a raster next to it:

```
public/assets/profile.jpg   (preferred)
public/assets/profile.png
public/assets/profile.webp
```

Then point the site at it in `src/lib/portfolio.ts` (`photoCandidates`, using `import.meta.env.BASE_URL`) and rebuild so `docs/` updates.

Keep `profile.svg` last as the initials fallback.

## Local

```
npm ci
npm run dev      # preview at / and /raj-basavaraju/
npm run build    # writes docs/
```
