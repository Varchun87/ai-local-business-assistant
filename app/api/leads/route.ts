import { NextResponse } from "next/server";
import { createLeadRecord, validateLeadPayload } from "@/lib/leads";
import { saveLead } from "@/lib/lead-store";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Request body must be valid JSON." } },
      { status: 400 }
    );
  }

  const validation = validateLeadPayload(payload);

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, errors: validation.errors },
      { status: 422 }
    );
  }

  const lead = createLeadRecord(validation.data);
  await saveLead(lead);

  return NextResponse.json({ ok: true, leadId: lead.id }, { status: 201 });
}
