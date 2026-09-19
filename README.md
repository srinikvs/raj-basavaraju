# Rajashekara Basavaraju — identity portfolio

Static personal portfolio for Raj (IAM / SailPoint ISC specialist, Atlanta, GA).

Repo: [srinikvs/raj-basavaraju](https://github.com/srinikvs/raj-basavaraju)

Claims on this site are limited to resume-verified facts. Missing titles, dates, bullets, story bodies, metric context, and the source list render as **Resume content pending / FROM RESUME**.

## Resume content (follow-up input)

A later resume paste is a follow-up input. It **replaces only** those pending placeholders. Do not invent titles, dates, bullets, skills, or metrics. Keep the two verified outcomes as stated: BBVA 30% reduction and JP Morgan 40% reduction.

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

Then point the site at it in `src/lib/portfolio.ts`:

```ts
photoCandidates: ["/assets/profile.jpg", "/assets/profile.svg"],
```

Keep `profile.svg` last as the initials fallback. The hero tries candidates in order and falls back to drawn initials if none load.

## Run locally

```
npm ci
npm run dev
```
