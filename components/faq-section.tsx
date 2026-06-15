"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How quickly will I start receiving leads?",
    a: "First leads can be delivered as soon as the next day, and most firms are fully onboarded and live within 7–14 days. After your discovery call, we configure targeting around your case types and jurisdictions, then start delivery as soon as the first claimants are screened and verified.",
  },
  {
    q: "Are the leads exclusive to my firm?",
    a: "Yes. Every lead we deliver is 100% exclusive — never sold or shared with another firm. When you receive a lead, you are the only attorney being introduced to that claimant.",
  },
  {
    q: "How does the pricing work?",
    a: "You pay per lead — no monthly retainers, no setup costs, no long-term lock-ins. Choose Exclusive Leads, Live Transfers, or Signed Retainers; budget what fits your firm; and we deliver on a per-unit basis.",
  },
  {
    q: "What case types do you work with?",
    a: "We focus exclusively on motor vehicle accidents — including standard MVAs, rideshare collisions, truck and commercial vehicle accidents, pedestrian injury, and uninsured motorist claims.",
  },
  {
    q: "What if the leads aren't converting?",
    a: "We treat lead quality as our problem, not yours. If conversion is below benchmark, we tighten qualification, refine sources, and replace any lead that fails our quality standard at no cost. We work until you see results.",
  },
  {
    q: "Do you offer the outreach and CRM services separately from leads?",
    a: "Yes. While leads are our core product, AI Outreach, SEO, and CRM Setup can each be engaged independently or bundled with your lead program — whichever fits your stack.",
  },
];

interface FAQItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ q, a, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform .35s",
            color: isOpen ? "var(--accent)" : "var(--fg-dim)",
          }}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <div className={"faq-a " + (isOpen ? "open" : "")}>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, maxWidth: 760 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section" style={{ background: "var(--bg-elev)" }}>
      <div className="container reveal">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div style={{ position: "sticky", top: 120 }}>
            <div className="kicker-line">
              <span className="eyebrow">Common Questions</span>
            </div>
            <h2 className="display display-sm" style={{ marginBottom: 24 }}>
              Frequently <em>asked.</em>
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "var(--fg-muted)",
                maxWidth: 280,
                margin: 0,
              }}
            >
              Don&apos;t see your question? Book a strategy call and we&apos;ll
              answer it directly.
            </p>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <FAQItem
                key={i}
                q={f.q}
                a={f.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
