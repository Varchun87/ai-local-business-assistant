export const leadSegments = [
  "beauty",
  "auto",
  "private-master",
  "clinic",
  "support-service",
  "other"
] as const;

export type LeadSegment = (typeof leadSegments)[number];

export type LeadInput = {
  name: string;
  contact: string;
  segment: LeadSegment;
  message: string;
  consent: boolean;
};

export type LeadRecord = Omit<LeadInput, "consent"> & {
  id: string;
  createdAt: string;
  source: "landing";
};

export type LeadValidationResult =
  | { ok: true; data: LeadInput }
  | { ok: false; errors: Record<string, string> };

const maxLengths = {
  name: 120,
  contact: 160,
  message: 1000
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const readString = (payload: Record<string, unknown>, key: string) => {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
};

export function validateLeadPayload(payload: unknown): LeadValidationResult {
  if (!isRecord(payload)) {
    return { ok: false, errors: { form: "Invalid JSON payload." } };
  }

  const name = readString(payload, "name");
  const contact = readString(payload, "contact");
  const segment = readString(payload, "segment");
  const message = readString(payload, "message");
  const consent = payload.consent === true;
  const errors: Record<string, string> = {};

  if (name.length < 2 || name.length > maxLengths.name) {
    errors.name = `Name must be between 2 and ${maxLengths.name} characters.`;
  }

  if (contact.length < 4 || contact.length > maxLengths.contact) {
    errors.contact = `Contact must be between 4 and ${maxLengths.contact} characters.`;
  }

  if (!leadSegments.includes(segment as LeadSegment)) {
    errors.segment = "Choose a valid business segment.";
  }

  if (message.length > maxLengths.message) {
    errors.message = `Message must be ${maxLengths.message} characters or less.`;
  }

  if (!consent) {
    errors.consent = "Consent is required before submitting personal data.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      contact,
      segment: segment as LeadSegment,
      message,
      consent
    }
  };
}

export function createLeadRecord(input: LeadInput): LeadRecord {
  return {
    id: crypto.randomUUID(),
    name: input.name,
    contact: input.contact,
    segment: input.segment,
    message: input.message,
    source: "landing",
    createdAt: new Date().toISOString()
  };
}
