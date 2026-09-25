import { NextRequest, NextResponse } from "next/server";
import { hasContactErrors, parseContact, validateContactForm } from "@/lib/contact-validation";

const NOTION_API_URL = "https://api.notion.com/v1/pages";
const NOTION_VERSION = "2022-06-28";

// Existing option in the services database's "Service" select
const SERVICE = "Потрібна консультація";

// Strip null bytes to prevent injection into downstream systems
function sanitize(s: string): string {
  return s.trim().replace(/\0/g, "");
}

// Quick contact form on the home page — writes into the same Notion
// database as the /services request form.
export async function POST(request: NextRequest) {
  const token = process.env.NOTION_API_TOKEN;
  const databaseId = process.env.NOTION_SERVICES_DATABASE_ID;

  if (!token || !databaseId) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

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

  const raw = body as Record<string, unknown>;

  // Honeypot: real users never see or fill this field
  if (typeof raw.website === "string" && raw.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    contact: typeof raw.contact === "string" ? raw.contact : "",
    message: typeof raw.message === "string" ? raw.message : "",
  };

  const errors = validateContactForm(data);
  if (hasContactErrors(errors)) {
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 422 });
  }

  const contact = parseContact(sanitize(data.contact))!;
  const message = sanitize(data.message);

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: "email" in contact ? contact.email : contact.telegram } }] },
    Service: { select: { name: SERVICE } },
    Details: {
      rich_text: [{ text: { content: `[Home page] ${message || "No message — just left contacts"}` } }],
    },
  };

  if ("email" in contact) properties.Email = { email: contact.email };
  else properties.Telegram = { rich_text: [{ text: { content: contact.telegram } }] };

  try {
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
      console.error("Notion API error:", res.status, await res.text());
      return NextResponse.json({ error: "Failed to save request" }, { status: 502 });
    }
  } catch (error) {
    console.error("Notion API request failed:", error);
    return NextResponse.json({ error: "Failed to save request" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
