# AI Local Business Assistant

Open-source MVP for a safety-first AI administrator for local businesses: client booking, FAQ automation, lead triage, Telegram/WhatsApp messaging, and CRM/calendar integrations.

The project focuses on small businesses and sensitive support scenarios where a fast, calm, and careful first response matters: clinics, patient support services, local service providers, and applications for anxious users.

Important: this project is not intended to provide medical diagnosis, medical advice, or replace a doctor. In healthcare-related scenarios, the assistant must stay administrative: booking, routing, FAQ, reminders, and human escalation.

## Why This Exists

Many local businesses lose leads because messages arrive after hours or administrators are overloaded. The goal of this project is to provide an open, inspectable, and safety-first template for AI-assisted communication that can be adapted by small teams without building everything from scratch.

## Current Status

MVP repository. Implemented today:

- Next.js landing page.
- Lead capture form and `POST /api/leads` route.
- Product and technical MVP plan.
- Safety-first OSS documentation.
- Basic security policy.

Planned next:

- Messenger webhook APIs.
- PostgreSQL/Prisma data model.
- Telegram Bot API integration.
- Google Calendar availability checks.
- AI orchestration with tool calls and human handoff.
- Test coverage and CI hardening.

## Use Cases

- Beauty salons and barbershops: booking, pricing, reminders.
- Auto repair and tire services: service triage, appointment scheduling.
- Private professionals: FAQ, qualification, calendar booking.
- Clinics and support teams: administrative routing, non-diagnostic FAQ, human escalation.
- Anxious users: calm responses, clear next steps, escalation when needed.

## Safety Principles

- No invented prices, services, slots, or policies.
- No medical diagnosis or treatment recommendations.
- Human handoff for risky, unclear, emotional, legal, or medical situations.
- Use structured business knowledge instead of free-form guessing.
- Log assistant actions that affect customers: bookings, discounts, handoffs.
- Store minimal personal data and protect integration tokens.

## Tech Stack

- Next.js App Router.
- React and TypeScript.
- Tailwind CSS.
- Planned: PostgreSQL, Prisma, Redis/queue, OpenAI-compatible AI tools, Telegram, WhatsApp Business Cloud API, Google Calendar.
- Current lead storage: local JSONL adapter for MVP development.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Lead submissions are stored locally in `.data/leads.jsonl` by default. This file is ignored by git. Override the path with `LEADS_FILE_PATH` if needed.

## Verification

```bash
npm run build
npm audit --omit=dev
```

## Repository Structure

- `app/page.tsx` - landing page.
- `app/api/leads/route.ts` - lead capture API route.
- `components/Hero.tsx` - main hero section.
- `components/LeadForm.tsx` - landing-page lead form.
- `lib/leads.ts` - lead validation and record creation.
- `lib/lead-store.ts` - local JSONL lead storage adapter.
- `docs/MVP-plan.md` - product and technical MVP plan in Russian.
- `docs/MVP-plan.en.md` - English version of the MVP plan.
- `docs/architecture.md` - high-level system architecture.
- `docs/lead-capture.md` - lead capture implementation notes.
- `docs/roadmap.md` - open-source roadmap.
- `docs/safety.md` - safety and healthcare-adjacent boundaries.
- `docs/codex-for-oss-application.md` - Codex for OSS application draft.

## Contributing

Contributions are welcome. See `CONTRIBUTING.md`.

Priority areas:

- Safer AI assistant workflows.
- Telegram/WhatsApp/CRM/calendar integrations.
- Test coverage and CI.
- Documentation for healthcare-adjacent administrative use cases.

## Русская Версия

Open-source MVP автономного ИИ-администратора, который помогает локальному бизнесу обрабатывать заявки в Telegram и WhatsApp, отвечать по базе знаний и записывать клиентов в календарь или CRM.

Проект ориентирован на малый бизнес и социально чувствительные сценарии: клиники, сервисы поддержки, приложения для тревожных пользователей и людей, которым важен быстрый, спокойный и понятный первый ответ.

Важно: проект не предназначен для постановки диагнозов, медицинских рекомендаций или замены врача. В медицинских сценариях ассистент должен выполнять только административные функции: запись, FAQ, маршрутизация и передача диалога человеку.

## License

MIT. See `LICENSE`.
