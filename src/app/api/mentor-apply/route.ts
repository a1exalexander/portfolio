import { NextRequest, NextResponse } from "next/server";
import { hasErrors, validateApplyForm } from "@/lib/mentor-apply-validation";

const NOTION_API_URL = "https://api.notion.com/v1/pages";
const NOTION_VERSION = "2022-06-28";

const LEVEL_LABELS: Record<string, string> = {
  zero: "З нуля",
  self: "Сам вчуся",
  junior: "Джун (0–1 рік)",
  switch: "Змінюю сферу",
};

const FORMAT_LABELS: Record<string, string> = {
  indiv: "1-на-1",
  group: "У групі",
  undecided: "Не визначився",
};

// Strip null bytes to prevent injection into downstream systems
function sanitize(s: string): string {
  return s.trim().replace(/\0/g, "");
}

export async function POST(request: NextRequest) {
  const token = process.env.NOTION_API_TOKEN;
  const databaseId = process.env.NOTION_MENTOR_DATABASE_ID;

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
    level:    typeof raw.level    === "string" ? raw.level    : "",
    format:   typeof raw.format   === "string" ? raw.format   : "",
    message:  typeof raw.message  === "string" ? raw.message  : "",
  };

  const errors = validateApplyForm(data);
  if (hasErrors(errors)) {
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 422 });
  }

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: sanitize(data.name) } }] },
  };

  if (data.email.trim())    properties.Email    = { email: sanitize(data.email) };
  if (data.telegram.trim()) properties.Telegram = { rich_text: [{ text: { content: sanitize(data.telegram) } }] };
  if (data.phone.trim())    properties.Phone    = { phone_number: sanitize(data.phone) };
  if (data.level && LEVEL_LABELS[data.level])   properties.Level  = { select: { name: LEVEL_LABELS[data.level] } };
  if (data.format && FORMAT_LABELS[data.format]) properties.Format = { select: { name: FORMAT_LABELS[data.format] } };
  if (data.message.trim())  properties.Message  = { rich_text: [{ text: { content: sanitize(data.message) } }] };

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
