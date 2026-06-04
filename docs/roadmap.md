# Roadmap

This roadmap is intentionally practical. The goal is to turn the landing-page MVP into a useful open-source starter kit for safety-first AI assistants.

## Phase 1: Repository Foundation

- Public repository with MIT license.
- Bilingual README.
- Architecture, roadmap, safety, and MVP documentation.
- GitHub Actions CI for build and audit.
- Issue templates for bugs and feature requests.

## Phase 2: Lead Capture

- Add a landing-page lead form.
- Add `POST /api/leads`.
- Store leads in a database or external table.
- Add basic analytics events for CTA clicks and submissions.

## Phase 3: Data Model

- Add PostgreSQL and Prisma.
- Implement businesses, services, customers, conversations, messages, bookings, and knowledge items.
- Add seed data for a demo salon, clinic, and support service.

## Phase 4: Telegram MVP

- Add Telegram webhook route.
- Normalize inbound messages.
- Store message history.
- Send assistant replies via Telegram Bot API.
- Add manual handoff marker.

## Phase 5: AI Orchestration

- Add system prompt templates.
- Add safe tool interface.
- Implement `get_services`, `get_available_slots`, `create_booking`, and `handoff_to_admin`.
- Add guardrails for healthcare-adjacent scenarios.
- Add evaluation fixtures for risky conversations.

## Phase 6: Calendar and CRM

- Integrate Google Calendar FreeBusy API.
- Create and update calendar events.
- Store external event IDs.
- Prepare adapters for AmoCRM, Bitrix24, and YCLIENTS/Altegio.

## Phase 7: WhatsApp

- Add WhatsApp Business Cloud API webhook verification.
- Normalize inbound WhatsApp messages.
- Send replies through the Cloud API.
- Document setup and production constraints.

## Phase 8: Admin Dashboard

- Business profile page.
- Services and pricing editor.
- Knowledge base editor.
- Conversation list and message viewer.
- Booking calendar and handoff queue.

## Phase 9: Security and Reliability

- Rate limiting for webhooks and admin APIs.
- Token encryption or managed secrets.
- Structured audit logs.
- CI checks for build, type checking, and dependency audit.
- Security documentation for deployers.

## Good First Issues

- Add a real contact form component.
- Add demo JSON data for services and FAQ.
- Add English translations for `docs/MVP-plan.md`.
- Add unit tests for prompt/tool validation helpers.
- Add a safe healthcare handoff prompt example.
