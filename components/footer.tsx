const BOOK_URL =
  "https://outlook.office.com/book/MeetingwithVisoryAICopy@visoryaiconsulting.com/?ismsaljsauthenabled";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--line-soft)",
        padding: "80px 32px 40px",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid var(--line-soft)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 20,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo.png"
              alt=""
              width={36}
              height={36}
              style={{ objectFit: "contain" }}
            />
            <span
              className="serif"
              style={{
                fontSize: 26,
                color: "var(--fg)",
                letterSpacing: "-0.01em",
              }}
            >
              Visory AI
            </span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--fg-muted)",
              maxWidth: 380,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Vision-forward — see further, sell faster. Exclusive, pre-qualified
            leads for personal injury law firms.
          </p>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Explore
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <li>
              <a href="#who" style={{ fontSize: 14, color: "var(--fg-muted)" }}>
                Who We Serve
              </a>
            </li>
            <li>
              <a href="#process" style={{ fontSize: 14, color: "var(--fg-muted)" }}>
                Process
              </a>
            </li>
            <li>
              <a
                href="#calculator"
                style={{ fontSize: 14, color: "var(--fg-muted)" }}
              >
                Calculator
              </a>
            </li>
            <li>
              <a href="#faq" style={{ fontSize: 14, color: "var(--fg-muted)" }}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Contact
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <li style={{ fontSize: 14, color: "var(--fg-muted)" }}>
              tyler@visoryaiconsulting.com
            </li>
            <li style={{ fontSize: 14, color: "var(--fg-muted)" }}>
              +1 (972) 742-1480
            </li>
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Leadership
          </div>
          <p style={{ fontSize: 14, color: "var(--fg)", margin: "0 0 20px" }}>
            Tyler Hart
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ padding: "10px 16px", fontSize: 10 }}
          >
            Book a Call
          </a>
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 32,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <p style={{ fontSize: 12, color: "var(--fg-dim)", margin: 0 }}>
          © 2026 Visory AI Consulting. All rights reserved.
        </p>
        <p
          style={{
            fontSize: 10,
            color: "var(--accent)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          See Further · Sell Faster
        </p>
      </div>
    </footer>
  );
}
