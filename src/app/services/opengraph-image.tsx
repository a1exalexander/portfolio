import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const C = {
  bg: '#1c1b26',
  bgDark: '#17161d',
  surface: '#2e2b3b',
  surfaceDark: '#262438',
  line: 'rgba(248,248,242,0.12)',
  lineStrong: 'rgba(248,248,242,0.22)',
  text: '#f8f8f2',
  textDim: '#c8c3e8',
  muted: '#7970a9',
  green: '#8aff80',
  red: '#ff9580',
  yellow: '#ffff80',
}

const CHARS =
  'Розробка сайтів і веб-застосунків. sashko@portfolio:~/services$ ./services.sh --hire JavaScript TypeScript React Next.js NestJS 2018 → present sashkoratushnyi.com NORMAL'

async function loadJBMono(weight: 400 | 700): Promise<{ data: ArrayBuffer; weight: 400 | 700 } | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}&text=${encodeURIComponent(CHARS)}`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      }
    ).then((r) => r.text())
    const match = css.match(/src: url\(([^)]+)\) format\('woff2'\)/)
    if (!match?.[1]) return null
    const data = await fetch(match[1]).then((r) => r.arrayBuffer())
    return { data, weight }
  } catch {
    return null
  }
}

export default async function ServicesOGImage() {
  const [r400, r700] = await Promise.all([loadJBMono(400), loadJBMono(700)])

  const fonts = [r400, r700]
    .filter(Boolean)
    .map((f) => ({ name: 'JBM', data: f!.data, style: 'normal' as const, weight: f!.weight }))

  const mono = fonts.length > 0 ? 'JBM' : 'monospace'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: C.bg,
        }}
      >
        {/* Terminal window */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: C.surface,
            border: `1px solid ${C.lineStrong}`,
            borderRadius: 16,
            overflow: 'hidden',
            width: 980,
            boxShadow: '0 40px 100px -30px rgba(0,0,0,0.7)',
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 22px',
              background: C.surfaceDark,
              borderBottom: `1px solid ${C.line}`,
            }}
          >
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: C.red }} />
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: C.yellow }} />
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: C.green }} />
            </div>
            <span style={{ fontFamily: mono, fontSize: 13, color: C.muted }}>
              sashko@portfolio: ~/services — zsh
            </span>
          </div>

          {/* Body */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '44px 52px 48px' }}>
            {/* Prompt */}
            <div style={{ display: 'flex', fontFamily: mono, fontSize: 16, marginBottom: 32 }}>
              <span style={{ color: C.green }}>sashko@portfolio</span>
              <span style={{ color: C.muted }}>:</span>
              <span style={{ color: C.textDim }}>~/services</span>
              <span style={{ color: C.muted, margin: '0 6px' }}>$</span>
              <span style={{ color: C.text }}>./services.sh --hire</span>
            </div>

            {/* Headline */}
            <div
              style={{
                fontFamily: mono,
                fontSize: 54,
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                marginBottom: 38,
              }}
            >
              Розробка сайтів і веб-застосунків.
            </div>

            {/* Specs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', fontFamily: mono, fontSize: 15 }}>
                <span style={{ color: C.muted, width: 132 }}>language</span>
                <span style={{ color: C.muted, marginRight: 12 }}>:</span>
                <span style={{ color: C.textDim }}>JavaScript · TypeScript</span>
              </div>
              <div style={{ display: 'flex', fontFamily: mono, fontSize: 15 }}>
                <span style={{ color: C.muted, width: 132 }}>experience</span>
                <span style={{ color: C.muted, marginRight: 12 }}>:</span>
                <span style={{ color: C.textDim }}>2018 → present</span>
              </div>
              <div style={{ display: 'flex', fontFamily: mono, fontSize: 15 }}>
                <span style={{ color: C.muted, width: 132 }}>stack</span>
                <span style={{ color: C.muted, marginRight: 12 }}>:</span>
                <span style={{ color: C.textDim }}>React · Next.js · NestJS</span>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              background: C.bgDark,
              borderTop: `1px solid ${C.line}`,
              fontFamily: mono,
              fontSize: 11,
              height: 28,
            }}
          >
            <div
              style={{
                background: C.text,
                color: C.bg,
                padding: '0 14px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              NORMAL
            </div>
            <div
              style={{
                color: C.muted,
                padding: '0 16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              sashkoratushnyi.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, ...(fonts.length > 0 && { fonts }) }
  )
}
