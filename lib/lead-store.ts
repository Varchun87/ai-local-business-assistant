import { appendFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { LeadRecord } from "./leads";

const defaultLeadPath = join(process.cwd(), ".data", "leads.jsonl");

export async function saveLead(lead: LeadRecord) {
  const filePath = process.env.LEADS_FILE_PATH || defaultLeadPath;

  await mkdir(dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(lead)}\n`, "utf8");
}
