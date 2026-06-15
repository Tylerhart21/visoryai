const BOOK_URL =
  "https://outlook.office.com/book/MeetingwithVisoryAICopy@visoryaiconsulting.com/?ismsaljsauthenabled";

export function GuaranteeSection() {
  return (
    <section
      id="guarantee"
      className="section"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(76% 0.09 78 / 0.08) 0%, transparent 60%)",
          }}
        />
      </div>
      <div
        className="container reveal"
        style={{ position: "relative", textAlign: "center", maxWidth: 900 }}
      >
        {/* Seal mark */}
        <div
          style={{ position: "relative", width: 120, height: 120, margin: "0 auto 48px" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1px solid var(--accent-line)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 12,
              borderRadius: "50%",
              border: "1px solid var(--accent-line)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 24,
              borderRadius: "50%",
              background: "var(--accent-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--accent)" }}
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
        </div>
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          The Guarantee
        </div>
        <h2 className="display display-md" style={{ marginBottom: 28 }}>
          Qualified Cases Delivered — <em>or we don&apos;t stop.</em>
        </h2>
        <p className="pull" style={{ color: "var(--fg)", marginBottom: 28 }}>
          We stand behind every lead we send. If quality falls short of what we
          promised, we make it right.
        </p>
        <p
          style={{
            fontSize: 16,
            color: "var(--fg-muted)",
            maxWidth: 640,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          No fine print. No excuses. If we fall short, we keep working at no
          extra cost until you&apos;re seeing real results.
        </p>
        <a
          className="btn-primary"
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Your Free Strategy Call →
        </a>
      </div>
    </section>
  );
}
