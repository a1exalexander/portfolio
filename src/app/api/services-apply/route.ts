import { NextRequest, NextResponse } from "next/server";
import { hasErrors, validateServicesForm } from "@/lib/services-apply-validation";

const NOTION_API_URL = "https://api.notion.com/v1/pages";
const NOTION_VERSION = "2022-06-28";

// Strip null bytes to prevent injection into downstream systems
function sanitize(s: string): string {
  return s.trim().replace(/\0/g, "");
}

export async function POST(request: NextRequest) {
  const token = process.env.NOTION_API_TOKEN;
  const databaseId = process.env.NOTION_SERVICES_DATABASE_ID;

  if (!token || !databaseId) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  // Reject unexpected content types
  const ct = request.headers.get("content-type") ?? "";
  if (!ct.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Extract only the fields we expect — ignore everything else
  const raw = body as Record<string, unknown>;
  const data = {
    name:     typeof raw.name     === "string" ? raw.name     : "",
    email:    typeof raw.email    === "string" ? raw.email    : "",
    telegram: typeof raw.telegram === "string" ? raw.telegram : "",
    phone:    typeof raw.phone    === "string" ? raw.phone    : "",
    service:  typeof raw.service  === "string" ? raw.service  : "",
    budget:   typeof raw.budget   === "string" ? raw.budget   : "",
    timeline: typeof raw.timeline === "string" ? raw.timeline : "",
    details:  typeof raw.details  === "string" ? raw.details  : "",
  };

  const errors = validateServicesForm(data);
  if (hasErrors(errors)) {
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 422 });
  }

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: sanitize(data.name) } }] },
    Service: { select: { name: sanitize(data.service) } },
    Details: { rich_text: [{ text: { content: sanitize(data.details) } }] },
  };

  if (data.email.trim())    properties.Email    = { email: sanitize(data.email) };
  if (data.telegram.trim()) properties.Telegram = { rich_text: [{ text: { content: sanitize(data.telegram) } }] };
  if (data.phone.trim())    properties.Phone    = { phone_number: sanitize(data.phone) };
  if (data.budget.trim())   properties.Budget   = { rich_text: [{ text: { content: sanitize(data.budget) } }] };
  if (data.timeline.trim()) properties.Timeline = { rich_text: [{ text: { content: sanitize(data.timeline) } }] };

  const res = await fetch(NOTION_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": NOTION_VERSION,
    },
    body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("Notion API error:", error);
    return NextResponse.json({ error: "Failed to save application" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
