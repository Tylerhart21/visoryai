"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#who", label: "Who We Serve" },
  { href: "#process", label: "Process" },
  { href: "#calculator", label: "Calculator" },
  { href: "#comparison", label: "Compare" },
  { href: "#faq", label: "FAQ" },
];

const BOOK_URL =
  "https://outlook.office.com/book/MeetingwithVisoryAICopy@visoryaiconsulting.com/?ismsaljsauthenabled";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"site-header " + (scrolled ? "scrolled" : "")}>
      <div
        className="container-wide"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 32,
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifySelf: "start",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt="Visory"
            width={36}
            height={36}
            style={{ objectFit: "contain" }}
          />
        </a>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            justifySelf: "center",
          }}
          className="hide-md"
        >
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            justifySelf: "end",
          }}
        >
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "10px 18px", fontSize: 11 }}
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
