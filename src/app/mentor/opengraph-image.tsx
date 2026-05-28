import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";

export const alt = "Менторство та навчання front-end та веб-розробці";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const fontData = await readFile(join(process.cwd(), "src/app/mentor/fonts/Manrope-ExtraBold.ttf"));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", backgroundColor: "#fffafc" }}>
        {/* Left accent bar */}
        <div style={{ width: 8, backgroundColor: "#cb5283", flexShrink: 0, display: "flex" }} />

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 96px 72px 80px",
          }}
        >
          {/* URL */}
          <div style={{ display: "flex", marginBottom: 36 }}>
            <span style={{ fontFamily: "Manrope", fontSize: 18, color: "#a88090", letterSpacing: "0.06em" }}>
              sashkoratushnyi.com/mentor
            </span>
          </div>

          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 800,
                  fontSize: 68,
                  color: "#3a1428",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Менторство та навчання
              </span>
            </div>
            <div style={{ display: "flex", marginTop: 6, gap: 16 }}>
              <span
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 800,
                  fontSize: 68,
                  color: "#cb5283",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                front-end
              </span>
              <span
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 800,
                  fontSize: 68,
                  color: "#3a1428",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                {"та веб-розробці."}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              height: 1,
              backgroundColor: "#f2e0e8",
              marginTop: 48,
              marginBottom: 36,
            }}
          />

          {/* Author row */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontFamily: "Manrope", fontWeight: 800, fontSize: 24, color: "#6b2a4a" }}>
              Олександр Ратушний
            </span>
            <span style={{ fontFamily: "Manrope", fontSize: 20, color: "#e8cdd8", marginLeft: 16, marginRight: 16 }}>
              ·
            </span>
            <span style={{ fontFamily: "Manrope", fontSize: 18, color: "#a88090" }}>
              JS · TS · React · Кременчук
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Manrope", data: fontData, weight: 800, style: "normal" }],
    }
  );
}
