# Linkme

Linkme is a polished, responsive link-in-bio SaaS frontend built with Next.js 16, React 19, TypeScript, Tailwind CSS, Recharts, and Lucide.

## Highlights

- Premium marketing homepage, pricing, authentication, and eight-step onboarding
- Realistic public creator profile with search, follow, share, contact, and newsletter interactions
- Twelve-section dashboard with analytics, link editing, drag ordering, themes, audience, QR, domains, integrations, settings, and billing
- Local browser persistence for editable links and theme choices
- Responsive layouts, keyboard-friendly controls, metadata, dark mode, reduced motion, and accessible semantic markup
- Typed backend-ready domain models and focused utility tests

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

This release intentionally uses realistic mock data. Authentication, billing, AI generation, DNS verification, and external integrations are simulated and do not require credentials.
