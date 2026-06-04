# Lead Capture

The MVP includes a small lead capture flow on the landing page.

## User Flow

1. A visitor opens the landing page.
2. The visitor fills in name, contact, business segment, optional message, and consent.
3. The form sends a JSON request to `POST /api/leads`.
4. The API validates the payload and stores a normalized lead record.
5. The UI shows a success or error message.

## API

Endpoint:

```http
POST /api/leads
Content-Type: application/json
```

Payload:

```json
{
  "name": "Anna",
  "contact": "@anna",
  "segment": "clinic",
  "message": "We want to automate appointment booking.",
  "consent": true
}
```

Successful response:

```json
{
  "ok": true,
  "leadId": "generated-uuid"
}
```

Validation errors return `422` with field-level messages.

## Storage

The current adapter writes JSON Lines records to `.data/leads.jsonl`.

This is intentionally simple for local MVP development and demos. The `.data` directory is ignored by git because it may contain personal contact data.

Override the storage path with:

```bash
LEADS_FILE_PATH=.data/leads.jsonl
```

## Privacy Notes

- The form requires explicit consent before submitting contact details.
- Do not commit `.data/leads.jsonl`.
- Production deployments should replace local JSONL storage with PostgreSQL, a CRM adapter, or another secure data store.
- Store only the minimum data needed to contact the lead.

## Next Steps

- Add server-side rate limiting.
- Add optional spam protection.
- Add PostgreSQL/Prisma storage adapter.
- Add CRM export or webhook forwarding.
