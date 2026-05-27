import { NextRequest, NextResponse } from "next/server";

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

export async function POST(request: NextRequest) {
  const token = process.env.NOTION_API_TOKEN;
  const databaseId = process.env.NOTION_MENTOR_DATABASE_ID;

  if (!token || !databaseId) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const { name, email, telegram, phone, level, format, message } = await request.json();

  if (!name?.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: name.trim() } }] },
  };

  if (email?.trim()) properties.Email = { email: email.trim() };
  if (telegram?.trim()) properties.Telegram = { rich_text: [{ text: { content: telegram.trim() } }] };
  if (phone?.trim()) properties.Phone = { phone_number: phone.trim() };
  if (level && LEVEL_LABELS[level]) properties.Level = { select: { name: LEVEL_LABELS[level] } };
  if (format && FORMAT_LABELS[format]) properties.Format = { select: { name: FORMAT_LABELS[format] } };
  if (message?.trim()) properties.Message = { rich_text: [{ text: { content: message.trim() } }] };

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
