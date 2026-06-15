"use client";

import { useState } from "react";

export function EmailSection() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setState("submitting");
    const subject = encodeURIComponent(
      `New market notification request — ${first} ${last}`.trim(),
    );
    const body = encodeURIComponent(
      `New market-availability request from the Visory site:\n\n` +
        `Name: ${first} ${last}\n` +
        `Email: ${email}\n` +
        `Firm: ${firm || "(not provided)"}\n\n` +
        `Please reach out when their market opens.`,
    );
    // Open the visitor's mail client addressed to Tyler with the form details prefilled.
    window.location.href = `mailto:tyler@visoryaiconsulting.com?subject=${subject}&body=${body}`;
    setTimeout(() => setState("done"), 700);
  };

  return (
    <section
      id="email"
      className="section-tight"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--line-soft)" }}
    >
      <div className="container reveal" style={{ maxWidth: 680 }}>
        <div
          style={{
            border: "1px solid var(--accent-line)",
            padding: "56px 48px",
            textAlign: "center",
            background:
              "linear-gradient(180deg, rgba(201,169,110,0.04), transparent)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Stay In The Loop
          </div>
          <h2 className="display display-sm" style={{ marginBottom: 16 }}>
            Get notified when <em>your market opens.</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--fg-muted)",
              maxWidth: 480,
              margin: "0 auto 36px",
            }}
          >
            We work with one firm per market. Enter your details and we&apos;ll
            reach out when availability opens in your area.
          </p>
          {state === "done" ? (
            <div style={{ padding: "32px 0" }}>
              <div
                className="serif"
                style={{
                  fontSize: 28,
                  color: "var(--accent)",
                  fontWeight: 400,
                  marginBottom: 8,
                }}
              >
                Thank you, {first || "counselor"}.
              </div>
              <p style={{ fontSize: 14, color: "var(--fg-muted)", margin: 0 }}>
                We&apos;ll reach out as soon as your market opens.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <input
                  type="text"
                  placeholder="First name"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  className="email-field"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  className="email-field"
                />
              </div>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-field"
                required
              />
              <input
                type="text"
                placeholder="Firm name (optional)"
                value={firm}
                onChange={(e) => setFirm(e.target.value)}
                className="email-field"
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ justifyContent: "center", marginTop: 8 }}
                disabled={state === "submitting"}
              >
                {state === "submitting" ? "Submitting…" : "Get Notified →"}
              </button>
              <p style={{ fontSize: 11, color: "var(--fg-dim)", marginTop: 4 }}>
                No spam. Unsubscribe any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
