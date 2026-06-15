import { Fragment } from "react";

function X() {
  return (
    <span className="cmp-mark">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ color: "var(--fg-faint)" }}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </span>
  );
}

function Check() {
  return (
    <span className="cmp-mark">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "var(--accent)" }}
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export function ComparisonSection() {
  const rows = [
    {
      label: "Lead exclusivity",
      other: "Shared with multiple competitors",
      visory: "100% exclusive, always",
    },
    {
      label: "Lead quality",
      other: "Unverified, high volume",
      visory: "Pre-qualified, high-intent only",
    },
    {
      label: "Pricing model",
      other: "Monthly retainer regardless of results",
      visory: "Pay per lead — no results, no pay",
    },
    {
      label: "Contract terms",
      other: "Long-term lock-ins",
      visory: "Flexible, no long-term commitment",
    },
    {
      label: "Transparency",
      other: "Black box — no insight into sources",
      visory: "Full visibility into every lead",
    },
    {
      label: "Guarantee",
      other: "None",
      visory: "We work until you see results",
    },
  ];

  return (
    <section id="comparison" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div className="kicker-line">
            <span className="eyebrow">The Difference</span>
          </div>
          <h2 className="display display-md" style={{ marginBottom: 24 }}>
            Not all leads are <em>created equal.</em>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--fg-muted)",
              maxWidth: 640,
              margin: 0,
            }}
          >
            Here&apos;s how Visory AI compares to typical lead vendors.
          </p>
        </div>

        <div className="reveal" style={{ border: "1px solid var(--line-soft)" }}>
          <div className="cmp-grid">
            <div className="cmp-head"></div>
            <div className="cmp-head" style={{ textAlign: "left" }}>
              <span className="eyebrow-dim">Other Vendors</span>
            </div>
            <div className="cmp-head visory-col" style={{ textAlign: "left" }}>
              <span className="eyebrow">Visory AI</span>
            </div>

            {rows.map((r, i) => (
              <Fragment key={i}>
                <div
                  className="cmp-row-label serif"
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {r.label}
                </div>
                <div className="cmp-cell">
                  <X />
                  <span style={{ color: "var(--fg-dim)" }}>{r.other}</span>
                </div>
                <div className="cmp-cell visory-col">
                  <Check />
                  <span style={{ color: "var(--fg)" }}>{r.visory}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
