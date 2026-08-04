"use client";

import { useEffect } from "react";

export function SiteMotion() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "main > section",
          ".statement-grid > *",
          ".business-jump-card",
          ".team-row",
          ".motion-item",
          ".motion-image",
          "article",
          "form",
          ".field",
          "footer a",
          "main [style*='background-image']",
        ].join(","),
      ),
    );

    targets.forEach((target, index) => {
      target.classList.add("motion-reveal");
      if (target.getAttribute("style")?.includes("background-image")) {
        target.classList.add("motion-image");
      }
      target.style.setProperty("--motion-delay", `${Math.min(index % 10, 9) * 90}ms`);
    });

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
