export function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "AI Outreach Campaigns",
      body: "Automated follow-up sequences that keep your firm top of mind and convert more leads into signed retainers — without your intake team doing the manual work.",
    },
    {
      num: "02",
      title: "SEO & Organic Visibility",
      body: "Long-term search optimization that builds consistent inbound traffic to your firm. Every month, more qualified claimants find you before they find a competitor.",
    },
    {
      num: "03",
      title: "CRM Setup & Automation",
      body: "Your entire pipeline — every lead, every follow-up, every status — in one fully automated system. Nothing falls through the cracks.",
    },
  ];
  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--bg-elev)" }}
    >
      <div className="container">
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div className="kicker-line">
            <span className="eyebrow">Add-On Services</span>
          </div>
          <h2 className="display display-md" style={{ marginBottom: 24 }}>
            We also help you <em>close more</em> of what you get.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--fg-muted)",
              maxWidth: 720,
              margin: 0,
            }}
          >
            Our core offering is leads. If you want to build the systems around
            them, these add-ons help you convert more and scale faster.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--line-soft)",
            border: "1px solid var(--line-soft)",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal lift-card"
              style={{
                background: "var(--bg-elev)",
                borderRadius: 0,
                border: 0,
                padding: "44px 36px",
                minHeight: 320,
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  marginBottom: 28,
                  letterSpacing: "0.22em",
                }}
              >
                — {s.num}
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: 26,
                  fontWeight: 400,
                  color: "var(--fg)",
                  margin: "0 0 16px",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--fg-muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
