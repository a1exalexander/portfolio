"use client";

import { useEffect, useState } from "react";
import { IconPhone } from "./icons";

// The number is stored base64-encoded and assembled only in the browser, so it
// never appears in the server-rendered HTML or structured data that search
// engines crawl — it can't be found by searching the number on the web. Real
// visitors still get a working tap-to-call link after the page hydrates.
// base64 of the contact phone in E.164 form (decoded only in the browser).
const ENCODED = "KzM4MDY3OTM0MDc3Ng==";

function format(raw: string) {
  return `${raw.slice(0, 3)} ${raw.slice(3, 6)} ${raw.slice(6, 9)} ${raw.slice(9, 11)} ${raw.slice(11)}`;
}

export function PhoneLink({ className }: { className?: string }) {
  const [raw, setRaw] = useState<string | null>(null);

  // Decode on mount only; server render and first client render emit nothing.
  useEffect(() => {
    try {
      setRaw(window.atob(ENCODED));
    } catch {
      /* ignore */
    }
  }, []);

  if (!raw) return null;

  return (
    <a href={`tel:${raw}`} className={className} rel="nofollow">
      <IconPhone />
      {format(raw)}
    </a>
  );
}
