import { Fragment } from "react";

const HEADLINE = "Stop Chasing Cases.|Start Closing Them.";
const SUBHEAD =
  "We deliver exclusive, pre-qualified personal injury leads directly to your firm. You only pay for results — and every lead is yours alone, never shared with a competing attorney.";
const MOTTO = "Vision-forward · See further. Sell faster.";

const BOOK_URL =
  "https://outlook.office.com/book/MeetingwithVisoryAICopy@visoryaiconsulting.com/?ismsaljsauthenabled";

function HeroTicker() {
  const items = [
    "EXCLUSIVE LEADS",
    "PERSONAL INJURY LAW",
    "PAY PER RESULT",
    "NEVER SHARED",
    "PRE-QUALIFIED INTENT",
    "NEXT-DAY DELIVERY POSSIBLE",
  ];
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid var(--line-soft)",
        borderBottom: "1px solid var(--line-soft)",
        overflow: "hidden",
        background: "var(--bg-elev)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 0,
          padding: "14px 0",
          whiteSpace: "nowrap",
          animation: "marquee 40s linear infinite",
          width: "max-content",
        }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 36,
              paddingRight: 36,
            }}
          >
            <span className="ticker">{t}</span>
            <span
              style={{
                width: 4,
                height: 4,
                background: "var(--accent)",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Radial atmosphere */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 900,
            height: 900,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(76% 0.09 78 / 0.10) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "8%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(76% 0.09 78 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(76% 0.09 78 / 0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Tech grid backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          backgroundImage:
            "linear-gradient(var(--line-soft) 1px, transparent 1px), linear-gradient(90deg, var(--line-soft) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
        }}
      />

      {/* Side rail labels */}
      <div
        style={{
          position: "absolute",
          left: 32,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          zIndex: 2,
        }}
        className="hide-md"
      >
        <span className="vtext">VSY · 2026</span>
        <span style={{ width: 1, height: 60, background: "var(--line)" }} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 32,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          zIndex: 2,
        }}
        className="hide-md"
      >
        <span style={{ width: 1, height: 60, background: "var(--line)" }} />
        <span className="vtext">Personal Injury Law</span>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "140px 32px 120px",
        }}
      >
        {/* Big logo lockup */}
        <div className="reveal in" style={{ marginBottom: 48, position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-full.png"
            alt="Visory"
            style={{
              width: 220,
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 60px oklch(58% 0.10 78 / 0.18))",
            }}
          />
        </div>

        {/* Motto pill */}
        <div
          className="reveal in"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid var(--accent-line)",
            padding: "8px 18px",
            marginBottom: 36,
          }}
        >
          <span className="pulse-dot" />
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 500,
            }}
          >
            {MOTTO}
          </span>
        </div>

        <h1
          className="display display-lg reveal in"
          style={{ maxWidth: 1100, marginBottom: 36 }}
        >
          {HEADLINE.split("|").map((part, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {i === 1 ? <em>{part.trim()}</em> : part}
            </Fragment>
          ))}
        </h1>

        <p
          className="reveal in"
          style={{
            fontSize: 18,
            color: "var(--fg-muted)",
            maxWidth: 720,
            lineHeight: 1.65,
            marginBottom: 48,
            textWrap: "pretty",
          }}
        >
          {SUBHEAD}
        </p>

        {/* CTAs */}
        <div
          className="reveal in"
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            className="btn-primary"
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Strategy Call →
          </a>
          <a className="btn-ghost" href="#calculator">
            Run the Numbers
          </a>
        </div>
      </div>

      <HeroTicker />
    </section>
  );
}
