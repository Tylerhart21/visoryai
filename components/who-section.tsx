export function WhoSection() {
  const caseTypes = [
    "Motor vehicle accidents",
    "Rideshare accidents",
    "Truck & commercial vehicle",
    "Pedestrian accidents",
    "Uninsured motorist claims",
  ];
  return (
    <section
      id="who"
      className="section"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--line-soft)" }}
    >
      <div className="container">
        <div className="reveal" style={{ marginBottom: 80 }}>
          <div className="kicker-line">
            <span className="eyebrow">Who We Serve</span>
          </div>
          <h2 className="display display-md" style={{ maxWidth: 1100 }}>
            Built exclusively for <em>personal injury law.</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div className="reveal" style={{ gridColumn: "span 7" }}>
            <p className="pull" style={{ marginBottom: 32, color: "var(--fg)" }}>
              We work exclusively with PI attorneys and law firms specializing in
              motor vehicle accidents.
            </p>
            <p
              style={{
                fontSize: 17,
                color: "var(--fg-muted)",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              Every lead is pre-qualified, exclusive to your firm, and never
              shared with a competing attorney. Whether you&apos;re a solo
              practitioner building your caseload or an established firm looking
              to scale, we deliver the cases to make it happen.
            </p>
            <p
              style={{
                fontSize: 14,
                color: "var(--accent)",
                letterSpacing: "0.04em",
              }}
            >
              Your competitors are still waiting on referrals. You don&apos;t
              have to.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              gridColumn: "span 5",
              borderLeft: "1px solid var(--accent-line)",
              paddingLeft: 32,
            }}
          >
            <div className="eyebrow-dim" style={{ marginBottom: 24 }}>
              Cases We Source
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {caseTypes.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 0",
                    borderBottom:
                      i < caseTypes.length - 1
                        ? "1px solid var(--line-soft)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--fg-dim)",
                      minWidth: 24,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="serif"
                    style={{ fontSize: 22, color: "var(--fg)", fontWeight: 400 }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
