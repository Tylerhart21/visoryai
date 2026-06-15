"use client";

export function ProcessSection() {
  const steps = [
    {
      n: "01",
      title: "Discovery Call",
      body: "We learn about your firm, your ideal case profile, and your goals. Everything is built around your specific market — no generic playbooks.",
    },
    {
      n: "02",
      title: "Lead Strategy Setup",
      body: "We identify the highest-intent channels for your case types and configure targeting to attract claimants ready to sign — not just browsing.",
    },
    {
      n: "03",
      title: "Leads Delivered",
      body: "Qualified, exclusive leads start flowing directly to your intake team. Full contact details and qualification notes included — ready to close.",
    },
    {
      n: "04",
      title: "Ongoing Optimization",
      body: "We monitor performance, refine targeting, and ensure lead quality stays high. You get better results over time, not just at launch.",
    },
  ];
  return (
    <section id="process" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div
          className="reveal"
          style={{
            marginBottom: 80,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "end",
          }}
        >
          <div>
            <div className="kicker-line">
              <span className="eyebrow">How It Works</span>
            </div>
            <h2 className="display display-md" style={{ marginBottom: 0 }}>
              Simple. Fast. <em>Effective.</em>
            </h2>
          </div>
          <div style={{ maxWidth: 360 }}>
            <p style={{ fontSize: 16, color: "var(--fg-muted)", margin: 0 }}>
              From first call to first lead — a straightforward process built
              around your firm.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            border: "1px solid var(--line-soft)",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal step-card"
              style={{
                padding: "40px 32px 48px",
                borderRight: i < 3 ? "1px solid var(--line-soft)" : "none",
                position: "relative",
                transition: "background .35s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--bg-elev)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div className="step-num" style={{ marginBottom: 28 }}>
                {s.n}
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "var(--fg)",
                  margin: "0 0 14px",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--fg-muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
              {/* Connecting tick */}
              {i < 3 && (
                <span
                  style={{
                    position: "absolute",
                    right: -5,
                    top: 60,
                    width: 9,
                    height: 9,
                    background: "var(--bg)",
                    border: "1px solid var(--accent-line)",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
