"use client";

import { useEffect } from "react";

/**
 * Reproduces the two global behaviors the prototype ran at the App level:
 *  - reveal-on-scroll: add `.in` to `.reveal` elements as they enter view
 *  - smooth in-page scrolling for `#anchor` links, offset for the fixed header
 * Renders nothing.
 */
export function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let obs: IntersectionObserver | null = null;

    if (reduce) {
      document
        .querySelectorAll(".reveal:not(.in)")
        .forEach((el) => el.classList.add("in"));
    } else {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              obs?.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      document
        .querySelectorAll(".reveal:not(.in)")
        .forEach((el) => obs!.observe(el));
    }

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const a = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id.length < 2) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    };
    document.addEventListener("click", handler);

    return () => {
      obs?.disconnect();
      document.removeEventListener("click", handler);
    };
  }, []);

  return null;
}
