export function ExpectationsSection() {
  const cards = [
    {
      eyebrow: "01",
      title: "Exclusive Leads",
      body: "Every lead is yours alone — never sold or shared with another firm. Each prospect has shown real intent and is actively looking for representation right now.",
    },
    {
      eyebrow: "02",
      title: "Pre-Qualified Cases",
      body: "We verify intent, injury, and fit before a lead reaches you. No tire-kickers. No time-wasters. Just claimants ready to sign.",
    },
    {
      eyebrow: "03",
      title: "Fast Delivery",
      body: "First leads can arrive as soon as the next day, with most firms onboarded and live within 7–14 days. No waiting months to see if it works.",
    },
    {
      eyebrow: "04",
      title: "Full Transparency",
      body: "You know exactly where every lead came from, how it was qualified, and what you paid. No black boxes, ever.",
    },
  ];
  const stats = [
    { v: "100%", l: "Exclusive — never shared" },
    { v: "24h", l: "Possible first lead" },
    { v: "3×", l: "Average client ROI" },
  ];
  return (
    <section
      id="expectations"
      className="section"
      style={{ background: "var(--bg-elev)" }}
    >
      <div className="container">
        <div className="reveal" style={{ marginBottom: 72 }}>
          <div className="kicker-line">
            <span className="eyebrow">What You&apos;ll Receive</span>
          </div>
          <h2 className="display display-md" style={{ marginBottom: 24 }}>
            What should you <em>expect?</em>
          </h2>
          <p style={{ fontSize: 18, color: "var(--fg-muted)", maxWidth: 640 }}>
            Real results — not vanity metrics. We focus on what actually grows
            your caseload.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            background: "var(--line-soft)",
            border: "1px solid var(--line-soft)",
          }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className="reveal lift-card"
              style={{
                background: "var(--bg-elev)",
                borderRadius: 0,
                border: 0,
                padding: "44px 40px",
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--accent)",
                  marginBottom: 20,
                  letterSpacing: "0.18em",
                }}
              >
                — {c.eyebrow}
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: 30,
                  fontWeight: 400,
                  color: "var(--fg)",
                  marginTop: 0,
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  color: "var(--fg-muted)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stat strip */}
        <div
          className="reveal"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid var(--line-soft)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "36px 32px",
                textAlign: "center",
                borderRight: i < 2 ? "1px solid var(--line-soft)" : "none",
              }}
            >
              <div
                className="serif"
                style={{
                  fontSize: 56,
                  color: "var(--accent)",
                  fontWeight: 300,
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--fg-muted)",
                  letterSpacing: "0.04em",
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
